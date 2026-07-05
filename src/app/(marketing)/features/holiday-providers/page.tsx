import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";
import { crowdColor } from "@/lib/crowd-palette";

export const metadata: Metadata = {
  alternates: { canonical: "https://packedplaces.com/features/holiday-providers" },
  title: "Multi-Provider Holidays — PackedPlaces.com",
  description:
    "Three cascading providers — manual, OpenHolidaysAPI, and date-holidays — ensure global school holiday coverage for 127 regions.",
};

const PROVIDERS = [
  {
    tier: 1,
    nameKey: "manualName" as const,
    color: "var(--accent-2)",
    regions: 20,
    accuracyKey: "highest" as const,
    descKey: "manualDesc" as const,
    examples: "Germany (16 states), France, UK, USA, Australia, Japan",
  },
  {
    tier: 2,
    nameKey: "apiName" as const,
    color: "var(--accent)",
    regions: 55,
    accuracyKey: "high" as const,
    descKey: "apiDesc" as const,
    examples: "Netherlands, Belgium, Switzerland, Austria, Spain, Italy",
  },
  {
    tier: 3,
    nameKey: "libraryName" as const,
    color: crowdColor(0.3, "light"),
    regions: 52,
    accuracyKey: "good" as const,
    descKey: "libraryDesc" as const,
    examples: "Brazil, India, South Korea, South Africa, UAE, Mexico",
  },
];

function CascadeDiagram() {
  const total = 127;
  const barMax = 360;

  return (
    <svg
      viewBox="0 0 560 200"
      className="w-full"
      role="img"
      aria-label="Cascade diagram showing three holiday data providers"
    >
      {PROVIDERS.map((p, i) => {
        const y = i * 60 + 10;
        const cumulative = PROVIDERS.slice(0, i + 1).reduce(
          (sum, pp) => sum + pp.regions,
          0
        );
        const w = (cumulative / total) * barMax;

        return (
          <g key={p.tier}>
            {/* Tier label */}
            <text x={0} y={y + 18} fontSize={10} style={{ fill: "var(--ink-faint)" }}>
              Tier {p.tier}
            </text>

            {/* Bar */}
            <rect
              x={130}
              y={y}
              width={w}
              height={36}
              style={{ fill: p.color }}
              opacity={0.15}
              rx={4}
            />
            <rect
              x={130}
              y={y}
              width={
                (PROVIDERS.slice(0, i).reduce(
                  (sum, pp) => sum + pp.regions,
                  0
                ) /
                  total) *
                barMax
              }
              height={36}
              style={{ fill: p.color }}
              opacity={0.05}
              rx={i === 0 ? 4 : 0}
            />
            {/* New portion highlighted */}
            <rect
              x={
                130 +
                (PROVIDERS.slice(0, i).reduce(
                  (sum, pp) => sum + pp.regions,
                  0
                ) /
                  total) *
                  barMax
              }
              y={y}
              width={(p.regions / total) * barMax}
              height={36}
              style={{ fill: p.color }}
              opacity={0.3}
              rx={
                i === 0
                  ? 4
                  : i === PROVIDERS.length - 1
                    ? 4
                    : 0
              }
            />

            {/* Provider name */}
            <text
              x={140}
              y={y + 16}
              fontSize={11}
              style={{ fill: "var(--ink)" }}
              fontWeight={600}
            >
              Tier {p.tier}
            </text>
            <text x={140} y={y + 30} fontSize={9} style={{ fill: "var(--ink-muted)" }}>
              +{p.regions} regions ({cumulative} total)
            </text>

            {/* Cumulative label */}
            <text
              x={130 + w + 8}
              y={y + 22}
              fontSize={10}
              style={{ fill: p.color }}
              fontWeight={600}
            >
              {Math.round((cumulative / total) * 100)}%
            </text>

            {/* Arrow to next tier */}
            {i < PROVIDERS.length - 1 && (
              <text
                x={60}
                y={y + 50}
                fontSize={14}
                style={{ fill: "var(--line-strong)" }}
                textAnchor="middle"
              >
                &#8595;
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default async function HolidayProvidersPage() {
  const t = await getTranslations("featurePages.holidayProviders");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="holiday-providers">
      {/* Provider cascade */}
      <h2 className="font-display text-2xl text-ink">
        {t("tiersTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("tiersText")}
      </p>

      {/* Cascade diagram */}
      <div className="mt-8 overflow-hidden rounded-[4px] border border-line bg-surface-sunken p-4 sm:p-6">
        <CascadeDiagram />
      </div>

      {/* Provider cards */}
      <div className="mt-8 space-y-4">
        {PROVIDERS.map((p) => (
          <div
            key={p.tier}
            className="rounded-[4px] border border-line bg-surface-raised p-5"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <span className="font-mono text-xs tracking-widest text-accent">
                0{p.tier}
              </span>
              <h3 className="font-display text-base text-ink">{t(p.nameKey)}</h3>
              <span className="ml-auto font-mono text-xs text-ink-faint">
                {p.regions} {t("regions")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t(p.descKey)}</p>
            <p className="mt-2 text-xs text-ink-faint">
              <span className="font-medium text-ink-muted">{t("examples")}:</span> {p.examples}
            </p>
          </div>
        ))}
      </div>

      {/* Key Insight */}
      <div className="mt-10 border-l-2 border-dotted border-accent/50 pl-4">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">{s("keyInsight")}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {t("insightText")}
        </p>
      </div>

      {/* Why school holidays matter */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("whyTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("whyText")}
      </p>

      <div className="mt-6 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">127</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("statRegions")}
          </p>
        </div>
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">6–12</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("statWeeks")}
          </p>
        </div>
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">1.5x</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("statMultiplier")}
          </p>
        </div>
      </div>
    </FeaturePageShell>
  );
}
