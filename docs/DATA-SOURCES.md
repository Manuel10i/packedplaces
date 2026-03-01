# Data Sources — How data is collected and used

This document describes the data that powers Busymap's heatmap, including where it comes from, how it's structured, and how it's processed.

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

Currently: **~127 source regions across 75 countries**.

## Destinations

Destinations are places people travel to. Each has:

- **id**: Unique identifier (e.g., `ES-MALLORCA`, `TH-PHUKET`, `US-HAWAII`)
- **country**: ISO country code
- **category**: One of `ski`, `beach`, `city`, `lake`, `nature`, `cultural`, `safari`, `island`, `mountain`, `desert`, `tropical`
- **seasonality**: `"winter"`, `"summer"`, or `"year-round"` — when the destination is in season
- **basePopularity**: 0-1 scale calibrated from UNWTO international arrival volumes. 1.0 = top global destinations (Paris, Bangkok), 0.3 = niche destinations
- **lat/lng**: Point coordinates for map display

### Selection criteria
1. UNWTO international arrival rankings (top destinations per receiving country)
2. Search interest data (Google Trends relative volume)
3. Geographic diversity within each country
4. Category coverage (each major category represented per region)

Currently: **~230 destinations across 67 countries**.

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

Currently: **~2,100+ travel patterns**.

## School Holidays

School holidays are a key driver of travel demand. Busymap uses a multi-provider system:

### Provider hierarchy (checked in order)
1. **Manual JSON** — Hand-curated files in `src/lib/data/manual-holidays/` for countries/regions without API coverage
2. **OpenHolidaysAPI** — REST API covering 33 European countries with subdivision-level school holiday data
3. **date-holidays npm** — Library covering 199 countries, used for countries not in OpenHolidaysAPI

### Coverage
| Provider | Countries | Notes |
|----------|-----------|-------|
| OpenHolidaysAPI | AT, BE, BG, CH, CZ, DE, EE, ES, FR, GR, HR, HU, IE, IT, LI, LT, LU, ME, NL, PL, PT, RO, RS, SI, SK | Subdivision-level where applicable |
| date-holidays | GB, DK, SE, NO, FI, IS, LV, IL, KR, TH, VN, ID, MY, SG, PH, AU, NZ, ZA, KE, CA, MX, BR, AR, CO, CL, PE, ... | Country or state level |
| Manual JSON | US (5 regions), CN (4 regions), JP (3 regions), IN (2 regions) | Approximate school calendar windows |

### Holiday data structure
Each holiday record has:
- **regionId**: Which source region this applies to
- **name**: Holiday name (e.g., "Summer Break", "Golden Week")
- **startDate / endDate**: Date range
- **year**: Calendar year

## Heatmap Computation

The heatmap score for each destination is computed per ISO week:

### Algorithm
```
For each destination D, for each week W:
  score = 0
  For each source region R with a travel pattern to D:
    1. Determine season from R's hemisphere perspective
    2. Check if pattern's season matches (null = always matches)
    3. Check if R is on school holiday during week W
    4. holidayBoost = isOnHoliday ? 1.5 : 1.0
    5. contribution = pattern.weight * (R.population / maxPopulation) * holidayBoost
    6. score += contribution
  Normalize score to 0-1 range across all destinations for week W
```

### Key design decisions
- **Season is relative to the source**: A "winter" pattern for AU-NSW means June-August (southern winter), while for DE-BW it means December-February
- **Population weighting**: Larger source regions contribute proportionally more
- **Holiday boost**: 1.5x multiplier when a source region is on school holiday
- **Normalization**: Scores are normalized per-week so the heatmap always shows relative busyness

### Caching
Results are precomputed for 3 years (current + 2) and stored in the `heatmap_cache` database table, keyed by `(destinationId, year, week)`. The API reads directly from this cache.
