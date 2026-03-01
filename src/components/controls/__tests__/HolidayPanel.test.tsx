import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import type { HolidayInfo } from "@/types";

vi.mock("@/hooks/useHeatmapData", () => ({
  useHolidayData: vi.fn(),
}));

import { useHolidayData } from "@/hooks/useHeatmapData";
import { HolidayPanel } from "../HolidayPanel";
import { useMapStore } from "@/store/useMapStore";

const mockedUseHolidayData = vi.mocked(useHolidayData);

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

describe("HolidayPanel", () => {
  beforeEach(() => {
    useMapStore.setState({
      selectedWeek: 30,
      selectedYear: 2026,
      viewportBounds: null,
    });
  });

  it("shows 'No school holidays' when data is empty", () => {
    mockedUseHolidayData.mockReturnValue({
      data: [],
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);
    expect(
      screen.getByText("No school holidays this week"),
    ).toBeInTheDocument();
  });

  it("shows 'No school holidays' when data is undefined", () => {
    mockedUseHolidayData.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<HolidayPanel />);
    expect(
      screen.getByText("No school holidays this week"),
    ).toBeInTheDocument();
  });

  it("shows holidays when data is provided", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);
    expect(screen.getByText("School Holidays")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Middle East")).toBeInTheDocument();
  });

  it("regions are collapsed by default (holiday details not visible)", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();
    expect(screen.queryByText("Vienna")).not.toBeInTheDocument();
  });

  it("clicking a region header expands it to show holiday details", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);

    expect(screen.queryByText(/Baden-W/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Europe"));

    expect(screen.getByText(/Baden-W/)).toBeInTheDocument();
    expect(screen.getByText("Vienna")).toBeInTheDocument();
  });

  it("clicking a country header collapses its holidays", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);

    // Expand Europe region
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
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    // Set viewport to only show central Europe (not Middle East)
    useMapStore.setState({
      viewportBounds: { north: 60, south: 40, east: 20, west: -10 },
    });

    render(<HolidayPanel />);

    expect(screen.getByText("School Holidays")).toBeInTheDocument();
    // Middle East should be filtered out
    expect(screen.queryByText("Middle East")).not.toBeInTheDocument();
  });

  it("auto-expands when only 1 region is active (no hidden region toggle)", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    // Set viewport to only show Europe
    useMapStore.setState({
      viewportBounds: { north: 60, south: 40, east: 20, west: -10 },
    });

    render(<HolidayPanel />);

    // Region header should NOT be shown (only 1 region)
    expect(screen.queryByText("Europe")).not.toBeInTheDocument();
    // But country content should be auto-expanded (not collapsed)
    expect(screen.getByText(/Germany/)).toBeInTheDocument();
    expect(screen.getByText(/Austria/)).toBeInTheDocument();
  });

  it("shows formatted date ranges after expanding", () => {
    mockedUseHolidayData.mockReturnValue({
      data: mockHolidays,
      error: undefined,
      isLoading: false,
    });

    render(<HolidayPanel />);

    // Expand Europe
    fireEvent.click(screen.getByText("Europe"));

    // Date range should be formatted
    expect(screen.getByText(/Jul 30 - Sep 12/)).toBeInTheDocument();
  });
});
