ALTER TABLE "destinations" ADD COLUMN "region" varchar(16) DEFAULT 'europe' NOT NULL;--> statement-breakpoint
ALTER TABLE "source_regions" ADD COLUMN "hemisphere" varchar(16) DEFAULT 'northern' NOT NULL;--> statement-breakpoint
ALTER TABLE "source_regions" ADD COLUMN "region" varchar(16) DEFAULT 'europe' NOT NULL;