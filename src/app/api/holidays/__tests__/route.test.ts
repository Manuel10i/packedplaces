import { vi, describe, it, expect } from "vitest";

// Mock the db module before imports
vi.mock("@/lib/db", () => ({
  db: {
    select: () => ({
      from: () => ({
        where: () => Promise.resolve([]),
        innerJoin: () => ({
          where: () => Promise.resolve([]),
        }),
      }),
    }),
  },
  schema: {
    schoolHolidays: {
      sourceRegionId: "sourceRegionId",
      name: "name",
      startDate: "startDate",
      endDate: "endDate",
    },
    sourceRegions: { name: "name", id: "id", countryCode: "countryCode" },
  },
}));

import { GET } from "../route";
import { NextRequest } from "next/server";

function makeRequest(params: Record<string, string> = {}) {
  const url = new URL("http://localhost/api/holidays");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return new NextRequest(url);
}

describe("GET /api/holidays", () => {
  describe("validation", () => {
    it("returns 400 when no parameters are provided", async () => {
      const response = await GET(makeRequest());
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid week or year parameter");
    });

    it("returns 400 when week is missing", async () => {
      const response = await GET(makeRequest({ year: "2026" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when year is missing", async () => {
      const response = await GET(makeRequest({ week: "10" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when week is 0", async () => {
      const response = await GET(makeRequest({ week: "0", year: "2026" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when week is 54", async () => {
      const response = await GET(makeRequest({ week: "54", year: "2026" }));
      expect(response.status).toBe(400);
    });

    it("returns 400 when week is non-numeric", async () => {
      const response = await GET(makeRequest({ week: "abc", year: "2026" }));
      expect(response.status).toBe(400);
    });
  });

  describe("successful response", () => {
    it("returns a valid array for valid parameters", async () => {
      const response = await GET(
        makeRequest({ week: "10", year: "2026" }),
      );
      expect(response.status).toBe(200);

      const body = await response.json();
      expect(Array.isArray(body)).toBe(true);
    });

    it("returns an empty array when DB returns nothing", async () => {
      const response = await GET(
        makeRequest({ week: "1", year: "2026" }),
      );
      expect(response.status).toBe(200);

      const body = await response.json();
      expect(body).toEqual([]);
    });
  });
});
