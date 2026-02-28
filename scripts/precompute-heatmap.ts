import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../src/lib/db/schema";
import { precomputeHeatmap } from "../src/lib/services/heatmap";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  const years = [2025, 2026, 2027];

  for (const year of years) {
    await precomputeHeatmap(db, year);
  }

  console.log("Precomputation complete.");
  await pool.end();
}

main().catch(console.error);
