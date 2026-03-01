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

  // ========================================
  // JAPAN NEW DESTINATIONS
  // ========================================

  // Osaka
  { sourceRegionId: "JP", destinationId: "JP-OSAKA", weight: 0.90, season: null },
  { sourceRegionId: "KR", destinationId: "JP-OSAKA", weight: 0.50, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-OSAKA", weight: 0.50, season: null },
  { sourceRegionId: "TW", destinationId: "JP-OSAKA", weight: 0.40, season: null },
  { sourceRegionId: "HK", destinationId: "JP-OSAKA", weight: 0.40, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-OSAKA", weight: 0.30, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-OSAKA", weight: 0.30, season: null },
  { sourceRegionId: "SG-MY", destinationId: "JP-OSAKA", weight: 0.28, season: null },

  // Hiroshima
  { sourceRegionId: "JP", destinationId: "JP-HIROSHIMA", weight: 0.70, season: null },
  { sourceRegionId: "KR", destinationId: "JP-HIROSHIMA", weight: 0.35, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-HIROSHIMA", weight: 0.30, season: null },
  { sourceRegionId: "TW", destinationId: "JP-HIROSHIMA", weight: 0.28, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-HIROSHIMA", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-HIROSHIMA", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "JP-HIROSHIMA", weight: 0.20, season: null },

  // Nara
  { sourceRegionId: "JP", destinationId: "JP-NARA", weight: 0.72, season: null },
  { sourceRegionId: "KR", destinationId: "JP-NARA", weight: 0.32, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-NARA", weight: 0.30, season: null },
  { sourceRegionId: "TW", destinationId: "JP-NARA", weight: 0.28, season: null },
  { sourceRegionId: "HK", destinationId: "JP-NARA", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-NARA", weight: 0.20, season: null },

  // Sapporo
  { sourceRegionId: "JP", destinationId: "JP-SAPPORO", weight: 0.80, season: null },
  { sourceRegionId: "KR", destinationId: "JP-SAPPORO", weight: 0.42, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-SAPPORO", weight: 0.38, season: "winter" },
  { sourceRegionId: "TW", destinationId: "JP-SAPPORO", weight: 0.35, season: "winter" },
  { sourceRegionId: "HK", destinationId: "JP-SAPPORO", weight: 0.32, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "JP-SAPPORO", weight: 0.25, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "JP-SAPPORO", weight: 0.22, season: "winter" },

  // Kanazawa
  { sourceRegionId: "JP", destinationId: "JP-KANAZAWA", weight: 0.65, season: null },
  { sourceRegionId: "KR", destinationId: "JP-KANAZAWA", weight: 0.25, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-KANAZAWA", weight: 0.22, season: null },
  { sourceRegionId: "TW", destinationId: "JP-KANAZAWA", weight: 0.20, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-KANAZAWA", weight: 0.18, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-KANAZAWA", weight: 0.18, season: null },

  // Yakushima
  { sourceRegionId: "JP", destinationId: "JP-YAKUSHIMA", weight: 0.72, season: null },
  { sourceRegionId: "KR", destinationId: "JP-YAKUSHIMA", weight: 0.18, season: null },
  { sourceRegionId: "TW", destinationId: "JP-YAKUSHIMA", weight: 0.15, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-YAKUSHIMA", weight: 0.15, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-YAKUSHIMA", weight: 0.15, season: null },

  // Takayama
  { sourceRegionId: "JP", destinationId: "JP-TAKAYAMA", weight: 0.68, season: null },
  { sourceRegionId: "KR", destinationId: "JP-TAKAYAMA", weight: 0.22, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-TAKAYAMA", weight: 0.20, season: null },
  { sourceRegionId: "TW", destinationId: "JP-TAKAYAMA", weight: 0.20, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-TAKAYAMA", weight: 0.18, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-TAKAYAMA", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "JP-TAKAYAMA", weight: 0.15, season: null },

  // Fukuoka
  { sourceRegionId: "JP", destinationId: "JP-FUKUOKA", weight: 0.75, season: null },
  { sourceRegionId: "KR", destinationId: "JP-FUKUOKA", weight: 0.50, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-FUKUOKA", weight: 0.35, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "JP-FUKUOKA", weight: 0.30, season: null },
  { sourceRegionId: "TW", destinationId: "JP-FUKUOKA", weight: 0.28, season: null },
  { sourceRegionId: "HK", destinationId: "JP-FUKUOKA", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-FUKUOKA", weight: 0.18, season: null },

  // ========================================
  // CHINA NEW DESTINATIONS
  // ========================================

  // Beijing
  { sourceRegionId: "CN-NORTH", destinationId: "CN-BEIJING", weight: 0.90, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CN-BEIJING", weight: 0.70, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-BEIJING", weight: 0.50, season: null },
  { sourceRegionId: "JP", destinationId: "CN-BEIJING", weight: 0.30, season: null },
  { sourceRegionId: "KR", destinationId: "CN-BEIJING", weight: 0.30, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CN-BEIJING", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-BEIJING", weight: 0.18, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CN-BEIJING", weight: 0.15, season: null },

  // Shanghai
  { sourceRegionId: "CN-EAST", destinationId: "CN-SHANGHAI", weight: 0.90, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-SHANGHAI", weight: 0.65, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-SHANGHAI", weight: 0.60, season: null },
  { sourceRegionId: "JP", destinationId: "CN-SHANGHAI", weight: 0.35, season: null },
  { sourceRegionId: "KR", destinationId: "CN-SHANGHAI", weight: 0.32, season: null },
  { sourceRegionId: "US-WEST", destinationId: "CN-SHANGHAI", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-SHANGHAI", weight: 0.20, season: null },
  { sourceRegionId: "AE", destinationId: "CN-SHANGHAI", weight: 0.18, season: null },

  // Xi'an
  { sourceRegionId: "CN-NORTH", destinationId: "CN-XIAN", weight: 0.72, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CN-XIAN", weight: 0.60, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-XIAN", weight: 0.45, season: null },
  { sourceRegionId: "JP", destinationId: "CN-XIAN", weight: 0.28, season: null },
  { sourceRegionId: "KR", destinationId: "CN-XIAN", weight: 0.25, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CN-XIAN", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-XIAN", weight: 0.18, season: null },

  // Chengdu
  { sourceRegionId: "CN-EAST", destinationId: "CN-CHENGDU", weight: 0.62, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-CHENGDU", weight: 0.55, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-CHENGDU", weight: 0.50, season: null },
  { sourceRegionId: "JP", destinationId: "CN-CHENGDU", weight: 0.22, season: null },
  { sourceRegionId: "KR", destinationId: "CN-CHENGDU", weight: 0.20, season: null },
  { sourceRegionId: "US-WEST", destinationId: "CN-CHENGDU", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-CHENGDU", weight: 0.15, season: null },

  // Zhangjiajie
  { sourceRegionId: "CN-EAST", destinationId: "CN-ZHANGJIAJIE", weight: 0.55, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-ZHANGJIAJIE", weight: 0.48, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-ZHANGJIAJIE", weight: 0.45, season: null },
  { sourceRegionId: "JP", destinationId: "CN-ZHANGJIAJIE", weight: 0.18, season: null },
  { sourceRegionId: "KR", destinationId: "CN-ZHANGJIAJIE", weight: 0.15, season: null },
  { sourceRegionId: "US-WEST", destinationId: "CN-ZHANGJIAJIE", weight: 0.15, season: null },

  // Lantau & Hong Kong Trail
  { sourceRegionId: "HK", destinationId: "CN-HONG-KONG-TRAIL", weight: 0.80, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-HONG-KONG-TRAIL", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-HONG-KONG-TRAIL", weight: 0.20, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "CN-HONG-KONG-TRAIL", weight: 0.18, season: null },
  { sourceRegionId: "SG-MY", destinationId: "CN-HONG-KONG-TRAIL", weight: 0.15, season: null },

  // Great Wall (Mutianyu)
  { sourceRegionId: "CN-NORTH", destinationId: "CN-GREAT-WALL", weight: 0.80, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CN-GREAT-WALL", weight: 0.55, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-GREAT-WALL", weight: 0.40, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CN-GREAT-WALL", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CN-GREAT-WALL", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CN-GREAT-WALL", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "CN-GREAT-WALL", weight: 0.18, season: null },

  // ========================================
  // THAILAND NEW DESTINATIONS
  // ========================================

  // Krabi
  { sourceRegionId: "TH", destinationId: "TH-KRABI", weight: 0.70, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-KRABI", weight: 0.50, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "TH-KRABI", weight: 0.30, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-KRABI", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-KRABI", weight: 0.22, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-KRABI", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-KRABI", weight: 0.18, season: "winter" },

  // Koh Phi Phi
  { sourceRegionId: "TH", destinationId: "TH-KOH-PHI-PHI", weight: 0.65, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-KOH-PHI-PHI", weight: 0.42, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-KOH-PHI-PHI", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-KOH-PHI-PHI", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-KOH-PHI-PHI", weight: 0.20, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-KOH-PHI-PHI", weight: 0.20, season: "winter" },

  // Pai
  { sourceRegionId: "TH", destinationId: "TH-PAI", weight: 0.60, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-PAI", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-PAI", weight: 0.20, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-PAI", weight: 0.18, season: "winter" },
  { sourceRegionId: "US-WEST", destinationId: "TH-PAI", weight: 0.18, season: "winter" },

  // Koh Lanta
  { sourceRegionId: "TH", destinationId: "TH-KOH-LANTA", weight: 0.62, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-KOH-LANTA", weight: 0.40, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-KOH-LANTA", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-KOH-LANTA", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-KOH-LANTA", weight: 0.18, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "TH-KOH-LANTA", weight: 0.18, season: "winter" },

  // Koh Tao
  { sourceRegionId: "TH", destinationId: "TH-KOH-TAO", weight: 0.60, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-KOH-TAO", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-KOH-TAO", weight: 0.25, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-KOH-TAO", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-KOH-TAO", weight: 0.18, season: "winter" },
  { sourceRegionId: "US-WEST", destinationId: "TH-KOH-TAO", weight: 0.15, season: "winter" },

  // Chiang Rai
  { sourceRegionId: "TH", destinationId: "TH-CHIANG-RAI", weight: 0.65, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "TH-CHIANG-RAI", weight: 0.28, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-CHIANG-RAI", weight: 0.22, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-CHIANG-RAI", weight: 0.20, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-CHIANG-RAI", weight: 0.15, season: "winter" },

  // ========================================
  // VIETNAM NEW DESTINATIONS
  // ========================================

  // Ho Chi Minh City
  { sourceRegionId: "VN", destinationId: "VN-HCMC", weight: 0.80, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-HCMC", weight: 0.38, season: null },
  { sourceRegionId: "KR", destinationId: "VN-HCMC", weight: 0.35, season: null },
  { sourceRegionId: "JP", destinationId: "VN-HCMC", weight: 0.30, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "VN-HCMC", weight: 0.28, season: null },
  { sourceRegionId: "SG-MY", destinationId: "VN-HCMC", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "VN-HCMC", weight: 0.18, season: null },

  // Dalat
  { sourceRegionId: "VN", destinationId: "VN-DALAT", weight: 0.72, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-DALAT", weight: 0.22, season: null },
  { sourceRegionId: "KR", destinationId: "VN-DALAT", weight: 0.20, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "VN-DALAT", weight: 0.18, season: null },
  { sourceRegionId: "SG-MY", destinationId: "VN-DALAT", weight: 0.15, season: null },

  // Ninh Binh
  { sourceRegionId: "VN", destinationId: "VN-NINH-BINH", weight: 0.68, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "VN-NINH-BINH", weight: 0.22, season: null },
  { sourceRegionId: "KR", destinationId: "VN-NINH-BINH", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "VN-NINH-BINH", weight: 0.18, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "VN-NINH-BINH", weight: 0.15, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "VN-NINH-BINH", weight: 0.15, season: null },

  // Sa Pa
  { sourceRegionId: "VN", destinationId: "VN-SAPA", weight: 0.65, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "VN-SAPA", weight: 0.30, season: "winter" },
  { sourceRegionId: "KR", destinationId: "VN-SAPA", weight: 0.22, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "VN-SAPA", weight: 0.18, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "VN-SAPA", weight: 0.15, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "VN-SAPA", weight: 0.15, season: "winter" },

  // Hoi An
  { sourceRegionId: "VN", destinationId: "VN-HOI-AN", weight: 0.72, season: null },
  { sourceRegionId: "KR", destinationId: "VN-HOI-AN", weight: 0.38, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "VN-HOI-AN", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "VN-HOI-AN", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "VN-HOI-AN", weight: 0.22, season: null },
  { sourceRegionId: "JP", destinationId: "VN-HOI-AN", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "VN-HOI-AN", weight: 0.18, season: null },

  // Nha Trang
  { sourceRegionId: "VN", destinationId: "VN-NHA-TRANG", weight: 0.70, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "VN-NHA-TRANG", weight: 0.45, season: "winter" },
  { sourceRegionId: "KR", destinationId: "VN-NHA-TRANG", weight: 0.35, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "VN-NHA-TRANG", weight: 0.30, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "VN-NHA-TRANG", weight: 0.22, season: null },
  { sourceRegionId: "SG-MY", destinationId: "VN-NHA-TRANG", weight: 0.18, season: null },

  // ========================================
  // INDONESIA NEW DESTINATIONS
  // ========================================

  // Yogyakarta
  { sourceRegionId: "ID", destinationId: "ID-YOGYAKARTA", weight: 0.75, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-YOGYAKARTA", weight: 0.25, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-YOGYAKARTA", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-YOGYAKARTA", weight: 0.18, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ID-YOGYAKARTA", weight: 0.18, season: null },
  { sourceRegionId: "JP", destinationId: "ID-YOGYAKARTA", weight: 0.15, season: null },

  // Komodo
  { sourceRegionId: "ID", destinationId: "ID-KOMODO", weight: 0.60, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-KOMODO", weight: 0.32, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-KOMODO", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-KOMODO", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ID-KOMODO", weight: 0.18, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-KOMODO", weight: 0.18, season: null },

  // Nusa Penida
  { sourceRegionId: "ID", destinationId: "ID-NUSA-PENIDA", weight: 0.65, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-NUSA-PENIDA", weight: 0.35, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-NUSA-PENIDA", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "ID-NUSA-PENIDA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-NUSA-PENIDA", weight: 0.22, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-NUSA-PENIDA", weight: 0.20, season: null },

  // Lake Toba (Sumatra)
  { sourceRegionId: "ID", destinationId: "ID-SUMATRA", weight: 0.65, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-SUMATRA", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-SUMATRA", weight: 0.18, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ID-SUMATRA", weight: 0.15, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ID-SUMATRA", weight: 0.12, season: null },

  // Gili Islands
  { sourceRegionId: "ID", destinationId: "ID-GILI", weight: 0.62, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-GILI", weight: 0.38, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-GILI", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-GILI", weight: 0.22, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-GILI", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ID-GILI", weight: 0.18, season: null },

  // Ubud
  { sourceRegionId: "ID", destinationId: "ID-UBUD", weight: 0.70, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-UBUD", weight: 0.45, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-UBUD", weight: 0.32, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-UBUD", weight: 0.28, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-UBUD", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ID-UBUD", weight: 0.22, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "ID-UBUD", weight: 0.20, season: null },
  { sourceRegionId: "JP", destinationId: "ID-UBUD", weight: 0.18, season: null },

  // Flores & Labuan Bajo
  { sourceRegionId: "ID", destinationId: "ID-FLORES", weight: 0.62, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-FLORES", weight: 0.28, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-FLORES", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-FLORES", weight: 0.18, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ID-FLORES", weight: 0.15, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-FLORES", weight: 0.15, season: null },

  // ========================================
  // INDIA NEW DESTINATIONS
  // ========================================

  // Mumbai
  { sourceRegionId: "IN-WEST", destinationId: "IN-MUMBAI", weight: 0.90, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-MUMBAI", weight: 0.60, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-MUMBAI", weight: 0.50, season: null },
  { sourceRegionId: "AE", destinationId: "IN-MUMBAI", weight: 0.40, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-MUMBAI", weight: 0.28, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-MUMBAI", weight: 0.20, season: null },
  { sourceRegionId: "SA", destinationId: "IN-MUMBAI", weight: 0.18, season: null },

  // Delhi
  { sourceRegionId: "IN-NORTH", destinationId: "IN-DELHI", weight: 0.90, season: null },
  { sourceRegionId: "IN-WEST", destinationId: "IN-DELHI", weight: 0.62, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-DELHI", weight: 0.48, season: null },
  { sourceRegionId: "AE", destinationId: "IN-DELHI", weight: 0.38, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-DELHI", weight: 0.30, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-DELHI", weight: 0.22, season: null },
  { sourceRegionId: "SA", destinationId: "IN-DELHI", weight: 0.18, season: null },

  // Varanasi
  { sourceRegionId: "IN-NORTH", destinationId: "IN-VARANASI", weight: 0.72, season: "winter" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-VARANASI", weight: 0.50, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-VARANASI", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-VARANASI", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IN-VARANASI", weight: 0.18, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "IN-VARANASI", weight: 0.15, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-VARANASI", weight: 0.15, season: "winter" },

  // Jaipur
  { sourceRegionId: "IN-NORTH", destinationId: "IN-JAIPUR", weight: 0.80, season: "winter" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-JAIPUR", weight: 0.65, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-JAIPUR", weight: 0.40, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-JAIPUR", weight: 0.28, season: "winter" },
  { sourceRegionId: "AE", destinationId: "IN-JAIPUR", weight: 0.25, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-JAIPUR", weight: 0.20, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IN-JAIPUR", weight: 0.18, season: "winter" },

  // Udaipur
  { sourceRegionId: "IN-NORTH", destinationId: "IN-UDAIPUR", weight: 0.72, season: "winter" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-UDAIPUR", weight: 0.68, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-UDAIPUR", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-UDAIPUR", weight: 0.25, season: "winter" },
  { sourceRegionId: "AE", destinationId: "IN-UDAIPUR", weight: 0.22, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-UDAIPUR", weight: 0.18, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "IN-UDAIPUR", weight: 0.15, season: "winter" },

  // Hampi
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-HAMPI", weight: 0.68, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-HAMPI", weight: 0.40, season: "winter" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-HAMPI", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-HAMPI", weight: 0.20, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "IN-HAMPI", weight: 0.18, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IN-HAMPI", weight: 0.15, season: "winter" },

  // Rishikesh
  { sourceRegionId: "IN-NORTH", destinationId: "IN-RISHIKESH", weight: 0.75, season: null },
  { sourceRegionId: "IN-WEST", destinationId: "IN-RISHIKESH", weight: 0.45, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-RISHIKESH", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-RISHIKESH", weight: 0.22, season: null },
  { sourceRegionId: "AE", destinationId: "IN-RISHIKESH", weight: 0.20, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-RISHIKESH", weight: 0.18, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "IN-RISHIKESH", weight: 0.15, season: null },

  // Shimla
  { sourceRegionId: "IN-NORTH", destinationId: "IN-SHIMLA", weight: 0.80, season: "summer" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-SHIMLA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AE", destinationId: "IN-SHIMLA", weight: 0.18, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-SHIMLA", weight: 0.15, season: "summer" },
  { sourceRegionId: "SA", destinationId: "IN-SHIMLA", weight: 0.15, season: "summer" },

  // Munnar
  { sourceRegionId: "IN-SOUTH", destinationId: "IN-MUNNAR", weight: 0.75, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "IN-MUNNAR", weight: 0.38, season: "winter" },
  { sourceRegionId: "AE", destinationId: "IN-MUNNAR", weight: 0.22, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-MUNNAR", weight: 0.18, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "IN-MUNNAR", weight: 0.15, season: "winter" },

  // ========================================
  // PHILIPPINES NEW DESTINATIONS
  // ========================================

  // Siargao
  { sourceRegionId: "PH", destinationId: "PH-SIARGAO", weight: 0.65, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "PH-SIARGAO", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-WEST", destinationId: "PH-SIARGAO", weight: 0.22, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-SIARGAO", weight: 0.20, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "PH-SIARGAO", weight: 0.18, season: "winter" },
  { sourceRegionId: "JP", destinationId: "PH-SIARGAO", weight: 0.15, season: "winter" },

  // El Nido
  { sourceRegionId: "PH", destinationId: "PH-EL-NIDO", weight: 0.68, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "PH-EL-NIDO", weight: 0.32, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-EL-NIDO", weight: 0.25, season: "winter" },
  { sourceRegionId: "US-WEST", destinationId: "PH-EL-NIDO", weight: 0.22, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "PH-EL-NIDO", weight: 0.20, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "PH-EL-NIDO", weight: 0.18, season: "winter" },

  // Bohol
  { sourceRegionId: "PH", destinationId: "PH-BOHOL", weight: 0.65, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-BOHOL", weight: 0.30, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "PH-BOHOL", weight: 0.28, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "PH-BOHOL", weight: 0.22, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "PH-BOHOL", weight: 0.18, season: "winter" },
  { sourceRegionId: "JP", destinationId: "PH-BOHOL", weight: 0.15, season: "winter" },

  // ========================================
  // CAMBODIA NEW DESTINATIONS
  // ========================================

  // Phnom Penh
  { sourceRegionId: "KH", destinationId: "KH-PHNOM-PENH", weight: 0.72, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "KH-PHNOM-PENH", weight: 0.30, season: null },
  { sourceRegionId: "JP", destinationId: "KH-PHNOM-PENH", weight: 0.22, season: null },
  { sourceRegionId: "KR", destinationId: "KH-PHNOM-PENH", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "KH-PHNOM-PENH", weight: 0.18, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "KH-PHNOM-PENH", weight: 0.18, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "KH-PHNOM-PENH", weight: 0.15, season: null },

  // Kampot
  { sourceRegionId: "KH", destinationId: "KH-KAMPOT", weight: 0.65, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "KH-KAMPOT", weight: 0.22, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "KH-KAMPOT", weight: 0.18, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "KH-KAMPOT", weight: 0.15, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "KH-KAMPOT", weight: 0.15, season: "winter" },

  // Koh Rong
  { sourceRegionId: "KH", destinationId: "KH-KOH-RONG", weight: 0.62, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "KH-KOH-RONG", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "KH-KOH-RONG", weight: 0.20, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "KH-KOH-RONG", weight: 0.18, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "KH-KOH-RONG", weight: 0.15, season: "winter" },

  // ========================================
  // MALAYSIA NEW DESTINATIONS
  // ========================================

  // Borneo (Kota Kinabalu)
  { sourceRegionId: "SG-MY", destinationId: "MY-BORNEO", weight: 0.55, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "MY-BORNEO", weight: 0.32, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "MY-BORNEO", weight: 0.20, season: null },
  { sourceRegionId: "JP", destinationId: "MY-BORNEO", weight: 0.18, season: null },
  { sourceRegionId: "KR", destinationId: "MY-BORNEO", weight: 0.18, season: null },
  { sourceRegionId: "DE-BY", destinationId: "MY-BORNEO", weight: 0.15, season: null },

  // Cameron Highlands
  { sourceRegionId: "SG-MY", destinationId: "MY-CAMERON", weight: 0.65, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "MY-CAMERON", weight: 0.30, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "MY-CAMERON", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "MY-CAMERON", weight: 0.15, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "MY-CAMERON", weight: 0.15, season: null },

  // Tioman Island
  { sourceRegionId: "SG-MY", destinationId: "MY-TIOMAN", weight: 0.65, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "MY-TIOMAN", weight: 0.22, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "MY-TIOMAN", weight: 0.18, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "MY-TIOMAN", weight: 0.15, season: "summer" },

  // ========================================
  // TAIWAN NEW DESTINATIONS
  // ========================================

  // Jiufen
  { sourceRegionId: "TW", destinationId: "TW-JIUFEN", weight: 0.80, season: null },
  { sourceRegionId: "JP", destinationId: "TW-JIUFEN", weight: 0.38, season: null },
  { sourceRegionId: "KR", destinationId: "TW-JIUFEN", weight: 0.32, season: null },
  { sourceRegionId: "HK", destinationId: "TW-JIUFEN", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "TW-JIUFEN", weight: 0.25, season: null },
  { sourceRegionId: "SG-MY", destinationId: "TW-JIUFEN", weight: 0.20, season: null },

  // Taroko Gorge
  { sourceRegionId: "TW", destinationId: "TW-TAROKO", weight: 0.75, season: null },
  { sourceRegionId: "JP", destinationId: "TW-TAROKO", weight: 0.30, season: null },
  { sourceRegionId: "KR", destinationId: "TW-TAROKO", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "TW-TAROKO", weight: 0.20, season: null },
  { sourceRegionId: "US-WEST", destinationId: "TW-TAROKO", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "TW-TAROKO", weight: 0.15, season: null },

  // Tainan
  { sourceRegionId: "TW", destinationId: "TW-TAINAN", weight: 0.78, season: null },
  { sourceRegionId: "JP", destinationId: "TW-TAINAN", weight: 0.28, season: null },
  { sourceRegionId: "KR", destinationId: "TW-TAINAN", weight: 0.22, season: null },
  { sourceRegionId: "HK", destinationId: "TW-TAINAN", weight: 0.20, season: null },
  { sourceRegionId: "SG-MY", destinationId: "TW-TAINAN", weight: 0.18, season: null },

  // ========================================
  // SOUTH KOREA NEW DESTINATIONS
  // ========================================

  // Busan
  { sourceRegionId: "KR", destinationId: "KR-BUSAN", weight: 0.90, season: null },
  { sourceRegionId: "JP", destinationId: "KR-BUSAN", weight: 0.40, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KR-BUSAN", weight: 0.30, season: null },
  { sourceRegionId: "TW", destinationId: "KR-BUSAN", weight: 0.20, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "KR-BUSAN", weight: 0.18, season: null },
  { sourceRegionId: "US-WEST", destinationId: "KR-BUSAN", weight: 0.15, season: null },

  // Gyeongju
  { sourceRegionId: "KR", destinationId: "KR-GYEONGJU", weight: 0.80, season: null },
  { sourceRegionId: "JP", destinationId: "KR-GYEONGJU", weight: 0.22, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KR-GYEONGJU", weight: 0.18, season: null },
  { sourceRegionId: "TW", destinationId: "KR-GYEONGJU", weight: 0.15, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "KR-GYEONGJU", weight: 0.12, season: null },

  // DMZ (Paju)
  { sourceRegionId: "KR", destinationId: "KR-DMZ", weight: 0.72, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "KR-DMZ", weight: 0.22, season: null },
  { sourceRegionId: "US-WEST", destinationId: "KR-DMZ", weight: 0.20, season: null },
  { sourceRegionId: "JP", destinationId: "KR-DMZ", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "KR-DMZ", weight: 0.15, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "KR-DMZ", weight: 0.12, season: null },

  // ========================================
  // SINGAPORE NEW DESTINATION
  // ========================================

  // Sentosa Island
  { sourceRegionId: "SG-MY", destinationId: "SG-SENTOSA", weight: 0.75, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "SG-SENTOSA", weight: 0.35, season: null },
  { sourceRegionId: "IN-SOUTH", destinationId: "SG-SENTOSA", weight: 0.28, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "SG-SENTOSA", weight: 0.25, season: null },
  { sourceRegionId: "ID", destinationId: "SG-SENTOSA", weight: 0.22, season: null },
  { sourceRegionId: "PH", destinationId: "SG-SENTOSA", weight: 0.18, season: null },

  // ========================================
  // NEPAL NEW DESTINATIONS
  // ========================================

  // Pokhara
  { sourceRegionId: "NP", destinationId: "NP-POKHARA", weight: 0.80, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "NP-POKHARA", weight: 0.38, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "NP-POKHARA", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NP-POKHARA", weight: 0.22, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "NP-POKHARA", weight: 0.20, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NP-POKHARA", weight: 0.18, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "NP-POKHARA", weight: 0.15, season: null },

  // Everest Region
  { sourceRegionId: "NP", destinationId: "NP-EVEREST-BASE", weight: 0.65, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "NP-EVEREST-BASE", weight: 0.32, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NP-EVEREST-BASE", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "NP-EVEREST-BASE", weight: 0.22, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "NP-EVEREST-BASE", weight: 0.22, season: null },
  { sourceRegionId: "US-WEST", destinationId: "NP-EVEREST-BASE", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "NP-EVEREST-BASE", weight: 0.18, season: null },

  // ========================================
  // LAOS NEW DESTINATION
  // ========================================

  // Vang Vieng
  { sourceRegionId: "LA", destinationId: "LA-VANG-VIENG", weight: 0.65, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "LA-VANG-VIENG", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LA-VANG-VIENG", weight: 0.22, season: "winter" },
  { sourceRegionId: "KR", destinationId: "LA-VANG-VIENG", weight: 0.20, season: "winter" },
  { sourceRegionId: "CN-SOUTH", destinationId: "LA-VANG-VIENG", weight: 0.18, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "LA-VANG-VIENG", weight: 0.15, season: "winter" },

  // ========================================
  // SRI LANKA NEW DESTINATIONS
  // ========================================

  // Ella
  { sourceRegionId: "LK", destinationId: "LK-ELLA", weight: 0.72, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "LK-ELLA", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LK-ELLA", weight: 0.28, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "LK-ELLA", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "LK-ELLA", weight: 0.18, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "LK-ELLA", weight: 0.18, season: "winter" },

  // Mirissa
  { sourceRegionId: "LK", destinationId: "LK-MIRISSA", weight: 0.70, season: "winter" },
  { sourceRegionId: "IN-SOUTH", destinationId: "LK-MIRISSA", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LK-MIRISSA", weight: 0.25, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "LK-MIRISSA", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "LK-MIRISSA", weight: 0.18, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "LK-MIRISSA", weight: 0.15, season: "winter" },

  // ========================================
  // MALDIVES NEW DESTINATION
  // ========================================

  // South Ari Atoll
  { sourceRegionId: "IN-SOUTH", destinationId: "MV-SOUTH-ARI", weight: 0.45, season: "winter" },
  { sourceRegionId: "IN-NORTH", destinationId: "MV-SOUTH-ARI", weight: 0.38, season: "winter" },
  { sourceRegionId: "AE", destinationId: "MV-SOUTH-ARI", weight: 0.50, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "MV-SOUTH-ARI", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MV-SOUTH-ARI", weight: 0.30, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MV-SOUTH-ARI", weight: 0.25, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "MV-SOUTH-ARI", weight: 0.25, season: "winter" },
  { sourceRegionId: "SA", destinationId: "MV-SOUTH-ARI", weight: 0.28, season: "winter" },

  // ========================================
  // NEW DESTINATIONS — ADDED 2024
  // ========================================

  // ----------------------------------------
  // JP-KAMAKURA
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "JP-KAMAKURA", weight: 0.85, season: null },
  { sourceRegionId: "KR", destinationId: "JP-KAMAKURA", weight: 0.50, season: null },
  { sourceRegionId: "TW", destinationId: "JP-KAMAKURA", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-KAMAKURA", weight: 0.42, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-KAMAKURA", weight: 0.30, season: null },

  // ----------------------------------------
  // JP-NAOSHIMA (Art Island)
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "JP-NAOSHIMA", weight: 0.78, season: null },
  { sourceRegionId: "KR", destinationId: "JP-NAOSHIMA", weight: 0.38, season: null },
  { sourceRegionId: "TW", destinationId: "JP-NAOSHIMA", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "JP-NAOSHIMA", weight: 0.25, season: null },
  { sourceRegionId: "US-WEST", destinationId: "JP-NAOSHIMA", weight: 0.22, season: null },

  // ----------------------------------------
  // JP-SHIRAKAWA (Shirakawa-go)
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "JP-SHIRAKAWA", weight: 0.80, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "JP-SHIRAKAWA", weight: 0.45, season: "winter" },
  { sourceRegionId: "TW", destinationId: "JP-SHIRAKAWA", weight: 0.42, season: "winter" },
  { sourceRegionId: "KR", destinationId: "JP-SHIRAKAWA", weight: 0.40, season: "winter" },
  { sourceRegionId: "HK", destinationId: "JP-SHIRAKAWA", weight: 0.35, season: "winter" },

  // ----------------------------------------
  // JP-MIYAJIMA
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "JP-MIYAJIMA", weight: 0.82, season: null },
  { sourceRegionId: "KR", destinationId: "JP-MIYAJIMA", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "JP-MIYAJIMA", weight: 0.42, season: null },
  { sourceRegionId: "TW", destinationId: "JP-MIYAJIMA", weight: 0.40, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "JP-MIYAJIMA", weight: 0.28, season: null },

  // ----------------------------------------
  // CN-LIJIANG
  // ----------------------------------------
  { sourceRegionId: "CN-EAST", destinationId: "CN-LIJIANG", weight: 0.65, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-LIJIANG", weight: 0.58, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-LIJIANG", weight: 0.50, season: null },
  { sourceRegionId: "TW", destinationId: "CN-LIJIANG", weight: 0.30, season: null },
  { sourceRegionId: "HK", destinationId: "CN-LIJIANG", weight: 0.35, season: null },

  // ----------------------------------------
  // CN-HANGZHOU
  // ----------------------------------------
  { sourceRegionId: "CN-EAST", destinationId: "CN-HANGZHOU", weight: 0.78, season: null },
  { sourceRegionId: "CN-NORTH", destinationId: "CN-HANGZHOU", weight: 0.55, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "CN-HANGZHOU", weight: 0.48, season: null },
  { sourceRegionId: "TW", destinationId: "CN-HANGZHOU", weight: 0.35, season: null },
  { sourceRegionId: "HK", destinationId: "CN-HANGZHOU", weight: 0.38, season: null },

  // ----------------------------------------
  // TH-HUA-HIN
  // ----------------------------------------
  { sourceRegionId: "TH", destinationId: "TH-HUA-HIN", weight: 0.82, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-HUA-HIN", weight: 0.48, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "TH-HUA-HIN", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-HUA-HIN", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TH-HUA-HIN", weight: 0.28, season: "winter" },

  // ----------------------------------------
  // TH-KOH-CHANG
  // ----------------------------------------
  { sourceRegionId: "TH", destinationId: "TH-KOH-CHANG", weight: 0.78, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "TH-KOH-CHANG", weight: 0.45, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "TH-KOH-CHANG", weight: 0.35, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "TH-KOH-CHANG", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "TH-KOH-CHANG", weight: 0.22, season: "winter" },

  // ----------------------------------------
  // VN-MUI-NE
  // ----------------------------------------
  { sourceRegionId: "VN", destinationId: "VN-MUI-NE", weight: 0.80, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "VN-MUI-NE", weight: 0.40, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "VN-MUI-NE", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "VN-MUI-NE", weight: 0.30, season: "winter" },
  { sourceRegionId: "KR", destinationId: "VN-MUI-NE", weight: 0.35, season: "winter" },

  // ----------------------------------------
  // VN-PHU-YEN (emerging)
  // ----------------------------------------
  { sourceRegionId: "VN", destinationId: "VN-PHU-YEN", weight: 0.75, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "VN-PHU-YEN", weight: 0.32, season: "summer" },
  { sourceRegionId: "KR", destinationId: "VN-PHU-YEN", weight: 0.30, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "VN-PHU-YEN", weight: 0.22, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "VN-PHU-YEN", weight: 0.25, season: "summer" },

  // ----------------------------------------
  // ID-BANDUNG
  // ----------------------------------------
  { sourceRegionId: "ID", destinationId: "ID-BANDUNG", weight: 0.85, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-BANDUNG", weight: 0.60, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-BANDUNG", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "ID-BANDUNG", weight: 0.28, season: null },
  { sourceRegionId: "JP", destinationId: "ID-BANDUNG", weight: 0.22, season: null },

  // ----------------------------------------
  // ID-BROMO (Mount Bromo)
  // ----------------------------------------
  { sourceRegionId: "ID", destinationId: "ID-BROMO", weight: 0.80, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-BROMO", weight: 0.45, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-BROMO", weight: 0.35, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "ID-BROMO", weight: 0.30, season: null },
  { sourceRegionId: "JP", destinationId: "ID-BROMO", weight: 0.25, season: null },

  // ----------------------------------------
  // IN-AGRA (Taj Mahal)
  // ----------------------------------------
  { sourceRegionId: "IN-NORTH", destinationId: "IN-AGRA", weight: 0.88, season: null },
  { sourceRegionId: "IN-WEST", destinationId: "IN-AGRA", weight: 0.65, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-AGRA", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-AGRA", weight: 0.38, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "IN-AGRA", weight: 0.30, season: "winter" },
  { sourceRegionId: "AE", destinationId: "IN-AGRA", weight: 0.35, season: "winter" },

  // ----------------------------------------
  // IN-DARJEELING
  // ----------------------------------------
  { sourceRegionId: "IN-NORTH", destinationId: "IN-DARJEELING", weight: 0.75, season: null },
  { sourceRegionId: "IN-WEST", destinationId: "IN-DARJEELING", weight: 0.52, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-DARJEELING", weight: 0.35, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "IN-DARJEELING", weight: 0.25, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-DARJEELING", weight: 0.22, season: null },

  // ----------------------------------------
  // IN-PUSHKAR
  // ----------------------------------------
  { sourceRegionId: "IN-NORTH", destinationId: "IN-PUSHKAR", weight: 0.78, season: "winter" },
  { sourceRegionId: "IN-WEST", destinationId: "IN-PUSHKAR", weight: 0.65, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "IN-PUSHKAR", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IN-PUSHKAR", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IN-PUSHKAR", weight: 0.25, season: "winter" },

  // ----------------------------------------
  // PH-CORON (Palawan)
  // ----------------------------------------
  { sourceRegionId: "PH", destinationId: "PH-CORON", weight: 0.80, season: "winter" },
  { sourceRegionId: "SG-MY", destinationId: "PH-CORON", weight: 0.48, season: "winter" },
  { sourceRegionId: "KR", destinationId: "PH-CORON", weight: 0.42, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "PH-CORON", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "PH-CORON", weight: 0.32, season: "winter" },
  { sourceRegionId: "US-WEST", destinationId: "PH-CORON", weight: 0.28, season: "winter" },

  // ----------------------------------------
  // MY-MELAKA (Malacca)
  // ----------------------------------------
  { sourceRegionId: "SG-MY", destinationId: "MY-MELAKA", weight: 0.82, season: null },
  { sourceRegionId: "ID", destinationId: "MY-MELAKA", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "MY-MELAKA", weight: 0.42, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "MY-MELAKA", weight: 0.38, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "MY-MELAKA", weight: 0.28, season: null },

  // ----------------------------------------
  // MY-PERHENTIAN (Perhentian Islands)
  // ----------------------------------------
  { sourceRegionId: "SG-MY", destinationId: "MY-PERHENTIAN", weight: 0.78, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "MY-PERHENTIAN", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "MY-PERHENTIAN", weight: 0.35, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "MY-PERHENTIAN", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "MY-PERHENTIAN", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // TW-SUN-MOON (Sun Moon Lake)
  // ----------------------------------------
  { sourceRegionId: "TW", destinationId: "TW-SUN-MOON", weight: 0.88, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "TW-SUN-MOON", weight: 0.48, season: null },
  { sourceRegionId: "HK", destinationId: "TW-SUN-MOON", weight: 0.45, season: null },
  { sourceRegionId: "JP", destinationId: "TW-SUN-MOON", weight: 0.38, season: null },
  { sourceRegionId: "KR", destinationId: "TW-SUN-MOON", weight: 0.32, season: null },

  // ----------------------------------------
  // KR-SOKCHO (East Coast / Seoraksan)
  // ----------------------------------------
  { sourceRegionId: "KR", destinationId: "KR-SOKCHO", weight: 0.82, season: null },
  { sourceRegionId: "JP", destinationId: "KR-SOKCHO", weight: 0.38, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "KR-SOKCHO", weight: 0.32, season: null },
  { sourceRegionId: "TW", destinationId: "KR-SOKCHO", weight: 0.28, season: null },
  { sourceRegionId: "US-WEST", destinationId: "KR-SOKCHO", weight: 0.18, season: null },

  // ----------------------------------------
  // LK-SIGIRIYA (Lion Rock, Sri Lanka)
  // ----------------------------------------
  { sourceRegionId: "IN-SOUTH", destinationId: "LK-SIGIRIYA", weight: 0.55, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LK-SIGIRIYA", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "LK-SIGIRIYA", weight: 0.35, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "LK-SIGIRIYA", weight: 0.30, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "LK-SIGIRIYA", weight: 0.28, season: "winter" },

  // ----------------------------------------
  // LK-GALLE (Sri Lanka)
  // ----------------------------------------
  { sourceRegionId: "IN-SOUTH", destinationId: "LK-GALLE", weight: 0.58, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "LK-GALLE", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "LK-GALLE", weight: 0.38, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "LK-GALLE", weight: 0.32, season: "winter" },
  { sourceRegionId: "AE", destinationId: "LK-GALLE", weight: 0.30, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "LK-GALLE", weight: 0.25, season: "winter" },

  // ----------------------------------------
  // MV-NORTH-MALE (North Malé Atoll)
  // ----------------------------------------
  { sourceRegionId: "IN-NORTH", destinationId: "MV-NORTH-MALE", weight: 0.52, season: "winter" },
  { sourceRegionId: "AE", destinationId: "MV-NORTH-MALE", weight: 0.58, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "MV-NORTH-MALE", weight: 0.42, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MV-NORTH-MALE", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MV-NORTH-MALE", weight: 0.30, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "MV-NORTH-MALE", weight: 0.32, season: "winter" },

  // ----------------------------------------
  // ID-WAKATOBI (Remote dive destination)
  // ----------------------------------------
  { sourceRegionId: "ID", destinationId: "ID-WAKATOBI", weight: 0.55, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "ID-WAKATOBI", weight: 0.42, season: null },
  { sourceRegionId: "SG-MY", destinationId: "ID-WAKATOBI", weight: 0.35, season: null },
  { sourceRegionId: "US-WEST", destinationId: "ID-WAKATOBI", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ID-WAKATOBI", weight: 0.22, season: null },

  // ----------------------------------------
  // NP-LUMBINI (Nepal, Buddhist pilgrimage)
  // ----------------------------------------
  { sourceRegionId: "IN-NORTH", destinationId: "NP-LUMBINI", weight: 0.62, season: null },
  { sourceRegionId: "IN-WEST", destinationId: "NP-LUMBINI", weight: 0.45, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "NP-LUMBINI", weight: 0.38, season: null },
  { sourceRegionId: "CN-SOUTH", destinationId: "NP-LUMBINI", weight: 0.32, season: null },
  { sourceRegionId: "TH", destinationId: "NP-LUMBINI", weight: 0.25, season: null },
  { sourceRegionId: "JP", destinationId: "NP-LUMBINI", weight: 0.22, season: null },
];
