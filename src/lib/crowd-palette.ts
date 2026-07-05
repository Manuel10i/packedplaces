import type { ExpressionSpecification } from "maplibre-gl";

/**
 * Single source of truth for the crowdedness colour scale and related map
 * colours, in both themes. Consumed by busyness-scale.ts, the MapLibre layers,
 * the Legend and the crowd-curve charts so the scale reads identically
 * everywhere.
 *
 * The ramp keeps the green → yellow → orange → red semantics but is warmed
 * and desaturated to sit on the Atlas Editorial paper (light) and night-navy
 * (dark) surfaces.
 */

export type ThemeMode = "light" | "dark";

/** Band colours quiet → moderate/ochre → busy/terracotta → packed/brick. */
const BAND_COLORS: Record<ThemeMode, readonly [string, string, string, string]> = {
  light: ["#3e8e5e", "#d9a83f", "#d0703a", "#a33324"],
  dark: ["#57b27e", "#e6bd57", "#e08653", "#d15a48"],
};

/** Extreme end of the ramp, used for the densest heatmap core. */
const PEAK_COLOR: Record<ThemeMode, string> = {
  light: "#7f2419",
  dark: "#e04a38",
};

/** Grey dots for destinations without a score. */
export const MUTED_DOT_COLOR: Record<ThemeMode, string> = {
  light: "#97998c",
  dark: "#55636e",
};

/** Stroke around destination circles — matches the raised paper surface. */
export const CIRCLE_STROKE_COLOR: Record<ThemeMode, string> = {
  light: "#fdfaf3",
  dark: "#0f1922",
};

/** School-holiday region overlay (slate blue — distinct from the crowd ramp). */
export const HOLIDAY_REGION_COLOR: Record<ThemeMode, string> = {
  light: "#345995",
  dark: "#7f9fd1",
};

/** Discrete colour for a 0–1 busyness score (same thresholds as before). */
export function crowdColor(score: number, mode: ThemeMode = "light"): string {
  const bands = BAND_COLORS[mode];
  if (score < 0.25) return bands[0];
  if (score < 0.5) return bands[1];
  if (score < 0.75) return bands[2];
  return bands[3];
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** MapLibre `heatmap-color` expression over heatmap-density. */
export function crowdHeatmapColorExpr(mode: ThemeMode): ExpressionSpecification {
  const [quiet, moderate, busy, packed] = BAND_COLORS[mode];
  return [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,
    "rgba(0, 0, 0, 0)",
    0.1,
    hexToRgba(quiet, 0.4),
    0.3,
    hexToRgba(moderate, 0.6),
    0.5,
    hexToRgba(busy, 0.7),
    0.7,
    hexToRgba(packed, 0.8),
    1.0,
    hexToRgba(PEAK_COLOR[mode], 0.9),
  ];
}

/** MapLibre `circle-color` expression over the busynessScore property. */
export function crowdCircleColorExpr(mode: ThemeMode): ExpressionSpecification {
  const [quiet, moderate, busy, packed] = BAND_COLORS[mode];
  return [
    "interpolate",
    ["linear"],
    ["get", "busynessScore"],
    0,
    quiet,
    0.3,
    moderate,
    0.6,
    busy,
    1.0,
    packed,
  ];
}

/** CSS gradient for the legend bar and chart fills. */
export function crowdCssGradient(mode: ThemeMode): string {
  return `linear-gradient(to right, ${BAND_COLORS[mode].join(", ")})`;
}
