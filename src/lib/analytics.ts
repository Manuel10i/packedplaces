/**
 * Consent-aware analytics.
 *
 * No analytics event is sent until the user grants consent. Events fired before
 * a decision are held in an in-memory queue (nothing leaves the browser) and
 * flushed once consent is granted; after that they fire live. If consent is
 * denied the queue is dropped and nothing is ever sent.
 */

export type ConsentState = "unknown" | "granted" | "denied";

const STORAGE_KEY = "pp_cookie_consent";

interface QueuedEvent {
  name: string;
  params?: Record<string, string | number>;
}

let consent: ConsentState = "unknown";
let initialized = false;
const queue: QueuedEvent[] = [];
const listeners = new Set<() => void>();

function notify() {
  for (const l of listeners) l();
}

function readStored(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : "unknown";
  } catch {
    return "unknown";
  }
}

/** Read the persisted choice once on the client. Safe to call repeatedly. */
function ensureInit() {
  if (!initialized && typeof window !== "undefined") {
    consent = readStored();
    initialized = true;
  }
}

export function getConsent(): ConsentState {
  ensureInit();
  return consent;
}

/** Subscribe to consent changes; returns an unsubscribe function. */
export function subscribeConsent(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function setConsent(next: "granted" | "denied") {
  consent = next;
  initialized = true;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors (private mode etc.) */
    }
  }
  if (next === "granted") {
    flush();
  } else {
    queue.length = 0;
  }
  notify();
}

function fireNow(e: QueuedEvent): boolean {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", e.name, e.params);
    return true;
  }
  return false;
}

/**
 * Deliver any queued events. Only runs once consent is granted AND the gtag
 * function exists; otherwise events stay queued until both are true.
 */
export function flush() {
  if (consent !== "granted") return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  while (queue.length) {
    fireNow(queue.shift()!);
  }
}

/** Called by the analytics loader once gtag is available, to drain the queue. */
export function markGtagReady() {
  flush();
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number>,
) {
  ensureInit();
  if (consent === "denied") return;
  if (consent === "granted" && fireNow({ name, params })) return;
  // Unknown consent, or granted but gtag not ready yet: hold for later delivery.
  queue.push({ name, params });
}

// Read the stored choice as soon as the module loads on the client, so a
// returning visitor's consent is known before any event or render.
if (typeof window !== "undefined") {
  ensureInit();
}
