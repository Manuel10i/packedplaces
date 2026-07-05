"use client";

import { useState } from "react";
import { useSavedPlacesStore } from "@/store/useSavedPlacesStore";
import { sharePlace, type ShareData } from "@/lib/share";
import { Button } from "@/components/ui/Button";

interface Props {
  destinationId: string;
  /** Localized labels passed from the server so forced-locale pages stay consistent. */
  saveLabel: string;
  savedLabel: string;
  shareLabel: string;
  copiedLabel: string;
  share: ShareData;
}

/** Save star + share button for a destination page. */
export function DestinationActions({
  destinationId,
  saveLabel,
  savedLabel,
  shareLabel,
  copiedLabel,
  share,
}: Props) {
  const { ids, toggle, hydrated } = useSavedPlacesStore();
  const saved = hydrated && ids.includes(destinationId);
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const result = await sharePlace(share);
    if (result === "copied") {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="secondary" size="sm" onClick={() => toggle(destinationId)}>
        <svg
          aria-hidden
          className={`h-4 w-4 ${saved ? "text-accent" : ""}`}
          viewBox="0 0 24 24"
          fill={saved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3.6 13.9 8.5l5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.6 9.3l5.4-.8Z" />
        </svg>
        {saved ? savedLabel : saveLabel}
      </Button>
      <Button variant="secondary" size="sm" onClick={handleShare}>
        <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="17.5" cy="5.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
          <path d="m8.3 10.8 7-4m-7 6.4 7 4" />
        </svg>
        {shareLabel}
      </Button>
      {copied && (
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
          {copiedLabel}
        </span>
      )}
    </div>
  );
}
