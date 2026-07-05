/**
 * Shared mapping from a normalized busyness score (0-1) to a label and colour.
 * Used by both the map tooltip and the destination pages so the crowdedness
 * scale is identical everywhere.
 */

import { crowdColor, type ThemeMode } from "./crowd-palette";

export type BusynessLabelKey =
  | "quiet"
  | "moderate"
  | "busy"
  | "veryBusy"
  | "packed";

/** Bands in ascending busyness order; the index is used as the band number. */
export const BUSYNESS_BANDS: BusynessLabelKey[] = [
  "quiet",
  "moderate",
  "busy",
  "veryBusy",
  "packed",
];

/** Translation key (namespace "tooltip") for a busyness score. */
export function busynessLabelKey(score: number): BusynessLabelKey {
  if (score < 0.2) return "quiet";
  if (score < 0.4) return "moderate";
  if (score < 0.6) return "busy";
  if (score < 0.8) return "veryBusy";
  return "packed";
}

/** Band number 0 (quiet) .. 4 (packed) for a busyness score. */
export function busynessBand(score: number): number {
  return BUSYNESS_BANDS.indexOf(busynessLabelKey(score));
}

/** Dot/bar colour for a busyness score (green → ochre → terracotta → brick). */
export function busynessColor(score: number, mode: ThemeMode = "light"): string {
  return crowdColor(score, mode);
}
