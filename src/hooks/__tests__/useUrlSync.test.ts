import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { getISOWeek } from "date-fns";
import { useMapStore } from "@/store/useMapStore";
import { useUrlSync } from "../useUrlSync";

describe("useUrlSync", () => {
  const originalLocation = window.location;
  let replaceStateSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.useFakeTimers();

    // Reset the store to defaults
    useMapStore.setState({
      selectedWeek: getISOWeek(new Date()),
      selectedYear: new Date().getFullYear(),
      isPlaying: false,
      hoveredDestination: null,
      viewportBounds: null,
      viewportCenter: null,
    });

    // Mock window.location.search
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...originalLocation, search: "" },
    });

    // Spy on replaceState
    replaceStateSpy = vi
      .spyOn(window.history, "replaceState")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });
  });

  it("reads week and year from URL params on mount", () => {
    window.location.search = "?week=30&year=2026";

    renderHook(() => useUrlSync());

    const state = useMapStore.getState();
    expect(state.selectedWeek).toBe(30);
    expect(state.selectedYear).toBe(2026);
  });

  it("reads layers param from URL and restores layer visibility", () => {
    window.location.search = "?week=10&year=2026&layers=r";

    renderHook(() => useUrlSync());

    const state = useMapStore.getState();
    expect(state.showHeatmap).toBe(false);
    expect(state.showEvents).toBe(false);
    expect(state.showHolidayRegions).toBe(true);
  });

  it("updates URL via replaceState after store values change", () => {
    const { rerender } = renderHook(() => useUrlSync());

    // Change store values
    act(() => {
      useMapStore.getState().setSelectedWeek(42);
      useMapStore.getState().setSelectedYear(2027);
    });

    rerender();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(replaceStateSpy).toHaveBeenCalled();
    const lastCall = replaceStateSpy.mock.calls.at(-1);
    const url = lastCall?.[2] as string;
    expect(url).toContain("week=42");
    expect(url).toContain("year=2027");
  });
});
