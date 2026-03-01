import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // THAILAND (5)
  // ========================================
  { id: "TH-BANGKOK", name: "Bangkok", country: "TH", lat: 13.76, lng: 100.50, category: "city", seasonality: "year-round", basePopularity: 0.90, region: "asia" },
  { id: "TH-PHUKET", name: "Phuket", country: "TH", lat: 7.88, lng: 98.39, category: "beach", seasonality: "winter", basePopularity: 0.88, region: "asia" },
  { id: "TH-KOH-SAMUI", name: "Koh Samui", country: "TH", lat: 9.51, lng: 100.06, category: "island", seasonality: "winter", basePopularity: 0.75, region: "asia" },
  { id: "TH-CHIANG-MAI", name: "Chiang Mai", country: "TH", lat: 18.79, lng: 98.98, category: "cultural", seasonality: "winter", basePopularity: 0.72, region: "asia" },
  { id: "TH-PATTAYA", name: "Pattaya", country: "TH", lat: 12.93, lng: 100.88, category: "beach", seasonality: "winter", basePopularity: 0.68, region: "asia" },

  // ========================================
  // JAPAN (5)
  // ========================================
  { id: "JP-TOKYO", name: "Tokyo", country: "JP", lat: 35.68, lng: 139.69, category: "city", seasonality: "year-round", basePopularity: 0.95, region: "asia" },
  { id: "JP-KYOTO", name: "Kyoto", country: "JP", lat: 35.01, lng: 135.77, category: "cultural", seasonality: "year-round", basePopularity: 0.88, region: "asia" },
  { id: "JP-OKINAWA", name: "Okinawa", country: "JP", lat: 26.33, lng: 127.80, category: "island", seasonality: "summer", basePopularity: 0.72, region: "asia" },
  { id: "JP-HOKKAIDO", name: "Hokkaido", country: "JP", lat: 43.06, lng: 141.35, category: "nature", seasonality: "year-round", basePopularity: 0.70, region: "asia" },
  { id: "JP-NISEKO", name: "Niseko", country: "JP", lat: 42.86, lng: 140.69, category: "ski", seasonality: "winter", basePopularity: 0.72, region: "asia" },

  // ========================================
  // SOUTH KOREA (2)
  // ========================================
  { id: "KR-SEOUL", name: "Seoul", country: "KR", lat: 37.57, lng: 126.98, category: "city", seasonality: "year-round", basePopularity: 0.82, region: "asia" },
  { id: "KR-JEJU", name: "Jeju Island", country: "KR", lat: 33.49, lng: 126.53, category: "island", seasonality: "summer", basePopularity: 0.72, region: "asia" },

  // ========================================
  // CHINA (4)
  // ========================================
  { id: "CN-HAINAN", name: "Hainan", country: "CN", lat: 18.25, lng: 109.50, category: "tropical", seasonality: "winter", basePopularity: 0.72, region: "asia" },
  { id: "CN-YUNNAN", name: "Lijiang & Yunnan", country: "CN", lat: 26.87, lng: 100.23, category: "nature", seasonality: "year-round", basePopularity: 0.68, region: "asia" },
  { id: "CN-GUILIN", name: "Guilin", country: "CN", lat: 25.27, lng: 110.29, category: "nature", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "HK-HONG-KONG", name: "Hong Kong", country: "HK", lat: 22.32, lng: 114.17, category: "city", seasonality: "year-round", basePopularity: 0.85, region: "asia" },

  // ========================================
  // VIETNAM (3)
  // ========================================
  { id: "VN-DA-NANG", name: "Da Nang & Hoi An", country: "VN", lat: 16.05, lng: 108.22, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "asia" },
  { id: "VN-HANOI", name: "Hanoi & Ha Long Bay", country: "VN", lat: 20.99, lng: 105.85, category: "cultural", seasonality: "year-round", basePopularity: 0.75, region: "asia" },
  { id: "VN-PHU-QUOC", name: "Phu Quoc", country: "VN", lat: 10.23, lng: 103.97, category: "island", seasonality: "winter", basePopularity: 0.65, region: "asia" },

  // ========================================
  // INDONESIA (3)
  // ========================================
  { id: "ID-BALI", name: "Bali", country: "ID", lat: -8.34, lng: 115.09, category: "tropical", seasonality: "year-round", basePopularity: 0.92, region: "asia" },
  { id: "ID-LOMBOK", name: "Lombok", country: "ID", lat: -8.65, lng: 116.35, category: "island", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "ID-RAJA-AMPAT", name: "Raja Ampat", country: "ID", lat: -1.08, lng: 130.88, category: "nature", seasonality: "year-round", basePopularity: 0.55, region: "asia" },

  // ========================================
  // MALAYSIA (3)
  // ========================================
  { id: "MY-LANGKAWI", name: "Langkawi", country: "MY", lat: 6.35, lng: 99.73, category: "island", seasonality: "winter", basePopularity: 0.65, region: "asia" },
  { id: "MY-PENANG", name: "Penang", country: "MY", lat: 5.42, lng: 100.33, category: "city", seasonality: "year-round", basePopularity: 0.60, region: "asia" },
  { id: "MY-KL", name: "Kuala Lumpur", country: "MY", lat: 3.14, lng: 101.69, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "asia" },

  // ========================================
  // INDIA (5)
  // ========================================
  { id: "IN-GOA", name: "Goa", country: "IN", lat: 15.50, lng: 73.83, category: "beach", seasonality: "winter", basePopularity: 0.75, region: "asia" },
  { id: "IN-RAJASTHAN", name: "Rajasthan", country: "IN", lat: 26.92, lng: 75.79, category: "cultural", seasonality: "winter", basePopularity: 0.72, region: "asia" },
  { id: "IN-KERALA", name: "Kerala", country: "IN", lat: 10.85, lng: 76.27, category: "nature", seasonality: "winter", basePopularity: 0.68, region: "asia" },
  { id: "IN-LADAKH", name: "Ladakh", country: "IN", lat: 34.16, lng: 77.58, category: "mountain", seasonality: "summer", basePopularity: 0.58, region: "asia" },
  { id: "IN-ANDAMAN", name: "Andaman Islands", country: "IN", lat: 11.74, lng: 92.66, category: "island", seasonality: "winter", basePopularity: 0.52, region: "asia" },

  // ========================================
  // OTHERS (10)
  // ========================================
  { id: "SG-SINGAPORE", name: "Singapore", country: "SG", lat: 1.35, lng: 103.82, category: "city", seasonality: "year-round", basePopularity: 0.82, region: "asia" },
  { id: "TW-TAIPEI", name: "Taipei", country: "TW", lat: 25.03, lng: 121.57, category: "city", seasonality: "year-round", basePopularity: 0.68, region: "asia" },
  { id: "PH-BORACAY", name: "Boracay", country: "PH", lat: 11.97, lng: 121.93, category: "beach", seasonality: "winter", basePopularity: 0.72, region: "asia" },
  { id: "PH-PALAWAN", name: "Palawan", country: "PH", lat: 10.21, lng: 118.99, category: "island", seasonality: "winter", basePopularity: 0.68, region: "asia" },
  { id: "PH-CEBU", name: "Cebu", country: "PH", lat: 10.31, lng: 123.89, category: "beach", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "NP-KATHMANDU", name: "Kathmandu", country: "NP", lat: 27.72, lng: 85.32, category: "cultural", seasonality: "year-round", basePopularity: 0.60, region: "asia" },
  { id: "KH-SIEM-REAP", name: "Siem Reap", country: "KH", lat: 13.36, lng: 103.86, category: "cultural", seasonality: "winter", basePopularity: 0.68, region: "asia" },
  { id: "MM-BAGAN", name: "Bagan", country: "MM", lat: 21.17, lng: 94.86, category: "cultural", seasonality: "winter", basePopularity: 0.55, region: "asia" },
  { id: "LA-LUANG-PRABANG", name: "Luang Prabang", country: "LA", lat: 19.89, lng: 102.14, category: "cultural", seasonality: "winter", basePopularity: 0.55, region: "asia" },
  { id: "BT-PARO", name: "Paro", country: "BT", lat: 27.43, lng: 89.42, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
];
