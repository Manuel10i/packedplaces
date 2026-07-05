import type { MajorEvent } from "@/types";

/** Emoji per event category — shared by the map markers and the holiday panel. */
export const CATEGORY_EMOJI: Record<MajorEvent["category"], string> = {
  sports: "⚽",
  festival: "🎉",
  cultural: "🎭",
  music: "🎵",
  trade: "💼",
};

export const DEFAULT_EVENT_EMOJI = "📍";
