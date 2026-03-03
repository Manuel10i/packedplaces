import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePageShell } from "@/components/features/FeaturePageShell";

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
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {t("formula")}
        </h2>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="rounded-lg bg-white px-5 py-3 text-center shadow-sm">
            <p className="text-xs text-gray-500">{t("rawTraffic")}</p>
            <p className="text-lg font-bold text-gray-900">{t("visitors")}</p>
          </div>
          <span className="text-2xl font-light text-gray-400">&divide;</span>
          <div className="rounded-lg bg-white px-5 py-3 text-center shadow-sm">
            <p className="text-xs text-gray-500">{t("infrastructure")}</p>
            <p className="text-lg font-bold text-gray-900">{t("capacity")}</p>
          </div>
          <span className="text-2xl font-light text-gray-400">=</span>
          <div className="rounded-lg bg-gray-900 px-5 py-3 text-center shadow-sm">
            <p className="text-xs text-gray-400">{t("theResult")}</p>
            <p className="text-lg font-bold text-white">{t("crowdedness")}</p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("misleadingTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("misleadingText")}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* NYC Card */}
        <div className="rounded-xl border border-gray-200 p-6">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {t("city")}
          </div>
          <div className="mt-1 text-xl font-bold text-gray-900">
            New York City
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("annualVisitors")}</span>
                <span className="font-medium text-gray-900">60M</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-lg font-light text-gray-300">&divide;</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("capacity")}</span>
                <span className="font-medium text-gray-900">5.0 ({t("high")})</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-300"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-lg font-light text-gray-300">=</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("crowdedness")}</span>
                <span className="font-medium text-gray-900">35%</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: "35%" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-yellow-50 px-3 py-2 text-center text-sm font-medium text-yellow-700">
            {t("moderate")}
          </div>
        </div>

        {/* Hallstatt Card */}
        <div className="rounded-xl border border-gray-200 p-6">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {t("lakeVillage")}
          </div>
          <div className="mt-1 text-xl font-bold text-gray-900">Hallstatt</div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("annualVisitors")}</span>
                <span className="font-medium text-gray-900">1M</span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: "12%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-lg font-light text-gray-300">&divide;</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("capacity")}</span>
                <span className="font-medium text-gray-900">
                  0.3 ({t("veryLow")})
                </span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-300"
                  style={{ width: "6%" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-lg font-light text-gray-300">=</span>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t("crowdedness")}</span>
                <span className="font-medium text-gray-900">89%</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{ width: "89%" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-red-50 px-3 py-2 text-center text-sm font-medium text-red-700">
            {t("packed")}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4">
        <p className="text-sm font-semibold text-blue-900">{s("keyInsight")}</p>
        <p className="mt-1 text-sm text-blue-800">
          {t("insightText")}
        </p>
      </div>

      {/* Crowdedness Scale */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("scaleTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("scaleText")}
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
        <div className="flex">
          {[
            { label: t("quiet"), range: "0–20%", color: "bg-green-500", text: "text-green-900", bg: "bg-green-50" },
            { label: t("moderate"), range: "20–40%", color: "bg-yellow-400", text: "text-yellow-900", bg: "bg-yellow-50" },
            { label: t("busy"), range: "40–60%", color: "bg-amber-500", text: "text-amber-900", bg: "bg-amber-50" },
            { label: t("veryBusy"), range: "60–80%", color: "bg-orange-500", text: "text-orange-900", bg: "bg-orange-50" },
            { label: t("packed"), range: "80–100%", color: "bg-red-500", text: "text-red-900", bg: "bg-red-50" },
          ].map((level) => (
            <div key={level.label} className={`flex-1 ${level.bg} p-3 text-center`}>
              <div className={`mx-auto h-2 w-12 rounded-full ${level.color}`} />
              <p className={`mt-2 text-xs font-semibold ${level.text}`}>
                {level.label}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">{level.range}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How capacity is determined */}
      <h2 className="mt-12 text-xl font-bold text-gray-900">
        {t("howCapacityTitle")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {t("howCapacityText")}
      </p>
    </FeaturePageShell>
  );
}
