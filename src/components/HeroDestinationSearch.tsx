"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { destinations as allDestinations } from "@/lib/data/destinations";
import type { Destination } from "@/types";

type Match = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
};

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

// Built once at module load: a slim, diacritic-folded index sorted by
// popularity so the most-searched places surface first.
const INDEX: Array<Match & { norm: string }> = allDestinations
  .slice()
  .sort((a: Destination, b: Destination) => b.basePopularity - a.basePopularity)
  .map((d: Destination) => ({
    id: d.id,
    name: d.name,
    country: d.country,
    lat: d.lat,
    lng: d.lng,
    norm: normalize(d.name),
  }));

const MAX_RESULTS = 8;
const MIN_QUERY = 2;

export function HeroDestinationSearch() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => {
    const q = normalize(query);
    if (q.length < MIN_QUERY) return [];
    return INDEX.filter((d) => d.norm.includes(q)).slice(0, MAX_RESULTS);
  }, [query]);

  const go = (d: Match) => {
    router.push(`/map?lat=${d.lat.toFixed(2)}&lng=${d.lng.toFixed(2)}&zoom=8`);
  };

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
      go(results[active] ?? results[0]);
    }
  };

  const showDropdown = open && normalize(query).length >= MIN_QUERY;

  return (
    <div className="relative mx-auto max-w-md">
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
        placeholder={t("searchPlaceholder")}
        aria-label={t("searchLabel")}
        autoComplete="off"
        className="w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-base text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
      />
      {showDropdown && (
        <ul className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-lg border border-gray-100 bg-white text-left shadow-lg">
          {results.length === 0 ? (
            <li className="px-5 py-3 text-sm text-gray-400">
              {t("searchNoResults")}
            </li>
          ) : (
            results.map((d, i) => (
              <li key={d.id}>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    // Fire before the input blur so the navigation is not cancelled.
                    e.preventDefault();
                    go(d);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center justify-between px-5 py-2.5 text-left text-sm transition-colors ${
                    i === active
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-medium">{d.name}</span>
                  <span className="ml-3 shrink-0 text-xs text-gray-400">
                    {d.country}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
