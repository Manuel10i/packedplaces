import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const FEATURE_SLUGS = [
  { slug: "crowdedness", key: "crowdedness" },
  { slug: "seasonality", key: "seasonality" },
  { slug: "categories", key: "categories" },
  { slug: "holiday-boost", key: "holidayBoost" },
  { slug: "timeline", key: "timeline" },
  { slug: "holiday-providers", key: "holidayProviders" },
  { slug: "events", key: "events" },
] as const;

interface Props {
  slug: string;
  children: React.ReactNode;
}

export async function FeaturePageShell({ slug, children }: Props) {
  const t = await getTranslations();
  const fp = await getTranslations("featurePages");
  const nav = await getTranslations("featurePages.nav");
  const shell = await getTranslations("featurePages.shell");
  const feature = await getTranslations(`featurePages.${FEATURE_SLUGS.find((f) => f.slug === slug)?.key ?? slug}`);

  const others = FEATURE_SLUGS.filter((f) => f.slug !== slug);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-gray-900">
            {t("nav.brand")}
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="nav" />
            <a
              href="/map"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {t("nav.openMap")} &rarr;
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-white pb-12 pt-8">
        <div className="mx-auto max-w-4xl px-6">
          <a
            href="/#features"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            &larr; {shell("back")}
          </a>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {feature("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {feature("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-4xl px-6">{children}</div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {shell("exploreOther")}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((f) => (
              <a
                key={f.slug}
                href={`/features/${f.slug}`}
                className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-gray-300"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {nav(`${f.key}Title`)}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {nav(`${f.key}Desc`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {shell("seeInAction")}
        </h2>
        <p className="mt-2 text-gray-600">{shell("mapDesc")}</p>
        <a
          href="/map"
          className="mt-6 inline-block rounded-lg bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800"
        >
          {shell("openMap")} &rarr;
        </a>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <a
            href="https://github.com/Manuel10i/packedplaces"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            {t("footer.github")}
          </a>
        </div>
      </footer>
    </>
  );
}
