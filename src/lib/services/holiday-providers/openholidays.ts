import type { HolidayProvider, HolidayResult } from "./types";

interface OpenHolidayApiResponse {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: { language: string; text: string }[];
  subdivisions?: { code: string; shortName: string }[];
}

// Netherlands holiday regions mapping
const NL_NORTH_PROVINCES = ["GR", "FR", "DR", "OV", "FL", "NH"];
const NL_CENTRAL_PROVINCES = ["UT", "ZH", "GE"];
const NL_SOUTH_PROVINCES = ["ZE", "NB", "LI"];

function classifyDutchSubdivision(code: string): "NL-NORTH" | "NL-CENTRAL" | "NL-SOUTH" | null {
  const parts = code.replace("NL-", "").split("-");
  const province = parts[0];
  if (NL_NORTH_PROVINCES.includes(province)) return "NL-NORTH";
  if (NL_CENTRAL_PROVINCES.includes(province)) return "NL-CENTRAL";
  if (NL_SOUTH_PROVINCES.includes(province)) return "NL-SOUTH";
  return null;
}

// OpenHolidaysAPI supports these countries (33 European countries)
const SUPPORTED_COUNTRIES = new Set([
  "AL", "AD", "AT", "BE", "BG", "CH", "CZ", "DE", "DK", "EE",
  "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT",
  "LI", "LT", "LU", "LV", "MC", "ME", "MK", "MT", "NL", "NO",
  "PL", "PT", "RO", "RS", "SE", "SI", "SK", "SM", "VA",
]);

const COUNTRY_LEVEL_REGIONS = new Set(["BE", "CZ", "PL", "LU", "IE", "IS", "DK"]);
const NL_REGIONS = new Set(["NL-NORTH", "NL-CENTRAL", "NL-SOUTH"]);
const FR_ZONES = new Set(["FR-ZA", "FR-ZB", "FR-ZC"]);
// Macro-regions that map to a country (fetch country-level, don't filter)
const MACRO_COUNTRY_REGIONS = new Set([
  "SE-SOUTH", "SE-NORTH", "NO-SOUTH", "NO-NORTH",
  "FI-SOUTH", "FI-NORTH",
]);

function extractName(holiday: OpenHolidayApiResponse): string {
  return holiday.name.find((n) => n.language === "EN")?.text
    ?? holiday.name[0]?.text
    ?? "School Holiday";
}

export const openHolidaysProvider: HolidayProvider = {
  name: "OpenHolidaysAPI",

  supports(regionId: string, countryCode: string): boolean {
    return SUPPORTED_COUNTRIES.has(countryCode);
  },

  async fetchHolidays(
    regionId: string,
    countryCode: string,
    subdivisionCode: string,
    validFrom: string,
    validTo: string,
  ): Promise<HolidayResult[]> {
    const isNL = NL_REGIONS.has(regionId);
    const isFR = FR_ZONES.has(regionId);
    const isCountryLevel = COUNTRY_LEVEL_REGIONS.has(regionId);
    const isMacroCountry = MACRO_COUNTRY_REGIONS.has(regionId);
    // GB subdivisions (GB-ENG, GB-SCT, etc.) use subdivision code directly
    const isGBSubdivision = countryCode === "GB" && regionId.startsWith("GB-");

    const url = new URL("https://openholidaysapi.org/SchoolHolidays");
    url.searchParams.set("countryIsoCode", countryCode);

    if (isNL || isFR || isCountryLevel || isMacroCountry) {
      // Fetch at country level, filter locally or use all results
    } else if (isGBSubdivision) {
      // GB uses subdivision codes like GB-ENG, GB-SCT
      url.searchParams.set("subdivisionCode", subdivisionCode);
    } else {
      url.searchParams.set("subdivisionCode", subdivisionCode);
    }

    url.searchParams.set("validFrom", validFrom);
    url.searchParams.set("validTo", validTo);
    url.searchParams.set("languageIsoCode", "EN");

    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      console.warn(`  [OpenHolidaysAPI] Failed for ${regionId}: ${response.status}`);
      return [];
    }

    const data = (await response.json()) as OpenHolidayApiResponse[];

    if (isNL) return filterDutchHolidays(data, regionId);
    if (isFR) return filterFrenchHolidays(data, regionId);
    if (regionId === "BE") return deduplicateByDateRange(data);

    return data.map((h) => ({
      name: extractName(h),
      startDate: h.startDate,
      endDate: h.endDate,
      year: new Date(h.startDate).getFullYear(),
    }));
  },
};

function filterDutchHolidays(data: OpenHolidayApiResponse[], regionId: string): HolidayResult[] {
  const seen = new Set<string>();
  const results: HolidayResult[] = [];

  for (const holiday of data) {
    if (!holiday.subdivisions) continue;
    const matchesRegion = holiday.subdivisions.some(
      (sub) => classifyDutchSubdivision(sub.code) === regionId,
    );
    if (!matchesRegion) continue;

    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    results.push({
      name: extractName(holiday),
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }
  return results;
}

function filterFrenchHolidays(data: OpenHolidayApiResponse[], regionId: string): HolidayResult[] {
  const seen = new Set<string>();
  const results: HolidayResult[] = [];

  for (const holiday of data) {
    if (!holiday.subdivisions) continue;
    const matchesZone = holiday.subdivisions.some((sub) => sub.code === regionId);
    if (!matchesZone) continue;

    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    results.push({
      name: extractName(holiday),
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }
  return results;
}

function deduplicateByDateRange(data: OpenHolidayApiResponse[]): HolidayResult[] {
  const seen = new Set<string>();
  const results: HolidayResult[] = [];

  for (const holiday of data) {
    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    results.push({
      name: extractName(holiday),
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }
  return results;
}
