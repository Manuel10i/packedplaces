/**
 * Month-by-month "quietest places" selection for the /least-crowded hub.
 *
 * Every pick is derived at build time from the same seasonal crowd model the
 * map and destination pages use (services/destination-busyness), so nothing
 * here is a hand-typed ranking. For a given month we surface recognizable
 * destinations that are at their own seasonal low that month, ranked so the
 * genuinely quiet ones come first, and spread across countries for variety.
 */

import type { Destination } from "@/types";
import { destinations } from "@/lib/data/destinations";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { slugForDestination } from "@/lib/destinations";

export const MONTH_SLUGS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export type MonthSlug = (typeof MONTH_SLUGS)[number];

export function allMonthSlugs(): readonly string[] {
  return MONTH_SLUGS;
}

/** 0-based month index for a slug, or -1 if the slug is unknown. */
export function monthIndexForSlug(slug: string): number {
  return MONTH_SLUGS.indexOf(slug as MonthSlug);
}

export interface QuietPick {
  destination: Destination;
  slug: string;
  /** Seasonal busyness (0-1) in the target month. */
  monthScore: number;
  /** This destination's own peak busyness (0-1), for the "vs its peak" line. */
  peakScore: number;
  /** Whole months from the target month to this destination's nearest peak. */
  monthsFromPeak: number;
}

// Only recognizable destinations (top third of the dataset by popularity) are
// eligible, so a month page never surfaces an obscure village nobody searches.
const MIN_POPULARITY = 0.6;
// We recommend shoulder season: close enough to peak that the weather and the
// place are still good, but not the crowded peak itself. A pick must be quiet
// but NOT dead off-season (a frozen, shut-for-winter resort is a bad tip even
// if it is empty), so the month score sits inside a pleasant-but-calm band.
const MIN_MONTH_SCORE = 0.12;
const MAX_MONTH_SCORE = 0.5;
const MAX_PER_COUNTRY = 2;
const PICKS_PER_MONTH = 8;
const MIN_ACCEPTABLE = 6;

interface Scored extends QuietPick {
  isPeak: boolean;
}

/** Circular whole-month distance from a 0-based month to the nearest peak month (1-12). */
function monthsFromNearestPeak(
  monthIndex: number,
  peakMonths: number[],
): number {
  if (peakMonths.length === 0) return 6;
  const m = monthIndex + 1;
  return Math.min(
    ...peakMonths.map((p) => {
      const d = Math.abs(m - p);
      return Math.min(d, 12 - d);
    }),
  );
}

function scoreCandidates(monthIndex: number): Scored[] {
  const out: Scored[] = [];
  for (const d of destinations) {
    if (d.basePopularity < MIN_POPULARITY) continue;
    const scores = getMonthlyBusyness(d.id);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    if (max - min <= 0) continue; // flat curve carries no seasonal signal
    out.push({
      destination: d,
      slug: slugForDestination(d),
      monthScore: scores[monthIndex],
      peakScore: max,
      monthsFromPeak: monthsFromNearestPeak(monthIndex, d.peakMonths),
      isPeak: d.peakMonths.includes(monthIndex + 1),
    });
  }
  // Shoulder proximity first (closest to peak season, best weather), then the
  // quietest of those, then the most recognizable, for stable ordering.
  out.sort(
    (a, b) =>
      a.monthsFromPeak - b.monthsFromPeak ||
      a.monthScore - b.monthScore ||
      b.destination.basePopularity - a.destination.basePopularity,
  );
  return out;
}

function fill(
  candidates: Scored[],
  accept: (c: Scored) => boolean,
): QuietPick[] {
  const perCountry = new Map<string, number>();
  const picks: QuietPick[] = [];
  for (const c of candidates) {
    if (!accept(c)) continue;
    const used = perCountry.get(c.destination.country) ?? 0;
    if (used >= MAX_PER_COUNTRY) continue;
    perCountry.set(c.destination.country, used + 1);
    picks.push({
      destination: c.destination,
      slug: c.slug,
      monthScore: c.monthScore,
      peakScore: c.peakScore,
      monthsFromPeak: c.monthsFromPeak,
    });
    if (picks.length >= PICKS_PER_MONTH) break;
  }
  return picks;
}

/**
 * The best shoulder-season, less-crowded destinations for a month (0-based).
 * Strict pass wants a shoulder month (1-2 months off peak) in a pleasant-but-
 * calm crowd band. Falls back progressively so every month fills, but never
 * recommends a place that is outright busy or in its dead off-season.
 */
export function quietestForMonth(monthIndex: number): QuietPick[] {
  const candidates = scoreCandidates(monthIndex);
  const band = (c: Scored) =>
    c.monthScore >= MIN_MONTH_SCORE && c.monthScore <= MAX_MONTH_SCORE;

  let picks = fill(
    candidates,
    (c) => !c.isPeak && c.monthsFromPeak <= 2 && band(c),
  );
  if (picks.length >= MIN_ACCEPTABLE) return picks;

  // Widen the shoulder window a little.
  picks = fill(
    candidates,
    (c) => !c.isPeak && c.monthsFromPeak <= 3 && band(c),
  );
  if (picks.length >= MIN_ACCEPTABLE) return picks;

  // Last resort: any off-peak month that is calm but not dead, regardless of
  // distance to peak, with a slightly lower floor so the page still fills.
  return fill(
    candidates,
    (c) => !c.isPeak && c.monthScore >= 0.08 && c.monthScore <= MAX_MONTH_SCORE,
  );
}
