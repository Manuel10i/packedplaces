import { vi, describe, it, expect } from "vitest";

const mockCacheEntries = [
  {
    destinationId: "AT-VIENNA",
    destinationName: "Vienna",
    lat: 48.21,
    lng: 16.37,
    busynessScore: 0.65,
    contributingSources: [{ regionId: "DE-BAVARIA", weight: 0.8 }],
  },
];

const mockHolidays = [
  {
    sourceRegionId: "DE-BAVARIA",
    name: "Summer Break",
    startDate: "2026-07-01",
    endDate: "2026-08-15",
    regionName: "Bavaria",
  },
];

const mockEvents = [
  {
    id: "oktoberfest-2026",
    name: "Oktoberfest",
    destinationId: "DE-MUNICH",
    startDate: "2026-09-19",
    endDate: "2026-10-04",
    category: "festival",
  },
];

// Mock the db module before imports — returns actual data so .map() callbacks are exercised
vi.mock("@/lib/db", () => ({
  db: {
    select: () => ({
      from: () => ({
        where: () => Promise.resolve(mockCacheEntries),
        innerJoin: () => ({
          where: () => Promise.resolve(mockHolidays),
        }),
      }),
    }),
  },
  schema: {
    heatmapCache: { year: "year", week: "week" },
    schoolHolidays: {
      sourceRegionId: "sourceRegionId",
      name: "name",
      startDate: "startDate",
      endDate: "endDate",
    },
    sourceRegions: { name: "name", id: "id" },
    majorEvents: {
      id: "id",
      name: "name",
      destinationId: "destinationId",
      startDate: "startDate",
      endDate: "endDate",
      category: "category",
    },
  },
}));

import { GET } from "../route";
import { NextRequest } from "next/server";

function makeRequest(params: Record<string, string> = {}) {
  const url = new URL("http://localhost/api/heatmap");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return new NextRequest(url);
}

describe("GET /api/heatmap", () => {
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
    it("returns a valid GeoJSON FeatureCollection with mapped data", async () => {
      const response = await GET(
        makeRequest({ week: "10", year: "2026" }),
      );
      expect(response.status).toBe(200);

      const body = await response.json();
      expect(body.type).toBe("FeatureCollection");
      expect(body).toHaveProperty("features");
      expect(Array.isArray(body.features)).toBe(true);
      expect(body.features).toHaveLength(1);
      expect(body.features[0].geometry.coordinates).toEqual([16.37, 48.21]);
      expect(body.features[0].properties.name).toBe("Vienna");
      expect(body.features[0].properties.busynessScore).toBe(0.65);

      expect(body).toHaveProperty("metadata");
      expect(body.metadata.week).toBe(10);
      expect(body.metadata.year).toBe(2026);
      expect(body.metadata.regionsOnHoliday).toHaveLength(1);
      expect(body.metadata.regionsOnHoliday[0].regionName).toBe("Bavaria");
      expect(body.metadata.regionsOnHoliday[0].holidayName).toBe("Summer Break");
      expect(Array.isArray(body.metadata.activeEvents)).toBe(true);
    });
  });
});
