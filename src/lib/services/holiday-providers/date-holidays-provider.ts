import Holidays from "date-holidays";
import type { HolidayProvider, HolidayResult } from "./types";

// Countries where OpenHolidaysAPI is better (has subdivision-level school holidays)
// For these, this provider is only used as a fallback
const PREFER_OPENHOLIDAYS = new Set([
  "AT", "BE", "CH", "CZ", "DE", "FR", "LU", "NL", "PL",
]);

// Mapping from our region IDs to date-holidays state codes
const REGION_TO_STATE: Record<string, string> = {
  // UK nations
  "GB-ENG": "GB.ENG",
  "GB-SCT": "GB.SCT",
  "GB-WLS": "GB.WLS",
  "GB-NIR": "GB.NIR",
  // Australia states
  "AU-NSW": "AU.NSW",
  "AU-VIC": "AU.VIC",
  "AU-QLD": "AU.QLD",
  "AU-WA": "AU.WA",
  "AU-SA": "AU.SA",
};

export const dateHolidaysProvider: HolidayProvider = {
  name: "date-holidays",

  supports(regionId: string, countryCode: string): boolean {
    // Don't use for countries where OpenHolidaysAPI has better data
    // unless it's a specific region not covered there
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

    if (stateCode) {
      const [country, state] = stateCode.split(".");
      hd.init(country, state);
    } else {
      hd.init(countryCode);
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
