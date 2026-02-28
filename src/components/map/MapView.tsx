"use client";

import { useCallback, useRef, useState } from "react";
import Map, { type MapRef, type MapLayerMouseEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { HeatmapLayer } from "./HeatmapLayer";
import { DestinationTooltip } from "./DestinationTooltip";
import { useMapStore } from "@/store/useMapStore";
import { useHeatmapData } from "@/hooks/useHeatmapData";

const INITIAL_VIEW = {
  latitude: 48,
  longitude: 11,
  zoom: 4.5,
};

const MAP_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

export function MapView() {
  const mapRef = useRef<MapRef>(null);
  const { selectedWeek, selectedYear, setHoveredDestination } = useMapStore();
  const { data } = useHeatmapData(selectedWeek, selectedYear);
  const [tooltipInfo, setTooltipInfo] = useState<{
    x: number;
    y: number;
    name: string;
    score: number;
    sources: { regionName: string; weight: number }[];
  } | null>(null);

  const onMouseMove = useCallback(
    (e: MapLayerMouseEvent) => {
      if (!e.features || e.features.length === 0) {
        setTooltipInfo(null);
        setHoveredDestination(null);
        return;
      }
      const feature = e.features[0];
      const props = feature.properties;
      if (!props) return;

      let sources: { regionName: string; weight: number }[] = [];
      try {
        const raw = typeof props.contributingSources === "string"
          ? JSON.parse(props.contributingSources)
          : props.contributingSources;
        if (Array.isArray(raw)) {
          sources = raw
            .sort((a: { weight: number }, b: { weight: number }) => b.weight - a.weight)
            .slice(0, 5);
        }
      } catch {
        // ignore parse errors
      }

      setTooltipInfo({
        x: e.point.x,
        y: e.point.y,
        name: props.name,
        score: props.busynessScore,
        sources,
      });
      setHoveredDestination(props.destinationId);
    },
    [setHoveredDestination],
  );

  const onMouseLeave = useCallback(() => {
    setTooltipInfo(null);
    setHoveredDestination(null);
  }, [setHoveredDestination]);

  return (
    <div className="absolute inset-0">
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW}
        mapStyle={MAP_STYLE}
        interactiveLayerIds={["destination-circles"]}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <HeatmapLayer data={data} />
      </Map>
      {tooltipInfo && <DestinationTooltip {...tooltipInfo} />}
    </div>
  );
}
