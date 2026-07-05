"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useMapStore } from "@/store/useMapStore";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-md rounded-[4px] border border-line bg-surface-raised bg-paper-grain p-6 shadow-2xl">
        <h2 className="font-display text-xl text-ink">{t("title")}</h2>
        <div aria-hidden className="mt-3 h-px w-12 bg-accent/70" />
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t("body")}</p>
        <div className="mt-6 flex gap-3">
          <Button variant="secondary" className="flex-1" onClick={handleDecline}>
            {t("decline")}
          </Button>
          <Button className="flex-1" onClick={handleAccept}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
