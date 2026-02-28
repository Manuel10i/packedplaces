import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../src/lib/db/schema";
import { sourceRegions } from "../src/lib/data/source-regions";
import { fetchSchoolHolidays } from "../src/lib/services/holidays";
import { eq } from "drizzle-orm";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  const validFrom = "2025-01-01";
  const validTo = "2027-12-31";

  console.log(`Ingesting school holidays from ${validFrom} to ${validTo}...`);

  for (const region of sourceRegions) {
    console.log(`  Fetching holidays for ${region.id} (${region.name})...`);

    try {
      const holidays = await fetchSchoolHolidays(region.id, validFrom, validTo);

      if (holidays.length === 0) {
        console.log(`    No holidays found for ${region.id}`);
        continue;
      }

      // Delete existing holidays for this region to avoid duplicates
      await db.delete(schema.schoolHolidays).where(
        eq(schema.schoolHolidays.sourceRegionId, region.id),
      );

      // Insert new holidays
      await db.insert(schema.schoolHolidays).values(
        holidays.map((h) => ({
          sourceRegionId: region.id,
          name: h.name,
          startDate: h.startDate,
          endDate: h.endDate,
          year: h.year,
        })),
      );

      console.log(`    Inserted ${holidays.length} holidays for ${region.id}`);
    } catch (err) {
      console.error(`    Error fetching holidays for ${region.id}:`, err);
    }

    // Rate limit: small delay between API calls
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  console.log("Done ingesting holidays.");
  await pool.end();
}

main().catch(console.error);
