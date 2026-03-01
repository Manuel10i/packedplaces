import { describe, it, expect, beforeEach, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";

vi.mock("rc-slider", () => ({
  default: (props: { min?: number; max?: number; value?: number; onChange?: (v: number) => void }) => (
    <input
      type="range"
      data-testid="slider"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={(e) => props.onChange?.(Number(e.target.value))}
    />
  ),
}));
vi.mock("rc-slider/assets/index.css", () => ({}));

import { TimeSlider } from "../TimeSlider";
import { useMapStore } from "@/store/useMapStore";

describe("TimeSlider", () => {
  beforeEach(() => {
    useMapStore.setState({
      selectedWeek: 10,
      selectedYear: 2026,
      isPlaying: false,
    });
  });

  it("renders play button", () => {
    renderWithIntl(<TimeSlider />);
    const playButton = screen.getByTitle("Play");
    expect(playButton).toBeInTheDocument();
  });

  it("shows 'Week X' where X is the current week", () => {
    renderWithIntl(<TimeSlider />);
    expect(screen.getByText("Week 10")).toBeInTheDocument();
  });

  it("clicking play button toggles isPlaying in the store", () => {
    renderWithIntl(<TimeSlider />);
    expect(useMapStore.getState().isPlaying).toBe(false);

    const playButton = screen.getByTitle("Play");
    fireEvent.click(playButton);
    expect(useMapStore.getState().isPlaying).toBe(true);
  });

  it("shows pause button when isPlaying is true", () => {
    useMapStore.setState({ isPlaying: true });
    renderWithIntl(<TimeSlider />);
    const pauseButton = screen.getByTitle("Pause");
    expect(pauseButton).toBeInTheDocument();
  });
});
