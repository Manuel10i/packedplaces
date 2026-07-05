"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Switch } from "@/components/ui/Switch";
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
  const granted = state === "granted";

  const statusLabel =
    state === "granted"
      ? t("statusGranted")
      : state === "denied"
        ? t("statusDenied")
        : t("statusUnknown");

  return (
    <div className="mt-4 rounded-[4px] border border-line bg-surface-raised p-4">
      <p className="text-sm text-ink-muted">
        {t("consentStatus")}{" "}
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink">
          {statusLabel}
        </span>
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
        <Switch
          id="analytics-consent"
          checked={granted}
          onChange={(checked) => setConsent(checked ? "granted" : "denied")}
          aria-label={granted ? t("revokeConsent") : t("grantConsent")}
        />
        {/* htmlFor forwards label clicks to the switch button — no extra handler needed. */}
        <label htmlFor="analytics-consent" className="cursor-pointer text-sm text-ink-muted">
          {granted ? t("revokeConsent") : t("grantConsent")}
        </label>
      </div>
    </div>
  );
}
