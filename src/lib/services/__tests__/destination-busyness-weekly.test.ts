import { describe, it, expect } from "vitest";
import {
  getWeeklyBusyness,
  getMonthlyBusyness,
} from "@/lib/services/destination-busyness";
import { destinations } from "@/lib/data/destinations";

function idByName(name: string): string {
  const d = destinations.find((x) => x.name === name);
  if (!d) throw new Error(`test fixture missing destination: ${name}`);
  return d.id;
}

describe("getWeeklyBusyness", () => {
  it("returns 53 weekly scores in [0,1]", () => {
    const scores = getWeeklyBusyness(idByName("Paris"));
    expect(scores).toHaveLength(53);
    for (const s of scores) {
      expect(s).toBeGreaterThanOrEqual(0);
      expect(s).toBeLessThanOrEqual(1);
    }
  });

  it("returns all zeros for an unknown destination id", () => {
    const scores = getWeeklyBusyness("does-not-exist");
    expect(scores).toEqual(new Array(53).fill(0));
  });

  it("is consistent with getMonthlyBusyness for a destination with patterns", () => {
    const id = idByName("Paris");
    const weekly = getWeeklyBusyness(id);
    const monthly = getMonthlyBusyness(id);
    expect(Math.max(...weekly)).toBeGreaterThan(0);
    expect(Math.max(...monthly)).toBeGreaterThan(0);
    // Monthly is an average of weekly values, so its peak cannot exceed the
    // weekly peak (both rounded to 3 decimals; allow rounding slack).
    expect(Math.max(...monthly)).toBeLessThanOrEqual(Math.max(...weekly) + 0.001);
  });
});
