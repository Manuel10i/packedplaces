import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";
import { DestinationTooltip } from "../DestinationTooltip";

const defaultProps = {
  x: 100,
  y: 200,
  name: "Barcelona",
  score: 0.5,
  sources: [
    { regionName: "Baden-W\u00fcrttemberg", weight: 0.3 },
    { regionName: "Bavaria", weight: 0.25 },
  ],
};

describe("DestinationTooltip", () => {
  it("renders destination name", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} />);
    expect(screen.getByText("Barcelona")).toBeInTheDocument();
  });

  it("shows crowdedness percentage", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} />);
    // score 0.5 -> 50%
    expect(screen.getByText(/50%/)).toBeInTheDocument();
  });

  it("shows crowdedness label for score 0.5 (Busy)", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} />);
    expect(screen.getByText(/Busy/)).toBeInTheDocument();
  });

  it("shows 'Top sources' when sources are provided", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} />);
    expect(screen.getByText("Top sources:")).toBeInTheDocument();
  });

  it("shows source region names", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} />);
    expect(screen.getByText("Baden-W\u00fcrttemberg")).toBeInTheDocument();
    expect(screen.getByText("Bavaria")).toBeInTheDocument();
  });

  it("does not show 'Top sources' when sources array is empty", () => {
    renderWithIntl(
      <DestinationTooltip {...defaultProps} sources={[]} />,
    );
    expect(screen.queryByText("Top sources:")).not.toBeInTheDocument();
  });

  it("shows Quiet for score < 0.2", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} score={0.1} />);
    expect(screen.getByText(/Quiet/)).toBeInTheDocument();
  });

  it("shows Moderate for score 0.2-0.4", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} score={0.3} />);
    expect(screen.getByText(/Moderate/)).toBeInTheDocument();
  });

  it("shows Very Busy for score 0.6-0.8", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} score={0.7} />);
    expect(screen.getByText(/Very Busy/)).toBeInTheDocument();
  });

  it("shows Packed for score >= 0.8", () => {
    renderWithIntl(<DestinationTooltip {...defaultProps} score={0.9} />);
    expect(screen.getByText(/Packed/)).toBeInTheDocument();
  });
});
