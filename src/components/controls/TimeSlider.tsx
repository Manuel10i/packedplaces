"use client";

import { useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useTranslations, useLocale } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { format, getISOWeek } from "date-fns";
import { getDateLocale } from "@/i18n/date-locale";
import { getWeekDateRange } from "@/lib/week-dates";
import type { Locale } from "@/i18n/config";

function getMonthMarks(locale: Locale): Record<number, string> {
  const dateLocale = getDateLocale(locale);
  const marks: Record<number, string> = {};
  const monthWeeks = [1, 5, 9, 14, 18, 22, 27, 31, 35, 40, 44, 48];
  monthWeeks.forEach((week, i) => {
    // Create a date in that month and format with date-fns locale
    const d = new Date(2025, i, 15);
    marks[week] = format(d, "MMM", { locale: dateLocale });
  });
  return marks;
}

interface TimeSliderProps {
  className?: string;
}

export function TimeSlider({ className = "" }: TimeSliderProps) {
  const { selectedWeek, selectedYear, isPlaying, setSelectedWeek, setSelectedYear, togglePlaying, advanceWeek } = useMapStore();
  const t = useTranslations("slider");
  const locale = useLocale() as Locale;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(advanceWeek, 500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, advanceWeek]);

  const isCurrentWeek =
    selectedWeek === getISOWeek(new Date()) && selectedYear === new Date().getFullYear();

  return (
    <div className={className}>
      <div className="mb-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-ink">{t("week", { week: selectedWeek })}</span>
          {!isCurrentWeek && (
            <button
              onClick={() => {
                const now = new Date();
                setSelectedYear(now.getFullYear());
                setSelectedWeek(getISOWeek(now));
              }}
              className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-2 transition-colors hover:border-accent-2"
            >
              {t("today")}
            </button>
          )}
        </div>
        <span className="truncate text-sm text-ink-faint">
          {getWeekDateRange(selectedYear, selectedWeek, locale)}
        </span>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3">
        <button
          onClick={togglePlaying}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-2 text-accent-2-ink transition-colors hover:bg-accent-2-hover sm:h-8 sm:w-8"
          title={isPlaying ? t("pause") : t("play")}
          aria-label={isPlaying ? t("pause") : t("play")}
        >
          {isPlaying ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        <button
          onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
          disabled={selectedWeek <= 1}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink disabled:opacity-30 sm:hidden"
          aria-label={t("prevWeek")}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="min-w-0 flex-1 px-1 pb-4">
          <Slider
            min={1}
            max={52}
            value={selectedWeek}
            onChange={(value) => setSelectedWeek(value as number)}
            marks={getMonthMarks(locale)}
          />
        </div>

        <button
          onClick={() => setSelectedWeek(Math.min(52, selectedWeek + 1))}
          disabled={selectedWeek >= 52}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink disabled:opacity-30 sm:hidden"
          aria-label={t("nextWeek")}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
