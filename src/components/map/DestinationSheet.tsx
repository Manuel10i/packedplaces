"use client";

import { useLocale, useTranslations } from "next-intl";
import { getISOWeek } from "date-fns";
import { Sheet } from "@/components/ui/Sheet";
import { CrowdCurve } from "@/components/ui/CrowdCurve";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { useBusynessSeries } from "@/hooks/useBusynessSeries";
import { useSavedPlacesStore } from "@/store/useSavedPlacesStore";
import { useMapStore } from "@/store/useMapStore";
import { busynessLabelKey, busynessColor } from "@/lib/busyness-scale";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";
import { sharePlace } from "@/lib/share";
import { destinations } from "@/lib/data/destinations";
import { localizedDestinationName } from "@/lib/destinations";
import { getShortMonthNames } from "@/lib/week-dates";
import type { Locale } from "@/i18n/config";

const DEST_BY_ID = new Map(destinations.map((d) => [d.id, d]));

import type { MapDestinationClick } from "./MapView";

interface Props {
  selected: MapDestinationClick | null;
  onClose: () => void;
}

/** Bottom sheet with a destination's crowd details, opened by tapping a map dot. */
export function DestinationSheet({ selected, onClose }: Props) {
  const t = useTranslations("map");
  const tip = useTranslations("tooltip");
  const tBest = useTranslations("bestTime");
  const tSaved = useTranslations("saved");
  const tShare = useTranslations("share");
  const mode = useResolvedTheme();
  const locale = useLocale() as Locale;
  const { selectedWeek, selectedYear } = useMapStore();
  const { ids, toggle, hydrated } = useSavedPlacesStore();

  const { data } = useBusynessSeries(selected ? [selected.destinationId] : [], selectedYear);
  const values = selected ? data?.series?.[selected.destinationId] : undefined;

  if (!selected) return null;

  const destination = DEST_BY_ID.get(selected.destinationId);
  const displayName = destination
    ? localizedDestinationName(destination, locale)
    : selected.name;
  const saved = hydrated && ids.includes(selected.destinationId);
  const scorePercent = selected.score !== undefined ? Math.round(selected.score * 100) : null;

  async function handleShare() {
    if (!selected) return;
    await sharePlace({
      title: `${displayName} — PackedPlaces`,
      text: tBest("shareText", { name: displayName, date: `${selectedYear} · W${selectedWeek}` }),
      url: window.location.href,
    });
  }

  return (
    <Sheet
      open
      onClose={onClose}
      title={displayName}
      closeLabel={t("close")}
      headerExtra={
        <>
          <IconButton
            aria-label={saved ? tSaved("saved") : tSaved("save")}
            active={saved}
            onClick={() => toggle(selected.destinationId)}
          >
            <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.75}>
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
        </>
      }
    >
      <div className="pb-2">
        {scorePercent !== null && selected.score !== undefined && (
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: busynessColor(selected.score, mode) }}
            />
            {tip("crowdedness", {
              score: scorePercent,
              label: tip(busynessLabelKey(selected.score)),
            })}
          </p>
        )}

        {values && (
          <div className="mt-4 text-ink">
            <CrowdCurve
              series={[{ id: selected.destinationId, values }]}
              markMinMax
              currentWeek={
                selectedYear === new Date().getFullYear() ? getISOWeek(new Date()) : selectedWeek
              }
              ariaLabel={displayName}
              monthLabels={getShortMonthNames(locale)}
              className="h-24"
            />
          </div>
        )}

        {selected.activeEvents.length > 0 && (
          <div className="mt-4 border-t border-line pt-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              {tip("activeEvents")}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {selected.activeEvents.map((name, i) => (
                <li key={i} className="text-sm text-accent">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selected.sources.length > 0 && (
          <div className="mt-4 border-t border-line pt-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              {tip("topSources")}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {selected.sources.map((s, i) => (
                <li key={i} className="flex items-baseline gap-3 text-sm text-ink-muted">
                  <span className="font-mono text-[10px] text-accent-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.regionName}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3 pb-2">
          <Button size="sm" href={`/best-time?d=${selected.destinationId}`}>
            {tBest("eyebrow")} &rarr;
          </Button>
          <Button size="sm" variant="secondary" href="/compare">
            {tSaved("compareCta")}
          </Button>
        </div>
      </div>
    </Sheet>
  );
}
