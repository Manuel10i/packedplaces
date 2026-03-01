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

  it("skips URL update on first render", () => {
    renderHook(() => useUrlSync());

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Should not call replaceState on first render
    expect(replaceStateSpy).not.toHaveBeenCalled();
  });

  it("updates URL via replaceState after store values change", () => {
    const { rerender } = renderHook(() => useUrlSync());

    // Change store values
    act(() => {
      useMapStore.getState().setSelectedWeek(42);
      useMapStore.getState().setSelectedYear(2027);
    });

    // Re-render so the hook picks up new store values
    rerender();

    // Advance past the 300ms debounce
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(replaceStateSpy).toHaveBeenCalled();
    const lastCall = replaceStateSpy.mock.calls.at(-1);
    const url = lastCall?.[2] as string;
    expect(url).toContain("week=42");
    expect(url).toContain("year=2027");
  });

  it("includes viewport center in URL when set", () => {
    const { rerender } = renderHook(() => useUrlSync());

    act(() => {
      useMapStore.getState().setViewportCenter({ lat: 48.8, lng: 2.3, zoom: 12 });
    });

    rerender();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(replaceStateSpy).toHaveBeenCalled();
    const lastCall = replaceStateSpy.mock.calls.at(-1);
    const url = lastCall?.[2] as string;
    expect(url).toContain("lat=48.8");
    expect(url).toContain("lng=2.3");
    expect(url).toContain("zoom=12.0");
  });
});
