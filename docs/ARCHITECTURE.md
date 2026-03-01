# Architecture

Technical system architecture for Packed Places.

## Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Map**: MapLibre GL JS with vector tiles
- **State**: Zustand (global), SWR (data fetching)
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with PostGIS (via Docker), Drizzle ORM
- **Styling**: Tailwind CSS

## Data Pipeline

```
Static data files (TypeScript)
    │
    ▼
[seed.ts] ──────────────► PostgreSQL
    │                      ├── source_regions
    │                      ├── destinations
    │                      └── travel_patterns
    │
[ingest-holidays.ts] ───► PostgreSQL
    │                      └── school_holidays
    │                          (fetched from 3 providers)
    │
[precompute-heatmap.ts] ► PostgreSQL
                           └── heatmap_cache
                               (pre-computed per week/year)
    │
    ▼
API Route: /api/heatmap?year=2026&week=15
    │
    ▼
MapLibre GL (circle + heatmap layers)
```

## Directory Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (map + controls)
│   └── api/
│       └── heatmap/
│           └── route.ts    # Heatmap API endpoint
├── components/
│   ├── controls/
│   │   ├── HolidayPanel.tsx   # Holiday info sidebar
│   │   ├── WeekSlider.tsx     # Week selection slider
│   │   └── YearSelector.tsx   # Year tab selector
│   └── map/
│       └── MapView.tsx        # MapLibre GL map component
├── lib/
│   ├── data/
│   │   ├── index.ts           # Aggregated exports
│   │   ├── countries.ts       # Country metadata (name, flag, region)
│   │   ├── capacity.ts        # Category capacity table + seasonal capacity helper
│   │   ├── regions/           # Source region definitions per world region
│   │   ├── destinations/      # Destination definitions per world region
│   │   ├── patterns/          # Travel pattern definitions per world region
│   │   └── manual-holidays/   # Manual holiday JSON files
│   ├── db/
│   │   ├── schema.ts          # Drizzle schema
│   │   ├── index.ts           # Database connection
│   │   └── seed.ts            # Database seeder
│   ├── services/
│   │   ├── heatmap.ts         # Heatmap computation engine
│   │   ├── holidays.ts        # Composite holiday service
│   │   └── holiday-providers/
│   │       ├── types.ts       # Provider interface
│   │       ├── openholidays.ts      # OpenHolidaysAPI provider
│   │       ├── date-holidays-provider.ts  # date-holidays npm provider
│   │       ├── manual-provider.ts   # Manual JSON provider
│   │       └── index.ts
│   └── store.ts               # Zustand store
├── types/
│   └── index.ts               # Shared TypeScript types
scripts/
├── ingest-holidays.ts         # Holiday ingestion script
└── precompute-heatmap.ts      # Heatmap precomputation script
drizzle/
└── *.sql                      # Database migrations
```

## Database Schema

### source_regions
| Column | Type | Description |
|--------|------|-------------|
| id | varchar(32) PK | Region identifier |
| country_code | varchar(4) | ISO country code |
| subdivision_code | varchar(16) | Subdivision/macro-region code |
| name | varchar(128) | Display name |
| population | integer | Approximate population |
| lat, lng | double | Centroid coordinates |
| hemisphere | varchar(16) | northern, southern, equatorial |
| region | varchar(16) | World region grouping |

### destinations
| Column | Type | Description |
|--------|------|-------------|
| id | varchar(32) PK | Destination identifier |
| name | varchar(128) | Display name |
| country | varchar(4) | ISO country code |
| lat, lng | double | Point coordinates |
| category | varchar(16) | ski, beach, city, etc. |
| seasonality | varchar(16) | winter, summer, year-round |
| base_popularity | double | 0-1 popularity score |
| region | varchar(16) | World region grouping |

### travel_patterns
| Column | Type | Description |
|--------|------|-------------|
| id | serial PK | Auto-increment ID |
| source_region_id | varchar(32) FK | → source_regions.id |
| destination_id | varchar(32) FK | → destinations.id |
| weight | double | 0-1 flow strength |
| season | varchar(16) | winter, summer, or null |

### school_holidays
| Column | Type | Description |
|--------|------|-------------|
| id | serial PK | Auto-increment ID |
| region_id | varchar(32) FK | → source_regions.id |
| name | varchar(256) | Holiday name |
| start_date | date | Start of holiday |
| end_date | date | End of holiday |
| year | integer | Calendar year |

### heatmap_cache
| Column | Type | Description |
|--------|------|-------------|
| id | serial PK | Auto-increment ID |
| destination_id | varchar(32) FK | → destinations.id |
| year | integer | Year |
| week | integer | ISO week number |
| score | double | 0-1 crowdedness score (congestion-normalized) |
| contributing_sources | jsonb | Array of contributing regions |

## API

### GET /api/heatmap

Query parameters:
- `year` (required): Year (e.g., 2026)
- `week` (required): ISO week number (1-52)

Response: GeoJSON FeatureCollection with destination points, each having a `busynessScore` (capacity-normalized crowdedness) and `contributingSources` in properties.

## Hemisphere-Aware Seasonality

The season for a given week depends on the source region's hemisphere:

| Week Range | Northern | Southern | Equatorial |
|------------|----------|----------|------------|
| 44-14 | Winter | Summer | Shoulder |
| 22-36 | Summer | Winter | Shoulder |
| 15-21, 37-43 | Shoulder | Shoulder | Shoulder |

This ensures that Australian winter holidays (June-July) correctly match "winter" travel patterns, even though it's summer in the northern hemisphere.
