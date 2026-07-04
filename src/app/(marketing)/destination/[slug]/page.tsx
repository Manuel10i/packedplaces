import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCountryName } from "@/lib/data";
import {
  allDestinationSlugs,
  getSlugEntry,
  localizedSlugsForSlug,
  hreflangSlugMap,
  crowdByMonth,
  type CrowdLevel,
  type LocalizedSlugs,
} from "@/lib/destinations";

const BASE_URL = "https://packedplaces.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return allDestinationSlugs().map((slug) => ({ slug }));
}

const destUrl = (slug: string) => `${BASE_URL}/destination/${slug}`;

/** hreflang alternates as full URLs, keyed by hreflang value. */
function hreflangLanguages(slug: string): Record<string, string> | undefined {
  const map = hreflangSlugMap(slug);
  if (!map) return undefined;
  return Object.fromEntries(
    Object.entries(map).map(([lang, s]) => [lang, destUrl(s)]),
  );
}

/** Per-locale hrefs for the language switcher (only locales with a dedicated URL). */
function switcherHrefs(alts: LocalizedSlugs): Record<string, string> {
  const hrefs: Record<string, string> = {};
  if (alts.en) hrefs.en = `/destination/${alts.en}`;
  if (alts.de) hrefs.de = `/destination/${alts.de}`;
  return hrefs;
}

function monthNames(locale: string, style: "long" | "short"): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: style });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

function joinList(locale: string, items: string[]): string {
  const lf = new Intl.ListFormat(locale, { style: "long", type: "conjunction" });
  return lf.format(items);
}

const LEVEL_CLASS: Record<CrowdLevel, string> = {
  high: "bg-red-500",
  medium: "bg-amber-400",
  low: "bg-emerald-400",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSlugEntry(slug);
  if (!entry) return {};
  const { destination: d, displayName } = entry;
  // German slugs (e.g. /destination/wien) always render as the German variant so
  // the hreflang="de" URL genuinely serves German content.
  const locale = entry.locale === "de" ? "de" : await getLocale();
  const t = await getTranslations({ locale, namespace: "destination" });
  const long = monthNames(locale, "long");
  const busiest = d.peakMonths.map((m) => long[m - 1]);
  const canonical = destUrl(slug);
  const languages = hreflangLanguages(slug);
  return {
    title: t("metaTitle", { name: displayName }),
    description:
      d.peakMonths.length === 12
        ? t("metaDescriptionYearRound", { name: displayName })
        : t("metaDescription", { name: displayName, months: joinList(locale, busiest) }),
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: { title: t("metaTitle", { name: displayName }), url: canonical },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getSlugEntry(slug);
  if (!entry) notFound();
  const { destination: d, displayName } = entry;

  // German slugs force German rendering (see generateMetadata).
  const locale = entry.locale === "de" ? "de" : await getLocale();
  const t = await getTranslations({ locale, namespace: "destination" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const alts = localizedSlugsForSlug(slug);
  const hrefByLocale = alts ? switcherHrefs(alts) : undefined;

  const long = monthNames(locale, "long");
  const short = monthNames(locale, "short");
  const crowd = crowdByMonth(d.peakMonths);
  const busiest = long.filter((_, i) => crowd[i] === "high");
  const quietest = long.filter((_, i) => crowd[i] === "low");
  const category = t(`categories.${d.category}`);
  const country = getCountryName(d.country, locale);
  const mapUrl = `/map?lat=${d.lat.toFixed(1)}&lng=${d.lng.toFixed(1)}&zoom=6`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: displayName,
    address: { "@type": "PostalAddress", addressCountry: d.country },
    geo: { "@type": "GeoCoordinates", latitude: d.lat, longitude: d.lng },
    url: destUrl(slug),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            {nav("brand")}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher
              variant="nav"
              currentLocale={locale}
              hrefByLocale={hrefByLocale}
            />
            <Link
              href={mapUrl}
              className="rounded-lg bg-cta-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              {nav("openMap")} &rarr;
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-white pb-8 pt-10">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
            {category} &middot; {country}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("h1", { name: displayName })}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {d.peakMonths.length === 12
              ? t("introYearRound", { name: displayName, category, country })
              : t("intro", {
                  name: displayName,
                  category,
                  country,
                  months: joinList(locale, busiest),
                })}
          </p>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-gray-900">{t("calendarHeading")}</h2>
          <div className="mt-6 grid grid-cols-6 gap-3 sm:grid-cols-12">
            {crowd.map((level, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`h-16 w-full rounded ${LEVEL_CLASS[level]}`}
                  title={`${long[i]}: ${t(`legend.${level}`)}`}
                  aria-label={`${long[i]}: ${t(`legend.${level}`)}`}
                />
                <span className="text-xs text-gray-500">{short[i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            {(["low", "medium", "high"] as CrowdLevel[]).map((lvl) => (
              <span key={lvl} className="inline-flex items-center gap-1.5">
                <span className={`inline-block h-3 w-3 rounded ${LEVEL_CLASS[lvl]}`} />
                {t(`legend.${lvl}`)}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {t("busiestHeading")}
              </h3>
              <p className="mt-2 text-lg font-medium text-gray-900">
                {busiest.length ? joinList(locale, busiest) : t("none")}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {t("quietestHeading")}
              </h3>
              <p className="mt-2 text-lg font-medium text-gray-900">
                {quietest.length ? joinList(locale, quietest) : t("none")}
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400">{t("disclaimer")}</p>

          <div className="mt-10">
            <Link
              href={mapUrl}
              className="inline-block rounded-lg bg-cta-gradient px-6 py-3 text-base font-medium text-white transition-transform hover:scale-105"
            >
              {t("mapCta", { name: displayName })} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
