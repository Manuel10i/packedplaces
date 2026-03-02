# Data Sources — How data is collected and used

This document describes the data that powers Packed Places's heatmap, including where it comes from, how it's structured, and how it's processed.

## Source Regions

Source regions represent populations that travel. Each region has:

- **id**: Unique identifier (e.g., `DE-BW`, `US-NE`, `AU-NSW`)
- **countryCode**: ISO 3166-1 alpha-2 (e.g., `DE`, `US`, `AU`)
- **subdivisionCode**: ISO 3166-2 or custom macro-region code
- **population**: Approximate population used for weighting
- **lat/lng**: Centroid coordinates
- **hemisphere**: `"northern"`, `"southern"`, or `"equatorial"` — determines season calculation
- **region**: World region for UI grouping (`"europe"`, `"asia"`, `"americas"`, `"oceania"`, `"africa"`, `"middle-east"`)

### Population data sources
- **Europe**: Eurostat regional population statistics
- **Americas**: US Census Bureau, Statistics Canada, IBGE (Brazil), INDEC (Argentina), national statistics offices
- **Asia**: National statistics offices, UN World Population Prospects
- **Oceania**: ABS (Australia), Stats NZ
- **Africa/Middle East**: UN World Population Prospects, national census data

### Region granularity
- **Germany, Austria, Switzerland, Netherlands, France**: Subdivision-level (Bundesländer, cantons, provinces, zones)
- **UK**: 4 nations (England, Scotland, Wales, Northern Ireland)
- **US**: 5 macro-regions (Northeast, Southeast, Midwest, Southwest, West)
- **Large countries (China, Japan, India, Brazil, Australia)**: 2-5 macro-regions
- **Small/medium countries**: Single national region

Currently: **~127 source regions across 100+ countries**.

## Destinations

Destinations are places people travel to. Each has:

- **id**: Unique identifier (e.g., `ES-MALLORCA`, `TH-PHUKET`, `US-HAWAII`)
- **country**: ISO country code
- **category**: One of `ski`, `beach`, `city`, `lake`, `nature`, `cultural`, `safari`, `island`, `mountain`, `desert`, `tropical`
- **seasonality**: `"winter"`, `"summer"`, or `"year-round"` — when the destination is in season
- **basePopularity**: 0-1 scale calibrated from UNWTO international arrival volumes. 1.0 = top global destinations (Paris, Bangkok), 0.3 = niche destinations
- **capacityOverride** (optional): Overrides the category-level capacity for outlier destinations. Used by the congestion scoring system. Example: Bangkok and NYC get `8.0` (mega-city, far beyond typical "city" capacity), Santorini gets `0.4` (tiny island, much less than typical "beach")
- **lat/lng**: Point coordinates for map display

### Selection criteria
1. UNWTO international arrival rankings (top destinations per receiving country)
2. Search interest data (Google Trends relative volume)
3. Geographic diversity within each country
4. Category coverage (each major category represented per region)

Currently: **~700 destinations across 90+ countries**.

## Travel Patterns

Travel patterns define the flow of tourists from source regions to destinations. Each pattern has:

- **sourceRegionId**: Where travelers come from
- **destinationId**: Where they go
- **weight**: 0-1 strength of the flow. 1.0 = dominant destination, 0.2 = minor flow
- **season**: `"winter"`, `"summer"`, or `null` (year-round)

### Methodology

**Layer 1 — Bilateral tourism flow statistics:**
- Eurostat overnight stays by country of residence (European destinations)
- UNWTO Compendium of Tourism Statistics (worldwide bilateral flows)
- NTTO I-94 arrival data (US inbound)
- JNTO statistics (Japan inbound)
- National tourism authority reports

**Layer 2 — Regional curation factors:**
- Geographic proximity (neighboring countries have higher weights)
- Cultural/linguistic affinity (e.g., Brazil → Portugal, UK → Australia)
- Airline connectivity (direct routes boost weights)
- Price sensitivity (budget destinations for price-sensitive markets)

### Weight scale
| Weight | Meaning | Example |
|--------|---------|---------|
| 0.70-1.00 | Dominant flow | DE → ES-MALLORCA, AU → ID-BALI |
| 0.50-0.69 | Strong flow | US-NE → MX-CANCUN, GB → ES-COSTA-DEL-SOL |
| 0.30-0.49 | Moderate flow | JP → TH-BANGKOK, AR → BR-RIO |
| 0.15-0.29 | Minor flow | NG → ET-LALIBELA, KH → JP-TOKYO |

Currently: **~6,000+ travel patterns**.

## School Holidays

School holidays are a key driver of travel demand. Packed Places uses a multi-provider system:

### Provider hierarchy (checked in order)
1. **Manual JSON** — Hand-curated files in `src/lib/data/manual-holidays/` for countries/regions without API coverage
2. **OpenHolidaysAPI** — REST API covering 33 European countries with subdivision-level school holiday data
3. **date-holidays npm** — Library covering 199 countries, used for countries not in OpenHolidaysAPI

### Coverage
| Provider | Countries | Notes |
|----------|-----------|-------|
| Manual JSON | AT (9 Bundesländer), US (5 regions), CN (4 regions), JP (3 regions), IN (2 regions) | Overrides API providers; AT overrides OpenHolidaysAPI due to missing Semesterferien/Sommerferien |
| OpenHolidaysAPI | BE, BG, CH, CZ, DE, EE, ES, FR, GR, HR, HU, IE, IT, LI, LT, LU, ME, NL, PL, PT, RO, RS, SI, SK | Subdivision-level where applicable |
| date-holidays | GB, DK, SE, NO, FI, IS, LV, IL, KR, TH, VN, ID, MY, SG, PH, AU, NZ, ZA, KE, CA, MX, BR, AR, CO, CL, PE, ... | Country or state level |

### Holiday data structure
Each holiday record has:
- **regionId**: Which source region this applies to
- **name**: Holiday name (e.g., "Summer Break", "Golden Week")
- **startDate / endDate**: Date range
- **year**: Calendar year

## Major Events

Major events (Olympics, FIFA World Cup, Oktoberfest, festivals, Grand Slams, etc.) are a separate crowdedness factor. Unlike school holidays which boost source regions, events boost destinations directly.

### Event data structure
Each event has:
- **id**: Unique identifier
- **name**: Display name (e.g., "FIFA World Cup")
- **destinationId**: Which destination is affected
- **startDate / endDate**: Event date range
- **year**: Calendar year
- **trafficBoost**: 0.1–1.0 boost factor (multiplied by destination's basePopularity)
- **category**: `"sports"`, `"festival"`, `"cultural"`, `"music"`, or `"trade"`

### Event types
- **Recurring events** (~40): Annual events with fixed or approximate dates (Oktoberfest, Grand Slams, Carnival, etc.). Materialized into year-specific rows during seeding.
- **One-time events** (~15): Events tied to a specific year (Olympics 2026, FIFA World Cup 2026, etc.)

### Boost scale
| Boost | Meaning | Example |
|-------|---------|---------|
| 0.8–1.0 | Massive global event | Summer Olympics, FIFA World Cup |
| 0.5–0.7 | Major event | Oktoberfest, Carnival Rio, Winter Olympics |
| 0.3–0.4 | Significant event | F1 Grand Prix, Edinburgh Fringe, King's Day |
| 0.1–0.2 | Moderate event | Grand Slams, Burning Man, Art Basel |

Currently: **50+ events** across sports, festivals, cultural events, music festivals, and trade shows.

## Heatmap Computation

The heatmap shows **crowdedness** (how packed a place feels), not raw traffic volume. This is achieved by dividing raw traffic scores by each destination's seasonal capacity.

### Algorithm
```
For each destination D, for each week W:
  rawScore = 0
  For each source region R with a travel pattern to D:
    1. Determine season from R's hemisphere perspective
    2. Check if pattern's season matches (null = always matches)
    3. Check if R is on school holiday during week W
    4. holidayBoost = isOnHoliday ? 1.5 : 1.0
    5. contribution = pattern.weight * (R.population / maxPopulation) * holidayBoost
    6. rawScore += contribution
  For each active event E at destination D during week W:       ← NEW
    7. eventBoost = E.trafficBoost * D.basePopularity
    8. rawScore += eventBoost
  capacity = getSeasonalCapacity(D.category, D.lat, D.seasonality, W, D.capacityOverride)
  congestion = rawScore / capacity
  Normalize congestion to 0-1 range across all destinations for week W
```

### Capacity system

Each destination category has a default capacity with seasonal variation (`src/lib/data/capacity.ts`):

| Category | Peak | Off-Peak | Notes |
|----------|------|----------|-------|
| city | 5.0 | 4.0 | Massive year-round infrastructure |
| cultural | 2.5 | 2.0 | Similar to cities |
| beach | 2.0 | 0.5 | Highly seasonal infrastructure |
| tropical | 1.5 | 1.0 | Year-round but limited |
| ski | 1.5 | 0.3 | Limited beds, very low summer |
| nature | 1.2 | 0.6 | Moderate, some year-round |
| lake | 1.0 | 0.3 | Seasonal |
| island | 1.0 | 0.4 | Limited by geography |
| safari | 0.8 | 0.3 | Very limited lodges |
| mountain | 0.6 | 0.3 | Very limited |
| desert | 0.5 | 0.2 | Extremely limited |

**Seasonal capacity selection:**
- Destination hemisphere is determined from latitude (>15°N = northern, <-15° = southern, else equatorial)
- If destination's `seasonality` matches the current season at its location → peak capacity
- If opposite season → off-peak capacity
- If shoulder season or year-round → average of peak and off-peak

**Capacity overrides:** Outlier destinations can set `capacityOverride` to replace the category peak. The off-peak is scaled proportionally. Current overrides: Bangkok (8.0), NYC (8.0), London (7.0), Paris (7.0), Santorini (0.4), Maldives (0.3).

### Key design decisions
- **Congestion over traffic**: A score of 0.8 means "this place is packed relative to its capacity", not "lots of people go here". Tyrol ski resorts show red with moderate traffic; Bangkok stays green with high traffic
- **Season is relative to the source**: A "winter" pattern for AU-NSW means June-August (southern winter), while for DE-BW it means December-February
- **Population weighting**: Larger source regions contribute proportionally more
- **Holiday boost**: 1.5x multiplier when a source region is on school holiday
- **Event boost**: Major events add traffic directly to destinations, scaled by the event's trafficBoost and the destination's basePopularity
- **Normalization**: Congestion scores are normalized per-week so the heatmap always shows relative crowdedness

### Caching
Results are precomputed for 3 years (current + 2) and stored in the `heatmap_cache` database table, keyed by `(destinationId, year, week)`. The API reads directly from this cache.
