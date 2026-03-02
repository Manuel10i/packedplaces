"use client";

import { useCallback, useRef, useState } from "react";
import Map, { type MapRef, type MapLayerMouseEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { HeatmapLayer } from "./HeatmapLayer";
import { HolidayRegionsLayer } from "./HolidayRegionsLayer";
import { DestinationTooltip } from "./DestinationTooltip";
import { useMapStore } from "@/store/useMapStore";
import { useHeatmapData, useAllDestinations } from "@/hooks/useHeatmapData";

const DEFAULT_VIEW = {
  latitude: 20,
  longitude: 0,
  zoom: 2,
};

const MAP_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

function getInitialView() {
  if (typeof window === "undefined") return DEFAULT_VIEW;
  const params = new URLSearchParams(window.location.search);
  const lat = parseFloat(params.get("lat") ?? "");
  const lng = parseFloat(params.get("lng") ?? "");
  const zoom = parseFloat(params.get("zoom") ?? "");
  if (!isNaN(lat) && !isNaN(lng) && !isNaN(zoom)) {
    return { latitude: lat, longitude: lng, zoom };
  }
  return DEFAULT_VIEW;
}

export function MapView() {
  const mapRef = useRef<MapRef>(null);
  const { selectedWeek, selectedYear, setHoveredDestination, setViewportBounds, setViewportCenter, showHeatmap } = useMapStore();
  const { data } = useHeatmapData(selectedWeek, selectedYear);
  const { data: allDestinations } = useAllDestinations();
  const [initialView] = useState(getInitialView);
  const [tooltipInfo, setTooltipInfo] = useState<{
    x: number;
    y: number;
    name: string;
    score: number;
    sources: { regionName: string; weight: number }[];
    destinationId: string;
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
        score: props.busynessScore ?? 0,
        sources,
        destinationId: props.destinationId,
      });
      setHoveredDestination(props.destinationId);
    },
    [setHoveredDestination],
  );

  const onMouseLeave = useCallback(() => {
    setTooltipInfo(null);
    setHoveredDestination(null);
  }, [setHoveredDestination]);

  const updateViewport = useCallback(() => {
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

  const onLoad = useCallback(() => {
    updateViewport();
  }, [updateViewport]);

  const interactiveLayerIds = showHeatmap
    ? ["destination-circles", "all-destinations"]
    : ["all-destinations"];

  return (
    <div className="absolute inset-0">
      <Map
        ref={mapRef}
        initialViewState={initialView}
        mapStyle={MAP_STYLE}
        interactiveLayerIds={interactiveLayerIds}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMoveEnd={updateViewport}
        onLoad={onLoad}
      >
        <HolidayRegionsLayer regionsOnHoliday={data?.metadata.regionsOnHoliday} />
        <HeatmapLayer data={data} allDestinations={allDestinations} />
      </Map>
      {tooltipInfo && (
        <DestinationTooltip
          {...tooltipInfo}
          activeEvents={data?.metadata.activeEvents
            .filter((e) => e.destinationId === tooltipInfo.destinationId)
            .map((e) => e.name)}
        />
      )}
    </div>
  );
}
