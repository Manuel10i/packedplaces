import { destinations } from "@/lib/data/destinations";
import { getWeeklyBusyness } from "@/lib/services/destination-busyness";
import { busynessBand } from "@/lib/busyness-scale";
import type { Destination } from "@/types";

export interface QuietAlternative {
  destination: Destination;
  /** Mean busyness of the alternative during the target's busiest window. */
  peakWindowBusyness: number;
  /** How many bands calmer than the target during that window (>= 1). */
  bandsCalmer: number;
}

interface Options {
  limit?: number;
}

const PEAK_WINDOW = 6; // weeks around the target's busiest week

function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 6371;
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLng = ((bLng - aLng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/** Weeks (0-based indices) forming the target's busiest window. */
function peakWindowWeeks(weekly: number[]): number[] {
  let peak = 0;
  for (let i = 1; i < weekly.length; i++) {
    if (weekly[i] > weekly[peak]) peak = i;
  }
  const half = Math.floor(PEAK_WINDOW / 2);
  const weeks: number[] = [];
  for (let off = -half; off < PEAK_WINDOW - half; off++) {
    weeks.push((peak + off + weekly.length) % weekly.length);
  }
  return weeks;
}

function meanOver(weekly: number[], weeks: number[]): number {
  if (weeks.length === 0) return 0;
  return weeks.reduce((sum, w) => sum + (weekly[w] ?? 0), 0) / weeks.length;
}

/**
 * Similar-but-calmer destinations: same category, preferring nearby / same
 * world-region places, that sit at least one busyness band below the target
 * during the target's own peak weeks. Pure and deterministic — safe on the
 * server at build time and in the client bundle.
 */
export function quietAlternatives(
  destinationId: string,
  { limit = 4 }: Options = {},
): QuietAlternative[] {
  const target = destinations.find((d) => d.id === destinationId);
  if (!target) return [];

  const targetWeekly = getWeeklyBusyness(target.id);
  const window = peakWindowWeeks(targetWeekly);
  const targetPeakBusyness = meanOver(targetWeekly, window);
  const targetBand = busynessBand(targetPeakBusyness);
  if (targetBand === 0) return []; // already quiet — nothing calmer to suggest

  const scored = destinations
    .filter((d) => d.id !== target.id && d.category === target.category)
    .map((d) => {
      const busyness = meanOver(getWeeklyBusyness(d.id), window);
      return {
        destination: d,
        peakWindowBusyness: Math.round(busyness * 1000) / 1000,
        bandsCalmer: targetBand - busynessBand(busyness),
        distanceKm: haversineKm(target.lat, target.lng, d.lat, d.lng),
      };
    })
    .filter((c) => c.bandsCalmer >= 1)
    .map((c) => {
      // Rank: calmer is better, closer is better, same world region is a bonus.
      const proximity = Math.max(0, 1 - c.distanceKm / 4000);
      const regionBonus = c.destination.region === target.region ? 0.5 : 0;
      const calmness = 1 - c.peakWindowBusyness;
      return { ...c, rank: calmness * 1.5 + proximity + regionBonus };
    })
    .sort((a, b) => b.rank - a.rank)
    .slice(0, limit);

  return scored.map(({ destination, peakWindowBusyness, bandsCalmer }) => ({
    destination,
    peakWindowBusyness,
    bandsCalmer,
  }));
}
