import { describe, it, expect } from "vitest";
import { CATEGORY_CAPACITY, getSeasonalCapacity, getAttractiveness } from "@/lib/data/capacity";

describe("CATEGORY_CAPACITY", () => {
  const expectedCategories = [
    "city",
    "cultural",
    "beach",
    "tropical",
    "ski",
    "nature",
    "lake",
    "island",
    "safari",
    "mountain",
    "desert",
  ];

  it("contains all expected categories", () => {
    for (const cat of expectedCategories) {
      expect(CATEGORY_CAPACITY).toHaveProperty(cat);
      expect(CATEGORY_CAPACITY[cat].peak).toBeGreaterThan(0);
      expect(CATEGORY_CAPACITY[cat].offPeak).toBeGreaterThan(0);
      expect(CATEGORY_CAPACITY[cat].peak).toBeGreaterThanOrEqual(
        CATEGORY_CAPACITY[cat].offPeak,
      );
    }
  });
});

describe("getAttractiveness", () => {
  it("returns 1.0 for year-round destinations (all 12 months)", () => {
    const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(getAttractiveness(allMonths, 1)).toBe(1.0);
    expect(getAttractiveness(allMonths, 26)).toBe(1.0);
    expect(getAttractiveness(allMonths, 52)).toBe(1.0);
  });

  it("returns 1.0 for a peak month", () => {
    // Summer beach: peak months 5-9, week 30 ≈ July -> peak
    expect(getAttractiveness([5, 6, 7, 8, 9], 30)).toBe(1.0);
  });

  it("returns 0.25 for an adjacent month", () => {
    // Peak months 5-9, month 4 (April) is adjacent to 5
    // Week 15 ≈ April -> adjacent
    expect(getAttractiveness([5, 6, 7, 8, 9], 15)).toBe(0.25);
  });

  it("returns 0.05 for a far-off month", () => {
    // Peak months 5-9, month 1 (January) is not adjacent
    // Week 1 ≈ January -> far off
    expect(getAttractiveness([5, 6, 7, 8, 9], 1)).toBe(0.05);
  });

  it("handles wrap-around: December adjacent to January peak", () => {
    // Peak months include January (1), so December (12) is adjacent
    // Week 50 ≈ December -> adjacent to month 1
    expect(getAttractiveness([1, 2, 3], 50)).toBe(0.25);
  });

  it("handles wrap-around: January adjacent to December peak", () => {
    // Peak months include December (12), so January (1) is adjacent
    // Week 1 ≈ January -> adjacent to month 12
    expect(getAttractiveness([11, 12], 1)).toBe(0.25);
  });

  it("Everest monsoon: June (adjacent to May peak) gets 0.25", () => {
    // peakMonths [3,4,5,10,11], June = adjacent to May
    // Week 24 ≈ June
    expect(getAttractiveness([3, 4, 5, 10, 11], 24)).toBe(0.25);
  });

  it("Everest monsoon: July (far off) gets 0.05", () => {
    // peakMonths [3,4,5,10,11], July = not adjacent to any peak
    // Week 30 ≈ July
    expect(getAttractiveness([3, 4, 5, 10, 11], 30)).toBe(0.05);
  });
});

describe("getSeasonalCapacity", () => {
  // Beach: peak=2.0, offPeak=0.5

  it("returns peak capacity during peak months", () => {
    // Beach, summer peak months [5,6,7,8,9], week 30 ≈ July = peak
    // capacity = 0.5 + (2.0 - 0.5) * 1.0 = 2.0
    const result = getSeasonalCapacity("beach", [5, 6, 7, 8, 9], 30);
    expect(result).toBe(2.0);
  });

  it("returns midpoint capacity during far-off months (capacity floor at 0.5)", () => {
    // Beach, summer peak months [5,6,7,8,9], week 1 ≈ January = far off
    // attractiveness=0.05 but capacity uses max(0.05, 0.5)=0.5
    // capacity = 0.5 + 1.5 * 0.5 = 1.25
    const result = getSeasonalCapacity("beach", [5, 6, 7, 8, 9], 1);
    expect(result).toBeCloseTo(1.25, 10);
  });

  it("returns peak capacity for ski in winter months", () => {
    // Ski: peak=1.5, offPeak=0.3, winter peak months [11,12,1,2,3], week 1 ≈ Jan = peak
    const result = getSeasonalCapacity("ski", [11, 12, 1, 2, 3], 1);
    expect(result).toBe(1.5);
  });

  it("returns midpoint for ski in summer months (capacity floor at 0.5)", () => {
    // Ski, winter peak months [11,12,1,2,3], week 30 ≈ July = far off
    // attractiveness=0.05 capped to 0.5
    // capacity = 0.3 + (1.5 - 0.3) * 0.5 = 0.9
    const result = getSeasonalCapacity("ski", [11, 12, 1, 2, 3], 30);
    expect(result).toBeCloseTo(0.9, 10);
  });

  it("returns full peak for year-round destinations", () => {
    // City: peak=5.0, offPeak=4.0, all 12 months
    // attractiveness = 1.0, capacity = 4.0 + 1.0 * 1.0 = 5.0
    const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result = getSeasonalCapacity("city", allMonths, 30);
    expect(result).toBe(5.0);
  });

  it("returns midpoint capacity for adjacent months (floor at 0.5)", () => {
    // Beach, peak [5,6,7,8,9], week 15 ≈ April = adjacent (0.25 -> capped to 0.5)
    // capacity = 0.5 + 1.5 * 0.5 = 1.25
    const result = getSeasonalCapacity("beach", [5, 6, 7, 8, 9], 15);
    expect(result).toBeCloseTo(1.25, 10);
  });

  it("handles capacityOverride during peak months", () => {
    // Override peak=4.0 -> offPeak = 4.0 * 0.25 = 1.0
    // Week 30 = peak -> capacity = 1.0 + 3.0 * 1.0 = 4.0
    const result = getSeasonalCapacity("beach", [5, 6, 7, 8, 9], 30, 4.0);
    expect(result).toBe(4.0);
  });

  it("capacityOverride during off-season uses capacity floor", () => {
    // Override peak=4.0 -> offPeak = 1.0
    // Week 1 = far off, attractiveness=0.05 capped to 0.5
    // capacity = 1.0 + 3.0 * 0.5 = 2.5
    const result = getSeasonalCapacity("beach", [5, 6, 7, 8, 9], 1, 4.0);
    expect(result).toBeCloseTo(2.5, 10);
  });

  it("capacityOverride with year-round returns peak capacity", () => {
    // Override peak=7.0 -> offPeak = 5.6, year-round -> factor 1.0
    // capacity = 5.6 + 1.4 * 1.0 = 7.0
    const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result = getSeasonalCapacity("city", allMonths, 30, 7.0);
    expect(result).toBeCloseTo(7.0, 10);
  });

  it("unknown category returns default capacity during peak", () => {
    // { peak: 1.0, offPeak: 0.5 }, peak month -> 0.5 + 0.5 * 1.0 = 1.0
    const result = getSeasonalCapacity("unknown_category", [11, 12, 1, 2, 3], 1);
    expect(result).toBe(1.0);
  });

  it("unknown category returns midpoint for off-season", () => {
    // { peak: 1.0, offPeak: 0.5 }, far off -> factor capped to 0.5
    // 0.5 + 0.5 * 0.5 = 0.75
    const result = getSeasonalCapacity("unknown_category", [11, 12, 1, 2, 3], 30);
    expect(result).toBeCloseTo(0.75, 10);
  });

  it("unknown category returns peak for year-round", () => {
    const allMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result = getSeasonalCapacity("unknown_category", allMonths, 30);
    expect(result).toBe(1.0);
  });

  it("Everest monsoon: congestion drops dramatically in July", () => {
    // Mountain: peak=0.6, offPeak=0.3, peakMonths=[3,4,5,10,11]
    // October (peak): capacity = 0.3 + 0.3 * 1.0 = 0.6
    // July (far off): capacity = 0.3 + 0.3 * 0.5 = 0.45 (floor)
    // Demand ratio: 0.05 (July) vs 1.0 (October)
    // Congestion ratio: (D*0.05/0.45) / (D/0.6) = 0.067 → ~7% of peak
    const peakMonths = [3, 4, 5, 10, 11];
    const capPeak = getSeasonalCapacity("mountain", peakMonths, 43); // Oct
    const capMonsoon = getSeasonalCapacity("mountain", peakMonths, 30); // Jul
    expect(capPeak).toBe(0.6);
    expect(capMonsoon).toBeCloseTo(0.45, 10);
    // With demand attractiveness: 0.05/0.45 vs 1.0/0.6 → ratio ≈ 0.067
    const congestionRatio = (0.05 / capMonsoon) / (1.0 / capPeak);
    expect(congestionRatio).toBeCloseTo(0.067, 2);
  });
});
