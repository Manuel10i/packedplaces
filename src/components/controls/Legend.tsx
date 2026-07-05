"use client";

import { useTranslations } from "next-intl";
import { crowdCssGradient } from "@/lib/crowd-palette";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";

interface LegendProps {
  className?: string;
}

export function Legend({ className = "rounded-md border border-line bg-surface-raised/95 px-4 py-3 backdrop-blur-sm" }: LegendProps) {
  const t = useTranslations("legend");
  const mode = useResolvedTheme();

  return (
    <div className={className}>
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
        {t("title")}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-ink-muted">{t("quiet")}</span>
        <div
          className="h-2.5 flex-1 rounded-full"
          style={{ background: crowdCssGradient(mode) }}
        />
        <span className="text-xs text-ink-muted">{t("packed")}</span>
      </div>
    </div>
  );
}
