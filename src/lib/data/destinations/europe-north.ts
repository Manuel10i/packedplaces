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

  // ========================================
  // UNITED KINGDOM - expanded (7)
  // ========================================
  { id: "GB-EDINBURGH", name: "Edinburgh", country: "GB", lat: 55.95, lng: -3.19, category: "city", seasonality: "year-round", basePopularity: 0.75, region: "europe" },
  { id: "GB-BATH", name: "Bath", country: "GB", lat: 51.38, lng: -2.36, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "europe" },
  { id: "GB-LAKE-DISTRICT", name: "Lake District", country: "GB", lat: 54.46, lng: -3.08, category: "nature", seasonality: "summer", basePopularity: 0.60, region: "europe" },
  { id: "GB-YORK", name: "York", country: "GB", lat: 53.96, lng: -1.08, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "europe" },
  { id: "GB-COTSWOLDS", name: "Cotswolds", country: "GB", lat: 51.83, lng: -1.68, category: "nature", seasonality: "summer", basePopularity: 0.52, region: "europe" },
  { id: "GB-BRIGHTON", name: "Brighton", country: "GB", lat: 50.82, lng: -0.14, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },
  { id: "GB-GLASGOW", name: "Glasgow", country: "GB", lat: 55.86, lng: -4.25, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "europe" },

  // ========================================
  // IRELAND - expanded (3)
  // ========================================
  { id: "IE-DUBLIN", name: "Dublin", country: "IE", lat: 53.35, lng: -6.26, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "europe" },
  { id: "IE-GALWAY", name: "Galway", country: "IE", lat: 53.27, lng: -9.05, category: "city", seasonality: "summer", basePopularity: 0.55, region: "europe" },
  { id: "IE-KERRY", name: "Ring of Kerry", country: "IE", lat: 51.97, lng: -9.97, category: "nature", seasonality: "summer", basePopularity: 0.55, region: "europe" },

  // ========================================
  // SWEDEN - expanded (3)
  // ========================================
  { id: "SE-STOCKHOLM", name: "Stockholm", country: "SE", lat: 59.33, lng: 18.07, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "europe" },
  { id: "SE-GOTHENBURG", name: "Gothenburg", country: "SE", lat: 57.71, lng: 11.97, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "europe" },
  { id: "SE-VISBY", name: "Visby", country: "SE", lat: 57.64, lng: 18.30, category: "cultural", seasonality: "summer", basePopularity: 0.45, region: "europe" },

  // ========================================
  // NORWAY - expanded (4)
  // ========================================
  { id: "NO-OSLO", name: "Oslo", country: "NO", lat: 59.91, lng: 10.75, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "europe" },
  { id: "NO-BERGEN", name: "Bergen", country: "NO", lat: 60.39, lng: 5.32, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "europe" },
  { id: "NO-TROMSO", name: "Tromsø", country: "NO", lat: 69.65, lng: 18.96, category: "nature", seasonality: "winter", basePopularity: 0.55, region: "europe" },
  { id: "NO-STAVANGER", name: "Stavanger", country: "NO", lat: 58.97, lng: 5.73, category: "nature", seasonality: "summer", basePopularity: 0.45, region: "europe" },

  // ========================================
  // FINLAND - expanded (2)
  // ========================================
  { id: "FI-HELSINKI", name: "Helsinki", country: "FI", lat: 60.17, lng: 24.94, category: "city", seasonality: "year-round", basePopularity: 0.60, region: "europe" },
  { id: "FI-ROVANIEMI", name: "Rovaniemi", country: "FI", lat: 66.50, lng: 25.72, category: "nature", seasonality: "winter", basePopularity: 0.55, region: "europe" },

  // ========================================
  // ICELAND - expanded (1)
  // ========================================
  { id: "IS-AKUREYRI", name: "Akureyri", country: "IS", lat: 65.68, lng: -18.09, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "europe" },

  // ========================================
  // EXTRA DESTINATIONS (13)
  // ========================================
  { id: "GB-JERSEY", name: "Jersey", country: "GB", lat: 49.21, lng: -2.13, category: "island", seasonality: "summer", basePopularity: 0.42, region: "europe" },
  { id: "SE-ABISKO", name: "Abisko (Northern Lights)", country: "SE", lat: 68.35, lng: 18.82, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "europe" },
  { id: "NO-PREIKESTOLEN", name: "Preikestolen & Lysefjord", country: "NO", lat: 58.99, lng: 6.19, category: "nature", seasonality: "summer", basePopularity: 0.50, region: "europe" },
  { id: "FI-LAKE-SAIMAA", name: "Lake Saimaa", country: "FI", lat: 61.06, lng: 28.19, category: "nature", seasonality: "summer", basePopularity: 0.38, region: "europe" },
  { id: "DK-BORNHOLM", name: "Bornholm", country: "DK", lat: 55.14, lng: 14.92, category: "island", seasonality: "summer", basePopularity: 0.40, region: "europe" },
  { id: "GB-ISLE-OF-SKYE", name: "Isle of Skye", country: "GB", lat: 57.30, lng: -6.30, category: "nature", seasonality: "summer", basePopularity: 0.55, region: "europe" },
  { id: "NO-SVALBARD", name: "Svalbard", country: "NO", lat: 78.22, lng: 15.63, category: "nature", seasonality: "summer", basePopularity: 0.38, region: "europe" },
  { id: "IE-CLIFFS-MOHER", name: "Cliffs of Moher", country: "IE", lat: 52.97, lng: -9.43, category: "nature", seasonality: "summer", basePopularity: 0.48, region: "europe" },
  { id: "GB-WINDSOR", name: "Windsor & Eton", country: "GB", lat: 51.48, lng: -0.61, category: "cultural", seasonality: "year-round", basePopularity: 0.45, region: "europe" },
  { id: "SE-ICEHOTEL", name: "Jukkasjärvi (Ice Hotel)", country: "SE", lat: 67.86, lng: 20.60, category: "nature", seasonality: "winter", basePopularity: 0.38, region: "europe" },
  { id: "GB-SNOWDONIA", name: "Snowdonia", country: "GB", lat: 53.07, lng: -3.93, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "europe" },
  { id: "NO-ATLANTIC-ROAD", name: "Atlantic Road", country: "NO", lat: 63.02, lng: 7.36, category: "nature", seasonality: "summer", basePopularity: 0.35, region: "europe" },
  { id: "DK-AARHUS", name: "Aarhus", country: "DK", lat: 56.16, lng: 10.20, category: "city", seasonality: "year-round", basePopularity: 0.42, region: "europe" },
];
