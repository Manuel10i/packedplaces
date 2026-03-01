import type { WorldRegion } from "@/types";

export interface RegionBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export const REGION_BOUNDS: Record<WorldRegion, RegionBounds> = {
  europe: { north: 72, south: 35, east: 45, west: -25 },
  "middle-east": { north: 42, south: 12, east: 60, west: 25 },
  asia: { north: 55, south: -10, east: 150, west: 60 },
  americas: { north: 72, south: -56, east: -35, west: -170 },
  oceania: { north: 0, south: -50, east: 180, west: 110 },
  africa: { north: 37, south: -35, east: 55, west: -20 },
};

export function boundsOverlap(
  viewport: { north: number; south: number; east: number; west: number },
  region: RegionBounds,
): boolean {
  return !(
    viewport.south > region.north ||
    viewport.north < region.south ||
    viewport.west > region.east ||
    viewport.east < region.west
  );
}
