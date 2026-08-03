"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Copy-to-clipboard block for the destination crowd-widget embed code. The
 * snippet is built on the server (with the destination's slug, name and
 * locale) and passed in, so this stays a thin client island whose only job is
 * the clipboard interaction.
 */
export function EmbedSnippet({ snippet }: { snippet: string }) {
  const t = useTranslations("embed");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (permissions/insecure context): the code stays
      // visible and selectable, so the user can still copy it by hand.
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-line bg-surface-sunken p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          {t("snippetLabel")}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-[3px] border border-line bg-surface-raised px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-line-strong"
        >
          {copied ? t("copied") : t("copy")}
        </button>
      </div>
      <pre className="mt-3 overflow-x-auto text-xs leading-relaxed text-ink-muted">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}
