"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { crowdColor, type ThemeMode } from "@/lib/crowd-palette";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";
import { cx } from "./cx";

export interface CrowdCurveSeries {
  id: string;
  /** Weekly scores 0–1; index 0 = week 1. null = no data (gap). */
  values: (number | null)[];
  /** Stroke colour for multi-series mode; single series uses the crowd ramp. */
  color?: string;
}

interface CrowdCurveProps {
  series: CrowdCurveSeries[];
  /** Vertical tick for the currently selected week (1-based). */
  currentWeek?: number;
  /** Mark the quietest (teal ring) and busiest (terracotta dot) weeks. Single series only. */
  markMinMax?: boolean;
  ariaLabel: string;
  className?: string;
  /** Localized short month names — rendered as an x-axis row under the chart. */
  monthLabels?: string[];
  /** Called with the hovered/tapped week (1-based) or null when leaving. */
  onScrub?: (week: number | null) => void;
}

/** Categorical line colours for compare mode (distinct from the crowd ramp). */
export const SERIES_COLORS: Record<ThemeMode, string[]> = {
  light: ["#175e5a", "#c2542f", "#345995", "#8a6d1f", "#6d3a78", "#3f5d45"],
  dark: ["#4fa8a0", "#d97c55", "#7f9fd1", "#d3b356", "#b287bd", "#7fa887"],
};

// SSR/pre-measure fallback dimensions; replaced by the element's real pixel
// size after mount so viewBox units always map 1:1 to pixels (no distortion).
const FALLBACK_W = 520;
const FALLBACK_H = 130;
const PAD_TOP = 10;
const PAD_BOTTOM = 6;

interface Dims {
  w: number;
  h: number;
}

function xFor(weekIndex: number, count: number, dims: Dims): number {
  return (weekIndex / (count - 1)) * dims.w;
}

function yFor(value: number, dims: Dims): number {
  const plotH = dims.h - PAD_TOP - PAD_BOTTOM;
  return PAD_TOP + (1 - Math.min(Math.max(value, 0), 1)) * plotH;
}

function buildPath(values: (number | null)[], close: boolean, dims: Dims): string {
  const count = values.length;
  let d = "";
  let started = false;
  let firstX = NaN;
  let lastX = 0;
  values.forEach((v, i) => {
    if (v === null) {
      started = false;
      return;
    }
    const x = xFor(i, count, dims);
    const y = yFor(v, dims);
    d += started ? ` L ${x.toFixed(1)} ${y.toFixed(1)}` : ` M ${x.toFixed(1)} ${y.toFixed(1)}`;
    started = true;
    if (Number.isNaN(firstX)) firstX = x;
    lastX = x;
  });
  if (close && !Number.isNaN(firstX)) {
    const bottom = dims.h - PAD_BOTTOM;
    d += ` L ${lastX.toFixed(1)} ${bottom} L ${firstX.toFixed(1)} ${bottom} Z`;
  }
  return d;
}

function minMaxWeeks(values: (number | null)[]): { min: number; max: number } | null {
  let min = -1;
  let max = -1;
  values.forEach((v, i) => {
    if (v === null) return;
    if (min === -1 || v < (values[min] as number)) min = i;
    if (max === -1 || v > (values[max] as number)) max = i;
  });
  if (min === -1 || max === -1) return null;
  return { min, max };
}

/**
 * Dependency-free SVG crowd curve over the weeks of a year.
 * Single series: area + stroke coloured along the x-axis by the crowd ramp.
 * Multi series: flat categorical strokes for comparison.
 * The viewBox tracks the element's rendered size, so markers and dashes stay
 * perfectly round/even at any width.
 */
export function CrowdCurve({
  series,
  currentWeek,
  markMinMax = false,
  ariaLabel,
  className,
  monthLabels,
  onScrub,
}: CrowdCurveProps) {
  const mode = useResolvedTheme();
  const gradientId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const [scrub, setScrub] = useState<number | null>(null);
  const [dims, setDims] = useState<Dims>({ w: FALLBACK_W, h: FALLBACK_H });

  // Match the drawing coordinate system to the rendered pixel size.
  useEffect(() => {
    const el = svgRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      setDims((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const single = series.length === 1 ? series[0] : null;
  const count = series[0]?.values.length ?? 52;

  const gradientStops = useMemo(() => {
    if (!single) return [];
    return single.values.map((v, i) => ({
      offset: `${((i / (count - 1)) * 100).toFixed(1)}%`,
      color: crowdColor(v ?? 0, mode),
    }));
  }, [single, count, mode]);

  const extremes = single && markMinMax ? minMaxWeeks(single.values) : null;

  function weekFromEvent(e: React.PointerEvent<SVGSVGElement>): number {
    const rect = e.currentTarget.getBoundingClientRect();
    const frac = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    return Math.round(frac * (count - 1)) + 1;
  }

  function handleScrub(week: number | null) {
    setScrub(week);
    onScrub?.(week);
  }

  const chart = (
    <svg
      ref={svgRef}
      role="img"
      aria-label={ariaLabel}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      preserveAspectRatio="none"
      className={cx("block w-full touch-pan-y select-none", className)}
      onPointerMove={onScrub || markMinMax ? (e) => handleScrub(weekFromEvent(e)) : undefined}
      onPointerLeave={onScrub || markMinMax ? () => handleScrub(null) : undefined}
    >
      {single && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            {gradientStops.map((s, i) => (
              <stop key={i} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        </defs>
      )}

      {/* faint quarter grid */}
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={0}
          x2={dims.w}
          y1={yFor(f, dims)}
          y2={yFor(f, dims)}
          stroke="currentColor"
          strokeOpacity={0.08}
          strokeDasharray="2 6"
        />
      ))}

      {single ? (
        <>
          <path
            d={buildPath(single.values, true, dims)}
            fill={`url(#${gradientId})`}
            fillOpacity={0.18}
          />
          <path
            d={buildPath(single.values, false, dims)}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={2.5}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </>
      ) : (
        series.map((s, i) => (
          <path
            key={s.id}
            d={buildPath(s.values, false, dims)}
            fill="none"
            stroke={s.color ?? SERIES_COLORS[mode][i % SERIES_COLORS[mode].length]}
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))
      )}

      {currentWeek !== undefined && currentWeek >= 1 && currentWeek <= count && (
        <line
          x1={xFor(currentWeek - 1, count, dims)}
          x2={xFor(currentWeek - 1, count, dims)}
          y1={PAD_TOP - 4}
          y2={dims.h - PAD_BOTTOM}
          stroke="currentColor"
          strokeOpacity={0.45}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
      )}

      {extremes && single && (
        <>
          {/* Quietest week: the copy calls this ring "teal/turquoise" — the
              light stroke must actually read as turquoise, not near-grey. */}
          <circle
            cx={xFor(extremes.min, count, dims)}
            cy={yFor(single.values[extremes.min] ?? 0, dims)}
            r={5.5}
            fill={mode === "dark" ? "#0f1922" : "#fdfaf3"}
            stroke={mode === "dark" ? "#4fc3b8" : "#0e9488"}
            strokeWidth={3}
          />
          <circle
            cx={xFor(extremes.max, count, dims)}
            cy={yFor(single.values[extremes.max] ?? 0, dims)}
            r={5.5}
            fill={mode === "dark" ? "#d97c55" : "#c2542f"}
          />
        </>
      )}

      {scrub !== null && single && single.values[scrub - 1] !== null && (
        <circle
          cx={xFor(scrub - 1, count, dims)}
          cy={yFor(single.values[scrub - 1] as number, dims)}
          r={4}
          fill={crowdColor(single.values[scrub - 1] as number, mode)}
          stroke={mode === "dark" ? "#0f1922" : "#fdfaf3"}
          strokeWidth={1.5}
        />
      )}
    </svg>
  );

  if (!monthLabels?.length) return chart;

  return (
    <div>
      {chart}
      <div
        aria-hidden
        className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-wider text-ink-faint"
      >
        {/* All 12 months always — single letters on narrow screens so the
            axis still ends with December. */}
        {monthLabels.map((m, i) => (
          <span key={i}>
            <span className="sm:hidden">{m.charAt(0)}</span>
            <span className="hidden sm:inline">{m}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
