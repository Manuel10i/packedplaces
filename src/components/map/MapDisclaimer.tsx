"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "map_disclaimer_accepted";

export function MapDisclaimer() {
  const t = useTranslations("disclaimer");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "1");
    trackEvent("disclaimer_accepted");
    setVisible(false);
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
