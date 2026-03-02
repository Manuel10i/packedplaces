/**
 * Build script: downloads Natural Earth admin-1 + admin-0 GeoJSON (10m),
 * matches each of our source region IDs to boundary features,
 * merges multi-feature regions, simplifies, and outputs a single GeoJSON file.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.scripts.json scripts/build-region-boundaries.ts
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { regionBoundaryMapping, type BoundaryMapping } from "../src/lib/data/region-boundary-mapping";
import { featureCollection } from "@turf/helpers";
import type { Feature, Polygon, MultiPolygon } from "geojson";
import turfSimplify from "@turf/simplify";
import turfTruncate from "@turf/truncate";
import turfUnion from "@turf/union";

type PolyFeature = Feature<Polygon | MultiPolygon>;

// Use 10m (highest resolution) for full global admin-1 coverage
const NE_ADMIN1_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson";
const NE_ADMIN0_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson";

async function fetchGeoJSON(url: string): Promise<GeoJSON.FeatureCollection> {
  console.log(`Fetching ${url.split("/").pop()}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json() as Promise<GeoJSON.FeatureCollection>;
}

/**
 * Build an index of admin-1 features keyed by their iso_3166_2 code.
 */
function indexAdmin1(fc: GeoJSON.FeatureCollection): Map<string, PolyFeature> {
  const map = new Map<string, PolyFeature>();
  for (const f of fc.features) {
    const code = f.properties?.iso_3166_2 as string | undefined;
    if (code && (f.geometry.type === "Polygon" || f.geometry.type === "MultiPolygon")) {
      map.set(code, f as PolyFeature);
    }
  }
  return map;
}

/**
 * Build an index of admin-1 features grouped by their ISO country code (iso_a2).
 */
function indexAdmin1ByCountry(fc: GeoJSON.FeatureCollection): Map<string, PolyFeature[]> {
  const map = new Map<string, PolyFeature[]>();
  for (const f of fc.features) {
    const iso = (f.properties?.iso_a2 as string) ?? "";
    if (!iso || iso === "-99" || iso === "-1") continue;
    if (f.geometry.type !== "Polygon" && f.geometry.type !== "MultiPolygon") continue;
    const list = map.get(iso) ?? [];
    list.push(f as PolyFeature);
    map.set(iso, list);
  }
  return map;
}

/**
 * Build an index of admin-1 features grouped by their geonunit property.
 */
function indexAdmin1ByGeonunit(fc: GeoJSON.FeatureCollection): Map<string, PolyFeature[]> {
  const map = new Map<string, PolyFeature[]>();
  for (const f of fc.features) {
    const gu = f.properties?.geonunit as string | undefined;
    if (!gu) continue;
    if (f.geometry.type !== "Polygon" && f.geometry.type !== "MultiPolygon") continue;
    const list = map.get(gu) ?? [];
    list.push(f as PolyFeature);
    map.set(gu, list);
  }
  return map;
}

/**
 * Build an index of admin-0 features keyed by ISO_A2.
 */
function indexAdmin0(fc: GeoJSON.FeatureCollection): Map<string, PolyFeature> {
  const map = new Map<string, PolyFeature>();
  for (const f of fc.features) {
    const iso = (f.properties?.ISO_A2 as string) ?? (f.properties?.iso_a2 as string) ?? "";
    if (!iso || iso === "-99" || iso === "-1") continue;
    if (f.geometry.type !== "Polygon" && f.geometry.type !== "MultiPolygon") continue;
    map.set(iso, f as PolyFeature);
  }
  return map;
}

/**
 * Merge multiple polygon features into one using turf/union.
 */
function mergeFeatures(features: PolyFeature[]): PolyFeature | null {
  if (features.length === 0) return null;
  if (features.length === 1) return features[0];

  let merged: PolyFeature = features[0];
  for (let i = 1; i < features.length; i++) {
    const result = turfUnion(featureCollection([merged, features[i]]));
    if (result) merged = result as PolyFeature;
  }
  return merged;
}

function resolveMapping(
  mapping: BoundaryMapping,
  admin1Index: Map<string, PolyFeature>,
  admin1ByCountry: Map<string, PolyFeature[]>,
  admin1ByGeonunit: Map<string, PolyFeature[]>,
  admin0Index: Map<string, PolyFeature>,
  admin1FC: GeoJSON.FeatureCollection,
): PolyFeature | null {
  switch (mapping.type) {
    case "admin1": {
      return admin1Index.get(mapping.iso3166_2) ?? null;
    }
    case "admin1s": {
      const features: PolyFeature[] = [];
      for (const code of mapping.iso3166_2) {
        const f = admin1Index.get(code);
        if (f) features.push(f);
      }
      return mergeFeatures(features);
    }
    case "country": {
      // Try admin-1 merge first (better boundaries), fall back to admin-0
      const admin1Features = admin1ByCountry.get(mapping.isoA2);
      if (admin1Features?.length) {
        return mergeFeatures(admin1Features);
      }
      return admin0Index.get(mapping.isoA2) ?? null;
    }
    case "geonunit": {
      const features = admin1ByGeonunit.get(mapping.geonunit);
      if (features?.length) {
        return mergeFeatures(features);
      }
      return null;
    }
    case "neRegions": {
      // Match admin-1 features by iso_a2 + region property
      const regionSet = new Set(mapping.regions);
      const features: PolyFeature[] = [];
      for (const f of admin1FC.features) {
        if (f.properties?.iso_a2 !== mapping.isoA2) continue;
        if (!regionSet.has(f.properties?.region as string)) continue;
        if (f.geometry.type !== "Polygon" && f.geometry.type !== "MultiPolygon") continue;
        features.push(f as PolyFeature);
      }
      return mergeFeatures(features);
    }
  }
}

async function main() {
  const [admin1FC, admin0FC] = await Promise.all([
    fetchGeoJSON(NE_ADMIN1_URL),
    fetchGeoJSON(NE_ADMIN0_URL),
  ]);

  console.log(`Admin-1 features: ${admin1FC.features.length}`);
  console.log(`Admin-0 features: ${admin0FC.features.length}`);

  const admin1Index = indexAdmin1(admin1FC);
  const admin1ByCountry = indexAdmin1ByCountry(admin1FC);
  const admin1ByGeonunit = indexAdmin1ByGeonunit(admin1FC);
  const admin0Index = indexAdmin0(admin0FC);

  console.log(`Admin-1 indexed codes: ${admin1Index.size}`);
  console.log(`Admin-1 countries: ${admin1ByCountry.size}`);
  console.log(`Admin-1 geounits: ${admin1ByGeonunit.size}`);
  console.log(`Admin-0 indexed codes: ${admin0Index.size}`);

  const outputFeatures: PolyFeature[] = [];
  const regionIds = Object.keys(regionBoundaryMapping);
  let matched = 0;
  let unmatched = 0;

  for (const regionId of regionIds) {
    const mapping = regionBoundaryMapping[regionId];
    const feature = resolveMapping(mapping, admin1Index, admin1ByCountry, admin1ByGeonunit, admin0Index, admin1FC);

    if (!feature) {
      console.warn(`  ✗ No match for ${regionId}`);
      unmatched++;
      continue;
    }

    // Simplify geometry
    const simplified = turfSimplify(feature, { tolerance: 0.012, highQuality: true });

    // Truncate coordinates to 3 decimal places
    const truncated = turfTruncate(simplified, { precision: 3 });

    // Set regionId property
    (truncated as PolyFeature).properties = { regionId };

    outputFeatures.push(truncated as PolyFeature);
    matched++;
  }

  console.log(`\nMatched: ${matched}/${regionIds.length} (unmatched: ${unmatched})`);

  const output = featureCollection(outputFeatures);
  const json = JSON.stringify(output);

  const outDir = resolve(__dirname, "../public/data");
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, "region-boundaries.geojson");
  writeFileSync(outPath, json);

  const sizeMB = (Buffer.byteLength(json) / 1024 / 1024).toFixed(2);
  console.log(`Written to ${outPath} (${sizeMB} MB)`);
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
