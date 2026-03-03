import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  title: "50+ Major Events — PackedPlaces.com",
  description:
    "Olympics, FIFA World Cup, Oktoberfest, Carnival, Grand Slams, and more — major events that drive millions of visitors are tracked and shown on the map.",
};

const EVENT_CATEGORIES = [
  { key: "sports", label: "Sports", color: "#3b82f6" },
  { key: "festival", label: "Festivals", color: "#f97316" },
  { key: "cultural", label: "Cultural", color: "#8b5cf6" },
  { key: "music", label: "Music", color: "#22c55e" },
  { key: "trade", label: "Trade & Expos", color: "#6b7280" },
];

const EVENTS = [
  { name: "Australian Open", month: 0, duration: 2, cat: "sports", boost: 0.3, location: "Melbourne" },
  { name: "Carnival", month: 1, duration: 1, cat: "festival", boost: 0.8, location: "Rio de Janeiro" },
  { name: "MWC", month: 1, duration: 1, cat: "trade", boost: 0.3, location: "Barcelona" },
  { name: "Winter Olympics", month: 1, duration: 3, cat: "sports", boost: 0.8, location: "Italy (2026)" },
  { name: "Coachella", month: 3, duration: 2, cat: "music", boost: 0.4, location: "California" },
  { name: "Cannes Film Festival", month: 4, duration: 2, cat: "cultural", boost: 0.3, location: "French Riviera" },
  { name: "Monaco Grand Prix", month: 4, duration: 1, cat: "sports", boost: 0.4, location: "Monaco" },
  { name: "FIFA World Cup", month: 5, duration: 6, cat: "sports", boost: 0.6, location: "North America (2026)" },
  { name: "Glastonbury", month: 5, duration: 1, cat: "music", boost: 0.3, location: "England" },
  { name: "Wimbledon", month: 5, duration: 2, cat: "sports", boost: 0.15, location: "London" },
  { name: "Tour de France", month: 6, duration: 3, cat: "sports", boost: 0.2, location: "France" },
  { name: "Tomorrowland", month: 6, duration: 2, cat: "music", boost: 0.3, location: "Belgium" },
  { name: "Edinburgh Fringe", month: 7, duration: 3, cat: "cultural", boost: 0.6, location: "Edinburgh" },
  { name: "Venice Film Festival", month: 8, duration: 2, cat: "cultural", boost: 0.2, location: "Venice" },
  { name: "Oktoberfest", month: 8, duration: 3, cat: "festival", boost: 0.7, location: "Munich" },
  { name: "Diwali", month: 9, duration: 2, cat: "festival", boost: 0.3, location: "India" },
  { name: "Day of the Dead", month: 10, duration: 1, cat: "cultural", boost: 0.2, location: "Mexico" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CAT_COLORS: Record<string, string> = {};
EVENT_CATEGORIES.forEach((c) => (CAT_COLORS[c.key] = c.color));

function EventTimeline() {
  const labelW = 0;
  const chartL = 40;
  const chartW = 500;
  const monthW = chartW / 12;
  const rowH = 22;

  // Assign rows to avoid overlaps
  const rows: number[] = [];
  const rowEnds: number[] = [];
  EVENTS.forEach((evt) => {
    let row = 0;
    while (rowEnds[row] !== undefined && rowEnds[row] > evt.month) {
      row++;
    }
    rows.push(row);
    rowEnds[row] = evt.month + evt.duration;
  });

  const maxRow = Math.max(...rows);
  const chartH = (maxRow + 1) * rowH + 60;

  return (
    <svg
      viewBox={`0 0 560 ${chartH}`}
      className="w-full"
      role="img"
      aria-label="Timeline of major events throughout the year"
    >
      {/* Month columns */}
      {MONTHS.map((month, i) => (
        <g key={month}>
          <line
            x1={chartL + i * monthW}
            y1={16}
            x2={chartL + i * monthW}
            y2={chartH - 30}
            stroke="#e5e7eb"
            strokeWidth={0.5}
          />
          <text
            x={chartL + i * monthW + monthW / 2}
            y={12}
            fontSize={9}
            fill="#9ca3af"
            textAnchor="middle"
          >
            {month}
          </text>
        </g>
      ))}
      {/* Right edge */}
      <line
        x1={chartL + 12 * monthW}
        y1={16}
        x2={chartL + 12 * monthW}
        y2={chartH - 30}
        stroke="#e5e7eb"
        strokeWidth={0.5}
      />

      {/* Event blocks */}
      {EVENTS.map((evt, i) => {
        const x = chartL + evt.month * monthW + 2;
        const w = evt.duration * monthW - 4;
        const y = 20 + rows[i] * rowH;
        const color = CAT_COLORS[evt.cat] || "#6b7280";
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={w}
              height={rowH - 4}
              fill={color}
              opacity={0.2}
              rx={4}
            />
            <rect
              x={x}
              y={y}
              width={w}
              height={rowH - 4}
              fill="none"
              stroke={color}
              strokeWidth={1}
              opacity={0.5}
              rx={4}
            />
            {w > 30 && (
              <text
                x={x + 5}
                y={y + rowH / 2 + 1}
                fontSize={7.5}
                fill="#374151"
                fontWeight={500}
              >
                {evt.name}
              </text>
            )}
          </g>
        );
      })}

      {/* Legend */}
      {EVENT_CATEGORIES.map((cat, i) => (
        <g
          key={cat.key}
          transform={`translate(${labelW + chartL + i * 100}, ${chartH - 14})`}
        >
          <rect width={10} height={10} fill={cat.color} rx={2} opacity={0.6} />
          <text x={14} y={9} fontSize={9} fill="#6b7280">
            {cat.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function boostToColor(boost: number): string {
  if (boost >= 0.7) return "text-red-600 bg-red-50";
  if (boost >= 0.4) return "text-orange-600 bg-orange-50";
  if (boost >= 0.2) return "text-yellow-700 bg-yellow-50";
  return "text-gray-600 bg-gray-50";
}

function boostToLabelKey(boost: number): string {
  if (boost >= 0.7) return "veryHigh";
  if (boost >= 0.4) return "highImpact";
  if (boost >= 0.2) return "medium";
  return "low";
}

export default async function EventsPage() {
  const t = await getTranslations("featurePages.events");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="events">
      {/* How events work */}
      <h2 className="text-xl font-bold text-gray-900">
        {t("addOnTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("addOnText")}
      </p>

      {/* Timeline */}
      <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          {t("chartTitle")}
        </h3>
        <EventTimeline />
      </div>

      {/* Event categories */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("categoriesTitle")}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-5">
        {EVENT_CATEGORIES.map((cat) => {
          const count = EVENTS.filter((e) => e.cat === cat.key).length;
          return (
            <div
              key={cat.key}
              className="rounded-lg border border-gray-200 bg-white p-3 text-center"
            >
              <div
                className="mx-auto h-2 w-8 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <p className="mt-2 text-sm font-semibold text-gray-900">
                {cat.label}
              </p>
              <p className="text-xs text-gray-500">{t("eventsShown", { count })}</p>
            </div>
          );
        })}
      </div>

      {/* Featured events */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("highImpactTitle")}
      </h2>
      <div className="mt-4 space-y-2">
        {EVENTS.filter((e) => e.boost >= 0.4)
          .sort((a, b) => b.boost - a.boost)
          .map((evt) => (
            <div
              key={evt.name}
              className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3"
            >
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor:
                    CAT_COLORS[evt.cat],
                }}
              />
              <span className="font-medium text-gray-900 text-sm">
                {evt.name}
              </span>
              <span className="text-xs text-gray-500">{evt.location}</span>
              <span className="ml-auto flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${boostToColor(evt.boost)}`}
                >
                  {t(boostToLabelKey(evt.boost))}
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  +{(evt.boost * 100).toFixed(0)}%
                </span>
              </span>
            </div>
          ))}
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4">
        <p className="text-sm font-semibold text-orange-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-orange-800">
          {t("insightText")}
        </p>
      </div>

      {/* Recurring vs one-time */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("recurringTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("recurringText")}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">{t("recurring")}</p>
          <p className="mt-1 text-xs text-gray-600">
            {t("recurringDesc")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">{t("oneTime")}</p>
          <p className="mt-1 text-xs text-gray-600">
            {t("oneTimeDesc")}
          </p>
        </div>
      </div>
    </FeaturePageShell>
  );
}
