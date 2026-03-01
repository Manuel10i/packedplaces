import {
  pgTable,
  varchar,
  integer,
  real,
  date,
  jsonb,
  primaryKey,
  serial,
} from "drizzle-orm/pg-core";

export const sourceRegions = pgTable("source_regions", {
  id: varchar("id", { length: 32 }).primaryKey(),
  countryCode: varchar("country_code", { length: 2 }).notNull(),
  subdivisionCode: varchar("subdivision_code", { length: 32 }).notNull(),
  name: varchar("name", { length: 128 }).notNull(),
  population: integer("population").notNull(),
  lat: real("lat").notNull(),
  lng: real("lng").notNull(),
  hemisphere: varchar("hemisphere", { length: 16 }).notNull().default("northern"),
  region: varchar("region", { length: 16 }).notNull().default("europe"),
});

export const destinations = pgTable("destinations", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  country: varchar("country", { length: 2 }).notNull(),
  lat: real("lat").notNull(),
  lng: real("lng").notNull(),
  category: varchar("category", { length: 16 }).notNull(),
  seasonality: varchar("seasonality", { length: 16 }).notNull(),
  basePopularity: real("base_popularity").notNull().default(1.0),
  region: varchar("region", { length: 16 }).notNull().default("europe"),
});

export const schoolHolidays = pgTable(
  "school_holidays",
  {
    id: serial("id").primaryKey(),
    sourceRegionId: varchar("source_region_id", { length: 32 })
      .notNull()
      .references(() => sourceRegions.id),
    name: varchar("name", { length: 128 }).notNull(),
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
    year: integer("year").notNull(),
  },
);

export const travelPatterns = pgTable(
  "travel_patterns",
  {
    id: serial("id").primaryKey(),
    sourceRegionId: varchar("source_region_id", { length: 32 })
      .notNull()
      .references(() => sourceRegions.id),
    destinationId: varchar("destination_id", { length: 64 })
      .notNull()
      .references(() => destinations.id),
    weight: real("weight").notNull(),
    season: varchar("season", { length: 16 }),
  },
);

export const majorEvents = pgTable(
  "major_events",
  {
    id: varchar("id", { length: 64 }).primaryKey(),
    name: varchar("name", { length: 128 }).notNull(),
    destinationId: varchar("destination_id", { length: 64 })
      .notNull()
      .references(() => destinations.id),
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
    year: integer("year").notNull(),
    trafficBoost: real("traffic_boost").notNull(),
    category: varchar("category", { length: 16 }).notNull(),
  },
);

export const heatmapCache = pgTable(
  "heatmap_cache",
  {
    destinationId: varchar("destination_id", { length: 64 })
      .notNull()
      .references(() => destinations.id),
    year: integer("year").notNull(),
    week: integer("week").notNull(),
    busynessScore: real("busyness_score").notNull(),
    contributingSources: jsonb("contributing_sources").notNull().default([]),
    lat: real("lat").notNull(),
    lng: real("lng").notNull(),
    destinationName: varchar("destination_name", { length: 128 }).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.destinationId, table.year, table.week] }),
  ],
);
