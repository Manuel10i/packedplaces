import { vi, describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/components/theme/ThemeProvider";

const STORAGE_KEY = "pp_theme";

function Consumer() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button onClick={() => setTheme("dark")}>go dark</button>
      <button onClick={() => setTheme("light")}>go light</button>
      <button onClick={() => setTheme("system")}>go system</button>
    </div>
  );
}

function renderThemed() {
  return render(
    <ThemeProvider>
      <Consumer />
    </ThemeProvider>,
  );
}

// The module keeps a module-level preference cache, so every test drives
// setTheme explicitly to a known state instead of relying on initial reads.
describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    document.documentElement.classList.remove("dark");
  });

  it("renders its children", () => {
    renderThemed();
    expect(screen.getByTestId("theme")).toBeInTheDocument();
    expect(screen.getByText("go dark")).toBeInTheDocument();
  });

  it('setTheme("dark") adds .dark to <html> and stores pp_theme="dark"', () => {
    renderThemed();
    fireEvent.click(screen.getByText("go dark"));

    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.style.colorScheme).toBe("dark");
    expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");
  });

  it('setTheme("light") removes .dark and stores pp_theme="light"', () => {
    renderThemed();
    fireEvent.click(screen.getByText("go dark"));
    fireEvent.click(screen.getByText("go light"));

    expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem(STORAGE_KEY)).toBe("light");
  });

  it('setTheme("system") removes the stored key and follows the OS theme', () => {
    renderThemed();
    fireEvent.click(screen.getByText("go dark"));
    expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");

    fireEvent.click(screen.getByText("go system"));
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    expect(screen.getByTestId("theme")).toHaveTextContent("system");
    // The stubbed matchMedia reports matches: false -> light.
    expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("useTheme throws outside a ThemeProvider", () => {
    // Silence React's error boundary logging for the intentional throw.
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow(
      "useTheme must be used within ThemeProvider",
    );
    spy.mockRestore();
  });
});
