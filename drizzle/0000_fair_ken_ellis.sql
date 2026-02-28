CREATE TABLE "destinations" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"country" varchar(2) NOT NULL,
	"lat" real NOT NULL,
	"lng" real NOT NULL,
	"category" varchar(16) NOT NULL,
	"seasonality" varchar(16) NOT NULL,
	"base_popularity" real DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "heatmap_cache" (
	"destination_id" varchar(64) NOT NULL,
	"year" integer NOT NULL,
	"week" integer NOT NULL,
	"busyness_score" real NOT NULL,
	"contributing_sources" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"lat" real NOT NULL,
	"lng" real NOT NULL,
	"destination_name" varchar(128) NOT NULL,
	CONSTRAINT "heatmap_cache_destination_id_year_week_pk" PRIMARY KEY("destination_id","year","week")
);
--> statement-breakpoint
CREATE TABLE "school_holidays" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_region_id" varchar(32) NOT NULL,
	"name" varchar(128) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"year" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "source_regions" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"country_code" varchar(2) NOT NULL,
	"subdivision_code" varchar(32) NOT NULL,
	"name" varchar(128) NOT NULL,
	"population" integer NOT NULL,
	"lat" real NOT NULL,
	"lng" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "travel_patterns" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_region_id" varchar(32) NOT NULL,
	"destination_id" varchar(64) NOT NULL,
	"weight" real NOT NULL,
	"season" varchar(16)
);
--> statement-breakpoint
ALTER TABLE "heatmap_cache" ADD CONSTRAINT "heatmap_cache_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "school_holidays" ADD CONSTRAINT "school_holidays_source_region_id_source_regions_id_fk" FOREIGN KEY ("source_region_id") REFERENCES "public"."source_regions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "travel_patterns" ADD CONSTRAINT "travel_patterns_source_region_id_source_regions_id_fk" FOREIGN KEY ("source_region_id") REFERENCES "public"."source_regions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "travel_patterns" ADD CONSTRAINT "travel_patterns_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE no action ON UPDATE no action;