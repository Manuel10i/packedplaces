"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { trackEvent } from "@/lib/analytics";

export function MapDisclaimer() {
  const t = useTranslations("disclaimer");
  const disclaimerAccepted = useMapStore((s) => s.disclaimerAccepted);
  const setDisclaimerAccepted = useMapStore((s) => s.setDisclaimerAccepted);

  // After hydration, check localStorage and show modal if not accepted
  useEffect(() => {
    try {
      if (localStorage.getItem("map_disclaimer_accepted") !== "1") {
        useMapStore.setState({ disclaimerAccepted: false });
      }
    } catch {
      useMapStore.setState({ disclaimerAccepted: false });
    }
  }, []);

  if (disclaimerAccepted) return null;

  function handleAccept() {
    trackEvent("disclaimer_accepted");
    setDisclaimerAccepted();
  }

  function handleDecline() {
    trackEvent("disclaimer_declined");
    window.location.href = "https://www.google.com";
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="text-lg font-bold text-gray-900">{t("title")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{t("body")}</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleDecline}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            {t("decline")}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
