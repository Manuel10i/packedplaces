import type { Destination } from "@/types";
import { destinations } from "@/lib/data";

/** URL-safe slug from a destination name (diacritics stripped). */
export function baseSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Build a deterministic, collision-free slug for every destination.
// Collisions get the country code appended, then a numeric suffix if still taken.
const bySlug = new Map<string, Destination>();
const slugByDestId = new Map<string, string>();

for (const d of destinations) {
  let slug = baseSlug(d.name);
  if (bySlug.has(slug)) slug = `${slug}-${d.country.toLowerCase()}`;
  let n = 2;
  while (bySlug.has(slug)) slug = `${baseSlug(d.name)}-${d.country.toLowerCase()}-${n++}`;
  bySlug.set(slug, d);
  slugByDestId.set(d.id, slug);
}

export function allDestinationSlugs(): string[] {
  return [...bySlug.keys()];
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return bySlug.get(slug);
}

export function slugForDestination(d: Destination): string {
  return slugByDestId.get(d.id) ?? baseSlug(d.name);
}

export type CrowdLevel = "high" | "medium" | "low";

/**
 * Month-level crowd level, derived from the destination's peakMonths using the
 * same peak / adjacent / off-season logic as getAttractiveness in capacity.ts
 * (peak -> high, month next to a peak -> medium, otherwise -> low).
 */
export function monthCrowdLevel(peakMonths: number[], month: number): CrowdLevel {
  if (peakMonths.length === 12) return "high";
  if (peakMonths.includes(month)) return "high";
  const prev = month === 1 ? 12 : month - 1;
  const next = month === 12 ? 1 : month + 1;
  if (peakMonths.includes(prev) || peakMonths.includes(next)) return "medium";
  return "low";
}

/** Months (1-12) at each crowd level for a destination. */
export function crowdByMonth(peakMonths: number[]): CrowdLevel[] {
  return Array.from({ length: 12 }, (_, i) => monthCrowdLevel(peakMonths, i + 1));
}
