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

interface Matrices {
  monthly: Map<string, number[]>;
  weekly: Map<string, number[]>;
}

let matrices: Matrices | null = null;

function buildMatrices(): Matrices {
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
  const weekly = new Map<string, number[]>();
  for (const d of destinations) {
    monthSums.set(d.id, new Array(MONTHS).fill(0));
    monthCounts.set(d.id, new Array(MONTHS).fill(0));
    weekly.set(d.id, new Array(WEEKS).fill(0));
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
      weekly.get(d.id)![week - 1] = Math.round(normalized * 1000) / 1000;
    }
  }

  const monthly = new Map<string, number[]>();
  for (const d of destinations) {
    const sums = monthSums.get(d.id)!;
    const counts = monthCounts.get(d.id)!;
    monthly.set(
      d.id,
      sums.map((s, i) => (counts[i] > 0 ? Math.round((s / counts[i]) * 1000) / 1000 : 0)),
    );
  }
  return { monthly, weekly };
}

/** Lazily build the destination × month/week matrices once, then memoize. */
function getMatrices(): Matrices {
  if (!matrices) matrices = buildMatrices();
  return matrices;
}

/**
 * Monthly busyness for one destination as 12 values (Jan..Dec), each 0-1 on the
 * same normalized scale the map uses. Returns all zeros for unknown ids.
 */
export function getMonthlyBusyness(destinationId: string): number[] {
  return getMatrices().monthly.get(destinationId) ?? new Array(MONTHS).fill(0);
}

/**
 * Weekly baseline busyness for one destination as 53 values (ISO week 1..53),
 * each 0-1 on the same normalized scale the map uses (no live holiday/event
 * boosts — the "typical year" curve). Returns all zeros for unknown ids.
 */
export function getWeeklyBusyness(destinationId: string): number[] {
  return getMatrices().weekly.get(destinationId) ?? new Array(WEEKS).fill(0);
}
