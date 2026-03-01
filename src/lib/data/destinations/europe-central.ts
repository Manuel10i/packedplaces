import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // AUSTRIA - ski & lakes (10)
  // ========================================
  { id: "AT-TYROL-INNSBRUCK", name: "Innsbruck & Stubai", country: "AT", lat: 47.26, lng: 11.39, category: "ski", seasonality: "winter", basePopularity: 0.95, region: "europe" },
  { id: "AT-TYROL-ZILLERTAL", name: "Zillertal", country: "AT", lat: 47.17, lng: 11.88, category: "ski", seasonality: "winter", basePopularity: 0.90, region: "europe" },
  { id: "AT-TYROL-OETZTAL", name: "Ötztal", country: "AT", lat: 46.97, lng: 10.86, category: "ski", seasonality: "winter", basePopularity: 0.85, region: "europe" },
  { id: "AT-TYROL-STANTON", name: "St. Anton am Arlberg", country: "AT", lat: 47.13, lng: 10.27, category: "ski", seasonality: "winter", basePopularity: 0.88, region: "europe" },
  { id: "AT-TYROL-KITZBUEHEL", name: "Kitzbühel", country: "AT", lat: 47.45, lng: 12.39, category: "ski", seasonality: "winter", basePopularity: 0.87, region: "europe" },
  { id: "AT-SALZBURG-LAND", name: "Salzburger Land", country: "AT", lat: 47.27, lng: 13.20, category: "ski", seasonality: "winter", basePopularity: 0.82, region: "europe" },
  { id: "AT-VORARLBERG-SKI", name: "Vorarlberg Ski", country: "AT", lat: 47.15, lng: 9.92, category: "ski", seasonality: "winter", basePopularity: 0.75, region: "europe" },
  { id: "AT-SAALBACH", name: "Saalbach-Hinterglemm", country: "AT", lat: 47.39, lng: 12.64, category: "ski", seasonality: "winter", basePopularity: 0.80, region: "europe" },
  { id: "AT-KAERNTEN-LAKES", name: "Kärntner Seen", country: "AT", lat: 46.63, lng: 14.08, category: "lake", seasonality: "summer", basePopularity: 0.65, region: "europe" },
  { id: "AT-SALZKAMMERGUT", name: "Salzkammergut", country: "AT", lat: 47.71, lng: 13.62, category: "lake", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // ITALY (14)
  // ========================================
  { id: "IT-SUEDTIROL", name: "Südtirol", country: "IT", lat: 46.73, lng: 11.35, category: "ski", seasonality: "winter", basePopularity: 0.80, region: "europe" },
  { id: "IT-DOLOMITES", name: "Dolomiten", country: "IT", lat: 46.41, lng: 11.84, category: "ski", seasonality: "winter", basePopularity: 0.78, region: "europe" },
  { id: "IT-GARDASEE", name: "Gardasee", country: "IT", lat: 45.64, lng: 10.71, category: "lake", seasonality: "summer", basePopularity: 0.85, region: "europe" },
  { id: "IT-COMO", name: "Lake Como", country: "IT", lat: 46.01, lng: 9.26, category: "lake", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "IT-MAGGIORE", name: "Lake Maggiore", country: "IT", lat: 45.96, lng: 8.63, category: "lake", seasonality: "summer", basePopularity: 0.60, region: "europe" },
  { id: "IT-ADRIATIC", name: "Adriatic Coast (Rimini)", country: "IT", lat: 44.06, lng: 12.57, category: "beach", seasonality: "summer", basePopularity: 0.75, region: "europe" },
  { id: "IT-TUSCANY", name: "Toscana", country: "IT", lat: 43.35, lng: 11.30, category: "city", seasonality: "summer", basePopularity: 0.70, region: "europe" },
  { id: "IT-LIGURIA", name: "Liguria & Cinque Terre", country: "IT", lat: 44.31, lng: 9.32, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "IT-AMALFI", name: "Amalfi Coast", country: "IT", lat: 40.63, lng: 14.60, category: "beach", seasonality: "summer", basePopularity: 0.78, region: "europe" },
  { id: "IT-SARDINIA", name: "Sardegna", country: "IT", lat: 40.12, lng: 9.01, category: "beach", seasonality: "summer", basePopularity: 0.70, region: "europe" },
  { id: "IT-SICILY", name: "Sicilia", country: "IT", lat: 37.60, lng: 14.02, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "IT-CALABRIA", name: "Calabria", country: "IT", lat: 38.91, lng: 16.59, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },
  { id: "IT-ROME", name: "Rome", country: "IT", lat: 41.90, lng: 12.50, category: "city", seasonality: "year-round", basePopularity: 0.88, region: "europe" },
  { id: "IT-VENICE", name: "Venice", country: "IT", lat: 45.44, lng: 12.34, category: "city", seasonality: "year-round", basePopularity: 0.80, region: "europe" },

  // ========================================
  // SPAIN (11)
  // ========================================
  { id: "ES-COSTA-BRAVA", name: "Costa Brava", country: "ES", lat: 41.85, lng: 3.10, category: "beach", seasonality: "summer", basePopularity: 0.80, region: "europe" },
  { id: "ES-COSTA-BLANCA", name: "Costa Blanca", country: "ES", lat: 38.35, lng: -0.48, category: "beach", seasonality: "summer", basePopularity: 0.78, region: "europe" },
  { id: "ES-COSTA-DEL-SOL", name: "Costa del Sol", country: "ES", lat: 36.72, lng: -4.42, category: "beach", seasonality: "summer", basePopularity: 0.85, region: "europe" },
  { id: "ES-MALLORCA", name: "Mallorca", country: "ES", lat: 39.57, lng: 2.65, category: "beach", seasonality: "summer", basePopularity: 0.92, region: "europe" },
  { id: "ES-IBIZA", name: "Ibiza", country: "ES", lat: 38.91, lng: 1.43, category: "beach", seasonality: "summer", basePopularity: 0.78, region: "europe" },
  { id: "ES-MENORCA", name: "Menorca", country: "ES", lat: 39.97, lng: 4.09, category: "beach", seasonality: "summer", basePopularity: 0.62, region: "europe" },
  { id: "ES-CANARY", name: "Canary Islands", country: "ES", lat: 28.12, lng: -15.43, category: "beach", seasonality: "year-round", basePopularity: 0.82, region: "europe" },
  { id: "ES-TENERIFE", name: "Tenerife", country: "ES", lat: 28.29, lng: -16.63, category: "beach", seasonality: "year-round", basePopularity: 0.78, region: "europe" },
  { id: "ES-FUERTEVENTURA", name: "Fuerteventura", country: "ES", lat: 28.36, lng: -14.05, category: "beach", seasonality: "year-round", basePopularity: 0.68, region: "europe" },
  { id: "ES-BARCELONA", name: "Barcelona", country: "ES", lat: 41.39, lng: 2.17, category: "city", seasonality: "year-round", basePopularity: 0.88, region: "europe" },
  { id: "ES-MADRID", name: "Madrid", country: "ES", lat: 40.42, lng: -3.70, category: "city", seasonality: "year-round", basePopularity: 0.75, region: "europe" },

  // ========================================
  // FRANCE (10)
  // ========================================
  { id: "FR-COTE-AZUR", name: "Côte d'Azur", country: "FR", lat: 43.70, lng: 7.26, category: "beach", seasonality: "summer", basePopularity: 0.88, region: "europe" },
  { id: "FR-LANGUEDOC", name: "Languedoc", country: "FR", lat: 43.60, lng: 3.88, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },
  { id: "FR-ATLANTIC", name: "Atlantic Coast (Biarritz)", country: "FR", lat: 43.48, lng: -1.56, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "europe" },
  { id: "FR-CORSICA", name: "Corsica", country: "FR", lat: 42.04, lng: 9.01, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "FR-NORMANDY", name: "Normandy", country: "FR", lat: 49.18, lng: -0.37, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },
  { id: "FR-BRITTANY", name: "Brittany", country: "FR", lat: 48.20, lng: -2.93, category: "beach", seasonality: "summer", basePopularity: 0.58, region: "europe" },
  { id: "FR-ALPS", name: "French Alps", country: "FR", lat: 45.18, lng: 5.72, category: "ski", seasonality: "winter", basePopularity: 0.80, region: "europe" },
  { id: "FR-PARIS", name: "Paris", country: "FR", lat: 48.86, lng: 2.35, category: "city", seasonality: "year-round", basePopularity: 0.92, region: "europe" },
  { id: "FR-PROVENCE", name: "Provence", country: "FR", lat: 43.95, lng: 5.45, category: "nature", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "FR-LOIRE", name: "Loire Valley", country: "FR", lat: 47.38, lng: 0.69, category: "nature", seasonality: "summer", basePopularity: 0.55, region: "europe" },

  // ========================================
  // PORTUGAL (4)
  // ========================================
  { id: "PT-ALGARVE", name: "Algarve", country: "PT", lat: 37.02, lng: -7.93, category: "beach", seasonality: "summer", basePopularity: 0.82, region: "europe" },
  { id: "PT-LISBON", name: "Lisbon & Coast", country: "PT", lat: 38.72, lng: -9.14, category: "city", seasonality: "year-round", basePopularity: 0.75, region: "europe" },
  { id: "PT-MADEIRA", name: "Madeira", country: "PT", lat: 32.65, lng: -16.91, category: "nature", seasonality: "year-round", basePopularity: 0.65, region: "europe" },
  { id: "PT-AZORES", name: "Azores", country: "PT", lat: 37.74, lng: -25.67, category: "nature", seasonality: "summer", basePopularity: 0.50, region: "europe" },

  // ========================================
  // NETHERLANDS (2)
  // ========================================
  { id: "NL-COAST-ZEELAND", name: "Zeeland", country: "NL", lat: 51.50, lng: 3.61, category: "beach", seasonality: "summer", basePopularity: 0.60, region: "europe" },
  { id: "NL-COAST-NORTH", name: "Noord-Holland Coast", country: "NL", lat: 52.68, lng: 4.64, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },

  // ========================================
  // GERMANY (4)
  // ========================================
  { id: "DE-NORTH-SEA", name: "North Sea Islands", country: "DE", lat: 53.89, lng: 8.10, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "europe" },
  { id: "DE-BALTIC", name: "Baltic Coast", country: "DE", lat: 54.18, lng: 12.10, category: "beach", seasonality: "summer", basePopularity: 0.62, region: "europe" },
  { id: "DE-BLACK-FOREST", name: "Black Forest", country: "DE", lat: 48.00, lng: 8.15, category: "nature", seasonality: "summer", basePopularity: 0.52, region: "europe" },
  { id: "DE-ALLGAEU", name: "Allgäu", country: "DE", lat: 47.50, lng: 10.32, category: "nature", seasonality: "year-round", basePopularity: 0.55, region: "europe" },

  // ========================================
  // CROATIA (3)
  // ========================================
  { id: "HR-ISTRIA", name: "Istria", country: "HR", lat: 45.13, lng: 13.93, category: "beach", seasonality: "summer", basePopularity: 0.78, region: "europe" },
  { id: "HR-KVARNER", name: "Kvarner", country: "HR", lat: 44.85, lng: 14.40, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },
  { id: "HR-DALMATIA", name: "Dalmatia", country: "HR", lat: 43.51, lng: 16.44, category: "beach", seasonality: "summer", basePopularity: 0.82, region: "europe" },

  // ========================================
  // GREECE (7)
  // ========================================
  { id: "GR-CRETE", name: "Kreta", country: "GR", lat: 35.24, lng: 24.90, category: "beach", seasonality: "summer", basePopularity: 0.82, region: "europe" },
  { id: "GR-CORFU", name: "Korfu", country: "GR", lat: 39.62, lng: 19.92, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "GR-RHODES", name: "Rhodos", country: "GR", lat: 36.43, lng: 28.22, category: "beach", seasonality: "summer", basePopularity: 0.74, region: "europe" },
  { id: "GR-KOS", name: "Kos", country: "GR", lat: 36.85, lng: 26.89, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },
  { id: "GR-ZAKYNTHOS", name: "Zakynthos", country: "GR", lat: 37.75, lng: 20.88, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "europe" },
  { id: "GR-SANTORINI", name: "Santorini", country: "GR", lat: 36.39, lng: 25.46, category: "beach", seasonality: "summer", basePopularity: 0.75, region: "europe" },
  { id: "GR-HALKIDIKI", name: "Halkidiki", country: "GR", lat: 40.20, lng: 23.70, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "europe" },

  // ========================================
  // TURKEY (3)
  // ========================================
  { id: "TR-ANTALYA", name: "Antalya", country: "TR", lat: 36.90, lng: 30.70, category: "beach", seasonality: "summer", basePopularity: 0.88, region: "europe" },
  { id: "TR-BODRUM", name: "Bodrum & Mugla", country: "TR", lat: 37.03, lng: 27.43, category: "beach", seasonality: "summer", basePopularity: 0.72, region: "europe" },
  { id: "TR-DALAMAN", name: "Dalaman & Fethiye", country: "TR", lat: 36.77, lng: 28.79, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "europe" },

  // ========================================
  // SWITZERLAND (3)
  // ========================================
  { id: "CH-GRAUBUENDEN", name: "Graubünden", country: "CH", lat: 46.85, lng: 9.53, category: "ski", seasonality: "winter", basePopularity: 0.75, region: "europe" },
  { id: "CH-VALAIS", name: "Valais (Zermatt, Verbier)", country: "CH", lat: 46.17, lng: 7.62, category: "ski", seasonality: "winter", basePopularity: 0.80, region: "europe" },
  { id: "CH-BERNESE-OBERLAND", name: "Bernese Oberland", country: "CH", lat: 46.59, lng: 7.91, category: "ski", seasonality: "winter", basePopularity: 0.76, region: "europe" },

  // ========================================
  // DENMARK (1)
  // ========================================
  { id: "DK-JUTLAND", name: "Jutland Coast", country: "DK", lat: 56.15, lng: 8.45, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "europe" },

  // ========================================
  // MONTENEGRO (1)
  // ========================================
  { id: "ME-COAST", name: "Montenegrin Coast (Budva)", country: "ME", lat: 42.29, lng: 18.84, category: "beach", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // BULGARIA (1)
  // ========================================
  { id: "BG-BLACK-SEA", name: "Bulgarian Black Sea", country: "BG", lat: 42.70, lng: 27.71, category: "beach", seasonality: "summer", basePopularity: 0.58, region: "europe" },

  // ========================================
  // HUNGARY (2)
  // ========================================
  { id: "HU-BALATON", name: "Lake Balaton", country: "HU", lat: 46.84, lng: 17.71, category: "lake", seasonality: "summer", basePopularity: 0.58, region: "europe" },
  { id: "HU-BUDAPEST", name: "Budapest", country: "HU", lat: 47.50, lng: 19.04, category: "city", seasonality: "year-round", basePopularity: 0.70, region: "europe" },

  // ========================================
  // EGYPT (2)
  // ========================================
  { id: "EG-HURGHADA", name: "Hurghada", country: "EG", lat: 27.26, lng: 33.81, category: "beach", seasonality: "year-round", basePopularity: 0.75, region: "europe" },
  { id: "EG-SHARM", name: "Sharm el-Sheikh", country: "EG", lat: 27.92, lng: 34.33, category: "beach", seasonality: "year-round", basePopularity: 0.68, region: "europe" },

  // ========================================
  // TUNISIA (1)
  // ========================================
  { id: "TN-DJERBA", name: "Djerba & Hammamet", country: "TN", lat: 33.81, lng: 10.86, category: "beach", seasonality: "summer", basePopularity: 0.60, region: "europe" },

  // ========================================
  // MOROCCO (2)
  // ========================================
  { id: "MA-MARRAKECH", name: "Marrakech", country: "MA", lat: 31.63, lng: -8.00, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "europe" },
  { id: "MA-AGADIR", name: "Agadir", country: "MA", lat: 30.43, lng: -9.60, category: "beach", seasonality: "year-round", basePopularity: 0.62, region: "europe" },

  // ========================================
  // MALTA (1)
  // ========================================
  { id: "MT-MALTA", name: "Malta", country: "MT", lat: 35.90, lng: 14.51, category: "beach", seasonality: "summer", basePopularity: 0.62, region: "europe" },

  // ========================================
  // CYPRUS (1)
  // ========================================
  { id: "CY-COAST", name: "Cyprus", country: "CY", lat: 34.92, lng: 33.62, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "europe" },
];
