import type { HolidayProvider, HolidayResult } from "./types";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

interface ManualHolidayEntry {
  name: string;
  startDate: string;
  endDate: string;
}

// Supports both formats:
// 1. Year-keyed: { "2026": [...], "2027": [...] }
// 2. Flat array: [{ name, startDate, endDate }, ...]
type ManualHolidayFile = Record<string, ManualHolidayEntry[]> | ManualHolidayEntry[];

const MANUAL_DATA_DIR = join(process.cwd(), "src/lib/data/manual-holidays");

export const manualProvider: HolidayProvider = {
  name: "Manual JSON",

  supports(regionId: string, countryCode: string): boolean {
    const filePath = join(MANUAL_DATA_DIR, `${regionId}.json`);
    return existsSync(filePath);
  },

  async fetchHolidays(
    regionId: string,
    countryCode: string,
    subdivisionCode: string,
    validFrom: string,
    validTo: string,
  ): Promise<HolidayResult[]> {
    const filePath = join(MANUAL_DATA_DIR, `${regionId}.json`);
    if (!existsSync(filePath)) return [];

    const raw = readFileSync(filePath, "utf-8");
    const data: ManualHolidayFile = JSON.parse(raw);
    const results: HolidayResult[] = [];

    if (Array.isArray(data)) {
      // Flat array format
      for (const entry of data) {
        if (entry.startDate > validTo || entry.endDate < validFrom) continue;
        const year = new Date(entry.startDate).getFullYear();
        results.push({
          name: entry.name,
          startDate: entry.startDate,
          endDate: entry.endDate,
          year,
        });
      }
    } else {
      // Year-keyed format
      const fromYear = new Date(validFrom).getFullYear();
      const toYear = new Date(validTo).getFullYear();

      for (let year = fromYear; year <= toYear; year++) {
        const yearEntries = data[String(year)];
        if (!yearEntries) continue;

        for (const entry of yearEntries) {
          if (entry.startDate > validTo || entry.endDate < validFrom) continue;

          results.push({
            name: entry.name,
            startDate: entry.startDate,
            endDate: entry.endDate,
            year,
          });
        }
      }
    }

    return results;
  },
};
