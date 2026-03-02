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

  // ========================================
  // AU-PERTH (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-WA", destinationId: "AU-PERTH", weight: 0.90, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-PERTH", weight: 0.40, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-PERTH", weight: 0.30, season: null },
  { sourceRegionId: "SG", destinationId: "AU-PERTH", weight: 0.30, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-PERTH", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "AU-PERTH", weight: 0.15, season: null },

  // ========================================
  // AU-CAIRNS (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "AU-CAIRNS", weight: 0.80, season: "winter" },
  { sourceRegionId: "AU-WA", destinationId: "AU-CAIRNS", weight: 0.30, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "AU-CAIRNS", weight: 0.30, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-CAIRNS", weight: 0.20, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "AU-CAIRNS", weight: 0.20, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AU-CAIRNS", weight: 0.25, season: null },
  { sourceRegionId: "SG", destinationId: "AU-CAIRNS", weight: 0.20, season: null },

  // ========================================
  // AU-ULURU (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "AU-ULURU", weight: 0.55, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-ULURU", weight: 0.45, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-ULURU", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "AU-ULURU", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AU-ULURU", weight: 0.20, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "AU-ULURU", weight: 0.20, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "AU-ULURU", weight: 0.18, season: "winter" },

  // ========================================
  // AU-BYRON-BAY (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "AU-BYRON-BAY", weight: 0.80, season: "summer" },
  { sourceRegionId: "AU-QLD", destinationId: "AU-BYRON-BAY", weight: 0.60, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-BYRON-BAY", weight: 0.50, season: "summer" },
  { sourceRegionId: "NZ", destinationId: "AU-BYRON-BAY", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-BYRON-BAY", weight: 0.20, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "AU-BYRON-BAY", weight: 0.18, season: "summer" },

  // ========================================
  // AU-KANGAROO (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-SA", destinationId: "AU-KANGAROO", weight: 0.75, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-KANGAROO", weight: 0.45, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-KANGAROO", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-KANGAROO", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "AU-KANGAROO", weight: 0.18, season: null },

  // ========================================
  // AU-ADELAIDE (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-SA", destinationId: "AU-ADELAIDE", weight: 0.55, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-ADELAIDE", weight: 0.50, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-ADELAIDE", weight: 0.45, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-ADELAIDE", weight: 0.25, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-ADELAIDE", weight: 0.20, season: null },
  { sourceRegionId: "SG", destinationId: "AU-ADELAIDE", weight: 0.15, season: null },

  // ========================================
  // AU-BROOME (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-WA", destinationId: "AU-BROOME", weight: 0.80, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-BROOME", weight: 0.30, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-BROOME", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-BROOME", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AU-BROOME", weight: 0.15, season: "winter" },

  // ========================================
  // AU-NINGALOO (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-WA", destinationId: "AU-NINGALOO", weight: 0.85, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-NINGALOO", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-NINGALOO", weight: 0.20, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AU-NINGALOO", weight: 0.15, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "AU-NINGALOO", weight: 0.15, season: "winter" },

  // ========================================
  // AU-MARGARET-RIVER (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-WA", destinationId: "AU-MARGARET-RIVER", weight: 0.85, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-MARGARET-RIVER", weight: 0.28, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-MARGARET-RIVER", weight: 0.25, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-MARGARET-RIVER", weight: 0.22, season: null },
  { sourceRegionId: "SG", destinationId: "AU-MARGARET-RIVER", weight: 0.18, season: null },

  // ========================================
  // NZ-WELLINGTON (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-WELLINGTON", weight: 0.70, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-WELLINGTON", weight: 0.40, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-WELLINGTON", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-WELLINGTON", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-WELLINGTON", weight: 0.22, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NZ-WELLINGTON", weight: 0.15, season: null },

  // ========================================
  // NZ-ROTORUA (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-ROTORUA", weight: 0.75, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-ROTORUA", weight: 0.45, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-ROTORUA", weight: 0.38, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-ROTORUA", weight: 0.30, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-ROTORUA", weight: 0.25, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "NZ-ROTORUA", weight: 0.20, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "NZ-ROTORUA", weight: 0.25, season: null },

  // ========================================
  // NZ-MILFORD (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-MILFORD", weight: 0.70, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-MILFORD", weight: 0.45, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-MILFORD", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-MILFORD", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-MILFORD", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "NZ-MILFORD", weight: 0.22, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "NZ-MILFORD", weight: 0.20, season: "summer" },

  // ========================================
  // NZ-ABEL-TASMAN (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-ABEL-TASMAN", weight: 0.72, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-ABEL-TASMAN", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-ABEL-TASMAN", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "NZ-ABEL-TASMAN", weight: 0.22, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-ABEL-TASMAN", weight: 0.20, season: "summer" },

  // ========================================
  // NZ-HOBBITON (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-HOBBITON", weight: 0.65, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-HOBBITON", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-HOBBITON", weight: 0.40, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-HOBBITON", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "NZ-HOBBITON", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NZ-HOBBITON", weight: 0.22, season: null },

  // ========================================
  // NZ-TONGARIRO (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-TONGARIRO", weight: 0.72, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-TONGARIRO", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-TONGARIRO", weight: 0.28, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-TONGARIRO", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "NZ-TONGARIRO", weight: 0.18, season: "summer" },

  // ========================================
  // NZ-KAIKOURA (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-KAIKOURA", weight: 0.68, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-KAIKOURA", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-KAIKOURA", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-KAIKOURA", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NZ-KAIKOURA", weight: 0.15, season: null },

  // ========================================
  // PF-BORA-BORA (destination) -> sources
  // ========================================
  { sourceRegionId: "US-W", destinationId: "PF-BORA-BORA", weight: 0.40, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "PF-BORA-BORA", weight: 0.30, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "PF-BORA-BORA", weight: 0.30, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "PF-BORA-BORA", weight: 0.20, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "PF-BORA-BORA", weight: 0.20, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "PF-BORA-BORA", weight: 0.18, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "PF-BORA-BORA", weight: 0.18, season: "winter" },

  // ========================================
  // CK-RAROTONGA (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "CK-RAROTONGA", weight: 0.65, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "CK-RAROTONGA", weight: 0.35, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "CK-RAROTONGA", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "CK-RAROTONGA", weight: 0.22, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "CK-RAROTONGA", weight: 0.15, season: "winter" },

  // ========================================
  // VU-VANUATU (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "VU-VANUATU", weight: 0.60, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "VU-VANUATU", weight: 0.50, season: null },
  { sourceRegionId: "NZ", destinationId: "VU-VANUATU", weight: 0.35, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "VU-VANUATU", weight: 0.30, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "VU-VANUATU", weight: 0.15, season: null },

  // ========================================
  // TO-TONGA (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "TO-TONGA", weight: 0.55, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "TO-TONGA", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "TO-TONGA", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "TO-TONGA", weight: 0.18, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "TO-TONGA", weight: 0.12, season: "winter" },

  // ========================================
  // NC-NOUMEA (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "NC-NOUMEA", weight: 0.55, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "NC-NOUMEA", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "NC-NOUMEA", weight: 0.40, season: null },
  { sourceRegionId: "NZ", destinationId: "NC-NOUMEA", weight: 0.28, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "NC-NOUMEA", weight: 0.22, season: null },

  // ========================================
  // PG-PNG (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "PG-PNG", weight: 0.50, season: null },
  { sourceRegionId: "AU-QLD", destinationId: "PG-PNG", weight: 0.45, season: null },
  { sourceRegionId: "NZ", destinationId: "PG-PNG", weight: 0.20, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PG-PNG", weight: 0.15, season: null },
  { sourceRegionId: "US-W", destinationId: "PG-PNG", weight: 0.12, season: null },

  // ========================================
  // ZA-DURBAN (destination) -> sources
  // ========================================
  { sourceRegionId: "ZA", destinationId: "ZA-DURBAN", weight: 0.75, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-DURBAN", weight: 0.25, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ZA-DURBAN", weight: 0.18, season: "summer" },
  { sourceRegionId: "AE", destinationId: "ZA-DURBAN", weight: 0.20, season: "summer" },
  { sourceRegionId: "IN-SOUTH", destinationId: "ZA-DURBAN", weight: 0.22, season: "summer" },
  { sourceRegionId: "IN-NORTH", destinationId: "ZA-DURBAN", weight: 0.18, season: "summer" },

  // ========================================
  // ZA-STELLENBOSCH (destination) -> sources
  // ========================================
  { sourceRegionId: "ZA", destinationId: "ZA-STELLENBOSCH", weight: 0.70, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-STELLENBOSCH", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ZA-STELLENBOSCH", weight: 0.25, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZA-STELLENBOSCH", weight: 0.22, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "ZA-STELLENBOSCH", weight: 0.18, season: null },

  // ========================================
  // ZA-DRAKENSBERG (destination) -> sources
  // ========================================
  { sourceRegionId: "ZA", destinationId: "ZA-DRAKENSBERG", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-DRAKENSBERG", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ZA-DRAKENSBERG", weight: 0.20, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "ZA-DRAKENSBERG", weight: 0.15, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZA-DRAKENSBERG", weight: 0.15, season: "summer" },

  // ========================================
  // ZW-VICTORIA-FALLS (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "ZW-VICTORIA-FALLS", weight: 0.40, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "ZW-VICTORIA-FALLS", weight: 0.20, season: null },
  { sourceRegionId: "US-NE", destinationId: "ZW-VICTORIA-FALLS", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ZW-VICTORIA-FALLS", weight: 0.20, season: null },
  { sourceRegionId: "AE", destinationId: "ZW-VICTORIA-FALLS", weight: 0.15, season: null },
  { sourceRegionId: "ZA", destinationId: "ZW-VICTORIA-FALLS", weight: 0.35, season: null },
  { sourceRegionId: "US-W", destinationId: "ZW-VICTORIA-FALLS", weight: 0.18, season: null },

  // ========================================
  // ZM-SOUTH-LUANGWA (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.20, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.30, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.15, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZM-SOUTH-LUANGWA", weight: 0.12, season: "winter" },

  // ========================================
  // RW-VOLCANOES (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "RW-VOLCANOES", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "RW-VOLCANOES", weight: 0.30, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "RW-VOLCANOES", weight: 0.20, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "RW-VOLCANOES", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RW-VOLCANOES", weight: 0.15, season: null },
  { sourceRegionId: "US-W", destinationId: "RW-VOLCANOES", weight: 0.18, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "RW-VOLCANOES", weight: 0.12, season: null },

  // ========================================
  // UG-BWINDI (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "UG-BWINDI", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "UG-BWINDI", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "UG-BWINDI", weight: 0.22, season: null },
  { sourceRegionId: "DE-BY", destinationId: "UG-BWINDI", weight: 0.18, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "UG-BWINDI", weight: 0.15, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "UG-BWINDI", weight: 0.15, season: null },

  // ========================================
  // RW-KIGALI (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "RW-KIGALI", weight: 0.32, season: null },
  { sourceRegionId: "US-NE", destinationId: "RW-KIGALI", weight: 0.25, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "RW-KIGALI", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RW-KIGALI", weight: 0.18, season: null },
  { sourceRegionId: "AE", destinationId: "RW-KIGALI", weight: 0.20, season: null },
  { sourceRegionId: "EG", destinationId: "RW-KIGALI", weight: 0.15, season: null },

  // ========================================
  // TZ-KILIMANJARO (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "TZ-KILIMANJARO", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "TZ-KILIMANJARO", weight: 0.32, season: null },
  { sourceRegionId: "US-W", destinationId: "TZ-KILIMANJARO", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "TZ-KILIMANJARO", weight: 0.25, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "TZ-KILIMANJARO", weight: 0.18, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "TZ-KILIMANJARO", weight: 0.18, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "TZ-KILIMANJARO", weight: 0.15, season: null },

  // ========================================
  // TZ-NGORONGORO (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "TZ-NGORONGORO", weight: 0.40, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "TZ-NGORONGORO", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "TZ-NGORONGORO", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "TZ-NGORONGORO", weight: 0.25, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "TZ-NGORONGORO", weight: 0.18, season: "summer" },
  { sourceRegionId: "AE", destinationId: "TZ-NGORONGORO", weight: 0.20, season: "summer" },

  // ========================================
  // KE-LAMU (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "KE-LAMU", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "KE-LAMU", weight: 0.25, season: "winter" },
  { sourceRegionId: "AE", destinationId: "KE-LAMU", weight: 0.28, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "KE-LAMU", weight: 0.20, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "KE-LAMU", weight: 0.18, season: "winter" },
  { sourceRegionId: "KE", destinationId: "KE-LAMU", weight: 0.35, season: "winter" },

  // ========================================
  // KE-NAIROBI (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "KE-NAIROBI", weight: 0.42, season: null },
  { sourceRegionId: "AE", destinationId: "KE-NAIROBI", weight: 0.38, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "KE-NAIROBI", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "KE-NAIROBI", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "KE-NAIROBI", weight: 0.22, season: null },
  { sourceRegionId: "EG", destinationId: "KE-NAIROBI", weight: 0.20, season: null },
  { sourceRegionId: "ZA", destinationId: "KE-NAIROBI", weight: 0.18, season: null },

  // ========================================
  // SN-DAKAR (destination) -> sources
  // ========================================
  { sourceRegionId: "FR-ZC", destinationId: "SN-DAKAR", weight: 0.45, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "SN-DAKAR", weight: 0.30, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "SN-DAKAR", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "SN-DAKAR", weight: 0.22, season: null },
  { sourceRegionId: "DE-BY", destinationId: "SN-DAKAR", weight: 0.18, season: null },
  { sourceRegionId: "AE", destinationId: "SN-DAKAR", weight: 0.15, season: null },

  // ========================================
  // SN-SAINT-LOUIS (destination) -> sources
  // ========================================
  { sourceRegionId: "FR-ZC", destinationId: "SN-SAINT-LOUIS", weight: 0.48, season: "winter" },
  { sourceRegionId: "FR-ZB", destinationId: "SN-SAINT-LOUIS", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "SN-SAINT-LOUIS", weight: 0.20, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "SN-SAINT-LOUIS", weight: 0.15, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "SN-SAINT-LOUIS", weight: 0.12, season: "winter" },

  // ========================================
  // CV-SAL (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "CV-SAL", weight: 0.50, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CV-SAL", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CV-SAL", weight: 0.38, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "CV-SAL", weight: 0.30, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "CV-SAL", weight: 0.25, season: null },
  { sourceRegionId: "ZA", destinationId: "CV-SAL", weight: 0.12, season: null },

  // ========================================
  // CV-SANTIAGO (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "CV-SANTIAGO", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "CV-SANTIAGO", weight: 0.40, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CV-SANTIAGO", weight: 0.28, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CV-SANTIAGO", weight: 0.22, season: null },
  { sourceRegionId: "PT", destinationId: "CV-SANTIAGO", weight: 0.35, season: null },

  // ========================================
  // MG-NOSY-BE (destination) -> sources
  // ========================================
  { sourceRegionId: "FR-ZC", destinationId: "MG-NOSY-BE", weight: 0.45, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "MG-NOSY-BE", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "MG-NOSY-BE", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MG-NOSY-BE", weight: 0.22, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "MG-NOSY-BE", weight: 0.20, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "MG-NOSY-BE", weight: 0.12, season: "winter" },

  // ========================================
  // MZ-TOFO (destination) -> sources
  // ========================================
  { sourceRegionId: "ZA", destinationId: "MZ-TOFO", weight: 0.55, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "MZ-TOFO", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MZ-TOFO", weight: 0.18, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "MZ-TOFO", weight: 0.15, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "MZ-TOFO", weight: 0.12, season: "winter" },

  // ========================================
  // ET-OMO (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "ET-OMO", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "ET-OMO", weight: 0.22, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "ET-OMO", weight: 0.20, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "ET-OMO", weight: 0.18, season: "winter" },
  { sourceRegionId: "EG", destinationId: "ET-OMO", weight: 0.15, season: "winter" },

  // ========================================
  // ET-SIMIEN (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "ET-SIMIEN", weight: 0.30, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "ET-SIMIEN", weight: 0.25, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "ET-SIMIEN", weight: 0.22, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "ET-SIMIEN", weight: 0.18, season: "winter" },
  { sourceRegionId: "EG", destinationId: "ET-SIMIEN", weight: 0.18, season: "winter" },
  { sourceRegionId: "AE", destinationId: "ET-SIMIEN", weight: 0.15, season: "winter" },

  // ========================================
  // TZ-PEMBA (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "TZ-PEMBA", weight: 0.32, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "TZ-PEMBA", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TZ-PEMBA", weight: 0.22, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "TZ-PEMBA", weight: 0.20, season: "winter" },
  { sourceRegionId: "AE", destinationId: "TZ-PEMBA", weight: 0.18, season: "winter" },
  { sourceRegionId: "KE", destinationId: "TZ-PEMBA", weight: 0.20, season: "winter" },

  // ========================================
  // ZA-WILD-COAST (destination) -> sources
  // ========================================
  { sourceRegionId: "ZA", destinationId: "ZA-WILD-COAST", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-WILD-COAST", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ZA-WILD-COAST", weight: 0.15, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "ZA-WILD-COAST", weight: 0.12, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZA-WILD-COAST", weight: 0.12, season: "summer" },

  // ========================================
  // NA-SOSSUSVLEI (destination) -> sources
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "NA-SOSSUSVLEI", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "NA-SOSSUSVLEI", weight: 0.35, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "NA-SOSSUSVLEI", weight: 0.42, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "NA-SOSSUSVLEI", weight: 0.25, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "NA-SOSSUSVLEI", weight: 0.20, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "NA-SOSSUSVLEI", weight: 0.15, season: "winter" },

  // ========================================
  // NA-ETOSHA (destination) -> sources
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "NA-ETOSHA", weight: 0.40, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "NA-ETOSHA", weight: 0.38, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "NA-ETOSHA", weight: 0.45, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "NA-ETOSHA", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "NA-ETOSHA", weight: 0.22, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "NA-ETOSHA", weight: 0.15, season: "winter" },

  // ========================================
  // BW-CHOBE (destination) -> sources
  // ========================================
  { sourceRegionId: "GB-ENG", destinationId: "BW-CHOBE", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "BW-CHOBE", weight: 0.28, season: "winter" },
  { sourceRegionId: "ZA", destinationId: "BW-CHOBE", weight: 0.45, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "BW-CHOBE", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "BW-CHOBE", weight: 0.22, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "BW-CHOBE", weight: 0.15, season: "winter" },

  // ========================================
  // AU-BLUE-MOUNTAINS (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.85, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.40, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.30, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.25, season: null },
  { sourceRegionId: "US-W", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.20, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AU-BLUE-MOUNTAINS", weight: 0.22, season: null },

  // ========================================
  // AU-DAINTREE (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "AU-DAINTREE", weight: 0.65, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "AU-DAINTREE", weight: 0.70, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-DAINTREE", weight: 0.40, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "AU-DAINTREE", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-DAINTREE", weight: 0.22, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "AU-DAINTREE", weight: 0.18, season: "winter" },

  // ========================================
  // AU-PHILLIP-ISLAND (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-VIC", destinationId: "AU-PHILLIP-ISLAND", weight: 0.80, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-PHILLIP-ISLAND", weight: 0.42, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-PHILLIP-ISLAND", weight: 0.25, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-PHILLIP-ISLAND", weight: 0.20, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AU-PHILLIP-ISLAND", weight: 0.18, season: null },

  // ========================================
  // NZ-COROMANDEL (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-COROMANDEL", weight: 0.78, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-COROMANDEL", weight: 0.32, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-COROMANDEL", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-COROMANDEL", weight: 0.20, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-COROMANDEL", weight: 0.15, season: "summer" },

  // ========================================
  // NZ-WANAKA (destination) -> sources
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-WANAKA", weight: 0.72, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-WANAKA", weight: 0.42, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-WANAKA", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-WANAKA", weight: 0.30, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-WANAKA", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NZ-WANAKA", weight: 0.18, season: null },

  // ========================================
  // FJ-MAMANUCA (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-NSW", destinationId: "FJ-MAMANUCA", weight: 0.60, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "FJ-MAMANUCA", weight: 0.55, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "FJ-MAMANUCA", weight: 0.48, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "FJ-MAMANUCA", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "FJ-MAMANUCA", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "FJ-MAMANUCA", weight: 0.18, season: "winter" },

  // ========================================
  // PF-MOOREA (destination) -> sources
  // ========================================
  { sourceRegionId: "US-W", destinationId: "PF-MOOREA", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "PF-MOOREA", weight: 0.32, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "PF-MOOREA", weight: 0.28, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "PF-MOOREA", weight: 0.25, season: "winter" },
  { sourceRegionId: "NZ", destinationId: "PF-MOOREA", weight: 0.22, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "PF-MOOREA", weight: 0.20, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "PF-MOOREA", weight: 0.18, season: "winter" },

  // ========================================
  // AU-SUNSHINE-COAST (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-QLD", destinationId: "AU-SUNSHINE-COAST", weight: 0.80, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-SUNSHINE-COAST", weight: 0.65, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-SUNSHINE-COAST", weight: 0.55, season: "summer" },
  { sourceRegionId: "NZ", destinationId: "AU-SUNSHINE-COAST", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-SUNSHINE-COAST", weight: 0.18, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "AU-SUNSHINE-COAST", weight: 0.15, season: "summer" },

  // ========================================
  // AU-GREAT-OCEAN (destination) -> sources
  // ========================================
  { sourceRegionId: "AU-VIC", destinationId: "AU-GREAT-OCEAN", weight: 0.80, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-GREAT-OCEAN", weight: 0.45, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-GREAT-OCEAN", weight: 0.32, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-GREAT-OCEAN", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "AU-GREAT-OCEAN", weight: 0.22, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AU-GREAT-OCEAN", weight: 0.20, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "AU-GREAT-OCEAN", weight: 0.18, season: null },

  // ========================================
  // NEW DESTINATIONS — ADDED 2024
  // ========================================

  // ----------------------------------------
  // AU-NOOSA (Queensland)
  // ----------------------------------------
  { sourceRegionId: "AU-NSW", destinationId: "AU-NOOSA", weight: 0.70, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-NOOSA", weight: 0.65, season: "summer" },
  { sourceRegionId: "AU-QLD", destinationId: "AU-NOOSA", weight: 0.80, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-NOOSA", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-NOOSA", weight: 0.18, season: "summer" },

  // ----------------------------------------
  // AU-BAROSSA (South Australia wine)
  // ----------------------------------------
  { sourceRegionId: "AU-SA", destinationId: "AU-BAROSSA", weight: 0.85, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-BAROSSA", weight: 0.55, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-BAROSSA", weight: 0.45, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-BAROSSA", weight: 0.28, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-BAROSSA", weight: 0.22, season: null },

  // ----------------------------------------
  // AU-ROTTNEST (Western Australia island)
  // ----------------------------------------
  { sourceRegionId: "AU-WA", destinationId: "AU-ROTTNEST", weight: 0.88, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "AU-ROTTNEST", weight: 0.38, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-ROTTNEST", weight: 0.35, season: "summer" },
  { sourceRegionId: "NZ", destinationId: "AU-ROTTNEST", weight: 0.22, season: "summer" },
  { sourceRegionId: "SG", destinationId: "AU-ROTTNEST", weight: 0.18, season: "summer" },

  // ----------------------------------------
  // AU-KAKADU (Northern Territory)
  // ----------------------------------------
  { sourceRegionId: "AU-NSW", destinationId: "AU-KAKADU", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-VIC", destinationId: "AU-KAKADU", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-QLD", destinationId: "AU-KAKADU", weight: 0.40, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AU-KAKADU", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "AU-KAKADU", weight: 0.20, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AU-KAKADU", weight: 0.15, season: "winter" },

  // ----------------------------------------
  // AU-FRASER (Fraser Island, QLD)
  // ----------------------------------------
  { sourceRegionId: "AU-QLD", destinationId: "AU-FRASER", weight: 0.82, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AU-FRASER", weight: 0.60, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "AU-FRASER", weight: 0.48, season: null },
  { sourceRegionId: "NZ", destinationId: "AU-FRASER", weight: 0.30, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AU-FRASER", weight: 0.20, season: null },

  // ----------------------------------------
  // NZ-BAY-ISLANDS (Bay of Islands)
  // ----------------------------------------
  { sourceRegionId: "NZ", destinationId: "NZ-BAY-ISLANDS", weight: 0.80, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-BAY-ISLANDS", weight: 0.42, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-BAY-ISLANDS", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-BAY-ISLANDS", weight: 0.28, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-BAY-ISLANDS", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // NZ-FIORDLAND (Milford Sound)
  // ----------------------------------------
  { sourceRegionId: "NZ", destinationId: "NZ-FIORDLAND", weight: 0.75, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-FIORDLAND", weight: 0.50, season: "summer" },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-FIORDLAND", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-FIORDLAND", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "NZ-FIORDLAND", weight: 0.30, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "NZ-FIORDLAND", weight: 0.28, season: "summer" },

  // ----------------------------------------
  // NZ-TEKAPO (Lake Tekapo, Mackenzie Basin)
  // ----------------------------------------
  { sourceRegionId: "NZ", destinationId: "NZ-TEKAPO", weight: 0.78, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-TEKAPO", weight: 0.45, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-TEKAPO", weight: 0.42, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "NZ-TEKAPO", weight: 0.35, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "NZ-TEKAPO", weight: 0.30, season: null },

  // ----------------------------------------
  // ZA-HERMANUS (Whale watching, Western Cape)
  // ----------------------------------------
  { sourceRegionId: "ZA", destinationId: "ZA-HERMANUS", weight: 0.82, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-HERMANUS", weight: 0.38, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ZA-HERMANUS", weight: 0.28, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZA-HERMANUS", weight: 0.22, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "ZA-HERMANUS", weight: 0.18, season: null },

  // ----------------------------------------
  // ZA-ADDO (Addo Elephant Park, Eastern Cape)
  // ----------------------------------------
  { sourceRegionId: "ZA", destinationId: "ZA-ADDO", weight: 0.78, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ZA-ADDO", weight: 0.42, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ZA-ADDO", weight: 0.30, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ZA-ADDO", weight: 0.25, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "ZA-ADDO", weight: 0.18, season: null },

  // ----------------------------------------
  // TZ-MAFIA (Mafia Island, Tanzania)
  // ----------------------------------------
  { sourceRegionId: "KE", destinationId: "TZ-MAFIA", weight: 0.48, season: null },
  { sourceRegionId: "ZA", destinationId: "TZ-MAFIA", weight: 0.40, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "TZ-MAFIA", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "TZ-MAFIA", weight: 0.22, season: null },
  { sourceRegionId: "AE", destinationId: "TZ-MAFIA", weight: 0.28, season: null },

  // ----------------------------------------
  // KE-SAMBURU (Northern Kenya safari)
  // ----------------------------------------
  { sourceRegionId: "KE", destinationId: "KE-SAMBURU", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "KE-SAMBURU", weight: 0.48, season: null },
  { sourceRegionId: "ZA", destinationId: "KE-SAMBURU", weight: 0.35, season: null },
  { sourceRegionId: "AE", destinationId: "KE-SAMBURU", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "KE-SAMBURU", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "KE-SAMBURU", weight: 0.22, season: null },

  // ----------------------------------------
  // UG-MURCHISON (Murchison Falls, Uganda)
  // ----------------------------------------
  { sourceRegionId: "KE", destinationId: "UG-MURCHISON", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "UG-MURCHISON", weight: 0.45, season: null },
  { sourceRegionId: "ZA", destinationId: "UG-MURCHISON", weight: 0.30, season: null },
  { sourceRegionId: "AE", destinationId: "UG-MURCHISON", weight: 0.25, season: null },
  { sourceRegionId: "US-NE", destinationId: "UG-MURCHISON", weight: 0.22, season: null },

  // ----------------------------------------
  // MZ-BAZARUTO (Bazaruto Archipelago, Mozambique)
  // ----------------------------------------
  { sourceRegionId: "ZA", destinationId: "MZ-BAZARUTO", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "MZ-BAZARUTO", weight: 0.35, season: null },
  { sourceRegionId: "KE", destinationId: "MZ-BAZARUTO", weight: 0.30, season: null },
  { sourceRegionId: "AE", destinationId: "MZ-BAZARUTO", weight: 0.28, season: null },
  { sourceRegionId: "PT", destinationId: "MZ-BAZARUTO", weight: 0.25, season: null },

  // ----------------------------------------
  // RW-NYUNGWE (Nyungwe Forest, Rwanda)
  // ----------------------------------------
  { sourceRegionId: "KE", destinationId: "RW-NYUNGWE", weight: 0.48, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "RW-NYUNGWE", weight: 0.40, season: null },
  { sourceRegionId: "ZA", destinationId: "RW-NYUNGWE", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "RW-NYUNGWE", weight: 0.25, season: null },
  { sourceRegionId: "AE", destinationId: "RW-NYUNGWE", weight: 0.20, season: null },

  // ========================================
  // NZ-AUCKLAND — INBOUND
  // ========================================
  { sourceRegionId: "NZ", destinationId: "NZ-AUCKLAND", weight: 0.80, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NZ-AUCKLAND", weight: 0.55, season: null },
  { sourceRegionId: "AU-VIC", destinationId: "NZ-AUCKLAND", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "NZ-AUCKLAND", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NZ-AUCKLAND", weight: 0.38, season: null },
  { sourceRegionId: "US-W", destinationId: "NZ-AUCKLAND", weight: 0.28, season: null },
];
