import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

export const metadata: Metadata = {
  title: "Holiday Boost Effect — PackedPlaces.com",
  description:
    "A 1.5x multiplier during school breaks captures the surge in travel demand when families hit the road.",
};

const WEEKS = Array.from({ length: 16 }, (_, i) => i + 1);
const HOLIDAY_WEEKS = new Set([6, 7, 8, 9]); // weeks 6-9 are school holidays

// Base scores (without holiday boost)
const BASE_SCORES = [32, 35, 38, 40, 42, 44, 45, 47, 48, 46, 43, 40, 38, 36, 34, 32];

// Boosted scores (1.5x during holiday weeks)
const BOOSTED_SCORES = BASE_SCORES.map((s, i) =>
  HOLIDAY_WEEKS.has(i + 1) ? Math.round(s * 1.5) : s
);

const CL = 40;
const CT = 20;
const CW = 490;
const CH = 180;

function scoreToColor(score: number): string {
  if (score < 30) return "#22c55e";
  if (score < 50) return "#facc15";
  if (score < 70) return "#f97316";
  return "#dc2626";
}

function BoostChart() {
  const barW = CW / WEEKS.length - 4;

  return (
    <svg
      viewBox="0 0 560 260"
      className="w-full"
      role="img"
      aria-label="Chart showing crowdedness with and without holiday boost effect"
    >
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line
            x1={CL}
            x2={CL + CW}
            y1={CT + CH * (1 - v / 100)}
            y2={CT + CH * (1 - v / 100)}
            stroke="#e5e7eb"
            strokeWidth={0.5}
          />
          <text
            x={CL - 6}
            y={CT + CH * (1 - v / 100) + 3.5}
            fontSize={9}
            fill="#9ca3af"
            textAnchor="end"
          >
            {v}%
          </text>
        </g>
      ))}

      {/* Holiday highlight zone */}
      <rect
        x={CL + (5 * (barW + 4))}
        y={CT - 4}
        width={4 * (barW + 4)}
        height={CH + 8}
        fill="#fef3c7"
        rx={4}
      />
      <text
        x={CL + (5 * (barW + 4)) + (4 * (barW + 4)) / 2}
        y={CT - 8}
        fontSize={9}
        fill="#d97706"
        textAnchor="middle"
        fontWeight={600}
      >
        School Holidays
      </text>

      {/* Base score bars (ghost) */}
      {WEEKS.map((_, i) => {
        const x = CL + i * (barW + 4) + 2;
        const h = (BASE_SCORES[i] / 100) * CH;
        return (
          <rect
            key={`base-${i}`}
            x={x}
            y={CT + CH - h}
            width={barW}
            height={h}
            fill="#d1d5db"
            rx={2}
            opacity={HOLIDAY_WEEKS.has(i + 1) ? 0.3 : 0}
          />
        );
      })}

      {/* Boosted score bars */}
      {WEEKS.map((_, i) => {
        const x = CL + i * (barW + 4) + 2;
        const score = BOOSTED_SCORES[i];
        const h = (score / 100) * CH;
        return (
          <g key={`boosted-${i}`}>
            <rect
              x={x}
              y={CT + CH - h}
              width={barW}
              height={h}
              fill={
                HOLIDAY_WEEKS.has(i + 1)
                  ? scoreToColor(score)
                  : "#94a3b8"
              }
              rx={2}
            />
            {HOLIDAY_WEEKS.has(i + 1) && (
              <text
                x={x + barW / 2}
                y={CT + CH - h - 4}
                fontSize={8}
                fill="#d97706"
                textAnchor="middle"
                fontWeight={600}
              >
                {score}%
              </text>
            )}
          </g>
        );
      })}

      {/* Week labels */}
      {WEEKS.map((w, i) => (
        <text
          key={w}
          x={CL + i * (barW + 4) + 2 + barW / 2}
          y={CT + CH + 14}
          fontSize={8}
          fill="#9ca3af"
          textAnchor="middle"
        >
          W{w}
        </text>
      ))}

      {/* Legend */}
      <g transform={`translate(${CL}, ${CT + CH + 30})`}>
        <rect width={10} height={10} fill="#94a3b8" rx={2} />
        <text x={14} y={9} fontSize={9} fill="#6b7280">Normal week</text>
        <rect x={110} width={10} height={10} fill="#f97316" rx={2} />
        <text x={124} y={9} fontSize={9} fill="#6b7280">Holiday week (1.5x boost)</text>
        <rect x={280} width={10} height={10} fill="#d1d5db" rx={2} opacity={0.5} />
        <text x={294} y={9} fontSize={9} fill="#6b7280">Base score (without boost)</text>
      </g>
    </svg>
  );
}

export default async function HolidayBoostPage() {
  const t = await getTranslations("featurePages.holidayBoost");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="holiday-boost">
      {/* How it works */}
      <h2 className="text-xl font-bold text-gray-900">{t("howTitle")}</h2>
      <p className="mt-2 text-sm text-gray-600">{t("howText")}</p>

      {/* Multiplier visual */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="rounded-lg border border-gray-200 bg-white px-6 py-4 text-center">
          <p className="text-3xl font-bold text-gray-400">1.0x</p>
          <p className="mt-1 text-xs text-gray-500">{t("normalWeek")}</p>
        </div>
        <div className="text-2xl text-gray-300">&rarr;</div>
        <div className="rounded-lg border-2 border-orange-300 bg-orange-50 px-6 py-4 text-center">
          <p className="text-3xl font-bold text-orange-600">1.5x</p>
          <p className="mt-1 text-xs text-orange-700">{t("holidayWeek")}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">
          {t("chartTitle")}
        </h3>
        <BoostChart />
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4">
        <p className="text-sm font-semibold text-orange-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-orange-800">{t("insightText")}</p>
      </div>

      {/* Regional staggering */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("staggeringTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">{t("staggeringText")}</p>

      <div className="mt-6 space-y-2">
        {[
          { region: "Bavaria (DE)", weeks: "Aug 1 – Sep 12", timing: "Late summer" },
          { region: "NRW (DE)", weeks: "Jul 5 – Aug 17", timing: "Mid summer" },
          { region: "England (UK)", weeks: "Jul 22 – Sep 2", timing: "Late July" },
          { region: "Île-de-France (FR)", weeks: "Jul 5 – Sep 1", timing: "Early July" },
          { region: "New South Wales (AU)", weeks: "Dec 20 – Jan 28", timing: "December" },
        ].map((item) => (
          <div
            key={item.region}
            className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-2 text-sm"
          >
            <span className="w-36 shrink-0 font-medium text-gray-900">
              {item.region}
            </span>
            <span className="text-gray-600">{item.weeks}</span>
            <span className="ml-auto text-xs text-gray-400">
              {item.timing}
            </span>
          </div>
        ))}
      </div>
    </FeaturePageShell>
  );
}
