import type { TravelPattern } from "@/types";

// Travel patterns for East & Southeast Asia
// China: Domestic (Hainan, Yunnan), Thailand, Japan, Korea, Vietnam, Bali, Europe
// Japan: Domestic (Okinawa, Hokkaido), Korea, Taiwan, Thailand, Europe
// India: Domestic (Goa, Kerala), Thailand, Singapore, Bali, Maldives, Dubai

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // EASTERN CHINA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CN-EAST", destinationId: "CN-HAINAN", weight: 0.72, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "CN-YUNNAN", weight: 0.60, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CN-GUILIN", weight: 0.50, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "HK-HONG-KONG", weight: 0.62, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "TH-BANGKOK", weight: 0.68, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "TH-PHUKET", weight: 0.60, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "TH-CHIANG-MAI", weight: 0.42, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "JP-TOKYO", weight: 0.62, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-KYOTO", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KR-SEOUL", weight: 0.55, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KR-JEJU", weight: 0.42, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "VN-DA-NANG", weight: 0.48, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "VN-HANOI", weight: 0.45, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "ID-BALI", weight: 0.52, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "SG-SINGAPORE", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "MY-KL", weight: 0.40, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "MV-MALDIVES", weight: 0.38, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "FR-PARIS", weight: 0.35, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "IT-ROME", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "GB-LONDON", weight: 0.32, season: null },

  // ========================================
  // SOUTHERN CHINA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-HAINAN", weight: 0.70, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-YUNNAN", weight: 0.55, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "HK-HONG-KONG", weight: 0.72, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "TH-BANGKOK", weight: 0.65, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "TH-PHUKET", weight: 0.58, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-DA-NANG", weight: 0.52, season: "summer" },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-HANOI", weight: 0.48, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-PHU-QUOC", weight: 0.42, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "JP-TOKYO", weight: 0.55, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "KR-SEOUL", weight: 0.48, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "ID-BALI", weight: 0.52, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "SG-SINGAPORE", weight: 0.50, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "MY-KL", weight: 0.42, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "MY-LANGKAWI", weight: 0.35, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "PH-BORACAY", weight: 0.38, season: "winter" },

  // ========================================
  // NORTHERN CHINA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CN-NORTH", destinationId: "CN-HAINAN", weight: 0.75, season: "winter" },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-YUNNAN", weight: 0.58, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-GUILIN", weight: 0.48, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "HK-HONG-KONG", weight: 0.55, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "TH-BANGKOK", weight: 0.62, season: "winter" },
  { sourceRegionId: "CN-NORTH", destinationId: "TH-PHUKET", weight: 0.55, season: "winter" },
  { sourceRegionId: "CN-NORTH", destinationId: "JP-TOKYO", weight: 0.58, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "JP-HOKKAIDO", weight: 0.42, season: "winter" },
  { sourceRegionId: "CN-NORTH", destinationId: "KR-SEOUL", weight: 0.55, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "KR-JEJU", weight: 0.40, season: "summer" },
  { sourceRegionId: "CN-NORTH", destinationId: "VN-HANOI", weight: 0.42, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "ID-BALI", weight: 0.48, season: "winter" },
  { sourceRegionId: "CN-NORTH", destinationId: "SG-SINGAPORE", weight: 0.42, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "MV-MALDIVES", weight: 0.35, season: "winter" },

  // ========================================
  // CENTRAL CHINA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CN-CENTRAL", destinationId: "CN-HAINAN", weight: 0.68, season: "winter" },
  { sourceRegionId: "CN-CENTRAL", destinationId: "CN-YUNNAN", weight: 0.58, season: null },
  { sourceRegionId: "CN-CENTRAL", destinationId: "CN-GUILIN", weight: 0.52, season: null },
  { sourceRegionId: "CN-CENTRAL", destinationId: "TH-BANGKOK", weight: 0.58, season: "winter" },
  { sourceRegionId: "CN-CENTRAL", destinationId: "TH-PHUKET", weight: 0.50, season: "winter" },
  { sourceRegionId: "CN-CENTRAL", destinationId: "JP-TOKYO", weight: 0.50, season: null },
  { sourceRegionId: "CN-CENTRAL", destinationId: "KR-SEOUL", weight: 0.45, season: null },
  { sourceRegionId: "CN-CENTRAL", destinationId: "HK-HONG-KONG", weight: 0.55, season: null },
  { sourceRegionId: "CN-CENTRAL", destinationId: "VN-DA-NANG", weight: 0.42, season: "summer" },
  { sourceRegionId: "CN-CENTRAL", destinationId: "ID-BALI", weight: 0.42, season: "winter" },
  { sourceRegionId: "CN-CENTRAL", destinationId: "SG-SINGAPORE", weight: 0.38, season: null },

  // ========================================
  // KANTO (TOKYO) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "JP-KANTO", destinationId: "JP-OKINAWA", weight: 0.68, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "JP-HOKKAIDO", weight: 0.62, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "JP-NISEKO", weight: 0.55, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "JP-KYOTO", weight: 0.58, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "KR-SEOUL", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "TW-TAIPEI", weight: 0.50, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "TH-BANGKOK", weight: 0.55, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "TH-PHUKET", weight: 0.48, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "ID-BALI", weight: 0.45, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "SG-SINGAPORE", weight: 0.42, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "VN-DA-NANG", weight: 0.40, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "VN-HANOI", weight: 0.38, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "HK-HONG-KONG", weight: 0.42, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "FR-PARIS", weight: 0.38, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-ROME", weight: 0.32, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "GB-LONDON", weight: 0.32, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "MV-MALDIVES", weight: 0.32, season: "winter" },

  // ========================================
  // KANSAI (OSAKA) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "JP-KANSAI", destinationId: "JP-OKINAWA", weight: 0.65, season: "summer" },
  { sourceRegionId: "JP-KANSAI", destinationId: "JP-HOKKAIDO", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANSAI", destinationId: "JP-NISEKO", weight: 0.48, season: "winter" },
  { sourceRegionId: "JP-KANSAI", destinationId: "KR-SEOUL", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANSAI", destinationId: "TW-TAIPEI", weight: 0.48, season: null },
  { sourceRegionId: "JP-KANSAI", destinationId: "TH-BANGKOK", weight: 0.52, season: "winter" },
  { sourceRegionId: "JP-KANSAI", destinationId: "TH-PHUKET", weight: 0.45, season: "winter" },
  { sourceRegionId: "JP-KANSAI", destinationId: "ID-BALI", weight: 0.42, season: "winter" },
  { sourceRegionId: "JP-KANSAI", destinationId: "SG-SINGAPORE", weight: 0.38, season: null },
  { sourceRegionId: "JP-KANSAI", destinationId: "HK-HONG-KONG", weight: 0.40, season: null },
  { sourceRegionId: "JP-KANSAI", destinationId: "VN-DA-NANG", weight: 0.38, season: "summer" },

  // ========================================
  // OTHER JAPAN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "JP-OTHER", destinationId: "JP-OKINAWA", weight: 0.62, season: "summer" },
  { sourceRegionId: "JP-OTHER", destinationId: "JP-HOKKAIDO", weight: 0.58, season: null },
  { sourceRegionId: "JP-OTHER", destinationId: "JP-TOKYO", weight: 0.50, season: null },
  { sourceRegionId: "JP-OTHER", destinationId: "KR-SEOUL", weight: 0.48, season: null },
  { sourceRegionId: "JP-OTHER", destinationId: "TH-BANGKOK", weight: 0.48, season: "winter" },
  { sourceRegionId: "JP-OTHER", destinationId: "TW-TAIPEI", weight: 0.42, season: null },
  { sourceRegionId: "JP-OTHER", destinationId: "ID-BALI", weight: 0.38, season: "winter" },
  { sourceRegionId: "JP-OTHER", destinationId: "SG-SINGAPORE", weight: 0.35, season: null },

  // ========================================
  // SOUTH KOREA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "KR", destinationId: "KR-JEJU", weight: 0.72, season: "summer" },
  { sourceRegionId: "KR", destinationId: "JP-TOKYO", weight: 0.65, season: null },
  { sourceRegionId: "KR", destinationId: "JP-KYOTO", weight: 0.48, season: null },
  { sourceRegionId: "KR", destinationId: "JP-OKINAWA", weight: 0.42, season: "summer" },
  { sourceRegionId: "KR", destinationId: "JP-HOKKAIDO", weight: 0.40, season: null },
  { sourceRegionId: "KR", destinationId: "TH-BANGKOK", weight: 0.58, season: "winter" },
  { sourceRegionId: "KR", destinationId: "TH-PHUKET", weight: 0.50, season: "winter" },
  { sourceRegionId: "KR", destinationId: "VN-DA-NANG", weight: 0.55, season: "summer" },
  { sourceRegionId: "KR", destinationId: "VN-HANOI", weight: 0.42, season: null },
  { sourceRegionId: "KR", destinationId: "VN-PHU-QUOC", weight: 0.38, season: "winter" },
  { sourceRegionId: "KR", destinationId: "ID-BALI", weight: 0.48, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-BORACAY", weight: 0.45, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-CEBU", weight: 0.42, season: "winter" },
  { sourceRegionId: "KR", destinationId: "SG-SINGAPORE", weight: 0.40, season: null },
  { sourceRegionId: "KR", destinationId: "TW-TAIPEI", weight: 0.42, season: null },
  { sourceRegionId: "KR", destinationId: "HK-HONG-KONG", weight: 0.38, season: null },
  { sourceRegionId: "KR", destinationId: "FR-PARIS", weight: 0.32, season: null },
  { sourceRegionId: "KR", destinationId: "MV-MALDIVES", weight: 0.30, season: "winter" },

  // ========================================
  // TAIWAN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "TW", destinationId: "JP-TOKYO", weight: 0.65, season: null },
  { sourceRegionId: "TW", destinationId: "JP-KYOTO", weight: 0.50, season: null },
  { sourceRegionId: "TW", destinationId: "JP-OKINAWA", weight: 0.48, season: "summer" },
  { sourceRegionId: "TW", destinationId: "JP-HOKKAIDO", weight: 0.42, season: "winter" },
  { sourceRegionId: "TW", destinationId: "KR-SEOUL", weight: 0.52, season: null },
  { sourceRegionId: "TW", destinationId: "TH-BANGKOK", weight: 0.55, season: "winter" },
  { sourceRegionId: "TW", destinationId: "TH-PHUKET", weight: 0.45, season: "winter" },
  { sourceRegionId: "TW", destinationId: "VN-DA-NANG", weight: 0.42, season: "summer" },
  { sourceRegionId: "TW", destinationId: "ID-BALI", weight: 0.42, season: "winter" },
  { sourceRegionId: "TW", destinationId: "SG-SINGAPORE", weight: 0.40, season: null },
  { sourceRegionId: "TW", destinationId: "HK-HONG-KONG", weight: 0.45, season: null },
  { sourceRegionId: "TW", destinationId: "PH-BORACAY", weight: 0.38, season: "winter" },
  { sourceRegionId: "TW", destinationId: "MY-KL", weight: 0.35, season: null },

  // ========================================
  // THAILAND (source, domestic) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "TH", destinationId: "TH-PHUKET", weight: 0.62, season: null },
  { sourceRegionId: "TH", destinationId: "TH-KOH-SAMUI", weight: 0.55, season: null },
  { sourceRegionId: "TH", destinationId: "TH-CHIANG-MAI", weight: 0.55, season: "winter" },
  { sourceRegionId: "TH", destinationId: "TH-PATTAYA", weight: 0.50, season: null },
  { sourceRegionId: "TH", destinationId: "JP-TOKYO", weight: 0.48, season: null },
  { sourceRegionId: "TH", destinationId: "KR-SEOUL", weight: 0.42, season: null },
  { sourceRegionId: "TH", destinationId: "SG-SINGAPORE", weight: 0.42, season: null },
  { sourceRegionId: "TH", destinationId: "ID-BALI", weight: 0.38, season: null },
  { sourceRegionId: "TH", destinationId: "VN-DA-NANG", weight: 0.35, season: "summer" },
  { sourceRegionId: "TH", destinationId: "MY-KL", weight: 0.35, season: null },

  // ========================================
  // VIETNAM -> DESTINATIONS
  // ========================================
  { sourceRegionId: "VN", destinationId: "VN-DA-NANG", weight: 0.65, season: "summer" },
  { sourceRegionId: "VN", destinationId: "VN-PHU-QUOC", weight: 0.55, season: "winter" },
  { sourceRegionId: "VN", destinationId: "TH-BANGKOK", weight: 0.48, season: null },
  { sourceRegionId: "VN", destinationId: "KR-SEOUL", weight: 0.42, season: null },
  { sourceRegionId: "VN", destinationId: "JP-TOKYO", weight: 0.40, season: null },
  { sourceRegionId: "VN", destinationId: "SG-SINGAPORE", weight: 0.38, season: null },
  { sourceRegionId: "VN", destinationId: "ID-BALI", weight: 0.35, season: null },
  { sourceRegionId: "VN", destinationId: "MY-KL", weight: 0.32, season: null },

  // ========================================
  // INDONESIA (JAVA) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "ID-JAVA", destinationId: "ID-BALI", weight: 0.72, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "ID-LOMBOK", weight: 0.48, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "SG-SINGAPORE", weight: 0.50, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "MY-KL", weight: 0.45, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "TH-BANGKOK", weight: 0.42, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "JP-TOKYO", weight: 0.35, season: null },
  { sourceRegionId: "ID-JAVA", destinationId: "KR-SEOUL", weight: 0.32, season: null },

  // ========================================
  // INDONESIA (OTHER) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "ID-OTHER", destinationId: "ID-BALI", weight: 0.65, season: null },
  { sourceRegionId: "ID-OTHER", destinationId: "SG-SINGAPORE", weight: 0.42, season: null },
  { sourceRegionId: "ID-OTHER", destinationId: "MY-KL", weight: 0.38, season: null },
  { sourceRegionId: "ID-OTHER", destinationId: "TH-BANGKOK", weight: 0.35, season: null },

  // ========================================
  // MALAYSIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "MY", destinationId: "MY-LANGKAWI", weight: 0.58, season: null },
  { sourceRegionId: "MY", destinationId: "MY-PENANG", weight: 0.50, season: null },
  { sourceRegionId: "MY", destinationId: "TH-BANGKOK", weight: 0.48, season: null },
  { sourceRegionId: "MY", destinationId: "ID-BALI", weight: 0.45, season: null },
  { sourceRegionId: "MY", destinationId: "SG-SINGAPORE", weight: 0.48, season: null },
  { sourceRegionId: "MY", destinationId: "JP-TOKYO", weight: 0.40, season: null },
  { sourceRegionId: "MY", destinationId: "KR-SEOUL", weight: 0.38, season: null },
  { sourceRegionId: "MY", destinationId: "VN-DA-NANG", weight: 0.35, season: null },

  // ========================================
  // SINGAPORE -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SG", destinationId: "MY-LANGKAWI", weight: 0.55, season: null },
  { sourceRegionId: "SG", destinationId: "MY-PENANG", weight: 0.48, season: null },
  { sourceRegionId: "SG", destinationId: "MY-KL", weight: 0.50, season: null },
  { sourceRegionId: "SG", destinationId: "TH-BANGKOK", weight: 0.55, season: null },
  { sourceRegionId: "SG", destinationId: "TH-PHUKET", weight: 0.50, season: null },
  { sourceRegionId: "SG", destinationId: "ID-BALI", weight: 0.55, season: null },
  { sourceRegionId: "SG", destinationId: "ID-LOMBOK", weight: 0.35, season: null },
  { sourceRegionId: "SG", destinationId: "JP-TOKYO", weight: 0.52, season: null },
  { sourceRegionId: "SG", destinationId: "JP-KYOTO", weight: 0.38, season: null },
  { sourceRegionId: "SG", destinationId: "KR-SEOUL", weight: 0.45, season: null },
  { sourceRegionId: "SG", destinationId: "VN-DA-NANG", weight: 0.40, season: null },
  { sourceRegionId: "SG", destinationId: "TW-TAIPEI", weight: 0.38, season: null },
  { sourceRegionId: "SG", destinationId: "MV-MALDIVES", weight: 0.38, season: null },
  { sourceRegionId: "SG", destinationId: "GB-LONDON", weight: 0.38, season: null },
  { sourceRegionId: "SG", destinationId: "FR-PARIS", weight: 0.32, season: null },

  // ========================================
  // PHILIPPINES -> DESTINATIONS
  // ========================================
  { sourceRegionId: "PH", destinationId: "PH-BORACAY", weight: 0.62, season: "winter" },
  { sourceRegionId: "PH", destinationId: "PH-PALAWAN", weight: 0.58, season: "winter" },
  { sourceRegionId: "PH", destinationId: "PH-CEBU", weight: 0.55, season: null },
  { sourceRegionId: "PH", destinationId: "SG-SINGAPORE", weight: 0.42, season: null },
  { sourceRegionId: "PH", destinationId: "JP-TOKYO", weight: 0.40, season: null },
  { sourceRegionId: "PH", destinationId: "KR-SEOUL", weight: 0.42, season: null },
  { sourceRegionId: "PH", destinationId: "HK-HONG-KONG", weight: 0.38, season: null },
  { sourceRegionId: "PH", destinationId: "TH-BANGKOK", weight: 0.35, season: null },

  // ========================================
  // NORTHERN INDIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IN-NORTH", destinationId: "IN-GOA", weight: 0.72, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-RAJASTHAN", weight: 0.62, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-KERALA", weight: 0.55, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-LADAKH", weight: 0.48, season: "summer" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-ANDAMAN", weight: 0.42, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "TH-BANGKOK", weight: 0.55, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "TH-PHUKET", weight: 0.48, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "SG-SINGAPORE", weight: 0.45, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "ID-BALI", weight: 0.42, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "MV-MALDIVES", weight: 0.45, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "AE-DUBAI", weight: 0.52, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "MY-KL", weight: 0.38, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "LK-SRI-LANKA", weight: 0.42, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "NP-KATHMANDU", weight: 0.40, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "GB-LONDON", weight: 0.35, season: null },

  // ========================================
  // SOUTHERN INDIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-GOA", weight: 0.65, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-KERALA", weight: 0.62, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-ANDAMAN", weight: 0.45, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-RAJASTHAN", weight: 0.42, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "TH-BANGKOK", weight: 0.50, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "SG-SINGAPORE", weight: 0.50, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "MY-KL", weight: 0.42, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "ID-BALI", weight: 0.40, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "MV-MALDIVES", weight: 0.48, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "LK-SRI-LANKA", weight: 0.45, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "AE-DUBAI", weight: 0.48, season: null },

  // ========================================
  // INBOUND: Europeans/others to Asian destinations
  // ========================================
  // Europeans to Thailand (winter escape)
  { sourceRegionId: "GB-ENG", destinationId: "TH-BANGKOK", weight: 0.48, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "TH-PHUKET", weight: 0.45, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "TH-KOH-SAMUI", weight: 0.35, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-PHUKET", weight: 0.32, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "TH-BANGKOK", weight: 0.32, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "TH-BANGKOK", weight: 0.38, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "TH-PHUKET", weight: 0.35, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "TH-PHUKET", weight: 0.35, season: "winter" },
  { sourceRegionId: "DK", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-BANGKOK", weight: 0.55, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-PHUKET", weight: 0.52, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-PATTAYA", weight: 0.45, season: "winter" },
  { sourceRegionId: "IL", destinationId: "TH-BANGKOK", weight: 0.48, season: "winter" },
  { sourceRegionId: "IL", destinationId: "TH-PHUKET", weight: 0.42, season: "winter" },

  // Europeans to Japan
  { sourceRegionId: "GB-ENG", destinationId: "JP-TOKYO", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "JP-TOKYO", weight: 0.32, season: null },
  { sourceRegionId: "DE-BY", destinationId: "JP-TOKYO", weight: 0.28, season: null },

  // Europeans to Bali
  { sourceRegionId: "GB-ENG", destinationId: "ID-BALI", weight: 0.38, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ID-BALI", weight: 0.35, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "ID-BALI", weight: 0.30, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "ID-BALI", weight: 0.28, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "ID-BALI", weight: 0.42, season: "winter" },
  { sourceRegionId: "AE", destinationId: "ID-BALI", weight: 0.45, season: null },
  { sourceRegionId: "SA", destinationId: "ID-BALI", weight: 0.40, season: null },

  // Europeans to Vietnam
  { sourceRegionId: "GB-ENG", destinationId: "VN-HANOI", weight: 0.30, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "VN-HANOI", weight: 0.28, season: "winter" },

  // Europeans to India
  { sourceRegionId: "GB-ENG", destinationId: "IN-GOA", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "IN-RAJASTHAN", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "IN-KERALA", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IN-GOA", weight: 0.22, season: "winter" },

  // Cambodia, Myanmar, Laos
  { sourceRegionId: "GB-ENG", destinationId: "KH-SIEM-REAP", weight: 0.28, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "KH-SIEM-REAP", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "KH-SIEM-REAP", weight: 0.22, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "KH-SIEM-REAP", weight: 0.30, season: "winter" },
  { sourceRegionId: "KR", destinationId: "KH-SIEM-REAP", weight: 0.28, season: "winter" },

  // Nepal
  { sourceRegionId: "GB-ENG", destinationId: "NP-KATHMANDU", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NP-KATHMANDU", weight: 0.20, season: null },

  // Luang Prabang
  { sourceRegionId: "FR-ZC", destinationId: "LA-LUANG-PRABANG", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "LA-LUANG-PRABANG", weight: 0.22, season: "winter" },

  // Bagan
  { sourceRegionId: "GB-ENG", destinationId: "MM-BAGAN", weight: 0.20, season: "winter" },
  { sourceRegionId: "JP-KANTO", destinationId: "MM-BAGAN", weight: 0.18, season: "winter" },
];
