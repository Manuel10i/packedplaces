import { describe, it, expect } from "vitest";
import { nearbyDestinations } from "@/lib/nearby-destinations";
import { destinations } from "@/lib/data/destinations";

const sample = destinations[0];

describe("nearbyDestinations", () => {
  it("returns [] for an unknown destination id", () => {
    expect(nearbyDestinations("does-not-exist")).toEqual([]);
  });

  it("returns results for a real destination (never a dead end)", () => {
    const results = nearbyDestinations(sample.id);
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns at most `limit` results and respects a custom limit", () => {
    expect(nearbyDestinations(sample.id).length).toBeLessThanOrEqual(6);
    expect(nearbyDestinations(sample.id, { limit: 3 }).length).toBeLessThanOrEqual(
      3,
    );
  });

  it("never includes the target itself", () => {
    for (const d of nearbyDestinations(sample.id)) {
      expect(d.id).not.toBe(sample.id);
    }
  });

  it("returns distinct destinations", () => {
    const ids = nearbyDestinations(sample.id).map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("orders results by ascending distance from the target", () => {
    const R = 6371;
    const km = (aLat: number, aLng: number, bLat: number, bLng: number) => {
      const dLat = ((bLat - aLat) * Math.PI) / 180;
      const dLng = ((bLng - aLng) * Math.PI) / 180;
      const s =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((aLat * Math.PI) / 180) *
          Math.cos((bLat * Math.PI) / 180) *
          Math.sin(dLng / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(s));
    };
    const results = nearbyDestinations(sample.id);
    const dists = results.map((d) => km(sample.lat, sample.lng, d.lat, d.lng));
    for (let i = 1; i < dists.length; i++) {
      expect(dists[i]).toBeGreaterThanOrEqual(dists[i - 1]);
    }
  });
});
