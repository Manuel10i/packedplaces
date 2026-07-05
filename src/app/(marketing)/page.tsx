import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroDestinationSearch } from "@/components/HeroDestinationSearch";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { RouteArc } from "@/components/ui/Ornaments";
import { CrowdCurve } from "@/components/ui/CrowdCurve";
import { destinations } from "@/lib/data/destinations";
import { localizedDestinationName } from "@/lib/destinations";
import { getWeeklyBusyness } from "@/lib/services/destination-busyness";
import { getShortMonthNames } from "@/lib/week-dates";
import type { Locale } from "@/i18n/config";

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PackedPlaces",
  url: "https://packedplaces.com",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  description:
    "See how crowded travel destinations really get, week by week, powered by school holiday data from 100+ countries.",
  inLanguage: ["en", "de", "es", "fr"],
};

export const metadata: Metadata = {
  title: "PackedPlaces.com — See How Crowded Travel Destinations Really Get",
};

/* Dot-grid world map — small circles placed at land positions (equirectangular, viewBox 0 0 100 50) */
const DOT_POSITIONS = [
  // North America
  [14,8],[16,8],[18,8],[12,10],[14,10],[16,10],[18,10],[20,10],
  [10,12],[12,12],[14,12],[16,12],[18,12],[20,12],[22,12],
  [12,14],[14,14],[16,14],[18,14],[20,14],[22,14],[24,14],
  [14,16],[16,16],[18,16],[20,16],[22,16],[24,16],
  [16,18],[18,18],[20,18],[22,18],[24,18],
  [18,20],[20,20],[22,20],
  [20,22],[22,22],
  // South America
  [28,26],[30,26],[32,26],
  [28,28],[30,28],[32,28],[34,28],
  [28,30],[30,30],[32,30],[34,30],
  [30,32],[32,32],[34,32],
  [30,34],[32,34],
  [30,36],[32,36],
  [30,38],[32,38],
  [30,40],
  // Europe
  [48,10],[50,10],[52,10],
  [46,12],[48,12],[50,12],[52,12],[54,12],
  [48,14],[50,14],[52,14],[54,14],
  [48,16],[50,16],[52,16],
  [50,18],
  // Africa
  [48,20],[50,20],[52,20],[54,20],
  [48,22],[50,22],[52,22],[54,22],[56,22],
  [48,24],[50,24],[52,24],[54,24],[56,24],
  [48,26],[50,26],[52,26],[54,26],
  [50,28],[52,28],[54,28],
  [50,30],[52,30],[54,30],
  [50,32],[52,32],
  [52,34],
  // Asia
  [56,10],[58,10],[60,10],[62,10],[64,10],[66,10],[68,10],[70,10],
  [56,12],[58,12],[60,12],[62,12],[64,12],[66,12],[68,12],[70,12],[72,12],[74,12],
  [58,14],[60,14],[62,14],[64,14],[66,14],[68,14],[70,14],[72,14],[74,14],[76,14],
  [60,16],[62,16],[64,16],[66,16],[68,16],[70,16],[72,16],[74,16],[76,16],[78,16],
  [62,18],[64,18],[66,18],[68,18],[70,18],[72,18],[74,18],[76,18],[78,18],
  [64,20],[66,20],[68,20],[70,20],[72,20],[74,20],[76,20],
  [66,22],[68,22],[70,22],
  // India / SE Asia
  [66,24],[68,24],[70,24],[72,24],[74,24],
  [68,26],[70,26],[72,26],
  // Australia
  [76,32],[78,32],[80,32],[82,32],
  [76,34],[78,34],[80,34],[82,34],[84,34],
  [78,36],[80,36],[82,36],[84,36],
  [80,38],[82,38],
  // Japan / Indonesia
  [80,16],[82,16],
  [80,18],
  [74,26],[76,26],[78,26],[80,26],
] as const;

function WorldMapDots({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      aria-hidden="true"
    >
      {DOT_POSITIONS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={0.6} fill="currentColor" />
      ))}
    </svg>
  );
}

const HERO_STATS = [
  { value: "127", key: "hero.statRegions" },
  { value: "700+", key: "hero.statDestinations" },
  { value: "6,000+", key: "hero.statPatterns" },
  { value: "50+", key: "hero.statEvents" },
  { value: "100+", key: "hero.statCountries" },
] as const;

const FEATURES = [
  { href: "/features/crowdedness", titleKey: "features.crowdednessTitle", textKey: "features.crowdednessText" },
  { href: "/features/seasonality", titleKey: "features.hemisphereTitle", textKey: "features.hemisphereText" },
  { href: "/features/categories", titleKey: "features.categoriesTitle", textKey: "features.categoriesText" },
  { href: "/features/holiday-boost", titleKey: "features.boostTitle", textKey: "features.boostText" },
  { href: "/features/timeline", titleKey: "features.timelineTitle", textKey: "features.timelineText" },
  { href: "/features/holiday-providers", titleKey: "features.providersTitle", textKey: "features.providersText" },
  { href: "/features/events", titleKey: "features.eventsTitle", textKey: "features.eventsText" },
] as const;

const CAPACITY_ROWS = [
  { key: "data.catCity", peak: "5.0", off: "4.0" },
  { key: "data.catBeach", peak: "2.0", off: "0.5" },
  { key: "data.catSki", peak: "1.5", off: "0.3" },
  { key: "data.catIsland", peak: "1.0", off: "0.4" },
  { key: "data.catSafari", peak: "0.8", off: "0.3" },
  { key: "data.catDesert", peak: "0.5", off: "0.2" },
] as const;

export default async function MarketingPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const [headlineTop, ...headlineRest] = t("hero.headline").split("\n");

  // Sample crowd curve for the best-time teaser (static model, no DB).
  const sample =
    destinations.find((d) => d.name === "Venice") ??
    destinations.find((d) => d.name === "Hallstatt") ??
    destinations[0];
  const sampleWeekly = getWeeklyBusyness(sample.id).slice(0, 52);

  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <SiteHeader />

      {/* Hero — asymmetric editorial split over a cartographic field */}
      <section className="relative overflow-hidden bg-atlas-field">
        <WorldMapDots className="pointer-events-none absolute -right-40 top-6 hidden w-[56rem] max-w-none text-accent-2/25 animate-pulse-dot md:block" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <p className="animate-on-scroll font-mono text-[11px] uppercase tracking-[0.3em] text-accent sm:text-xs">
            127 {t("hero.statRegions")} · 700+ {t("hero.statDestinations")} · 100+{" "}
            {t("hero.statCountries")}
          </p>
          <h1 className="animate-on-scroll mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {headlineTop}
            {headlineRest.length > 0 && (
              <span className="block italic text-accent">{headlineRest.join(" ")}</span>
            )}
          </h1>
          <p className="animate-on-scroll-delay-1 mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {t("hero.description")}
          </p>
          <div className="animate-on-scroll-delay-2 mt-8 max-w-xl">
            <HeroDestinationSearch />
            <p className="mt-3 text-sm text-ink-faint">
              {t("hero.searchHint")}{" "}
              <Link
                href="/map"
                className="font-medium text-accent-2 underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
              >
                {t("hero.cta")} &rarr;
              </Link>
            </p>
          </div>

          {/* Stats strip — Fraunces numerals over mono labels, hairline separators */}
          <div className="animate-on-scroll-delay-3 mt-14 grid grid-cols-2 gap-y-6 sm:flex sm:gap-0 sm:divide-x sm:divide-line">
            {HERO_STATS.map((stat) => (
              <div key={stat.key} className="sm:px-8 sm:first:pl-0">
                <p className="font-display text-3xl text-ink">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  {t(stat.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — hairline grid of numbered steps */}
      <section id="how-it-works" className="border-y border-line bg-surface-sunken py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="№ 01" title={t("howItWorks.title")} className="animate-on-scroll" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {([1, 2, 3, 4] as const).map((step) => (
              <div
                key={step}
                className={`animate-on-scroll-delay-${Math.min(step, 3)} bg-surface-raised p-6`}
              >
                <p className="font-mono text-xs tracking-widest text-accent">0{step}</p>
                <h3 className="mt-3 font-display text-lg text-ink">
                  {t(`howItWorks.step${step}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {t(`howItWorks.step${step}Text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — numbered editorial index */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="№ 02" title={t("features.title")} className="animate-on-scroll" />
          <div className="mt-8 grid gap-x-12 md:grid-cols-2">
            {FEATURES.map((feat, i) => (
              <Link
                key={feat.href}
                href={feat.href}
                className={`group flex gap-5 border-b border-line py-6 transition-colors hover:border-accent animate-on-scroll-delay-${Math.min(i % 4, 3)}`}
              >
                <span className="pt-1 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                      {t(feat.titleKey)}
                    </h3>
                    <span
                      aria-hidden
                      className="text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-accent"
                    >
                      &rarr;
                    </span>
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t(feat.textKey)}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best-time teaser */}
      <section className="border-t border-line bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={`✦ ${t("bestTime.eyebrow")}`}
            title={t("bestTime.title")}
            lede={t("bestTime.lede")}
            align="center"
            className="animate-on-scroll"
          />
          <div className="animate-on-scroll-delay-1 mt-10 rounded-[4px] border border-line bg-surface-raised p-5 text-ink sm:p-6">
            <CrowdCurve
              series={[{ id: sample.id, values: sampleWeekly }]}
              markMinMax
              ariaLabel={t("bestTime.sampleCaption", { name: localizedDestinationName(sample, locale) })}
              monthLabels={getShortMonthNames(locale)}
              className="h-28"
            />
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              {t("bestTime.sampleCaption", { name: localizedDestinationName(sample, locale) })}
            </p>
          </div>
          <div className="animate-on-scroll-delay-2 mt-8 text-center">
            <Button href="/best-time" size="lg">
              {t("bestTime.teaserCta")} &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Data & Methodology */}
      <section id="data" className="border-y border-line bg-surface-sunken bg-map-grid py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="№ 03" title={t("data.title")} className="animate-on-scroll" />
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div className="animate-on-scroll-delay-1">
              <h3 className="font-display text-lg text-ink">{t("data.sourcesTitle")}</h3>
              <ul className="mt-4 space-y-4 text-sm text-ink-muted">
                {(
                  [
                    ["data.populationLabel", "data.populationText"],
                    ["data.tourismLabel", "data.tourismText"],
                    ["data.holidaysLabel", "data.holidaysText"],
                    ["data.eventsLabel", "data.eventsDataText"],
                    ["data.geographyLabel", "data.geographyText"],
                  ] as const
                ).map(([labelKey, textKey]) => (
                  <li key={labelKey} className="border-l-2 border-dotted border-accent/50 pl-4">
                    <span className="font-medium text-ink">{t(labelKey)}</span>{" "}
                    <span className="leading-relaxed">{t(textKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-on-scroll-delay-2">
              <h3 className="font-display text-lg text-ink">{t("data.capacityTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t("data.capacityDescription")}
              </p>
              <table className="mt-4 w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line-strong">
                    <th className="pb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                      {t("data.colCategory")}
                    </th>
                    <th className="pb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                      {t("data.colPeak")}
                    </th>
                    <th className="pb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                      {t("data.colOffPeak")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  {CAPACITY_ROWS.map((row) => (
                    <tr key={row.key} className="border-b border-line last:border-b-0">
                      <td className="py-2 text-ink">{t(row.key)}</td>
                      <td className="font-mono">{row.peak}</td>
                      <td className="font-mono">{row.off}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source" className="relative overflow-hidden bg-atlas-field py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <RouteArc className="mx-auto h-12 w-56 text-accent/60 animate-on-scroll" />
          <SectionHeading
            eyebrow="№ 04"
            title={t("openSource.title")}
            lede={t("openSource.description")}
            align="center"
            className="animate-on-scroll mt-4"
          />
          <div className="animate-on-scroll-delay-2 mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Tailwind CSS 4",
              "MapLibre GL",
              "PostgreSQL",
              "Drizzle ORM",
            ].map((tech) => (
              <Chip key={tech} asLabel>
                {tech}
              </Chip>
            ))}
          </div>
          <div className="animate-on-scroll-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://github.com/Manuel10i/packedplaces" target="_blank" rel="noopener noreferrer">
              {t("openSource.viewOnGithub")}
            </Button>
            <Button
              href="https://github.com/Manuel10i/packedplaces/blob/main/docs/ADDING-REGIONS.md"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {t("openSource.contributions")}
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
