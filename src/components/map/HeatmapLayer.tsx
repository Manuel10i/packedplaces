"use client";

import { useMemo } from "react";
import { Source, Layer, Marker } from "react-map-gl/maplibre";
import type { HeatmapResponse, AllDestinationsResponse, MajorEvent } from "@/types";

interface Props {
  data: HeatmapResponse | undefined;
  allDestinations: AllDestinationsResponse | undefined;
}

const emptyGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

const CATEGORY_EMOJI: Record<MajorEvent["category"], string> = {
  sports: "\u26BD",
  festival: "\uD83C\uDF89",
  cultural: "\uD83C\uDFAD",
  music: "\uD83C\uDFB5",
  trade: "\uD83D\uDCBC",
};

interface EventMarker {
  destinationId: string;
  lng: number;
  lat: number;
  emoji: string;
  label: string;
}

export function HeatmapLayer({ data, allDestinations }: Props) {
  const geojson = data ?? emptyGeoJSON;
  const allDestsGeojson = allDestinations ?? emptyGeoJSON;

  // Build event markers by matching active events to destination coordinates
  const eventMarkers = useMemo<EventMarker[]>(() => {
    if (!data?.metadata.activeEvents?.length) return [];

    // Build a coordinate lookup from heatmap features + allDestinations
    const coordMap = new Map<string, [number, number]>();
    for (const f of data.features) {
      coordMap.set(f.properties.destinationId, f.geometry.coordinates);
    }
    if (allDestinations) {
      for (const f of allDestinations.features) {
        if (!coordMap.has(f.properties.destinationId)) {
          coordMap.set(f.properties.destinationId, f.geometry.coordinates);
        }
      }
    }

    // Deduplicate by destinationId — pick the first event's emoji if multiple
    const byDest = new Map<string, { emoji: string; names: string[] }>();
    for (const event of data.metadata.activeEvents) {
      const existing = byDest.get(event.destinationId);
      if (existing) {
        existing.names.push(event.name);
      } else {
        byDest.set(event.destinationId, {
          emoji: CATEGORY_EMOJI[event.category] ?? "\uD83D\uDCCD",
          names: [event.name],
        });
      }
    }

    const markers: EventMarker[] = [];
    for (const [destId, info] of byDest) {
      const coords = coordMap.get(destId);
      if (!coords) continue;
      markers.push({
        destinationId: destId,
        lng: coords[0],
        lat: coords[1],
        emoji: info.emoji,
        label: info.names.join(", "),
      });
    }

    return markers;
  }, [data, allDestinations]);

  return (
    <>
      {/* All destinations as grey dots - rendered first (beneath heatmap) */}
      <Source id="all-destinations-source" type="geojson" data={allDestsGeojson}>
        <Layer
          id="all-destinations"
          type="circle"
          paint={{
            "circle-radius": 3,
            "circle-color": "#9ca3af",
            "circle-opacity": 0.5,
          }}
        />
      </Source>

      {/* Heatmap data layer - rendered on top */}
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
              ["interpolate", ["linear"], ["get", "busynessScore"], 0, 3, 1, 6],
              7,
              ["interpolate", ["linear"], ["get", "busynessScore"], 0, 8, 1, 14],
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

      {/* Event markers — HTML emoji markers at destinations with active events */}
      {eventMarkers.map((m) => (
        <Marker
          key={m.destinationId}
          longitude={m.lng}
          latitude={m.lat}
          anchor="bottom"
        >
          <div
            className="pointer-events-none select-none text-lg drop-shadow-md"
            title={m.label}
          >
            {m.emoji}
          </div>
        </Marker>
      ))}
    </>
  );
}
