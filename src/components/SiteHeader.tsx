import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface Props {
  /** Render the header in a specific locale (e.g. a forced-German destination slug). */
  locale?: string;
  /** Selected locale for the switcher, when it differs from the request locale. */
  currentLocale?: string;
  /** Per-locale hrefs so the switcher can jump to a localized URL. */
  hrefByLocale?: Record<string, string>;
  /** Target for the "open map" button; defaults to the generic map. */
  mapHref?: string;
}

/** Shared site header used across the landing page and content pages. */
export async function SiteHeader({
  locale,
  currentLocale,
  hrefByLocale,
  mapHref = "/map",
}: Props) {
  const t = locale
    ? await getTranslations({ locale, namespace: "nav" })
    : await getTranslations("nav");

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {t("brand")}
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/#how-it-works"
            className="hidden text-sm text-gray-600 transition-colors hover:text-brand-600 sm:inline"
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/#data"
            className="hidden text-sm text-gray-600 transition-colors hover:text-brand-600 sm:inline"
          >
            {t("data")}
          </Link>
          <Link
            href="/#open-source"
            className="hidden text-sm text-gray-600 transition-colors hover:text-brand-600 sm:inline"
          >
            {t("openSource")}
          </Link>
          <LanguageSwitcher
            variant="nav"
            currentLocale={currentLocale}
            hrefByLocale={hrefByLocale}
          />
          <Link
            href={mapHref}
            className="rounded-lg bg-cta-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {t("openMap")} &rarr;
          </Link>
        </div>
      </div>
    </nav>
  );
}
