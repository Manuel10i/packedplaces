"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useMapStore } from "@/store/useMapStore";

interface LayerToggleProps {
  variant?: "card" | "dropdown";
}

export function LayerToggle({ variant = "card" }: LayerToggleProps) {
  const t = useTranslations("layers");
  const showHeatmap = useMapStore((s) => s.showHeatmap);
  const showEvents = useMapStore((s) => s.showEvents);
  const showHolidayRegions = useMapStore((s) => s.showHolidayRegions);
  const setShowHeatmap = useMapStore((s) => s.setShowHeatmap);
  const setShowEvents = useMapStore((s) => s.setShowEvents);
  const setShowHolidayRegions = useMapStore((s) => s.setShowHolidayRegions);

  const checkboxes = (
    <>
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
    </>
  );

  if (variant === "card") {
    return (
      <div className="rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
        <div className="mb-1.5 text-xs font-semibold text-gray-500">{t("title")}</div>
        <div className="flex flex-col gap-1.5">{checkboxes}</div>
      </div>
    );
  }

  return <LayerDropdown title={t("title")}>{checkboxes}</LayerDropdown>;
}

function LayerDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        {title}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded-lg bg-white p-3 shadow-lg ring-1 ring-black/5">
          <div className="flex flex-col gap-1.5">{children}</div>
        </div>
      )}
    </div>
  );
}
