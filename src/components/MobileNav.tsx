"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { IconButton } from "@/components/ui/IconButton";

interface NavEntry {
  href: string;
  label: string;
}

interface Props {
  entries: NavEntry[];
  menuLabel: string;
  /** Per-locale hrefs forwarded to the language switcher. */
  currentLocale?: string;
  hrefByLocale?: Record<string, string>;
}

/** Hamburger + dropdown for the marketing header on small screens. */
export function MobileNav({ entries, menuLabel, currentLocale, hrefByLocale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <IconButton aria-label={menuLabel} active={open} onClick={() => setOpen((v) => !v)}>
        {open ? (
          <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </IconButton>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-surface-raised shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {entries.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-sm text-ink-muted transition-colors last:border-b-0 hover:text-accent"
              >
                {entry.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-3">
              <LanguageSwitcher
                variant="nav"
                currentLocale={currentLocale}
                hrefByLocale={hrefByLocale}
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
