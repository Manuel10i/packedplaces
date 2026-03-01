"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Map, { type MapRef, type MapLayerMouseEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { HeatmapLayer } from "./HeatmapLayer";
import { DestinationTooltip } from "./DestinationTooltip";
import { useMapStore } from "@/store/useMapStore";
import { useHeatmapData, useAllDestinations } from "@/hooks/useHeatmapData";

const INITIAL_VIEW = {
  latitude: 20,
  longitude: 0,
  zoom: 2,
};

const MAP_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

export function MapView() {
  const mapRef = useRef<MapRef>(null);
  const { selectedWeek, selectedYear, setHoveredDestination, viewportCenter, setViewportBounds, setViewportCenter } = useMapStore();
  const { data } = useHeatmapData(selectedWeek, selectedYear);
  const { data: allDestinations } = useAllDestinations();
  const hasAppliedUrlCenter = useRef(false);
  const [tooltipInfo, setTooltipInfo] = useState<{
    x: number;
    y: number;
    name: string;
    score: number;
    sources: { regionName: string; weight: number }[];
  } | null>(null);

  // When viewportCenter is set from URL params, jump to that position
  useEffect(() => {
    if (hasAppliedUrlCenter.current) return;
    if (!viewportCenter || !mapRef.current) return;
    hasAppliedUrlCenter.current = true;
    mapRef.current.jumpTo({
      center: [viewportCenter.lng, viewportCenter.lat],
      zoom: viewportCenter.zoom,
    });
  }, [viewportCenter]);

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
        score: props.busynessScore ?? 0,
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

  const onMoveEnd = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

    const bounds = map.getBounds();
    setViewportBounds({
      north: bounds.getNorth(),
      south: bounds.getSouth(),
      east: bounds.getEast(),
      west: bounds.getWest(),
    });

    const center = map.getCenter();
    setViewportCenter({
      lat: center.lat,
      lng: center.lng,
      zoom: map.getZoom(),
    });
  }, [setViewportBounds, setViewportCenter]);

  return (
    <div className="absolute inset-0">
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW}
        mapStyle={MAP_STYLE}
        interactiveLayerIds={["destination-circles", "all-destinations"]}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMoveEnd={onMoveEnd}
      >
        <HeatmapLayer data={data} allDestinations={allDestinations} />
      </Map>
      {tooltipInfo && <DestinationTooltip {...tooltipInfo} />}
    </div>
  );
}
