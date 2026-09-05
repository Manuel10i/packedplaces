import { destinations } from "@/lib/data/destinations";
import type { Destination } from "@/types";

interface Options {
  limit?: number;
}

function haversineKm(
  aLat: number,
  aLng: number,
  bLat: number,
  bLng: number,
): number {
  const R = 6371;
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLng = ((bLng - aLng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) *
      Math.cos((bLat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/**
 * Nearest destinations to the target by great-circle distance, any category.
 * Unlike quietAlternatives (which only fires for a busy destination that has a
 * strictly calmer same-category peer), this always has results as long as the
 * dataset holds more than one destination, so every destination page can offer
 * an onward-exploration path instead of dead-ending. Pure and deterministic,
 * safe at build time and in the client bundle.
 */
export function nearbyDestinations(
  destinationId: string,
  { limit = 6 }: Options = {},
): Destination[] {
  const target = destinations.find((d) => d.id === destinationId);
  if (!target) return [];

  return destinations
    .filter((d) => d.id !== target.id)
    .map((d) => ({
      destination: d,
      distanceKm: haversineKm(target.lat, target.lng, d.lat, d.lng),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit)
    .map((c) => c.destination);
}
