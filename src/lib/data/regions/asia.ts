import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // CHINA - 4 macro-regions
  // ========================================
  { id: "CN-EAST", countryCode: "CN", subdivisionCode: "CN-EAST", name: "Eastern China (Shanghai)", population: 250000000, lat: 31.23, lng: 121.47, hemisphere: "northern", region: "asia" },
  { id: "CN-SOUTH", countryCode: "CN", subdivisionCode: "CN-SOUTH", name: "Southern China (Guangdong)", population: 180000000, lat: 23.13, lng: 113.26, hemisphere: "northern", region: "asia" },
  { id: "CN-NORTH", countryCode: "CN", subdivisionCode: "CN-NORTH", name: "Northern China (Beijing)", population: 200000000, lat: 39.90, lng: 116.40, hemisphere: "northern", region: "asia" },
  { id: "CN-CENTRAL", countryCode: "CN", subdivisionCode: "CN-CENTRAL", name: "Central China", population: 150000000, lat: 30.59, lng: 114.31, hemisphere: "northern", region: "asia" },

  // ========================================
  // JAPAN - 3 macro-regions
  // ========================================
  { id: "JP-KANTO", countryCode: "JP", subdivisionCode: "JP-KANTO", name: "Kanto (Tokyo)", population: 43500000, lat: 35.68, lng: 139.69, hemisphere: "northern", region: "asia" },
  { id: "JP-KANSAI", countryCode: "JP", subdivisionCode: "JP-KANSAI", name: "Kansai (Osaka)", population: 22800000, lat: 34.69, lng: 135.50, hemisphere: "northern", region: "asia" },
  { id: "JP-OTHER", countryCode: "JP", subdivisionCode: "JP-OTHER", name: "Other Japan", population: 59000000, lat: 35.01, lng: 135.77, hemisphere: "northern", region: "asia" },

  // ========================================
  // SOUTH KOREA
  // ========================================
  { id: "KR", countryCode: "KR", subdivisionCode: "KR", name: "South Korea", population: 51700000, lat: 37.57, lng: 126.98, hemisphere: "northern", region: "asia" },

  // ========================================
  // TAIWAN
  // ========================================
  { id: "TW", countryCode: "TW", subdivisionCode: "TW", name: "Taiwan", population: 23600000, lat: 25.03, lng: 121.57, hemisphere: "northern", region: "asia" },

  // ========================================
  // THAILAND
  // ========================================
  { id: "TH", countryCode: "TH", subdivisionCode: "TH", name: "Thailand", population: 71800000, lat: 13.76, lng: 100.50, hemisphere: "equatorial", region: "asia" },

  // ========================================
  // VIETNAM
  // ========================================
  { id: "VN", countryCode: "VN", subdivisionCode: "VN", name: "Vietnam", population: 99500000, lat: 21.03, lng: 105.85, hemisphere: "northern", region: "asia" },

  // ========================================
  // INDONESIA - 2 macro-regions
  // ========================================
  { id: "ID-JAVA", countryCode: "ID", subdivisionCode: "ID-JAVA", name: "Java (Jakarta)", population: 152000000, lat: -6.21, lng: 106.85, hemisphere: "equatorial", region: "asia" },
  { id: "ID-OTHER", countryCode: "ID", subdivisionCode: "ID-OTHER", name: "Other Indonesia", population: 120000000, lat: -2.55, lng: 118.02, hemisphere: "equatorial", region: "asia" },

  // ========================================
  // MALAYSIA
  // ========================================
  { id: "MY", countryCode: "MY", subdivisionCode: "MY", name: "Malaysia", population: 33000000, lat: 3.14, lng: 101.69, hemisphere: "equatorial", region: "asia" },

  // ========================================
  // SINGAPORE
  // ========================================
  { id: "SG", countryCode: "SG", subdivisionCode: "SG", name: "Singapore", population: 5900000, lat: 1.35, lng: 103.82, hemisphere: "equatorial", region: "asia" },

  // ========================================
  // PHILIPPINES
  // ========================================
  { id: "PH", countryCode: "PH", subdivisionCode: "PH", name: "Philippines", population: 114000000, lat: 14.60, lng: 120.98, hemisphere: "equatorial", region: "asia" },

  // ========================================
  // INDIA - 2 macro-regions
  // ========================================
  { id: "IN-NORTH", countryCode: "IN", subdivisionCode: "IN-NORTH", name: "Northern India", population: 600000000, lat: 28.61, lng: 77.21, hemisphere: "northern", region: "asia" },
  { id: "IN-SOUTH", countryCode: "IN", subdivisionCode: "IN-SOUTH", name: "Southern India", population: 400000000, lat: 13.08, lng: 80.27, hemisphere: "equatorial", region: "asia" },
];
