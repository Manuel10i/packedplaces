import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { sourceRegions } from "../data/source-regions";
import { destinations } from "../data/destinations";
import { travelPatterns } from "../data/travel-patterns";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

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

  console.log("Seed complete. Run scripts/ingest-holidays.ts next.");
  await pool.end();
}

main().catch(console.error);
