import type { Hemisphere } from "@/types";
import { getSeasonalCapacity, getAttractiveness } from "../data/capacity";

/**
 * Pure, database-free core of the crowdedness model.
 *
 * This is the single source of truth for how a destination's weekly busyness
 * is derived. Both the map heatmap precompute (services/heatmap.ts, with live
 * school-holiday and event boosts) and the seasonal destination pages
 * (services/destination-busyness.ts, baseline only) call computeWeekBusyness,
 * so the two views can never drift apart again.
 */

export interface ContributingSource {
  regionId: string;
  regionName: string;
  weight: number;
}

export interface BusynessRegionInfo {
  id: string;
  name: string;
  population: number;
  hemisphere: Hemisphere;
}

export interface BusynessPatternInfo {
  regionId: string;
  weight: number;
  season: string | null;
}

export interface BusynessDestInfo {
  id: string;
  category: string;
  basePopularity: number;
  peakMonths: number[];
  capacityOverride?: number | null;
}

export interface WeekContext {
  /** Source regions currently on school holiday (get a traffic boost). */
  onHolidayRegionIds?: Set<string>;
  /** destinationId -> summed event trafficBoost active this week. */
  eventBoosts?: Map<string, number>;
  /** Multiplier applied to contributions from regions on holiday. */
  holidayBoost?: number;
}

export interface BusynessResult {
  /** Raw summed traffic. */
  score: number;
  /** Traffic divided by seasonal capacity. */
  congestion: number;
  /** Congestion normalized to 0-1 against the week's 95th percentile. */
  normalized: number;
  sources: ContributingSource[];
}

/** Regions on holiday contribute this much more than baseline. */
export const DEFAULT_HOLIDAY_BOOST = 1.5;

/**
 * Determines the season for a given ISO week number, accounting for hemisphere.
 * Northern hemisphere: Winter weeks 44-14 (Nov-Apr), Summer weeks 22-36 (Jun-Sep)
 * Southern hemisphere: Inverted — Summer weeks 44-14, Winter weeks 22-36
 * Equatorial: Always "shoulder" (all patterns match)
 */
export function getSeasonForWeek(
  week: number,
  hemisphere: Hemisphere = "northern",
): "winter" | "summer" | "shoulder" {
  if (hemisphere === "equatorial") return "shoulder";

  const isNorthernWinter = week >= 44 || week <= 14;
  const isNorthernSummer = week >= 22 && week <= 36;

  if (hemisphere === "southern") {
    if (isNorthernWinter) return "summer";
    if (isNorthernSummer) return "winter";
    return "shoulder";
  }

  // Northern hemisphere (default)
  if (isNorthernWinter) return "winter";
  if (isNorthernSummer) return "summer";
  return "shoulder";
}

/**
 * Check if a travel pattern's season matches the current week's season
 * for the source region's hemisphere.
 * - null season = year-round, always matches
 * - shoulder season: both winter and summer patterns apply
 */
export function seasonMatches(patternSeason: string | null, weekSeason: string): boolean {
  if (patternSeason === null) return true;
  if (weekSeason === "shoulder") return true;
  return patternSeason === weekSeason;
}

/**
 * Compute normalized busyness (0-1) for every destination in a single ISO week.
 *
 * Mirrors the per-week body of precomputeHeatmap exactly: raw traffic from
 * seasonal travel patterns (× population share × base popularity × holiday
 * boost × attractiveness) plus event boosts, converted to congestion via
 * seasonal capacity, then normalized against the week's 95th-percentile
 * congestion so the scale stays comparable across weeks.
 */
export function computeWeekBusyness(
  week: number,
  destinations: BusynessDestInfo[],
  regionMap: Map<string, BusynessRegionInfo>,
  patternsByDest: Map<string, BusynessPatternInfo[]>,
  maxPopulation: number,
  ctx: WeekContext = {},
): Map<string, BusynessResult> {
  const onHolidayRegionIds = ctx.onHolidayRegionIds ?? new Set<string>();
  const eventBoosts = ctx.eventBoosts ?? new Map<string, number>();
  const holidayBoost = ctx.holidayBoost ?? DEFAULT_HOLIDAY_BOOST;

  const destScores = new Map<
    string,
    { score: number; congestion: number; sources: ContributingSource[] }
  >();

  for (const dest of destinations) {
    let totalScore = 0;
    const sources: ContributingSource[] = [];
    const patterns = patternsByDest.get(dest.id) ?? [];
    const attractiveness = getAttractiveness(dest.peakMonths, week);

    for (const pattern of patterns) {
      const region = regionMap.get(pattern.regionId);
      if (!region) continue;

      const hemisphere = region.hemisphere ?? "northern";
      const season = getSeasonForWeek(week, hemisphere);
      if (!seasonMatches(pattern.season, season)) continue;

      const populationFactor = region.population / maxPopulation;
      const boost = onHolidayRegionIds.has(region.id) ? holidayBoost : 1.0;
      const contribution =
        pattern.weight * populationFactor * dest.basePopularity * boost * attractiveness;

      totalScore += contribution;
      sources.push({
        regionId: region.id,
        regionName: region.name,
        weight: Math.round(contribution * 1000) / 1000,
      });
    }

    const eventBoost = eventBoosts.get(dest.id);
    if (eventBoost) {
      totalScore += eventBoost * dest.basePopularity;
    }

    if (totalScore > 0) {
      const capacity = getSeasonalCapacity(
        dest.category,
        dest.peakMonths,
        week,
        dest.capacityOverride ?? undefined,
      );
      const congestion = totalScore / capacity;
      destScores.set(dest.id, { score: totalScore, congestion, sources });
    }
  }

  // Normalize congestion per-week using the 95th percentile (not the max) so a
  // single extreme outlier can't compress the whole scale.
  const congestionValues = [...destScores.values()]
    .map((e) => e.congestion)
    .sort((a, b) => a - b);
  const p95Index = Math.floor(congestionValues.length * 0.95);
  const weekNorm = congestionValues[p95Index] ?? 1;

  const result = new Map<string, BusynessResult>();
  for (const [id, entry] of destScores) {
    const normalized =
      weekNorm > 0
        ? Math.round(Math.min(entry.congestion / weekNorm, 1) * 1000) / 1000
        : 0;
    result.set(id, {
      score: entry.score,
      congestion: entry.congestion,
      normalized,
      sources: entry.sources,
    });
  }
  return result;
}
