import { destinations as allDestinations } from "@/lib/data/destinations";
import { geoPlaces, cityAliases } from "@/lib/data/geo-search";
import { getCountryFlag } from "@/lib/data";
import type { Destination } from "@/types";

/**
 * Client-side search index over destinations, countries and capitals.
 * Built once at module load: slim and diacritic-folded. Specific destinations
 * rank first (by popularity), then capitals, then countries.
 */

export type SearchMatch = {
  id: string;
  name: string;
  /** Curated German exonym (Wien, München, …) when one exists. */
  nameDe?: string;
  label: string;
  lat: number;
  lng: number;
  zoom: number;
  /** Set for real destinations (usable for busyness lookups); absent for geo places. */
  destinationId?: string;
};

/** Name to display for a match in the given UI locale. */
export function matchDisplayName(m: SearchMatch, locale: string): string {
  return locale === "de" && m.nameDe ? m.nameDe : m.name;
}

export const normalizeQuery = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

type Indexed = SearchMatch & { norms: string[] };

// Alternate search names for a place: localized names (from geoPlaces.aliases,
// e.g. Deutschland for Germany) plus curated city exonyms (e.g. Wien for Vienna).
function buildNorms(name: string, extra: string[] = []): string[] {
  const aliases = cityAliases[normalizeQuery(name)] ?? [];
  return [...new Set([name, ...extra, ...aliases].map(normalizeQuery))];
}

const destinationMatches: Indexed[] = allDestinations
  .slice()
  .sort((a: Destination, b: Destination) => b.basePopularity - a.basePopularity)
  .map((d: Destination) => ({
    id: d.id,
    destinationId: d.id,
    name: d.name,
    nameDe: cityAliases[normalizeQuery(d.name).replace(/[^a-z0-9]/g, "")]?.[0],
    label: getCountryFlag(d.country) || d.country,
    lat: d.lat,
    lng: d.lng,
    zoom: 8,
    norms: buildNorms(d.name),
  }));

// Countries + capitals, skipping any whose name already exists as a destination.
const seen = new Set(destinationMatches.map((d) => normalizeQuery(d.name)));
const geoMatches: Indexed[] = geoPlaces
  .filter((p) => !seen.has(normalizeQuery(p.name)))
  .map((p) => ({
    id: `${p.kind}:${p.cc}`,
    name: p.name,
    label: getCountryFlag(p.cc) || p.cc,
    lat: p.lat,
    lng: p.lng,
    zoom: p.zoom,
    norms: buildNorms(p.name, p.aliases ?? []),
  }));

const INDEX: Indexed[] = [...destinationMatches, ...geoMatches];

export const MIN_QUERY = 2;

/** Search everything: destinations, capitals, countries. */
export function searchPlaces(query: string, limit = 8): SearchMatch[] {
  const q = normalizeQuery(query);
  if (q.length < MIN_QUERY) return [];
  return INDEX.filter((d) => d.norms.some((n) => n.includes(q))).slice(0, limit);
}

/** Search only real destinations (for busyness features). */
export function searchDestinations(query: string, limit = 8): SearchMatch[] {
  const q = normalizeQuery(query);
  if (q.length < MIN_QUERY) return [];
  return destinationMatches.filter((d) => d.norms.some((n) => n.includes(q))).slice(0, limit);
}
