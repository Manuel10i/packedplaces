import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";
import { crowdColor } from "@/lib/crowd-palette";

export const metadata: Metadata = {
  title: "Weather-Aware Seasonality — PackedPlaces.com",
  description:
    "Each destination has month-by-month peak season data reflecting real-world weather conditions — monsoons, dry seasons, extreme heat, and polar winters.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DESTINATIONS = [
  {
    name: "Bali",
    color: "var(--accent-2)",
    label: "Tropical — dry season Apr–Oct",
    data: [0.05, 0.05, 0.25, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.25, 0.05],
  },
  {
    name: "Innsbruck",
    color: "var(--accent)",
    label: "Ski — peaks Dec–Mar",
    data: [1.0, 1.0, 1.0, 0.25, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.25, 1.0],
  },
  {
    name: "Barcelona",
    color: crowdColor(0.3, "light"),
    label: "Beach — peaks May–Sep",
    data: [0.05, 0.05, 0.05, 0.25, 1.0, 1.0, 1.0, 1.0, 1.0, 0.25, 0.05, 0.05],
  },
];

const CL = 50; // chart left
const CT = 24; // chart top
const CW = 490; // chart width
const CH = 200; // chart height
const MW = CW / 12; // month width
const BW = 11; // bar width
const BG = 3; // bar gap
const GW = BW * 3 + BG * 2; // group width

function SeasonalityChart() {
  return (
    <svg viewBox="0 0 560 300" className="w-full" role="img" aria-label="Monthly attractiveness chart for Bali, Innsbruck, and Barcelona">
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1.0].map((v) => (
        <line
          key={v}
          x1={CL}
          x2={CL + CW}
          y1={CT + CH * (1 - v)}
          y2={CT + CH * (1 - v)}
          style={{ stroke: "var(--line)" }}
          strokeWidth={0.5}
        />
      ))}

      {/* Y-axis labels */}
      {[0, 25, 50, 75, 100].map((v) => (
        <text
          key={v}
          x={CL - 6}
          y={CT + CH * (1 - v / 100) + 3.5}
          fontSize={9}
          style={{ fill: "var(--ink-faint)" }}
          textAnchor="end"
        >
          {v}%
        </text>
      ))}

      {/* Bars */}
      {MONTHS.map((month, mi) => {
        const groupX = CL + mi * MW + (MW - GW) / 2;
        return (
          <g key={mi}>
            {DESTINATIONS.map((dest, di) => {
              const barH = Math.max(dest.data[mi] * CH, 2);
              const x = groupX + di * (BW + BG);
              const y = CT + CH - barH;
              return (
                <rect
                  key={di}
                  x={x}
                  y={y}
                  width={BW}
                  height={barH}
                  style={{ fill: dest.color }}
                  rx={2}
                  opacity={dest.data[mi] < 0.1 ? 0.3 : 1}
                />
              );
            })}
            <text
              x={CL + mi * MW + MW / 2}
              y={CT + CH + 16}
              fontSize={10}
              style={{ fill: "var(--ink-faint)" }}
              textAnchor="middle"
            >
              {month}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      {DESTINATIONS.map((dest, i) => (
        <g key={i} transform={`translate(${CL + i * 170}, ${CT + CH + 38})`}>
          <rect width={12} height={12} style={{ fill: dest.color }} rx={2} />
          <text x={16} y={10} fontSize={11} style={{ fill: "var(--ink-muted)" }}>
            {dest.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default async function SeasonalityPage() {
  const t = await getTranslations("featurePages.seasonality");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="seasonality">
      {/* The Concept */}
      <h2 className="font-display text-2xl text-ink">
        {t("demandTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("demandText")}
      </p>

      {/* Chart */}
      <div className="mt-8 overflow-hidden rounded-[4px] border border-line bg-surface-sunken p-4 sm:p-6">
        <h3 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-widest text-accent">
          {t("chartTitle")}
        </h3>
        <SeasonalityChart />
      </div>

      {/* Attractiveness Model */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("modelTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("modelText")}
      </p>
      <div className="mt-6 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">100%</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("peakMonths")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {t("peakMonthsDesc")}
          </p>
        </div>
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">25%</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("shoulderMonths")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {t("shoulderMonthsDesc")}
          </p>
        </div>
        <div className="bg-surface-raised p-5 text-center">
          <p className="font-display text-3xl text-ink">5%</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("offSeason")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {t("offSeasonDesc")}
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

      {/* Real-world examples */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("patternsTitle")}
      </h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {([
          { pattern: t("monsoon"), desc: t("monsoonDesc") },
          { pattern: t("extremeHeat"), desc: t("extremeHeatDesc") },
          { pattern: t("snowSeasons"), desc: t("snowSeasonsDesc") },
          { pattern: t("cyclone"), desc: t("cycloneDesc") },
          { pattern: t("polarWinters"), desc: t("polarWintersDesc") },
        ] as const).map((item) => (
          <div key={item.pattern} className="flex gap-3 py-3 text-sm">
            <span className="w-40 shrink-0 font-medium text-ink">
              {item.pattern}
            </span>
            <span className="leading-relaxed text-ink-muted">{item.desc}</span>
          </div>
        ))}
      </div>
    </FeaturePageShell>
  );
}
