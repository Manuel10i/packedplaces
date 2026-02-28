"use client";

import { Source, Layer } from "react-map-gl/maplibre";
import type { HeatmapResponse } from "@/types";

interface Props {
  data: HeatmapResponse | undefined;
}

const emptyGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

export function HeatmapLayer({ data }: Props) {
  const geojson = data ?? emptyGeoJSON;

  return (
    <Source id="heatmap-source" type="geojson" data={geojson}>
      {/* Heatmap layer - visible at lower zoom levels */}
      <Layer
        id="heatmap-layer"
        type="heatmap"
        paint={{
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "busynessScore"],
            0,
            0,
            0.5,
            0.5,
            1,
            1,
          ],
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            0.8,
            6,
            2,
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(0, 0, 0, 0)",
            0.1,
            "rgba(34, 197, 94, 0.4)",
            0.3,
            "rgba(250, 204, 21, 0.6)",
            0.5,
            "rgba(249, 115, 22, 0.7)",
            0.7,
            "rgba(239, 68, 68, 0.8)",
            1.0,
            "rgba(185, 28, 28, 0.9)",
          ],
          "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            30,
            5,
            50,
            7,
            70,
          ],
          "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            0.9,
            8,
            0.6,
          ],
        }}
      />

      {/* Circle layer - visible at higher zoom for clicking */}
      <Layer
        id="destination-circles"
        type="circle"
        paint={{
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            4,
            7,
            10,
          ],
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "busynessScore"],
            0,
            "#22c55e",
            0.3,
            "#facc15",
            0.6,
            "#f97316",
            1.0,
            "#dc2626",
          ],
          "circle-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            0.1,
            7,
            0.8,
          ],
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            0,
            7,
            0.8,
          ],
        }}
      />
    </Source>
  );
}
