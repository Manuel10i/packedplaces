CREATE TABLE "major_events" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"destination_id" varchar(64) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"year" integer NOT NULL,
	"traffic_boost" real NOT NULL,
	"category" varchar(16) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "major_events" ADD CONSTRAINT "major_events_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE no action ON UPDATE no action;