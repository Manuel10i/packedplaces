"use client";

import { useEffect, useRef } from "react";
import { useMapStore } from "@/store/useMapStore";

export function useUrlSync() {
  const { selectedWeek, selectedYear, viewportCenter } = useMapStore();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialized = useRef(false);

  // On mount: read URL params and apply to store
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const params = new URLSearchParams(window.location.search);

    const week = parseInt(params.get("week") ?? "", 10);
    if (!isNaN(week) && week >= 1 && week <= 52) {
      useMapStore.getState().setSelectedWeek(week);
    }

    const year = parseInt(params.get("year") ?? "", 10);
    if (!isNaN(year) && year >= 2000 && year <= 2100) {
      useMapStore.getState().setSelectedYear(year);
    }

    const lat = parseFloat(params.get("lat") ?? "");
    const lng = parseFloat(params.get("lng") ?? "");
    const zoom = parseFloat(params.get("zoom") ?? "");
    if (!isNaN(lat) && !isNaN(lng) && !isNaN(zoom)) {
      useMapStore.getState().setViewportCenter({ lat, lng, zoom });
    }
  }, []);

  // On store change: write back to URL (debounced)
  useEffect(() => {
    if (!initialized.current) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("week", String(selectedWeek));
      params.set("year", String(selectedYear));

      if (viewportCenter) {
        params.set("lat", viewportCenter.lat.toFixed(1));
        params.set("lng", viewportCenter.lng.toFixed(1));
        params.set("zoom", viewportCenter.zoom.toFixed(1));
      }

      window.history.replaceState(null, "", `?${params.toString()}`);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [selectedWeek, selectedYear, viewportCenter]);
}
