import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { YearSelector } from "../YearSelector";
import { useMapStore } from "@/store/useMapStore";

const currentYear = new Date().getFullYear();

describe("YearSelector", () => {
  beforeEach(() => {
    useMapStore.setState({
      selectedYear: currentYear,
    });
  });

  it("renders 3 year buttons (current year, +1, +2)", () => {
    render(<YearSelector />);
    expect(screen.getByText(String(currentYear))).toBeInTheDocument();
    expect(screen.getByText(String(currentYear + 1))).toBeInTheDocument();
    expect(screen.getByText(String(currentYear + 2))).toBeInTheDocument();
  });

  it("clicking a year button updates selectedYear in the store", () => {
    render(<YearSelector />);
    const nextYearButton = screen.getByText(String(currentYear + 1));
    fireEvent.click(nextYearButton);
    expect(useMapStore.getState().selectedYear).toBe(currentYear + 1);
  });

  it("current year button has the selected style (bg-blue-600)", () => {
    render(<YearSelector />);
    const currentYearButton = screen.getByText(String(currentYear));
    expect(currentYearButton.className).toContain("bg-blue-600");
  });

  it("non-selected year buttons do not have bg-blue-600", () => {
    render(<YearSelector />);
    const nextYearButton = screen.getByText(String(currentYear + 1));
    expect(nextYearButton.className).not.toContain("bg-blue-600");
  });
});
