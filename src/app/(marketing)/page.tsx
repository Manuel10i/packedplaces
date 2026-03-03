import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "PackedPlaces.com — See How Crowded Travel Destinations Really Get",
};

/* Dot-grid world map — small circles placed at land positions (equirectangular, viewBox 0 0 100 50) */
const DOT_POSITIONS = [
  // North America
  [14,8],[16,8],[18,8],[12,10],[14,10],[16,10],[18,10],[20,10],
  [10,12],[12,12],[14,12],[16,12],[18,12],[20,12],[22,12],
  [12,14],[14,14],[16,14],[18,14],[20,14],[22,14],[24,14],
  [14,16],[16,16],[18,16],[20,16],[22,16],[24,16],
  [16,18],[18,18],[20,18],[22,18],[24,18],
  [18,20],[20,20],[22,20],
  [20,22],[22,22],
  // South America
  [28,26],[30,26],[32,26],
  [28,28],[30,28],[32,28],[34,28],
  [28,30],[30,30],[32,30],[34,30],
  [30,32],[32,32],[34,32],
  [30,34],[32,34],
  [30,36],[32,36],
  [30,38],[32,38],
  [30,40],
  // Europe
  [48,10],[50,10],[52,10],
  [46,12],[48,12],[50,12],[52,12],[54,12],
  [48,14],[50,14],[52,14],[54,14],
  [48,16],[50,16],[52,16],
  [50,18],
  // Africa
  [48,20],[50,20],[52,20],[54,20],
  [48,22],[50,22],[52,22],[54,22],[56,22],
  [48,24],[50,24],[52,24],[54,24],[56,24],
  [48,26],[50,26],[52,26],[54,26],
  [50,28],[52,28],[54,28],
  [50,30],[52,30],[54,30],
  [50,32],[52,32],
  [52,34],
  // Asia
  [56,10],[58,10],[60,10],[62,10],[64,10],[66,10],[68,10],[70,10],
  [56,12],[58,12],[60,12],[62,12],[64,12],[66,12],[68,12],[70,12],[72,12],[74,12],
  [58,14],[60,14],[62,14],[64,14],[66,14],[68,14],[70,14],[72,14],[74,14],[76,14],
  [60,16],[62,16],[64,16],[66,16],[68,16],[70,16],[72,16],[74,16],[76,16],[78,16],
  [62,18],[64,18],[66,18],[68,18],[70,18],[72,18],[74,18],[76,18],[78,18],
  [64,20],[66,20],[68,20],[70,20],[72,20],[74,20],[76,20],
  [66,22],[68,22],[70,22],
  // India / SE Asia
  [66,24],[68,24],[70,24],[72,24],[74,24],
  [68,26],[70,26],[72,26],
  // Australia
  [76,32],[78,32],[80,32],[82,32],
  [76,34],[78,34],[80,34],[82,34],[84,34],
  [78,36],[80,36],[82,36],[84,36],
  [80,38],[82,38],
  // Japan / Indonesia
  [80,16],[82,16],
  [80,18],
  [74,26],[76,26],[78,26],[80,26],
] as const;

function WorldMapDots({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      aria-hidden="true"
    >
      {DOT_POSITIONS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={0.6} fill="currentColor" />
      ))}
    </svg>
  );
}

export default async function MarketingPage() {
  const t = await getTranslations();

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-gray-900">
            {t("nav.brand")}
          </span>
          <div className="flex items-center gap-8">
            <a
              href="#how-it-works"
              className="hidden text-sm text-gray-600 hover:text-gray-900 sm:inline"
            >
              {t("nav.howItWorks")}
            </a>
            <a
              href="#data"
              className="hidden text-sm text-gray-600 hover:text-gray-900 sm:inline"
            >
              {t("nav.data")}
            </a>
            <a
              href="#open-source"
              className="hidden text-sm text-gray-600 hover:text-gray-900 sm:inline"
            >
              {t("nav.openSource")}
            </a>
            <LanguageSwitcher variant="nav" />
            <Link
              href="/map"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {t("nav.openMap")} &rarr;
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20">
        <WorldMapDots className="pointer-events-none absolute inset-0 m-auto h-full w-full max-w-5xl text-gray-300 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h1 className="whitespace-pre-line text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {t("hero.headline")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t("hero.description")}
          </p>
          <div className="mt-10">
            <Link
              href="/map"
              className="inline-block rounded-lg bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800"
            >
              {t("hero.cta")} &rarr;
            </Link>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-5">
            <div>
              <p className="text-3xl font-bold text-gray-900">127</p>
              <p className="mt-1 text-sm text-gray-500">{t("hero.statRegions")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">700+</p>
              <p className="mt-1 text-sm text-gray-500">{t("hero.statDestinations")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">6,000+</p>
              <p className="mt-1 text-sm text-gray-500">{t("hero.statPatterns")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="mt-1 text-sm text-gray-500">{t("hero.statEvents")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="mt-1 text-sm text-gray-500">{t("hero.statCountries")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            {t("howItWorks.title")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {([1, 2, 3, 4] as const).map((step) => (
              <div key={step} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-700">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`howItWorks.step${step}Title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t(`howItWorks.step${step}Text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            {t("features.title")}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/features/crowdedness" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.crowdednessTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.crowdednessText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/seasonality" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.hemisphereTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.hemisphereText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/categories" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.categoriesTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.categoriesText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/holiday-boost" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.boostTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.boostText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/timeline" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.timelineTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.timelineText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/holiday-providers" className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.providersTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.providersText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
            <Link href="/features/events" className="block rounded-xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm transition-colors hover:border-orange-300">
              <h3 className="text-base font-semibold text-gray-900">
                {t("features.eventsTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("features.eventsText")}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t("featurePages.shell.learnMore")} &rarr;</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Data & Methodology */}
      <section id="data" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            {t("data.title")}
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("data.sourcesTitle")}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="font-medium text-gray-900">{t("data.populationLabel")}</span>
                  <span>{t("data.populationText")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-gray-900">{t("data.tourismLabel")}</span>
                  <span>{t("data.tourismText")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-gray-900">{t("data.holidaysLabel")}</span>
                  <span>{t("data.holidaysText")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-gray-900">{t("data.eventsLabel")}</span>
                  <span>{t("data.eventsDataText")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-gray-900">{t("data.geographyLabel")}</span>
                  <span>{t("data.geographyText")}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("data.capacityTitle")}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t("data.capacityDescription")}
              </p>
              <table className="mt-4 w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 font-medium text-gray-900">{t("data.colCategory")}</th>
                    <th className="pb-2 font-medium text-gray-900">{t("data.colPeak")}</th>
                    <th className="pb-2 font-medium text-gray-900">{t("data.colOffPeak")}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">{t("data.catCity")}</td>
                    <td>5.0</td>
                    <td>4.0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">{t("data.catBeach")}</td>
                    <td>2.0</td>
                    <td>0.5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">{t("data.catSki")}</td>
                    <td>1.5</td>
                    <td>0.3</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">{t("data.catIsland")}</td>
                    <td>1.0</td>
                    <td>0.4</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">{t("data.catSafari")}</td>
                    <td>0.8</td>
                    <td>0.3</td>
                  </tr>
                  <tr>
                    <td className="py-2">{t("data.catDesert")}</td>
                    <td>0.5</td>
                    <td>0.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source" className="relative overflow-hidden bg-white py-20">
        <WorldMapDots className="pointer-events-none absolute inset-0 m-auto h-full w-full max-w-4xl text-gray-200 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("openSource.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("openSource.description")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Tailwind CSS 4",
              "MapLibre GL",
              "PostgreSQL",
              "Drizzle ORM",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/Manuel10i/packedplaces"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              {t("openSource.viewOnGithub")}
            </a>
            <a
              href="https://github.com/Manuel10i/packedplaces/blob/main/docs/ADDING-REGIONS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {t("openSource.contributions")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900">
              {t("footer.privacy")}
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              {t("footer.contact")}
            </Link>
            <a
              href="https://github.com/Manuel10i/packedplaces"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              {t("footer.github")}
            </a>
            <a
              href="https://github.com/Manuel10i/packedplaces/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              {t("footer.docs")}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
