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

  // ========================================
  // KG-BISHKEK — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "KG-BISHKEK", weight: 0.40, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KG-BISHKEK", weight: 0.20, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "KG-BISHKEK", weight: 0.20, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "KG-BISHKEK", weight: 0.15, season: null },
  { sourceRegionId: "KZ", destinationId: "KG-BISHKEK", weight: 0.30, season: null },

  // ========================================
  // KG-ISSYK-KUL — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "KG-ISSYK-KUL", weight: 0.45, season: "summer" },
  { sourceRegionId: "KZ", destinationId: "KG-ISSYK-KUL", weight: 0.38, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "KG-ISSYK-KUL", weight: 0.18, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "KG-ISSYK-KUL", weight: 0.15, season: "summer" },
  { sourceRegionId: "UZ", destinationId: "KG-ISSYK-KUL", weight: 0.20, season: "summer" },

  // ========================================
  // KZ-ALMATY-MOUNTAINS — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "KZ-ALMATY-MOUNTAINS", weight: 0.38, season: null },
  { sourceRegionId: "KZ", destinationId: "KZ-ALMATY-MOUNTAINS", weight: 0.50, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KZ-ALMATY-MOUNTAINS", weight: 0.20, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "KZ-ALMATY-MOUNTAINS", weight: 0.15, season: null },
  { sourceRegionId: "DE", destinationId: "KZ-ALMATY-MOUNTAINS", weight: 0.12, season: "summer" },

  // ========================================
  // UZ-BUKHARA — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "UZ-BUKHARA", weight: 0.40, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "UZ-BUKHARA", weight: 0.30, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "UZ-BUKHARA", weight: 0.15, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "UZ-BUKHARA", weight: 0.15, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "UZ-BUKHARA", weight: 0.18, season: null },
  { sourceRegionId: "DE", destinationId: "UZ-BUKHARA", weight: 0.12, season: null },

  // ========================================
  // UZ-KHIVA — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "UZ-KHIVA", weight: 0.38, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "UZ-KHIVA", weight: 0.28, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "UZ-KHIVA", weight: 0.14, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "UZ-KHIVA", weight: 0.12, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "UZ-KHIVA", weight: 0.15, season: null },

  // ========================================
  // RU-KAMCHATKA — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "RU-KAMCHATKA", weight: 0.40, season: "summer" },
  { sourceRegionId: "JP", destinationId: "RU-KAMCHATKA", weight: 0.20, season: "summer" },
  { sourceRegionId: "US-WEST", destinationId: "RU-KAMCHATKA", weight: 0.15, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "RU-KAMCHATKA", weight: 0.12, season: "summer" },
  { sourceRegionId: "KR", destinationId: "RU-KAMCHATKA", weight: 0.12, season: "summer" },

  // ========================================
  // RU-BAIKAL — INBOUND
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "RU-BAIKAL", weight: 0.50, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "RU-BAIKAL", weight: 0.20, season: "summer" },
  { sourceRegionId: "JP", destinationId: "RU-BAIKAL", weight: 0.15, season: "summer" },
  { sourceRegionId: "KR", destinationId: "RU-BAIKAL", weight: 0.12, season: "summer" },
  { sourceRegionId: "DE", destinationId: "RU-BAIKAL", weight: 0.10, season: "summer" },

  // ========================================
  // BD-SUNDARBANS — INBOUND
  // ========================================
  { sourceRegionId: "IN-NORTH", destinationId: "BD-SUNDARBANS", weight: 0.30, season: "winter" },
  { sourceRegionId: "BD", destinationId: "BD-SUNDARBANS", weight: 0.45, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "BD-SUNDARBANS", weight: 0.18, season: "winter" },
  { sourceRegionId: "AE", destinationId: "BD-SUNDARBANS", weight: 0.12, season: "winter" },

  // ========================================
  // PK-KARAKORAM — INBOUND
  // ========================================
  { sourceRegionId: "PK", destinationId: "PK-KARAKORAM", weight: 0.42, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "PK-KARAKORAM", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "PK-KARAKORAM", weight: 0.20, season: "summer" },
  { sourceRegionId: "DE", destinationId: "PK-KARAKORAM", weight: 0.15, season: "summer" },
  { sourceRegionId: "IN-NORTH", destinationId: "PK-KARAKORAM", weight: 0.12, season: "summer" },

  // ========================================
  // MN-GOBI — INBOUND
  // ========================================
  { sourceRegionId: "CN-EAST", destinationId: "MN-GOBI", weight: 0.30, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "MN-GOBI", weight: 0.28, season: "summer" },
  { sourceRegionId: "JP", destinationId: "MN-GOBI", weight: 0.22, season: "summer" },
  { sourceRegionId: "KR", destinationId: "MN-GOBI", weight: 0.18, season: "summer" },
  { sourceRegionId: "DE", destinationId: "MN-GOBI", weight: 0.12, season: "summer" },

  // ========================================
  // MM-MANDALAY — INBOUND
  // ========================================
  { sourceRegionId: "CN-EAST", destinationId: "MM-MANDALAY", weight: 0.32, season: "winter" },
  { sourceRegionId: "TH", destinationId: "MM-MANDALAY", weight: 0.25, season: "winter" },
  { sourceRegionId: "JP", destinationId: "MM-MANDALAY", weight: 0.20, season: "winter" },
  { sourceRegionId: "KR", destinationId: "MM-MANDALAY", weight: 0.18, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MM-MANDALAY", weight: 0.15, season: "winter" },

  // ========================================
  // LA-4000-ISLANDS — INBOUND
  // ========================================
  { sourceRegionId: "TH", destinationId: "LA-4000-ISLANDS", weight: 0.35, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "LA-4000-ISLANDS", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE", destinationId: "LA-4000-ISLANDS", weight: 0.22, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "LA-4000-ISLANDS", weight: 0.18, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LA-4000-ISLANDS", weight: 0.15, season: "winter" },

  // ========================================
  // NP-CHITWAN — INBOUND
  // ========================================
  { sourceRegionId: "IN-NORTH", destinationId: "NP-CHITWAN", weight: 0.40, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "NP-CHITWAN", weight: 0.20, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "NP-CHITWAN", weight: 0.20, season: "winter" },
  { sourceRegionId: "AE", destinationId: "NP-CHITWAN", weight: 0.15, season: "winter" },
  { sourceRegionId: "DE", destinationId: "NP-CHITWAN", weight: 0.12, season: "winter" },
];
