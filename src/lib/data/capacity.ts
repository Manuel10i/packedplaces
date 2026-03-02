import { startOfISOWeek } from "date-fns";

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

/** Map ISO week (1-53) to month (1-12) using date-fns startOfISOWeek. */
function getMonthForWeek(week: number): number {
  // Use a reference year (2024) to convert week number to a date
  const date = startOfISOWeek(new Date(2024, 0, 4 + (week - 1) * 7));
  return date.getMonth() + 1; // getMonth() is 0-based
}

/**
 * Attractiveness factor (0-1) for a destination in a given week.
 * Peak months -> 1.0, adjacent months -> 0.25, other months -> 0.05
 *
 * Values are intentionally aggressive so that off-season demand drops
 * sharply (e.g. monsoon onset is abrupt, not gradual).
 */
export function getAttractiveness(peakMonths: number[], week: number): number {
  if (peakMonths.length === 12) return 1.0; // year-round shortcut
  const month = getMonthForWeek(week);
  if (peakMonths.includes(month)) return 1.0;
  const prev = month === 1 ? 12 : month - 1;
  const next = month === 12 ? 1 : month + 1;
  if (peakMonths.includes(prev) || peakMonths.includes(next)) return 0.25;
  return 0.05;
}

/**
 * Compute the effective capacity for a destination in a given week.
 *
 * Uses peakMonths to derive an attractiveness factor (0-1), then
 * interpolates between offPeak and peak capacity.
 * If capacityOverride is provided, it replaces peak capacity.
 */
export function getSeasonalCapacity(
  category: string,
  peakMonths: number[],
  week: number,
  capacityOverride?: number,
): number {
  const cap = CATEGORY_CAPACITY[category] ?? { peak: 1.0, offPeak: 0.5 };
  const peak = capacityOverride ?? cap.peak;
  const offPeak = capacityOverride ? offPeak_from_override(capacityOverride, cap) : cap.offPeak;

  // Use a higher floor (0.5) for capacity — infrastructure doesn't shrink as
  // aggressively as demand.  Demand in heatmap.ts uses the raw attractiveness
  // (which can drop to 0.15), so the congestion ratio drops significantly
  // during off-season instead of demand and capacity cancelling each other out.
  const attractiveness = getAttractiveness(peakMonths, week);
  const capacityFactor = Math.max(attractiveness, 0.5);
  return offPeak + (peak - offPeak) * capacityFactor;
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
