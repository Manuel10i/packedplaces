import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/Button";

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

  const entries = [
    { href: "/#how-it-works", label: t("howItWorks") },
    { href: "/#data", label: t("data") },
    { href: "/#open-source", label: t("openSource") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" aria-label={t("brand")} className="font-display text-xl text-ink">
          Packed<span className="italic text-accent">Places</span>
          <span className="ml-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            .com
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          {entries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="hidden text-sm text-ink-muted transition-colors hover:text-accent sm:inline"
            >
              {entry.label}
            </Link>
          ))}
          <div className="hidden items-center gap-1 sm:flex">
            <LanguageSwitcher
              variant="nav"
              currentLocale={currentLocale}
              hrefByLocale={hrefByLocale}
            />
            <ThemeToggle />
          </div>
          <Button href={mapHref} size="sm">
            {t("openMap")} &rarr;
          </Button>
          <MobileNav
            entries={entries}
            menuLabel={t("menu")}
            currentLocale={currentLocale}
            hrefByLocale={hrefByLocale}
          />
        </div>
      </div>
    </nav>
  );
}
