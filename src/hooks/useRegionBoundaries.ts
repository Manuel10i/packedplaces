import useSWR from "swr";

async function fetchGeoJSON(url: string): Promise<GeoJSON.FeatureCollection> {
  const res = await fetch(url);
  return res.json() as Promise<GeoJSON.FeatureCollection>;
}

export function useRegionBoundaries() {
  const { data, error, isLoading } = useSWR(
    "/data/region-boundaries.geojson",
    fetchGeoJSON,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  );
  return { data, error, isLoading };
}
