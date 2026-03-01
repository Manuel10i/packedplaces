import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

function createDb() {
  if (!process.env.DATABASE_URL) {
    // Return a proxy that throws on any property access (for CI/test builds)
    return new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
      get(_, prop) {
        if (prop === "then" || prop === Symbol.toPrimitive || prop === Symbol.toStringTag) {
          return undefined;
        }
        throw new Error(
          `Database not available: DATABASE_URL is not set. ` +
          `This usually means you're running in CI or test mode.`,
        );
      },
    });
  }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return drizzle(pool, { schema });
}

export const db = createDb();
export { schema };
