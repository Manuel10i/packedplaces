import { describe, it, expect } from "vitest";
import {
  crowdColor,
  crowdCssGradient,
  crowdHeatmapColorExpr,
  crowdCircleColorExpr,
  type ThemeMode,
} from "@/lib/crowd-palette";

const MODES: ThemeMode[] = ["light", "dark"];
const HEX = /^#[0-9a-f]{6}$/i;
const HEX_OR_RGBA = /^(#[0-9a-f]{6}|rgba\(\d+, \d+, \d+, (0|0?\.\d+|1(\.0)?)\))$/i;

describe("crowdColor", () => {
  it.each(MODES)("returns 4 distinct colours across the bands (%s)", (mode) => {
    const colors = [0, 0.3, 0.6, 0.9].map((s) => crowdColor(s, mode));
    expect(new Set(colors).size).toBe(4);
    for (const c of colors) expect(c).toMatch(HEX);
  });

  it.each(MODES)("switches band exactly at the thresholds (%s)", (mode) => {
    // 0.25 boundary: quiet -> moderate
    expect(crowdColor(0.24, mode)).toBe(crowdColor(0, mode));
    expect(crowdColor(0.25, mode)).not.toBe(crowdColor(0.24, mode));
    // 0.5 boundary: moderate -> busy
    expect(crowdColor(0.49, mode)).toBe(crowdColor(0.25, mode));
    expect(crowdColor(0.5, mode)).not.toBe(crowdColor(0.49, mode));
    // 0.75 boundary: busy -> packed
    expect(crowdColor(0.74, mode)).toBe(crowdColor(0.5, mode));
    expect(crowdColor(0.75, mode)).not.toBe(crowdColor(0.74, mode));
    expect(crowdColor(1, mode)).toBe(crowdColor(0.75, mode));
  });

  it("defaults to light mode", () => {
    expect(crowdColor(0.9)).toBe(crowdColor(0.9, "light"));
  });

  it("light and dark band colours differ", () => {
    for (const score of [0, 0.3, 0.6, 0.9]) {
      expect(crowdColor(score, "light")).not.toBe(crowdColor(score, "dark"));
    }
  });
});

describe("crowdCssGradient", () => {
  it.each(MODES)("contains all 4 band colours (%s)", (mode) => {
    const gradient = crowdCssGradient(mode);
    expect(gradient).toMatch(/^linear-gradient\(to right, /);
    for (const score of [0, 0.3, 0.6, 0.9]) {
      expect(gradient).toContain(crowdColor(score, mode));
    }
  });

  it("light and dark gradients differ", () => {
    expect(crowdCssGradient("light")).not.toBe(crowdCssGradient("dark"));
  });
});

describe("crowdHeatmapColorExpr", () => {
  it.each(MODES)("is an interpolate expression with valid stops (%s)", (mode) => {
    const expr = crowdHeatmapColorExpr(mode);
    expect(Array.isArray(expr)).toBe(true);
    expect(expr[0]).toBe("interpolate");
    expect(expr[1]).toEqual(["linear"]);
    expect(expr[2]).toEqual(["heatmap-density"]);

    // Alternating number / colour stops from index 3 onwards.
    const stops = expr.slice(3);
    expect(stops.length).toBeGreaterThanOrEqual(8);
    expect(stops.length % 2).toBe(0);
    for (let i = 0; i < stops.length; i += 2) {
      expect(typeof stops[i]).toBe("number");
      expect(stops[i]).toBeGreaterThanOrEqual(0);
      expect(stops[i]).toBeLessThanOrEqual(1);
      expect(stops[i + 1]).toMatch(HEX_OR_RGBA);
    }
  });

  it("light and dark expressions differ", () => {
    expect(crowdHeatmapColorExpr("light")).not.toEqual(crowdHeatmapColorExpr("dark"));
  });
});

describe("crowdCircleColorExpr", () => {
  it.each(MODES)("is an interpolate expression over busynessScore (%s)", (mode) => {
    const expr = crowdCircleColorExpr(mode);
    expect(Array.isArray(expr)).toBe(true);
    expect(expr[0]).toBe("interpolate");
    expect(expr[1]).toEqual(["linear"]);
    expect(expr[2]).toEqual(["get", "busynessScore"]);

    const stops = expr.slice(3);
    expect(stops.length % 2).toBe(0);
    for (let i = 0; i < stops.length; i += 2) {
      expect(typeof stops[i]).toBe("number");
      expect(stops[i + 1]).toMatch(HEX_OR_RGBA);
    }
    // All 4 band colours appear as stops.
    const colors = stops.filter((_, i) => i % 2 === 1);
    expect(new Set(colors).size).toBe(4);
    for (const score of [0, 0.3, 0.6, 0.9]) {
      expect(colors).toContain(crowdColor(score, mode));
    }
  });

  it("light and dark expressions differ", () => {
    expect(crowdCircleColorExpr("light")).not.toEqual(crowdCircleColorExpr("dark"));
  });
});
