import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

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
