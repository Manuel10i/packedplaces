"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import {
  getConsent,
  setConsent,
  subscribeConsent,
  type ConsentState,
} from "@/lib/analytics";

// The stored choice is unknown on the server; reflect that until the client reads it.
const serverConsent = (): ConsentState => "unknown";

/**
 * Lets the visitor grant or withdraw analytics consent from the privacy page.
 * Reads the same consent store as the banner, so a change here also toggles
 * Google Analytics live and is remembered.
 */
export function ConsentControls() {
  const t = useTranslations("privacy");
  const state = useSyncExternalStore(subscribeConsent, getConsent, serverConsent);

  const statusLabel =
    state === "granted"
      ? t("statusGranted")
      : state === "denied"
        ? t("statusDenied")
        : t("statusUnknown");

  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
      <p className="text-sm text-gray-700">
        {t("consentStatus")}{" "}
        <span className="font-semibold text-gray-900">{statusLabel}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {state === "granted" ? (
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {t("revokeConsent")}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="rounded-lg bg-cta-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {t("grantConsent")}
          </button>
        )}
      </div>
    </div>
  );
}
