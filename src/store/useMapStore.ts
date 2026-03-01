import { create } from "zustand";
import { getISOWeek } from "date-fns";

export interface ViewportBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface ViewportCenter {
  lat: number;
  lng: number;
  zoom: number;
}

interface MapState {
  selectedWeek: number;
  selectedYear: number;
  isPlaying: boolean;
  hoveredDestination: string | null;
  viewportBounds: ViewportBounds | null;
  viewportCenter: ViewportCenter | null;
  setSelectedWeek: (week: number) => void;
  setSelectedYear: (year: number) => void;
  togglePlaying: () => void;
  setIsPlaying: (playing: boolean) => void;
  setHoveredDestination: (id: string | null) => void;
  advanceWeek: () => void;
  setViewportBounds: (bounds: ViewportBounds) => void;
  setViewportCenter: (center: ViewportCenter) => void;
}

function getInitialUrlParams(): {
  week?: number;
  year?: number;
  viewportCenter?: ViewportCenter;
} {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);

  const week = parseInt(params.get("week") ?? "", 10);
  const year = parseInt(params.get("year") ?? "", 10);
  const lat = parseFloat(params.get("lat") ?? "");
  const lng = parseFloat(params.get("lng") ?? "");
  const zoom = parseFloat(params.get("zoom") ?? "");

  return {
    week: !isNaN(week) && week >= 1 && week <= 52 ? week : undefined,
    year: !isNaN(year) && year >= 2000 && year <= 2100 ? year : undefined,
    viewportCenter:
      !isNaN(lat) && !isNaN(lng) && !isNaN(zoom)
        ? { lat, lng, zoom }
        : undefined,
  };
}

const urlParams = getInitialUrlParams();

export const useMapStore = create<MapState>((set, get) => ({
  selectedWeek: urlParams.week ?? getISOWeek(new Date()),
  selectedYear: urlParams.year ?? new Date().getFullYear(),
  isPlaying: false,
  hoveredDestination: null,
  viewportBounds: null,
  viewportCenter: urlParams.viewportCenter ?? null,
  setSelectedWeek: (week) => set({ selectedWeek: week }),
  setSelectedYear: (year) => set({ selectedYear: year }),
  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setHoveredDestination: (id) => set({ hoveredDestination: id }),
  advanceWeek: () => {
    const { selectedWeek, selectedYear } = get();
    if (selectedWeek >= 52) {
      set({ selectedWeek: 1, selectedYear: selectedYear + 1 });
    } else {
      set({ selectedWeek: selectedWeek + 1 });
    }
  },
  setViewportBounds: (bounds) => set({ viewportBounds: bounds }),
  setViewportCenter: (center) => set({ viewportCenter: center }),
}));
