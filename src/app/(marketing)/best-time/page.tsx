import type { Metadata } from "next";
import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BestTimeFinder } from "@/components/best-time/BestTimeFinder";

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
  const t = await getTranslations("bestTime");

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
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
