"use client";

import { useTranslations } from "next-intl";
import { useTheme, type ThemePreference } from "./ThemeProvider";
import { IconButton } from "@/components/ui/IconButton";

const ORDER: ThemePreference[] = ["light", "dark", "system"];

function SunIcon() {
  return (
    <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v2m0 14v2M4.6 4.6l1.4 1.4m12 12 1.4 1.4M3 12h2m14 0h2M4.6 19.4 6 18m12-12 1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Cycles light → dark → system. Shows the active preference's icon. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme");

  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];

  return (
    <IconButton
      aria-label={`${t("label")}: ${t(theme)}`}
      title={`${t("label")}: ${t(theme)} → ${t(next)}`}
      onClick={() => setTheme(next)}
      className={className}
    >
      {theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <SystemIcon />}
    </IconButton>
  );
}
