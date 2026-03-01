import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../src/lib/db/schema";
import { precomputeHeatmap } from "../src/lib/services/heatmap";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  // Parse CLI flags
  const args = process.argv.slice(2);
  const yearFlag = args.find((a) => a.startsWith("--year="))?.split("=")[1];

  const currentYear = new Date().getFullYear();
  const years = yearFlag
    ? [parseInt(yearFlag, 10)]
    : [currentYear, currentYear + 1, currentYear + 2];

  console.log(`Precomputing heatmap for years: ${years.join(", ")}...`);

  for (const year of years) {
    const start = Date.now();
    await precomputeHeatmap(db, year);
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`  Year ${year} completed in ${elapsed}s`);
  }

  console.log("Precomputation complete.");
  await pool.end();
}

main().catch(console.error);
