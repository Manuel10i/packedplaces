import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // AUSTRALIA (6)
  // ========================================
  { id: "AU-SYDNEY", name: "Sydney", country: "AU", lat: -33.87, lng: 151.21, category: "city", seasonality: "year-round", basePopularity: 0.88, region: "oceania" },
  { id: "AU-GOLD-COAST", name: "Gold Coast", country: "AU", lat: -28.02, lng: 153.43, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "oceania" },
  { id: "AU-GBR", name: "Great Barrier Reef", country: "AU", lat: -16.50, lng: 145.77, category: "nature", seasonality: "winter", basePopularity: 0.82, region: "oceania" },
  { id: "AU-MELBOURNE", name: "Melbourne", country: "AU", lat: -37.81, lng: 144.96, category: "city", seasonality: "year-round", basePopularity: 0.78, region: "oceania" },
  { id: "AU-WHITSUNDAYS", name: "Whitsundays", country: "AU", lat: -20.07, lng: 148.95, category: "island", seasonality: "winter", basePopularity: 0.68, region: "oceania" },
  { id: "AU-TASMANIA", name: "Tasmania", country: "AU", lat: -42.88, lng: 147.33, category: "nature", seasonality: "summer", basePopularity: 0.58, region: "oceania" },

  // ========================================
  // NEW ZEALAND (3)
  // ========================================
  { id: "NZ-QUEENSTOWN", name: "Queenstown", country: "NZ", lat: -45.03, lng: 168.66, category: "nature", seasonality: "year-round", basePopularity: 0.75, region: "oceania" },
  { id: "NZ-AUCKLAND", name: "Auckland", country: "NZ", lat: -36.85, lng: 174.76, category: "city", seasonality: "year-round", basePopularity: 0.65, region: "oceania" },
  { id: "NZ-SKI", name: "NZ Ski (Wanaka/Ruapehu)", country: "NZ", lat: -44.69, lng: 169.13, category: "ski", seasonality: "winter", basePopularity: 0.55, region: "oceania" },

  // ========================================
  // PACIFIC (2)
  // ========================================
  { id: "FJ-FIJI", name: "Fiji", country: "FJ", lat: -17.77, lng: 177.95, category: "island", seasonality: "winter", basePopularity: 0.68, region: "oceania" },
  { id: "WS-SAMOA", name: "Samoa", country: "WS", lat: -13.83, lng: -171.76, category: "island", seasonality: "winter", basePopularity: 0.45, region: "oceania" },

  // ========================================
  // SOUTHERN AFRICA (5)
  // ========================================
  { id: "ZA-CAPE-TOWN", name: "Cape Town", country: "ZA", lat: -33.92, lng: 18.42, category: "city", seasonality: "summer", basePopularity: 0.82, region: "africa" },
  { id: "ZA-GARDEN-ROUTE", name: "Garden Route", country: "ZA", lat: -33.96, lng: 22.46, category: "nature", seasonality: "summer", basePopularity: 0.65, region: "africa" },
  { id: "ZA-KRUGER", name: "Kruger National Park", country: "ZA", lat: -23.99, lng: 31.55, category: "safari", seasonality: "winter", basePopularity: 0.75, region: "africa" },
  { id: "MU-MAURITIUS", name: "Mauritius", country: "MU", lat: -20.35, lng: 57.55, category: "island", seasonality: "winter", basePopularity: 0.72, region: "africa" },
  { id: "NA-NAMIBIA", name: "Namibia", country: "NA", lat: -22.57, lng: 17.08, category: "desert", seasonality: "winter", basePopularity: 0.58, region: "africa" },

  // ========================================
  // EAST AFRICA (4)
  // ========================================
  { id: "KE-MASAI-MARA", name: "Masai Mara", country: "KE", lat: -1.50, lng: 35.14, category: "safari", seasonality: "summer", basePopularity: 0.78, region: "africa" },
  { id: "KE-COAST", name: "Kenyan Coast (Diani/Mombasa)", country: "KE", lat: -4.28, lng: 39.58, category: "beach", seasonality: "winter", basePopularity: 0.58, region: "africa" },
  { id: "TZ-SERENGETI", name: "Serengeti", country: "TZ", lat: -2.33, lng: 34.83, category: "safari", seasonality: "summer", basePopularity: 0.75, region: "africa" },
  { id: "TZ-ZANZIBAR", name: "Zanzibar", country: "TZ", lat: -6.16, lng: 39.19, category: "island", seasonality: "winter", basePopularity: 0.68, region: "africa" },

  // ========================================
  // OTHER AFRICA (2)
  // ========================================
  { id: "MG-MADAGASCAR", name: "Madagascar", country: "MG", lat: -18.91, lng: 47.52, category: "nature", seasonality: "winter", basePopularity: 0.52, region: "africa" },
  { id: "BW-OKAVANGO", name: "Okavango Delta", country: "BW", lat: -19.84, lng: 22.72, category: "safari", seasonality: "winter", basePopularity: 0.62, region: "africa" },
];
