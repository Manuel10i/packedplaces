"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { useHolidayData, useHeatmapData } from "@/hooks/useHeatmapData";
import { format, parseISO } from "date-fns";
import { getDateLocale } from "@/i18n/date-locale";
import { getCountryName, getCountryFlag } from "@/lib/data/countries";
import { REGION_BOUNDS, boundsOverlap } from "@/lib/data/region-bounds";
import { destinations } from "@/lib/data/destinations";
import { CATEGORY_EMOJI } from "@/lib/event-categories";
import type { WorldRegion, MajorEvent } from "@/types";

const DEST_NAME_MAP = new Map(destinations.map((d) => [d.id, d.name]));
import type { Locale } from "@/i18n/config";
import type { Locale as DateFnsLocale } from "date-fns";

const REGION_LABEL_KEYS: Record<WorldRegion, string> = {
  europe: "regionEurope",
  asia: "regionAsia",
  americas: "regionAmericas",
  oceania: "regionOceania",
  africa: "regionAfrica",
  "middle-east": "regionMiddleEast",
};

const REGION_ORDER: WorldRegion[] = ["europe", "middle-east", "asia", "americas", "oceania", "africa"];

const CATEGORY_ORDER: MajorEvent["category"][] = ["sports", "festival", "cultural", "music", "trade"];

// Map country codes to world regions for grouping
const COUNTRY_TO_REGION: Record<string, WorldRegion> = {};
import { countries } from "@/lib/data/countries";
for (const c of countries) {
  COUNTRY_TO_REGION[c.code] = c.region;
}

interface HolidayPanelProps {
  className?: string;
}

export function HolidayPanel({ className = "max-h-[70vh] overflow-y-auto rounded-[4px] border border-line bg-surface-raised/95 p-4 backdrop-blur-sm" }: HolidayPanelProps) {
  const { selectedWeek, selectedYear, viewportBounds } = useMapStore();
  const { data: holidays } = useHolidayData(selectedWeek, selectedYear);
  const { data: heatmapData } = useHeatmapData(selectedWeek, selectedYear);
  const [holidaysOpen, setHolidaysOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [collapsedRegions, setCollapsedRegions] = useState<Set<WorldRegion>>(new Set(REGION_ORDER));
  const [collapsedCountries, setCollapsedCountries] = useState<Set<string>>(new Set());
  const tH = useTranslations("holidays");
  const tE = useTranslations("events");
  const locale = useLocale() as Locale;
  const dateLocale = getDateLocale(locale);

  const events = heatmapData?.metadata.activeEvents ?? [];
  const holidayCount = holidays?.length ?? 0;
  const eventCount = events.length;

  // --- Holiday grouping ---
  const byCountry = (holidays ?? []).reduce(
    (acc, h) => {
      const key = h.countryCode;
      if (!acc[key]) acc[key] = [];
      acc[key].push(h);
      return acc;
    },
    {} as Record<string, NonNullable<typeof holidays>>,
  );

  const byWorldRegion = new Map<WorldRegion, string[]>();
  for (const countryCode of Object.keys(byCountry)) {
    const wr = COUNTRY_TO_REGION[countryCode] ?? "europe";
    if (!byWorldRegion.has(wr)) byWorldRegion.set(wr, []);
    byWorldRegion.get(wr)!.push(countryCode);
  }
  for (const countryCodes of byWorldRegion.values()) {
    countryCodes.sort((a, b) => getCountryName(a).localeCompare(getCountryName(b)));
  }

  let activeRegions = REGION_ORDER.filter((r) => byWorldRegion.has(r));
  if (viewportBounds) {
    activeRegions = activeRegions.filter((r) => {
      const regionBound = REGION_BOUNDS[r];
      if (!regionBound) return true;
      return boundsOverlap(viewportBounds, regionBound);
    });
  }
  const showRegionHeaders = activeRegions.length > 1;

  // --- Event grouping ---
  const byCategory = new Map<MajorEvent["category"], typeof events>();
  for (const event of events) {
    if (!byCategory.has(event.category)) byCategory.set(event.category, []);
    byCategory.get(event.category)!.push(event);
  }
  for (const list of byCategory.values()) {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  const activeCategories = CATEGORY_ORDER.filter((c) => byCategory.has(c));

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

  return (
    <div className={className}>
      {/* ===== School Holidays section ===== */}
      <button
        onClick={() => setHolidaysOpen((v) => !v)}
        className="flex w-full items-center gap-2 font-display text-sm text-ink hover:text-accent"
      >
        <span
          className="text-[10px] transition-transform"
          style={{ transform: holidaysOpen ? "rotate(0)" : "rotate(-90deg)" }}
        >
          &#9662;
        </span>
        {tH("title")}
        <span className="ml-auto rounded-full border border-line bg-surface-sunken px-2 py-0.5 font-mono text-[10px] text-ink-muted">
          {holidayCount}
        </span>
      </button>

      {holidaysOpen && (
        <div className="mt-2">
          {holidayCount === 0 ? (
            <p className="text-xs text-ink-faint">{tH("noHolidays")}</p>
          ) : (
            activeRegions.map((worldRegion) => {
              const countryCodes = byWorldRegion.get(worldRegion)!;
              const isCollapsed = showRegionHeaders && collapsedRegions.has(worldRegion);
              const totalHolidays = countryCodes.reduce((sum, cc) => sum + byCountry[cc].length, 0);

              return (
                <div key={worldRegion} className="mb-2 last:mb-0">
                  {showRegionHeaders && (
                    <button
                      onClick={() => toggleRegion(worldRegion)}
                      className="mb-1.5 flex w-full items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint hover:text-ink-muted"
                    >
                      <span className="transition-transform" style={{ transform: isCollapsed ? "rotate(-90deg)" : "rotate(0)" }}>
                        &#9662;
                      </span>
                      {tH(REGION_LABEL_KEYS[worldRegion])}
                      <span className="ml-auto font-normal normal-case">{totalHolidays}</span>
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
                            className="mb-1.5 flex w-full items-center gap-1 text-xs font-semibold text-ink-muted hover:text-ink"
                          >
                            <span className="text-[10px] transition-transform" style={{ transform: isCountryCollapsed ? "rotate(-90deg)" : "rotate(0)" }}>
                              &#9662;
                            </span>
                            {getCountryFlag(countryCode)} {getCountryName(countryCode)}
                            {isCountryCollapsed && (
                              <span className="ml-auto rounded-full bg-surface-sunken px-1.5 py-0.5 font-mono text-[10px] font-normal text-ink-faint">
                                {countryHolidays.length}
                              </span>
                            )}
                          </button>
                          {!isCountryCollapsed &&
                            countryHolidays.map((h, i) => (
                              <div
                                key={`${h.regionId}-${i}`}
                                className="mb-1 rounded-[3px] border-l-2 border-brand-400/60 bg-surface-sunken px-2.5 py-1.5 last:mb-0"
                              >
                                <div className="text-xs font-medium text-ink">{h.regionName}</div>
                                <div className="text-xs text-ink-muted">
                                  {h.holidayName} &middot; {formatRange(h.startDate, h.endDate, dateLocale)}
                                </div>
                              </div>
                            ))}
                        </div>
                      );
                    })}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ===== Divider ===== */}
      <div className="my-3 border-t border-line" />

      {/* ===== Major Events section ===== */}
      <button
        onClick={() => setEventsOpen((v) => !v)}
        className="flex w-full items-center gap-2 font-display text-sm text-ink hover:text-accent"
      >
        <span
          className="text-[10px] transition-transform"
          style={{ transform: eventsOpen ? "rotate(0)" : "rotate(-90deg)" }}
        >
          &#9662;
        </span>
        {tE("title")}
        <span className="ml-auto rounded-full border border-sunset-200 bg-sunset-50 px-2 py-0.5 font-mono text-[10px] text-accent">
          {eventCount}
        </span>
      </button>

      {eventsOpen && (
        <div className="mt-2">
          {eventCount === 0 ? (
            <p className="text-xs text-ink-faint">{tE("noEvents")}</p>
          ) : (
            activeCategories.map((category) => {
              const categoryEvents = byCategory.get(category)!;
              return (
                <div key={category} className="mb-2 last:mb-0">
                  <div className="mb-1.5 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    <span>{CATEGORY_EMOJI[category]}</span>
                    {tE(category)}
                  </div>
                  {categoryEvents.map((event) => (
                    <div
                      key={event.id}
                      className="mb-1 rounded-[3px] border-l-2 border-accent/60 bg-surface-sunken px-2.5 py-1.5 last:mb-0"
                    >
                      <div className="text-xs font-medium text-ink">{event.name}</div>
                      <div className="text-xs text-ink-muted">
                        {DEST_NAME_MAP.get(event.destinationId) ?? event.destinationId}
                        {" \u00b7 "}
                        {formatRange(event.startDate, event.endDate, dateLocale)}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

function formatRange(start: string, end: string, dateLocale: DateFnsLocale): string {
  try {
    return `${format(parseISO(start), "MMM d", { locale: dateLocale })} \u2013 ${format(parseISO(end), "MMM d", { locale: dateLocale })}`;
  } catch {
    return `${start} \u2013 ${end}`;
  }
}
