import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { localizedDestinationName } from "@/lib/destinations";
import { MONTH_SLUGS, quietestForMonth } from "@/lib/quiet-months";

const BASE_URL = "https://packedplaces.com";

function monthLabel(locale: string, monthIndex: number): string {
  const name = new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2024, monthIndex, 1));
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("monthHub");
  return {
    title: t("hubMetaTitle"),
    description: t("hubMetaDescription"),
    alternates: { canonical: `${BASE_URL}/least-crowded` },
    openGraph: {
      title: t("hubMetaTitle"),
      description: t("hubMetaDescription"),
      url: `${BASE_URL}/least-crowded`,
      type: "website",
    },
  };
}

export default async function LeastCrowdedHubPage() {
  const locale = await getLocale();
  const t = await getTranslations("monthHub");

  return (
    <>
      <SiteHeader />

      <section className="bg-atlas-field pb-10 pt-14">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading as="h1" eyebrow={t("hubKicker")} title={t("hubTitle")} lede={t("hubLede")} />
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="grid gap-5 sm:grid-cols-2">
            {MONTH_SLUGS.map((slug, i) => {
              const preview = quietestForMonth(i)
                .slice(0, 3)
                .map((p) => localizedDestinationName(p.destination, locale))
                .join(" · ");
              return (
                <li key={slug}>
                  <Link href={`/least-crowded/${slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col p-6 transition-colors group-hover:border-accent">
                      <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-accent">
                        {monthLabel(locale, i)}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{preview}</p>
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-accent-2">
                        {t("hubCardCta")} &rarr;
                      </p>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            {t("hubFootnote")}{" "}
            <Link href="/best-time" className="text-accent underline">
              {t("hubFootnoteLink")}
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
