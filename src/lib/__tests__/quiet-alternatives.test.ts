import { describe, it, expect } from "vitest";
import { quietAlternatives } from "@/lib/quiet-alternatives";
import { destinations } from "@/lib/data/destinations";
import { getWeeklyBusyness } from "@/lib/services/destination-busyness";

// Pick a real busy destination at test time: sort by weekly peak (this builds
// the memoized busyness matrix once for the whole file) and take the busiest
// one that actually yields alternatives.
const byPeakDesc = [...destinations]
  .map((d) => ({ d, peak: Math.max(...getWeeklyBusyness(d.id)) }))
  .sort((a, b) => b.peak - a.peak);

const target = byPeakDesc.find(({ d }) => quietAlternatives(d.id).length > 0)?.d;

describe("quietAlternatives", () => {
  it("returns [] for an unknown destination id", () => {
    expect(quietAlternatives("does-not-exist")).toEqual([]);
  });

  it("finds a busy destination in the dataset that has alternatives", () => {
    expect(target).toBeDefined();
  });

  it("returns at most `limit` results", () => {
    const results = quietAlternatives(target!.id, { limit: 2 });
    expect(results.length).toBeGreaterThan(0);
    expect(results.length).toBeLessThanOrEqual(2);

    const defaultResults = quietAlternatives(target!.id);
    expect(defaultResults.length).toBeLessThanOrEqual(4);
  });

  it("only suggests destinations of the same category", () => {
    for (const alt of quietAlternatives(target!.id)) {
      expect(alt.destination.category).toBe(target!.category);
    }
  });

  it("only suggests destinations at least one band calmer", () => {
    for (const alt of quietAlternatives(target!.id)) {
      expect(alt.bandsCalmer).toBeGreaterThanOrEqual(1);
      expect(alt.peakWindowBusyness).toBeGreaterThanOrEqual(0);
      expect(alt.peakWindowBusyness).toBeLessThanOrEqual(1);
    }
  });

  it("never suggests the target itself", () => {
    for (const alt of quietAlternatives(target!.id)) {
      expect(alt.destination.id).not.toBe(target!.id);
    }
  });

  it("is deterministic", () => {
    const a = quietAlternatives(target!.id);
    const b = quietAlternatives(target!.id);
    expect(a.map((x) => x.destination.id)).toEqual(b.map((x) => x.destination.id));
  });
});
