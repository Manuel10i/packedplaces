import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  title: "Weather-Aware Seasonality — PackedPlaces.com",
  description:
    "Each destination has month-by-month peak season data reflecting real-world weather conditions — monsoons, dry seasons, extreme heat, and polar winters.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DESTINATIONS = [
  {
    name: "Bali",
    color: "#14b8a6",
    label: "Tropical — dry season Apr–Oct",
    data: [0.05, 0.05, 0.25, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.25, 0.05],
  },
  {
    name: "Innsbruck",
    color: "#3b82f6",
    label: "Ski — peaks Dec–Mar",
    data: [1.0, 1.0, 1.0, 0.25, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.25, 1.0],
  },
  {
    name: "Barcelona",
    color: "#f59e0b",
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
          stroke="#e5e7eb"
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
          fill="#9ca3af"
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
                  fill={dest.color}
                  rx={2}
                  opacity={dest.data[mi] < 0.1 ? 0.3 : 1}
                />
              );
            })}
            <text
              x={CL + mi * MW + MW / 2}
              y={CT + CH + 16}
              fontSize={10}
              fill="#6b7280"
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
          <rect width={12} height={12} fill={dest.color} rx={2} />
          <text x={16} y={10} fontSize={11} fill="#374151">
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
      <h2 className="text-xl font-bold text-gray-900">
        {t("demandTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("demandText")}
      </p>

      {/* Chart */}
      <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">
          {t("chartTitle")}
        </h3>
        <SeasonalityChart />
      </div>

      {/* Attractiveness Model */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("modelTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("modelText")}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">100%</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
            {t("peakMonths")}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {t("peakMonthsDesc")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">25%</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
            {t("shoulderMonths")}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {t("shoulderMonthsDesc")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">5%</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
            {t("offSeason")}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {t("offSeasonDesc")}
          </p>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-teal-500 bg-teal-50 p-4">
        <p className="text-sm font-semibold text-teal-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-teal-800">
          {t("insightText")}
        </p>
      </div>

      {/* Real-world examples */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("patternsTitle")}
      </h2>
      <div className="mt-4 space-y-3">
        {([
          { pattern: t("monsoon"), desc: t("monsoonDesc") },
          { pattern: t("extremeHeat"), desc: t("extremeHeatDesc") },
          { pattern: t("snowSeasons"), desc: t("snowSeasonsDesc") },
          { pattern: t("cyclone"), desc: t("cycloneDesc") },
          { pattern: t("polarWinters"), desc: t("polarWintersDesc") },
        ] as const).map((item) => (
          <div key={item.pattern} className="flex gap-3 text-sm">
            <span className="w-40 shrink-0 font-medium text-gray-900">
              {item.pattern}
            </span>
            <span className="text-gray-600">{item.desc}</span>
          </div>
        ))}
      </div>
    </FeaturePageShell>
  );
}
