import type { MajorEvent } from "@/types";
import { recurringEvents } from "./recurring";
import { oneTimeEvents } from "./one-time";

export { recurringEvents } from "./recurring";
export { oneTimeEvents } from "./one-time";

/**
 * Materialize recurring event templates into year-specific MajorEvent rows.
 * For recurring events, creates entries for each year in the given range.
 */
export function materializeEvents(startYear: number, endYear: number): MajorEvent[] {
  const materialized: MajorEvent[] = [];

  for (let year = startYear; year <= endYear; year++) {
    for (const template of recurringEvents) {
      const startDate = `${year}-${String(template.startMonth).padStart(2, "0")}-${String(template.startDay).padStart(2, "0")}`;

      // Handle events that cross year boundary (e.g., endMonth < startMonth)
      const endYear2 = template.endMonth < template.startMonth ? year + 1 : year;
      const endDate = `${endYear2}-${String(template.endMonth).padStart(2, "0")}-${String(template.endDay).padStart(2, "0")}`;

      materialized.push({
        id: `${template.id}-${year}`,
        name: template.name,
        destinationId: template.destinationId,
        startDate,
        endDate,
        trafficBoost: template.trafficBoost,
        category: template.category,
      });
    }
  }

  return materialized;
}

/**
 * Get all events (recurring materialized + one-time) for a range of years.
 */
export function getAllEvents(startYear: number, endYear: number): MajorEvent[] {
  const recurring = materializeEvents(startYear, endYear);
  const oneTime = oneTimeEvents.filter((e) => {
    const year = parseInt(e.startDate.slice(0, 4), 10);
    return year >= startYear && year <= endYear;
  });
  return [...recurring, ...oneTime];
}

/**
 * Get all events for a specific year.
 */
export function getEventsForYear(year: number): MajorEvent[] {
  return getAllEvents(year, year);
}
