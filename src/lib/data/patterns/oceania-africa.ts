import type { TravelPattern } from "@/types";

// Travel patterns for Oceania & Africa
// Australia: Domestic (QLD, Bali #1 intl), NZ, Fiji, Thailand, Japan, US, Europe
// NZ: Australia (#1), Fiji, SE Asia, US, UK
// South Africa: Domestic (Cape Town, Kruger), Mauritius, Mozambique, Europe
// Kenya: Domestic (Coast, Mara), Tanzania, South Africa, UAE, India

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // NEW SOUTH WALES (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "AU-NSW", destinationId: "AU-GOLD-COAST", weight: 0.72, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-GBR", weight: 0.58, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-MELBOURNE", weight: 0.55, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-WHITSUNDAYS", weight: 0.48, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-TASMANIA", weight: 0.42, season: "summer" },
  // International
  { sourceRegionId: "AU-NSW", destinationId: "ID-BALI", weight: 0.78, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-QUEENSTOWN", weight: 0.55, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "FJ-FIJI", weight: 0.52, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "TH-BANGKOK", weight: 0.50, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "TH-PHUKET", weight: 0.48, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "JP-TOKYO", weight: 0.45, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "JP-NISEKO", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "US-HAWAII", weight: 0.42, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "GB-LONDON", weight: 0.45, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "VN-DA-NANG", weight: 0.35, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-SKI", weight: 0.30, season: "winter" },

  // ========================================
  // VICTORIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "AU-VIC", destinationId: "AU-GOLD-COAST", weight: 0.68, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-GBR", weight: 0.52, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-SYDNEY", weight: 0.55, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-TASMANIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "ID-BALI", weight: 0.75, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-QUEENSTOWN", weight: 0.52, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "FJ-FIJI", weight: 0.48, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "TH-BANGKOK", weight: 0.48, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "TH-PHUKET", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "JP-TOKYO", weight: 0.42, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "JP-NISEKO", weight: 0.40, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "US-HAWAII", weight: 0.38, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "GB-LONDON", weight: 0.42, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-SKI", weight: 0.35, season: "winter" },

  // ========================================
  // QUEENSLAND (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "AU-QLD", destinationId: "AU-SYDNEY", weight: 0.55, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "AU-MELBOURNE", weight: 0.48, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "AU-WHITSUNDAYS", weight: 0.52, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "AU-GBR", weight: 0.50, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "ID-BALI", weight: 0.72, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "NZ-QUEENSTOWN", weight: 0.48, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "FJ-FIJI", weight: 0.55, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "TH-BANGKOK", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "TH-PHUKET", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "JP-TOKYO", weight: 0.38, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "US-HAWAII", weight: 0.40, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "GB-LONDON", weight: 0.38, season: "summer" },

  // ========================================
  // WESTERN AUSTRALIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "AU-WA", destinationId: "AU-SYDNEY", weight: 0.50, season: null },
  { sourceRegionId: "AU-WA", destinationId: "AU-GOLD-COAST", weight: 0.48, season: "summer" },
  { sourceRegionId: "AU-WA", destinationId: "AU-GBR", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "ID-BALI", weight: 0.82, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "SG-SINGAPORE", weight: 0.48, season: null },
  { sourceRegionId: "AU-WA", destinationId: "MY-KL", weight: 0.38, season: null },
  { sourceRegionId: "AU-WA", destinationId: "TH-PHUKET", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "MU-MAURITIUS", weight: 0.32, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "FJ-FIJI", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "GB-LONDON", weight: 0.40, season: "summer" },
  { sourceRegionId: "AU-WA", destinationId: "NZ-QUEENSTOWN", weight: 0.42, season: null },

  // ========================================
  // SOUTH AUSTRALIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "AU-SA", destinationId: "AU-SYDNEY", weight: 0.52, season: null },
  { sourceRegionId: "AU-SA", destinationId: "AU-MELBOURNE", weight: 0.55, season: null },
  { sourceRegionId: "AU-SA", destinationId: "AU-GOLD-COAST", weight: 0.50, season: "summer" },
  { sourceRegionId: "AU-SA", destinationId: "AU-GBR", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-SA", destinationId: "ID-BALI", weight: 0.72, season: "winter" },
  { sourceRegionId: "AU-SA", destinationId: "FJ-FIJI", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-SA", destinationId: "NZ-QUEENSTOWN", weight: 0.48, season: null },
  { sourceRegionId: "AU-SA", destinationId: "TH-PHUKET", weight: 0.40, season: "winter" },
  { sourceRegionId: "AU-SA", destinationId: "GB-LONDON", weight: 0.38, season: "summer" },
  { sourceRegionId: "AU-SA", destinationId: "JP-TOKYO", weight: 0.35, season: null },

  // ========================================
  // NEW ZEALAND (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "NZ", destinationId: "NZ-QUEENSTOWN", weight: 0.60, season: null },
  { sourceRegionId: "NZ", destinationId: "NZ-SKI", weight: 0.45, season: "winter" },
  // International
  { sourceRegionId: "NZ", destinationId: "AU-SYDNEY", weight: 0.72, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-GOLD-COAST", weight: 0.62, season: "summer" },
  { sourceRegionId: "NZ", destinationId: "AU-MELBOURNE", weight: 0.55, season: null },
  { sourceRegionId: "NZ", destinationId: "FJ-FIJI", weight: 0.58, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "WS-SAMOA", weight: 0.35, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "ID-BALI", weight: 0.52, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "TH-BANGKOK", weight: 0.42, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "TH-PHUKET", weight: 0.40, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "US-HAWAII", weight: 0.38, season: null },
  { sourceRegionId: "NZ", destinationId: "GB-LONDON", weight: 0.48, season: "summer" },
  { sourceRegionId: "NZ", destinationId: "JP-TOKYO", weight: 0.35, season: null },
  { sourceRegionId: "NZ", destinationId: "JP-NISEKO", weight: 0.32, season: "winter" },

  // ========================================
  // SOUTH AFRICA (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "ZA", destinationId: "ZA-CAPE-TOWN", weight: 0.72, season: "summer" },
  { sourceRegionId: "ZA", destinationId: "ZA-GARDEN-ROUTE", weight: 0.55, season: "summer" },
  { sourceRegionId: "ZA", destinationId: "ZA-KRUGER", weight: 0.62, season: "winter" },
  // International
  { sourceRegionId: "ZA", destinationId: "MU-MAURITIUS", weight: 0.58, season: null },
  { sourceRegionId: "ZA", destinationId: "TZ-ZANZIBAR", weight: 0.42, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "NA-NAMIBIA", weight: 0.38, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "BW-OKAVANGO", weight: 0.35, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "MG-MADAGASCAR", weight: 0.28, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "GB-LONDON", weight: 0.52, season: "summer" },
  { sourceRegionId: "ZA", destinationId: "FR-PARIS", weight: 0.35, season: "summer" },
  { sourceRegionId: "ZA", destinationId: "AE-DUBAI", weight: 0.38, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "TH-BANGKOK", weight: 0.32, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "TH-PHUKET", weight: 0.30, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "ID-BALI", weight: 0.32, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "PT-LISBON", weight: 0.30, season: "summer" },

  // ========================================
  // KENYA (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "KE", destinationId: "KE-MASAI-MARA", weight: 0.62, season: "summer" },
  { sourceRegionId: "KE", destinationId: "KE-COAST", weight: 0.58, season: "winter" },
  // International
  { sourceRegionId: "KE", destinationId: "TZ-ZANZIBAR", weight: 0.45, season: "winter" },
  { sourceRegionId: "KE", destinationId: "TZ-SERENGETI", weight: 0.35, season: "summer" },
  { sourceRegionId: "KE", destinationId: "ZA-CAPE-TOWN", weight: 0.32, season: "summer" },
  { sourceRegionId: "KE", destinationId: "AE-DUBAI", weight: 0.48, season: null },
  { sourceRegionId: "KE", destinationId: "IN-GOA", weight: 0.35, season: "winter" },
  { sourceRegionId: "KE", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "KE", destinationId: "MU-MAURITIUS", weight: 0.30, season: null },
  { sourceRegionId: "KE", destinationId: "TH-BANGKOK", weight: 0.28, season: "winter" },
];
