import { and, eq, sql } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { startOfISOWeek, endOfISOWeek, format } from "date-fns";
import * as schema from "../db/schema";
import type { Hemisphere } from "@/types";
import { destinations as staticDestinations } from "../data/destinations";
import {
  computeWeekBusyness,
  getSeasonForWeek,
  seasonMatches,
  DEFAULT_HOLIDAY_BOOST,
  type BusynessDestInfo,
  type BusynessRegionInfo,
  type BusynessPatternInfo,
} from "./busyness-core";

// Re-exported so existing importers (and tests) keep resolving these from the
// heatmap service; the implementations live in the shared busyness core.
export { getSeasonForWeek, seasonMatches };

/**
 * Precompute heatmap data for all weeks in a given year.
 * Stores results in heatmap_cache table.
 */
export async function precomputeHeatmap(
  db: NodePgDatabase<typeof schema>,
  year: number,
) {
  console.log(`Precomputing heatmap for year ${year}...`);

  // Load all needed data into memory
  const allRegions = await db.select().from(schema.sourceRegions);
  const allDestinations = await db.select().from(schema.destinations);
  const allPatterns = await db.select().from(schema.travelPatterns);

  // Max population for normalization
  const maxPopulation = Math.max(...allRegions.map((r) => r.population));

  // Build capacity override and peakMonths lookups from static destination data
  const capacityOverrides = new Map<string, number>();
  const peakMonthsMap = new Map<string, number[]>();
  for (const d of staticDestinations) {
    if (d.capacityOverride != null) {
      capacityOverrides.set(d.id, d.capacityOverride);
    }
    peakMonthsMap.set(d.id, d.peakMonths);
  }

  // Shape DB rows into the pure core's inputs.
  const regionMap = new Map<string, BusynessRegionInfo>(
    allRegions.map((r) => [
      r.id,
      {
        id: r.id,
        name: r.name,
        population: r.population,
        hemisphere: (r.hemisphere as Hemisphere) ?? "northern",
      },
    ]),
  );

  const patternsByDest = new Map<string, BusynessPatternInfo[]>();
  for (const pattern of allPatterns) {
    const existing = patternsByDest.get(pattern.destinationId) ?? [];
    existing.push({
      regionId: pattern.sourceRegionId,
      weight: pattern.weight,
      season: pattern.season,
    });
    patternsByDest.set(pattern.destinationId, existing);
  }

  const destInfos: BusynessDestInfo[] = allDestinations.map((d) => ({
    id: d.id,
    category: d.category,
    basePopularity: d.basePopularity,
    peakMonths: peakMonthsMap.get(d.id) ?? Array.from({ length: 12 }, (_, i) => i + 1),
    capacityOverride: capacityOverrides.get(d.id),
  }));
  const destById = new Map(allDestinations.map((d) => [d.id, d]));

  // Load events for this year
  const allEvents = await db
    .select()
    .from(schema.majorEvents)
    .where(eq(schema.majorEvents.year, year));

  // Clear existing cache for this year
  await db.delete(schema.heatmapCache).where(eq(schema.heatmapCache.year, year));

  let insertCount = 0;

  for (let week = 1; week <= 53; week++) {
    const weekStart = startOfISOWeek(new Date(year, 0, 4 + (week - 1) * 7));
    const weekEnd = endOfISOWeek(weekStart);
    const weekStartStr = format(weekStart, "yyyy-MM-dd");
    const weekEndStr = format(weekEnd, "yyyy-MM-dd");

    // Find regions with school holidays overlapping this week
    const holidayRegions = await db
      .select({ sourceRegionId: schema.schoolHolidays.sourceRegionId })
      .from(schema.schoolHolidays)
      .where(
        and(
          sql`${schema.schoolHolidays.startDate} <= ${weekEndStr}`,
          sql`${schema.schoolHolidays.endDate} >= ${weekStartStr}`,
        ),
      );

    const onHolidayRegionIds = new Set(holidayRegions.map((r) => r.sourceRegionId));

    // Find events active during this week
    const eventBoosts = new Map<string, number>();
    for (const event of allEvents) {
      if (event.startDate <= weekEndStr && event.endDate >= weekStartStr) {
        const existing = eventBoosts.get(event.destinationId) ?? 0;
        eventBoosts.set(event.destinationId, existing + event.trafficBoost);
      }
    }

    const busyness = computeWeekBusyness(
      week,
      destInfos,
      regionMap,
      patternsByDest,
      maxPopulation,
      { onHolidayRegionIds, eventBoosts, holidayBoost: DEFAULT_HOLIDAY_BOOST },
    );

    const rows: (typeof schema.heatmapCache.$inferInsert)[] = [];
    for (const [destId, entry] of busyness) {
      if (entry.normalized <= 0) continue;
      const dest = destById.get(destId);
      if (!dest) continue;
      rows.push({
        destinationId: destId,
        year,
        week,
        busynessScore: entry.normalized,
        contributingSources: entry.sources,
        lat: dest.lat,
        lng: dest.lng,
        destinationName: dest.name,
      });
    }

    if (rows.length > 0) {
      await db.insert(schema.heatmapCache).values(rows);
      insertCount += rows.length;
    }
  }

  console.log(`  Inserted ${insertCount} heatmap cache entries for ${year}.`);
}
