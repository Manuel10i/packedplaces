import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  alternates: { canonical: "https://packedplaces.com/features/categories" },
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
              style={{ stroke: "var(--line)" }}
              strokeWidth={0.5}
            />
            <text
              x={x}
              y={chartH - 18}
              fontSize={9}
              style={{ fill: "var(--ink-faint)" }}
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
              style={{ fill: "var(--ink-muted)" }}
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
              style={{ fill: "var(--accent-2)" }}
              rx={3}
              opacity={0.35}
            />
            {/* Peak bar (front, narrower) */}
            <rect
              x={labelW}
              y={y + 4}
              width={Math.max(peakW, 3)}
              height={10}
              style={{ fill: "var(--accent)" }}
              rx={3}
            />
            {/* Values */}
            <text
              x={labelW + Math.max(peakW, 3) + 6}
              y={y + 13}
              fontSize={9}
              style={{ fill: "var(--ink-faint)" }}
            >
              {cat.peak} / {cat.offPeak}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform={`translate(${labelW}, ${chartH - 10})`}>
        <rect width={10} height={10} style={{ fill: "var(--accent)" }} rx={2} />
        <text x={14} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>Peak capacity</text>
        <rect x={100} width={10} height={10} style={{ fill: "var(--accent-2)" }} rx={2} opacity={0.35} />
        <text x={114} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>Off-peak capacity</text>
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
      <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="bg-surface-raised p-4"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-base text-ink">
                {cat.name}
              </h3>
              <span className="font-mono text-xs text-ink-faint">
                {cat.peak} / {cat.offPeak}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">{t(cat.descKey)}</p>
            <p className="mt-2 font-mono text-[10px] text-ink-faint">{cat.example}</p>
          </div>
        ))}
      </div>

      {/* Capacity Chart */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("capacityChartTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("capacityChartText")}
      </p>

      <div className="mt-6 overflow-hidden rounded-[4px] border border-line bg-surface-sunken p-4 sm:p-6">
        <CapacityChart />
      </div>

      {/* Key Insight */}
      <div className="mt-10 border-l-2 border-dotted border-accent/50 pl-4">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">{s("keyInsight")}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {t("insightText")}
        </p>
      </div>

      {/* How categories are assigned */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("assignmentTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("assignmentText")}
      </p>
    </FeaturePageShell>
  );
}
