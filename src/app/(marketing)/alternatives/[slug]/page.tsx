import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getCountryName, getCountryFlag } from "@/lib/data";
import {
  getSlugEntry,
  localizedDestinationName,
  localizedSlugsForSlug,
  hreflangSlugMap,
  slugForDestination,
  type LocalizedSlugs,
} from "@/lib/destinations";
import {
  quietAlternatives,
  slugsWithAlternatives,
} from "@/lib/quiet-alternatives";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";

const BASE_URL = "https://packedplaces.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return slugsWithAlternatives().map((slug) => ({ slug }));
}

const altUrl = (slug: string) => `${BASE_URL}/alternatives/${slug}`;

/** hreflang alternates as full URLs, keyed by hreflang value. */
function hreflangLanguages(slug: string): Record<string, string> | undefined {
  const map = hreflangSlugMap(slug);
  if (!map) return undefined;
  return Object.fromEntries(
    Object.entries(map).map(([lang, s]) => [lang, altUrl(s)]),
  );
}

/** Per-locale hrefs for the language switcher (only locales with a dedicated URL). */
function switcherHrefs(alts: LocalizedSlugs): Record<string, string> {
  const hrefs: Record<string, string> = {};
  if (alts.en) hrefs.en = `/alternatives/${alts.en}`;
  if (alts.de) hrefs.de = `/alternatives/${alts.de}`;
  return hrefs;
}

function monthNames(locale: string): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: "long" });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

/**
 * A destination's own quietest month index (relative to itself), or null when
 * the profile is flat. Mirrors the summarizeBusyness logic used on the
 * destination page so the calmest-month labels match across the site.
 */
function quietestMonthIndex(scores: number[]): number | null {
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  if (max - min === 0) return null;
  return scores.indexOf(min);
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
  const locale = entry.locale === "de" ? "de" : await getLocale();
  const displayName =
    locale === "de" ? localizedDestinationName(d, "de") : entry.displayName;
  const t = await getTranslations({ locale, namespace: "alternativesPage" });
  const count = quietAlternatives(d.id, { limit: 8 }).length;
  const canonical = altUrl(slug);
  const languages = hreflangLanguages(slug);
  return {
    title: t("metaTitle", { name: displayName }),
    description: t("metaDescription", { name: displayName, count }),
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

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getSlugEntry(slug);
  if (!entry) notFound();
  const { destination: d } = entry;

  const locale = entry.locale === "de" ? "de" : await getLocale();
  const displayName =
    locale === "de" ? localizedDestinationName(d, "de") : entry.displayName;
  const t = await getTranslations({ locale, namespace: "alternativesPage" });
  const tDest = await getTranslations({ locale, namespace: "destination" });
  const alts = localizedSlugsForSlug(slug);
  const hrefByLocale = alts ? switcherHrefs(alts) : undefined;

  const long = monthNames(locale);
  const category = tDest(`categories.${d.category}`);
  const country = getCountryName(d.country, locale);
  const mapUrl = `/map?lat=${d.lat.toFixed(1)}&lng=${d.lng.toFixed(1)}&zoom=6`;

  const alternatives = quietAlternatives(d.id, { limit: 8 }).map((alt) => {
    const qi = quietestMonthIndex(getMonthlyBusyness(alt.destination.id));
    return { ...alt, quietMonth: qi === null ? null : long[qi] };
  });
  // dynamicParams=false only prerenders slugs with alternatives, so this guards
  // against nothing rather than a real empty state.
  if (alternatives.length === 0) notFound();

  const faqs = [
    {
      q: t("faqWhichQ", { name: displayName }),
      a: t("faqWhichA", {
        name: displayName,
        first: localizedDestinationName(alternatives[0].destination, locale),
      }),
    },
    {
      q: t("faqWhyQ", { name: displayName }),
      a: t("faqWhyA", { name: displayName }),
    },
    {
      q: t("faqHowQ"),
      a: t("faqHowA", { name: displayName }),
    },
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("metaTitle", { name: displayName }),
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: localizedDestinationName(alt.destination, locale),
      url: `${BASE_URL}/destination/${slugForDestination(alt.destination)}`,
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <SiteHeader
        locale={locale}
        currentLocale={locale}
        hrefByLocale={hrefByLocale}
        mapHref={mapUrl}
      />

      <section className="bg-atlas-field pb-10 pt-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {category} &middot; {country}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
            {t("h1", { name: displayName })}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {t("intro", { name: displayName, category })}
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            {t("backToDestinationLead", { name: displayName })}{" "}
            <Link
              href={`/destination/${slug}`}
              className="text-accent underline underline-offset-2 hover:text-accent-2"
            >
              {t("backToDestinationLink", { name: displayName })}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-surface pb-16 pt-10">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl text-ink">
            {t("listHeading", { name: displayName })}
          </h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
            {alternatives.map((alt) => (
              <Link
                key={alt.destination.id}
                href={`/destination/${slugForDestination(alt.destination)}`}
                className="group bg-surface-raised p-5 transition-colors hover:bg-surface-sunken"
              >
                <p className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                  {getCountryFlag(alt.destination.country)}{" "}
                  {localizedDestinationName(alt.destination, locale)}
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs text-ink-faint">
                    {getCountryName(alt.destination.country, locale)}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-2">
                    {t("calmer", { bands: alt.bandsCalmer })}
                  </span>
                  {alt.quietMonth && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {t("quietest", { month: alt.quietMonth })}
                    </span>
                  )}
                </p>
              </Link>
            ))}
          </div>

          <Card className="mt-10 p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {t("methodHeading")}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {t("methodBody", { name: displayName })}
            </p>
          </Card>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-ink">
              {tDest("faqTitle")}
            </h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-display text-lg text-ink">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`/destination/${slug}`} size="lg">
              {t("calendarCta", { name: displayName })} &rarr;
            </Button>
            <Button href="/least-crowded" size="lg" variant="ghost">
              {t("leastCrowdedCta")}
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </>
  );
}
