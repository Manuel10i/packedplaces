"use client";

import { useSyncExternalStore } from "react";
import type { ThemeMode } from "@/lib/crowd-palette";

function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): ThemeMode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): ThemeMode {
  return "light";
}

/**
 * The currently applied theme ("light" | "dark"), derived from the `.dark`
 * class on <html>. Works standalone — it observes the DOM rather than the
 * ThemeProvider, so map layers and charts can use it anywhere.
 */
export function useResolvedTheme(): ThemeMode {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
