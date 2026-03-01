import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // TURKEY - 2 macro-regions
  // ========================================
  { id: "TR-WEST", countryCode: "TR", subdivisionCode: "TR-WEST", name: "Western Turkey", population: 45000000, lat: 41.01, lng: 28.98, hemisphere: "northern", region: "middle-east" },
  { id: "TR-EAST", countryCode: "TR", subdivisionCode: "TR-EAST", name: "Eastern Turkey", population: 40000000, lat: 39.92, lng: 32.85, hemisphere: "northern", region: "middle-east" },

  // ========================================
  // RUSSIA - 2 key cities
  // ========================================
  { id: "RU-MOW", countryCode: "RU", subdivisionCode: "RU-MOW", name: "Moscow Region", population: 20500000, lat: 55.76, lng: 37.62, hemisphere: "northern", region: "europe" },
  { id: "RU-SPE", countryCode: "RU", subdivisionCode: "RU-SPE", name: "St. Petersburg Region", population: 7000000, lat: 59.93, lng: 30.32, hemisphere: "northern", region: "europe" },

  // ========================================
  // UKRAINE
  // ========================================
  { id: "UA", countryCode: "UA", subdivisionCode: "UA", name: "Ukraine", population: 37000000, lat: 50.45, lng: 30.52, hemisphere: "northern", region: "europe" },

  // ========================================
  // ISRAEL
  // ========================================
  { id: "IL", countryCode: "IL", subdivisionCode: "IL", name: "Israel", population: 9800000, lat: 32.07, lng: 34.78, hemisphere: "northern", region: "middle-east" },

  // ========================================
  // UAE
  // ========================================
  { id: "AE", countryCode: "AE", subdivisionCode: "AE", name: "UAE", population: 9900000, lat: 25.20, lng: 55.27, hemisphere: "northern", region: "middle-east" },

  // ========================================
  // SAUDI ARABIA
  // ========================================
  { id: "SA", countryCode: "SA", subdivisionCode: "SA", name: "Saudi Arabia", population: 36000000, lat: 24.71, lng: 46.68, hemisphere: "northern", region: "middle-east" },

  // ========================================
  // EGYPT (domestic source)
  // ========================================
  { id: "EG", countryCode: "EG", subdivisionCode: "EG", name: "Egypt", population: 104000000, lat: 30.04, lng: 31.24, hemisphere: "northern", region: "africa" },

  // ========================================
  // MOROCCO (domestic source)
  // ========================================
  { id: "MA", countryCode: "MA", subdivisionCode: "MA", name: "Morocco", population: 37000000, lat: 33.97, lng: -6.85, hemisphere: "northern", region: "africa" },
];
