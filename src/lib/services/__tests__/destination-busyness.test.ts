import { describe, it, expect } from "vitest";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { destinations } from "@/lib/data/destinations";

function idByName(name: string): string {
  const d = destinations.find((x) => x.name === name);
  if (!d) throw new Error(`test fixture missing destination: ${name}`);
  return d.id;
}

describe("getMonthlyBusyness", () => {
  it("returns 12 monthly scores in [0,1]", () => {
    const scores = getMonthlyBusyness(idByName("Paris"));
    expect(scores).toHaveLength(12);
    for (const s of scores) {
      expect(s).toBeGreaterThanOrEqual(0);
      expect(s).toBeLessThanOrEqual(1);
    }
  });

  it("does not mark high-capacity Gothenburg as busy (matches the map)", () => {
    // The reported bug: Gothenburg read as permanently 'busy' on the page while
    // the map never shows it busy. It must now stay low all year.
    const scores = getMonthlyBusyness(idByName("Gothenburg"));
    expect(Math.max(...scores)).toBeLessThan(0.4);
  });

  it("reflects seasonal peaks (Paris busier in summer than midwinter)", () => {
    const scores = getMonthlyBusyness(idByName("Paris"));
    expect(scores[6]).toBeGreaterThan(scores[0]); // July > January
  });

  it("returns all zeros for an unknown destination id", () => {
    const scores = getMonthlyBusyness("does-not-exist");
    expect(scores).toEqual(new Array(12).fill(0));
  });
});
