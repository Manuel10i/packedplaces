import { NextRequest, NextResponse } from "next/server";
import { and, eq, inArray } from "drizzle-orm";
import { db, schema } from "@/lib/db";

const MAX_IDS = 6;
const WEEKS = 52;

export interface BusynessSeriesResponse {
  year: number;
  series: Record<string, (number | null)[]>;
}

/**
 * Weekly busyness series for up to 6 destinations in a given year, from the
 * precomputed heatmap cache (includes holiday/event boosts, matching the map).
 * GET /api/busyness?ids=AT-VIENNA,IT-ROME&year=2026
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const year = parseInt(searchParams.get("year") ?? "", 10);
  const ids = (searchParams.get("ids") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (isNaN(year) || ids.length === 0) {
    return NextResponse.json({ error: "Invalid ids or year parameter" }, { status: 400 });
  }
  if (ids.length > MAX_IDS) {
    return NextResponse.json({ error: `At most ${MAX_IDS} ids allowed` }, { status: 400 });
  }

  const rows = await db
    .select({
      destinationId: schema.heatmapCache.destinationId,
      week: schema.heatmapCache.week,
      busynessScore: schema.heatmapCache.busynessScore,
    })
    .from(schema.heatmapCache)
    .where(and(eq(schema.heatmapCache.year, year), inArray(schema.heatmapCache.destinationId, ids)));

  const series: Record<string, (number | null)[]> = {};
  for (const id of ids) {
    series[id] = new Array(WEEKS).fill(null);
  }
  for (const row of rows) {
    if (row.week >= 1 && row.week <= WEEKS) {
      series[row.destinationId][row.week - 1] = row.busynessScore;
    }
  }

  const response: BusynessSeriesResponse = { year, series };
  return NextResponse.json(response, {
    headers: {
      // Short fresh window so recomputed heatmap data reaches clients quickly;
      // stale-while-revalidate keeps repeat views instant.
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
