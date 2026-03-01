import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // UNITED KINGDOM (3)
  // ========================================
  { id: "GB-LONDON", name: "London", country: "GB", lat: 51.51, lng: -0.13, category: "city", seasonality: "year-round", basePopularity: 0.95, region: "europe", capacityOverride: 7.0 },
  { id: "GB-CORNWALL", name: "Cornwall & Devon", country: "GB", lat: 50.27, lng: -5.05, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },
  { id: "GB-HIGHLANDS", name: "Scottish Highlands", country: "GB", lat: 57.12, lng: -4.71, category: "nature", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // NORWAY (2)
  // ========================================
  { id: "NO-FJORDS", name: "Norwegian Fjords", country: "NO", lat: 61.22, lng: 6.85, category: "nature", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "NO-LOFOTEN", name: "Lofoten", country: "NO", lat: 68.23, lng: 14.57, category: "nature", seasonality: "summer", basePopularity: 0.65, region: "europe" },

  // ========================================
  // SWEDEN (1)
  // ========================================
  { id: "SE-LAPLAND", name: "Swedish Lapland", country: "SE", lat: 67.86, lng: 20.22, category: "nature", seasonality: "winter", basePopularity: 0.55, region: "europe" },

  // ========================================
  // FINLAND (1)
  // ========================================
  { id: "FI-LAPLAND", name: "Finnish Lapland", country: "FI", lat: 66.50, lng: 25.75, category: "nature", seasonality: "winter", basePopularity: 0.58, region: "europe" },

  // ========================================
  // DENMARK (1)
  // ========================================
  { id: "DK-RIVIERA", name: "Danish Riviera", country: "DK", lat: 56.04, lng: 12.60, category: "beach", seasonality: "summer", basePopularity: 0.50, region: "europe" },

  // ========================================
  // ICELAND (1)
  // ========================================
  { id: "IS-GOLDEN-CIRCLE", name: "Reykjavik & Golden Circle", country: "IS", lat: 64.15, lng: -21.94, category: "nature", seasonality: "year-round", basePopularity: 0.65, region: "europe" },

  // ========================================
  // IRELAND (1)
  // ========================================
  { id: "IE-WILD-ATLANTIC", name: "Wild Atlantic Way", country: "IE", lat: 52.97, lng: -9.70, category: "nature", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // SPAIN - new additions for UK/Nordic flows (2)
  // ========================================
  { id: "ES-LANZAROTE", name: "Lanzarote", country: "ES", lat: 28.96, lng: -13.63, category: "beach", seasonality: "year-round", basePopularity: 0.72, region: "europe" },

  // ========================================
  // ITALY - new addition for UK flows (1)
  // ========================================
  { id: "IT-PUGLIA", name: "Puglia", country: "IT", lat: 41.13, lng: 16.87, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },
];
