"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getISOWeek } from "date-fns";
import {
  searchDestinations,
  matchDisplayName,
  normalizeQuery,
  MIN_QUERY,
  type SearchMatch,
} from "@/lib/destination-search";
import { destinations } from "@/lib/data/destinations";
import { localizedDestinationName } from "@/lib/destinations";
import { getCountryFlag } from "@/lib/data";
import { useBusynessSeries } from "@/hooks/useBusynessSeries";
import { useSavedPlacesStore } from "@/store/useSavedPlacesStore";
import { getWeekDateRange, getShortMonthNames } from "@/lib/week-dates";
import { sharePlace } from "@/lib/share";
import { CrowdCurve } from "@/components/ui/CrowdCurve";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import type { Locale } from "@/i18n/config";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = [CURRENT_YEAR, CURRENT_YEAR + 1, CURRENT_YEAR + 2];

function matchFromDestinationId(id: string | null): SearchMatch | null {
  if (!id) return null;
  const d = destinations.find((x) => x.id === id);
  if (!d) return null;
  return {
    id: d.id,
    destinationId: d.id,
    name: d.name,
    nameDe: localizedDestinationName(d, "de"),
    label: getCountryFlag(d.country) || d.country,
    lat: d.lat,
    lng: d.lng,
    zoom: 8,
  };
}

interface Extremes {
  minWeek: number;
  maxWeek: number;
  topQuiet: number[];
}

function analyze(values: (number | null)[]): Extremes | "flat" | null {
  const defined = values
    .map((v, i) => ({ v, week: i + 1 }))
    .filter((x): x is { v: number; week: number } => x.v !== null);
  if (defined.length === 0) return null;

  let min = defined[0];
  let max = defined[0];
  for (const x of defined) {
    if (x.v < min.v) min = x;
    if (x.v > max.v) max = x;
  }

  // Saturated/flat curve (e.g. tiny places pinned at 1.0 all year): a
  // quietest/busiest verdict would be meaningless noise.
  if (max.v - min.v < 0.02) return "flat";

  // Top quiet weeks, at least 3 weeks apart so they represent distinct windows.
  const topQuiet: number[] = [];
  for (const x of [...defined].sort((a, b) => a.v - b.v)) {
    if (topQuiet.every((w) => Math.abs(w - x.week) > 3)) topQuiet.push(x.week);
    if (topQuiet.length === 3) break;
  }

  return { minWeek: min.week, maxWeek: max.week, topQuiet: topQuiet.sort((a, b) => a - b) };
}

export function BestTimeFinder() {
  const t = useTranslations("bestTime");
  const tSaved = useTranslations("saved");
  const tShare = useTranslations("share");
  const locale = useLocale() as Locale;
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState<SearchMatch | null>(() =>
    matchFromDestinationId(searchParams.get("d")),
  );
  const [query, setQuery] = useState(selected ? matchDisplayName(selected, locale) : "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [year, setYear] = useState(CURRENT_YEAR);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { ids: savedIds, toggle, hydrated } = useSavedPlacesStore();

  const results = useMemo(() => searchDestinations(query), [query]);
  const showDropdown = open && normalizeQuery(query).length >= MIN_QUERY;

  const { data, isLoading } = useBusynessSeries(selected ? [selected.id] : [], year);
  const values = selected ? data?.series?.[selected.id] : undefined;
  const analysis = values ? analyze(values) : null;
  const extremes = analysis !== null && analysis !== "flat" ? analysis : null;

  const isSaved = selected && hydrated ? savedIds.includes(selected.id) : false;

  function pick(d: SearchMatch) {
    setSelected(d);
    setQuery(matchDisplayName(d, locale));
    setOpen(false);
    setShareState("idle");
    const url = new URL(window.location.href);
    url.searchParams.set("d", d.id);
    window.history.replaceState(null, "", url.toString());
  }

  async function handleShare() {
    if (!selected || !extremes) return;
    const result = await sharePlace({
      title: `${matchDisplayName(selected, locale)} — PackedPlaces`,
      text: t("shareText", {
        name: matchDisplayName(selected, locale),
        date: getWeekDateRange(year, extremes.minWeek, locale),
      }),
      url: window.location.href,
    });
    if (result === "copied") {
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2500);
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(results[active] ?? results[0]);
    }
  };

  return (
    <div>
      {/* Picker + year */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative max-w-md flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => {
              blurTimer.current = setTimeout(() => setOpen(false), 120);
            }}
            onKeyDown={onKeyDown}
            placeholder={t("pickerPlaceholder")}
            aria-label={t("pickerLabel")}
            autoComplete="off"
            className="w-full rounded-[3px] border border-line bg-surface-raised px-4 py-3 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-ink-faint focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20"
          />
          {showDropdown && (
            <ul className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[4px] border border-line bg-surface-raised text-left shadow-xl">
              {results.length === 0 ? (
                <li className="px-4 py-3 text-sm text-ink-faint">{t("noResults")}</li>
              ) : (
                results.map((d, i) => (
                  <li key={d.id}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        pick(d);
                      }}
                      onMouseEnter={() => setActive(i)}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                        i === active ? "bg-surface-sunken text-accent" : "text-ink-muted hover:bg-surface-sunken"
                      }`}
                    >
                      <span className="font-medium text-ink">{matchDisplayName(d, locale)}</span>
                      <span className="ml-3 shrink-0 text-xs text-ink-faint">{d.label}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        <div className="flex gap-2">
          {YEARS.map((y) => (
            <Chip key={y} selected={y === year} onClick={() => setYear(y)}>
              {y}
            </Chip>
          ))}
        </div>
      </div>

      {/* Result */}
      {!selected && <p className="mt-8 text-sm text-ink-faint">{t("empty")}</p>}

      {selected && (
        <Card className="mt-8 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl text-ink">
                {matchDisplayName(selected, locale)}
              </h2>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                {selected.label} · {year}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <IconButton
                aria-label={isSaved ? tSaved("saved") : tSaved("save")}
                active={isSaved}
                onClick={() => toggle(selected.id)}
              >
                <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3.6 13.9 8.5l5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.6 9.3l5.4-.8Z" />
                </svg>
              </IconButton>
              <IconButton aria-label={tShare("share")} onClick={handleShare}>
                <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="17.5" cy="5.5" r="2.5" />
                  <circle cx="17.5" cy="18.5" r="2.5" />
                  <path d="m8.3 10.8 7-4m-7 6.4 7 4" />
                </svg>
              </IconButton>
            </div>
          </div>
          {shareState === "copied" && (
            <p className="mt-1 text-right font-mono text-[11px] uppercase tracking-wider text-accent-2">
              {tShare("copied")}
            </p>
          )}

          {isLoading && !values && <p className="mt-6 text-sm text-ink-faint">{t("loading")}</p>}

          {values && (
            <>
              <div className="mt-5 text-ink">
                <CrowdCurve
                  series={[{ id: selected.id, values }]}
                  markMinMax={analysis !== "flat"}
                  currentWeek={year === CURRENT_YEAR ? getISOWeek(new Date()) : undefined}
                  ariaLabel={
                    extremes
                      ? t("curveAria", {
                          name: matchDisplayName(selected, locale),
                          quiet: extremes.minWeek,
                          busy: extremes.maxWeek,
                        })
                      : matchDisplayName(selected, locale)
                  }
                  monthLabels={getShortMonthNames(locale)}
                  className="h-36"
                />
              </div>

              {analysis === "flat" && (
                <p className="mt-5 border-l-2 border-dotted border-accent/50 pl-4 text-sm leading-relaxed text-ink-muted">
                  {t("flat")}
                </p>
              )}

              {extremes && (
                <>
                  <div className="mt-6 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                    <div className="bg-surface-raised p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
                        ○ {t("quietestLabel")}
                      </p>
                      <p className="mt-1.5 font-display text-xl text-ink">
                        {t("weekN", { week: extremes.minWeek })}
                      </p>
                      <p className="mt-0.5 text-sm text-ink-muted">
                        {getWeekDateRange(year, extremes.minWeek, locale)}
                      </p>
                    </div>
                    <div className="bg-surface-raised p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                        ● {t("busiestLabel")}
                      </p>
                      <p className="mt-1.5 font-display text-xl text-ink">
                        {t("weekN", { week: extremes.maxWeek })}
                      </p>
                      <p className="mt-0.5 text-sm text-ink-muted">
                        {getWeekDateRange(year, extremes.maxWeek, locale)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {t("topWeeksTitle", { year })}
                    </p>
                    <ul className="mt-2 divide-y divide-line border-y border-line">
                      {extremes.topQuiet.map((week, i) => (
                        <li key={week} className="flex items-baseline gap-4 py-2 text-sm">
                          <span className="font-mono text-xs text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium text-ink">{t("weekN", { week })}</span>
                          <span className="ml-auto text-ink-muted">
                            {getWeekDateRange(year, week, locale)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      href={`/map?lat=${selected.lat.toFixed(2)}&lng=${selected.lng.toFixed(2)}&zoom=7&week=${extremes.minWeek}&year=${year}`}
                    >
                      {t("openOnMap")} &rarr;
                    </Button>
                    <Button variant="secondary" href="/compare">
                      {tSaved("compareCta")}
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </Card>
      )}
    </div>
  );
}
