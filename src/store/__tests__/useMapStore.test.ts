import { describe, it, expect, beforeEach } from "vitest";
import { getISOWeek } from "date-fns";
import { useMapStore } from "../useMapStore";

describe("useMapStore", () => {
  beforeEach(() => {
    useMapStore.setState({
      selectedWeek: getISOWeek(new Date()),
      selectedYear: new Date().getFullYear(),
      isPlaying: false,
      hoveredDestination: null,
      viewportBounds: null,
      viewportCenter: null,
    });
  });

  it("has correct initial values", () => {
    const state = useMapStore.getState();
    expect(state.selectedWeek).toBe(getISOWeek(new Date()));
    expect(state.selectedYear).toBe(new Date().getFullYear());
    expect(state.isPlaying).toBe(false);
    expect(state.hoveredDestination).toBeNull();
    expect(state.viewportBounds).toBeNull();
    expect(state.viewportCenter).toBeNull();
  });

  it("setSelectedWeek updates week", () => {
    useMapStore.getState().setSelectedWeek(25);
    expect(useMapStore.getState().selectedWeek).toBe(25);
  });

  it("setSelectedYear updates year", () => {
    useMapStore.getState().setSelectedYear(2030);
    expect(useMapStore.getState().selectedYear).toBe(2030);
  });

  it("togglePlaying flips isPlaying", () => {
    expect(useMapStore.getState().isPlaying).toBe(false);
    useMapStore.getState().togglePlaying();
    expect(useMapStore.getState().isPlaying).toBe(true);
    useMapStore.getState().togglePlaying();
    expect(useMapStore.getState().isPlaying).toBe(false);
  });

  it("setIsPlaying sets isPlaying directly", () => {
    useMapStore.getState().setIsPlaying(true);
    expect(useMapStore.getState().isPlaying).toBe(true);
    useMapStore.getState().setIsPlaying(false);
    expect(useMapStore.getState().isPlaying).toBe(false);
  });

  it("setHoveredDestination sets destination", () => {
    useMapStore.getState().setHoveredDestination("paris");
    expect(useMapStore.getState().hoveredDestination).toBe("paris");
    useMapStore.getState().setHoveredDestination(null);
    expect(useMapStore.getState().hoveredDestination).toBeNull();
  });

  it("advanceWeek increments week normally", () => {
    useMapStore.setState({ selectedWeek: 10 });
    useMapStore.getState().advanceWeek();
    expect(useMapStore.getState().selectedWeek).toBe(11);
  });

  it("advanceWeek rolls over from 52 to 1 and increments year", () => {
    useMapStore.setState({ selectedWeek: 52, selectedYear: 2026 });
    useMapStore.getState().advanceWeek();
    expect(useMapStore.getState().selectedWeek).toBe(1);
    expect(useMapStore.getState().selectedYear).toBe(2027);
  });

  it("setViewportBounds updates bounds", () => {
    const bounds = { north: 50, south: 40, east: 10, west: -5 };
    useMapStore.getState().setViewportBounds(bounds);
    expect(useMapStore.getState().viewportBounds).toEqual(bounds);
  });

  it("setViewportCenter updates center", () => {
    const center = { lat: 48.8, lng: 2.3, zoom: 12 };
    useMapStore.getState().setViewportCenter(center);
    expect(useMapStore.getState().viewportCenter).toEqual(center);
  });
});
