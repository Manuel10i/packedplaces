import Holidays from "date-holidays";
import type { HolidayProvider, HolidayResult } from "./types";

// Countries where OpenHolidaysAPI has good subdivision-level school holiday data.
// For these countries at country-level, prefer OpenHolidaysAPI.
// But if the region has an explicit REGION_TO_STATE mapping, we handle it here.
const PREFER_OPENHOLIDAYS = new Set([
  "AT", "BE", "BG", "CH", "CZ", "DE", "EE", "ES",
  "FR", "GR", "HR", "HU", "IE", "IT", "LI", "LT",
  "LU", "ME", "NL", "PL", "PT", "RO", "RS",
  "SI", "SK",
]);

// Mapping from our region IDs to date-holidays state codes
const REGION_TO_STATE: Record<string, string> = {
  // UK nations
  "GB-ENG": "GB.ENG",
  "GB-SCT": "GB.SCT",
  "GB-WLS": "GB.WLS",
  "GB-NIR": "GB.NIR",
  // Nordics (country-level)
  "DK": "DK",
  "SE-SOUTH": "SE",
  "SE-NORTH": "SE",
  "NO-SOUTH": "NO",
  "NO-NORTH": "NO",
  "FI-SOUTH": "FI",
  "FI-NORTH": "FI",
  "IS": "IS",
  "LV": "LV",
  // Australia states
  "AU-NSW": "AU.NSW",
  "AU-VIC": "AU.VIC",
  "AU-QLD": "AU.QLD",
  "AU-WA": "AU.WA",
  "AU-SA": "AU.SA",
  // New Zealand
  "NZ": "NZ",
  // South Africa
  "ZA": "ZA",
  // Kenya
  "KE": "KE",
};

export const dateHolidaysProvider: HolidayProvider = {
  name: "date-holidays",

  supports(regionId: string, countryCode: string): boolean {
    // Always support regions that have explicit state mappings
    if (REGION_TO_STATE[regionId]) return true;

    // Don't use for countries where OpenHolidaysAPI has better data
    if (PREFER_OPENHOLIDAYS.has(countryCode)) return false;

    try {
      const hd = new Holidays();
      const countries = hd.getCountries();
      return countryCode in countries;
    } catch {
      return false;
    }
  },

  async fetchHolidays(
    regionId: string,
    countryCode: string,
    subdivisionCode: string,
    validFrom: string,
    validTo: string,
  ): Promise<HolidayResult[]> {
    const hd = new Holidays();
    const stateCode = REGION_TO_STATE[regionId];

    if (stateCode && stateCode.includes(".")) {
      const [country, state] = stateCode.split(".");
      hd.init(country, state);
    } else {
      hd.init(stateCode ?? countryCode);
    }

    const results: HolidayResult[] = [];
    const fromYear = new Date(validFrom).getFullYear();
    const toYear = new Date(validTo).getFullYear();

    for (let year = fromYear; year <= toYear; year++) {
      const holidays = hd.getHolidays(year);

      for (const h of holidays) {
        // Only include school holidays (type "school")
        if (h.type !== "school") continue;

        const startDate = h.start ? formatDate(h.start) : null;
        const endDate = h.end ? formatDate(h.end) : null;
        if (!startDate || !endDate) continue;

        // Check date range
        if (startDate > validTo || endDate < validFrom) continue;

        results.push({
          name: h.name || "School Holiday",
          startDate,
          endDate,
          year,
        });
      }
    }

    return results;
  },
};

function formatDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
