import { describe, it, expect, beforeEach, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";
import type { HolidayInfo } from "@/types";

vi.mock("@/hooks/useHeatmapData", () => ({
  useHolidayData: vi.fn(),
  useHeatmapData: vi.fn(),
}));

import { useHolidayData, useHeatmapData } from "@/hooks/useHeatmapData";
import { HolidayPanel } from "../HolidayPanel";
import { useMapStore } from "@/store/useMapStore";

const mockedUseHolidayData = vi.mocked(useHolidayData);
const mockedUseHeatmapData = vi.mocked(useHeatmapData);

const mockHolidays: HolidayInfo[] = [
  {
    regionId: "de-bw",
    regionName: "Baden-W\u00fcrttemberg",
    countryCode: "DE",
    holidayName: "Summer Break",
    startDate: "2026-07-30",
    endDate: "2026-09-12",
  },
  {
    regionId: "at-w",
    regionName: "Vienna",
    countryCode: "AT",
    holidayName: "Summer Break",
    startDate: "2026-07-04",
    endDate: "2026-09-06",
  },
  {
    regionId: "tr-ist",
    regionName: "Istanbul",
    countryCode: "TR",
    holidayName: "Summer Break",
    startDate: "2026-06-15",
    endDate: "2026-09-15",
  },
];

function setupMocks(holidays: HolidayInfo[] | undefined = mockHolidays) {
  mockedUseHolidayData.mockReturnValue({
    data: holidays,
    error: undefined,
    isLoading: holidays === undefined,
  });
  mockedUseHeatmapData.mockReturnValue({
    data: undefined,
    error: undefined,
    isLoading: false,
  } as ReturnType<typeof useHeatmapData>);
}

describe("HolidayPanel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useMapStore.setState({
      selectedWeek: 30,
      selectedYear: 2026,
      viewportBounds: null,
    });
  });

  it("shows 'No school holidays' when holidays section is expanded and data is empty", () => {
    setupMocks([]);
    renderWithIntl(<HolidayPanel />);

    // Expand holidays section
    fireEvent.click(screen.getByText("School Holidays"));
    expect(
      screen.getByText("No school holidays this week"),
    ).toBeInTheDocument();
  });

  it("holidays section is collapsed by default showing badge count", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    expect(screen.getByText("School Holidays")).toBeInTheDocument();
    // Badge shows holiday count
    expect(screen.getByText("3")).toBeInTheDocument();
    // Region headers and details should not be visible
    expect(screen.queryByText("Europe")).not.toBeInTheDocument();
    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();
  });

  it("expanding holidays section shows region headers", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    fireEvent.click(screen.getByText("School Holidays"));

    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Middle East")).toBeInTheDocument();
  });

  it("regions are collapsed by default (holiday details not visible)", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    fireEvent.click(screen.getByText("School Holidays"));

    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();
    expect(screen.queryByText("Vienna")).not.toBeInTheDocument();
  });

  it("clicking a region header expands it to show holiday details", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    fireEvent.click(screen.getByText("School Holidays"));
    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Europe"));

    expect(screen.getByText(/Baden-W/)).toBeInTheDocument();
    expect(screen.getByText("Vienna")).toBeInTheDocument();
  });

  it("clicking a country header collapses its holidays", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    fireEvent.click(screen.getByText("School Holidays"));
    fireEvent.click(screen.getByText("Europe"));
    expect(screen.getByText(/Baden-W/)).toBeInTheDocument();

    // Click Germany country header to collapse
    fireEvent.click(screen.getByText(/Germany/));

    // Holiday detail should be hidden, count badge should appear
    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();
    const badges = screen.getAllByText("1");
    expect(badges.length).toBeGreaterThanOrEqual(1);
  });

  it("filters regions by viewport bounds", () => {
    setupMocks();
    useMapStore.setState({
      viewportBounds: { north: 60, south: 40, east: 20, west: -10 },
    });

    renderWithIntl(<HolidayPanel />);
    fireEvent.click(screen.getByText("School Holidays"));

    // Middle East should be filtered out
    expect(screen.queryByText("Middle East")).not.toBeInTheDocument();
  });

  it("auto-expands when only 1 region is active (no hidden region toggle)", () => {
    setupMocks();
    useMapStore.setState({
      viewportBounds: { north: 60, south: 40, east: 20, west: -10 },
    });

    renderWithIntl(<HolidayPanel />);
    fireEvent.click(screen.getByText("School Holidays"));

    // Region header should NOT be shown (only 1 region)
    expect(screen.queryByText("Europe")).not.toBeInTheDocument();
    // But country content should be auto-expanded (not collapsed)
    expect(screen.getByText(/Germany/)).toBeInTheDocument();
    expect(screen.getByText(/Austria/)).toBeInTheDocument();
  });

  it("shows formatted date ranges after expanding", () => {
    setupMocks();
    renderWithIntl(<HolidayPanel />);

    fireEvent.click(screen.getByText("School Holidays"));
    fireEvent.click(screen.getByText("Europe"));

    expect(screen.getByText(/Jul 30/)).toBeInTheDocument();
  });
});
