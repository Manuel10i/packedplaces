import { describe, it, expect } from "vitest";
import { CATEGORY_CAPACITY, getSeasonalCapacity } from "@/lib/data/capacity";

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

describe("getSeasonalCapacity", () => {
  // Beach: peak=2.0, offPeak=0.5, summer seasonality
  // Northern hemisphere (lat > 15): week 30 is summer, week 1 is winter

  it("returns peak capacity when season matches (beach in northern summer)", () => {
    // Beach destination, northern hemisphere (lat=40), summer seasonality, week 30 = summer
    const result = getSeasonalCapacity("beach", 40, "summer", 30);
    expect(result).toBe(2.0); // peak
  });

  it("returns offPeak capacity for opposite season (beach in northern winter)", () => {
    // Beach destination, northern hemisphere (lat=40), summer seasonality, week 1 = winter
    const result = getSeasonalCapacity("beach", 40, "summer", 1);
    expect(result).toBe(0.5); // offPeak
  });

  it("returns peak capacity for ski in northern winter", () => {
    // Ski destination, northern hemisphere (lat=47), winter seasonality, week 1 = winter
    const result = getSeasonalCapacity("ski", 47, "winter", 1);
    expect(result).toBe(1.5); // peak
  });

  it("returns offPeak for ski in northern summer", () => {
    // Ski, northern hemisphere, winter seasonality, week 30 = summer (opposite)
    const result = getSeasonalCapacity("ski", 47, "winter", 30);
    expect(result).toBe(0.3); // offPeak
  });

  it("returns average for year-round seasonality", () => {
    // City, northern hemisphere, year-round, any week
    // city: peak=5.0, offPeak=4.0 -> average = 4.5
    const result = getSeasonalCapacity("city", 48, "year-round", 30);
    expect(result).toBe(4.5);
  });

  it("returns average for shoulder season", () => {
    // Beach, northern hemisphere, summer seasonality, week 20 = shoulder
    // beach: peak=2.0, offPeak=0.5 -> average = 1.25
    const result = getSeasonalCapacity("beach", 40, "summer", 20);
    expect(result).toBe(1.25);
  });

  it("handles capacityOverride by replacing peak and scaling offPeak proportionally", () => {
    // Beach default: peak=2.0, offPeak=0.5, ratio=0.25
    // Override peak=4.0 -> offPeak = 4.0 * 0.25 = 1.0
    // Summer seasonality, week 30 = northern summer (peak) -> returns 4.0
    const result = getSeasonalCapacity("beach", 40, "summer", 30, 4.0);
    expect(result).toBe(4.0);
  });

  it("capacityOverride scales offPeak when in off-season", () => {
    // Beach default: peak=2.0, offPeak=0.5, ratio=0.25
    // Override peak=4.0 -> offPeak = 4.0 * 0.25 = 1.0
    // Summer seasonality, week 1 = northern winter (off-peak) -> returns 1.0
    const result = getSeasonalCapacity("beach", 40, "summer", 1, 4.0);
    expect(result).toBe(1.0);
  });

  it("capacityOverride returns average for year-round seasonality", () => {
    // City default: peak=5.0, offPeak=4.0, ratio=0.8
    // Override peak=7.0 -> offPeak = 7.0 * 0.8 = 5.6
    // Year-round -> average = (7.0 + 5.6) / 2 = 6.3
    const result = getSeasonalCapacity("city", 48, "year-round", 30, 7.0);
    expect(result).toBeCloseTo(6.3, 10);
  });

  it("southern hemisphere inverts seasons (summer destination, week 1 = southern summer)", () => {
    // lat=-30 (southern hemisphere), summer seasonality, week 1
    // In southern hemisphere, week 1 (northern winter) = summer -> peak
    // Beach: peak=2.0
    const result = getSeasonalCapacity("beach", -30, "summer", 1);
    expect(result).toBe(2.0);
  });

  it("southern hemisphere: summer destination in week 30 = winter (off-peak)", () => {
    // lat=-30 (southern hemisphere), summer seasonality, week 30
    // In southern hemisphere, week 30 (northern summer) = winter -> off-peak
    // Beach: offPeak=0.5
    const result = getSeasonalCapacity("beach", -30, "summer", 30);
    expect(result).toBe(0.5);
  });

  it("equatorial always returns shoulder (average)", () => {
    // lat=5 (equatorial, between -15 and 15), any seasonality, any week
    // Beach: peak=2.0, offPeak=0.5 -> average = 1.25
    const result = getSeasonalCapacity("beach", 5, "summer", 30);
    expect(result).toBe(1.25);
  });

  it("unknown category returns default capacity", () => {
    // Unknown category defaults to { peak: 1.0, offPeak: 0.5 }
    // Northern hemisphere, winter seasonality, week 1 (winter) -> peak = 1.0
    const result = getSeasonalCapacity("unknown_category", 48, "winter", 1);
    expect(result).toBe(1.0);
  });

  it("unknown category returns default offPeak for opposite season", () => {
    // Unknown defaults to { peak: 1.0, offPeak: 0.5 }
    // Winter seasonality, week 30 (summer, opposite) -> offPeak = 0.5
    const result = getSeasonalCapacity("unknown_category", 48, "winter", 30);
    expect(result).toBe(0.5);
  });

  it("unknown category returns average for year-round", () => {
    // Unknown defaults to { peak: 1.0, offPeak: 0.5 } -> average = 0.75
    const result = getSeasonalCapacity("unknown_category", 48, "year-round", 30);
    expect(result).toBe(0.75);
  });
});
