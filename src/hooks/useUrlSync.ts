"use client";

import { useEffect, useRef } from "react";
import { useMapStore } from "@/store/useMapStore";

export function useUrlSync() {
  const { selectedWeek, selectedYear, viewportCenter, setSelectedWeek, setSelectedYear, setViewportCenter } = useMapStore();
  const initialized = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // On mount: read URL params and update store
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const params = new URLSearchParams(window.location.search);

    const week = parseInt(params.get("week") ?? "", 10);
    if (!isNaN(week) && week >= 1 && week <= 52) {
      setSelectedWeek(week);
    }

    const year = parseInt(params.get("year") ?? "", 10);
    if (!isNaN(year) && year >= 2000 && year <= 2100) {
      setSelectedYear(year);
    }

    const lat = parseFloat(params.get("lat") ?? "");
    const lng = parseFloat(params.get("lng") ?? "");
    const zoom = parseFloat(params.get("zoom") ?? "");
    if (!isNaN(lat) && !isNaN(lng) && !isNaN(zoom)) {
      setViewportCenter({ lat, lng, zoom });
    }
  }, [setSelectedWeek, setSelectedYear, setViewportCenter]);

  // On store change: update URL (debounced for map moves)
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
