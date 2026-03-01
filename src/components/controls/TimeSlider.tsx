"use client";

import { useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useTranslations, useLocale } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { format } from "date-fns";
import { getDateLocale } from "@/i18n/date-locale";
import type { Locale } from "@/i18n/config";

function getWeekDateRange(year: number, week: number, locale: Locale): string {
  const dateLocale = getDateLocale(locale);
  const jan4 = new Date(year, 0, 4);
  const dayOfWeek = jan4.getDay() || 7;
  const monday = new Date(jan4);
  monday.setDate(jan4.getDate() - dayOfWeek + 1 + (week - 1) * 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${format(monday, "MMM d", { locale: dateLocale })} - ${format(sunday, "MMM d, yyyy", { locale: dateLocale })}`;
}

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

export function TimeSlider() {
  const { selectedWeek, selectedYear, isPlaying, setSelectedWeek, togglePlaying, advanceWeek } = useMapStore();
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

  return (
    <div className="rounded-xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">
          {t("week", { week: selectedWeek })}
        </span>
        <span className="text-sm text-gray-500">
          {getWeekDateRange(selectedYear, selectedWeek, locale)}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlaying}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
          title={isPlaying ? t("pause") : t("play")}
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

        <div className="flex-1">
          <Slider
            min={1}
            max={52}
            value={selectedWeek}
            onChange={(value) => setSelectedWeek(value as number)}
            marks={getMonthMarks(locale)}
            styles={{
              track: { backgroundColor: "#3b82f6", height: 4 },
              rail: { backgroundColor: "#e5e7eb", height: 4 },
              handle: {
                borderColor: "#3b82f6",
                backgroundColor: "#ffffff",
                width: 16,
                height: 16,
                marginTop: -6,
                opacity: 1,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
