import { describe, it, expect, beforeEach } from "vitest";
import { useSavedPlacesStore } from "@/store/useSavedPlacesStore";

const STORAGE_KEY = "pp_saved_places_v1";

describe("useSavedPlacesStore", () => {
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    useSavedPlacesStore.setState({ ids: [] });
  });

  it("toggle adds an id then removes it again", () => {
    const { toggle } = useSavedPlacesStore.getState();

    toggle("AT-VIENNA");
    expect(useSavedPlacesStore.getState().ids).toEqual(["AT-VIENNA"]);

    toggle("AT-VIENNA");
    expect(useSavedPlacesStore.getState().ids).toEqual([]);
  });

  it("keeps other saved ids when toggling one off", () => {
    const { toggle } = useSavedPlacesStore.getState();
    toggle("AT-VIENNA");
    toggle("IT-ROME");
    toggle("AT-VIENNA");
    expect(useSavedPlacesStore.getState().ids).toEqual(["IT-ROME"]);
  });

  it("isSaved reflects the current state", () => {
    const { toggle } = useSavedPlacesStore.getState();
    expect(useSavedPlacesStore.getState().isSaved("AT-VIENNA")).toBe(false);

    toggle("AT-VIENNA");
    expect(useSavedPlacesStore.getState().isSaved("AT-VIENNA")).toBe(true);
    expect(useSavedPlacesStore.getState().isSaved("IT-ROME")).toBe(false);

    toggle("AT-VIENNA");
    expect(useSavedPlacesStore.getState().isSaved("AT-VIENNA")).toBe(false);
  });

  it("persists saved ids to localStorage under pp_saved_places_v1", () => {
    useSavedPlacesStore.getState().toggle("AT-VIENNA");

    const raw = localStorage.getItem(STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.state.ids).toEqual(["AT-VIENNA"]);
    // Only ids are persisted (partialize), not hydrated/functions.
    expect(parsed.state).not.toHaveProperty("hydrated");
  });
});
