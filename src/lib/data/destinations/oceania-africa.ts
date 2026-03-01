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

  // ========================================
  // AUSTRALIA EXTRA (9)
  // ========================================
  { id: "AU-PERTH", name: "Perth", country: "AU", lat: -31.95, lng: 115.86, category: "city", seasonality: "year-round", basePopularity: 0.60, region: "oceania" },
  { id: "AU-CAIRNS", name: "Cairns", country: "AU", lat: -16.92, lng: 145.77, category: "city", seasonality: "winter", basePopularity: 0.58, region: "oceania" },
  { id: "AU-ULURU", name: "Uluru", country: "AU", lat: -25.34, lng: 131.04, category: "cultural", seasonality: "winter", basePopularity: 0.55, region: "oceania" },
  { id: "AU-BYRON-BAY", name: "Byron Bay", country: "AU", lat: -28.64, lng: 153.61, category: "beach", seasonality: "summer", basePopularity: 0.62, region: "oceania" },
  { id: "AU-KANGAROO", name: "Kangaroo Island", country: "AU", lat: -35.77, lng: 137.22, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "oceania" },
  { id: "AU-ADELAIDE", name: "Adelaide", country: "AU", lat: -34.93, lng: 138.60, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "oceania" },
  { id: "AU-BROOME", name: "Broome", country: "AU", lat: -17.96, lng: 122.24, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "oceania" },
  { id: "AU-NINGALOO", name: "Ningaloo Reef", country: "AU", lat: -22.69, lng: 113.68, category: "nature", seasonality: "winter", basePopularity: 0.38, region: "oceania" },
  { id: "AU-MARGARET-RIVER", name: "Margaret River", country: "AU", lat: -33.95, lng: 115.08, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "oceania" },

  // ========================================
  // NEW ZEALAND EXTRA (7)
  // ========================================
  { id: "NZ-WELLINGTON", name: "Wellington", country: "NZ", lat: -41.29, lng: 174.78, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "oceania" },
  { id: "NZ-ROTORUA", name: "Rotorua", country: "NZ", lat: -38.14, lng: 176.24, category: "cultural", seasonality: "year-round", basePopularity: 0.52, region: "oceania" },
  { id: "NZ-MILFORD", name: "Milford Sound", country: "NZ", lat: -44.67, lng: 167.93, category: "nature", seasonality: "summer", basePopularity: 0.55, region: "oceania" },
  { id: "NZ-ABEL-TASMAN", name: "Abel Tasman", country: "NZ", lat: -40.98, lng: 173.01, category: "nature", seasonality: "summer", basePopularity: 0.45, region: "oceania" },
  { id: "NZ-HOBBITON", name: "Hobbiton (Matamata)", country: "NZ", lat: -37.86, lng: 175.68, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "oceania" },
  { id: "NZ-TONGARIRO", name: "Tongariro", country: "NZ", lat: -39.28, lng: 175.56, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "oceania" },
  { id: "NZ-KAIKOURA", name: "Kaikoura", country: "NZ", lat: -42.40, lng: 173.68, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "oceania" },

  // ========================================
  // PACIFIC EXTRA (6)
  // ========================================
  { id: "PF-BORA-BORA", name: "Bora Bora", country: "PF", lat: -16.50, lng: -151.74, category: "island", seasonality: "winter", basePopularity: 0.65, region: "oceania" },
  { id: "CK-RAROTONGA", name: "Rarotonga", country: "CK", lat: -21.23, lng: -159.78, category: "island", seasonality: "winter", basePopularity: 0.42, region: "oceania" },
  { id: "VU-VANUATU", name: "Vanuatu", country: "VU", lat: -17.73, lng: 168.31, category: "island", seasonality: "year-round", basePopularity: 0.35, region: "oceania" },
  { id: "TO-TONGA", name: "Tonga", country: "TO", lat: -21.21, lng: -175.15, category: "island", seasonality: "winter", basePopularity: 0.32, region: "oceania" },
  { id: "NC-NOUMEA", name: "Nouméa", country: "NC", lat: -22.28, lng: 166.46, category: "beach", seasonality: "year-round", basePopularity: 0.35, region: "oceania" },
  { id: "PG-PNG", name: "Papua New Guinea", country: "PG", lat: -6.31, lng: 147.18, category: "nature", seasonality: "year-round", basePopularity: 0.28, region: "oceania" },

  // ========================================
  // SOUTHERN AFRICA EXTRA (3)
  // ========================================
  { id: "ZA-DURBAN", name: "Durban", country: "ZA", lat: -29.86, lng: 31.02, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "africa" },
  { id: "ZA-STELLENBOSCH", name: "Stellenbosch", country: "ZA", lat: -33.93, lng: 18.86, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "africa" },
  { id: "ZA-DRAKENSBERG", name: "Drakensberg", country: "ZA", lat: -29.07, lng: 29.36, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "africa" },

  // ========================================
  // ZAMBIA / ZIMBABWE (2)
  // ========================================
  { id: "ZW-VICTORIA-FALLS", name: "Victoria Falls", country: "ZW", lat: -17.92, lng: 25.86, category: "nature", seasonality: "year-round", basePopularity: 0.62, region: "africa" },
  { id: "ZM-SOUTH-LUANGWA", name: "South Luangwa", country: "ZM", lat: -13.03, lng: 31.54, category: "safari", seasonality: "winter", basePopularity: 0.38, region: "africa" },

  // ========================================
  // RWANDA / UGANDA (3)
  // ========================================
  { id: "RW-VOLCANOES", name: "Volcanoes NP", country: "RW", lat: -1.46, lng: 29.55, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "africa" },
  { id: "UG-BWINDI", name: "Bwindi", country: "UG", lat: -1.03, lng: 29.62, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "africa" },
  { id: "RW-KIGALI", name: "Kigali", country: "RW", lat: -1.94, lng: 30.06, category: "city", seasonality: "year-round", basePopularity: 0.35, region: "africa" },

  // ========================================
  // TANZANIA EXTRA (2)
  // ========================================
  { id: "TZ-KILIMANJARO", name: "Kilimanjaro", country: "TZ", lat: -3.07, lng: 37.36, category: "mountain", seasonality: "year-round", basePopularity: 0.55, region: "africa" },
  { id: "TZ-NGORONGORO", name: "Ngorongoro", country: "TZ", lat: -3.17, lng: 35.59, category: "safari", seasonality: "summer", basePopularity: 0.58, region: "africa" },

  // ========================================
  // KENYA EXTRA (2)
  // ========================================
  { id: "KE-LAMU", name: "Lamu", country: "KE", lat: -2.27, lng: 40.90, category: "island", seasonality: "winter", basePopularity: 0.42, region: "africa" },
  { id: "KE-NAIROBI", name: "Nairobi", country: "KE", lat: -1.29, lng: 36.82, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "africa" },

  // ========================================
  // SENEGAL (2)
  // ========================================
  { id: "SN-DAKAR", name: "Dakar", country: "SN", lat: 14.72, lng: -17.47, category: "city", seasonality: "year-round", basePopularity: 0.42, region: "africa" },
  { id: "SN-SAINT-LOUIS", name: "Saint-Louis", country: "SN", lat: 16.02, lng: -16.49, category: "cultural", seasonality: "winter", basePopularity: 0.32, region: "africa" },

  // ========================================
  // CAPE VERDE (2)
  // ========================================
  { id: "CV-SAL", name: "Sal Island", country: "CV", lat: 16.73, lng: -22.93, category: "beach", seasonality: "year-round", basePopularity: 0.42, region: "africa" },
  { id: "CV-SANTIAGO", name: "Santiago", country: "CV", lat: 14.92, lng: -23.51, category: "nature", seasonality: "year-round", basePopularity: 0.32, region: "africa" },

  // ========================================
  // MADAGASCAR EXTRA (1)
  // ========================================
  { id: "MG-NOSY-BE", name: "Nosy Be", country: "MG", lat: -13.33, lng: 48.26, category: "island", seasonality: "winter", basePopularity: 0.42, region: "africa" },

  // ========================================
  // MOZAMBIQUE (1)
  // ========================================
  { id: "MZ-TOFO", name: "Tofo Beach", country: "MZ", lat: -23.85, lng: 35.55, category: "beach", seasonality: "winter", basePopularity: 0.35, region: "africa" },

  // ========================================
  // EXTRA AFRICA (7)
  // ========================================
  { id: "ET-OMO", name: "Omo Valley", country: "ET", lat: 5.45, lng: 36.04, category: "cultural", seasonality: "winter", basePopularity: 0.28, region: "africa" },
  { id: "ET-SIMIEN", name: "Simien Mountains", country: "ET", lat: 13.25, lng: 38.40, category: "mountain", seasonality: "winter", basePopularity: 0.32, region: "africa" },
  { id: "TZ-PEMBA", name: "Pemba Island", country: "TZ", lat: -5.03, lng: 39.78, category: "island", seasonality: "winter", basePopularity: 0.35, region: "africa" },
  { id: "ZA-WILD-COAST", name: "Wild Coast", country: "ZA", lat: -31.63, lng: 29.53, category: "beach", seasonality: "summer", basePopularity: 0.38, region: "africa" },
  { id: "NA-SOSSUSVLEI", name: "Sossusvlei", country: "NA", lat: -24.73, lng: 15.30, category: "desert", seasonality: "winter", basePopularity: 0.45, region: "africa" },
  { id: "NA-ETOSHA", name: "Etosha", country: "NA", lat: -18.80, lng: 16.05, category: "safari", seasonality: "winter", basePopularity: 0.48, region: "africa" },
  { id: "BW-CHOBE", name: "Chobe", country: "BW", lat: -18.37, lng: 25.15, category: "safari", seasonality: "winter", basePopularity: 0.48, region: "africa" },

  // ========================================
  // EXTRA OCEANIA (9)
  // ========================================
  { id: "AU-BLUE-MOUNTAINS", name: "Blue Mountains", country: "AU", lat: -33.72, lng: 150.31, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "oceania" },
  { id: "AU-DAINTREE", name: "Daintree Rainforest", country: "AU", lat: -16.25, lng: 145.42, category: "nature", seasonality: "winter", basePopularity: 0.38, region: "oceania" },
  { id: "AU-PHILLIP-ISLAND", name: "Phillip Island", country: "AU", lat: -38.49, lng: 145.23, category: "nature", seasonality: "year-round", basePopularity: 0.35, region: "oceania" },
  { id: "NZ-COROMANDEL", name: "Coromandel", country: "NZ", lat: -36.76, lng: 175.50, category: "beach", seasonality: "summer", basePopularity: 0.38, region: "oceania" },
  { id: "NZ-WANAKA", name: "Wanaka", country: "NZ", lat: -44.70, lng: 169.13, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "oceania" },
  { id: "FJ-MAMANUCA", name: "Mamanuca Islands", country: "FJ", lat: -17.77, lng: 177.10, category: "island", seasonality: "winter", basePopularity: 0.45, region: "oceania" },
  { id: "PF-MOOREA", name: "Moorea", country: "PF", lat: -17.54, lng: -149.83, category: "island", seasonality: "winter", basePopularity: 0.48, region: "oceania" },
  { id: "AU-SUNSHINE-COAST", name: "Sunshine Coast", country: "AU", lat: -26.68, lng: 153.09, category: "beach", seasonality: "summer", basePopularity: 0.48, region: "oceania" },
  { id: "AU-GREAT-OCEAN", name: "Great Ocean Road", country: "AU", lat: -38.68, lng: 143.10, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "oceania" },

  // ========================================
  // NEW DESTINATIONS — AUSTRALIA
  // ========================================
  { id: "AU-NOOSA", name: "Noosa", country: "AU", lat: -26.39, lng: 153.09, category: "beach", seasonality: "summer", basePopularity: 0.48, region: "oceania" },
  { id: "AU-BAROSSA", name: "Barossa Valley", country: "AU", lat: -34.56, lng: 138.95, category: "nature", seasonality: "year-round", basePopularity: 0.35, region: "oceania" },
  { id: "AU-ROTTNEST", name: "Rottnest Island", country: "AU", lat: -32.00, lng: 115.52, category: "island", seasonality: "summer", basePopularity: 0.38, region: "oceania" },
  { id: "AU-KAKADU", name: "Kakadu NP", country: "AU", lat: -13.14, lng: 132.39, category: "nature", seasonality: "winter", basePopularity: 0.38, region: "oceania" },
  { id: "AU-FRASER", name: "Fraser Island", country: "AU", lat: -25.24, lng: 153.14, category: "nature", seasonality: "winter", basePopularity: 0.42, region: "oceania" },

  // ========================================
  // NEW DESTINATIONS — NEW ZEALAND
  // ========================================
  { id: "NZ-BAY-ISLANDS", name: "Bay of Islands", country: "NZ", lat: -35.21, lng: 174.09, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "oceania" },
  { id: "NZ-FIORDLAND", name: "Fiordland", country: "NZ", lat: -45.42, lng: 167.72, category: "nature", seasonality: "summer", basePopularity: 0.38, region: "oceania" },
  { id: "NZ-TEKAPO", name: "Lake Tekapo", country: "NZ", lat: -44.00, lng: 170.48, category: "nature", seasonality: "year-round", basePopularity: 0.38, region: "oceania" },

  // ========================================
  // NEW DESTINATIONS — AFRICA
  // ========================================
  { id: "ZA-HERMANUS", name: "Hermanus", country: "ZA", lat: -34.42, lng: 19.24, category: "nature", seasonality: "summer", basePopularity: 0.38, region: "africa" },
  { id: "ZA-ADDO", name: "Addo Elephant Park", country: "ZA", lat: -33.47, lng: 25.77, category: "safari", seasonality: "year-round", basePopularity: 0.38, region: "africa" },
  { id: "TZ-MAFIA", name: "Mafia Island", country: "TZ", lat: -7.93, lng: 39.77, category: "island", seasonality: "winter", basePopularity: 0.32, region: "africa" },
  { id: "KE-SAMBURU", name: "Samburu", country: "KE", lat: 0.57, lng: 37.53, category: "safari", seasonality: "summer", basePopularity: 0.42, region: "africa" },
  { id: "UG-MURCHISON", name: "Murchison Falls", country: "UG", lat: 2.28, lng: 31.68, category: "nature", seasonality: "year-round", basePopularity: 0.32, region: "africa" },
  { id: "MZ-BAZARUTO", name: "Bazaruto Archipelago", country: "MZ", lat: -21.58, lng: 35.47, category: "island", seasonality: "winter", basePopularity: 0.28, region: "africa" },
  { id: "RW-NYUNGWE", name: "Nyungwe Forest", country: "RW", lat: -2.50, lng: 29.25, category: "nature", seasonality: "year-round", basePopularity: 0.28, region: "africa" },
];
