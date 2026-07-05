"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { YearSelector } from "@/components/controls/YearSelector";
import { LayerToggle } from "@/components/controls/LayerToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface MapHeaderProps {
  onTogglePanel: () => void;
  isPanelOpen: boolean;
}

export function MapHeader({ onTogglePanel, isPanelOpen }: MapHeaderProps) {
  const t = useTranslations("map");
  const tNav = useTranslations("nav");
  const tSwitcher = useTranslations("switcher");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex items-center gap-3 border-b border-line bg-surface px-3 py-2 sm:px-4">
      {/* Wordmark — always visible */}
      <Link href="/" aria-label={t("title")} className="font-display text-lg text-ink transition-colors hover:text-accent">
        Packed<span className="italic text-accent">Places</span>
        <span className="ml-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          .com
        </span>
      </Link>

      {/* Desktop: year selector */}
      <div className="hidden md:flex">
        <YearSelector />
      </div>

      <div className="flex-1" />

      {/* Desktop controls */}
      <div className="hidden items-center gap-1 md:flex">
        <LayerToggle variant="dropdown" />
        <LanguageSwitcher variant="header" />
        <ThemeToggle />
        <button
          onClick={onTogglePanel}
          className={`flex items-center gap-1 rounded-[3px] px-2 py-1.5 text-sm font-medium transition-colors ${
            isPanelOpen
              ? "bg-surface-sunken text-accent"
              : "text-ink-muted hover:bg-surface-sunken hover:text-ink"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          {t("holidays")}
        </button>
      </div>

      {/* Mobile: hamburger */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-[3px] text-ink-muted transition-colors hover:bg-surface-sunken md:hidden"
        aria-label={tNav("menu")}
      >
        {menuOpen ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-line bg-surface-raised p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            <LayerToggle variant="card" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {tSwitcher("label")}
              </span>
              <LanguageSwitcher variant="header" />
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                onTogglePanel();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-[3px] border border-line bg-surface-sunken px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {t("holidays")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
