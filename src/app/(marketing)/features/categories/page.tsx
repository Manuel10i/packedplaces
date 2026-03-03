import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  title: "11 Destination Categories — PackedPlaces.com",
  description:
    "Ski, beach, city, island, safari, desert, tropical, lake, nature, cultural, and mountain — each category has tuned peak and off-peak capacity.",
};

const CATEGORIES = [
  { name: "City", peak: 5.0, offPeak: 4.0, example: "Paris, Tokyo, NYC", descKey: "cityDesc" },
  { name: "Cultural", peak: 2.5, offPeak: 2.0, example: "Kyoto, Petra, Rajasthan", descKey: "culturalDesc" },
  { name: "Beach", peak: 2.0, offPeak: 0.5, example: "Mallorca, Cancun, Phuket", descKey: "beachDesc" },
  { name: "Tropical", peak: 1.5, offPeak: 1.0, example: "Bali, Costa Rica, Maldives", descKey: "tropicalDesc" },
  { name: "Ski", peak: 1.5, offPeak: 0.3, example: "Innsbruck, Niseko, Banff", descKey: "skiDesc" },
  { name: "Nature", peak: 1.2, offPeak: 0.6, example: "Grand Canyon, Fjords", descKey: "natureDesc" },
  { name: "Lake", peak: 1.0, offPeak: 0.3, example: "Como, Hallstatt, Bled", descKey: "lakeDesc" },
  { name: "Island", peak: 1.0, offPeak: 0.4, example: "Hawaii, Jeju, Okinawa", descKey: "islandDesc" },
  { name: "Safari", peak: 0.8, offPeak: 0.3, example: "Serengeti, Kruger", descKey: "safariDesc" },
  { name: "Mountain", peak: 0.6, offPeak: 0.3, example: "Ladakh, Pokhara, Shimla", descKey: "mountainDesc" },
  { name: "Desert", peak: 0.5, offPeak: 0.2, example: "Atacama, Sahara, Wadi Rum", descKey: "desertDesc" },
];

const MAX_PEAK = 5.0;
const BAR_MAX = 400; // max bar width in SVG

function CapacityChart() {
  const rowH = 32;
  const labelW = 80;
  const chartH = CATEGORIES.length * rowH + 40;

  return (
    <svg
      viewBox={`0 0 560 ${chartH}`}
      className="w-full"
      role="img"
      aria-label="Capacity comparison chart for all 11 destination categories"
    >
      {/* Grid lines */}
      {[0, 1, 2, 3, 4, 5].map((v) => {
        const x = labelW + (v / MAX_PEAK) * BAR_MAX;
        return (
          <g key={v}>
            <line
              x1={x}
              y1={8}
              x2={x}
              y2={chartH - 32}
              stroke="#e5e7eb"
              strokeWidth={0.5}
            />
            <text
              x={x}
              y={chartH - 18}
              fontSize={9}
              fill="#9ca3af"
              textAnchor="middle"
            >
              {v.toFixed(1)}
            </text>
          </g>
        );
      })}

      {/* Category rows */}
      {CATEGORIES.map((cat, i) => {
        const y = i * rowH + 12;
        const peakW = (cat.peak / MAX_PEAK) * BAR_MAX;
        const offW = (cat.offPeak / MAX_PEAK) * BAR_MAX;
        return (
          <g key={cat.name}>
            {/* Label */}
            <text
              x={labelW - 8}
              y={y + 12}
              fontSize={10}
              fill="#374151"
              textAnchor="end"
              fontWeight={500}
            >
              {cat.name}
            </text>
            {/* Off-peak bar (behind) */}
            <rect
              x={labelW}
              y={y + 2}
              width={Math.max(offW, 3)}
              height={14}
              fill="#93c5fd"
              rx={3}
              opacity={0.5}
            />
            {/* Peak bar (front, narrower) */}
            <rect
              x={labelW}
              y={y + 4}
              width={Math.max(peakW, 3)}
              height={10}
              fill="#2563eb"
              rx={3}
            />
            {/* Values */}
            <text
              x={labelW + Math.max(peakW, 3) + 6}
              y={y + 13}
              fontSize={9}
              fill="#6b7280"
            >
              {cat.peak} / {cat.offPeak}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform={`translate(${labelW}, ${chartH - 10})`}>
        <rect width={10} height={10} fill="#2563eb" rx={2} />
        <text x={14} y={9} fontSize={9} fill="#6b7280">Peak capacity</text>
        <rect x={100} width={10} height={10} fill="#93c5fd" rx={2} opacity={0.5} />
        <text x={114} y={9} fontSize={9} fill="#6b7280">Off-peak capacity</text>
      </g>
    </svg>
  );
}

export default async function CategoriesPage() {
  const t = await getTranslations("featurePages.categories");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="categories">
      {/* Category Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                {cat.name}
              </h3>
              <span className="text-xs text-gray-400">
                {cat.peak} / {cat.offPeak}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">{t(cat.descKey)}</p>
            <p className="mt-2 text-xs text-gray-400">{cat.example}</p>
          </div>
        ))}
      </div>

      {/* Capacity Chart */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("capacityChartTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("capacityChartText")}
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <CapacityChart />
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4">
        <p className="text-sm font-semibold text-blue-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-blue-800">
          {t("insightText")}
        </p>
      </div>

      {/* How categories are assigned */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("assignmentTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("assignmentText")}
      </p>
    </FeaturePageShell>
  );
}
