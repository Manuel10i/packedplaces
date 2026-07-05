"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { destinations } from "@/lib/data/destinations";
import { localizedDestinationName } from "@/lib/destinations";
import { getCountryFlag } from "@/lib/data";
import { useBusynessSeries } from "@/hooks/useBusynessSeries";
import { useSavedPlacesStore } from "@/store/useSavedPlacesStore";
import { getWeekDateRange, getShortMonthNames } from "@/lib/week-dates";
import { sharePlace } from "@/lib/share";
import { CrowdCurve, SERIES_COLORS } from "@/components/ui/CrowdCurve";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = [CURRENT_YEAR, CURRENT_YEAR + 1, CURRENT_YEAR + 2];
const MAX_COMPARE = 6;

const DEST_BY_ID = new Map(destinations.map((d) => [d.id, d]));

const emptySubscribe = () => () => {};

function quietestWeek(values: (number | null)[]): number | null {
  let week: number | null = null;
  let best = Infinity;
  values.forEach((v, i) => {
    if (v !== null && v < best) {
      best = v;
      week = i + 1;
    }
  });
  return week;
}

export function CompareView() {
  const t = useTranslations("compare");
  const tShare = useTranslations("share");
  const locale = useLocale() as Locale;
  const mode = useResolvedTheme();
  const searchParams = useSearchParams();

  const { ids: savedIds, toggle, hydrated } = useSavedPlacesStore();

  // ?ids= creates a shareable comparison; otherwise compare saved places.
  const urlIds = useMemo(
    () =>
      (searchParams.get("ids") ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter((id) => DEST_BY_ID.has(id)),
    [searchParams],
  );
  const fromUrl = urlIds.length > 0;
  const [removed, setRemoved] = useState<string[]>([]);
  const [year, setYear] = useState(CURRENT_YEAR);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");

  const baseIds = fromUrl ? urlIds : savedIds.filter((id) => DEST_BY_ID.has(id));
  const ids = baseIds.filter((id) => !removed.includes(id)).slice(0, MAX_COMPARE);

  const { data, isLoading } = useBusynessSeries(ids, year);

  // Ready only after hydration so SSR and first client paint agree.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  if (!mounted || (!fromUrl && !hydrated)) return null;

  if (ids.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-ink-muted">{t("empty")}</p>
        <p className="mt-2 text-sm text-ink-faint">{t("emptyHint")}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/best-time">{t("findPlaces")}</Button>
          <Button variant="secondary" href="/map">
            {t("openMap")}
          </Button>
        </div>
      </Card>
    );
  }

  const series = ids.map((id, i) => ({
    id,
    values: data?.series?.[id] ?? new Array<number | null>(52).fill(null),
    color: SERIES_COLORS[mode][i % SERIES_COLORS[mode].length],
  }));

  async function handleShare() {
    const url = new URL(window.location.href);
    url.searchParams.set("ids", ids.join(","));
    const result = await sharePlace({
      title: t("metaTitle"),
      text: t("shareText", {
        names: ids
          .map((id) => localizedDestinationName(DEST_BY_ID.get(id)!, locale))
          .join(" · "),
      }),
      url: url.toString(),
    });
    if (result === "copied") {
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2500);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {ids.map((id, i) => {
          const d = DEST_BY_ID.get(id)!;
          return (
            <span
              key={id}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-raised py-1 pl-3 pr-1.5 text-xs text-ink"
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: SERIES_COLORS[mode][i % SERIES_COLORS[mode].length] }}
              />
              {getCountryFlag(d.country)} {localizedDestinationName(d, locale)}
              <button
                type="button"
                aria-label={t("remove", { name: localizedDestinationName(d, locale) })}
                onClick={() =>
                  fromUrl || !savedIds.includes(id) ? setRemoved((r) => [...r, id]) : toggle(id)
                }
                className="flex h-5 w-5 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-surface-sunken hover:text-ink"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          );
        })}
        <div className="ml-auto flex gap-2">
          {YEARS.map((y) => (
            <Chip key={y} selected={y === year} onClick={() => setYear(y)}>
              {y}
            </Chip>
          ))}
        </div>
      </div>

      <Card className="mt-5 p-5 sm:p-6">
        {isLoading && !data ? (
          <p className="text-sm text-ink-faint">{t("loading")}</p>
        ) : (
          <div className="text-ink">
            <CrowdCurve
              series={series}
              ariaLabel={t("curveAria")}
              monthLabels={getShortMonthNames(locale)}
              className="h-40"
            />
          </div>
        )}

        <ul className="mt-5 divide-y divide-line border-t border-line">
          {series.map((s) => {
            const d = DEST_BY_ID.get(s.id)!;
            const qw = quietestWeek(s.values);
            return (
              <li key={s.id} className="flex items-baseline gap-3 py-2.5 text-sm">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 shrink-0 self-center rounded-full"
                  style={{ backgroundColor: s.color }}
                />
                <span className="font-medium text-ink">{localizedDestinationName(d, locale)}</span>
                <span className="text-xs text-ink-faint">{d.country}</span>
                {qw !== null && (
                  <span className="ml-auto text-right">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {t("quietestCol")}
                    </span>{" "}
                    <span className="text-ink-muted">{getWeekDateRange(year, qw, locale)}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={handleShare}>
            {tShare("share")}
          </Button>
          {shareState === "copied" && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
              {tShare("copied")}
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}
