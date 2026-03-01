"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { locales } from "@/i18n/config";

interface Props {
  variant: "nav" | "map";
}

export function LanguageSwitcher({ variant }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("switcher");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  if (variant === "nav") {
    return (
      <select
        value={locale}
        onChange={handleChange}
        className="hidden cursor-pointer border-none bg-transparent text-sm text-gray-600 outline-none hover:text-gray-900 sm:inline"
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
      className="cursor-pointer rounded-lg bg-white/95 px-2 py-1 text-xs font-medium text-gray-700 shadow-lg outline-none backdrop-blur-sm"
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
