import type { TravelPattern } from "@/types";

// Travel patterns for remaining regions
// Pakistan: UAE (#1), Saudi, Turkey, Malaysia, domestic
// Bangladesh: India, Malaysia, Saudi, UAE, Thailand
// Sri Lanka: India, Maldives, domestic, Singapore, UAE
// Myanmar: Thailand, China, domestic
// Cambodia: Thailand, Vietnam, domestic (Siem Reap already in Asia destinations)
// Kazakhstan: Turkey, UAE, Thailand, domestic, Uzbekistan
// Uzbekistan: Turkey, Kazakhstan, UAE, domestic
// Nigeria: UK, US, UAE, Ghana, South Africa

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // PAKISTAN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "PK", destinationId: "AE-DUBAI", weight: 0.72, season: null },
  { sourceRegionId: "PK", destinationId: "AE-ABU-DHABI", weight: 0.55, season: null },
  { sourceRegionId: "PK", destinationId: "TR-ISTANBUL", weight: 0.48, season: null },
  { sourceRegionId: "PK", destinationId: "MY-KL", weight: 0.42, season: null },
  { sourceRegionId: "PK", destinationId: "TH-BANGKOK", weight: 0.38, season: "winter" },
  { sourceRegionId: "PK", destinationId: "PK-HUNZA", weight: 0.45, season: "summer" },
  { sourceRegionId: "PK", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "PK", destinationId: "IN-GOA", weight: 0.25, season: "winter" },
  { sourceRegionId: "PK", destinationId: "MV-MALDIVES", weight: 0.28, season: "winter" },

  // ========================================
  // BANGLADESH -> DESTINATIONS
  // ========================================
  { sourceRegionId: "BD", destinationId: "BD-COXS-BAZAR", weight: 0.62, season: "winter" },
  { sourceRegionId: "BD", destinationId: "IN-GOA", weight: 0.35, season: "winter" },
  { sourceRegionId: "BD", destinationId: "MY-KL", weight: 0.48, season: null },
  { sourceRegionId: "BD", destinationId: "AE-DUBAI", weight: 0.55, season: null },
  { sourceRegionId: "BD", destinationId: "TH-BANGKOK", weight: 0.42, season: "winter" },
  { sourceRegionId: "BD", destinationId: "SG-SINGAPORE", weight: 0.35, season: null },
  { sourceRegionId: "BD", destinationId: "TR-ISTANBUL", weight: 0.32, season: null },
  { sourceRegionId: "BD", destinationId: "GB-LONDON", weight: 0.35, season: null },
  { sourceRegionId: "BD", destinationId: "MV-MALDIVES", weight: 0.28, season: "winter" },

  // ========================================
  // SRI LANKA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "LK", destinationId: "IN-GOA", weight: 0.45, season: "winter" },
  { sourceRegionId: "LK", destinationId: "IN-KERALA", weight: 0.38, season: "winter" },
  { sourceRegionId: "LK", destinationId: "MV-MALDIVES", weight: 0.42, season: "winter" },
  { sourceRegionId: "LK", destinationId: "SG-SINGAPORE", weight: 0.38, season: null },
  { sourceRegionId: "LK", destinationId: "AE-DUBAI", weight: 0.48, season: null },
  { sourceRegionId: "LK", destinationId: "MY-KL", weight: 0.35, season: null },
  { sourceRegionId: "LK", destinationId: "TH-BANGKOK", weight: 0.38, season: "winter" },
  { sourceRegionId: "LK", destinationId: "GB-LONDON", weight: 0.32, season: null },
  { sourceRegionId: "LK", destinationId: "AU-SYDNEY", weight: 0.25, season: null },

  // ========================================
  // MYANMAR -> DESTINATIONS
  // ========================================
  { sourceRegionId: "MM", destinationId: "MM-INLE", weight: 0.52, season: "winter" },
  { sourceRegionId: "MM", destinationId: "TH-BANGKOK", weight: 0.62, season: null },
  { sourceRegionId: "MM", destinationId: "SG-SINGAPORE", weight: 0.38, season: null },
  { sourceRegionId: "MM", destinationId: "MY-KL", weight: 0.35, season: null },
  { sourceRegionId: "MM", destinationId: "CN-HAINAN", weight: 0.30, season: "winter" },
  { sourceRegionId: "MM", destinationId: "JP-TOKYO", weight: 0.25, season: null },
  { sourceRegionId: "MM", destinationId: "IN-GOA", weight: 0.28, season: "winter" },

  // ========================================
  // CAMBODIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "KH", destinationId: "KH-SIEM-REAP", weight: 0.55, season: "winter" },
  { sourceRegionId: "KH", destinationId: "TH-BANGKOK", weight: 0.62, season: null },
  { sourceRegionId: "KH", destinationId: "VN-HANOI", weight: 0.42, season: null },
  { sourceRegionId: "KH", destinationId: "SG-SINGAPORE", weight: 0.35, season: null },
  { sourceRegionId: "KH", destinationId: "MY-KL", weight: 0.32, season: null },
  { sourceRegionId: "KH", destinationId: "CN-HAINAN", weight: 0.25, season: "winter" },
  { sourceRegionId: "KH", destinationId: "JP-TOKYO", weight: 0.22, season: null },

  // ========================================
  // KAZAKHSTAN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "KZ", destinationId: "KZ-ALMATY", weight: 0.45, season: null },
  { sourceRegionId: "KZ", destinationId: "TR-ISTANBUL", weight: 0.62, season: null },
  { sourceRegionId: "KZ", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "KZ", destinationId: "AE-DUBAI", weight: 0.52, season: "winter" },
  { sourceRegionId: "KZ", destinationId: "TH-BANGKOK", weight: 0.42, season: "winter" },
  { sourceRegionId: "KZ", destinationId: "TH-PHUKET", weight: 0.38, season: "winter" },
  { sourceRegionId: "KZ", destinationId: "UZ-SAMARKAND", weight: 0.32, season: null },
  { sourceRegionId: "KZ", destinationId: "GE-TBILISI", weight: 0.35, season: null },
  { sourceRegionId: "KZ", destinationId: "EG-HURGHADA", weight: 0.35, season: "winter" },

  // ========================================
  // UZBEKISTAN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "UZ", destinationId: "UZ-SAMARKAND", weight: 0.52, season: null },
  { sourceRegionId: "UZ", destinationId: "TR-ISTANBUL", weight: 0.58, season: null },
  { sourceRegionId: "UZ", destinationId: "TR-ANTALYA", weight: 0.48, season: "summer" },
  { sourceRegionId: "UZ", destinationId: "AE-DUBAI", weight: 0.48, season: "winter" },
  { sourceRegionId: "UZ", destinationId: "KZ-ALMATY", weight: 0.35, season: null },
  { sourceRegionId: "UZ", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "UZ", destinationId: "EG-HURGHADA", weight: 0.32, season: "winter" },
  { sourceRegionId: "UZ", destinationId: "GE-TBILISI", weight: 0.30, season: null },

  // ========================================
  // NIGERIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "NG", destinationId: "NG-LAGOS", weight: 0.35, season: null },
  { sourceRegionId: "NG", destinationId: "GH-ACCRA", weight: 0.48, season: null },
  { sourceRegionId: "NG", destinationId: "GB-LONDON", weight: 0.62, season: null },
  { sourceRegionId: "NG", destinationId: "US-NYC", weight: 0.42, season: null },
  { sourceRegionId: "NG", destinationId: "AE-DUBAI", weight: 0.55, season: null },
  { sourceRegionId: "NG", destinationId: "ZA-CAPE-TOWN", weight: 0.35, season: null },
  { sourceRegionId: "NG", destinationId: "KE-MASAI-MARA", weight: 0.28, season: "summer" },
  { sourceRegionId: "NG", destinationId: "FR-PARIS", weight: 0.32, season: null },
  { sourceRegionId: "NG", destinationId: "TR-ISTANBUL", weight: 0.30, season: null },
  { sourceRegionId: "NG", destinationId: "ET-LALIBELA", weight: 0.22, season: "winter" },
];
