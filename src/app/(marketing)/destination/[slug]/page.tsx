import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCountryName } from "@/lib/data";
import {
  allDestinationSlugs,
  getDestinationBySlug,
  crowdByMonth,
  type CrowdLevel,
} from "@/lib/destinations";

const BASE_URL = "https://packedplaces.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return allDestinationSlugs().map((slug) => ({ slug }));
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
  const d = getDestinationBySlug(slug);
  if (!d) return {};
  const locale = await getLocale();
  const t = await getTranslations("destination");
  const long = monthNames(locale, "long");
  const busiest = d.peakMonths.map((m) => long[m - 1]);
  const canonical = `${BASE_URL}/destination/${slug}`;
  return {
    title: t("metaTitle", { name: d.name }),
    description:
      d.peakMonths.length === 12
        ? t("metaDescriptionYearRound", { name: d.name })
        : t("metaDescription", { name: d.name, months: joinList(locale, busiest) }),
    alternates: { canonical },
    openGraph: { title: t("metaTitle", { name: d.name }), url: canonical },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  if (!d) notFound();

  const locale = await getLocale();
  const t = await getTranslations("destination");
  const nav = await getTranslations("nav");

  const long = monthNames(locale, "long");
  const short = monthNames(locale, "short");
  const crowd = crowdByMonth(d.peakMonths);
  const busiest = long.filter((_, i) => crowd[i] === "high");
  const quietest = long.filter((_, i) => crowd[i] === "low");
  const category = t(`categories.${d.category}`);
  const country = getCountryName(d.country);
  const mapUrl = `/map?lat=${d.lat.toFixed(1)}&lng=${d.lng.toFixed(1)}&zoom=6`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    address: { "@type": "PostalAddress", addressCountry: d.country },
    geo: { "@type": "GeoCoordinates", latitude: d.lat, longitude: d.lng },
    url: `${BASE_URL}/destination/${slug}`,
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
            <LanguageSwitcher variant="nav" />
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
            {t("h1", { name: d.name })}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {d.peakMonths.length === 12
              ? t("introYearRound", { name: d.name, category, country })
              : t("intro", {
                  name: d.name,
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
              {t("mapCta", { name: d.name })} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
