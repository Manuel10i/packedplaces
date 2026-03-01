"use client";

interface Props {
  x: number;
  y: number;
  name: string;
  score: number;
  sources: { regionName: string; weight: number }[];
}

function getCrowdednessLabel(score: number): string {
  if (score < 0.2) return "Quiet";
  if (score < 0.4) return "Moderate";
  if (score < 0.6) return "Busy";
  if (score < 0.8) return "Very Busy";
  return "Packed";
}

export function DestinationTooltip({ x, y, name, score, sources }: Props) {
  const scorePercent = Math.round(score * 100);

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
        <span className="text-gray-600">Crowdedness: {scorePercent}% &mdash; {getCrowdednessLabel(score)}</span>
      </div>
      {sources.length > 0 && (
        <div className="mt-1.5 border-t border-gray-100 pt-1.5">
          <div className="text-xs font-medium text-gray-500">Top sources:</div>
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
