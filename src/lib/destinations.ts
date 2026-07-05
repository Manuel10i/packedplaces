import type { Destination } from "@/types";
import { destinations } from "@/lib/data";
import { cityAliases } from "@/lib/data/geo-search";
import { locales } from "@/i18n/config";

/** Languages that can own a dedicated destination slug. */
export type SlugLocale = "en" | "de";

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

/**
 * German URL-safe slug: expand umlauts/ß the German way (ü->ue, ß->ss) before
 * slugifying, so "München" -> "muenchen" rather than "munchen".
 */
export function germanSlug(name: string): string {
  return baseSlug(
    name
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/Ä/g, "Ae")
      .replace(/Ö/g, "Oe")
      .replace(/Ü/g, "Ue")
      .replace(/ß/g, "ss"),
  );
}

/** Normalized key used to look a destination name up in cityAliases. */
function aliasKey(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export interface SlugEntry {
  destination: Destination;
  /** Language this specific slug represents (drives content + hreflang). */
  locale: SlugLocale;
  /** Name to render for this slug (English name, or German exonym for de slugs). */
  displayName: string;
}

/** Per-locale slug for a single destination, e.g. { en: "vienna", de: "wien" }. */
export type LocalizedSlugs = Partial<Record<SlugLocale, string>>;

// Build a deterministic, collision-free slug for every destination.
// English (primary) slugs come first; German exonym slugs are layered on top so
// German city names (Wien, München, ...) resolve to the same destination page.
const bySlug = new Map<string, SlugEntry>();
const slugByDestId = new Map<string, string>();
const localizedByDestId = new Map<string, LocalizedSlugs>();

// Pass 1: primary English slugs.
// Collisions get the country code appended, then a numeric suffix if still taken.
for (const d of destinations) {
  let slug = baseSlug(d.name);
  if (bySlug.has(slug)) slug = `${slug}-${d.country.toLowerCase()}`;
  let n = 2;
  while (bySlug.has(slug)) slug = `${baseSlug(d.name)}-${d.country.toLowerCase()}-${n++}`;
  bySlug.set(slug, { destination: d, locale: "en", displayName: d.name });
  slugByDestId.set(d.id, slug);
  localizedByDestId.set(d.id, { en: slug });
}

// Pass 2: German exonym slugs (curated German city names -> English destination).
for (const d of destinations) {
  const exonym = cityAliases[aliasKey(d.name)]?.[0];
  if (!exonym) continue;
  let slug = germanSlug(exonym);
  // Skip when the exonym slugifies to the same string as the English slug
  // (e.g. Lyon), or when it would clobber another destination's slug.
  if (!slug || slug === slugByDestId.get(d.id)) continue;
  if (bySlug.has(slug)) {
    const withCc = `${slug}-${d.country.toLowerCase()}`;
    if (bySlug.has(withCc)) continue;
    slug = withCc;
  }
  bySlug.set(slug, { destination: d, locale: "de", displayName: exonym });
  localizedByDestId.get(d.id)!.de = slug;
}

export function allDestinationSlugs(): string[] {
  return [...bySlug.keys()];
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return bySlug.get(slug)?.destination;
}

/** Full slug metadata (destination + owning locale + display name). */
export function getSlugEntry(slug: string): SlugEntry | undefined {
  return bySlug.get(slug);
}

export function slugForDestination(d: Destination): string {
  return slugByDestId.get(d.id) ?? baseSlug(d.name);
}

/** Per-locale slugs for the destination that owns `slug`, for hreflang alternates. */
export function localizedSlugsForSlug(slug: string): LocalizedSlugs | undefined {
  const entry = bySlug.get(slug);
  if (!entry) return undefined;
  return localizedByDestId.get(entry.destination.id);
}

/**
 * hreflang cluster for a destination slug, as a map of hreflang value -> slug.
 * Every site locale plus x-default resolves to the primary (English) slug,
 * except German which resolves to its dedicated exonym slug when one exists.
 */
export function hreflangSlugMap(slug: string): Record<string, string> | undefined {
  const alts = localizedSlugsForSlug(slug);
  if (!alts?.en) return undefined;
  const map: Record<string, string> = { "x-default": alts.en };
  for (const l of locales) {
    map[l] = l === "de" && alts.de ? alts.de : alts.en;
  }
  return map;
}
