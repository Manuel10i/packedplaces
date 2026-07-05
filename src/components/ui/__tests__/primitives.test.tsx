import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import { CrowdCurve } from "@/components/ui/CrowdCurve";
import { Sheet } from "@/components/ui/Sheet";

describe("Button", () => {
  it("renders an anchor when href is given", () => {
    render(<Button href="/destinations">Explore</Button>);
    const link = screen.getByRole("link", { name: "Explore" });
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/destinations");
  });

  it("renders a type=button element when no href is given", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant classes", () => {
    render(
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Linkish</Button>
      </>,
    );
    expect(screen.getByRole("button", { name: "Primary" })).toHaveClass("bg-accent");
    expect(screen.getByRole("button", { name: "Secondary" })).toHaveClass(
      "border-line",
      "bg-surface-raised",
    );
    expect(screen.getByRole("button", { name: "Ghost" })).toHaveClass("text-ink-muted");
    expect(screen.getByRole("button", { name: "Linkish" })).toHaveClass("underline", "p-0");
  });
});

describe("Switch", () => {
  it('has role="switch" and reflects checked via aria-checked', () => {
    const { rerender } = render(
      <Switch checked={false} onChange={() => {}} aria-label="Dark mode" />,
    );
    const el = screen.getByRole("switch", { name: "Dark mode" });
    expect(el).toHaveAttribute("aria-checked", "false");

    rerender(<Switch checked onChange={() => {}} aria-label="Dark mode" />);
    expect(screen.getByRole("switch", { name: "Dark mode" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("calls onChange with the toggled value on click", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Switch checked={false} onChange={onChange} aria-label="Dark mode" />,
    );
    fireEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);

    rerender(<Switch checked onChange={onChange} aria-label="Dark mode" />);
    fireEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenLastCalledWith(false);
  });
});

describe("CrowdCurve", () => {
  // 53 weekly values with a clear min (week 6) and max (week 31).
  const values = Array.from({ length: 53 }, (_, i) => {
    if (i === 5) return 0.05;
    if (i === 30) return 0.95;
    return 0.5;
  });

  it("renders an svg with role img and the given aria-label", () => {
    render(
      <CrowdCurve series={[{ id: "a", values }]} ariaLabel="Weekly crowd levels" />,
    );
    const svg = screen.getByRole("img", { name: "Weekly crowd levels" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
  });

  it("renders min/max marker circles when markMinMax is set", () => {
    const { container } = render(
      <CrowdCurve series={[{ id: "a", values }]} ariaLabel="curve" markMinMax />,
    );
    expect(container.querySelectorAll("circle")).toHaveLength(2);
  });

  it("renders no marker circles without markMinMax", () => {
    const { container } = render(
      <CrowdCurve series={[{ id: "a", values }]} ariaLabel="curve" />,
    );
    expect(container.querySelectorAll("circle")).toHaveLength(0);
  });

  it("renders a gradient def for a single series", () => {
    const { container } = render(
      <CrowdCurve series={[{ id: "a", values }]} ariaLabel="curve" />,
    );
    const gradient = container.querySelector("defs linearGradient");
    expect(gradient).toBeInTheDocument();
    expect(gradient!.querySelectorAll("stop").length).toBe(values.length);
  });

  it("renders flat categorical strokes (no gradient) for multiple series", () => {
    const { container } = render(
      <CrowdCurve
        series={[
          { id: "a", values },
          { id: "b", values: values.map((v) => v / 2) },
        ]}
        ariaLabel="compare"
      />,
    );
    expect(container.querySelector("defs linearGradient")).not.toBeInTheDocument();
    expect(container.querySelectorAll('path[fill="none"]')).toHaveLength(2);
  });
});

describe("Sheet", () => {
  it("renders nothing when closed", () => {
    render(
      <Sheet open={false} onClose={() => {}} title="Filters">
        body
      </Sheet>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders a dialog labelled by its title when open", () => {
    render(
      <Sheet open onClose={() => {}} title="Filters">
        <p>Sheet body</p>
      </Sheet>,
    );
    const dialog = screen.getByRole("dialog", { name: "Filters" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByText("Sheet body")).toBeInTheDocument();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <Sheet open onClose={onClose} title="Filters">
        body
      </Sheet>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("has a close button with the given closeLabel that calls onClose", () => {
    const onClose = vi.fn();
    render(
      <Sheet open onClose={onClose} title="Filters" closeLabel="Dismiss sheet">
        body
      </Sheet>,
    );
    const closeButton = screen.getByRole("button", { name: "Dismiss sheet" });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
