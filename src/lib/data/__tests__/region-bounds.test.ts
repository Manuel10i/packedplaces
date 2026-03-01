import { describe, it, expect } from "vitest";
import { REGION_BOUNDS, boundsOverlap } from "@/lib/data/region-bounds";
import type { WorldRegion } from "@/types";

const allRegions: WorldRegion[] = [
  "europe",
  "asia",
  "americas",
  "oceania",
  "africa",
  "middle-east",
];

describe("REGION_BOUNDS", () => {
  it("all world regions have bounds defined", () => {
    for (const region of allRegions) {
      expect(REGION_BOUNDS).toHaveProperty(region);
      const bounds = REGION_BOUNDS[region];
      expect(typeof bounds.north).toBe("number");
      expect(typeof bounds.south).toBe("number");
      expect(typeof bounds.east).toBe("number");
      expect(typeof bounds.west).toBe("number");
    }
  });

  it("north > south for all regions", () => {
    for (const region of allRegions) {
      const bounds = REGION_BOUNDS[region];
      expect(bounds.north).toBeGreaterThan(bounds.south);
    }
  });

  it("bounds have reasonable latitude ranges (-90 to 90)", () => {
    for (const region of allRegions) {
      const bounds = REGION_BOUNDS[region];
      expect(bounds.north).toBeLessThanOrEqual(90);
      expect(bounds.north).toBeGreaterThanOrEqual(-90);
      expect(bounds.south).toBeLessThanOrEqual(90);
      expect(bounds.south).toBeGreaterThanOrEqual(-90);
    }
  });

  it("bounds have reasonable longitude ranges (-180 to 180)", () => {
    for (const region of allRegions) {
      const bounds = REGION_BOUNDS[region];
      expect(bounds.east).toBeLessThanOrEqual(180);
      expect(bounds.east).toBeGreaterThanOrEqual(-180);
      expect(bounds.west).toBeLessThanOrEqual(180);
      expect(bounds.west).toBeGreaterThanOrEqual(-180);
    }
  });
});

describe("boundsOverlap", () => {
  it("returns true for overlapping bounds", () => {
    const viewport = { north: 50, south: 40, east: 20, west: 0 };
    // Europe bounds: north=72, south=35, east=45, west=-25
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(true);
  });

  it("returns true when viewport is fully inside region", () => {
    const viewport = { north: 50, south: 45, east: 10, west: 5 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(true);
  });

  it("returns true when region is fully inside viewport", () => {
    const viewport = { north: 80, south: -60, east: 200, west: -200 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(true);
  });

  it("returns false for non-overlapping bounds (viewport south of region)", () => {
    // Viewport fully south of Europe (south=35)
    const viewport = { north: 30, south: 20, east: 10, west: 0 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(false);
  });

  it("returns false for non-overlapping bounds (viewport north of region)", () => {
    // Viewport fully north of Europe (north=72)
    const viewport = { north: 90, south: 75, east: 10, west: 0 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(false);
  });

  it("returns false for non-overlapping bounds (viewport east of region)", () => {
    // Viewport fully east of Europe (east=45)
    const viewport = { north: 50, south: 40, east: 80, west: 50 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(false);
  });

  it("returns false for non-overlapping bounds (viewport west of region)", () => {
    // Viewport fully west of Europe (west=-25)
    const viewport = { north: 50, south: 40, east: -30, west: -50 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(false);
  });

  it("returns true for bounds that share an edge", () => {
    // Viewport north edge = Europe south edge (35)
    const viewport = { north: 35, south: 20, east: 10, west: 0 };
    const result = boundsOverlap(viewport, REGION_BOUNDS["europe"]);
    expect(result).toBe(true);
  });
});
