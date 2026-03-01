import { describe, it, expect } from "vitest";
import { GET } from "../route";

describe("GET /api/destinations", () => {
  it("returns a GeoJSON FeatureCollection", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.type).toBe("FeatureCollection");
    expect(body).toHaveProperty("features");
    expect(Array.isArray(body.features)).toBe(true);
  });

  it("returns all destinations (more than 200)", async () => {
    const response = await GET();
    const body = await response.json();
    expect(body.features.length).toBeGreaterThan(200);
  });

  it("each feature has geometry with coordinates and properties with destinationId and name", async () => {
    const response = await GET();
    const body = await response.json();

    for (const feature of body.features) {
      expect(feature.type).toBe("Feature");

      // Geometry
      expect(feature.geometry).toBeDefined();
      expect(feature.geometry.type).toBe("Point");
      expect(Array.isArray(feature.geometry.coordinates)).toBe(true);
      expect(feature.geometry.coordinates).toHaveLength(2);
      expect(typeof feature.geometry.coordinates[0]).toBe("number");
      expect(typeof feature.geometry.coordinates[1]).toBe("number");

      // Properties
      expect(feature.properties).toBeDefined();
      expect(typeof feature.properties.destinationId).toBe("string");
      expect(typeof feature.properties.name).toBe("string");
      expect(feature.properties.destinationId.length).toBeGreaterThan(0);
      expect(feature.properties.name.length).toBeGreaterThan(0);
    }
  });

  it("has Cache-Control header set to long cache", async () => {
    const response = await GET();
    const cacheControl = response.headers.get("Cache-Control");
    expect(cacheControl).toBeDefined();
    expect(cacheControl).toContain("public");
    expect(cacheControl).toContain("max-age=604800");
    expect(cacheControl).toContain("immutable");
  });
});
