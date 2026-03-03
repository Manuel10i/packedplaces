import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
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

function scoreToColor(score: number): string {
  if (score < 20) return "#22c55e";
  if (score < 40) return "#86efac";
  if (score < 55) return "#facc15";
  if (score < 70) return "#fb923c";
  if (score < 85) return "#f97316";
  return "#dc2626";
}

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
          fill="#9ca3af"
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
              fill="#374151"
              fontWeight={500}
            >
              {dest.name}
            </text>
            <text
              x={0}
              y={y + stripH / 2 + 16}
              fontSize={8}
              fill="#9ca3af"
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
                fill={scoreToColor(score)}
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
          { label: "Quiet", color: "#22c55e" },
          { label: "Moderate", color: "#facc15" },
          { label: "Busy", color: "#fb923c" },
          { label: "Packed", color: "#dc2626" },
        ];
        return (
          <g transform={`translate(${labelW}, ${ly})`}>
            {steps.map((s, i) => (
              <g key={s.label} transform={`translate(${i * 95}, 0)`}>
                <rect width={10} height={10} fill={s.color} rx={2} />
                <text x={14} y={9} fontSize={9} fill="#6b7280">
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
      <h2 className="text-xl font-bold text-gray-900">
        {t("snapshotsTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("snapshotsText")}
      </p>

      {/* Heatmap */}
      <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          {t("chartTitle")}
        </h3>
        <HeatmapStrips />
      </div>

      {/* Pattern highlights */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("patternsTitle")}
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-gray-900">
            {t("baliTitle")}
          </h3>
          <p className="mt-2 text-xs text-gray-600">
            {t("baliText")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-gray-900">
            {t("innsbruckTitle")}
          </h3>
          <p className="mt-2 text-xs text-gray-600">
            {t("innsbruckText")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-gray-900">
            {t("barcelonaTitle")}
          </h3>
          <p className="mt-2 text-xs text-gray-600">
            {t("barcelonaText")}
          </p>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4">
        <p className="text-sm font-semibold text-purple-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-purple-800">
          {t("insightText")}
        </p>
      </div>

      {/* Interactive features */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("controlsTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("controlsText")}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">{t("scrub")}</p>
          <p className="mt-1 text-xs text-gray-600">
            {t("scrubText")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">{t("animate")}</p>
          <p className="mt-1 text-xs text-gray-600">
            {t("animateText")}
          </p>
        </div>
      </div>
    </FeaturePageShell>
  );
}
