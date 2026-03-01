import type { Hemisphere } from "@/types";

/**
 * Category-level capacity defaults with seasonal variation.
 * Higher values = more infrastructure to absorb tourists.
 * Used to compute congestion: traffic / capacity.
 */
export const CATEGORY_CAPACITY: Record<string, { peak: number; offPeak: number }> = {
  city:     { peak: 5.0, offPeak: 4.0 },
  cultural: { peak: 2.5, offPeak: 2.0 },
  beach:    { peak: 2.0, offPeak: 0.5 },
  tropical: { peak: 1.5, offPeak: 1.0 },
  ski:      { peak: 1.5, offPeak: 0.3 },
  nature:   { peak: 1.2, offPeak: 0.6 },
  lake:     { peak: 1.0, offPeak: 0.3 },
  island:   { peak: 1.0, offPeak: 0.4 },
  safari:   { peak: 0.8, offPeak: 0.3 },
  mountain: { peak: 0.6, offPeak: 0.3 },
  desert:   { peak: 0.5, offPeak: 0.2 },
};

/**
 * Determine the hemisphere of a destination from its latitude.
 * >15°N = northern, <-15° = southern, else equatorial.
 */
function getDestinationHemisphere(lat: number): Hemisphere {
  if (lat > 15) return "northern";
  if (lat < -15) return "southern";
  return "equatorial";
}

/**
 * Determines the season for a given ISO week number, accounting for hemisphere.
 */
function getSeasonForWeek(
  week: number,
  hemisphere: Hemisphere,
): "winter" | "summer" | "shoulder" {
  if (hemisphere === "equatorial") return "shoulder";

  const isNorthernWinter = week >= 44 || week <= 14;
  const isNorthernSummer = week >= 22 && week <= 36;

  if (hemisphere === "southern") {
    if (isNorthernWinter) return "summer";
    if (isNorthernSummer) return "winter";
    return "shoulder";
  }

  if (isNorthernWinter) return "winter";
  if (isNorthernSummer) return "summer";
  return "shoulder";
}

/**
 * Compute the effective capacity for a destination in a given week.
 *
 * Logic:
 * - Determine destination hemisphere from latitude
 * - Get current season at the destination
 * - If destination's seasonality matches current season -> peak capacity
 * - If opposite season -> offPeak capacity
 * - If shoulder or year-round -> average of peak + offPeak
 * - If capacityOverride is provided, it replaces peak capacity
 */
export function getSeasonalCapacity(
  category: string,
  lat: number,
  seasonality: string,
  week: number,
  capacityOverride?: number,
): number {
  const cap = CATEGORY_CAPACITY[category] ?? { peak: 1.0, offPeak: 0.5 };
  const peak = capacityOverride ?? cap.peak;
  const offPeak = capacityOverride ? offPeak_from_override(capacityOverride, cap) : cap.offPeak;

  const hemisphere = getDestinationHemisphere(lat);
  const currentSeason = getSeasonForWeek(week, hemisphere);

  if (seasonality === "year-round" || currentSeason === "shoulder") {
    return (peak + offPeak) / 2;
  }

  // Check if the destination's peak season matches the current season
  const isPeakSeason =
    (seasonality === "winter" && currentSeason === "winter") ||
    (seasonality === "summer" && currentSeason === "summer");

  return isPeakSeason ? peak : offPeak;
}

/**
 * When a capacity override is provided, scale offPeak proportionally
 * to maintain the same peak/offPeak ratio as the category default.
 */
function offPeak_from_override(
  override: number,
  categoryDefault: { peak: number; offPeak: number },
): number {
  const ratio = categoryDefault.offPeak / categoryDefault.peak;
  return override * ratio;
}
