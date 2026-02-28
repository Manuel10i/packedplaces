import { create } from "zustand";
import { getISOWeek } from "date-fns";

interface MapState {
  selectedWeek: number;
  selectedYear: number;
  isPlaying: boolean;
  hoveredDestination: string | null;
  setSelectedWeek: (week: number) => void;
  setSelectedYear: (year: number) => void;
  togglePlaying: () => void;
  setIsPlaying: (playing: boolean) => void;
  setHoveredDestination: (id: string | null) => void;
  advanceWeek: () => void;
}

export const useMapStore = create<MapState>((set, get) => ({
  selectedWeek: getISOWeek(new Date()),
  selectedYear: new Date().getFullYear(),
  isPlaying: false,
  hoveredDestination: null,
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
}));
