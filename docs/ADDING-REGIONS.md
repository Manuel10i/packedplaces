# Adding New Regions — Contributor Guide

Step-by-step guide for adding a new source region, destinations, and travel patterns to Busymap.

## Prerequisites

- Node.js 18+
- Docker (for PostgreSQL)
- Familiarity with the data model (see [DATA-SOURCES.md](./DATA-SOURCES.md))

## Step 1: Choose your region file

Data is organized by world region in `src/lib/data/`:

```
regions/europe-central.ts    # DE, AT, NL, BE, CH, FR, CZ, PL, LU
regions/europe-north.ts      # GB, IE, DK, SE, NO, FI, IS
regions/europe-south-east.ts # IT, ES, PT, HU, RO, BG, HR, RS, SK, SI, EE, LV, LT
regions/mena.ts              # TR, RU, UA, IL, AE, SA, EG, MA
regions/asia.ts              # CN, JP, KR, TW, TH, VN, ID, MY, SG, PH, IN
regions/americas.ts          # US, CA, MX, BR, AR, CO, CL, PE
regions/oceania-africa.ts    # AU, NZ, ZA, KE
regions/remaining.ts         # PK, BD, LK, MM, KH, KZ, UZ, NG
```

Add your source region to the appropriate file, or create a new one if needed.

## Step 2: Add source region(s)

Add entries to the source regions file:

```typescript
{
  id: "XX-YY",              // Unique ID: country code + subdivision
  countryCode: "XX",        // ISO 3166-1 alpha-2
  subdivisionCode: "XX-YY", // ISO 3166-2 or custom macro-region
  name: "Region Name",      // Display name
  population: 5000000,      // Approximate population
  lat: 40.00,               // Centroid latitude
  lng: 20.00,               // Centroid longitude
  hemisphere: "northern",   // "northern" | "southern" | "equatorial"
  region: "europe",         // "europe" | "asia" | "americas" | "oceania" | "africa" | "middle-east"
}
```

### Guidelines
- Use ISO subdivision codes where they exist (e.g., `DE-BW`, `AU-NSW`)
- For macro-regions, use descriptive suffixes (e.g., `US-NE`, `CN-EAST`)
- Population should be reasonably accurate (within 10%)
- Hemisphere: use "equatorial" for countries between ~15°N and ~15°S

## Step 3: Add destinations

Add entries to the matching destinations file:

```typescript
{
  id: "XX-NAME",            // Country code + short name
  name: "Destination Name", // Display name
  country: "XX",            // ISO country code
  lat: 40.00,
  lng: 20.00,
  category: "beach",        // ski | beach | city | lake | nature | cultural | safari | island | mountain | desert | tropical
  seasonality: "summer",    // "winter" | "summer" | "year-round"
  basePopularity: 0.65,     // 0-1 scale (see DATA-SOURCES.md for calibration)
  region: "europe",         // World region
}
```

## Step 4: Add travel patterns

Add entries to the matching patterns file:

```typescript
{
  sourceRegionId: "XX-YY",
  destinationId: "ZZ-NAME",
  weight: 0.55,             // 0-1 flow strength
  season: "summer",         // "winter" | "summer" | null (year-round)
}
```

### Tips for researching travel patterns
1. Check UNWTO bilateral flow data for the country
2. Look at airline route maps (major carriers from the source)
3. Consider geographic proximity, cultural ties, language
4. Include both domestic and international destinations
5. A typical source region should have 8-20 patterns

## Step 5: Add country metadata

If your country isn't already in `src/lib/data/countries.ts`, add it:

```typescript
{ code: "XX", name: "Country Name", flag: "🇽🇽", region: "europe" },
```

## Step 6: Update index files

If you created a new data file (not adding to an existing one), update the index files:
- `src/lib/data/regions/index.ts`
- `src/lib/data/destinations/index.ts`
- `src/lib/data/patterns/index.ts`

## Step 7: Holiday data

Check if your country is covered by the existing providers:
1. **OpenHolidaysAPI**: Check `SUPPORTED_COUNTRIES` in `src/lib/services/holiday-providers/openholidays.ts`
2. **date-holidays npm**: Most countries are supported. Check `PREFER_OPENHOLIDAYS` and `REGION_TO_STATE` in `date-holidays-provider.ts`
3. **Manual JSON**: Create a file in `src/lib/data/manual-holidays/{REGION_ID}.json` if neither API covers school holidays

Manual holiday JSON format:
```json
[
  { "name": "Summer Break", "startDate": "2026-06-25", "endDate": "2026-09-01" },
  { "name": "Winter Break", "startDate": "2026-12-20", "endDate": "2027-01-04" }
]
```

## Step 8: Verify

```bash
# Type check
npx tsc --noEmit

# Seed database
npx tsx --tsconfig tsconfig.scripts.json src/lib/db/seed.ts

# Ingest holidays (optional: --region=XX-YY for just your region)
npx tsx --tsconfig tsconfig.scripts.json scripts/ingest-holidays.ts

# Precompute heatmap
npx tsx --tsconfig tsconfig.scripts.json scripts/precompute-heatmap.ts

# Start dev server and verify
npm run dev
```

### Verification checklist
- [ ] New destinations appear on the map at correct coordinates
- [ ] Sliding through weeks shows heatmap responding to school holidays
- [ ] HolidayPanel shows the new country with correct flag
- [ ] For southern hemisphere: verify season inversion works (July = winter)
- [ ] No TypeScript errors
- [ ] No foreign key violations during seed
