"use client";

import { useState } from "react";
import { useMapStore } from "@/store/useMapStore";
import { useHolidayData } from "@/hooks/useHeatmapData";
import { format, parseISO } from "date-fns";
import { getCountryName, getCountryFlag } from "@/lib/data/countries";
import { REGION_BOUNDS, boundsOverlap } from "@/lib/data/region-bounds";
import type { WorldRegion } from "@/types";

const REGION_LABELS: Record<WorldRegion, string> = {
  europe: "Europe",
  asia: "Asia",
  americas: "Americas",
  oceania: "Oceania",
  africa: "Africa",
  "middle-east": "Middle East",
};

const REGION_ORDER: WorldRegion[] = ["europe", "middle-east", "asia", "americas", "oceania", "africa"];

// Map country codes to world regions for grouping
const COUNTRY_TO_REGION: Record<string, WorldRegion> = {};

// Populated dynamically from countries data
import { countries } from "@/lib/data/countries";
for (const c of countries) {
  COUNTRY_TO_REGION[c.code] = c.region;
}

export function HolidayPanel() {
  const { selectedWeek, selectedYear, viewportBounds } = useMapStore();
  const { data: holidays } = useHolidayData(selectedWeek, selectedYear);
  const [collapsedRegions, setCollapsedRegions] = useState<Set<WorldRegion>>(new Set(REGION_ORDER));
  const [collapsedCountries, setCollapsedCountries] = useState<Set<string>>(new Set());

  if (!holidays || holidays.length === 0) {
    return (
      <div className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">School Holidays</h3>
        <p className="text-xs text-gray-400">No school holidays this week</p>
      </div>
    );
  }

  // Group by country
  const byCountry = holidays.reduce(
    (acc, h) => {
      const key = h.countryCode;
      if (!acc[key]) acc[key] = [];
      acc[key].push(h);
      return acc;
    },
    {} as Record<string, typeof holidays>,
  );

  // Group countries by world region
  const byWorldRegion = new Map<WorldRegion, string[]>();
  for (const countryCode of Object.keys(byCountry)) {
    const wr = COUNTRY_TO_REGION[countryCode] ?? "europe";
    if (!byWorldRegion.has(wr)) byWorldRegion.set(wr, []);
    byWorldRegion.get(wr)!.push(countryCode);
  }

  // Sort countries within each region alphabetically by name
  for (const countryCodes of byWorldRegion.values()) {
    countryCodes.sort((a, b) => getCountryName(a).localeCompare(getCountryName(b)));
  }

  const toggleRegion = (region: WorldRegion) => {
    setCollapsedRegions((prev) => {
      const next = new Set(prev);
      if (next.has(region)) next.delete(region);
      else next.add(region);
      return next;
    });
  };

  const toggleCountry = (countryCode: string) => {
    setCollapsedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(countryCode)) next.delete(countryCode);
      else next.add(countryCode);
      return next;
    });
  };

  // Filter to regions visible in viewport (if viewport is set)
  let activeRegions = REGION_ORDER.filter((r) => byWorldRegion.has(r));
  if (viewportBounds) {
    activeRegions = activeRegions.filter((r) => {
      const regionBound = REGION_BOUNDS[r];
      if (!regionBound) return true;
      return boundsOverlap(viewportBounds, regionBound);
    });
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">School Holidays</h3>
      {activeRegions.map((worldRegion) => {
        const countryCodes = byWorldRegion.get(worldRegion)!;
        const isCollapsed = collapsedRegions.has(worldRegion);
        const totalHolidays = countryCodes.reduce((sum, cc) => sum + byCountry[cc].length, 0);

        return (
          <div key={worldRegion} className="mb-2 last:mb-0">
            {/* Region header */}
            {activeRegions.length > 1 && (
              <button
                onClick={() => toggleRegion(worldRegion)}
                className="mb-1.5 flex w-full items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-600"
              >
                <span className="transition-transform" style={{ transform: isCollapsed ? "rotate(-90deg)" : "rotate(0)" }}>
                  &#9662;
                </span>
                {REGION_LABELS[worldRegion]}
                <span className="ml-auto font-normal normal-case">
                  {totalHolidays}
                </span>
              </button>
            )}
            {!isCollapsed &&
              countryCodes.map((countryCode) => {
                const isCountryCollapsed = collapsedCountries.has(countryCode);
                const countryHolidays = byCountry[countryCode];

                return (
                  <div key={countryCode} className="mb-3 last:mb-0">
                    <button
                      onClick={() => toggleCountry(countryCode)}
                      className="mb-1.5 flex w-full items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-700"
                    >
                      <span className="transition-transform text-[10px]" style={{ transform: isCountryCollapsed ? "rotate(-90deg)" : "rotate(0)" }}>
                        &#9662;
                      </span>
                      {getCountryFlag(countryCode)} {getCountryName(countryCode)}
                      {isCountryCollapsed && (
                        <span className="ml-auto rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-normal text-gray-400">
                          {countryHolidays.length}
                        </span>
                      )}
                    </button>
                    {!isCountryCollapsed &&
                      countryHolidays.map((h, i) => (
                        <div
                          key={`${h.regionId}-${i}`}
                          className="mb-1 rounded-md bg-gray-50 px-2.5 py-1.5 last:mb-0"
                        >
                          <div className="text-xs font-medium text-gray-700">{h.regionName}</div>
                          <div className="text-xs text-gray-500">
                            {h.holidayName} &middot;{" "}
                            {formatRange(h.startDate, h.endDate)}
                          </div>
                        </div>
                      ))}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

function formatRange(start: string, end: string): string {
  try {
    return `${format(parseISO(start), "MMM d")} - ${format(parseISO(end), "MMM d")}`;
  } catch {
    return `${start} - ${end}`;
  }
}
