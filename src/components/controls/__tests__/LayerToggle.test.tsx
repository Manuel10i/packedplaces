import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";
import { useMapStore } from "@/store/useMapStore";
import { LayerToggle } from "../LayerToggle";

describe("LayerToggle", () => {
  beforeEach(() => {
    useMapStore.setState({
      showHeatmap: true,
      showEvents: true,
      showHolidayRegions: false,
    });
  });

  it("renders the title and three checkboxes", () => {
    renderWithIntl(<LayerToggle />);
    expect(screen.getByText("Layers")).toBeInTheDocument();
    expect(screen.getByLabelText("Heatmap")).toBeInTheDocument();
    expect(screen.getByLabelText("Events")).toBeInTheDocument();
    expect(screen.getByLabelText("Holiday Regions")).toBeInTheDocument();
  });

  it("reflects store state in checkbox checked values", () => {
    renderWithIntl(<LayerToggle />);
    expect(screen.getByLabelText("Heatmap")).toBeChecked();
    expect(screen.getByLabelText("Events")).toBeChecked();
    expect(screen.getByLabelText("Holiday Regions")).not.toBeChecked();
  });

  it("toggles showHeatmap when heatmap checkbox is clicked", () => {
    renderWithIntl(<LayerToggle />);
    fireEvent.click(screen.getByLabelText("Heatmap"));
    expect(useMapStore.getState().showHeatmap).toBe(false);
  });

  it("toggles showEvents when events checkbox is clicked", () => {
    renderWithIntl(<LayerToggle />);
    fireEvent.click(screen.getByLabelText("Events"));
    expect(useMapStore.getState().showEvents).toBe(false);
  });

  it("toggles showHolidayRegions when holiday regions checkbox is clicked", () => {
    renderWithIntl(<LayerToggle />);
    fireEvent.click(screen.getByLabelText("Holiday Regions"));
    expect(useMapStore.getState().showHolidayRegions).toBe(true);
  });
});
