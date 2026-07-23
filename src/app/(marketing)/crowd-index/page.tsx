import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { destinations, getCountryFlag, getCountryName } from "@/lib/data";
import { localizedDestinationName, slugForDestination } from "@/lib/destinations";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { busynessLabelKey, type BusynessLabelKey } from "@/lib/busyness-scale";

const BASE_URL = "https://packedplaces.com";
const CANONICAL = `${BASE_URL}/crowd-index`;

/** How many destinations the leaderboard shows. */
const TOP_N = 30;

export const dynamicParams = false;

function monthNames(locale: string): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: "long" });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

/**
 * Rank every destination by its annual peak crowd score. The score is the
 * highest monthly value our seasonal model assigns the place, so the ranking
 * reflects how packed each destination gets at its busiest, computed at build
 * time from the same dataset behind the map and the destination pages.
 */
function rankedDestinations() {
  return destinations
    .map((d) => {
      const scores = getMonthlyBusyness(d.id);
      const peak = Math.max(...scores);
      return {
        id: d.id,
        country: d.country,
        peak,
        busiestIdx: scores.indexOf(peak),
        lat: d.lat,
        lng: d.lng,
        slug: slugForDestination(d),
        basePopularity: d.basePopularity,
      };
    })
    .sort(
      (a, b) => b.peak - a.peak || b.basePopularity - a.basePopularity,
    )
    .slice(0, TOP_N);
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("crowdIndex");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: CANONICAL },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: CANONICAL,
      type: "article",
    },
  };
}

export default async function CrowdIndexPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "crowdIndex" });
  const tip = await getTranslations({ locale, namespace: "tooltip" });
  const long = monthNames(locale);

  const rows = rankedDestinations().map((r) => {
    const d = destinations.find((x) => x.id === r.id)!;
    return {
      ...r,
      name: localizedDestinationName(d, locale),
      flag: getCountryFlag(r.country),
      countryName: getCountryName(r.country, locale),
      label: busynessLabelKey(r.peak) as BusynessLabelKey,
    };
  });

  // FAQ copy lives in messages; JSON-LD mirrors exactly what is rendered.
  const faqKeys = ["q1", "q2", "q3"] as const;
  const faqs = faqKeys.map((q, i) => ({
    q: t(`faq.${q}`),
    a: t(`faq.a${i + 1}`),
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // ItemList mirrors the visible ranking so the leaderboard is a clean,
  // citable entity for search engines.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("metaTitle"),
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: rows.length,
    itemListElement: rows.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.name}, ${r.countryName}`,
      url: `${BASE_URL}/destination/${r.slug}`,
    })),
  };

  const mapDeeplink = (lat: number, lng: number) =>
    `/map?lat=${lat.toFixed(1)}&lng=${lng.toFixed(1)}&zoom=6`;

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader />

      <article>
        <section className="bg-atlas-field pb-10 pt-12">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              {t("kicker")}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {t("h1")}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {t("intro")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-faint">
              {t("methodology")}
            </p>
          </div>
        </section>

        <section className="bg-surface pb-16 pt-10">
          <div className="mx-auto max-w-3xl px-6">
            <ol className="grid gap-3">
              {rows.map((r, i) => (
                <li key={r.id}>
                  <Link href={`/destination/${r.slug}`} className="group block">
                    <Card className="flex items-center gap-4 p-4 transition-colors group-hover:border-accent">
                      <span className="w-8 shrink-0 text-center font-mono text-lg text-ink-faint">
                        {i + 1}
                      </span>
                      <span className="text-2xl" aria-hidden>
                        {r.flag}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-lg text-ink transition-colors group-hover:text-accent">
                          {r.name}
                        </span>
                        <span className="block text-sm text-ink-muted">
                          {r.countryName}
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block text-sm font-medium text-ink">
                          {tip(r.label)}
                        </span>
                        <span className="block text-xs text-ink-faint">
                          {t("busiestPrefix")} {long[r.busiestIdx]}
                        </span>
                      </span>
                    </Card>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              {t("guidesLink.text")}{" "}
              <Link href="/guides" className="text-accent underline">
                {t("guidesLink.anchor")}
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-atlas-field py-14">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-2xl text-ink">{t("faqTitle")}</h2>
            <dl className="mt-6 grid gap-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-1 leading-relaxed text-ink-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-surface py-14">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl text-ink">{t("ctaTitle")}</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-muted">
              {t("ctaText")}
            </p>
            <div className="mt-6">
              <Button href={mapDeeplink(rows[0].lat, rows[0].lng)} size="lg">
                {t("ctaButton")}
              </Button>
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </>
  );
}
