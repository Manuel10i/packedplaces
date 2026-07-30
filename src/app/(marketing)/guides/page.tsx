import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { guides } from "@/lib/guides";

const BASE_URL = "https://packedplaces.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("guides");
  return {
    title: t("hubMetaTitle"),
    description: t("hubMetaDescription"),
    alternates: {
      canonical: `${BASE_URL}/guides`,
      types: {
        "application/atom+xml": `${BASE_URL}/guides/feed.xml`,
      },
    },
    openGraph: {
      title: t("hubMetaTitle"),
      description: t("hubMetaDescription"),
      url: `${BASE_URL}/guides`,
      type: "website",
    },
  };
}

export default async function GuidesHubPage() {
  const t = await getTranslations("guides");
  const tc = await getTranslations("crowdIndex");

  return (
    <>
      <SiteHeader />

      <section className="bg-atlas-field pb-10 pt-14">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow={t("kicker")} title={t("hubTitle")} lede={t("hubLede")} />
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-4xl px-6">
          <ul className="grid gap-5">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="group block">
                  <Card className="p-6 transition-colors group-hover:border-accent">
                    <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-accent">
                      {t(`${g.i18nKey}.cardTitle`)}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink-muted">
                      {t(`${g.i18nKey}.cardBlurb`)}
                    </p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-accent-2">
                      {t("readGuide")} &rarr;
                    </p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            {tc("kicker")}:{" "}
            <Link href="/crowd-index" className="text-accent underline">
              {tc("h1")}
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
