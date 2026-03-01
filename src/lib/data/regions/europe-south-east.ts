import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // ITALY - 2 macro-regions
  // ========================================
  { id: "IT-NORTH", countryCode: "IT", subdivisionCode: "IT-NORTH", name: "Northern Italy", population: 27800000, lat: 45.46, lng: 9.19, hemisphere: "northern", region: "europe" },
  { id: "IT-SOUTH", countryCode: "IT", subdivisionCode: "IT-SOUTH", name: "Southern Italy", population: 20600000, lat: 40.85, lng: 14.27, hemisphere: "northern", region: "europe" },

  // ========================================
  // SPAIN - 3 macro-regions
  // ========================================
  { id: "ES-MADRID", countryCode: "ES", subdivisionCode: "ES-MADRID", name: "Madrid Region", population: 14200000, lat: 40.42, lng: -3.70, hemisphere: "northern", region: "europe" },
  { id: "ES-CATALONIA", countryCode: "ES", subdivisionCode: "ES-CATALONIA", name: "Catalonia", population: 7800000, lat: 41.39, lng: 2.17, hemisphere: "northern", region: "europe" },
  { id: "ES-ANDALUSIA", countryCode: "ES", subdivisionCode: "ES-ANDALUSIA", name: "Andalusia", population: 8400000, lat: 37.39, lng: -5.99, hemisphere: "northern", region: "europe" },

  // ========================================
  // PORTUGAL
  // ========================================
  { id: "PT", countryCode: "PT", subdivisionCode: "PT", name: "Portugal", population: 10300000, lat: 38.72, lng: -9.14, hemisphere: "northern", region: "europe" },

  // ========================================
  // HUNGARY
  // ========================================
  { id: "HU", countryCode: "HU", subdivisionCode: "HU", name: "Hungary", population: 9700000, lat: 47.50, lng: 19.04, hemisphere: "northern", region: "europe" },

  // ========================================
  // ROMANIA
  // ========================================
  { id: "RO", countryCode: "RO", subdivisionCode: "RO", name: "Romania", population: 19100000, lat: 44.43, lng: 26.10, hemisphere: "northern", region: "europe" },

  // ========================================
  // BULGARIA
  // ========================================
  { id: "BG", countryCode: "BG", subdivisionCode: "BG", name: "Bulgaria", population: 6500000, lat: 42.70, lng: 23.32, hemisphere: "northern", region: "europe" },

  // ========================================
  // CROATIA
  // ========================================
  { id: "HR", countryCode: "HR", subdivisionCode: "HR", name: "Croatia", population: 3900000, lat: 45.81, lng: 15.98, hemisphere: "northern", region: "europe" },

  // ========================================
  // SERBIA
  // ========================================
  { id: "RS", countryCode: "RS", subdivisionCode: "RS", name: "Serbia", population: 6700000, lat: 44.79, lng: 20.47, hemisphere: "northern", region: "europe" },

  // ========================================
  // SLOVAKIA
  // ========================================
  { id: "SK", countryCode: "SK", subdivisionCode: "SK", name: "Slovakia", population: 5460000, lat: 48.15, lng: 17.11, hemisphere: "northern", region: "europe" },

  // ========================================
  // SLOVENIA
  // ========================================
  { id: "SI", countryCode: "SI", subdivisionCode: "SI", name: "Slovenia", population: 2100000, lat: 46.05, lng: 14.51, hemisphere: "northern", region: "europe" },

  // ========================================
  // BALTICS
  // ========================================
  { id: "EE", countryCode: "EE", subdivisionCode: "EE", name: "Estonia", population: 1330000, lat: 59.44, lng: 24.75, hemisphere: "northern", region: "europe" },
  { id: "LV", countryCode: "LV", subdivisionCode: "LV", name: "Latvia", population: 1880000, lat: 56.95, lng: 24.11, hemisphere: "northern", region: "europe" },
  { id: "LT", countryCode: "LT", subdivisionCode: "LT", name: "Lithuania", population: 2800000, lat: 54.69, lng: 25.28, hemisphere: "northern", region: "europe" },
];
