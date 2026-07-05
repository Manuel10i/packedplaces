"use client";

import { useMapStore } from "@/store/useMapStore";

const currentYear = new Date().getFullYear();
const YEARS = [currentYear, currentYear + 1, currentYear + 2];

interface YearSelectorProps {
  className?: string;
}

export function YearSelector({
  className = "flex w-fit gap-1 rounded-[3px] border border-line bg-surface-sunken p-1",
}: YearSelectorProps) {
  const { selectedYear, setSelectedYear } = useMapStore();

  return (
    <div className={className}>
      {YEARS.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`rounded-[2px] px-3 py-1.5 font-mono text-sm transition-colors ${
            selectedYear === year
              ? "bg-accent-2 text-accent-2-ink"
              : "text-ink-muted hover:bg-surface-raised hover:text-ink"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
