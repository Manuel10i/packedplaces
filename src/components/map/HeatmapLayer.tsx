"use client";

import { useMemo } from "react";
import { Source, Layer, Marker } from "react-map-gl/maplibre";
import type { HeatmapResponse, AllDestinationsResponse } from "@/types";
import { useMapStore } from "@/store/useMapStore";
import {
  crowdCircleColorExpr,
  crowdHeatmapColorExpr,
  CIRCLE_STROKE_COLOR,
  MUTED_DOT_COLOR,
} from "@/lib/crowd-palette";
import { CATEGORY_EMOJI, DEFAULT_EVENT_EMOJI } from "@/lib/event-categories";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";

interface Props {
  data: HeatmapResponse | undefined;
  allDestinations: AllDestinationsResponse | undefined;
}

const emptyGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

interface EventMarker {
  destinationId: string;
  lng: number;
  lat: number;
  emoji: string;
  label: string;
}

const SHOW_ZERO_SCORES = process.env.NEXT_PUBLIC_SHOW_ZERO_SCORES !== "false";

export function HeatmapLayer({ data, allDestinations }: Props) {
  const showHeatmap = useMapStore((s) => s.showHeatmap);
  const showEvents = useMapStore((s) => s.showEvents);
  const mode = useResolvedTheme();

  const geojson = useMemo(() => {
    if (!data) return emptyGeoJSON;
    if (SHOW_ZERO_SCORES) return data;
    return {
      ...data,
      features: data.features.filter((f) => f.properties.busynessScore > 0),
    };
  }, [data]);
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
          emoji: CATEGORY_EMOJI[event.category] ?? DEFAULT_EVENT_EMOJI,
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
      {SHOW_ZERO_SCORES && (
        <Source id="all-destinations-source" type="geojson" data={allDestsGeojson}>
          <Layer
            id="all-destinations"
            type="circle"
            paint={{
              "circle-radius": 3,
              "circle-color": MUTED_DOT_COLOR[mode],
              "circle-opacity": 0.5,
            }}
          />
        </Source>
      )}

      {/* Heatmap data layer - rendered on top, toggleable */}
      {showHeatmap && (
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
              "heatmap-color": crowdHeatmapColorExpr(mode),
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
              "circle-color": crowdCircleColorExpr(mode),
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
              "circle-stroke-color": CIRCLE_STROKE_COLOR[mode],
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
      )}

      {/* Event markers — HTML emoji markers at destinations with active events */}
      {showEvents &&
        eventMarkers.map((m) => (
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
