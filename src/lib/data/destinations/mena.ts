import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // TURKEY (2 new)
  // ========================================
  { id: "TR-ISTANBUL", name: "Istanbul", country: "TR", lat: 41.01, lng: 28.98, category: "city", seasonality: "year-round", basePopularity: 0.90, region: "middle-east" },
  { id: "TR-CAPPADOCIA", name: "Cappadocia", country: "TR", lat: 38.64, lng: 34.83, category: "cultural", seasonality: "year-round", basePopularity: 0.72, region: "middle-east" },

  // ========================================
  // UAE (2)
  // ========================================
  { id: "AE-DUBAI", name: "Dubai", country: "AE", lat: 25.20, lng: 55.27, category: "city", seasonality: "winter", basePopularity: 0.92, region: "middle-east" },
  { id: "AE-ABU-DHABI", name: "Abu Dhabi", country: "AE", lat: 24.45, lng: 54.65, category: "city", seasonality: "winter", basePopularity: 0.72, region: "middle-east" },

  // ========================================
  // JORDAN (1)
  // ========================================
  { id: "JO-PETRA", name: "Petra & Dead Sea", country: "JO", lat: 30.33, lng: 35.44, category: "cultural", seasonality: "year-round", basePopularity: 0.68, region: "middle-east" },

  // ========================================
  // ISRAEL (2)
  // ========================================
  { id: "IL-TEL-AVIV", name: "Tel Aviv", country: "IL", lat: 32.07, lng: 34.78, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "middle-east" },
  { id: "IL-JERUSALEM", name: "Jerusalem", country: "IL", lat: 31.77, lng: 35.24, category: "cultural", seasonality: "year-round", basePopularity: 0.75, region: "middle-east" },

  // ========================================
  // OMAN (1)
  // ========================================
  { id: "OM-MUSCAT", name: "Muscat", country: "OM", lat: 23.61, lng: 58.59, category: "city", seasonality: "winter", basePopularity: 0.55, region: "middle-east" },

  // ========================================
  // EGYPT (2 new)
  // ========================================
  { id: "EG-CAIRO", name: "Cairo & Pyramids", country: "EG", lat: 30.04, lng: 31.24, category: "cultural", seasonality: "year-round", basePopularity: 0.82, region: "africa" },
  { id: "EG-LUXOR", name: "Luxor & Nile", country: "EG", lat: 25.69, lng: 32.64, category: "cultural", seasonality: "winter", basePopularity: 0.68, region: "africa" },

  // ========================================
  // MOROCCO (2 new)
  // ========================================
  { id: "MA-FES", name: "Fes", country: "MA", lat: 34.03, lng: -5.00, category: "cultural", seasonality: "year-round", basePopularity: 0.62, region: "africa" },
  { id: "MA-ESSAOUIRA", name: "Essaouira", country: "MA", lat: 31.51, lng: -9.77, category: "beach", seasonality: "year-round", basePopularity: 0.55, region: "africa" },

  // ========================================
  // TUNISIA (1 new)
  // ========================================
  { id: "TN-TUNIS", name: "Tunis & Carthage", country: "TN", lat: 36.81, lng: 10.17, category: "cultural", seasonality: "year-round", basePopularity: 0.52, region: "africa" },

  // ========================================
  // GEORGIA (2)
  // ========================================
  { id: "GE-TBILISI", name: "Tbilisi", country: "GE", lat: 41.69, lng: 44.80, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "middle-east" },
  { id: "GE-BATUMI", name: "Batumi", country: "GE", lat: 41.64, lng: 41.63, category: "beach", seasonality: "summer", basePopularity: 0.50, region: "middle-east" },

  // ========================================
  // MALDIVES (1)
  // ========================================
  { id: "MV-MALDIVES", name: "Maldives", country: "MV", lat: 3.20, lng: 73.22, category: "island", seasonality: "winter", basePopularity: 0.85, region: "asia", capacityOverride: 0.3 },

  // ========================================
  // SRI LANKA (1)
  // ========================================
  { id: "LK-SRI-LANKA", name: "Sri Lanka", country: "LK", lat: 7.87, lng: 80.77, category: "tropical", seasonality: "winter", basePopularity: 0.68, region: "asia" },

  // ========================================
  // SEYCHELLES (1)
  // ========================================
  { id: "SC-SEYCHELLES", name: "Seychelles", country: "SC", lat: -4.68, lng: 55.49, category: "island", seasonality: "year-round", basePopularity: 0.72, region: "africa" },

  // ========================================
  // SAUDI ARABIA (3)
  // ========================================
  { id: "SA-RIYADH", name: "Riyadh", country: "SA", lat: 24.71, lng: 46.68, category: "city", seasonality: "winter", basePopularity: 0.55, region: "middle-east" },
  { id: "SA-JEDDAH", name: "Jeddah", country: "SA", lat: 21.54, lng: 39.17, category: "city", seasonality: "winter", basePopularity: 0.52, region: "middle-east" },
  { id: "SA-ALULA", name: "AlUla", country: "SA", lat: 26.61, lng: 37.92, category: "cultural", seasonality: "winter", basePopularity: 0.42, region: "middle-east" },

  // ========================================
  // QATAR (1)
  // ========================================
  { id: "QA-DOHA", name: "Doha", country: "QA", lat: 25.29, lng: 51.53, category: "city", seasonality: "winter", basePopularity: 0.62, region: "middle-east" },

  // ========================================
  // BAHRAIN (1)
  // ========================================
  { id: "BH-MANAMA", name: "Manama", country: "BH", lat: 26.23, lng: 50.59, category: "city", seasonality: "winter", basePopularity: 0.42, region: "middle-east" },

  // ========================================
  // LEBANON (1)
  // ========================================
  { id: "LB-BEIRUT", name: "Beirut", country: "LB", lat: 33.89, lng: 35.50, category: "city", seasonality: "year-round", basePopularity: 0.55, region: "middle-east" },

  // ========================================
  // JORDAN (2 new)
  // ========================================
  { id: "JO-WADI-RUM", name: "Wadi Rum", country: "JO", lat: 29.57, lng: 35.42, category: "desert", seasonality: "winter", basePopularity: 0.52, region: "middle-east" },
  { id: "JO-AQABA", name: "Aqaba", country: "JO", lat: 29.53, lng: 35.01, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "middle-east" },
  { id: "JO-AMMAN", name: "Amman", country: "JO", lat: 31.95, lng: 35.93, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "middle-east" },

  // ========================================
  // IRAN (2)
  // ========================================
  { id: "IR-ISFAHAN", name: "Isfahan", country: "IR", lat: 32.65, lng: 51.68, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "middle-east" },
  { id: "IR-SHIRAZ", name: "Shiraz", country: "IR", lat: 29.59, lng: 52.58, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "middle-east" },

  // ========================================
  // AZERBAIJAN (1)
  // ========================================
  { id: "AZ-BAKU", name: "Baku", country: "AZ", lat: 40.41, lng: 49.87, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "middle-east" },

  // ========================================
  // GEORGIA (1 new)
  // ========================================
  { id: "GE-KAZBEGI", name: "Kazbegi", country: "GE", lat: 42.66, lng: 44.64, category: "mountain", seasonality: "summer", basePopularity: 0.42, region: "middle-east" },

  // ========================================
  // ARMENIA (1)
  // ========================================
  { id: "AM-YEREVAN", name: "Yerevan", country: "AM", lat: 40.18, lng: 44.51, category: "city", seasonality: "year-round", basePopularity: 0.45, region: "middle-east" },

  // ========================================
  // MOROCCO (2 new)
  // ========================================
  { id: "MA-CHEFCHAOUEN", name: "Chefchaouen", country: "MA", lat: 35.17, lng: -5.27, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "africa" },
  { id: "MA-SAHARA", name: "Sahara (Merzouga)", country: "MA", lat: 31.08, lng: -4.01, category: "desert", seasonality: "winter", basePopularity: 0.45, region: "africa" },

  // ========================================
  // EGYPT (2 new)
  // ========================================
  { id: "EG-ASWAN", name: "Aswan", country: "EG", lat: 24.09, lng: 32.90, category: "cultural", seasonality: "winter", basePopularity: 0.48, region: "africa" },
  { id: "EG-DAHAB", name: "Dahab", country: "EG", lat: 28.50, lng: 34.51, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "africa" },

  // ========================================
  // TURKEY (4 new)
  // ========================================
  { id: "TR-EPHESUS", name: "Ephesus & Izmir", country: "TR", lat: 37.94, lng: 27.34, category: "cultural", seasonality: "year-round", basePopularity: 0.52, region: "middle-east" },
  { id: "TR-PAMUKKALE", name: "Pamukkale", country: "TR", lat: 37.92, lng: 29.12, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "middle-east" },
  { id: "TR-TRABZON", name: "Trabzon", country: "TR", lat: 41.00, lng: 39.72, category: "city", seasonality: "summer", basePopularity: 0.35, region: "middle-east" },
  { id: "TR-GOREME", name: "Göreme (Balloon rides)", country: "TR", lat: 38.64, lng: 34.83, category: "cultural", seasonality: "year-round", basePopularity: 0.55, region: "middle-east" },

  // ========================================
  // TUNISIA (1 new)
  // ========================================
  { id: "TN-SAHARA", name: "Saharan Tunisia (Tozeur)", country: "TN", lat: 33.92, lng: 8.13, category: "desert", seasonality: "winter", basePopularity: 0.35, region: "africa" },

  // ========================================
  // UAE (1 new)
  // ========================================
  { id: "AE-RAS-KHAIMAH", name: "Ras Al Khaimah", country: "AE", lat: 25.79, lng: 55.94, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "middle-east" },

  // ========================================
  // OMAN (1 new)
  // ========================================
  { id: "OM-SALALAH", name: "Salalah", country: "OM", lat: 17.02, lng: 54.09, category: "nature", seasonality: "summer", basePopularity: 0.35, region: "middle-east" },

  // ========================================
  // SAUDI ARABIA — NEOM (1 new)
  // ========================================
  { id: "SA-NEOM", name: "NEOM", country: "SA", lat: 27.95, lng: 35.45, category: "city", seasonality: "winter", basePopularity: 0.30, region: "middle-east" },

  // ========================================
  // ISRAEL (1 new)
  // ========================================
  { id: "IL-EILAT", name: "Eilat", country: "IL", lat: 29.56, lng: 34.95, category: "beach", seasonality: "winter", basePopularity: 0.52, region: "middle-east" },
];
