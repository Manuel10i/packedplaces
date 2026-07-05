"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import {
  getConsent,
  setConsent,
  subscribeConsent,
  markGtagReady,
  type ConsentState,
} from "@/lib/analytics";

interface Props {
  gaId?: string;
}

// On the server (and the first hydration render) the stored choice is unknown,
// so render neither the banner nor analytics until the client reads storage.
const serverConsent = (): ConsentState => "denied";

/**
 * Cookie consent banner + consent-gated analytics loader. Google Analytics is
 * only mounted after the user accepts, so no tracking cookies or requests occur
 * beforehand. Events fired before the decision are queued and flushed on accept.
 */
export function CookieConsent({ gaId }: Props) {
  const t = useTranslations("consent");
  const state = useSyncExternalStore(subscribeConsent, getConsent, serverConsent);
  const granted = state === "granted";

  // Once analytics is granted, wait for gtag to exist, then drain the queue.
  useEffect(() => {
    if (!granted || !gaId) return;
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      markGtagReady();
      return;
    }
    const id = window.setInterval(() => {
      if (typeof window.gtag === "function") {
        markGtagReady();
        window.clearInterval(id);
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [granted, gaId]);

  return (
    <>
      {gaId && granted && <GoogleAnalytics gaId={gaId} />}

      {state === "unknown" && (
        <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4">
          <div
            role="dialog"
            aria-label={t("title")}
            className="mx-auto flex max-w-3xl flex-col gap-3 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <p className="text-sm text-gray-600">
              {t("message")}{" "}
              <Link
                href="/privacy"
                className="font-medium text-brand-600 underline-offset-2 hover:underline"
              >
                {t("learnMore")}
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => setConsent("denied")}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t("decline")}
              </button>
              <button
                type="button"
                onClick={() => setConsent("granted")}
                className="rounded-lg bg-cta-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
