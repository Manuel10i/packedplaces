import { sourceRegions } from "@/lib/data/source-regions";

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

// Countries that use country-level fetch (no subdivision code)
const COUNTRY_LEVEL_REGIONS = new Set(["BE", "CZ", "PL", "LU"]);

// Countries that need subdivision filtering from country-level fetch
const NL_REGIONS = new Set(["NL-NORTH", "NL-CENTRAL", "NL-SOUTH"]);

// France zones - filter by subdivision code in response
const FR_ZONES = new Set(["FR-ZA", "FR-ZB", "FR-ZC"]);

// Swiss cantons that use direct subdivision code
const CH_CANTONS = new Set(["CH-ZH", "CH-BE", "CH-VD", "CH-TI", "CH-BS"]);

// For Swiss cantons, the API uses codes like CH-BE, CH-ZH, etc.
// But CH-BS in the API doesn't include BL (Basel-Landschaft), which is separate.
// We'll fetch CH-BS directly which should work.

export async function fetchSchoolHolidays(
  regionId: string,
  validFrom: string,
  validTo: string,
): Promise<{ name: string; startDate: string; endDate: string; year: number }[]> {
  const region = sourceRegions.find((r) => r.id === regionId);
  if (!region) throw new Error(`Unknown region: ${regionId}`);

  const isNL = NL_REGIONS.has(regionId);
  const isFR = FR_ZONES.has(regionId);
  const isCountryLevel = COUNTRY_LEVEL_REGIONS.has(regionId);

  const url = new URL("https://openholidaysapi.org/SchoolHolidays");
  url.searchParams.set("countryIsoCode", region.countryCode);

  // Decide whether to send subdivisionCode
  if (isNL || isFR || isCountryLevel) {
    // Fetch at country level, filter locally
  } else {
    // Direct subdivision fetch (DE states, AT states, CH cantons)
    url.searchParams.set("subdivisionCode", region.subdivisionCode);
  }

  url.searchParams.set("validFrom", validFrom);
  url.searchParams.set("validTo", validTo);
  url.searchParams.set("languageIsoCode", "EN");

  const response = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    console.warn(`Failed to fetch holidays for ${regionId}: ${response.status} ${response.statusText}`);
    return [];
  }

  const data = (await response.json()) as OpenHolidayApiResponse[];

  // Netherlands: filter by province mapping
  if (isNL) {
    return filterDutchHolidays(data, regionId);
  }

  // France: filter by zone code in subdivisions
  if (isFR) {
    return filterFrenchHolidays(data, regionId);
  }

  // Belgium: deduplicate (API returns 3 entries per holiday for 3 communities)
  if (regionId === "BE") {
    return deduplicateBelgianHolidays(data);
  }

  // Country-level (CZ, PL, LU) or direct subdivision (DE, AT, CH): use all results
  return data.map((holiday) => {
    const name = holiday.name.find((n) => n.language === "EN")?.text
      ?? holiday.name[0]?.text
      ?? "School Holiday";
    return {
      name,
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    };
  });
}

function filterDutchHolidays(
  data: OpenHolidayApiResponse[],
  regionId: string,
): { name: string; startDate: string; endDate: string; year: number }[] {
  const seen = new Set<string>();
  const results: { name: string; startDate: string; endDate: string; year: number }[] = [];

  for (const holiday of data) {
    if (!holiday.subdivisions) continue;

    const matchesRegion = holiday.subdivisions.some(
      (sub) => classifyDutchSubdivision(sub.code) === regionId,
    );
    if (!matchesRegion) continue;

    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const name = holiday.name.find((n) => n.language === "EN")?.text
      ?? holiday.name[0]?.text
      ?? "School Holiday";
    results.push({
      name,
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }

  return results;
}

function filterFrenchHolidays(
  data: OpenHolidayApiResponse[],
  regionId: string,
): { name: string; startDate: string; endDate: string; year: number }[] {
  // regionId is FR-ZA, FR-ZB, or FR-ZC
  const zoneCode = regionId; // e.g., "FR-ZA"

  const seen = new Set<string>();
  const results: { name: string; startDate: string; endDate: string; year: number }[] = [];

  for (const holiday of data) {
    if (!holiday.subdivisions) continue;

    // Check if any subdivision matches the zone
    const matchesZone = holiday.subdivisions.some((sub) => sub.code === zoneCode);
    if (!matchesZone) continue;

    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const name = holiday.name.find((n) => n.language === "EN")?.text
      ?? holiday.name[0]?.text
      ?? "School Holiday";
    results.push({
      name,
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }

  return results;
}

function deduplicateBelgianHolidays(
  data: OpenHolidayApiResponse[],
): { name: string; startDate: string; endDate: string; year: number }[] {
  // Belgium returns 3 entries per holiday period (one per community) with slightly different dates.
  // We deduplicate by taking unique date ranges.
  const seen = new Set<string>();
  const results: { name: string; startDate: string; endDate: string; year: number }[] = [];

  for (const holiday of data) {
    const key = `${holiday.startDate}-${holiday.endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const name = holiday.name.find((n) => n.language === "EN")?.text
      ?? holiday.name[0]?.text
      ?? "School Holiday";
    results.push({
      name,
      startDate: holiday.startDate,
      endDate: holiday.endDate,
      year: new Date(holiday.startDate).getFullYear(),
    });
  }

  return results;
}
