"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SavedPlacesState {
  ids: string[];
  hydrated: boolean;
  toggle: (id: string) => void;
  isSaved: (id: string) => boolean;
  setHydrated: () => void;
}

/**
 * Locally saved ("starred") destinations. Persisted to localStorage under
 * pp_saved_places_v1. `hydrated` stays false during SSR/first paint so UI can
 * avoid a saved/unsaved flash mismatch.
 */
export const useSavedPlacesStore = create<SavedPlacesState>()(
  persist(
    (set, get) => ({
      ids: [],
      hydrated: false,
      toggle: (id) =>
        set((state) => ({
          ids: state.ids.includes(id)
            ? state.ids.filter((x) => x !== id)
            : [...state.ids, id],
        })),
      isSaved: (id) => get().ids.includes(id),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "pp_saved_places_v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ ids: state.ids }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
