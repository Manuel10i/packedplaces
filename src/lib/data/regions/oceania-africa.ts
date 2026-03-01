import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // AUSTRALIA - 5 states
  // ========================================
  { id: "AU-NSW", countryCode: "AU", subdivisionCode: "AU-NSW", name: "New South Wales", population: 8200000, lat: -33.87, lng: 151.21, hemisphere: "southern", region: "oceania" },
  { id: "AU-VIC", countryCode: "AU", subdivisionCode: "AU-VIC", name: "Victoria", population: 6700000, lat: -37.81, lng: 144.96, hemisphere: "southern", region: "oceania" },
  { id: "AU-QLD", countryCode: "AU", subdivisionCode: "AU-QLD", name: "Queensland", population: 5300000, lat: -27.47, lng: 153.03, hemisphere: "southern", region: "oceania" },
  { id: "AU-WA", countryCode: "AU", subdivisionCode: "AU-WA", name: "Western Australia", population: 2800000, lat: -31.95, lng: 115.86, hemisphere: "southern", region: "oceania" },
  { id: "AU-SA", countryCode: "AU", subdivisionCode: "AU-SA", name: "South Australia", population: 1800000, lat: -34.93, lng: 138.60, hemisphere: "southern", region: "oceania" },

  // ========================================
  // NEW ZEALAND
  // ========================================
  { id: "NZ", countryCode: "NZ", subdivisionCode: "NZ", name: "New Zealand", population: 5100000, lat: -36.85, lng: 174.76, hemisphere: "southern", region: "oceania" },

  // ========================================
  // SOUTH AFRICA
  // ========================================
  { id: "ZA", countryCode: "ZA", subdivisionCode: "ZA", name: "South Africa", population: 60000000, lat: -33.92, lng: 18.42, hemisphere: "southern", region: "africa" },

  // ========================================
  // KENYA
  // ========================================
  { id: "KE", countryCode: "KE", subdivisionCode: "KE", name: "Kenya", population: 54000000, lat: -1.29, lng: 36.82, hemisphere: "equatorial", region: "africa" },
];
