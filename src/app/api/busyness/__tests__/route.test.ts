import { vi, describe, it, expect } from "vitest";

const mockRows = [
  { destinationId: "AT-VIENNA", week: 1, busynessScore: 0.42 },
  { destinationId: "AT-VIENNA", week: 30, busynessScore: 0.81 },
  { destinationId: "IT-ROME", week: 30, busynessScore: 0.9 },
  // Out-of-range week must be ignored, not crash.
  { destinationId: "AT-VIENNA", week: 53, busynessScore: 0.5 },
];

// Mock the db module before imports — returns actual rows so the mapping loop
// is exercised (same pattern as the heatmap route test).
vi.mock("@/lib/db", () => ({
  db: {
    select: () => ({
      from: () => ({
        where: () => Promise.resolve(mockRows),
      }),
    }),
  },
  schema: {
    heatmapCache: {
      destinationId: "destinationId",
      week: "week",
      year: "year",
      busynessScore: "busynessScore",
    },
  },
}));

import { GET } from "../route";
import { NextRequest } from "next/server";

function makeRequest(params: Record<string, string> = {}) {
  const url = new URL("http://localhost/api/busyness");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return new NextRequest(url);
}

describe("GET /api/busyness", () => {
  describe("validation", () => {
    it("returns 400 when no parameters are provided", async () => {
      const response = await GET(makeRequest());
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid ids or year parameter");
    });

    it("returns 400 when year is missing", async () => {
      const response = await GET(makeRequest({ ids: "AT-VIENNA" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when year is non-numeric", async () => {
      const response = await GET(makeRequest({ ids: "AT-VIENNA", year: "abc" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when ids is missing", async () => {
      const response = await GET(makeRequest({ year: "2026" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when ids is empty (only commas/whitespace)", async () => {
      const response = await GET(makeRequest({ ids: " , ,", year: "2026" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when more than 6 ids are given", async () => {
      const ids = ["A", "B", "C", "D", "E", "F", "G"].join(",");
      const response = await GET(makeRequest({ ids, year: "2026" }));
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("At most 6 ids allowed");
    });
  });

  describe("successful response", () => {
    it("returns series keyed per id with 52 entries and nulls where no rows", async () => {
      const response = await GET(
        makeRequest({ ids: "AT-VIENNA,IT-ROME,XX-NONE", year: "2026" }),
      );
      expect(response.status).toBe(200);

      const body = await response.json();
      expect(body.year).toBe(2026);
      expect(Object.keys(body.series).sort()).toEqual([
        "AT-VIENNA",
        "IT-ROME",
        "XX-NONE",
      ]);

      for (const id of ["AT-VIENNA", "IT-ROME", "XX-NONE"]) {
        expect(body.series[id]).toHaveLength(52);
      }

      // Scores placed at week-1 index.
      expect(body.series["AT-VIENNA"][0]).toBe(0.42);
      expect(body.series["AT-VIENNA"][29]).toBe(0.81);
      expect(body.series["IT-ROME"][29]).toBe(0.9);

      // Weeks without rows stay null.
      expect(body.series["AT-VIENNA"][1]).toBeNull();
      expect(body.series["IT-ROME"][0]).toBeNull();
      expect(body.series["XX-NONE"]).toEqual(new Array(52).fill(null));
    });

    it("sets a Cache-Control header", async () => {
      // Note: ids must cover every destination in mockRows — the route relies
      // on the SQL inArray filter and indexes rows straight into `series`.
      const response = await GET(makeRequest({ ids: "AT-VIENNA,IT-ROME", year: "2026" }));
      expect(response.status).toBe(200);
      expect(response.headers.get("Cache-Control")).toBe(
        "public, max-age=3600, stale-while-revalidate=86400",
      );
    });
  });
});
