import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ConsentControls } from "@/components/ConsentControls";

export async function generateMetadata(): Promise<Metadata> {
  const p = await getTranslations("privacy");
  return {
    title: p("metaTitle"),
    description: p("metaDescription"),
    robots: { index: false, follow: false },
  };
}

const SECTIONS = [
  { titleKey: "controllerTitle", textKey: "controllerText" },
  { titleKey: "collectTitle", textKey: "collectText" },
] as const;

const RIGHTS_KEYS = [
  "rightAccess",
  "rightRectification",
  "rightErasure",
  "rightRestriction",
  "rightPortability",
  "rightObjection",
] as const;

const TAIL_SECTIONS = [
  { titleKey: "retentionTitle", textKey: "retentionText" },
  { titleKey: "changesTitle", textKey: "changesText" },
  { titleKey: "contactTitle", textKey: "contactText" },
] as const;

function SectionTitle({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-baseline gap-3 font-display text-xl text-ink">
      <span aria-hidden className="font-mono text-xs tracking-widest text-accent">
        {String(index).padStart(2, "0")}
      </span>
      {children}
    </h2>
  );
}

export default async function PrivacyPage() {
  const p = await getTranslations("privacy");

  return (
    <>
      <SiteHeader />

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
            {p("title")}
          </h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {p("lastUpdated")}
          </p>

          <div className="mt-12 space-y-10 text-ink-muted">
            {/* Data Controller / What Data We Collect */}
            {SECTIONS.map((s, i) => (
              <div key={s.titleKey}>
                <SectionTitle index={i + 1}>{p(s.titleKey)}</SectionTitle>
                <p className="mt-3 text-sm leading-relaxed">{p(s.textKey)}</p>
              </div>
            ))}

            {/* Cookies */}
            <div>
              <SectionTitle index={3}>{p("cookiesTitle")}</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed">{p("cookiesText")}</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="border-l-2 border-dotted border-accent/50 pl-4 leading-relaxed">
                  <strong className="font-mono text-xs text-ink">NEXT_LOCALE</strong> —{" "}
                  {p("cookieLocale")}
                </li>
              </ul>
            </div>

            {/* Google Analytics */}
            <div>
              <SectionTitle index={4}>{p("analyticsTitle")}</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed">{p("analyticsText")}</p>
            </div>

            {/* Manage consent */}
            <div>
              <SectionTitle index={5}>{p("manageTitle")}</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed">{p("manageText")}</p>
              <ConsentControls />
            </div>

            {/* Contact Form */}
            <div>
              <SectionTitle index={6}>{p("contactDataTitle")}</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed">{p("contactDataText")}</p>
            </div>

            {/* Your Rights */}
            <div>
              <SectionTitle index={7}>{p("rightsTitle")}</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed">{p("rightsText")}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {RIGHTS_KEYS.map((key) => (
                  <li
                    key={key}
                    className="border-l-2 border-dotted border-accent/50 pl-4 leading-relaxed"
                  >
                    {p(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Retention / Policy Changes / Contact */}
            {TAIL_SECTIONS.map((s, i) => (
              <div key={s.titleKey}>
                <SectionTitle index={i + 8}>{p(s.titleKey)}</SectionTitle>
                <p className="mt-3 text-sm leading-relaxed">{p(s.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
