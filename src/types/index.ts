export interface SourceRegion {
  id: string;
  countryCode: string;
  subdivisionCode: string;
  name: string;
  population: number;
  lat: number;
  lng: number;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  category: "ski" | "beach" | "city" | "lake" | "nature";
  seasonality: "winter" | "summer" | "year-round";
  basePopularity: number;
}

export interface TravelPattern {
  sourceRegionId: string;
  destinationId: string;
  weight: number;
  season: "winter" | "summer" | null;
}

export interface HeatmapFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    destinationId: string;
    name: string;
    busynessScore: number;
    contributingSources: { regionId: string; regionName: string; weight: number }[];
  };
}

export interface HeatmapResponse {
  type: "FeatureCollection";
  features: HeatmapFeature[];
  metadata: {
    week: number;
    year: number;
    regionsOnHoliday: {
      regionId: string;
      regionName: string;
      holidayName: string;
      startDate: string;
      endDate: string;
    }[];
  };
}

export interface HolidayInfo {
  regionId: string;
  regionName: string;
  countryCode: string;
  holidayName: string;
  startDate: string;
  endDate: string;
}
