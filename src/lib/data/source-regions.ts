import type { SourceRegion } from "@/types";

export const sourceRegions: SourceRegion[] = [
  // ========================================
  // GERMANY - 16 Bundeslaender
  // ========================================
  { id: "DE-BW", countryCode: "DE", subdivisionCode: "DE-BW", name: "Baden-Württemberg", population: 11100000, lat: 48.66, lng: 9.35 },
  { id: "DE-BY", countryCode: "DE", subdivisionCode: "DE-BY", name: "Bayern", population: 13140000, lat: 48.79, lng: 11.50 },
  { id: "DE-BE", countryCode: "DE", subdivisionCode: "DE-BE", name: "Berlin", population: 3645000, lat: 52.52, lng: 13.41 },
  { id: "DE-BB", countryCode: "DE", subdivisionCode: "DE-BB", name: "Brandenburg", population: 2531000, lat: 52.41, lng: 13.06 },
  { id: "DE-HB", countryCode: "DE", subdivisionCode: "DE-HB", name: "Bremen", population: 680000, lat: 53.08, lng: 8.80 },
  { id: "DE-HH", countryCode: "DE", subdivisionCode: "DE-HH", name: "Hamburg", population: 1853000, lat: 53.55, lng: 9.99 },
  { id: "DE-HE", countryCode: "DE", subdivisionCode: "DE-HE", name: "Hessen", population: 6293000, lat: 50.65, lng: 9.16 },
  { id: "DE-MV", countryCode: "DE", subdivisionCode: "DE-MV", name: "Mecklenburg-Vorpommern", population: 1611000, lat: 53.61, lng: 12.43 },
  { id: "DE-NI", countryCode: "DE", subdivisionCode: "DE-NI", name: "Niedersachsen", population: 8003000, lat: 52.64, lng: 9.85 },
  { id: "DE-NW", countryCode: "DE", subdivisionCode: "DE-NW", name: "Nordrhein-Westfalen", population: 17932000, lat: 51.43, lng: 7.66 },
  { id: "DE-RP", countryCode: "DE", subdivisionCode: "DE-RP", name: "Rheinland-Pfalz", population: 4098000, lat: 49.91, lng: 7.45 },
  { id: "DE-SL", countryCode: "DE", subdivisionCode: "DE-SL", name: "Saarland", population: 984000, lat: 49.40, lng: 7.04 },
  { id: "DE-SN", countryCode: "DE", subdivisionCode: "DE-SN", name: "Sachsen", population: 4057000, lat: 51.10, lng: 13.20 },
  { id: "DE-ST", countryCode: "DE", subdivisionCode: "DE-ST", name: "Sachsen-Anhalt", population: 2181000, lat: 51.95, lng: 11.69 },
  { id: "DE-SH", countryCode: "DE", subdivisionCode: "DE-SH", name: "Schleswig-Holstein", population: 2910000, lat: 54.22, lng: 9.70 },
  { id: "DE-TH", countryCode: "DE", subdivisionCode: "DE-TH", name: "Thüringen", population: 2120000, lat: 50.86, lng: 11.05 },

  // ========================================
  // AUSTRIA - 9 Bundeslaender
  // ========================================
  { id: "AT-1", countryCode: "AT", subdivisionCode: "AT-1", name: "Burgenland", population: 296000, lat: 47.50, lng: 16.42 },
  { id: "AT-2", countryCode: "AT", subdivisionCode: "AT-2", name: "Kärnten", population: 562000, lat: 46.77, lng: 13.83 },
  { id: "AT-3", countryCode: "AT", subdivisionCode: "AT-3", name: "Niederösterreich", population: 1685000, lat: 48.33, lng: 15.75 },
  { id: "AT-4", countryCode: "AT", subdivisionCode: "AT-4", name: "Oberösterreich", population: 1490000, lat: 48.03, lng: 13.98 },
  { id: "AT-5", countryCode: "AT", subdivisionCode: "AT-5", name: "Salzburg", population: 560000, lat: 47.27, lng: 13.20 },
  { id: "AT-6", countryCode: "AT", subdivisionCode: "AT-6", name: "Steiermark", population: 1247000, lat: 47.36, lng: 14.47 },
  { id: "AT-7", countryCode: "AT", subdivisionCode: "AT-7", name: "Tirol", population: 758000, lat: 47.06, lng: 11.39 },
  { id: "AT-8", countryCode: "AT", subdivisionCode: "AT-8", name: "Vorarlberg", population: 399000, lat: 47.25, lng: 9.90 },
  { id: "AT-9", countryCode: "AT", subdivisionCode: "AT-9", name: "Wien", population: 1912000, lat: 48.21, lng: 16.37 },

  // ========================================
  // NETHERLANDS - 3 holiday advisory regions
  // ========================================
  { id: "NL-NORTH", countryCode: "NL", subdivisionCode: "NL-NORTH", name: "Nederland Noord", population: 3200000, lat: 52.90, lng: 5.50 },
  { id: "NL-CENTRAL", countryCode: "NL", subdivisionCode: "NL-CENTRAL", name: "Nederland Midden", population: 5800000, lat: 52.20, lng: 5.10 },
  { id: "NL-SOUTH", countryCode: "NL", subdivisionCode: "NL-SOUTH", name: "Nederland Zuid", population: 7500000, lat: 51.50, lng: 5.30 },

  // ========================================
  // BELGIUM - single region (3 communities have slightly different schedules,
  // API returns all combined without subdivision codes)
  // ========================================
  { id: "BE", countryCode: "BE", subdivisionCode: "BE", name: "Belgium", population: 11500000, lat: 50.85, lng: 4.35 },

  // ========================================
  // SWITZERLAND - 5 key cantons (each has own school holiday schedule)
  // ========================================
  { id: "CH-ZH", countryCode: "CH", subdivisionCode: "CH-ZH", name: "Zürich", population: 1553000, lat: 47.38, lng: 8.54 },
  { id: "CH-BE", countryCode: "CH", subdivisionCode: "CH-BE", name: "Bern", population: 1043000, lat: 46.95, lng: 7.45 },
  { id: "CH-VD", countryCode: "CH", subdivisionCode: "CH-VD", name: "Vaud", population: 815000, lat: 46.52, lng: 6.63 },
  { id: "CH-TI", countryCode: "CH", subdivisionCode: "CH-TI", name: "Ticino", population: 354000, lat: 46.20, lng: 8.96 },
  { id: "CH-BS", countryCode: "CH", subdivisionCode: "CH-BS", name: "Basel", population: 850000, lat: 47.56, lng: 7.59 },

  // ========================================
  // FRANCE - 3 academic holiday zones
  // Zone A: Besançon, Bordeaux, Clermont-Ferrand, Dijon, Grenoble, Limoges, Lyon, Poitiers
  // Zone B: Aix-Marseille, Amiens, Caen, Lille, Nancy-Metz, Nantes, Nice, Orléans-Tours, Reims, Rennes, Rouen, Strasbourg
  // Zone C: Créteil, Montpellier, Paris, Toulouse, Versailles
  // ========================================
  { id: "FR-ZA", countryCode: "FR", subdivisionCode: "FR-ZA", name: "France Zone A (Lyon, Bordeaux, Grenoble)", population: 12000000, lat: 45.76, lng: 4.84 },
  { id: "FR-ZB", countryCode: "FR", subdivisionCode: "FR-ZB", name: "France Zone B (Lille, Strasbourg, Nantes, Nice)", population: 22000000, lat: 48.57, lng: 2.80 },
  { id: "FR-ZC", countryCode: "FR", subdivisionCode: "FR-ZC", name: "France Zone C (Paris, Toulouse, Montpellier)", population: 23000000, lat: 48.86, lng: 2.35 },

  // ========================================
  // CZECH REPUBLIC - country level (single school holiday schedule)
  // ========================================
  { id: "CZ", countryCode: "CZ", subdivisionCode: "CZ", name: "Czech Republic", population: 10700000, lat: 49.82, lng: 15.47 },

  // ========================================
  // POLAND - country level (mostly national schedule)
  // ========================================
  { id: "PL", countryCode: "PL", subdivisionCode: "PL", name: "Poland", population: 38000000, lat: 51.92, lng: 19.15 },

  // ========================================
  // LUXEMBOURG - country level
  // ========================================
  { id: "LU", countryCode: "LU", subdivisionCode: "LU", name: "Luxembourg", population: 645000, lat: 49.61, lng: 6.13 },
];
