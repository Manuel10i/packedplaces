import { sourceRegions } from "@/lib/data";
import type { HolidayResult } from "./holiday-providers/types";
import { openHolidaysProvider } from "./holiday-providers/openholidays";
import { dateHolidaysProvider } from "./holiday-providers/date-holidays-provider";
import { manualProvider } from "./holiday-providers/manual-provider";

// Provider priority order: Manual overrides > OpenHolidaysAPI > date-holidays npm
const providers = [manualProvider, openHolidaysProvider, dateHolidaysProvider];

/**
 * Fetch school holidays for a region using the composite provider system.
 * Tries providers in priority order until one succeeds.
 */
export async function fetchSchoolHolidays(
  regionId: string,
  validFrom: string,
  validTo: string,
): Promise<HolidayResult[]> {
  const region = sourceRegions.find((r) => r.id === regionId);
  if (!region) throw new Error(`Unknown region: ${regionId}`);

  for (const provider of providers) {
    if (!provider.supports(regionId, region.countryCode)) continue;

    try {
      const results = await provider.fetchHolidays(
        regionId,
        region.countryCode,
        region.subdivisionCode,
        validFrom,
        validTo,
      );

      if (results.length > 0) {
        console.log(`    [${provider.name}] ${results.length} holidays for ${regionId}`);
        return results;
      }
    } catch (err) {
      console.warn(`    [${provider.name}] Failed for ${regionId}:`, err);
    }
  }

  console.log(`    No provider returned holidays for ${regionId}`);
  return [];
}
