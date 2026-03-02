# Packed Places

Visualize tourist crowdedness for 700+ destinations worldwide, week by week, powered by school holiday data and major events from 100+ countries.

**Live:** [packedplaces.com](https://packedplaces.com) | [map.packedplaces.com](https://map.packedplaces.com)

## Key Stats

- **127** source regions across **100+** countries
- **700+** destinations across 90+ countries
- **6,000+** travel patterns connecting regions to destinations
- **50+** major events (Olympics, FIFA World Cup, Oktoberfest, Grand Slams, and more)
- **3** holiday data providers (manual, OpenHolidaysAPI, date-holidays)

## Tech Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · MapLibre GL · PostgreSQL + PostGIS · Drizzle ORM

## Getting Started

### Prerequisites

- Node.js 18+
- Docker

### Setup

```bash
# Start PostgreSQL
docker compose up -d

# Install dependencies
npm install

# Set up database (migrate, seed, ingest holidays, precompute heatmap)
npm run db:setup

# Start dev server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the marketing page, or [http://localhost:3000/map](http://localhost:3000/map) for the interactive map.

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — System design, database schema, API
- [Data Sources](docs/DATA-SOURCES.md) — Where the data comes from and how it's processed
- [Holiday Providers](docs/HOLIDAY-PROVIDERS.md) — Multi-provider holiday system
- [Adding Regions](docs/ADDING-REGIONS.md) — Contributor guide for adding new regions

## Contributing

Contributions are welcome! The easiest way to contribute is by adding new regions, destinations, and travel patterns. See the [Adding Regions](docs/ADDING-REGIONS.md) guide.

## License

MIT
