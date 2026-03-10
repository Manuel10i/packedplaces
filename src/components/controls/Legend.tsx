"use client";

import { useTranslations } from "next-intl";

interface LegendProps {
  className?: string;
}

export function Legend({ className = "rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm" }: LegendProps) {
  const t = useTranslations("legend");

  return (
    <div className={className}>
      <div className="mb-1.5 text-xs font-semibold text-gray-500">{t("title")}</div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">{t("quiet")}</span>
        <div
          className="h-3 flex-1 rounded-full"
          style={{
            background: "linear-gradient(to right, #22c55e, #facc15, #f97316, #dc2626)",
          }}
        />
        <span className="text-xs text-gray-500">{t("packed")}</span>
      </div>
    </div>
  );
}
