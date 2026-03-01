import { describe, it, expect } from "vitest";
import { travelPatterns } from "@/lib/data/travel-patterns";

describe("travel patterns data integrity", () => {
  it("has travel patterns loaded", () => {
    expect(travelPatterns.length).toBeGreaterThan(0);
  });

  it("all patterns have sourceRegionId", () => {
    for (const pattern of travelPatterns) {
      expect(pattern.sourceRegionId).toBeTruthy();
      expect(typeof pattern.sourceRegionId).toBe("string");
    }
  });

  it("all patterns have destinationId", () => {
    for (const pattern of travelPatterns) {
      expect(pattern.destinationId).toBeTruthy();
      expect(typeof pattern.destinationId).toBe("string");
    }
  });

  it("all weights are between 0 and 1", () => {
    for (const pattern of travelPatterns) {
      expect(pattern.weight).toBeGreaterThan(0);
      expect(pattern.weight).toBeLessThanOrEqual(1);
    }
  });

  it("all seasons are 'winter', 'summer', or null", () => {
    const validSeasons = ["winter", "summer", null];
    for (const pattern of travelPatterns) {
      expect(validSeasons).toContain(pattern.season);
    }
  });

  it("has patterns with null season (year-round)", () => {
    const yearRound = travelPatterns.filter((p) => p.season === null);
    expect(yearRound.length).toBeGreaterThan(0);
  });

  it("has patterns with 'winter' season", () => {
    const winter = travelPatterns.filter((p) => p.season === "winter");
    expect(winter.length).toBeGreaterThan(0);
  });

  it("has patterns with 'summer' season", () => {
    const summer = travelPatterns.filter((p) => p.season === "summer");
    expect(summer.length).toBeGreaterThan(0);
  });
});
