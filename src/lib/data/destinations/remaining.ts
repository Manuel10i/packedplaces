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

  // ========================================
  // CENTRAL ASIA — EXPANDED (5)
  // ========================================
  { id: "KG-BISHKEK", name: "Bishkek", country: "KG", lat: 42.87, lng: 74.59, category: "city", seasonality: "year-round", basePopularity: 0.35, region: "asia" },
  { id: "KG-ISSYK-KUL", name: "Issyk-Kul", country: "KG", lat: 42.50, lng: 77.00, category: "lake", seasonality: "summer", basePopularity: 0.32, region: "asia" },
  { id: "KZ-ALMATY-MOUNTAINS", name: "Almaty Mountains", country: "KZ", lat: 43.16, lng: 77.02, category: "mountain", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "UZ-BUKHARA", name: "Bukhara", country: "UZ", lat: 39.77, lng: 64.42, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "UZ-KHIVA", name: "Khiva", country: "UZ", lat: 41.38, lng: 60.36, category: "cultural", seasonality: "year-round", basePopularity: 0.38, region: "asia" },

  // ========================================
  // RUSSIA — NATURE (2)
  // ========================================
  { id: "RU-KAMCHATKA", name: "Kamchatka", country: "RU", lat: 53.01, lng: 158.65, category: "nature", seasonality: "summer", basePopularity: 0.35, region: "asia" },
  { id: "RU-BAIKAL", name: "Lake Baikal", country: "RU", lat: 53.56, lng: 108.17, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "asia" },

  // ========================================
  // SOUTH & SOUTHEAST ASIA — EXPANDED (6)
  // ========================================
  { id: "BD-SUNDARBANS", name: "Sundarbans", country: "BD", lat: 21.95, lng: 89.18, category: "nature", seasonality: "winter", basePopularity: 0.28, region: "asia" },
  { id: "PK-KARAKORAM", name: "Karakoram Highway", country: "PK", lat: 35.89, lng: 74.33, category: "mountain", seasonality: "summer", basePopularity: 0.35, region: "asia" },
  { id: "MN-GOBI", name: "Gobi Desert", country: "MN", lat: 43.70, lng: 103.70, category: "desert", seasonality: "summer", basePopularity: 0.35, region: "asia" },
  { id: "MM-MANDALAY", name: "Mandalay", country: "MM", lat: 21.97, lng: 96.08, category: "cultural", seasonality: "winter", basePopularity: 0.38, region: "asia" },
  { id: "LA-4000-ISLANDS", name: "4000 Islands", country: "LA", lat: 14.03, lng: 105.93, category: "nature", seasonality: "winter", basePopularity: 0.32, region: "asia" },
  { id: "NP-CHITWAN", name: "Chitwan NP", country: "NP", lat: 27.53, lng: 84.35, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "asia" },
];
