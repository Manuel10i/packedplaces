# Holiday Provider System

Packed Places uses a multi-provider system to fetch school holiday data worldwide.

## Architecture

The holiday service (`src/lib/services/holidays.ts`) uses a composite pattern with three providers, tried in priority order:

```
Manual JSON → OpenHolidaysAPI → date-holidays npm
```

Each provider implements the `HolidayProvider` interface:

```typescript
interface HolidayProvider {
  name: string;
  supports(regionId: string, countryCode: string): boolean;
  fetchHolidays(
    regionId: string,
    countryCode: string,
    subdivisionCode: string,
    validFrom: string,
    validTo: string,
  ): Promise<HolidayResult[]>;
}
```

## Provider 1: Manual JSON

**File:** `src/lib/services/holiday-providers/manual-provider.ts`

### How it works
- Reads JSON files from `src/lib/data/manual-holidays/{regionId}.json`
- Returns holidays that overlap the requested date range
- No API calls — pure file-based lookup

### When to use
- Countries where neither API provides school holiday data
- Countries with complex regional calendars (US, China, Japan, India)
- When you need precise control over holiday dates

### JSON format
```json
[
  {
    "name": "Summer Break",
    "startDate": "2026-06-25",
    "endDate": "2026-09-01"
  }
]
```

### Currently covered regions
- **Austria**: AT-1 through AT-9 (all 9 Bundesländer — overrides OpenHolidaysAPI which is missing Semesterferien and Sommerferien)
- **US**: US-NE, US-SE, US-MW, US-SW, US-W (5 macro-regions with different break schedules)
- **China**: CN-EAST, CN-SOUTH, CN-NORTH, CN-CENTRAL (Chinese New Year, Summer, Golden Week)
- **Japan**: JP-KANTO, JP-KANSAI, JP-OTHER (Winter/Spring/Summer breaks)
- **India**: IN-NORTH, IN-SOUTH (Winter, Summer, Diwali, Christmas breaks)

## Provider 2: OpenHolidaysAPI

**File:** `src/lib/services/holiday-providers/openholidays.ts`

### How it works
- REST API at `https://openholidaysapi.org/SchoolHolidays`
- Queries by country code and optional subdivision
- Filters by `type: "School"` holidays
- Special handling for Netherlands (3 holiday regions), France (3 zones), and macro-regions

### Coverage
33 European countries with subdivision-level data:
AL, AD, AT, BE, BG, CH, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IS, IT, LI, LT, LU, LV, MC, ME, MK, MT, NL, NO, PL, PT, RO, RS, SE, SI, SK, SM, VA

### Known data gaps
- **Austria (AT)**: OpenHolidaysAPI does not return Semesterferien (winter break) or Sommerferien (summer holidays). Only Christmas, Easter, Pentecost, Autumn break, and All Souls' Day are provided. For this reason, AT-1 through AT-9 are overridden by manual JSON files with complete holiday data.

### Special region handling
- **Netherlands**: Maps `NL-NORTH/CENTRAL/SOUTH` to province groups, filters API results
- **France**: Maps `FR-ZA/ZB/ZC` zones directly
- **Macro-regions** (e.g., `IT-NORTH`, `SE-SOUTH`): Fetch country-level data without subdivision filtering

### Rate limiting
The API has no documented rate limit, but the ingestion script includes a 100ms delay between requests.

## Provider 3: date-holidays npm

**File:** `src/lib/services/holiday-providers/date-holidays-provider.ts`

### How it works
- Uses the `date-holidays` npm package (offline calculation)
- Initializes with country and optional state code
- Filters for holidays with `type: "school"`
- Supports state-level resolution for some countries (AU, GB)

### Coverage
199 countries supported by the library. Used as fallback for countries not covered by OpenHolidaysAPI.

### Region-to-state mapping
Custom mappings for regions that need state-level data:
```typescript
"GB-ENG" → "GB.ENG"
"GB-SCT" → "GB.SCT"
"AU-NSW" → "AU.NSW"
"DK"     → "DK"      // country-level
"SE-SOUTH" → "SE"    // country-level (no subdivision data)
```

### PREFER_OPENHOLIDAYS
Countries where OpenHolidaysAPI has better subdivision-level data are excluded from this provider (unless they have an explicit `REGION_TO_STATE` mapping):

AT, BE, BG, CH, CZ, DE, EE, ES, FR, GR, HR, HU, IE, IT, LI, LT, LU, ME, NL, PL, PT, RO, RS, SI, SK

### Known limitations
- Not all countries have school holiday data (type "school")
- Some countries only have public holidays, not school holidays
- State-level coverage varies significantly
- Holiday dates may not exactly match official schedules

## Adding a new provider

1. Create a new file in `src/lib/services/holiday-providers/`
2. Implement the `HolidayProvider` interface
3. Export it from `index.ts`
4. Add it to the providers array in `src/lib/services/holidays.ts`

The provider will be tried in the order specified in the array. Place higher-quality providers first.

## Ingestion

Run the ingestion script to populate the database:

```bash
# All regions, 3 years
npx tsx --tsconfig tsconfig.scripts.json scripts/ingest-holidays.ts

# Single region
npx tsx --tsconfig tsconfig.scripts.json scripts/ingest-holidays.ts --region=DE-BW

# Specific year range
npx tsx --tsconfig tsconfig.scripts.json scripts/ingest-holidays.ts --year=2027
```

The script:
1. Iterates over all source regions in the database
2. For each region, tries providers in priority order
3. Inserts results into the `school_holidays` table
4. Logs per-region success/failure and summary statistics

## Overriding an API provider with manual JSON

When an API provider has incomplete or incorrect data (e.g., OpenHolidaysAPI missing Austrian Semesterferien), you can override it by creating manual JSON files. Because the provider chain uses **first-match semantics**, a manual file for a region completely replaces the API data — it does not merge with it.

### Steps

1. **Create manual JSON files** for each affected region in `src/lib/data/manual-holidays/{regionId}.json`. Each file must contain **all** holidays for that region (not just the missing ones), since the manual provider replaces the API entirely.

2. **Re-ingest holidays** for the affected regions:
   ```bash
   npm run db:ingest-holidays -- --region=AT   # by country code
   npm run db:ingest-holidays -- --region=AT-9  # by specific region
   ```

3. **Re-precompute the heatmap** so busyness scores reflect the updated holidays:
   ```bash
   npm run db:precompute
   ```

### Example: Austria

Austria's Semesterferien dates are staggered across three groups:
- **Week 1 (earliest)**: Wien (AT-9), Niederösterreich (AT-3)
- **Week 2**: Burgenland (AT-1), Kärnten (AT-2), Salzburg (AT-5), Tirol (AT-7), Vorarlberg (AT-8)
- **Week 3 (latest)**: Oberösterreich (AT-4), Steiermark (AT-6)

Sommerferien also varies:
- **Eastern states** (AT-1, AT-3, AT-9): Earlier start (late June / early July)
- **Western states** (AT-2, AT-4, AT-5, AT-6, AT-7, AT-8): Later start (early / mid July)

All other holidays (Weihnachtsferien, Osterferien, Pfingstferien, Herbstferien) are uniform across all 9 Bundesländer.
