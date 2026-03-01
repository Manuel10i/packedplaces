import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // THAILAND (5)
  // ========================================
  { id: "TH-BANGKOK", name: "Bangkok", country: "TH", lat: 13.76, lng: 100.50, category: "city", seasonality: "year-round", basePopularity: 0.90, region: "asia", capacityOverride: 8.0 },
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

  // ========================================
  // JAPAN (5 new)
  // ========================================
  { id: "JP-OSAKA", name: "Osaka", country: "JP", lat: 34.69, lng: 135.50, category: "city", seasonality: "year-round", basePopularity: 0.85, region: "asia" },
  { id: "JP-HIROSHIMA", name: "Hiroshima", country: "JP", lat: 34.40, lng: 132.46, category: "cultural", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "JP-NARA", name: "Nara", country: "JP", lat: 34.69, lng: 135.80, category: "cultural", seasonality: "year-round", basePopularity: 0.55, region: "asia" },
  { id: "JP-SAPPORO", name: "Sapporo", country: "JP", lat: 43.06, lng: 141.35, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "JP-KANAZAWA", name: "Kanazawa", country: "JP", lat: 36.56, lng: 136.66, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "JP-YAKUSHIMA", name: "Yakushima", country: "JP", lat: 30.37, lng: 130.50, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "JP-TAKAYAMA", name: "Takayama", country: "JP", lat: 36.14, lng: 137.25, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "JP-FUKUOKA", name: "Fukuoka", country: "JP", lat: 33.59, lng: 130.40, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "asia" },

  // ========================================
  // CHINA (5 new)
  // ========================================
  { id: "CN-BEIJING", name: "Beijing", country: "CN", lat: 39.90, lng: 116.40, category: "city", seasonality: "year-round", basePopularity: 0.88, region: "asia" },
  { id: "CN-SHANGHAI", name: "Shanghai", country: "CN", lat: 31.23, lng: 121.47, category: "city", seasonality: "year-round", basePopularity: 0.88, region: "asia" },
  { id: "CN-XIAN", name: "Xi'an", country: "CN", lat: 34.26, lng: 108.94, category: "cultural", seasonality: "year-round", basePopularity: 0.72, region: "asia" },
  { id: "CN-CHENGDU", name: "Chengdu", country: "CN", lat: 30.57, lng: 104.07, category: "city", seasonality: "year-round", basePopularity: 0.65, region: "asia" },
  { id: "CN-ZHANGJIAJIE", name: "Zhangjiajie", country: "CN", lat: 29.12, lng: 110.48, category: "nature", seasonality: "year-round", basePopularity: 0.55, region: "asia" },
  { id: "CN-HONG-KONG-TRAIL", name: "Lantau & Hong Kong Trail", country: "CN", lat: 22.26, lng: 113.95, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "CN-GREAT-WALL", name: "Mutianyu (Great Wall)", country: "CN", lat: 40.43, lng: 116.57, category: "cultural", seasonality: "year-round", basePopularity: 0.65, region: "asia" },

  // ========================================
  // THAILAND (4 new)
  // ========================================
  { id: "TH-KRABI", name: "Krabi", country: "TH", lat: 8.09, lng: 98.91, category: "beach", seasonality: "winter", basePopularity: 0.70, region: "asia" },
  { id: "TH-KOH-PHI-PHI", name: "Koh Phi Phi", country: "TH", lat: 7.74, lng: 98.78, category: "island", seasonality: "winter", basePopularity: 0.65, region: "asia", capacityOverride: 0.3 },
  { id: "TH-PAI", name: "Pai", country: "TH", lat: 19.36, lng: 98.44, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "asia" },
  { id: "TH-KOH-LANTA", name: "Koh Lanta", country: "TH", lat: 7.53, lng: 99.04, category: "island", seasonality: "winter", basePopularity: 0.55, region: "asia" },
  { id: "TH-KOH-TAO", name: "Koh Tao", country: "TH", lat: 10.10, lng: 99.84, category: "island", seasonality: "winter", basePopularity: 0.48, region: "asia" },
  { id: "TH-CHIANG-RAI", name: "Chiang Rai", country: "TH", lat: 19.91, lng: 99.83, category: "cultural", seasonality: "winter", basePopularity: 0.38, region: "asia" },

  // ========================================
  // VIETNAM (4 new)
  // ========================================
  { id: "VN-HCMC", name: "Ho Chi Minh City", country: "VN", lat: 10.82, lng: 106.63, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "asia" },
  { id: "VN-DALAT", name: "Dalat", country: "VN", lat: 11.94, lng: 108.44, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "VN-NINH-BINH", name: "Ninh Binh", country: "VN", lat: 20.25, lng: 105.97, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "VN-SAPA", name: "Sa Pa", country: "VN", lat: 22.34, lng: 103.84, category: "mountain", seasonality: "winter", basePopularity: 0.52, region: "asia" },
  { id: "VN-HOI-AN", name: "Hoi An", country: "VN", lat: 15.88, lng: 108.33, category: "cultural", seasonality: "year-round", basePopularity: 0.55, region: "asia" },
  { id: "VN-NHA-TRANG", name: "Nha Trang", country: "VN", lat: 12.25, lng: 109.19, category: "beach", seasonality: "year-round", basePopularity: 0.52, region: "asia" },

  // ========================================
  // INDONESIA (4 new)
  // ========================================
  { id: "ID-YOGYAKARTA", name: "Yogyakarta", country: "ID", lat: -7.80, lng: 110.36, category: "cultural", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "ID-KOMODO", name: "Komodo", country: "ID", lat: -8.55, lng: 119.49, category: "nature", seasonality: "year-round", basePopularity: 0.52, region: "asia" },
  { id: "ID-NUSA-PENIDA", name: "Nusa Penida", country: "ID", lat: -8.73, lng: 115.54, category: "island", seasonality: "year-round", basePopularity: 0.55, region: "asia" },
  { id: "ID-SUMATRA", name: "Lake Toba", country: "ID", lat: 2.62, lng: 98.84, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "ID-GILI", name: "Gili Islands", country: "ID", lat: -8.35, lng: 116.04, category: "island", seasonality: "year-round", basePopularity: 0.52, region: "asia" },
  { id: "ID-UBUD", name: "Ubud", country: "ID", lat: -8.51, lng: 115.26, category: "cultural", seasonality: "year-round", basePopularity: 0.68, region: "asia" },
  { id: "ID-FLORES", name: "Flores & Labuan Bajo", country: "ID", lat: -8.49, lng: 119.88, category: "nature", seasonality: "year-round", basePopularity: 0.45, region: "asia" },

  // ========================================
  // INDIA (7 new)
  // ========================================
  { id: "IN-MUMBAI", name: "Mumbai", country: "IN", lat: 19.08, lng: 72.88, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "asia" },
  { id: "IN-DELHI", name: "Delhi", country: "IN", lat: 28.61, lng: 77.21, category: "city", seasonality: "year-round", basePopularity: 0.75, region: "asia" },
  { id: "IN-VARANASI", name: "Varanasi", country: "IN", lat: 25.32, lng: 83.01, category: "cultural", seasonality: "winter", basePopularity: 0.58, region: "asia" },
  { id: "IN-JAIPUR", name: "Jaipur", country: "IN", lat: 26.91, lng: 75.79, category: "city", seasonality: "winter", basePopularity: 0.65, region: "asia" },
  { id: "IN-UDAIPUR", name: "Udaipur", country: "IN", lat: 24.59, lng: 73.68, category: "cultural", seasonality: "winter", basePopularity: 0.58, region: "asia" },
  { id: "IN-HAMPI", name: "Hampi", country: "IN", lat: 15.34, lng: 76.46, category: "cultural", seasonality: "winter", basePopularity: 0.42, region: "asia" },
  { id: "IN-RISHIKESH", name: "Rishikesh", country: "IN", lat: 30.09, lng: 78.27, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "IN-SHIMLA", name: "Shimla", country: "IN", lat: 31.10, lng: 77.17, category: "mountain", seasonality: "summer", basePopularity: 0.42, region: "asia" },
  { id: "IN-MUNNAR", name: "Munnar", country: "IN", lat: 10.09, lng: 77.06, category: "nature", seasonality: "winter", basePopularity: 0.40, region: "asia" },

  // ========================================
  // PHILIPPINES (2 new)
  // ========================================
  { id: "PH-SIARGAO", name: "Siargao", country: "PH", lat: 9.85, lng: 126.05, category: "island", seasonality: "winter", basePopularity: 0.52, region: "asia" },
  { id: "PH-EL-NIDO", name: "El Nido", country: "PH", lat: 11.19, lng: 119.39, category: "island", seasonality: "winter", basePopularity: 0.62, region: "asia" },
  { id: "PH-BOHOL", name: "Bohol", country: "PH", lat: 9.85, lng: 124.00, category: "island", seasonality: "winter", basePopularity: 0.48, region: "asia" },

  // ========================================
  // CAMBODIA (2 new)
  // ========================================
  { id: "KH-PHNOM-PENH", name: "Phnom Penh", country: "KH", lat: 11.56, lng: 104.92, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "KH-KAMPOT", name: "Kampot", country: "KH", lat: 10.59, lng: 104.18, category: "nature", seasonality: "winter", basePopularity: 0.35, region: "asia" },
  { id: "KH-KOH-RONG", name: "Koh Rong", country: "KH", lat: 10.73, lng: 103.27, category: "island", seasonality: "winter", basePopularity: 0.38, region: "asia" },

  // ========================================
  // MALAYSIA (2 new)
  // ========================================
  { id: "MY-BORNEO", name: "Borneo (Kota Kinabalu)", country: "MY", lat: 5.98, lng: 116.07, category: "nature", seasonality: "year-round", basePopularity: 0.50, region: "asia" },
  { id: "MY-CAMERON", name: "Cameron Highlands", country: "MY", lat: 4.47, lng: 101.38, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "MY-TIOMAN", name: "Tioman Island", country: "MY", lat: 2.81, lng: 104.17, category: "island", seasonality: "summer", basePopularity: 0.38, region: "asia" },

  // ========================================
  // TAIWAN (3 new)
  // ========================================
  { id: "TW-JIUFEN", name: "Jiufen", country: "TW", lat: 25.11, lng: 121.84, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "TW-TAROKO", name: "Taroko Gorge", country: "TW", lat: 24.16, lng: 121.51, category: "nature", seasonality: "year-round", basePopularity: 0.52, region: "asia" },
  { id: "TW-TAINAN", name: "Tainan", country: "TW", lat: 22.99, lng: 120.21, category: "cultural", seasonality: "year-round", basePopularity: 0.45, region: "asia" },

  // ========================================
  // SOUTH KOREA (2 new)
  // ========================================
  { id: "KR-BUSAN", name: "Busan", country: "KR", lat: 35.18, lng: 129.08, category: "city", seasonality: "year-round", basePopularity: 0.68, region: "asia" },
  { id: "KR-GYEONGJU", name: "Gyeongju", country: "KR", lat: 35.86, lng: 129.21, category: "cultural", seasonality: "year-round", basePopularity: 0.45, region: "asia" },
  { id: "KR-DMZ", name: "DMZ (Paju)", country: "KR", lat: 37.89, lng: 126.74, category: "cultural", seasonality: "year-round", basePopularity: 0.35, region: "asia" },

  // ========================================
  // SINGAPORE (1 new)
  // ========================================
  { id: "SG-SENTOSA", name: "Sentosa Island", country: "SG", lat: 1.25, lng: 103.83, category: "island", seasonality: "year-round", basePopularity: 0.52, region: "asia" },

  // ========================================
  // NEPAL (2 new)
  // ========================================
  { id: "NP-POKHARA", name: "Pokhara", country: "NP", lat: 28.21, lng: 83.99, category: "mountain", seasonality: "year-round", basePopularity: 0.52, region: "asia" },
  { id: "NP-EVEREST-BASE", name: "Everest Region", country: "NP", lat: 27.99, lng: 86.85, category: "mountain", seasonality: "year-round", basePopularity: 0.42, region: "asia" },

  // ========================================
  // LAOS (1 new)
  // ========================================
  { id: "LA-VANG-VIENG", name: "Vang Vieng", country: "LA", lat: 18.92, lng: 102.45, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "asia" },

  // ========================================
  // SRI LANKA (2 new)
  // ========================================
  { id: "LK-ELLA", name: "Ella", country: "LK", lat: 6.87, lng: 81.05, category: "nature", seasonality: "winter", basePopularity: 0.45, region: "asia" },
  { id: "LK-MIRISSA", name: "Mirissa", country: "LK", lat: 5.95, lng: 80.45, category: "beach", seasonality: "winter", basePopularity: 0.48, region: "asia" },

  // ========================================
  // MALDIVES (1 new)
  // ========================================
  { id: "MV-SOUTH-ARI", name: "South Ari Atoll", country: "MV", lat: 3.47, lng: 72.82, category: "island", seasonality: "winter", basePopularity: 0.55, region: "asia" },

  // ========================================
  // NEW DESTINATIONS
  // ========================================
  { id: "JP-KAMAKURA", name: "Kamakura", country: "JP", lat: 35.32, lng: 139.55, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "JP-NAOSHIMA", name: "Naoshima", country: "JP", lat: 34.46, lng: 133.99, category: "cultural", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "JP-SHIRAKAWA", name: "Shirakawa-go", country: "JP", lat: 36.26, lng: 136.91, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "JP-MIYAJIMA", name: "Miyajima", country: "JP", lat: 34.30, lng: 132.32, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "CN-LIJIANG", name: "Lijiang Old Town", country: "CN", lat: 26.87, lng: 100.24, category: "cultural", seasonality: "year-round", basePopularity: 0.55, region: "asia" },
  { id: "CN-HANGZHOU", name: "Hangzhou", country: "CN", lat: 30.27, lng: 120.15, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "asia" },
  { id: "TH-HUA-HIN", name: "Hua Hin", country: "TH", lat: 12.57, lng: 99.96, category: "beach", seasonality: "winter", basePopularity: 0.48, region: "asia" },
  { id: "TH-KOH-CHANG", name: "Koh Chang", country: "TH", lat: 12.06, lng: 102.34, category: "island", seasonality: "winter", basePopularity: 0.48, region: "asia" },
  { id: "VN-MUI-NE", name: "Mui Ne", country: "VN", lat: 10.93, lng: 108.29, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "asia" },
  { id: "VN-PHU-YEN", name: "Phu Yen", country: "VN", lat: 13.10, lng: 109.30, category: "beach", seasonality: "year-round", basePopularity: 0.32, region: "asia" },
  { id: "ID-BANDUNG", name: "Bandung", country: "ID", lat: -6.91, lng: 107.61, category: "city", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "ID-BROMO", name: "Mount Bromo", country: "ID", lat: -7.94, lng: 112.95, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "IN-AGRA", name: "Agra (Taj Mahal)", country: "IN", lat: 27.18, lng: 78.02, category: "cultural", seasonality: "winter", basePopularity: 0.72, region: "asia" },
  { id: "IN-DARJEELING", name: "Darjeeling", country: "IN", lat: 27.04, lng: 88.26, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "asia" },
  { id: "IN-PUSHKAR", name: "Pushkar", country: "IN", lat: 26.49, lng: 74.55, category: "cultural", seasonality: "winter", basePopularity: 0.38, region: "asia" },
  { id: "PH-CORON", name: "Coron", country: "PH", lat: 12.00, lng: 120.20, category: "island", seasonality: "winter", basePopularity: 0.48, region: "asia" },
  { id: "MY-MELAKA", name: "Melaka", country: "MY", lat: 2.20, lng: 102.25, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "asia" },
  { id: "MY-PERHENTIAN", name: "Perhentian Islands", country: "MY", lat: 5.91, lng: 102.74, category: "island", seasonality: "summer", basePopularity: 0.42, region: "asia" },
  { id: "TW-SUN-MOON", name: "Sun Moon Lake", country: "TW", lat: 23.87, lng: 120.92, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "KR-SOKCHO", name: "Sokcho (Seoraksan)", country: "KR", lat: 38.21, lng: 128.59, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "asia" },
  { id: "LK-SIGIRIYA", name: "Sigiriya", country: "LK", lat: 7.96, lng: 80.76, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "asia" },
  { id: "LK-GALLE", name: "Galle", country: "LK", lat: 6.03, lng: 80.22, category: "city", seasonality: "winter", basePopularity: 0.45, region: "asia" },
  { id: "MV-NORTH-MALE", name: "North Malé Atoll", country: "MV", lat: 4.38, lng: 73.53, category: "island", seasonality: "winter", basePopularity: 0.52, region: "asia" },
  { id: "ID-WAKATOBI", name: "Wakatobi", country: "ID", lat: -5.48, lng: 123.60, category: "island", seasonality: "year-round", basePopularity: 0.32, region: "asia" },
  { id: "NP-LUMBINI", name: "Lumbini", country: "NP", lat: 27.47, lng: 83.28, category: "cultural", seasonality: "winter", basePopularity: 0.28, region: "asia" },
];
