import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // CENTRAL ASIA (2)
  // ========================================
  { id: "UZ-SAMARKAND", name: "Samarkand", country: "UZ", lat: 39.65, lng: 66.96, category: "cultural", seasonality: "year-round", basePopularity: 0.58, region: "asia" },
  { id: "KZ-ALMATY", name: "Almaty", country: "KZ", lat: 43.24, lng: 76.95, category: "city", seasonality: "year-round", basePopularity: 0.50, region: "asia" },

  // ========================================
  // SOUTH ASIA (2)
  // ========================================
  { id: "PK-HUNZA", name: "Hunza Valley", country: "PK", lat: 36.32, lng: 74.65, category: "mountain", seasonality: "summer", basePopularity: 0.48, region: "asia" },
  { id: "BD-COXS-BAZAR", name: "Cox's Bazar", country: "BD", lat: 21.43, lng: 92.01, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "asia" },

  // ========================================
  // SOUTHEAST ASIA (1)
  // ========================================
  { id: "MM-INLE", name: "Inle Lake", country: "MM", lat: 20.58, lng: 96.92, category: "nature", seasonality: "winter", basePopularity: 0.48, region: "asia" },

  // ========================================
  // AFRICA (3)
  // ========================================
  { id: "NG-LAGOS", name: "Lagos", country: "NG", lat: 6.52, lng: 3.38, category: "city", seasonality: "year-round", basePopularity: 0.50, region: "africa" },
  { id: "GH-ACCRA", name: "Accra", country: "GH", lat: 5.60, lng: -0.19, category: "city", seasonality: "year-round", basePopularity: 0.42, region: "africa" },
  { id: "ET-LALIBELA", name: "Lalibela", country: "ET", lat: 12.03, lng: 39.04, category: "cultural", seasonality: "winter", basePopularity: 0.48, region: "africa" },

  // ========================================
  // OTHER (2)
  // ========================================
  { id: "MN-STEPPE", name: "Mongolian Steppe", country: "MN", lat: 47.92, lng: 106.92, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "asia" },
  { id: "PF-TAHITI", name: "Tahiti", country: "PF", lat: -17.53, lng: -149.57, category: "island", seasonality: "winter", basePopularity: 0.58, region: "oceania" },
];
