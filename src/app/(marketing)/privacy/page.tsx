import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — PackedPlaces.com",
  description:
    "Privacy policy for PackedPlaces.com — how we handle your data, cookies, and analytics.",
  robots: { index: false, follow: false },
};

export default async function PrivacyPage() {
  const p = await getTranslations("privacy");

  return (
    <>
      <SiteHeader />

      <section className="bg-sand-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {p("title")}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{p("lastUpdated")}</p>

          <div className="mt-10 space-y-10 text-gray-600">
            {/* Data Controller */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("controllerTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("controllerText")}</p>
            </div>

            {/* What Data We Collect */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("collectTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("collectText")}</p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("cookiesTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("cookiesText")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>
                  <strong>NEXT_LOCALE</strong> — {p("cookieLocale")}
                </li>
              </ul>
            </div>

            {/* Google Analytics */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("analyticsTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("analyticsText")}</p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("contactDataTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("contactDataText")}</p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("rightsTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("rightsText")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>{p("rightAccess")}</li>
                <li>{p("rightRectification")}</li>
                <li>{p("rightErasure")}</li>
                <li>{p("rightRestriction")}</li>
                <li>{p("rightPortability")}</li>
                <li>{p("rightObjection")}</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("retentionTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("retentionText")}</p>
            </div>

            {/* Policy Changes */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("changesTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("changesText")}</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="border-l-2 border-brand-400 pl-3 text-lg font-semibold text-gray-900">
                {p("contactTitle")}
              </h2>
              <p className="mt-2 text-sm">{p("contactText")}</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
