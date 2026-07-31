import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getCountryName, getCountryFlag } from "@/lib/data";
import { localizedDestinationName } from "@/lib/destinations";
import { busynessLabelKey } from "@/lib/busyness-scale";
import { allMonthSlugs, monthIndexForSlug, quietestForMonth, MONTH_SLUGS } from "@/lib/quiet-months";

const BASE_URL = "https://packedplaces.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return allMonthSlugs().map((month) => ({ month }));
}

function monthLabel(locale: string, monthIndex: number): string {
  const name = new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2024, monthIndex, 1));
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const pageUrl = (month: string) => `${BASE_URL}/least-crowded/${month}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ month: string }>;
}): Promise<Metadata> {
  const { month } = await params;
  const monthIndex = monthIndexForSlug(month);
  if (monthIndex < 0) return {};
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "monthHub" });
  const m = monthLabel(locale, monthIndex);
  const title = t("metaTitle", { month: m });
  const description = t("metaDescription", { month: m });
  return {
    title,
    description,
    alternates: { canonical: pageUrl(month) },
    openGraph: { title, description, url: pageUrl(month), type: "article" },
  };
}

export default async function LeastCrowdedMonthPage({
  params,
}: {
  params: Promise<{ month: string }>;
}) {
  const { month } = await params;
  const monthIndex = monthIndexForSlug(month);
  if (monthIndex < 0) notFound();

  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "monthHub" });
  const tip = await getTranslations({ locale, namespace: "tooltip" });
  const tDest = await getTranslations({ locale, namespace: "destination" });

  const m = monthLabel(locale, monthIndex);
  const picks = quietestForMonth(monthIndex);

  const prevIndex = (monthIndex + 11) % 12;
  const nextIndex = (monthIndex + 1) % 12;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("metaTitle", { month: m }),
    itemListElement: picks.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: localizedDestinationName(p.destination, locale),
      url: `${BASE_URL}/destination/${p.slug}`,
    })),
  };

  const faqs = [
    { q: t("faq1Q", { month: m }), a: t("faq1A", { month: m }) },
    { q: t("faq2Q", { month: m }), a: t("faq2A", { month: m }) },
    { q: t("faq3Q", { month: m }), a: t("faq3A", { month: m }) },
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
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader />

      <section className="bg-atlas-field pb-10 pt-14">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow={t("kicker")}
            title={t("title", { month: m })}
            lede={t("lede", { month: m })}
          />
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">{t("intro", { month: m })}</p>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl text-ink">{t("picksHeading", { month: m })}</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {picks.map((p) => {
              const name = localizedDestinationName(p.destination, locale);
              const country = getCountryName(p.destination.country, locale);
              const category = tDest(`categories.${p.destination.category}`);
              const monthBand = tip(busynessLabelKey(p.monthScore));
              const peakBand = tip(busynessLabelKey(p.peakScore));
              return (
                <li key={p.slug}>
                  <Link href={`/destination/${p.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col p-6 transition-colors group-hover:border-accent">
                      <h3 className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                        {name}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        {getCountryFlag(p.destination.country)} {country} &middot; {category}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                        {t("crowdLine", { month: m, monthBand, peakBand })}
                      </p>
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-accent-2">
                        {t("viewDestination")} &rarr;
                      </p>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>

          <nav className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <Link href={`/least-crowded/${MONTH_SLUGS[prevIndex]}`} className="text-accent underline">
              &larr; {monthLabel(locale, prevIndex)}
            </Link>
            <Link href="/least-crowded" className="font-mono text-[11px] uppercase tracking-widest text-ink-muted hover:text-accent">
              {t("allMonths")}
            </Link>
            <Link href={`/least-crowded/${MONTH_SLUGS[nextIndex]}`} className="text-accent underline">
              {monthLabel(locale, nextIndex)} &rarr;
            </Link>
          </nav>
        </div>
      </section>

      <section className="bg-atlas-field py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl text-ink">{t("faqTitle")}</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-medium text-ink">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-muted">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/best-time" variant="secondary">
              {t("ctaBestTime")}
            </Button>
            <Button href="/map" variant="secondary">
              {t("ctaMap")}
            </Button>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-ink-faint">{t("disclaimer")}</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
