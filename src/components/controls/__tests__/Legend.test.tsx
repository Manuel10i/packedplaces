import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithIntl } from "@/test-utils";
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

  it("renders the gradient bar div", () => {
    const { container } = renderWithIntl(<Legend />);
    const gradientBar = container.querySelector(
      ".h-3.flex-1.rounded-full",
    );
    expect(gradientBar).toBeInTheDocument();
    expect(gradientBar).toHaveStyle({
      background:
        "linear-gradient(to right, #22c55e, #facc15, #f97316, #dc2626)",
    });
  });
});
