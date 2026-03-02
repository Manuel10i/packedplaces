import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // AUSTRIA - ski & lakes (10)
  // ========================================
  { id: "AT-TYROL-INNSBRUCK", name: "Innsbruck & Stubai", country: "AT", lat: 47.26, lng: 11.39, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.95, region: "europe" },
  { id: "AT-TYROL-ZILLERTAL", name: "Zillertal", country: "AT", lat: 47.17, lng: 11.88, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.90, region: "europe" },
  { id: "AT-TYROL-OETZTAL", name: "Ötztal", country: "AT", lat: 46.97, lng: 10.86, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.85, region: "europe" },
  { id: "AT-TYROL-STANTON", name: "St. Anton am Arlberg", country: "AT", lat: 47.13, lng: 10.27, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.88, region: "europe" },
  { id: "AT-TYROL-KITZBUEHEL", name: "Kitzbühel", country: "AT", lat: 47.45, lng: 12.39, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.87, region: "europe" },
  { id: "AT-SALZBURG-LAND", name: "Salzburger Land", country: "AT", lat: 47.27, lng: 13.20, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.82, region: "europe" },
  { id: "AT-VORARLBERG-SKI", name: "Vorarlberg Ski", country: "AT", lat: 47.15, lng: 9.92, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.75, region: "europe" },
  { id: "AT-SAALBACH", name: "Saalbach-Hinterglemm", country: "AT", lat: 47.39, lng: 12.64, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.80, region: "europe" },
  { id: "AT-KAERNTEN-LAKES", name: "Kärntner Seen", country: "AT", lat: 46.63, lng: 14.08, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },
  { id: "AT-SALZKAMMERGUT", name: "Salzkammergut", country: "AT", lat: 47.71, lng: 13.62, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },

  // ========================================
  // ITALY (14)
  // ========================================
  { id: "IT-SUEDTIROL", name: "Südtirol", country: "IT", lat: 46.73, lng: 11.35, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.80, region: "europe" },
  { id: "IT-DOLOMITES", name: "Dolomiten", country: "IT", lat: 46.41, lng: 11.84, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.78, region: "europe" },
  { id: "IT-GARDASEE", name: "Gardasee", country: "IT", lat: 45.64, lng: 10.71, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.85, region: "europe" },
  { id: "IT-COMO", name: "Lake Como", country: "IT", lat: 46.01, lng: 9.26, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "IT-MAGGIORE", name: "Lake Maggiore", country: "IT", lat: 45.96, lng: 8.63, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.60, region: "europe" },
  { id: "IT-ADRIATIC", name: "Adriatic Coast (Rimini)", country: "IT", lat: 44.06, lng: 12.57, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.75, region: "europe", capacityOverride: 0.6 },
  { id: "IT-CAORLE", name: "Caorle", country: "IT", lat: 45.60, lng: 12.88, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe", capacityOverride: 0.4 },
  { id: "IT-JESOLO", name: "Jesolo", country: "IT", lat: 45.53, lng: 12.64, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.68, region: "europe", capacityOverride: 0.4 },
  { id: "IT-TUSCANY", name: "Toscana", country: "IT", lat: 43.35, lng: 11.30, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.70, region: "europe" },
  { id: "IT-LIGURIA", name: "Liguria & Cinque Terre", country: "IT", lat: 44.31, lng: 9.32, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "IT-AMALFI", name: "Amalfi Coast", country: "IT", lat: 40.63, lng: 14.60, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.78, region: "europe" },
  { id: "IT-SARDINIA", name: "Sardegna", country: "IT", lat: 40.12, lng: 9.01, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.70, region: "europe" },
  { id: "IT-SICILY", name: "Sicilia", country: "IT", lat: 37.60, lng: 14.02, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "IT-CALABRIA", name: "Calabria", country: "IT", lat: 38.91, lng: 16.59, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "IT-ROME", name: "Rome", country: "IT", lat: 41.90, lng: 12.50, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.88, region: "europe" },
  { id: "IT-VENICE", name: "Venice", country: "IT", lat: 45.44, lng: 12.34, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.80, region: "europe" },

  // ========================================
  // SPAIN (11)
  // ========================================
  { id: "ES-COSTA-BRAVA", name: "Costa Brava", country: "ES", lat: 41.85, lng: 3.10, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.80, region: "europe" },
  { id: "ES-COSTA-BLANCA", name: "Costa Blanca", country: "ES", lat: 38.35, lng: -0.48, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.78, region: "europe" },
  { id: "ES-COSTA-DEL-SOL", name: "Costa del Sol", country: "ES", lat: 36.72, lng: -4.42, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.85, region: "europe" },
  { id: "ES-MALLORCA", name: "Mallorca", country: "ES", lat: 39.57, lng: 2.65, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.92, region: "europe" },
  { id: "ES-IBIZA", name: "Ibiza", country: "ES", lat: 38.91, lng: 1.43, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.78, region: "europe" },
  { id: "ES-MENORCA", name: "Menorca", country: "ES", lat: 39.97, lng: 4.09, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "ES-CANARY", name: "Canary Islands", country: "ES", lat: 28.12, lng: -15.43, category: "beach", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.82, region: "europe" },
  { id: "ES-TENERIFE", name: "Tenerife", country: "ES", lat: 28.29, lng: -16.63, category: "beach", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.78, region: "europe" },
  { id: "ES-FUERTEVENTURA", name: "Fuerteventura", country: "ES", lat: 28.36, lng: -14.05, category: "beach", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe" },
  { id: "ES-BARCELONA", name: "Barcelona", country: "ES", lat: 41.39, lng: 2.17, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.88, region: "europe" },
  { id: "ES-MADRID", name: "Madrid", country: "ES", lat: 40.42, lng: -3.70, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.75, region: "europe" },

  // ========================================
  // FRANCE (10)
  // ========================================
  { id: "FR-COTE-AZUR", name: "Côte d'Azur", country: "FR", lat: 43.70, lng: 7.26, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.88, region: "europe" },
  { id: "FR-LANGUEDOC", name: "Languedoc", country: "FR", lat: 43.60, lng: 3.88, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.68, region: "europe" },
  { id: "FR-ATLANTIC", name: "Atlantic Coast (Biarritz)", country: "FR", lat: 43.48, lng: -1.56, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },
  { id: "FR-CORSICA", name: "Corsica", country: "FR", lat: 42.04, lng: 9.01, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "FR-NORMANDY", name: "Normandy", country: "FR", lat: 49.18, lng: -0.37, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "FR-BRITTANY", name: "Brittany", country: "FR", lat: 48.20, lng: -2.93, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.58, region: "europe" },
  { id: "FR-ALPS", name: "French Alps", country: "FR", lat: 45.18, lng: 5.72, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.80, region: "europe" },
  { id: "FR-PARIS", name: "Paris", country: "FR", lat: 48.86, lng: 2.35, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.92, region: "europe", capacityOverride: 7.0 },
  { id: "FR-PROVENCE", name: "Provence", country: "FR", lat: 43.95, lng: 5.45, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "FR-LOIRE", name: "Loire Valley", country: "FR", lat: 47.38, lng: 0.69, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // PORTUGAL (4)
  // ========================================
  { id: "PT-ALGARVE", name: "Algarve", country: "PT", lat: 37.02, lng: -7.93, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.82, region: "europe" },
  { id: "PT-LISBON", name: "Lisbon & Coast", country: "PT", lat: 38.72, lng: -9.14, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.75, region: "europe" },
  { id: "PT-MADEIRA", name: "Madeira", country: "PT", lat: 32.65, lng: -16.91, category: "nature", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.65, region: "europe" },
  { id: "PT-AZORES", name: "Azores", country: "PT", lat: 37.74, lng: -25.67, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },

  // ========================================
  // NETHERLANDS (2)
  // ========================================
  { id: "NL-COAST-ZEELAND", name: "Zeeland", country: "NL", lat: 51.50, lng: 3.61, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.60, region: "europe" },
  { id: "NL-COAST-NORTH", name: "Noord-Holland Coast", country: "NL", lat: 52.68, lng: 4.64, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // GERMANY (4)
  // ========================================
  { id: "DE-NORTH-SEA", name: "North Sea Islands", country: "DE", lat: 53.89, lng: 8.10, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },
  { id: "DE-BALTIC", name: "Baltic Coast", country: "DE", lat: 54.18, lng: 12.10, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "DE-BLACK-FOREST", name: "Black Forest", country: "DE", lat: 48.00, lng: 8.15, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },
  { id: "DE-ALLGAEU", name: "Allgäu", country: "DE", lat: 47.50, lng: 10.32, category: "nature", peakMonths: [5, 6, 7, 8, 9, 10, 12, 1, 2, 3], basePopularity: 0.55, region: "europe" },

  // ========================================
  // CROATIA (3)
  // ========================================
  { id: "HR-ISTRIA", name: "Istria", country: "HR", lat: 45.13, lng: 13.93, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.78, region: "europe" },
  { id: "HR-KVARNER", name: "Kvarner", country: "HR", lat: 44.85, lng: 14.40, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.68, region: "europe" },
  { id: "HR-DALMATIA", name: "Dalmatia", country: "HR", lat: 43.51, lng: 16.44, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.82, region: "europe" },

  // ========================================
  // GREECE (7)
  // ========================================
  { id: "GR-CRETE", name: "Kreta", country: "GR", lat: 35.24, lng: 24.90, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.82, region: "europe" },
  { id: "GR-CORFU", name: "Korfu", country: "GR", lat: 39.62, lng: 19.92, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "GR-RHODES", name: "Rhodos", country: "GR", lat: 36.43, lng: 28.22, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.74, region: "europe" },
  { id: "GR-KOS", name: "Kos", country: "GR", lat: 36.85, lng: 26.89, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.68, region: "europe" },
  { id: "GR-ZAKYNTHOS", name: "Zakynthos", country: "GR", lat: 37.75, lng: 20.88, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },
  { id: "GR-SANTORINI", name: "Santorini", country: "GR", lat: 36.39, lng: 25.46, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.75, region: "europe", capacityOverride: 0.4 },
  { id: "GR-HALKIDIKI", name: "Halkidiki", country: "GR", lat: 40.20, lng: 23.70, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },

  // ========================================
  // TURKEY (3)
  // ========================================
  { id: "TR-ANTALYA", name: "Antalya", country: "TR", lat: 36.90, lng: 30.70, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.88, region: "europe" },
  { id: "TR-BODRUM", name: "Bodrum & Mugla", country: "TR", lat: 37.03, lng: 27.43, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.72, region: "europe" },
  { id: "TR-DALAMAN", name: "Dalaman & Fethiye", country: "TR", lat: 36.77, lng: 28.79, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.68, region: "europe" },

  // ========================================
  // SWITZERLAND (3)
  // ========================================
  { id: "CH-GRAUBUENDEN", name: "Graubünden", country: "CH", lat: 46.85, lng: 9.53, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.75, region: "europe" },
  { id: "CH-VALAIS", name: "Valais (Zermatt, Verbier)", country: "CH", lat: 46.17, lng: 7.62, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.80, region: "europe" },
  { id: "CH-BERNESE-OBERLAND", name: "Bernese Oberland", country: "CH", lat: 46.59, lng: 7.91, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.76, region: "europe" },

  // ========================================
  // DENMARK (1)
  // ========================================
  { id: "DK-JUTLAND", name: "Jutland Coast", country: "DK", lat: 56.15, lng: 8.45, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // MONTENEGRO (1)
  // ========================================
  { id: "ME-COAST", name: "Montenegrin Coast (Budva)", country: "ME", lat: 42.29, lng: 18.84, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },

  // ========================================
  // BULGARIA (1)
  // ========================================
  { id: "BG-BLACK-SEA", name: "Bulgarian Black Sea", country: "BG", lat: 42.70, lng: 27.71, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.58, region: "europe" },

  // ========================================
  // HUNGARY (2)
  // ========================================
  { id: "HU-BALATON", name: "Lake Balaton", country: "HU", lat: 46.84, lng: 17.71, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.58, region: "europe" },
  { id: "HU-BUDAPEST", name: "Budapest", country: "HU", lat: 47.50, lng: 19.04, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.70, region: "europe" },

  // ========================================
  // EGYPT (2)
  // ========================================
  { id: "EG-HURGHADA", name: "Hurghada", country: "EG", lat: 27.26, lng: 33.81, category: "beach", peakMonths: [10, 11, 12, 1, 2, 3, 4], basePopularity: 0.75, region: "europe" },
  { id: "EG-SHARM", name: "Sharm el-Sheikh", country: "EG", lat: 27.92, lng: 34.33, category: "beach", peakMonths: [10, 11, 12, 1, 2, 3, 4], basePopularity: 0.68, region: "europe" },

  // ========================================
  // TUNISIA (1)
  // ========================================
  { id: "TN-DJERBA", name: "Djerba & Hammamet", country: "TN", lat: 33.81, lng: 10.86, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.60, region: "europe" },

  // ========================================
  // MOROCCO (2)
  // ========================================
  { id: "MA-MARRAKECH", name: "Marrakech", country: "MA", lat: 31.63, lng: -8.00, category: "city", peakMonths: [3, 4, 5, 9, 10, 11], basePopularity: 0.72, region: "europe" },
  { id: "MA-AGADIR", name: "Agadir", country: "MA", lat: 30.43, lng: -9.60, category: "beach", peakMonths: [4, 5, 6, 7, 8, 9, 10], basePopularity: 0.62, region: "europe" },

  // ========================================
  // MALTA (1)
  // ========================================
  { id: "MT-MALTA", name: "Malta", country: "MT", lat: 35.90, lng: 14.51, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },

  // ========================================
  // CYPRUS (1)
  // ========================================
  { id: "CY-COAST", name: "Cyprus", country: "CY", lat: 34.92, lng: 33.62, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe" },

  // ========================================
  // GERMANY - cities & nature (8)
  // ========================================
  { id: "DE-MUNICH", name: "Munich", country: "DE", lat: 48.14, lng: 11.58, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.82, region: "europe" },
  { id: "DE-HAMBURG", name: "Hamburg", country: "DE", lat: 53.55, lng: 9.99, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "DE-BERLIN", name: "Berlin", country: "DE", lat: 52.52, lng: 13.41, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.85, region: "europe" },
  { id: "DE-DRESDEN", name: "Dresden", country: "DE", lat: 51.05, lng: 13.74, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.58, region: "europe" },
  { id: "DE-COLOGNE", name: "Cologne", country: "DE", lat: 50.94, lng: 6.96, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe" },
  { id: "DE-SYLT", name: "Sylt", country: "DE", lat: 54.91, lng: 8.33, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "DE-MOSEL", name: "Mosel Valley", country: "DE", lat: 50.10, lng: 7.11, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "DE-SAXON-SWITZERLAND", name: "Saxon Switzerland", country: "DE", lat: 50.92, lng: 14.08, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.45, region: "europe" },
  { id: "DE-BAVARIAN-LAKES", name: "Bavarian Lakes", country: "DE", lat: 47.71, lng: 11.50, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },

  // ========================================
  // ITALY - cities & islands (9)
  // ========================================
  { id: "IT-NAPLES", name: "Naples", country: "IT", lat: 40.85, lng: 14.27, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "IT-FLORENCE", name: "Florence", country: "IT", lat: 43.77, lng: 11.25, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.82, region: "europe", capacityOverride: 3.0 },
  { id: "IT-MILAN", name: "Milan", country: "IT", lat: 45.46, lng: 9.19, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.78, region: "europe" },
  { id: "IT-ISCHIA", name: "Ischia", country: "IT", lat: 40.73, lng: 13.90, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "IT-ELBA", name: "Elba", country: "IT", lat: 42.78, lng: 10.28, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },
  { id: "IT-CAPRI", name: "Capri", country: "IT", lat: 40.55, lng: 14.24, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.65, region: "europe", capacityOverride: 0.3 },
  { id: "IT-DOLOMITES-SUMMER", name: "Val Gardena (Summer)", country: "IT", lat: 46.56, lng: 11.76, category: "mountain", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "IT-CINQUE-TERRE-TOWN", name: "Manarola", country: "IT", lat: 44.11, lng: 9.73, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.60, region: "europe", capacityOverride: 0.5 },

  // ========================================
  // SPAIN - cities & beach (8)
  // ========================================
  { id: "ES-SEVILLE", name: "Seville", country: "ES", lat: 37.39, lng: -5.98, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "ES-GRANADA", name: "Granada", country: "ES", lat: 37.18, lng: -3.60, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe" },
  { id: "ES-BILBAO", name: "Bilbao", country: "ES", lat: 43.26, lng: -2.93, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },
  { id: "ES-SAN-SEBASTIAN", name: "San Sebastián", country: "ES", lat: 43.32, lng: -1.98, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "ES-MARBELLA", name: "Marbella", country: "ES", lat: 36.51, lng: -4.88, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.70, region: "europe" },
  { id: "ES-PAMPLONA", name: "Pamplona", country: "ES", lat: 42.81, lng: -1.64, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.48, region: "europe" },
  { id: "ES-COSTA-DAURADA", name: "Costa Daurada", country: "ES", lat: 41.12, lng: 1.25, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe" },
  { id: "ES-GRAN-CANARIA", name: "Gran Canaria", country: "ES", lat: 27.95, lng: -15.60, category: "beach", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "ES-LA-PALMA", name: "La Palma", country: "ES", lat: 28.68, lng: -17.76, category: "nature", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },

  // ========================================
  // FRANCE - cities & nature (6)
  // ========================================
  { id: "FR-LYON", name: "Lyon", country: "FR", lat: 45.76, lng: 4.84, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.62, region: "europe" },
  { id: "FR-BORDEAUX", name: "Bordeaux", country: "FR", lat: 44.84, lng: -0.58, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.60, region: "europe" },
  { id: "FR-MARSEILLE", name: "Marseille", country: "FR", lat: 43.30, lng: 5.37, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.65, region: "europe" },
  { id: "FR-STRASBOURG", name: "Strasbourg", country: "FR", lat: 48.57, lng: 7.75, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },
  { id: "FR-CHAMONIX", name: "Chamonix", country: "FR", lat: 45.92, lng: 6.87, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.72, region: "europe" },
  { id: "FR-DORDOGNE", name: "Dordogne", country: "FR", lat: 44.86, lng: 0.75, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.48, region: "europe" },
  { id: "FR-ANNECY", name: "Lake Annecy", country: "FR", lat: 45.90, lng: 6.13, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "FR-CAMARGUE", name: "Camargue", country: "FR", lat: 43.48, lng: 4.54, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.38, region: "europe" },

  // ========================================
  // AUSTRIA - cities & nature (3)
  // ========================================
  { id: "AT-VIENNA", name: "Vienna", country: "AT", lat: 48.21, lng: 16.37, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.82, region: "europe" },
  { id: "AT-SALZBURG", name: "Salzburg", country: "AT", lat: 47.80, lng: 13.04, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "AT-WACHAU", name: "Wachau", country: "AT", lat: 48.37, lng: 15.42, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "AT-HALLSTATT", name: "Hallstatt", country: "AT", lat: 47.56, lng: 13.65, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.58, region: "europe", capacityOverride: 0.5 },

  // ========================================
  // SWITZERLAND - cities & nature (5)
  // ========================================
  { id: "CH-ZURICH", name: "Zurich", country: "CH", lat: 47.37, lng: 8.54, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe" },
  { id: "CH-GENEVA", name: "Geneva", country: "CH", lat: 46.20, lng: 6.14, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.62, region: "europe" },
  { id: "CH-LUCERNE", name: "Lucerne", country: "CH", lat: 47.05, lng: 8.31, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.60, region: "europe" },
  { id: "CH-INTERLAKEN", name: "Interlaken", country: "CH", lat: 46.69, lng: 7.87, category: "nature", peakMonths: [5, 6, 7, 8, 9, 12, 1, 2, 3], basePopularity: 0.65, region: "europe" },
  { id: "CH-TICINO", name: "Ticino", country: "CH", lat: 46.17, lng: 8.80, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },

  // ========================================
  // PORTUGAL - cities (2)
  // ========================================
  { id: "PT-PORTO", name: "Porto", country: "PT", lat: 41.16, lng: -8.63, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "PT-SINTRA", name: "Sintra", country: "PT", lat: 38.80, lng: -9.39, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.55, region: "europe" },

  // ========================================
  // BELGIUM - cities (3)
  // ========================================
  { id: "BE-BRUGES", name: "Bruges", country: "BE", lat: 51.21, lng: 3.22, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe", capacityOverride: 2.0 },
  { id: "BE-BRUSSELS", name: "Brussels", country: "BE", lat: 50.85, lng: 4.35, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.62, region: "europe" },
  { id: "BE-GHENT", name: "Ghent", country: "BE", lat: 51.05, lng: 3.72, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.52, region: "europe" },

  // ========================================
  // NETHERLANDS - cities (2)
  // ========================================
  { id: "NL-AMSTERDAM", name: "Amsterdam", country: "NL", lat: 52.37, lng: 4.90, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.88, region: "europe", capacityOverride: 4.0 },
  { id: "NL-UTRECHT", name: "Utrecht", country: "NL", lat: 52.09, lng: 5.12, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.45, region: "europe" },
  { id: "NL-WADDEN", name: "Wadden Islands", country: "NL", lat: 53.42, lng: 5.78, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.45, region: "europe" },

  // ========================================
  // POLAND - cities & nature (4)
  // ========================================
  { id: "PL-KRAKOW", name: "Krakow", country: "PL", lat: 50.06, lng: 19.94, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },
  { id: "PL-WARSAW", name: "Warsaw", country: "PL", lat: 52.23, lng: 21.01, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.60, region: "europe" },
  { id: "PL-GDANSK", name: "Gdańsk", country: "PL", lat: 54.35, lng: 18.65, category: "city", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "PL-ZAKOPANE", name: "Zakopane", country: "PL", lat: 49.30, lng: 19.95, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.55, region: "europe" },
  { id: "PL-WROCLAW", name: "Wrocław", country: "PL", lat: 51.11, lng: 17.04, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.48, region: "europe" },

  // ========================================
  // CZECH REPUBLIC - cities & cultural (2)
  // ========================================
  { id: "CZ-PRAGUE", name: "Prague", country: "CZ", lat: 50.08, lng: 14.44, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.82, region: "europe" },
  { id: "CZ-CESKY-KRUMLOV", name: "Český Krumlov", country: "CZ", lat: 48.81, lng: 14.32, category: "cultural", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe", capacityOverride: 1.0 },
  { id: "CZ-KARLOVY-VARY", name: "Karlovy Vary", country: "CZ", lat: 50.23, lng: 12.87, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },

  // ========================================
  // DENMARK - cities (1)
  // ========================================
  { id: "DK-COPENHAGEN", name: "Copenhagen", country: "DK", lat: 55.68, lng: 12.57, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.72, region: "europe" },

  // ========================================
  // CROATIA - cities & islands (2)
  // ========================================
  { id: "HR-SPLIT", name: "Split", country: "HR", lat: 43.51, lng: 16.44, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.68, region: "europe" },
  { id: "HR-HVAR", name: "Hvar", country: "HR", lat: 43.17, lng: 16.44, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.62, region: "europe", capacityOverride: 0.4 },

  // ========================================
  // GREECE - islands (6)
  // ========================================
  { id: "GR-NAXOS", name: "Naxos", country: "GR", lat: 37.10, lng: 25.38, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },
  { id: "GR-PAROS", name: "Paros", country: "GR", lat: 37.09, lng: 25.15, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.58, region: "europe" },
  { id: "GR-MILOS", name: "Milos", country: "GR", lat: 36.69, lng: 24.44, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },
  { id: "GR-LEFKADA", name: "Lefkada", country: "GR", lat: 38.83, lng: 20.71, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.48, region: "europe" },
  { id: "GR-CEPHALONIA", name: "Cephalonia", country: "GR", lat: 38.18, lng: 20.49, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.50, region: "europe" },

  // ========================================
  // HUNGARY - thermal (1)
  // ========================================
  { id: "HU-THERMAL", name: "Thermal Baths (Hévíz)", country: "HU", lat: 46.79, lng: 17.19, category: "nature", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },

  // ========================================
  // LUXEMBOURG (1)
  // ========================================
  { id: "LU-LUXEMBOURG", name: "Luxembourg City", country: "LU", lat: 49.61, lng: 6.13, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },

  // ========================================
  // TURKEY - beach (1)
  // ========================================
  { id: "TR-ALACATI", name: "Alaçatı", country: "TR", lat: 38.28, lng: 26.38, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe" },

  // ========================================
  // NEW DESTINATIONS
  // ========================================
  { id: "SI-PORTOROZ", name: "Portorož", country: "SI", lat: 45.51, lng: 13.59, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "DE-HEIDELBERG", name: "Heidelberg", country: "DE", lat: 49.40, lng: 8.69, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.48, region: "europe" },
  { id: "DE-ROTHENBURG", name: "Rothenburg ob der Tauber", country: "DE", lat: 49.38, lng: 10.18, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.45, region: "europe" },
  { id: "IT-ORTISEI", name: "Ortisei", country: "IT", lat: 46.57, lng: 11.67, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.52, region: "europe" },
  { id: "IT-PORTOFINO", name: "Portofino", country: "IT", lat: 44.30, lng: 9.21, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.55, region: "europe", capacityOverride: 0.3 },
  { id: "FR-MONT-BLANC", name: "Mont Blanc", country: "FR", lat: 45.83, lng: 6.87, category: "mountain", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },
  { id: "FR-COLMAR", name: "Colmar", country: "FR", lat: 48.08, lng: 7.36, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },
  { id: "ES-FORMENTERA", name: "Formentera", country: "ES", lat: 38.71, lng: 1.44, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.52, region: "europe" },
  { id: "PT-ALENTEJO", name: "Alentejo Coast", country: "PT", lat: 37.74, lng: -8.79, category: "beach", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "AT-LECH", name: "Lech am Arlberg", country: "AT", lat: 47.21, lng: 10.14, category: "ski", peakMonths: [11, 12, 1, 2, 3], basePopularity: 0.68, region: "europe" },
  { id: "GR-IKARIA", name: "Ikaria", country: "GR", lat: 37.60, lng: 26.17, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.35, region: "europe" },
  { id: "HR-VIS", name: "Vis", country: "HR", lat: 43.06, lng: 16.18, category: "island", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.42, region: "europe" },
  { id: "NL-GIETHOORN", name: "Giethoorn", country: "NL", lat: 52.74, lng: 6.08, category: "nature", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.38, region: "europe" },
  { id: "PL-MASURIA", name: "Masuria Lakes", country: "PL", lat: 53.87, lng: 21.54, category: "lake", peakMonths: [5, 6, 7, 8, 9], basePopularity: 0.38, region: "europe" },
  { id: "CZ-BRNO", name: "Brno", country: "CZ", lat: 49.20, lng: 16.61, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.38, region: "europe" },
  { id: "DE-NUREMBERG", name: "Nuremberg", country: "DE", lat: 49.45, lng: 11.08, category: "city", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.48, region: "europe" },
  { id: "IT-RAVENNA", name: "Ravenna", country: "IT", lat: 44.42, lng: 12.20, category: "cultural", peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basePopularity: 0.42, region: "europe" },
];
