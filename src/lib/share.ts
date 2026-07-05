"use client";

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

/**
 * Share via the native share sheet when available, falling back to copying
 * the URL. Returns "shared", "copied" or "failed" so callers can show a toast.
 */
export async function sharePlace(data: ShareData): Promise<"shared" | "copied" | "failed"> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(data);
      return "shared";
    } catch (err) {
      // AbortError = user dismissed the sheet; not a failure worth a fallback.
      if (err instanceof DOMException && err.name === "AbortError") return "failed";
    }
  }
  try {
    await navigator.clipboard.writeText(data.url);
    return "copied";
  } catch {
    return "failed";
  }
}
