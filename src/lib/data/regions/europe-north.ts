import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // UNITED KINGDOM - 4 nations
  // ========================================
  { id: "GB-ENG", countryCode: "GB", subdivisionCode: "GB-ENG", name: "England", population: 56500000, lat: 52.36, lng: -1.17, hemisphere: "northern", region: "europe" },
  { id: "GB-SCT", countryCode: "GB", subdivisionCode: "GB-SCT", name: "Scotland", population: 5450000, lat: 56.49, lng: -4.20, hemisphere: "northern", region: "europe" },
  { id: "GB-WLS", countryCode: "GB", subdivisionCode: "GB-WLS", name: "Wales", population: 3100000, lat: 52.13, lng: -3.78, hemisphere: "northern", region: "europe" },
  { id: "GB-NIR", countryCode: "GB", subdivisionCode: "GB-NIR", name: "Northern Ireland", population: 1900000, lat: 54.79, lng: -6.49, hemisphere: "northern", region: "europe" },

  // ========================================
  // IRELAND
  // ========================================
  { id: "IE", countryCode: "IE", subdivisionCode: "IE", name: "Ireland", population: 5100000, lat: 53.14, lng: -7.69, hemisphere: "northern", region: "europe" },

  // ========================================
  // DENMARK
  // ========================================
  { id: "DK", countryCode: "DK", subdivisionCode: "DK", name: "Denmark", population: 5900000, lat: 56.26, lng: 9.50, hemisphere: "northern", region: "europe" },

  // ========================================
  // SWEDEN - 2 macro-regions
  // ========================================
  { id: "SE-SOUTH", countryCode: "SE", subdivisionCode: "SE-SOUTH", name: "Southern Sweden", population: 5500000, lat: 57.71, lng: 11.97, hemisphere: "northern", region: "europe" },
  { id: "SE-NORTH", countryCode: "SE", subdivisionCode: "SE-NORTH", name: "Northern Sweden", population: 4700000, lat: 63.83, lng: 20.26, hemisphere: "northern", region: "europe" },

  // ========================================
  // NORWAY - 2 macro-regions
  // ========================================
  { id: "NO-SOUTH", countryCode: "NO", subdivisionCode: "NO-SOUTH", name: "Southern Norway", population: 3800000, lat: 59.91, lng: 10.75, hemisphere: "northern", region: "europe" },
  { id: "NO-NORTH", countryCode: "NO", subdivisionCode: "NO-NORTH", name: "Northern Norway", population: 1600000, lat: 69.65, lng: 18.96, hemisphere: "northern", region: "europe" },

  // ========================================
  // FINLAND - 2 macro-regions
  // ========================================
  { id: "FI-SOUTH", countryCode: "FI", subdivisionCode: "FI-SOUTH", name: "Southern Finland", population: 3500000, lat: 60.17, lng: 24.94, hemisphere: "northern", region: "europe" },
  { id: "FI-NORTH", countryCode: "FI", subdivisionCode: "FI-NORTH", name: "Northern Finland", population: 2100000, lat: 65.01, lng: 25.47, hemisphere: "northern", region: "europe" },

  // ========================================
  // ICELAND
  // ========================================
  { id: "IS", countryCode: "IS", subdivisionCode: "IS", name: "Iceland", population: 380000, lat: 64.15, lng: -21.94, hemisphere: "northern", region: "europe" },
];
