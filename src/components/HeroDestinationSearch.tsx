"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  searchPlaces,
  matchDisplayName,
  normalizeQuery,
  MIN_QUERY,
  type SearchMatch,
} from "@/lib/destination-search";

export function HeroDestinationSearch() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => searchPlaces(query), [query]);

  const go = (d: SearchMatch) => {
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

  const showDropdown = open && normalizeQuery(query).length >= MIN_QUERY;

  return (
    <div className="relative max-w-md">
      <svg
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m20 20-3.5-3.5" />
      </svg>
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
        className="w-full rounded-[3px] border border-line bg-surface-raised py-3 pl-11 pr-4 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-ink-faint focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20"
      />
      {showDropdown && (
        <ul className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[4px] border border-line bg-surface-raised text-left shadow-xl">
          {results.length === 0 ? (
            <li className="px-5 py-3 text-sm text-ink-faint">{t("searchNoResults")}</li>
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
                      ? "bg-surface-sunken text-accent"
                      : "text-ink-muted hover:bg-surface-sunken"
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
  );
}
