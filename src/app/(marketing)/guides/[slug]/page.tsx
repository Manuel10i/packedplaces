import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getCountryName, getCountryFlag } from "@/lib/data";
import {
  getSlugEntry,
  slugForDestination,
  localizedDestinationName,
} from "@/lib/destinations";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { busynessLabelKey, type BusynessLabelKey } from "@/lib/busyness-scale";
import { getGuide, allGuideSlugs } from "@/lib/guides";

const BASE_URL = "https://packedplaces.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return allGuideSlugs().map((slug) => ({ slug }));
}

const guideUrl = (slug: string) => `${BASE_URL}/guides/${slug}`;

function monthNames(locale: string, style: "long" | "short"): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: style });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

function joinList(locale: string, items: string[]): string {
  const lf = new Intl.ListFormat(locale, { style: "long", type: "conjunction" });
  return lf.format(items);
}

/** Single busiest month and the set of clearly-quiet months for a destination. */
function crowdProfile(scores: number[]) {
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const range = max - min;
  const near = range * 0.15;
  const busiestIdx = scores.indexOf(max);
  const quietIdx =
    range > 0 ? scores.flatMap((s, i) => (s <= min + near ? [i] : [])) : [];
  return {
    busiestIdx,
    busiestLabel: busynessLabelKey(max),
    quietIdx,
  };
}

/** Resolve a curated alternative slug to everything the card needs. */
function resolveAlternative(slug: string, locale: string) {
  const entry = getSlugEntry(slug);
  if (!entry) return null;
  const d = entry.destination;
  const scores = getMonthlyBusyness(d.id);
  const { busiestIdx, busiestLabel, quietIdx } = crowdProfile(scores);
  return {
    slug: slugForDestination(d),
    name: localizedDestinationName(d, locale),
    flag: getCountryFlag(d.country),
    country: getCountryName(d.country, locale),
    category: d.category,
    lat: d.lat,
    lng: d.lng,
    busiestIdx,
    busiestLabel,
    quietIdx,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "guides" });
  const canonical = guideUrl(slug);
  return {
    title: t(`${guide.i18nKey}.metaTitle`),
    description: t(`${guide.i18nKey}.metaDescription`),
    alternates: { canonical },
    openGraph: {
      title: t(`${guide.i18nKey}.metaTitle`),
      description: t(`${guide.i18nKey}.metaDescription`),
      url: canonical,
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "guides" });
  const tip = await getTranslations({ locale, namespace: "tooltip" });
  const tCat = await getTranslations({ locale, namespace: "destination" });
  const k = guide.i18nKey;
  const long = monthNames(locale, "long");

  const alternatives = guide.alternativeSlugs
    .map((s) => resolveAlternative(s, locale))
    .filter((a): a is NonNullable<typeof a> => a !== null);

  const updated = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(guide.publishedISO));

  // FAQ copy lives in messages; JSON-LD mirrors exactly what is rendered.
  const faqKeys = ["q1", "q2", "q3"] as const;
  const faqs = faqKeys.map((q, i) => ({
    q: t(`${k}.faq.${q}`),
    a: t(`${k}.faq.a${i + 1}`),
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

  const crowdLabel = (key: BusynessLabelKey) => tip(key);
  const mapDeeplink = (lat: number, lng: number) =>
    `/map?lat=${lat.toFixed(1)}&lng=${lng.toFixed(1)}&zoom=6`;

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <SiteHeader />

      <article>
        <section className="bg-atlas-field pb-10 pt-12">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              {t("kicker")} &middot; {updated}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {t(`${k}.h1`)}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {t(`${k}.intro`)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-faint">
              {t(`${k}.methodology`)}
            </p>
          </div>
        </section>

        <section className="bg-surface pb-16 pt-10">
          <div className="mx-auto max-w-3xl px-6">
            <ol className="grid gap-5">
              {alternatives.map((alt, i) => (
                <li key={alt.slug}>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="pt-1 font-display text-2xl text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-display text-2xl text-ink">
                          {alt.flag} {alt.name}
                        </h2>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                          {alt.country} &middot; {tCat(`categories.${alt.category}`)}
                        </p>
                        <p className="mt-4 leading-relaxed text-ink-muted">
                          {t(`${k}.picks.${alt.slug}`)}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <span className="text-ink-muted">
                            <span className="font-medium text-ink">{t("busiestLabel")}:</span>{" "}
                            {long[alt.busiestIdx]} ({crowdLabel(alt.busiestLabel)})
                          </span>
                          {alt.quietIdx.length > 0 && (
                            <span className="text-ink-muted">
                              <span className="font-medium text-ink">{t("quietestLabel")}:</span>{" "}
                              {joinList(
                                locale,
                                alt.quietIdx.map((m) => long[m]),
                              )}
                            </span>
                          )}
                        </div>
                        <p className="mt-3 inline-flex rounded-full bg-surface-sunken px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-2">
                          {t(`${k}.calmerBadge`)}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Button href={`/destination/${alt.slug}`} size="sm">
                            {t("viewDestination", { name: alt.name })} &rarr;
                          </Button>
                          <Button
                            href={mapDeeplink(alt.lat, alt.lng)}
                            size="sm"
                            variant="secondary"
                          >
                            {t("openMap")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>

            {/* FAQ */}
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

            {/* CTA */}
            <div className="mt-12 rounded-[4px] border border-line bg-surface-raised p-6 text-center">
              <h2 className="font-display text-2xl text-ink">{t(`${k}.ctaTitle`)}</h2>
              <p className="mx-auto mt-2 max-w-xl text-ink-muted">{t(`${k}.ctaText`)}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button href="/map" size="lg">
                  {t(`${k}.ctaButton`)} &rarr;
                </Button>
                <Button href={`/destination/${guide.targetSlug}`} size="lg" variant="secondary">
                  {t(`${k}.ctaCompare`)}
                </Button>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-ink-faint">
              {t("disclaimer")}
            </p>
          </div>
        </section>
      </article>

      <SiteFooter />
    </>
  );
}
