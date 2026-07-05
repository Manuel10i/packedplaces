import { describe, it, expect, beforeEach, vi } from "vitest";

type Analytics = typeof import("@/lib/analytics");

// The analytics module keeps singleton state, so reload it fresh per test.
async function load(): Promise<Analytics> {
  vi.resetModules();
  return import("@/lib/analytics");
}

function setGtag() {
  const gtag = vi.fn();
  (window as unknown as { gtag: typeof gtag }).gtag = gtag;
  return gtag;
}

beforeEach(() => {
  window.localStorage.clear();
  (window as unknown as { gtag?: unknown }).gtag = undefined;
});

describe("consent-aware analytics", () => {
  it("does not send events before consent, then delivers them on accept", async () => {
    const gtag = setGtag();
    const a = await load();

    expect(a.getConsent()).toBe("unknown");
    a.trackEvent("language_switch", { locale: "de" });
    a.trackEvent("contact_form_submit");
    expect(gtag).not.toHaveBeenCalled(); // nothing sent yet

    a.setConsent("granted");
    // queued events are flushed in order
    expect(gtag).toHaveBeenCalledTimes(2);
    expect(gtag).toHaveBeenNthCalledWith(1, "event", "language_switch", { locale: "de" });
    expect(gtag).toHaveBeenNthCalledWith(2, "event", "contact_form_submit", undefined);

    // subsequent events fire live
    a.trackEvent("disclaimer_accepted");
    expect(gtag).toHaveBeenCalledTimes(3);
    expect(gtag).toHaveBeenLastCalledWith("event", "disclaimer_accepted", undefined);
  });

  it("never sends anything when consent is denied", async () => {
    const gtag = setGtag();
    const a = await load();

    a.trackEvent("language_switch", { locale: "en" });
    a.setConsent("denied");
    a.trackEvent("contact_form_submit");

    expect(gtag).not.toHaveBeenCalled();
    expect(a.getConsent()).toBe("denied");
  });

  it("holds events until gtag is ready, then flushes on markGtagReady", async () => {
    const a = await load(); // no gtag yet

    a.setConsent("granted");
    a.trackEvent("language_switch", { locale: "fr" });
    // gtag not present -> nothing delivered, still queued

    const gtag = setGtag();
    a.markGtagReady();
    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith("event", "language_switch", { locale: "fr" });
  });

  it("restores a previously granted choice and fires live", async () => {
    window.localStorage.setItem("pp_cookie_consent", "granted");
    const gtag = setGtag();
    const a = await load();

    expect(a.getConsent()).toBe("granted");
    a.trackEvent("disclaimer_accepted");
    expect(gtag).toHaveBeenCalledWith("event", "disclaimer_accepted", undefined);
  });

  it("persists the choice to localStorage", async () => {
    const a = await load();
    a.setConsent("granted");
    expect(window.localStorage.getItem("pp_cookie_consent")).toBe("granted");
  });

  it("notifies and can unsubscribe subscribers", async () => {
    const a = await load();
    const cb = vi.fn();
    const unsub = a.subscribeConsent(cb);
    a.setConsent("granted");
    expect(cb).toHaveBeenCalledTimes(1);
    unsub();
    a.setConsent("denied");
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it("toggles Google Analytics' opt-out flag when consent changes", async () => {
    const key = "ga-disable-G-TESTID";
    const a = await load();
    a.setGaId("G-TESTID");

    // Before any grant, GA is disabled.
    expect((window as unknown as Record<string, boolean>)[key]).toBe(true);

    a.setConsent("granted");
    expect((window as unknown as Record<string, boolean>)[key]).toBe(false);

    // Withdrawing consent re-disables an already-loaded GA.
    a.setConsent("denied");
    expect((window as unknown as Record<string, boolean>)[key]).toBe(true);
  });
});
