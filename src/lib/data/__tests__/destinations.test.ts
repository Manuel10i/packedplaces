import { describe, it, expect } from "vitest";
import { destinations as allDestinations } from "@/lib/data/destinations";
import type { Destination, WorldRegion } from "@/types";

const validCategories: Destination["category"][] = [
  "ski",
  "beach",
  "city",
  "lake",
  "nature",
  "cultural",
  "safari",
  "island",
  "mountain",
  "desert",
  "tropical",
];

const validRegions: WorldRegion[] = [
  "europe",
  "asia",
  "americas",
  "oceania",
  "africa",
  "middle-east",
];

describe("destinations data integrity", () => {
  it("has destinations loaded", () => {
    expect(allDestinations.length).toBeGreaterThan(0);
  });

  it("all destinations have required fields", () => {
    for (const dest of allDestinations) {
      expect(dest.id).toBeTruthy();
      expect(typeof dest.id).toBe("string");

      expect(dest.name).toBeTruthy();
      expect(typeof dest.name).toBe("string");

      expect(dest.country).toBeTruthy();
      expect(typeof dest.country).toBe("string");

      expect(typeof dest.lat).toBe("number");
      expect(typeof dest.lng).toBe("number");

      expect(dest.category).toBeTruthy();
      expect(typeof dest.category).toBe("string");

      expect(dest.seasonality).toBeTruthy();
      expect(typeof dest.seasonality).toBe("string");

      expect(typeof dest.basePopularity).toBe("number");

      expect(dest.region).toBeTruthy();
      expect(typeof dest.region).toBe("string");
    }
  });

  it("has no duplicate destination IDs", () => {
    const ids = allDestinations.map((d) => d.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all categories are valid", () => {
    for (const dest of allDestinations) {
      expect(validCategories).toContain(dest.category);
    }
  });

  it("all regions are valid WorldRegion values", () => {
    for (const dest of allDestinations) {
      expect(validRegions).toContain(dest.region);
    }
  });

  it("all latitudes are between -90 and 90", () => {
    for (const dest of allDestinations) {
      expect(dest.lat).toBeGreaterThanOrEqual(-90);
      expect(dest.lat).toBeLessThanOrEqual(90);
    }
  });

  it("all longitudes are between -180 and 180", () => {
    for (const dest of allDestinations) {
      expect(dest.lng).toBeGreaterThanOrEqual(-180);
      expect(dest.lng).toBeLessThanOrEqual(180);
    }
  });

  it("all basePopularity values are between 0 and 1", () => {
    for (const dest of allDestinations) {
      expect(dest.basePopularity).toBeGreaterThan(0);
      expect(dest.basePopularity).toBeLessThanOrEqual(1);
    }
  });

  it("all seasonality values are valid", () => {
    const validSeasonalities = ["winter", "summer", "year-round"];
    for (const dest of allDestinations) {
      expect(validSeasonalities).toContain(dest.seasonality);
    }
  });

  it("capacityOverride is a positive number when present", () => {
    for (const dest of allDestinations) {
      if (dest.capacityOverride !== undefined) {
        expect(typeof dest.capacityOverride).toBe("number");
        expect(dest.capacityOverride).toBeGreaterThan(0);
      }
    }
  });
});
