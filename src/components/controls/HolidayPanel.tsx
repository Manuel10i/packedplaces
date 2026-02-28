"use client";

import { useMapStore } from "@/store/useMapStore";
import { useHolidayData } from "@/hooks/useHeatmapData";
import { format, parseISO } from "date-fns";

const COUNTRY_NAMES: Record<string, string> = {
  DE: "Germany",
  AT: "Austria",
  NL: "Netherlands",
  BE: "Belgium",
  CH: "Switzerland",
  FR: "France",
  CZ: "Czech Republic",
  PL: "Poland",
  LU: "Luxembourg",
};

const COUNTRY_FLAGS: Record<string, string> = {
  DE: "\u{1F1E9}\u{1F1EA}",
  AT: "\u{1F1E6}\u{1F1F9}",
  NL: "\u{1F1F3}\u{1F1F1}",
  BE: "\u{1F1E7}\u{1F1EA}",
  CH: "\u{1F1E8}\u{1F1ED}",
  FR: "\u{1F1EB}\u{1F1F7}",
  CZ: "\u{1F1E8}\u{1F1FF}",
  PL: "\u{1F1F5}\u{1F1F1}",
  LU: "\u{1F1F1}\u{1F1FA}",
};

export function HolidayPanel() {
  const { selectedWeek, selectedYear } = useMapStore();
  const { data: holidays } = useHolidayData(selectedWeek, selectedYear);

  if (!holidays || holidays.length === 0) {
    return (
      <div className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">School Holidays</h3>
        <p className="text-xs text-gray-400">No school holidays this week</p>
      </div>
    );
  }

  // Group by country
  const grouped = holidays.reduce(
    (acc, h) => {
      const key = h.countryCode;
      if (!acc[key]) acc[key] = [];
      acc[key].push(h);
      return acc;
    },
    {} as Record<string, typeof holidays>,
  );

  // Sort countries by display order
  const sortedCountries = Object.keys(grouped).sort((a, b) => {
    const order = ["DE", "AT", "NL", "BE", "FR", "CH", "CZ", "PL", "LU"];
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  return (
    <div className="max-h-[60vh] overflow-y-auto rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">School Holidays</h3>
      {sortedCountries.map((country) => (
        <div key={country} className="mb-3 last:mb-0">
          <div className="mb-1.5 text-xs font-semibold text-gray-500">
            {COUNTRY_FLAGS[country]} {COUNTRY_NAMES[country] ?? country}
          </div>
          {grouped[country].map((h, i) => (
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
      ))}
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
