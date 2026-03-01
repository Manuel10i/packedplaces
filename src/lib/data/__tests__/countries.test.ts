import { describe, it, expect } from "vitest";
import {
  countries,
  getCountryName,
  getCountryFlag,
  getCountriesByRegion,
} from "@/lib/data/countries";
import type { WorldRegion } from "@/types";

describe("getCountryName", () => {
  it("returns correct name for known code 'DE'", () => {
    expect(getCountryName("DE")).toBe("Germany");
  });

  it("returns correct name for known code 'JP'", () => {
    expect(getCountryName("JP")).toBe("Japan");
  });

  it("returns correct name for known code 'BR'", () => {
    expect(getCountryName("BR")).toBe("Brazil");
  });

  it("returns the code itself for unknown code", () => {
    expect(getCountryName("XX")).toBe("XX");
  });

  it("returns the code itself for empty string", () => {
    expect(getCountryName("")).toBe("");
  });
});

describe("getCountryFlag", () => {
  it("returns flag emoji for known code 'DE'", () => {
    const flag = getCountryFlag("DE");
    expect(flag).toBeTruthy();
    expect(flag.length).toBeGreaterThan(0);
  });

  it("returns flag emoji for known code 'US'", () => {
    const flag = getCountryFlag("US");
    expect(flag).toBeTruthy();
    expect(flag.length).toBeGreaterThan(0);
  });

  it("returns empty string for unknown code", () => {
    expect(getCountryFlag("XX")).toBe("");
  });

  it("returns empty string for empty string code", () => {
    expect(getCountryFlag("")).toBe("");
  });
});

describe("getCountriesByRegion", () => {
  it("returns countries for 'europe'", () => {
    const european = getCountriesByRegion("europe");
    expect(european.length).toBeGreaterThan(0);
    expect(european.every((c) => c.region === "europe")).toBe(true);
    // Germany should be in Europe
    expect(european.some((c) => c.code === "DE")).toBe(true);
  });

  it("returns countries for 'asia'", () => {
    const asian = getCountriesByRegion("asia");
    expect(asian.length).toBeGreaterThan(0);
    expect(asian.every((c) => c.region === "asia")).toBe(true);
    expect(asian.some((c) => c.code === "JP")).toBe(true);
  });

  it("returns countries for 'americas'", () => {
    const american = getCountriesByRegion("americas");
    expect(american.length).toBeGreaterThan(0);
    expect(american.every((c) => c.region === "americas")).toBe(true);
    expect(american.some((c) => c.code === "US")).toBe(true);
  });

  it("returns countries for 'africa'", () => {
    const african = getCountriesByRegion("africa");
    expect(african.length).toBeGreaterThan(0);
    expect(african.every((c) => c.region === "africa")).toBe(true);
    expect(african.some((c) => c.code === "ZA")).toBe(true);
  });

  it("returns countries for 'oceania'", () => {
    const oceanian = getCountriesByRegion("oceania");
    expect(oceanian.length).toBeGreaterThan(0);
    expect(oceanian.every((c) => c.region === "oceania")).toBe(true);
    expect(oceanian.some((c) => c.code === "AU")).toBe(true);
  });

  it("returns countries for 'middle-east'", () => {
    const middleEast = getCountriesByRegion("middle-east");
    expect(middleEast.length).toBeGreaterThan(0);
    expect(middleEast.every((c) => c.region === "middle-east")).toBe(true);
    expect(middleEast.some((c) => c.code === "AE")).toBe(true);
  });
});

describe("countries data integrity", () => {
  it("all countries have required fields", () => {
    for (const country of countries) {
      expect(country.code).toBeTruthy();
      expect(typeof country.code).toBe("string");
      expect(country.name).toBeTruthy();
      expect(typeof country.name).toBe("string");
      expect(country.flag).toBeTruthy();
      expect(typeof country.flag).toBe("string");
      expect(country.region).toBeTruthy();
      expect(typeof country.region).toBe("string");
    }
  });

  it("all country codes are unique", () => {
    const codes = countries.map((c) => c.code);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(codes.length);
  });

  it("all regions are valid WorldRegion values", () => {
    const validRegions: WorldRegion[] = [
      "europe",
      "asia",
      "americas",
      "oceania",
      "africa",
      "middle-east",
    ];
    for (const country of countries) {
      expect(validRegions).toContain(country.region);
    }
  });
});
