"use client";

import { useMapStore } from "@/store/useMapStore";

const currentYear = new Date().getFullYear();
const YEARS = [currentYear, currentYear + 1, currentYear + 2];

interface YearSelectorProps {
  className?: string;
}

export function YearSelector({ className = "flex w-fit gap-1 rounded-lg bg-white/95 p-1 shadow-lg backdrop-blur-sm" }: YearSelectorProps) {
  const { selectedYear, setSelectedYear } = useMapStore();

  return (
    <div className={className}>
      {YEARS.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            selectedYear === year
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
