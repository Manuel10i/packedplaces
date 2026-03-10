"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { YearSelector } from "@/components/controls/YearSelector";
import { LayerToggle } from "@/components/controls/LayerToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface MapHeaderProps {
  onTogglePanel: () => void;
  isPanelOpen: boolean;
}

export function MapHeader({ onTogglePanel, isPanelOpen }: MapHeaderProps) {
  const t = useTranslations("map");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-2">
      {/* Logo — always visible */}
      <Link
        href="/"
        className="text-lg font-bold text-gray-800 transition-colors hover:text-gray-600"
      >
        {t("title")}
      </Link>

      {/* Desktop: year selector */}
      <div className="hidden md:flex">
        <YearSelector className="flex gap-1 rounded-lg bg-gray-100 p-1" />
      </div>

      <div className="flex-1" />

      {/* Desktop controls */}
      <div className="hidden items-center gap-1 md:flex">
        <LayerToggle variant="dropdown" />
        <LanguageSwitcher variant="header" />
        <button
          onClick={onTogglePanel}
          className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium transition-colors ${
            isPanelOpen
              ? "bg-blue-50 text-blue-700"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
        className="flex items-center justify-center rounded-md p-1.5 text-gray-600 hover:bg-gray-100 md:hidden"
        aria-label="Menu"
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
        <div className="absolute left-0 right-0 top-full z-50 border-b border-gray-200 bg-white p-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            <LayerToggle variant="card" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Language</span>
              <LanguageSwitcher variant="header" />
            </div>
            <button
              onClick={() => {
                onTogglePanel();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
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
