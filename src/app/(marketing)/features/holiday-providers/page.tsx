import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  title: "Multi-Provider Holidays — PackedPlaces.com",
  description:
    "Three cascading providers — manual, OpenHolidaysAPI, and date-holidays — ensure global school holiday coverage for 127 regions.",
};

const PROVIDERS = [
  {
    tier: 1,
    nameKey: "manualName" as const,
    color: "#2563eb",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    regions: 20,
    accuracyKey: "highest" as const,
    descKey: "manualDesc" as const,
    examples: "Germany (16 states), France, UK, USA, Australia, Japan",
  },
  {
    tier: 2,
    nameKey: "apiName" as const,
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-900",
    regions: 55,
    accuracyKey: "high" as const,
    descKey: "apiDesc" as const,
    examples: "Netherlands, Belgium, Switzerland, Austria, Spain, Italy",
  },
  {
    tier: 3,
    nameKey: "libraryName" as const,
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-900",
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
            <text x={0} y={y + 18} fontSize={10} fill="#6b7280">
              Tier {p.tier}
            </text>

            {/* Bar */}
            <rect
              x={130}
              y={y}
              width={w}
              height={36}
              fill={p.color}
              opacity={0.15}
              rx={6}
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
              fill={p.color}
              opacity={0.05}
              rx={i === 0 ? 6 : 0}
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
              fill={p.color}
              opacity={0.3}
              rx={
                i === 0
                  ? 6
                  : i === PROVIDERS.length - 1
                    ? 6
                    : 0
              }
            />

            {/* Provider name */}
            <text
              x={140}
              y={y + 16}
              fontSize={11}
              fill="#1f2937"
              fontWeight={600}
            >
              Tier {p.tier}
            </text>
            <text x={140} y={y + 30} fontSize={9} fill="#6b7280">
              +{p.regions} regions ({cumulative} total)
            </text>

            {/* Cumulative label */}
            <text
              x={130 + w + 8}
              y={y + 22}
              fontSize={10}
              fill={p.color}
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
                fill="#d1d5db"
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
      <h2 className="text-xl font-bold text-gray-900">
        {t("tiersTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("tiersText")}
      </p>

      {/* Cascade diagram */}
      <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <CascadeDiagram />
      </div>

      {/* Provider cards */}
      <div className="mt-8 space-y-4">
        {PROVIDERS.map((p) => (
          <div
            key={p.tier}
            className={`rounded-xl border ${p.border} ${p.bg} p-5`}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.tier}
              </span>
              <h3 className={`text-base font-semibold ${p.text}`}>{t(p.nameKey)}</h3>
              <span className="ml-auto text-sm font-medium text-gray-500">
                {p.regions} {t("regions")}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-700">{t(p.descKey)}</p>
            <p className="mt-2 text-xs text-gray-500">
              <span className="font-medium">{t("examples")}:</span> {p.examples}
            </p>
          </div>
        ))}
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4">
        <p className="text-sm font-semibold text-purple-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-purple-800">
          {t("insightText")}
        </p>
      </div>

      {/* Why school holidays matter */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("whyTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("whyText")}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">127</p>
          <p className="mt-1 text-xs text-gray-500">
            {t("statRegions")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">6–12</p>
          <p className="mt-1 text-xs text-gray-500">
            {t("statWeeks")}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">1.5x</p>
          <p className="mt-1 text-xs text-gray-500">
            {t("statMultiplier")}
          </p>
        </div>
      </div>
    </FeaturePageShell>
  );
}
