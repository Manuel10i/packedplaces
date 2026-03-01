import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../src/lib/db/schema";
import { sourceRegions } from "../src/lib/data";
import { fetchSchoolHolidays } from "../src/lib/services/holidays";
import { eq } from "drizzle-orm";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  // Parse CLI flags
  const args = process.argv.slice(2);
  const regionFlag = args.find((a) => a.startsWith("--region="))?.split("=")[1];
  const yearFlag = args.find((a) => a.startsWith("--year="))?.split("=")[1];

  const currentYear = new Date().getFullYear();
  const validFrom = yearFlag ? `${yearFlag}-01-01` : `${currentYear}-01-01`;
  const validTo = yearFlag ? `${yearFlag}-12-31` : `${currentYear + 2}-12-31`;

  const regions = regionFlag
    ? sourceRegions.filter((r) => r.region === regionFlag || r.id === regionFlag || r.countryCode === regionFlag)
    : sourceRegions;

  if (regions.length === 0) {
    console.error(`No regions found matching: ${regionFlag}`);
    process.exit(1);
  }

  console.log(`Ingesting school holidays from ${validFrom} to ${validTo}...`);
  console.log(`  Processing ${regions.length} regions${regionFlag ? ` (filter: ${regionFlag})` : ""}...`);

  let totalInserted = 0;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    const progress = `[${i + 1}/${regions.length}]`;
    console.log(`${progress} Fetching holidays for ${region.id} (${region.name})...`);

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

      totalInserted += holidays.length;
      successCount++;
      console.log(`    Inserted ${holidays.length} holidays for ${region.id}`);
    } catch (err) {
      failCount++;
      console.error(`    Error fetching holidays for ${region.id}:`, err);
    }

    // Rate limit: small delay between API calls
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  console.log(`\nDone ingesting holidays.`);
  console.log(`  Regions processed: ${successCount} success, ${failCount} failed`);
  console.log(`  Total holidays inserted: ${totalInserted}`);
  await pool.end();
}

main().catch(console.error);
