"use client";

import { useTranslations } from "next-intl";

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
  const scorePercent = Math.round(score * 100);

  function getCrowdednessLabel(s: number): string {
    if (s < 0.2) return t("quiet");
    if (s < 0.4) return t("moderate");
    if (s < 0.6) return t("busy");
    if (s < 0.8) return t("veryBusy");
    return t("packed");
  }

  return (
    <div
      className="pointer-events-none absolute z-50 rounded-lg bg-white px-3 py-2 text-sm shadow-lg"
      style={{ left: x + 12, top: y - 12 }}
    >
      <div className="font-semibold text-gray-900">{name}</div>
      <div className="mt-1 flex items-center gap-2">
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: getScoreColor(score) }}
        />
        <span className="text-gray-600">
          {t("crowdedness", { score: scorePercent, label: getCrowdednessLabel(score) })}
        </span>
      </div>
      {activeEvents && activeEvents.length > 0 && (
        <div className="mt-1.5 border-t border-gray-100 pt-1.5">
          <div className="text-xs font-medium text-gray-500">{t("activeEvents")}</div>
          {activeEvents.map((event, i) => (
            <div key={i} className="text-xs text-orange-600">
              {event}
            </div>
          ))}
        </div>
      )}
      {sources.length > 0 && (
        <div className="mt-1.5 border-t border-gray-100 pt-1.5">
          <div className="text-xs font-medium text-gray-500">{t("topSources")}</div>
          {sources.map((s, i) => (
            <div key={i} className="text-xs text-gray-600">
              {s.regionName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getScoreColor(score: number): string {
  if (score < 0.25) return "#22c55e";
  if (score < 0.5) return "#facc15";
  if (score < 0.75) return "#f97316";
  return "#dc2626";
}
