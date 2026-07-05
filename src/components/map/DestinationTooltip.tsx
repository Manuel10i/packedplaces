"use client";

import { useTranslations } from "next-intl";
import { busynessLabelKey, busynessColor } from "@/lib/busyness-scale";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";

interface Props {
  x: number;
  y: number;
  name: string;
  score: number;
  sources: { regionName: string; weight: number }[];
  activeEvents?: string[];
}

export function DestinationTooltip({ x, y, name, score, sources, activeEvents }: Props) {
  const t = useTranslations("tooltip");
  const mode = useResolvedTheme();
  const scorePercent = Math.round(score * 100);

  function getCrowdednessLabel(s: number): string {
    return t(busynessLabelKey(s));
  }

  return (
    <div
      className="pointer-events-none absolute z-50 rounded-[4px] border border-line bg-surface-raised px-3 py-2 text-sm shadow-xl"
      style={{ left: x + 12, top: y - 12 }}
    >
      <div className="font-display text-ink">{name}</div>
      <div className="mt-1 flex items-center gap-2">
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: busynessColor(score, mode) }}
        />
        <span className="text-ink-muted">
          {t("crowdedness", { score: scorePercent, label: getCrowdednessLabel(score) })}
        </span>
      </div>
      {activeEvents && activeEvents.length > 0 && (
        <div className="mt-1.5 border-t border-line pt-1.5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("activeEvents")}
          </div>
          {activeEvents.map((event, i) => (
            <div key={i} className="text-xs text-accent">
              {event}
            </div>
          ))}
        </div>
      )}
      {sources.length > 0 && (
        <div className="mt-1.5 border-t border-line pt-1.5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            {t("topSources")}
          </div>
          {sources.map((s, i) => (
            <div key={i} className="text-xs text-ink-muted">
              {s.regionName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
