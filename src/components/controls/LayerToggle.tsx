"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { Switch } from "@/components/ui/Switch";

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

  const rows: { label: string; checked: boolean; onChange: (v: boolean) => void }[] = [
    { label: t("heatmap"), checked: showHeatmap, onChange: setShowHeatmap },
    { label: t("events"), checked: showEvents, onChange: setShowEvents },
    { label: t("holidayRegions"), checked: showHolidayRegions, onChange: setShowHolidayRegions },
  ];

  const toggles = (
    <>
      {rows.map((row) => (
        <label
          key={row.label}
          className="flex cursor-pointer items-center justify-between gap-3 py-0.5 text-xs text-ink-muted"
        >
          {row.label}
          <Switch checked={row.checked} onChange={row.onChange} aria-label={row.label} />
        </label>
      ))}
    </>
  );

  if (variant === "card") {
    return (
      <div className="rounded-[4px] border border-line bg-surface-raised/95 px-4 py-3 backdrop-blur-sm">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          {t("title")}
        </div>
        <div className="flex flex-col gap-1.5">{toggles}</div>
      </div>
    );
  }

  return <LayerDropdown title={t("title")}>{toggles}</LayerDropdown>;
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
        className={`flex items-center gap-1 rounded-[3px] px-2 py-1.5 text-sm font-medium transition-colors ${
          open ? "bg-surface-sunken text-ink" : "text-ink-muted hover:bg-surface-sunken hover:text-ink"
        }`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        {title}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[190px] rounded-[4px] border border-line bg-surface-raised p-3 shadow-xl">
          <div className="flex flex-col gap-1.5">{children}</div>
        </div>
      )}
    </div>
  );
}
