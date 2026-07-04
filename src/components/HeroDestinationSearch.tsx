"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { destinations as allDestinations } from "@/lib/data/destinations";
import { geoPlaces, cityAliases } from "@/lib/data/geo-search";
import { getCountryFlag } from "@/lib/data";
import type { Destination } from "@/types";

type Match = {
  id: string;
  name: string;
  label: string;
  lat: number;
  lng: number;
  zoom: number;
};

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

type Indexed = Match & { norms: string[] };

// Alternate search names for a place: localized names (from geoPlaces.aliases,
// e.g. Deutschland for Germany) plus curated city exonyms (e.g. Wien for Vienna).
function buildNorms(name: string, extra: string[] = []): string[] {
  const aliases = cityAliases[normalize(name)] ?? [];
  return [...new Set([name, ...extra, ...aliases].map(normalize))];
}

// Built once at module load: a slim, diacritic-folded index. Specific
// destinations rank first (by popularity), then capitals, then countries.
const destinationMatches: Indexed[] = allDestinations
  .slice()
  .sort((a: Destination, b: Destination) => b.basePopularity - a.basePopularity)
  .map((d: Destination) => ({
    id: d.id,
    name: d.name,
    label: getCountryFlag(d.country) || d.country,
    lat: d.lat,
    lng: d.lng,
    zoom: 8,
    norms: buildNorms(d.name),
  }));

// Countries + capitals, skipping any whose name already exists as a destination.
const seen = new Set(destinationMatches.map((d) => normalize(d.name)));
const geoMatches: Indexed[] = geoPlaces
  .filter((p) => !seen.has(normalize(p.name)))
  .map((p) => ({
    id: `${p.kind}:${p.cc}`,
    name: p.name,
    label: getCountryFlag(p.cc) || p.cc,
    lat: p.lat,
    lng: p.lng,
    zoom: p.zoom,
    norms: buildNorms(p.name, p.aliases ?? []),
  }));

const INDEX: Indexed[] = [...destinationMatches, ...geoMatches];

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
    return INDEX.filter((d) => d.norms.some((n) => n.includes(q))).slice(0, MAX_RESULTS);
  }, [query]);

  const go = (d: Match) => {
    router.push(`/map?lat=${d.lat.toFixed(2)}&lng=${d.lng.toFixed(2)}&zoom=${d.zoom}`);
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
                    {d.label}
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
