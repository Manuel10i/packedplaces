import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BestTimeFinder } from "@/components/best-time/BestTimeFinder";
import { destinations } from "@/lib/data/destinations";
import { localizedDestinationName, slugForDestination } from "@/lib/destinations";
import type { Locale } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "bestTime" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "https://packedplaces.com/best-time" },
  };
}

export default async function BestTimePage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("bestTime");

  const collator = new Intl.Collator(locale, { sensitivity: "base" });
  const browseList = destinations
    .map((d) => ({
      slug: slugForDestination(d),
      name: localizedDestinationName(d, locale),
    }))
    .sort((a, b) => collator.compare(a.name, b.name));

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-atlas-field">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow={<span className="inline-flex items-center gap-2">✦ {t("eyebrow")}</span>}
            title={t("title")}
            lede={t("lede")}
            className="animate-on-scroll"
          />
          <div className="animate-on-scroll-delay-1 mt-10">
            <Suspense>
              <BestTimeFinder />
            </Suspense>
          </div>

          <section className="mt-20 border-t border-line pt-12">
            <SectionHeading
              as="h2"
              eyebrow="✦"
              title={t("browseTitle")}
              lede={t("browseLede", { count: browseList.length })}
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
              {browseList.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destination/${d.slug}`}
                    className="block truncate py-1 text-sm text-ink/80 transition-colors hover:text-accent"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
