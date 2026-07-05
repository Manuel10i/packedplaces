"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { ThemeMode } from "@/lib/crowd-palette";
import { THEME_STORAGE_KEY } from "./theme-script";

export type ThemePreference = "light" | "dark" | "system";

const THEME_COLOR: Record<ThemeMode, string> = {
  light: "#f6f1e7",
  dark: "#0f1922",
};

interface ThemeContextValue {
  theme: ThemePreference;
  resolvedTheme: ThemeMode;
  setTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/* ── Preference store (module-level external store; localStorage-backed) ── */

let preference: ThemePreference | null = null;
const listeners = new Set<() => void>();

function readStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // storage unavailable
  }
  return "system";
}

function getPreference(): ThemePreference {
  if (preference === null) preference = readStoredPreference();
  return preference;
}

function setPreference(next: ThemePreference) {
  preference = next;
  try {
    if (next === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  } catch {
    // storage unavailable — preference lives for this session only
  }
  listeners.forEach((l) => l());
}

function subscribePreference(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

/* ── OS preference ── */

function subscribeSystem(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribePreference, getPreference, () => "system" as const);
  const systemTheme = useSyncExternalStore(subscribeSystem, getSystemTheme, () => "light" as const);
  const resolvedTheme: ThemeMode = theme === "system" ? systemTheme : theme;

  // DOM side effects only — the inline theme-script already applied the right
  // class before first paint, this keeps it in sync afterwards.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", THEME_COLOR[resolvedTheme]));
  }, [resolvedTheme]);

  const setTheme = useCallback((next: ThemePreference) => {
    setPreference(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
