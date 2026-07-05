import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";
import { crowdColor, crowdCssGradient } from "@/lib/crowd-palette";

export const metadata: Metadata = {
  title: "Crowdedness, Not Traffic — PackedPlaces.com",
  description:
    "PackedPlaces measures congestion relative to capacity, not raw visitor numbers. A packed ski village scores higher than a busy metropolis.",
};

export default async function CrowdednessPage() {
  const t = await getTranslations("featurePages.crowdedness");
  const s = await getTranslations("featurePages.shell");

  return (
    <FeaturePageShell slug="crowdedness">
      {/* The Formula */}
      <div className="rounded-[4px] border border-line bg-surface-sunken p-6">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">
          {t("formula")}
        </h2>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="rounded-[3px] border border-line bg-surface-raised px-5 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">{t("rawTraffic")}</p>
            <p className="mt-1 font-display text-lg text-ink">{t("visitors")}</p>
          </div>
          <span className="font-mono text-2xl text-ink-faint">&divide;</span>
          <div className="rounded-[3px] border border-line bg-surface-raised px-5 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">{t("infrastructure")}</p>
            <p className="mt-1 font-display text-lg text-ink">{t("capacity")}</p>
          </div>
          <span className="font-mono text-2xl text-ink-faint">=</span>
          <div className="rounded-[3px] bg-accent px-5 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-ink/70">{t("theResult")}</p>
            <p className="mt-1 font-display text-lg text-accent-ink">{t("crowdedness")}</p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("misleadingTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("misleadingText")}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* NYC Card */}
        <div className="rounded-[4px] border border-line bg-surface-raised p-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {t("city")}
          </div>
          <div className="mt-1 font-display text-xl text-ink">
            New York City
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("annualVisitors")}</span>
                <span className="font-mono text-ink">60M</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full bg-accent-2"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="font-mono text-lg text-ink-faint">&divide;</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("capacity")}</span>
                <span className="font-mono text-ink">5.0 ({t("high")})</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full bg-accent-2/40"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="font-mono text-lg text-ink-faint">=</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("crowdedness")}</span>
                <span className="font-mono text-ink">35%</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full"
                  style={{ width: "35%", backgroundColor: crowdColor(0.35, "light") }}
                />
              </div>
            </div>
          </div>
          <div
            className="mt-5 rounded-[3px] border border-line bg-surface-sunken px-3 py-2 text-center font-mono text-xs font-medium uppercase tracking-widest"
            style={{ color: crowdColor(0.35, "light") }}
          >
            {t("moderate")}
          </div>
        </div>

        {/* Hallstatt Card */}
        <div className="rounded-[4px] border border-line bg-surface-raised p-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            {t("lakeVillage")}
          </div>
          <div className="mt-1 font-display text-xl text-ink">Hallstatt</div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("annualVisitors")}</span>
                <span className="font-mono text-ink">1M</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full bg-accent-2"
                  style={{ width: "12%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="font-mono text-lg text-ink-faint">&divide;</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("capacity")}</span>
                <span className="font-mono text-ink">
                  0.3 ({t("veryLow")})
                </span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full bg-accent-2/40"
                  style={{ width: "6%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="font-mono text-lg text-ink-faint">=</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-muted">{t("crowdedness")}</span>
                <span className="font-mono text-ink">89%</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-surface-sunken">
                <div
                  className="h-full rounded-full"
                  style={{ width: "89%", backgroundColor: crowdColor(0.89, "light") }}
                />
              </div>
            </div>
          </div>
          <div
            className="mt-5 rounded-[3px] border border-line bg-surface-sunken px-3 py-2 text-center font-mono text-xs font-medium uppercase tracking-widest"
            style={{ color: crowdColor(0.89, "light") }}
          >
            {t("packed")}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-10 border-l-2 border-dotted border-accent/50 pl-4">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent">{s("keyInsight")}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {t("insightText")}
        </p>
      </div>

      {/* Crowdedness Scale */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("scaleTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("scaleText")}
      </p>
      <div className="mt-6 overflow-hidden rounded-[4px] border border-line">
        <div
          aria-hidden
          className="h-2"
          style={{ background: crowdCssGradient("light") }}
        />
        <div className="grid grid-cols-5 gap-px border-t border-line bg-line">
          {[
            { label: t("quiet"), range: "0–20%" },
            { label: t("moderate"), range: "20–40%" },
            { label: t("busy"), range: "40–60%" },
            { label: t("veryBusy"), range: "60–80%" },
            { label: t("packed"), range: "80–100%" },
          ].map((level) => (
            <div key={level.label} className="bg-surface-raised p-3 text-center">
              <p className="text-xs font-medium text-ink">
                {level.label}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-ink-faint">{level.range}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How capacity is determined */}
      <h2 className="mt-12 font-display text-2xl text-ink">
        {t("howCapacityTitle")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {t("howCapacityText")}
      </p>
    </FeaturePageShell>
  );
}
