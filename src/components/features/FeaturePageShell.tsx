import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/Button";

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
  const nav = await getTranslations("featurePages.nav");
  const shell = await getTranslations("featurePages.shell");
  const feature = await getTranslations(`featurePages.${FEATURE_SLUGS.find((f) => f.slug === slug)?.key ?? slug}`);

  const others = FEATURE_SLUGS.map((f, i) => ({ ...f, index: i + 1 })).filter(
    (f) => f.slug !== slug,
  );

  return (
    <>
      <SiteHeader />

      <section className="bg-atlas-field pb-12 pt-8">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/#features"
            className="font-mono text-[11px] uppercase tracking-widest text-ink-faint transition-colors hover:text-accent"
          >
            &larr; {shell("back")}
          </Link>
          <h1 className="animate-on-scroll mt-6 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
            {feature("title")}
          </h1>
          <div aria-hidden className="mt-5 h-px w-16 bg-accent/70" />
          <p className="animate-on-scroll-delay-1 mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {feature("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-surface pb-20 pt-12">
        <div className="mx-auto max-w-4xl px-6">{children}</div>
      </section>

      <section className="border-t border-line bg-surface-sunken py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl text-ink">
            {shell("exploreOther")}
          </h2>
          <div aria-hidden className="mt-4 h-px w-16 bg-accent/70" />
          <div className="mt-6 grid gap-x-12 md:grid-cols-2">
            {others.map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="group flex gap-4 border-b border-line py-4 transition-colors hover:border-accent"
              >
                <span className="pt-0.5 font-mono text-xs text-accent">
                  {String(f.index).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base text-ink transition-colors group-hover:text-accent">
                      {nav(`${f.key}Title`)}
                    </h3>
                    <span
                      aria-hidden
                      className="text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-accent"
                    >
                      &rarr;
                    </span>
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    {nav(`${f.key}Desc`)}
                  </p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface bg-map-grid py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl text-ink">
            {shell("seeInAction")}
          </h2>
          <p className="mt-3 text-ink-muted">{shell("mapDesc")}</p>
          <Button href="/map" size="lg" className="mt-8">
            {shell("openMap")} &rarr;
          </Button>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
