import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { db, schema } from "@/lib/db";
import type { HeatmapFeature, HeatmapResponse } from "@/types";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const week = parseInt(searchParams.get("week") ?? "", 10);
  const year = parseInt(searchParams.get("year") ?? "", 10);

  if (isNaN(week) || isNaN(year) || week < 1 || week > 53) {
    return NextResponse.json(
      { error: "Invalid week or year parameter" },
      { status: 400 },
    );
  }

  // Fetch heatmap cache entries for this week
  const cacheEntries = await db
    .select()
    .from(schema.heatmapCache)
    .where(and(eq(schema.heatmapCache.year, year), eq(schema.heatmapCache.week, week)));

  // Build GeoJSON features
  const features: HeatmapFeature[] = cacheEntries.map((entry) => ({
    type: "Feature" as const,
    geometry: {
      type: "Point" as const,
      coordinates: [entry.lng, entry.lat],
    },
    properties: {
      destinationId: entry.destinationId,
      name: entry.destinationName,
      busynessScore: entry.busynessScore,
      contributingSources: entry.contributingSources as HeatmapFeature["properties"]["contributingSources"],
    },
  }));

  // Fetch holidays overlapping this week for metadata
  const weekStart = getISOWeekStart(year, week);
  const weekEnd = getISOWeekEnd(year, week);
  const weekStartStr = formatDate(weekStart);
  const weekEndStr = formatDate(weekEnd);

  const holidays = await db
    .select({
      sourceRegionId: schema.schoolHolidays.sourceRegionId,
      name: schema.schoolHolidays.name,
      startDate: schema.schoolHolidays.startDate,
      endDate: schema.schoolHolidays.endDate,
      regionName: schema.sourceRegions.name,
    })
    .from(schema.schoolHolidays)
    .innerJoin(
      schema.sourceRegions,
      eq(schema.schoolHolidays.sourceRegionId, schema.sourceRegions.id),
    )
    .where(
      and(
        sql`${schema.schoolHolidays.startDate} <= ${weekEndStr}`,
        sql`${schema.schoolHolidays.endDate} >= ${weekStartStr}`,
      ),
    );

  // Fetch active events overlapping this week
  const activeEvents = await db
    .select({
      id: schema.majorEvents.id,
      name: schema.majorEvents.name,
      destinationId: schema.majorEvents.destinationId,
      startDate: schema.majorEvents.startDate,
      endDate: schema.majorEvents.endDate,
      category: schema.majorEvents.category,
    })
    .from(schema.majorEvents)
    .where(
      and(
        sql`${schema.majorEvents.startDate} <= ${weekEndStr}`,
        sql`${schema.majorEvents.endDate} >= ${weekStartStr}`,
      ),
    );

  const response: HeatmapResponse = {
    type: "FeatureCollection",
    features,
    metadata: {
      week,
      year,
      regionsOnHoliday: holidays.map((h) => ({
        regionId: h.sourceRegionId,
        regionName: h.regionName,
        holidayName: h.name,
        startDate: h.startDate,
        endDate: h.endDate,
      })),
      activeEvents: activeEvents.map((e) => ({
        id: e.id,
        name: e.name,
        destinationId: e.destinationId,
        startDate: e.startDate,
        endDate: e.endDate,
        category: e.category as "sports" | "festival" | "cultural" | "music" | "trade",
      })),
    },
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
  });
}

function getISOWeekStart(year: number, week: number): Date {
  const jan4 = new Date(year, 0, 4);
  const dayOfWeek = jan4.getDay() || 7;
  const monday = new Date(jan4);
  monday.setDate(jan4.getDate() - dayOfWeek + 1 + (week - 1) * 7);
  return monday;
}

function getISOWeekEnd(year: number, week: number): Date {
  const start = getISOWeekStart(year, week);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return end;
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
