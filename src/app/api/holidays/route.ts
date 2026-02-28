import { NextRequest, NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db, schema } from "@/lib/db";
import type { HolidayInfo } from "@/types";

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
      countryCode: schema.sourceRegions.countryCode,
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

  const result: HolidayInfo[] = holidays.map((h) => ({
    regionId: h.sourceRegionId,
    regionName: h.regionName,
    countryCode: h.countryCode,
    holidayName: h.name,
    startDate: h.startDate,
    endDate: h.endDate,
  }));

  return NextResponse.json(result, {
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
