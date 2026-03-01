import { describe, it, expect } from "vitest";
import { sourceRegions } from "@/lib/data/source-regions";
import type { Hemisphere, WorldRegion } from "@/types";

const validHemispheres: Hemisphere[] = ["northern", "southern", "equatorial"];
const validRegions: WorldRegion[] = [
  "europe",
  "asia",
  "americas",
  "oceania",
  "africa",
  "middle-east",
];

describe("source regions data integrity", () => {
  it("has source regions loaded", () => {
    expect(sourceRegions.length).toBeGreaterThan(0);
  });

  it("all regions have required fields", () => {
    for (const region of sourceRegions) {
      expect(region.id).toBeTruthy();
      expect(typeof region.id).toBe("string");

      expect(region.countryCode).toBeTruthy();
      expect(typeof region.countryCode).toBe("string");

      expect(region.subdivisionCode).toBeTruthy();
      expect(typeof region.subdivisionCode).toBe("string");

      expect(region.name).toBeTruthy();
      expect(typeof region.name).toBe("string");

      expect(typeof region.population).toBe("number");
      expect(typeof region.lat).toBe("number");
      expect(typeof region.lng).toBe("number");

      expect(region.hemisphere).toBeTruthy();
      expect(typeof region.hemisphere).toBe("string");

      expect(region.region).toBeTruthy();
      expect(typeof region.region).toBe("string");
    }
  });

  it("all populations are greater than 0", () => {
    for (const region of sourceRegions) {
      expect(region.population).toBeGreaterThan(0);
    }
  });

  it("all hemispheres are valid", () => {
    for (const region of sourceRegions) {
      expect(validHemispheres).toContain(region.hemisphere);
    }
  });

  it("all regions have valid WorldRegion values", () => {
    for (const region of sourceRegions) {
      expect(validRegions).toContain(region.region);
    }
  });

  it("has no duplicate IDs", () => {
    const ids = sourceRegions.map((r) => r.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all latitudes are between -90 and 90", () => {
    for (const region of sourceRegions) {
      expect(region.lat).toBeGreaterThanOrEqual(-90);
      expect(region.lat).toBeLessThanOrEqual(90);
    }
  });

  it("all longitudes are between -180 and 180", () => {
    for (const region of sourceRegions) {
      expect(region.lng).toBeGreaterThanOrEqual(-180);
      expect(region.lng).toBeLessThanOrEqual(180);
    }
  });
});
