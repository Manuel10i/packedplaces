import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // CROATIA (1 new)
  // ========================================
  { id: "HR-DUBROVNIK", name: "Dubrovnik", country: "HR", lat: 42.65, lng: 18.09, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.82, region: "europe", capacityOverride: 0.5 },

  // ========================================
  // GREECE (2 new)
  // ========================================
  { id: "GR-ATHENS", name: "Athens", country: "GR", lat: 37.98, lng: 23.73, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.78, region: "europe" },
  { id: "GR-MYKONOS", name: "Mykonos", country: "GR", lat: 37.45, lng: 25.33, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.78, region: "europe" },

  // ========================================
  // ROMANIA (1)
  // ========================================
  { id: "RO-BLACK-SEA", name: "Romanian Black Sea", country: "RO", lat: 44.17, lng: 28.63, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },

  // ========================================
  // SLOVENIA (1)
  // ========================================
  { id: "SI-BLED", name: "Lake Bled", country: "SI", lat: 46.37, lng: 14.11, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },

  // ========================================
  // ALBANIA (1)
  // ========================================
  { id: "AL-RIVIERA", name: "Albanian Riviera", country: "AL", lat: 40.07, lng: 19.80, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // MONTENEGRO (1 new)
  // ========================================
  { id: "ME-KOTOR", name: "Kotor Bay", country: "ME", lat: 42.42, lng: 18.77, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },

  // ========================================
  // ESTONIA (1)
  // ========================================
  { id: "EE-TALLINN", name: "Tallinn", country: "EE", lat: 59.44, lng: 24.75, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.58, region: "europe" },

  // ========================================
  // ITALY (1 new)
  // ========================================
  { id: "IT-ISEO", name: "Lake Iseo", country: "IT", lat: 45.73, lng: 10.07, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },

  // ========================================
  // SPAIN (1 new)
  // ========================================
  { id: "ES-VALENCIA", name: "Valencia", country: "ES", lat: 39.47, lng: -0.38, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },

  // ========================================
  // SLOVAKIA
  // ========================================
  { id: "SK-BRATISLAVA", name: "Bratislava", country: "SK", lat: 48.15, lng: 17.11, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.50, region: "europe" },
  { id: "SK-HIGH-TATRAS", name: "High Tatras", country: "SK", lat: 49.17, lng: 20.13, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.50, region: "europe" },

  // ========================================
  // SERBIA
  // ========================================
  { id: "RS-BELGRADE", name: "Belgrade", country: "RS", lat: 44.79, lng: 20.47, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },
  { id: "RS-NOVI-SAD", name: "Novi Sad", country: "RS", lat: 45.25, lng: 19.85, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },

  // ========================================
  // BOSNIA
  // ========================================
  { id: "BA-SARAJEVO", name: "Sarajevo", country: "BA", lat: 43.86, lng: 18.41, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.48, region: "europe" },
  { id: "BA-MOSTAR", name: "Mostar", country: "BA", lat: 43.34, lng: 17.81, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.45, region: "europe" },

  // ========================================
  // NORTH MACEDONIA
  // ========================================
  { id: "MK-OHRID", name: "Ohrid", country: "MK", lat: 41.12, lng: 20.80, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.45, region: "europe" },

  // ========================================
  // LITHUANIA
  // ========================================
  { id: "LT-VILNIUS", name: "Vilnius", country: "LT", lat: 54.69, lng: 25.28, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.52, region: "europe" },

  // ========================================
  // LATVIA
  // ========================================
  { id: "LV-RIGA", name: "Riga", country: "LV", lat: 56.95, lng: 24.11, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },

  // ========================================
  // GREECE (extra)
  // ========================================
  { id: "GR-THESSALONIKI", name: "Thessaloniki", country: "GR", lat: 40.64, lng: 22.94, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.60, region: "europe" },
  { id: "GR-METEORA", name: "Meteora", country: "GR", lat: 39.72, lng: 21.63, category: "cultural", peakMonths: [3, 4, 5, 9, 10, 11], basePopularity: 0.52, region: "europe" },
  { id: "GR-CORFU-TOWN", name: "Corfu Town", country: "GR", lat: 39.62, lng: 19.92, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "GR-SKIATHOS", name: "Skiathos", country: "GR", lat: 39.16, lng: 23.49, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },
  { id: "GR-SAMOS", name: "Samos", country: "GR", lat: 37.75, lng: 26.98, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },

  // ========================================
  // ROMANIA (extra)
  // ========================================
  { id: "RO-BUCHAREST", name: "Bucharest", country: "RO", lat: 44.43, lng: 26.10, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.52, region: "europe" },
  { id: "RO-TRANSYLVANIA", name: "Transylvania", country: "RO", lat: 45.96, lng: 24.69, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.48, region: "europe" },
  { id: "RO-MARAMURES", name: "Maramureș", country: "RO", lat: 47.73, lng: 24.15, category: "cultural", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.35, region: "europe" },

  // ========================================
  // UKRAINE
  // ========================================
  { id: "UA-LVIV", name: "Lviv", country: "UA", lat: 49.84, lng: 24.03, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.45, region: "europe" },

  // ========================================
  // CROATIA (extra)
  // ========================================
  { id: "HR-PLITVICE", name: "Plitvice Lakes", country: "HR", lat: 44.87, lng: 15.62, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe", capacityOverride: 0.5 },
  { id: "HR-ZADAR", name: "Zadar", country: "HR", lat: 44.12, lng: 15.23, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // MONTENEGRO (extra)
  // ========================================
  { id: "ME-DURMITOR", name: "Durmitor NP", country: "ME", lat: 43.15, lng: 19.03, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.38, region: "europe" },

  // ========================================
  // ALBANIA (extra)
  // ========================================
  { id: "AL-KSAMIL", name: "Ksamil", country: "AL", lat: 39.77, lng: 20.00, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "AL-BERAT", name: "Berat", country: "AL", lat: 40.71, lng: 19.94, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.35, region: "europe" },

  // ========================================
  // SLOVENIA (extra)
  // ========================================
  { id: "SI-LJUBLJANA", name: "Ljubljana", country: "SI", lat: 46.06, lng: 14.51, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },
  { id: "SI-PIRAN", name: "Piran", country: "SI", lat: 45.53, lng: 13.57, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },

  // ========================================
  // BULGARIA (extra)
  // ========================================
  { id: "BG-PLOVDIV", name: "Plovdiv", country: "BG", lat: 42.70, lng: 24.75, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },
  { id: "BG-BANSKO", name: "Bansko", country: "BG", lat: 41.84, lng: 23.49, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.45, region: "europe" },

  // ========================================
  // HUNGARY (extra)
  // ========================================
  { id: "HU-EGER", name: "Eger", country: "HU", lat: 47.90, lng: 20.38, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.38, region: "europe" },

  // ========================================
  // EXIT FESTIVAL (Serbia)
  // ========================================
  { id: "RS-EXIT", name: "Novi Sad area", country: "RS", lat: 45.26, lng: 19.83, category: "cultural", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.35, region: "europe" },

  // ========================================
  // MALTA
  // ========================================
  { id: "MT-GOZO", name: "Gozo", country: "MT", lat: 36.04, lng: 14.27, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },

  // ========================================
  // NEW DESTINATIONS
  // ========================================
  { id: "GR-RHODES-TOWN", name: "Rhodes Town", country: "GR", lat: 36.45, lng: 28.23, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "GR-THASSOS", name: "Thassos", country: "GR", lat: 40.73, lng: 24.64, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "GR-HYDRA", name: "Hydra", country: "GR", lat: 37.35, lng: 23.47, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe", capacityOverride: 0.3 },
  { id: "HR-ROVINJ", name: "Rovinj", country: "HR", lat: 45.08, lng: 13.64, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "HR-BRAC", name: "Brač", country: "HR", lat: 43.31, lng: 16.65, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "RO-SIBIU", name: "Sibiu", country: "RO", lat: 45.80, lng: 24.15, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.38, region: "europe" },
  { id: "RO-BRASOV", name: "Brașov", country: "RO", lat: 45.65, lng: 25.60, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.45, region: "europe" },
  { id: "BG-RILA", name: "Rila Monastery", country: "BG", lat: 42.13, lng: 23.34, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.32, region: "europe" },
  { id: "AL-GJIROKASTER", name: "Gjirokastër", country: "AL", lat: 40.08, lng: 20.14, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.32, region: "europe" },
  { id: "ME-TIVAT", name: "Tivat", country: "ME", lat: 42.44, lng: 18.70, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
];
