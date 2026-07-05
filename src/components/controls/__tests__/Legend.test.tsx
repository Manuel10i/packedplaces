import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";
import { crowdCssGradient } from "@/lib/crowd-palette";
import { Legend } from "../Legend";

describe("Legend", () => {
  it("renders 'Crowdedness' title", () => {
    renderWithIntl(<Legend />);
    expect(screen.getByText("Crowdedness")).toBeInTheDocument();
  });

  it("renders 'Quiet' and 'Packed' labels", () => {
    renderWithIntl(<Legend />);
    expect(screen.getByText("Quiet")).toBeInTheDocument();
    expect(screen.getByText("Packed")).toBeInTheDocument();
  });

  it("renders the gradient bar with the crowd-palette ramp", () => {
    const { container } = renderWithIntl(<Legend />);
    const gradientBar = container.querySelector(".flex-1.rounded-full");
    expect(gradientBar).toBeInTheDocument();
    expect(gradientBar).toHaveStyle({ background: crowdCssGradient("light") });
  });
});
