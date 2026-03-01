import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // TURKEY (2 new)
  // ========================================
  { id: "TR-ISTANBUL", name: "Istanbul", country: "TR", lat: 41.01, lng: 28.98, category: "city", seasonality: "year-round", basePopularity: 0.90, region: "middle-east" },
  { id: "TR-CAPPADOCIA", name: "Cappadocia", country: "TR", lat: 38.64, lng: 34.83, category: "cultural", seasonality: "year-round", basePopularity: 0.72, region: "middle-east" },

  // ========================================
  // UAE (2)
  // ========================================
  { id: "AE-DUBAI", name: "Dubai", country: "AE", lat: 25.20, lng: 55.27, category: "city", seasonality: "winter", basePopularity: 0.92, region: "middle-east" },
  { id: "AE-ABU-DHABI", name: "Abu Dhabi", country: "AE", lat: 24.45, lng: 54.65, category: "city", seasonality: "winter", basePopularity: 0.72, region: "middle-east" },

  // ========================================
  // JORDAN (1)
  // ========================================
  { id: "JO-PETRA", name: "Petra & Dead Sea", country: "JO", lat: 30.33, lng: 35.44, category: "cultural", seasonality: "year-round", basePopularity: 0.68, region: "middle-east" },

  // ========================================
  // ISRAEL (2)
  // ========================================
  { id: "IL-TEL-AVIV", name: "Tel Aviv", country: "IL", lat: 32.07, lng: 34.78, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "middle-east" },
  { id: "IL-JERUSALEM", name: "Jerusalem", country: "IL", lat: 31.77, lng: 35.24, category: "cultural", seasonality: "year-round", basePopularity: 0.75, region: "middle-east" },

  // ========================================
  // OMAN (1)
  // ========================================
  { id: "OM-MUSCAT", name: "Muscat", country: "OM", lat: 23.61, lng: 58.59, category: "city", seasonality: "winter", basePopularity: 0.55, region: "middle-east" },

  // ========================================
  // EGYPT (2 new)
  // ========================================
  { id: "EG-CAIRO", name: "Cairo & Pyramids", country: "EG", lat: 30.04, lng: 31.24, category: "cultural", seasonality: "year-round", basePopularity: 0.82, region: "africa" },
  { id: "EG-LUXOR", name: "Luxor & Nile", country: "EG", lat: 25.69, lng: 32.64, category: "cultural", seasonality: "winter", basePopularity: 0.68, region: "africa" },

  // ========================================
  // MOROCCO (2 new)
  // ========================================
  { id: "MA-FES", name: "Fes", country: "MA", lat: 34.03, lng: -5.00, category: "cultural", seasonality: "year-round", basePopularity: 0.62, region: "africa" },
  { id: "MA-ESSAOUIRA", name: "Essaouira", country: "MA", lat: 31.51, lng: -9.77, category: "beach", seasonality: "year-round", basePopularity: 0.55, region: "africa" },

  // ========================================
  // TUNISIA (1 new)
  // ========================================
  { id: "TN-TUNIS", name: "Tunis & Carthage", country: "TN", lat: 36.81, lng: 10.17, category: "cultural", seasonality: "year-round", basePopularity: 0.52, region: "africa" },

  // ========================================
  // GEORGIA (2)
  // ========================================
  { id: "GE-TBILISI", name: "Tbilisi", country: "GE", lat: 41.69, lng: 44.80, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "middle-east" },
  { id: "GE-BATUMI", name: "Batumi", country: "GE", lat: 41.64, lng: 41.63, category: "beach", seasonality: "summer", basePopularity: 0.50, region: "middle-east" },

  // ========================================
  // MALDIVES (1)
  // ========================================
  { id: "MV-MALDIVES", name: "Maldives", country: "MV", lat: 3.20, lng: 73.22, category: "island", seasonality: "winter", basePopularity: 0.85, region: "asia", capacityOverride: 0.3 },

  // ========================================
  // SRI LANKA (1)
  // ========================================
  { id: "LK-SRI-LANKA", name: "Sri Lanka", country: "LK", lat: 7.87, lng: 80.77, category: "tropical", seasonality: "winter", basePopularity: 0.68, region: "asia" },

  // ========================================
  // SEYCHELLES (1)
  // ========================================
  { id: "SC-SEYCHELLES", name: "Seychelles", country: "SC", lat: -4.68, lng: 55.49, category: "island", seasonality: "year-round", basePopularity: 0.72, region: "africa" },
];
