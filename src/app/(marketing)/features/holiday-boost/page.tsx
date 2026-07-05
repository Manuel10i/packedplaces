import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";
import { crowdColor } from "@/lib/crowd-palette";

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

interface BoostChartProps {
  labelSchoolHolidays: string;
  legendNormal: string;
  legendHoliday: string;
  legendBase: string;
}

function BoostChart({ labelSchoolHolidays, legendNormal, legendHoliday, legendBase }: BoostChartProps) {
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
            style={{ stroke: "var(--line)" }}
            strokeWidth={0.5}
          />
          <text
            x={CL - 6}
            y={CT + CH * (1 - v / 100) + 3.5}
            fontSize={9}
            style={{ fill: "var(--ink-faint)" }}
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
        style={{ fill: "var(--accent)" }}
        opacity={0.12}
        rx={4}
      />
      <text
        x={CL + (5 * (barW + 4)) + (4 * (barW + 4)) / 2}
        y={CT - 8}
        fontSize={9}
        style={{ fill: "var(--accent)" }}
        textAnchor="middle"
        fontWeight={600}
      >
        {labelSchoolHolidays}
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
            style={{ fill: "var(--ink-faint)" }}
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
              style={
                HOLIDAY_WEEKS.has(i + 1)
                  ? { fill: crowdColor(score / 100, "light") }
                  : { fill: "var(--line-strong)" }
              }
              rx={2}
            />
            {HOLIDAY_WEEKS.has(i + 1) && (
              <text
                x={x + barW / 2}
                y={CT + CH - h - 4}
                fontSize={8}
                style={{ fill: "var(--accent)" }}
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
          style={{ fill: "var(--ink-faint)" }}
          textAnchor="middle"
        >
          W{w}
        </text>
      ))}

      {/* Legend */}
      <g transform={`translate(${CL}, ${CT + CH + 30})`}>
        <rect width={10} height={10} style={{ fill: "var(--line-strong)" }} rx={2} />
        <text x={14} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>{legendNormal}</text>
        <rect x={110} width={10} height={10} style={{ fill: crowdColor(0.65, "light") }} rx={2} />
        <text x={124} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>{legendHoliday}</text>
        <rect x={280} width={10} height={10} style={{ fill: "var(--ink-faint)" }} rx={2} opacity={0.5} />
        <text x={294} y={9} fontSize={9} style={{ fill: "var(--ink-muted)" }}>{legendBase}</text>
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
      <h2 className="font-display text-2xl text-ink">{t("howTitle")}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t("howText")}</p>

      {/* Multiplier visual */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="rounded-[4px] border border-line bg-surface-raised px-6 py-4 text-center">
          <p className="font-display text-3xl text-ink-faint">1.0x</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">{t("normalWeek")}</p>
        </div>
        <div aria-hidden className="text-2xl text-ink-faint">&rarr;</div>
        <div className="rounded-[4px] border border-accent bg-accent/10 px-6 py-4 text-center">
          <p className="font-display text-3xl text-accent">1.5x</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">{t("holidayWeek")}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-10 overflow-hidden rounded-[4px] border border-line bg-surface-sunken p-4 sm:p-6">
        <h3 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-widest text-accent">
          {t("chartTitle")}
        </h3>
        <BoostChart
          labelSchoolHolidays={t("chartSchoolHolidays")}
          legendNormal={t("chartLegendNormal")}
          legendHoliday={t("chartLegendHoliday")}
          legendBase={t("chartLegendBase")}
        />
      </div>

      {/* Key Insight */}
      <div className="mt-10 border-l-2 border-dotted border-accent/50 pl-4">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">{s("keyInsight")}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t("insightText")}</p>
      </div>

      {/* Regional staggering */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("staggeringTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t("staggeringText")}</p>

      <div className="mt-6 divide-y divide-line border-y border-line">
        {(["Bavaria", "NRW", "England", "IleDeFrance", "NSW"] as const).map((key) => (
          <div
            key={key}
            className="flex items-center gap-3 py-2.5 text-sm"
          >
            <span className="w-36 shrink-0 font-medium text-ink">
              {t(`region${key}`)}
            </span>
            <span className="text-ink-muted">{t(`dates${key}`)}</span>
            <span className="ml-auto font-mono text-xs text-ink-faint">
              {t(`timing${key}`)}
            </span>
          </div>
        ))}
      </div>
    </FeaturePageShell>
  );
}
