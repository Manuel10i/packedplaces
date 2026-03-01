import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test-setup.ts"],
    coverage: {
      provider: "v8",
      include: [
        "src/lib/data/capacity.ts",
        "src/lib/data/countries.ts",
        "src/lib/data/destinations/index.ts",
        "src/lib/data/regions/index.ts",
        "src/lib/data/patterns/index.ts",
        "src/lib/data/region-bounds.ts",
        "src/store/useMapStore.ts",
        "src/hooks/useUrlSync.ts",
        "src/components/controls/**/*.tsx",
        "src/components/map/DestinationTooltip.tsx",
        "src/app/api/**/route.ts",
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    mockReset: true,
  },
});
