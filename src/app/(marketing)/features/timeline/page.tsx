import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";
import { crowdColor } from "@/lib/crowd-palette";

export const metadata: Metadata = {
  alternates: { canonical: "https://packedplaces.com/features/timeline" },
  title: "Week-by-Week Timeline — PackedPlaces.com",
  description:
    "Scrub or animate through every week of the year to see crowdedness shift in real time across 700+ destinations.",
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_STARTS = [1, 5, 9, 14, 18, 23, 27, 31, 36, 40, 44, 49]; // approximate week starts

// Synthetic weekly crowdedness data (0–100) for 3 destinations
const DESTINATIONS = [
  {
    name: "Bali",
    category: "Tropical",
    data: [
      22, 20, 18, 16, 15, 14, 15, 16, 18, 20, 22, 25, 28,
      35, 42, 50, 55, 60, 65, 68, 72, 75, 78, 80, 82, 85,
      90, 95, 92, 90, 88, 85, 82, 78, 75, 70, 65, 60, 55,
      50, 45, 40, 35, 30, 26, 24, 22, 20, 18, 16, 18, 22,
    ],
  },
  {
    name: "Innsbruck",
    category: "Ski",
    data: [
      88, 92, 95, 90, 85, 82, 78, 72, 65, 55, 42, 30, 22,
      18, 15, 12, 10, 10, 10, 10, 12, 12, 15, 18, 22, 25,
      28, 30, 28, 25, 22, 20, 18, 15, 12, 10, 10, 10, 10,
      12, 15, 18, 22, 28, 35, 42, 52, 62, 72, 80, 85, 88,
    ],
  },
  {
    name: "Barcelona",
    category: "Beach",
    data: [
      15, 14, 12, 12, 12, 14, 15, 16, 18, 20, 22, 24, 26,
      28, 32, 38, 42, 48, 55, 62, 68, 72, 78, 82, 88, 92,
      95, 98, 95, 92, 88, 85, 80, 75, 70, 65, 58, 50, 42,
      35, 30, 25, 22, 20, 18, 16, 15, 14, 12, 12, 12, 14,
    ],
  },
];

function HeatmapStrips() {
  const stripH = 28;
  const labelW = 90;
  const cellW = (560 - labelW - 10) / 52;
  const totalH = DESTINATIONS.length * (stripH + 12) + 40;

  return (
    <svg
      viewBox={`0 0 560 ${totalH}`}
      className="w-full"
      role="img"
      aria-label="52-week crowdedness heatmap for Bali, Innsbruck, and Barcelona"
    >
      {/* Month labels */}
      {MONTH_LABELS.map((month, i) => (
        <text
          key={month}
          x={labelW + MONTH_STARTS[i] * cellW + (cellW * 4) / 2}
          y={10}
          fontSize={9}
          style={{ fill: "var(--ink-faint)" }}
          textAnchor="middle"
        >
          {month}
        </text>
      ))}

      {/* Heatmap strips */}
      {DESTINATIONS.map((dest, di) => {
        const y = 18 + di * (stripH + 12);
        return (
          <g key={dest.name}>
            <text
              x={0}
              y={y + stripH / 2 + 4}
              fontSize={11}
              style={{ fill: "var(--ink)" }}
              fontWeight={500}
            >
              {dest.name}
            </text>
            <text
              x={0}
              y={y + stripH / 2 + 16}
              fontSize={8}
              style={{ fill: "var(--ink-faint)" }}
            >
              {dest.category}
            </text>
            {dest.data.map((score, wi) => (
              <rect
                key={wi}
                x={labelW + wi * cellW}
                y={y}
                width={cellW + 0.5}
                height={stripH}
                fill={crowdColor(score / 100, "light")}
                rx={wi === 0 ? 3 : wi === 51 ? 3 : 0}
              />
            ))}
          </g>
        );
      })}

      {/* Legend */}
      {(() => {
        const ly = totalH - 16;
        const steps = [
          { label: "Quiet", color: crowdColor(0.1, "light") },
          { label: "Moderate", color: crowdColor(0.35, "light") },
          { label: "Busy", color: crowdColor(0.6, "light") },
          { label: "Packed", color: crowdColor(0.9, "light") },
        ];
        return (
          <g transform={`translate(${labelW}, ${ly})`}>
            {steps.map((s, i) => (
              <g key={s.label} transform={`translate(${i * 95}, 0)`}>
                <rect width={10} height={10} fill={s.color} rx={2} />
                <text x={14} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>
                  {s.label}
                </text>
              </g>
            ))}
          </g>
        );
      })()}
    </svg>
  );
}

export default async function TimelinePage() {
  const t = await getTranslations("featurePages.timeline");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="timeline">
      {/* How it works */}
      <h2 className="font-display text-2xl text-ink">
        {t("snapshotsTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("snapshotsText")}
      </p>

      {/* Heatmap */}
      <div className="mt-8 overflow-hidden rounded-[4px] border border-line bg-surface-sunken p-4 sm:p-6">
        <h3 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-accent">
          {t("chartTitle")}
        </h3>
        <HeatmapStrips />
      </div>

      {/* Pattern highlights */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("patternsTitle")}
      </h2>
      <div className="mt-4 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
        <div className="bg-surface-raised p-4">
          <h3 className="font-display text-base text-ink">
            {t("baliTitle")}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            {t("baliText")}
          </p>
        </div>
        <div className="bg-surface-raised p-4">
          <h3 className="font-display text-base text-ink">
            {t("innsbruckTitle")}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            {t("innsbruckText")}
          </p>
        </div>
        <div className="bg-surface-raised p-4">
          <h3 className="font-display text-base text-ink">
            {t("barcelonaTitle")}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            {t("barcelonaText")}
          </p>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-10 border-l-2 border-dotted border-accent/50 pl-4">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">{s("keyInsight")}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {t("insightText")}
        </p>
      </div>

      {/* Interactive features */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("controlsTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("controlsText")}
      </p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
        <div className="bg-surface-raised p-4">
          <p className="font-display text-base text-ink">{t("scrub")}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {t("scrubText")}
          </p>
        </div>
        <div className="bg-surface-raised p-4">
          <p className="font-display text-base text-ink">{t("animate")}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {t("animateText")}
          </p>
        </div>
      </div>
    </FeaturePageShell>
  );
}
