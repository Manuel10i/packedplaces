import type { Metadata } from "next";
import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CompareView } from "@/components/compare/CompareView";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "compare" });
  return {
    title: t("metaTitle"),
    // Content is driven by the visitor's saved places — not indexable.
    robots: { index: false },
  };
}

export default async function ComparePage() {
  const t = await getTranslations("compare");

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-atlas-field">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow={<span>⇄ {t("eyebrow")}</span>}
            title={t("title")}
            lede={t("lede")}
            className="animate-on-scroll"
          />
          <div className="animate-on-scroll-delay-1 mt-10">
            <Suspense>
              <CompareView />
            </Suspense>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
