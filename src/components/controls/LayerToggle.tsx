"use client";

import { useTranslations } from "next-intl";
import { useMapStore } from "@/store/useMapStore";

export function LayerToggle() {
  const t = useTranslations("layers");
  const showHeatmap = useMapStore((s) => s.showHeatmap);
  const showEvents = useMapStore((s) => s.showEvents);
  const showHolidayRegions = useMapStore((s) => s.showHolidayRegions);
  const setShowHeatmap = useMapStore((s) => s.setShowHeatmap);
  const setShowEvents = useMapStore((s) => s.setShowEvents);
  const setShowHolidayRegions = useMapStore((s) => s.setShowHolidayRegions);

  return (
    <div className="rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
      <div className="mb-1.5 text-xs font-semibold text-gray-500">{t("title")}</div>
      <div className="flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700">
          <input
            type="checkbox"
            checked={showHeatmap}
            onChange={(e) => setShowHeatmap(e.target.checked)}
            className="accent-indigo-600"
          />
          {t("heatmap")}
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700">
          <input
            type="checkbox"
            checked={showEvents}
            onChange={(e) => setShowEvents(e.target.checked)}
            className="accent-indigo-600"
          />
          {t("events")}
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700">
          <input
            type="checkbox"
            checked={showHolidayRegions}
            onChange={(e) => setShowHolidayRegions(e.target.checked)}
            className="accent-indigo-600"
          />
          {t("holidayRegions")}
        </label>
      </div>
    </div>
  );
}
