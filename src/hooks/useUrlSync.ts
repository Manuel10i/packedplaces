"use client";

import { useEffect, useRef } from "react";
import { useMapStore } from "@/store/useMapStore";

export function useUrlSync() {
  const { selectedWeek, selectedYear, viewportCenter } = useMapStore();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  // On store change: update URL (debounced for map moves)
  useEffect(() => {
    // Skip the first render — URL already has the correct params
    // (store was initialized from them)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

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
