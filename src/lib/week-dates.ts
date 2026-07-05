import { format } from "date-fns";
import { getDateLocale } from "@/i18n/date-locale";
import type { Locale } from "@/i18n/config";

/** Monday of the given ISO week. */
export function isoWeekStart(year: number, week: number): Date {
  const jan4 = new Date(year, 0, 4);
  const dayOfWeek = jan4.getDay() || 7;
  const monday = new Date(jan4);
  monday.setDate(jan4.getDate() - dayOfWeek + 1 + (week - 1) * 7);
  return monday;
}

/** Localized "Aug 3 - Aug 9, 2026" range for an ISO week. */
export function getWeekDateRange(year: number, week: number, locale: Locale): string {
  const dateLocale = getDateLocale(locale);
  const monday = isoWeekStart(year, week);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${format(monday, "MMM d", { locale: dateLocale })} - ${format(sunday, "MMM d, yyyy", { locale: dateLocale })}`;
}

/** Localized short label for a week, e.g. "Aug 3". */
export function getWeekShortLabel(year: number, week: number, locale: Locale): string {
  const dateLocale = getDateLocale(locale);
  return format(isoWeekStart(year, week), "MMM d", { locale: dateLocale });
}

/** Localized short month names (Jan..Dec) for chart axes. */
export function getShortMonthNames(locale: Locale): string[] {
  const dateLocale = getDateLocale(locale);
  return Array.from({ length: 12 }, (_, i) =>
    format(new Date(2025, i, 15), "MMM", { locale: dateLocale }),
  );
}
