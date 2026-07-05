"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import {
  getConsent,
  setConsent,
  subscribeConsent,
  markGtagReady,
  setGaId,
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

  // Register the GA id so withdrawing consent later can disable an already-loaded GA.
  useEffect(() => {
    setGaId(gaId);
  }, [gaId]);

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
            className="mx-auto flex max-w-3xl flex-col gap-3 rounded-[4px] border border-line bg-surface-raised/95 p-4 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <p className="text-sm leading-relaxed text-ink-muted">
              {t("message")}{" "}
              <Link
                href="/privacy"
                className="font-medium text-accent-2 underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
              >
                {t("learnMore")}
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <Button variant="secondary" size="sm" onClick={() => setConsent("denied")}>
                {t("decline")}
              </Button>
              <Button size="sm" onClick={() => setConsent("granted")}>
                {t("accept")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
