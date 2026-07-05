"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { locales } from "@/i18n/config";
import { trackEvent } from "@/lib/analytics";

interface Props {
  variant: "nav" | "map" | "header";
  /**
   * Optional per-locale hrefs. When the chosen locale has a dedicated URL
   * (e.g. a German destination slug), navigate there instead of just
   * re-rendering the current page in the new locale.
   */
  hrefByLocale?: Partial<Record<string, string>>;
  /** Locale to show as selected, overriding the request locale (slug-driven pages). */
  currentLocale?: string;
}

export function LanguageSwitcher({ variant, hrefByLocale, currentLocale }: Props) {
  const requestLocale = useLocale();
  const locale = currentLocale ?? requestLocale;
  const router = useRouter();
  const t = useTranslations("switcher");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    trackEvent("language_switch", { locale: newLocale });
    const href = hrefByLocale?.[newLocale];
    if (href) {
      router.push(href);
    } else {
      router.refresh();
    }
  }

  if (variant === "nav") {
    return (
      <select
        value={locale}
        onChange={handleChange}
        className="hidden cursor-pointer border-none bg-transparent text-sm text-ink-muted outline-none hover:text-ink sm:inline"
        aria-label={t("label")}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
    );
  }

  if (variant === "header") {
    return (
      <select
        value={locale}
        onChange={handleChange}
        className="cursor-pointer border-none bg-transparent text-sm font-medium text-ink-muted outline-none hover:text-ink"
        aria-label={t("label")}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
    );
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="w-fit cursor-pointer rounded-[3px] border border-line bg-surface-raised/95 px-2 py-1 text-xs font-medium text-ink-muted shadow-sm outline-none backdrop-blur-sm hover:text-ink"
      aria-label={t("label")}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {t(l)}
        </option>
      ))}
    </select>
  );
}
