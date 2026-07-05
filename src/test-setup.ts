import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom has no matchMedia; ThemeProvider (prefers-color-scheme) needs a stub.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

// Mock the db module for all tests
vi.mock("@/lib/db", () => ({
  db: new Proxy(
    {},
    {
      get() {
        return vi.fn();
      },
    },
  ),
  schema: {},
}));
