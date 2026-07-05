import { describe, it, expect } from "vitest";
import {
  computeWeekBusyness,
  type BusynessDestInfo,
  type BusynessRegionInfo,
  type BusynessPatternInfo,
} from "@/lib/services/busyness-core";

const regionMap = new Map<string, BusynessRegionInfo>([
  ["R1", { id: "R1", name: "Region One", population: 100, hemisphere: "northern" }],
]);

// Two year-round city destinations; A gets 10× the travel weight of B.
const dests: BusynessDestInfo[] = [
  { id: "A", category: "city", basePopularity: 0.5, peakMonths: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "B", category: "city", basePopularity: 0.5, peakMonths: [1,2,3,4,5,6,7,8,9,10,11,12] },
];

function patterns(season: string | null = null): Map<string, BusynessPatternInfo[]> {
  return new Map<string, BusynessPatternInfo[]>([
    ["A", [{ regionId: "R1", weight: 1, season }]],
    ["B", [{ regionId: "R1", weight: 0.1, season }]],
  ]);
}

describe("computeWeekBusyness", () => {
  it("normalizes the busiest destination to 1.0 and scales others down", () => {
    const res = computeWeekBusyness(1, dests, regionMap, patterns(), 100);
    expect(res.get("A")!.normalized).toBe(1);
    expect(res.get("B")!.normalized).toBeCloseTo(0.1, 5);
  });

  it("skips patterns whose season does not match the week", () => {
    // Week 1 is northern winter; a summer-only pattern must not contribute.
    const res = computeWeekBusyness(1, dests, regionMap, patterns("summer"), 100);
    expect(res.size).toBe(0);
  });

  it("applies event boosts and can flip the ranking", () => {
    const res = computeWeekBusyness(1, dests, regionMap, patterns(), 100, {
      eventBoosts: new Map([["B", 10]]),
    });
    expect(res.get("B")!.normalized).toBe(1);
    expect(res.get("A")!.normalized).toBeLessThan(1);
  });

  it("records contributing sources", () => {
    const res = computeWeekBusyness(1, dests, regionMap, patterns(), 100);
    expect(res.get("A")!.sources).toEqual([
      { regionId: "R1", regionName: "Region One", weight: 0.5 },
    ]);
  });
});
