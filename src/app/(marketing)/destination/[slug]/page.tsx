import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmbedSnippet } from "@/components/embed/EmbedSnippet";
import { getCountryName } from "@/lib/data";
import {
  allDestinationSlugs,
  getSlugEntry,
  localizedDestinationName,
  localizedSlugsForSlug,
  hreflangSlugMap,
  type LocalizedSlugs,
} from "@/lib/destinations";
import {
  getMonthlyBusyness,
  getWeeklyBusyness,
} from "@/lib/services/destination-busyness";
import { quietAlternatives } from "@/lib/quiet-alternatives";
import { MONTH_SLUGS } from "@/lib/quiet-months";
import { slugForDestination } from "@/lib/destinations";
import { getCountryFlag } from "@/lib/data";
import {
  busynessColor,
  busynessLabelKey,
  BUSYNESS_BANDS,
} from "@/lib/busyness-scale";
import { CrowdCurve } from "@/components/ui/CrowdCurve";
import { DestinationActions } from "@/components/destination/DestinationActions";
import Link from "next/link";

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

/** "48.21°N 16.37°E" — degrees with hemisphere suffixes, 2 decimals. */
function formatCoordinates(lat: number, lng: number): string {
  const latStr = `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? "N" : "S"}`;
  const lngStr = `${Math.abs(lng).toFixed(2)}°${lng >= 0 ? "E" : "W"}`;
  return `${latStr} ${lngStr}`;
}

function monthNames(locale: string, style: "long" | "short"): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: style });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

function joinList(locale: string, items: string[]): string {
  const lf = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  });
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
  const peakIdx =
    range > 0 ? scores.flatMap((s, i) => (s >= max - near ? [i] : [])) : [];
  const quietIdx =
    range > 0 ? scores.flatMap((s, i) => (s <= min + near ? [i] : [])) : [];
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
  const { destination: d } = entry;
  // German slugs (e.g. /destination/wien) always render as the German variant so
  // the hreflang="de" URL genuinely serves German content.
  const locale = entry.locale === "de" ? "de" : await getLocale();
  // German rendering (via slug or via the language switcher) uses the exonym.
  const displayName =
    locale === "de" ? localizedDestinationName(d, "de") : entry.displayName;
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
      : t("metaDescription", {
          name: displayName,
          months: joinList(locale, busiest),
        }),
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: t("metaTitle", { name: displayName }),
      url: canonical,
      images: [
        {
          url: `${BASE_URL}/api/og/destination/${slug}`,
          width: 1200,
          height: 630,
          alt: displayName,
        },
      ],
    },
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
  const { destination: d } = entry;

  // German slugs force German rendering (see generateMetadata).
  const locale = entry.locale === "de" ? "de" : await getLocale();
  const displayName =
    locale === "de" ? localizedDestinationName(d, "de") : entry.displayName;
  const t = await getTranslations({ locale, namespace: "destination" });
  const tip = await getTranslations({ locale, namespace: "tooltip" });
  const tSaved = await getTranslations({ locale, namespace: "saved" });
  const tShare = await getTranslations({ locale, namespace: "share" });
  const tAlt = await getTranslations({ locale, namespace: "alternatives" });
  const tExplore = await getTranslations({ locale, namespace: "explore" });
  const tEmbed = await getTranslations({ locale, namespace: "embed" });
  const alts = localizedSlugsForSlug(slug);
  const hrefByLocale = alts ? switcherHrefs(alts) : undefined;

  const long = monthNames(locale, "long");
  const short = monthNames(locale, "short");
  // Same crowdedness model as the map (services/busyness-core), aggregated to
  // months — so the calendar here matches the map instead of a raw peakMonths flag.
  const scores = getMonthlyBusyness(d.id);
  const weekly = getWeeklyBusyness(d.id).slice(0, 52);
  const alternatives = quietAlternatives(d.id);
  const { peakIdx, quietIdx, yearRound } = summarizeBusyness(scores);
  const busiest = peakIdx.map((i) => long[i]);
  const quietest = quietIdx.map((i) => long[i]);
  const category = t(`categories.${d.category}`);
  const country = getCountryName(d.country, locale);
  const mapUrl = `/map?lat=${d.lat.toFixed(1)}&lng=${d.lng.toFixed(1)}&zoom=6`;
  const embedSrc = `${BASE_URL}/embed/${slug}?lang=${locale}`;
  // The attribution <a> lives in the host page's HTML (not inside the iframe),
  // so it is the real, followable backlink each embed places to this page.
  const embedSnippet =
    `<iframe src="${embedSrc}" width="360" height="200" loading="lazy" style="border:0;max-width:100%" title="${displayName}"></iframe>\n` +
    `<a href="${destUrl(slug)}">${tEmbed("attribution", { name: displayName })} · packedplaces</a>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: displayName,
    address: { "@type": "PostalAddress", addressCountry: d.country },
    geo: { "@type": "GeoCoordinates", latitude: d.lat, longitude: d.lng },
    url: destUrl(slug),
  };

  // FAQ: answers are derived from the same busiest/quietest model shown above,
  // so nothing here is hand-asserted. It targets the "is X busy", "best time to
  // visit X" and "when is X least crowded" phrasings these pages already surface
  // for, and the FAQPage JSON-LD mirrors exactly what is rendered.
  const hasQuiet = quietest.length > 0;
  const faqs = [
    {
      q: t("faqBusyQ", { name: displayName }),
      a: yearRound
        ? t("faqBusyAYearRound", { name: displayName })
        : t("faqBusyA", {
            name: displayName,
            months: joinList(locale, busiest),
          }),
    },
    {
      q: t("faqBestTimeQ", { name: displayName }),
      a: hasQuiet
        ? t("faqBestTimeA", {
            name: displayName,
            months: joinList(locale, quietest),
          })
        : t("faqBestTimeAYearRound", { name: displayName }),
    },
    ...(hasQuiet
      ? [
          {
            q: t("faqQuietQ", { name: displayName }),
            a: t("faqQuietA", {
              name: displayName,
              months: joinList(locale, quietest),
            }),
          },
        ]
      : []),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader
        locale={locale}
        currentLocale={locale}
        hrefByLocale={hrefByLocale}
        mapHref={mapUrl}
      />

      <section className="bg-atlas-field pb-10 pt-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {category} &middot; {country} &middot;{" "}
            {formatCoordinates(d.lat, d.lng)}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
            {t("h1", { name: displayName })}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {yearRound
              ? t("introYearRound", { name: displayName, category, country })
              : hasQuiet
                ? t("intro", {
                    name: displayName,
                    category,
                    country,
                    months: joinList(locale, busiest),
                    quiet: joinList(locale, quietest),
                  })
                : t("introNoQuiet", {
                    name: displayName,
                    category,
                    country,
                    months: joinList(locale, busiest),
                  })}
          </p>
          <div className="mt-6">
            <DestinationActions
              destinationId={d.id}
              saveLabel={tSaved("save")}
              savedLabel={tSaved("saved")}
              shareLabel={tShare("share")}
              copiedLabel={tShare("copied")}
              share={{
                title: `${displayName} — PackedPlaces`,
                text: t("shareText", { name: displayName }),
                url: destUrl(slug),
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-surface pb-16 pt-10">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl text-ink">
            {t("calendarHeading")}
          </h2>
          <div className="mt-6 grid grid-cols-6 gap-px sm:grid-cols-12">
            {scores.map((score, i) => {
              const label = tip(busynessLabelKey(score));
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="h-16 w-full rounded-[2px]"
                    style={{ backgroundColor: busynessColor(score) }}
                    title={`${long[i]}: ${label}`}
                    aria-label={`${long[i]}: ${label}`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {short[i]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            {BUSYNESS_BANDS.map((key, band) => (
              <span key={key} className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block h-3 w-3 rounded-[2px]"
                  style={{ backgroundColor: busynessColor(band * 0.2 + 0.1) }}
                />
                {tip(key)}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {t("busiestHeading")}
              </h3>
              <p className="mt-3 font-display text-xl text-ink">
                {busiest.length ? joinList(locale, busiest) : t("none")}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
                {t("quietestHeading")}
              </h3>
              <p className="mt-3 font-display text-xl text-ink">
                {quietest.length ? joinList(locale, quietest) : t("none")}
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">
              {t("curveHeading")}
            </h2>
            <div className="mt-5 text-ink">
              <CrowdCurve
                series={[{ id: d.id, values: weekly }]}
                markMinMax
                ariaLabel={t("curveAria", { name: displayName })}
                monthLabels={short}
                className="h-32"
              />
            </div>
          </div>

          {alternatives.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl text-ink">
                {tAlt("title")}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">{tAlt("lede")}</p>
              <div className="mt-5 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                {alternatives.map((alt) => (
                  <Link
                    key={alt.destination.id}
                    href={`/destination/${slugForDestination(alt.destination)}`}
                    className="group bg-surface-raised p-4 transition-colors hover:bg-surface-sunken"
                  >
                    <p className="font-display text-lg text-ink transition-colors group-hover:text-accent">
                      {getCountryFlag(alt.destination.country)}{" "}
                      {localizedDestinationName(alt.destination, locale)}
                    </p>
                    <p className="mt-1 flex items-center justify-between gap-3">
                      <span className="text-xs text-ink-faint">
                        {getCountryName(alt.destination.country, locale)}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent-2">
                        {tAlt("calmer", { bands: alt.bandsCalmer })}
                      </span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">
              {tExplore("title")}
            </h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              <li className="py-4">
                <Link
                  href={
                    hasQuiet
                      ? `/least-crowded/${MONTH_SLUGS[quietIdx[0]]}`
                      : "/least-crowded"
                  }
                  className="text-accent underline underline-offset-2 hover:text-accent-2"
                >
                  {hasQuiet
                    ? tExplore("monthHub", { month: long[quietIdx[0]] })
                    : tExplore("monthHubGeneric")}
                </Link>
              </li>
              <li className="py-4">
                <Link
                  href="/crowd-index"
                  className="text-accent underline underline-offset-2 hover:text-accent-2"
                >
                  {tExplore("crowdIndex")}
                </Link>
              </li>
              <li className="py-4">
                <Link
                  href="/guides"
                  className="text-accent underline underline-offset-2 hover:text-accent-2"
                >
                  {tExplore("guides")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl text-ink">{t("faqTitle")}</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-display text-lg text-ink">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            {t("disclaimer")}
          </p>

          <div className="mt-10">
            <Button href={mapUrl} size="lg">
              {t("mapCta", { name: displayName })} &rarr;
            </Button>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-2xl text-ink">
              {tEmbed("heading")}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">
              {tEmbed("intro", { name: displayName })}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
              <iframe
                src={embedSrc}
                width={360}
                height={200}
                loading="lazy"
                style={{ border: 0, maxWidth: "100%" }}
                title={tEmbed("previewTitle", { name: displayName })}
              />
              <EmbedSnippet snippet={embedSnippet} />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </>
  );
}
