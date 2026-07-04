import type { Hemisphere } from "@/types";
import { destinations } from "../data/destinations";
import { sourceRegions } from "../data/regions";
import { travelPatterns } from "../data/patterns";
import { getMonthForWeek } from "../data/capacity";
import {
  computeWeekBusyness,
  type BusynessDestInfo,
  type BusynessRegionInfo,
  type BusynessPatternInfo,
} from "./busyness-core";

/**
 * Seasonal (baseline) busyness for the static destination pages.
 *
 * Runs the exact same model as the map heatmap (services/busyness-core.ts) over
 * the full year, but from static data and WITHOUT live school-holiday or event
 * boosts — those are week/year specific and belong on the map's time slider,
 * not on a "typical year" seasonal overview. The result is deterministic, so it
 * regenerates automatically on every build whenever the underlying travel data
 * changes, and always agrees with the map's baseline (e.g. a high-capacity city
 * like Gothenburg reads low, not permanently "busy").
 */

const WEEKS = 53;
const MONTHS = 12;

let matrix: Map<string, number[]> | null = null;

function buildMatrix(): Map<string, number[]> {
  const maxPopulation = Math.max(...sourceRegions.map((r) => r.population));

  const regionMap = new Map<string, BusynessRegionInfo>(
    sourceRegions.map((r) => [
      r.id,
      {
        id: r.id,
        name: r.name,
        population: r.population,
        hemisphere: (r.hemisphere as Hemisphere) ?? "northern",
      },
    ]),
  );

  const patternsByDest = new Map<string, BusynessPatternInfo[]>();
  for (const p of travelPatterns) {
    const existing = patternsByDest.get(p.destinationId) ?? [];
    existing.push({ regionId: p.sourceRegionId, weight: p.weight, season: p.season });
    patternsByDest.set(p.destinationId, existing);
  }

  const destInfos: BusynessDestInfo[] = destinations.map((d) => ({
    id: d.id,
    category: d.category,
    basePopularity: d.basePopularity,
    peakMonths: d.peakMonths,
    capacityOverride: d.capacityOverride,
  }));

  // Accumulate weekly normalized scores into their month, then average.
  const monthSums = new Map<string, number[]>();
  const monthCounts = new Map<string, number[]>();
  for (const d of destinations) {
    monthSums.set(d.id, new Array(MONTHS).fill(0));
    monthCounts.set(d.id, new Array(MONTHS).fill(0));
  }

  for (let week = 1; week <= WEEKS; week++) {
    const monthIdx = getMonthForWeek(week) - 1;
    const weekResult = computeWeekBusyness(
      week,
      destInfos,
      regionMap,
      patternsByDest,
      maxPopulation,
    );
    for (const d of destinations) {
      const normalized = weekResult.get(d.id)?.normalized ?? 0;
      monthSums.get(d.id)![monthIdx] += normalized;
      monthCounts.get(d.id)![monthIdx] += 1;
    }
  }

  const result = new Map<string, number[]>();
  for (const d of destinations) {
    const sums = monthSums.get(d.id)!;
    const counts = monthCounts.get(d.id)!;
    result.set(
      d.id,
      sums.map((s, i) => (counts[i] > 0 ? Math.round((s / counts[i]) * 1000) / 1000 : 0)),
    );
  }
  return result;
}

/** Lazily build the full destination × month matrix once, then memoize. */
function getMatrix(): Map<string, number[]> {
  if (!matrix) matrix = buildMatrix();
  return matrix;
}

/**
 * Monthly busyness for one destination as 12 values (Jan..Dec), each 0-1 on the
 * same normalized scale the map uses. Returns all zeros for unknown ids.
 */
export function getMonthlyBusyness(destinationId: string): number[] {
  return getMatrix().get(destinationId) ?? new Array(MONTHS).fill(0);
}
