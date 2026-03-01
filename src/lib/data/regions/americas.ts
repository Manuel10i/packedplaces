import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // UNITED STATES - 5 macro-regions
  // ========================================
  { id: "US-NE", countryCode: "US", subdivisionCode: "US-NE", name: "US Northeast", population: 56000000, lat: 40.71, lng: -74.01, hemisphere: "northern", region: "americas" },
  { id: "US-SE", countryCode: "US", subdivisionCode: "US-SE", name: "US Southeast", population: 65000000, lat: 33.75, lng: -84.39, hemisphere: "northern", region: "americas" },
  { id: "US-MW", countryCode: "US", subdivisionCode: "US-MW", name: "US Midwest", population: 52000000, lat: 41.88, lng: -87.63, hemisphere: "northern", region: "americas" },
  { id: "US-SW", countryCode: "US", subdivisionCode: "US-SW", name: "US Southwest", population: 42000000, lat: 33.45, lng: -112.07, hemisphere: "northern", region: "americas" },
  { id: "US-W", countryCode: "US", subdivisionCode: "US-W", name: "US West", population: 55000000, lat: 34.05, lng: -118.24, hemisphere: "northern", region: "americas" },

  // ========================================
  // CANADA - 2 macro-regions
  // ========================================
  { id: "CA-EAST", countryCode: "CA", subdivisionCode: "CA-EAST", name: "Eastern Canada", population: 22000000, lat: 43.65, lng: -79.38, hemisphere: "northern", region: "americas" },
  { id: "CA-WEST", countryCode: "CA", subdivisionCode: "CA-WEST", name: "Western Canada", population: 17000000, lat: 49.28, lng: -123.12, hemisphere: "northern", region: "americas" },

  // ========================================
  // MEXICO
  // ========================================
  { id: "MX", countryCode: "MX", subdivisionCode: "MX", name: "Mexico", population: 128000000, lat: 19.43, lng: -99.13, hemisphere: "northern", region: "americas" },

  // ========================================
  // BRAZIL - 2 macro-regions
  // ========================================
  { id: "BR-SE", countryCode: "BR", subdivisionCode: "BR-SE", name: "Southeast Brazil", population: 90000000, lat: -23.55, lng: -46.63, hemisphere: "southern", region: "americas" },
  { id: "BR-NE", countryCode: "BR", subdivisionCode: "BR-NE", name: "Northeast Brazil", population: 57000000, lat: -12.97, lng: -38.51, hemisphere: "southern", region: "americas" },

  // ========================================
  // ARGENTINA
  // ========================================
  { id: "AR", countryCode: "AR", subdivisionCode: "AR", name: "Argentina", population: 46000000, lat: -34.60, lng: -58.38, hemisphere: "southern", region: "americas" },

  // ========================================
  // COLOMBIA
  // ========================================
  { id: "CO", countryCode: "CO", subdivisionCode: "CO", name: "Colombia", population: 52000000, lat: 4.71, lng: -74.07, hemisphere: "equatorial", region: "americas" },

  // ========================================
  // CHILE
  // ========================================
  { id: "CL", countryCode: "CL", subdivisionCode: "CL", name: "Chile", population: 19500000, lat: -33.45, lng: -70.67, hemisphere: "southern", region: "americas" },

  // ========================================
  // PERU
  // ========================================
  { id: "PE", countryCode: "PE", subdivisionCode: "PE", name: "Peru", population: 34000000, lat: -12.05, lng: -77.04, hemisphere: "southern", region: "americas" },
];
