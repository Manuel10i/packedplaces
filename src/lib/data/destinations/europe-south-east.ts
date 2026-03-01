import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // CROATIA (1 new)
  // ========================================
  { id: "HR-DUBROVNIK", name: "Dubrovnik", country: "HR", lat: 42.65, lng: 18.09, category: "city", seasonality: "summer", basePopularity: 0.82, region: "europe", capacityOverride: 0.5 },

  // ========================================
  // GREECE (2 new)
  // ========================================
  { id: "GR-ATHENS", name: "Athens", country: "GR", lat: 37.98, lng: 23.73, category: "city", seasonality: "year-round", basePopularity: 0.78, region: "europe" },
  { id: "GR-MYKONOS", name: "Mykonos", country: "GR", lat: 37.45, lng: 25.33, category: "beach", seasonality: "summer", basePopularity: 0.78, region: "europe" },

  // ========================================
  // ROMANIA (1)
  // ========================================
  { id: "RO-BLACK-SEA", name: "Romanian Black Sea", country: "RO", lat: 44.17, lng: 28.63, category: "beach", seasonality: "summer", basePopularity: 0.52, region: "europe" },

  // ========================================
  // SLOVENIA (1)
  // ========================================
  { id: "SI-BLED", name: "Lake Bled", country: "SI", lat: 46.37, lng: 14.11, category: "lake", seasonality: "summer", basePopularity: 0.65, region: "europe" },

  // ========================================
  // ALBANIA (1)
  // ========================================
  { id: "AL-RIVIERA", name: "Albanian Riviera", country: "AL", lat: 40.07, lng: 19.80, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },

  // ========================================
  // MONTENEGRO (1 new)
  // ========================================
  { id: "ME-KOTOR", name: "Kotor Bay", country: "ME", lat: 42.42, lng: 18.77, category: "city", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // ESTONIA (1)
  // ========================================
  { id: "EE-TALLINN", name: "Tallinn", country: "EE", lat: 59.44, lng: 24.75, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "europe" },

  // ========================================
  // ITALY (1 new)
  // ========================================
  { id: "IT-ISEO", name: "Lake Iseo", country: "IT", lat: 45.73, lng: 10.07, category: "lake", seasonality: "summer", basePopularity: 0.52, region: "europe" },

  // ========================================
  // SPAIN (1 new)
  // ========================================
  { id: "ES-VALENCIA", name: "Valencia", country: "ES", lat: 39.47, lng: -0.38, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "europe" },
];
