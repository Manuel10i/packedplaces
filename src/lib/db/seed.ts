import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { sourceRegions, destinations, travelPatterns, getEventsForYear } from "../data";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  // Clear all tables in dependency order (children first)
  console.log("Clearing existing data...");
  await db.delete(schema.heatmapCache);
  await db.delete(schema.majorEvents);
  await db.delete(schema.travelPatterns);
  await db.delete(schema.schoolHolidays);
  await db.delete(schema.destinations);
  await db.delete(schema.sourceRegions);
  console.log("  Done.");

  console.log("Seeding source regions...");
  await db.insert(schema.sourceRegions).values(
    sourceRegions.map((r) => ({
      id: r.id,
      countryCode: r.countryCode,
      subdivisionCode: r.subdivisionCode,
      name: r.name,
      population: r.population,
      lat: r.lat,
      lng: r.lng,
      hemisphere: r.hemisphere,
      region: r.region,
    })),
  ).onConflictDoNothing();
  console.log(`  ${sourceRegions.length} source regions seeded.`);

  console.log("Seeding destinations...");
  await db.insert(schema.destinations).values(
    destinations.map((d) => ({
      id: d.id,
      name: d.name,
      country: d.country,
      lat: d.lat,
      lng: d.lng,
      category: d.category,
      seasonality: d.seasonality,
      basePopularity: d.basePopularity,
      region: d.region,
    })),
  ).onConflictDoNothing();
  console.log(`  ${destinations.length} destinations seeded.`);

  console.log("Seeding travel patterns...");
  // Insert in batches to avoid parameter limit
  const batchSize = 50;
  for (let i = 0; i < travelPatterns.length; i += batchSize) {
    const batch = travelPatterns.slice(i, i + batchSize);
    await db.insert(schema.travelPatterns).values(
      batch.map((tp) => ({
        sourceRegionId: tp.sourceRegionId,
        destinationId: tp.destinationId,
        weight: tp.weight,
        season: tp.season,
      })),
    ).onConflictDoNothing();
  }
  console.log(`  ${travelPatterns.length} travel patterns seeded.`);

  console.log("Seeding major events...");
  const currentYear = new Date().getFullYear();
  let eventCount = 0;
  for (let year = currentYear; year <= currentYear + 2; year++) {
    const events = getEventsForYear(year);
    if (events.length > 0) {
      for (let i = 0; i < events.length; i += batchSize) {
        const batch = events.slice(i, i + batchSize);
        await db.insert(schema.majorEvents).values(
          batch.map((e) => ({
            id: e.id,
            name: e.name,
            destinationId: e.destinationId,
            startDate: e.startDate,
            endDate: e.endDate,
            year,
            trafficBoost: e.trafficBoost,
            category: e.category,
          })),
        ).onConflictDoNothing();
      }
      eventCount += events.length;
    }
  }
  console.log(`  ${eventCount} major events seeded (${currentYear}–${currentYear + 2}).`);

  console.log("Seed complete. Run scripts/ingest-holidays.ts next.");
  await pool.end();
}

main().catch(console.error);
