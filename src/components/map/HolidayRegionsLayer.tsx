"use client";

import { useMemo } from "react";
import { Source, Layer } from "react-map-gl/maplibre";
import { useMapStore } from "@/store/useMapStore";
import { useRegionBoundaries } from "@/hooks/useRegionBoundaries";

interface RegionOnHoliday {
  regionId: string;
  regionName: string;
  holidayName: string;
  startDate: string;
  endDate: string;
}

interface Props {
  regionsOnHoliday: RegionOnHoliday[] | undefined;
}

const emptyGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

export function HolidayRegionsLayer({ regionsOnHoliday }: Props) {
  const showHolidayRegions = useMapStore((s) => s.showHolidayRegions);
  const { data: boundaries } = useRegionBoundaries();

  const filteredGeoJSON = useMemo(() => {
    if (!boundaries || !regionsOnHoliday?.length) return emptyGeoJSON;

    const holidayIds = new Set(regionsOnHoliday.map((r) => r.regionId));
    const features = boundaries.features.filter(
      (f) => f.properties?.regionId && holidayIds.has(f.properties.regionId),
    );

    return { type: "FeatureCollection" as const, features };
  }, [boundaries, regionsOnHoliday]);

  // Always mount the source/layers so they stay below heatmap in the layer stack.
  // Control visibility via opacity instead of unmounting.
  return (
    <Source id="holiday-regions-source" type="geojson" data={filteredGeoJSON}>
      <Layer
        id="holiday-regions-fill"
        type="fill"
        paint={{
          "fill-color": "#4f46e5",
          "fill-opacity": showHolidayRegions ? 0.25 : 0,
        }}
      />
      <Layer
        id="holiday-regions-outline"
        type="line"
        paint={{
          "line-color": "#4f46e5",
          "line-width": 1,
          "line-opacity": showHolidayRegions ? 0.5 : 0,
        }}
      />
    </Source>
  );
}
