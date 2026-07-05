import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getCountryName } from "@/lib/data";
import {
  allDestinationSlugs,
  getSlugEntry,
  localizedSlugsForSlug,
  hreflangSlugMap,
  type LocalizedSlugs,
} from "@/lib/destinations";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import {
  busynessColor,
  busynessLabelKey,
  BUSYNESS_BANDS,
} from "@/lib/busyness-scale";

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

/**
 * Summarize a destination's 12 monthly busyness scores into its own peak and
 * quiet months (relative to that destination, so even a generally quiet place
 * shows when it is comparatively busier) and whether it is busy all year.
 */
function summarizeBusyness(scores: number[]) {
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const range = max - min;
  const near = range * 0.15;
  const peakIdx = range > 0 ? scores.flatMap((s, i) => (s >= max - near ? [i] : [])) : [];
  const quietIdx = range > 0 ? scores.flatMap((s, i) => (s <= min + near ? [i] : [])) : [];
  // Busy in every month (even the quietest stays "busy"), or a perfectly flat
  // profile with no month to single out — either way, use the year-round copy.
  const yearRound = min >= 0.4 || range === 0;
  return { peakIdx, quietIdx, yearRound };
}

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
  const { peakIdx, yearRound } = summarizeBusyness(getMonthlyBusyness(d.id));
  const busiest = peakIdx.map((i) => long[i]);
  const canonical = destUrl(slug);
  const languages = hreflangLanguages(slug);
  return {
    title: t("metaTitle", { name: displayName }),
    description: yearRound
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
  const tip = await getTranslations({ locale, namespace: "tooltip" });
  const alts = localizedSlugsForSlug(slug);
  const hrefByLocale = alts ? switcherHrefs(alts) : undefined;

  const long = monthNames(locale, "long");
  const short = monthNames(locale, "short");
  // Same crowdedness model as the map (services/busyness-core), aggregated to
  // months — so the calendar here matches the map instead of a raw peakMonths flag.
  const scores = getMonthlyBusyness(d.id);
  const { peakIdx, quietIdx, yearRound } = summarizeBusyness(scores);
  const busiest = peakIdx.map((i) => long[i]);
  const quietest = quietIdx.map((i) => long[i]);
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
      <SiteHeader
        locale={locale}
        currentLocale={locale}
        hrefByLocale={hrefByLocale}
        mapHref={mapUrl}
      />

      <section className="bg-white pb-8 pt-10">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
            {category} &middot; {country}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("h1", { name: displayName })}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {yearRound
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
            {scores.map((score, i) => {
              const label = tip(busynessLabelKey(score));
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="h-16 w-full rounded"
                    style={{ backgroundColor: busynessColor(score) }}
                    title={`${long[i]}: ${label}`}
                    aria-label={`${long[i]}: ${label}`}
                  />
                  <span className="text-xs text-gray-500">{short[i]}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            {BUSYNESS_BANDS.map((key, band) => (
              <span key={key} className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block h-3 w-3 rounded"
                  style={{ backgroundColor: busynessColor(band * 0.2 + 0.1) }}
                />
                {tip(key)}
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

      <SiteFooter locale={locale} />
    </>
  );
}
