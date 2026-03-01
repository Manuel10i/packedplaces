import { and, between, eq, sql } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { startOfISOWeek, endOfISOWeek, format } from "date-fns";
import * as schema from "../db/schema";
import type { Hemisphere } from "@/types";

interface ContributingSource {
  regionId: string;
  regionName: string;
  weight: number;
}

/**
 * Determines the season for a given ISO week number, accounting for hemisphere.
 * Northern hemisphere: Winter weeks 44-14 (Nov-Apr), Summer weeks 22-36 (Jun-Sep)
 * Southern hemisphere: Inverted — Summer weeks 44-14, Winter weeks 22-36
 * Equatorial: Always "shoulder" (all patterns match)
 */
function getSeasonForWeek(
  week: number,
  hemisphere: Hemisphere = "northern",
): "winter" | "summer" | "shoulder" {
  if (hemisphere === "equatorial") return "shoulder";

  const isNorthernWinter = week >= 44 || week <= 14;
  const isNorthernSummer = week >= 22 && week <= 36;

  if (hemisphere === "southern") {
    if (isNorthernWinter) return "summer";
    if (isNorthernSummer) return "winter";
    return "shoulder";
  }

  // Northern hemisphere (default)
  if (isNorthernWinter) return "winter";
  if (isNorthernSummer) return "summer";
  return "shoulder";
}

/**
 * Check if a travel pattern's season matches the current week's season
 * for the source region's hemisphere.
 * - null season = year-round, always matches
 * - shoulder season: both winter and summer patterns apply
 */
function seasonMatches(patternSeason: string | null, weekSeason: string): boolean {
  if (patternSeason === null) return true;
  if (weekSeason === "shoulder") return true;
  return patternSeason === weekSeason;
}

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

  // Build lookup maps
  const regionMap = new Map(allRegions.map((r) => [r.id, r]));
  const patternsByRegion = new Map<string, typeof allPatterns>();
  for (const pattern of allPatterns) {
    const existing = patternsByRegion.get(pattern.sourceRegionId) ?? [];
    existing.push(pattern);
    patternsByRegion.set(pattern.sourceRegionId, existing);
  }

  // Collect raw scores for normalization
  const weeklyScores: Map<string, { score: number; sources: ContributingSource[] }>[] = [];

  let maxScoreAcrossYear = 0;

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

    // Calculate busyness for each destination
    const destScores = new Map<string, { score: number; sources: ContributingSource[] }>();

    for (const dest of allDestinations) {
      let totalScore = 0;
      const sources: ContributingSource[] = [];

      for (const regionId of onHolidayRegionIds) {
        const patterns = patternsByRegion.get(regionId) ?? [];
        const region = regionMap.get(regionId);
        if (!region) continue;

        const populationFactor = region.population / maxPopulation;
        // Determine season from the source region's hemisphere perspective
        const hemisphere = (region.hemisphere as Hemisphere) ?? "northern";
        const season = getSeasonForWeek(week, hemisphere);

        for (const pattern of patterns) {
          if (pattern.destinationId !== dest.id) continue;
          if (!seasonMatches(pattern.season, season)) continue;

          const contribution = pattern.weight * populationFactor * dest.basePopularity;
          totalScore += contribution;
          sources.push({
            regionId: region.id,
            regionName: region.name,
            weight: Math.round(contribution * 1000) / 1000,
          });
        }
      }

      if (totalScore > 0) {
        destScores.set(dest.id, { score: totalScore, sources });
        if (totalScore > maxScoreAcrossYear) maxScoreAcrossYear = totalScore;
      }
    }

    weeklyScores.push(destScores);
  }

  // Clear existing cache for this year
  await db.delete(schema.heatmapCache).where(eq(schema.heatmapCache.year, year));

  // Normalize and insert
  let insertCount = 0;
  for (let week = 1; week <= 53; week++) {
    const destScores = weeklyScores[week - 1];
    const rows: (typeof schema.heatmapCache.$inferInsert)[] = [];

    for (const dest of allDestinations) {
      const entry = destScores.get(dest.id);
      const normalizedScore = entry && maxScoreAcrossYear > 0
        ? Math.round((entry.score / maxScoreAcrossYear) * 1000) / 1000
        : 0;

      // Only store non-zero entries
      if (normalizedScore > 0) {
        rows.push({
          destinationId: dest.id,
          year,
          week,
          busynessScore: normalizedScore,
          contributingSources: entry?.sources ?? [],
          lat: dest.lat,
          lng: dest.lng,
          destinationName: dest.name,
        });
      }
    }

    if (rows.length > 0) {
      await db.insert(schema.heatmapCache).values(rows);
      insertCount += rows.length;
    }
  }

  console.log(`  Inserted ${insertCount} heatmap cache entries for ${year}.`);
}
