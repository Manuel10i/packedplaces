import { de, es, fr, enUS } from "date-fns/locale";
import type { Locale } from "./config";

const DATE_LOCALES = { en: enUS, de, es, fr } as const;

export function getDateLocale(locale: Locale) {
  return DATE_LOCALES[locale] ?? enUS;
}
