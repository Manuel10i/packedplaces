import type { TravelPattern } from "@/types";

// Travel patterns combine:
// Layer 1: Eurostat country-to-country overnight stay baseline weights
// Layer 2: Regional curation based on geographic proximity, cultural affinity, and tourism research
//
// Key data points:
// - Dutch tourists: 3.6M trips to Germany, 2.9M to France, 2.1M to Spain, 55.6% of AT stays in Tyrol
// - Southern German states (BY, BW) travel heavily to Austria/Italy
// - Northern German states travel to North Sea/Baltic/Scandinavia
// - NRW is biggest source of tourists to Dutch coast
// - Austrian tourists favor Italian Adriatic, Croatia, and Greek islands
// - Belgian tourists: similar to Dutch but more France-oriented
// - French tourists: 1st destination Spain, then Italy, Morocco, Tunisia, Portugal, Greece
// - Swiss tourists: heavy Italy orientation, France, Spain
// - Czech tourists: Croatia is #1 foreign destination, then Greece, Italy, Turkey
// - Polish tourists: Croatia, Greece, Turkey, Spain, Bulgaria, Egypt

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // DUTCH SOURCE REGIONS -> DESTINATIONS
  // ========================================

  // NL-NORTH -> Winter ski
  { sourceRegionId: "NL-NORTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.85, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.80, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "AT-TYROL-OETZTAL", weight: 0.70, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "AT-SALZBURG-LAND", weight: 0.65, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "AT-SAALBACH", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "FR-ALPS", weight: 0.50, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "CH-GRAUBUENDEN", weight: 0.40, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "CH-VALAIS", weight: 0.35, season: "winter" },
  // NL-NORTH -> Summer
  { sourceRegionId: "NL-NORTH", destinationId: "FR-COTE-AZUR", weight: 0.60, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "ES-COSTA-BRAVA", weight: 0.55, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "IT-GARDASEE", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "TR-ANTALYA", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "GR-KOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "GR-RHODES", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "ES-MALLORCA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "FR-LANGUEDOC", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "PT-ALGARVE", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "HR-ISTRIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "FR-PARIS", weight: 0.35, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "IT-ROME", weight: 0.30, season: null },

  // NL-CENTRAL -> Winter
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.85, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.82, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-TYROL-OETZTAL", weight: 0.75, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-TYROL-STANTON", weight: 0.65, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-SALZBURG-LAND", weight: 0.60, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "AT-SAALBACH", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "FR-ALPS", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "CH-GRAUBUENDEN", weight: 0.45, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "CH-VALAIS", weight: 0.40, season: "winter" },
  // NL-CENTRAL -> Summer
  { sourceRegionId: "NL-CENTRAL", destinationId: "FR-COTE-AZUR", weight: 0.65, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-COSTA-BRAVA", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "IT-GARDASEE", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "GR-CRETE", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "PT-ALGARVE", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "GR-RHODES", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "GR-KOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-IBIZA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "IT-TUSCANY", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "FR-LANGUEDOC", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "EG-HURGHADA", weight: 0.35, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "FR-PARIS", weight: 0.40, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-CANARY", weight: 0.45, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "MA-MARRAKECH", weight: 0.32, season: null },

  // NL-SOUTH -> Winter
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.80, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.78, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-TYROL-KITZBUEHEL", weight: 0.65, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-SALZBURG-LAND", weight: 0.60, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-ALPS", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-VALAIS", weight: 0.42, season: "winter" },
  // NL-SOUTH -> Summer
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-COTE-AZUR", weight: 0.60, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.55, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-GARDASEE", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "HR-ISTRIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-RHODES", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "TR-ANTALYA", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-ALGARVE", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-COSTA-BLANCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-PROVENCE", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-AMALFI", weight: 0.32, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "CY-COAST", weight: 0.30, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "EG-HURGHADA", weight: 0.35, season: null },

  // ========================================
  // GERMAN SOURCE REGIONS -> DESTINATIONS
  // ========================================

  // DE-BY (Bayern) -> Austria/Italy focused, biggest German state by tourism
  { sourceRegionId: "DE-BY", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.78, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.72, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-TYROL-KITZBUEHEL", weight: 0.68, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-SALZBURG-LAND", weight: 0.72, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-SAALBACH", weight: 0.58, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IT-SUEDTIROL", weight: 0.68, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IT-DOLOMITES", weight: 0.58, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IT-GARDASEE", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-JESOLO", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-CAORLE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-ADRIATIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-TUSCANY", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-LIGURIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-ISTRIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-DALMATIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-KVARNER", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-CORFU", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "AT-KAERNTEN-LAKES", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "AT-SALZKAMMERGUT", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-SARDINIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-CANARY", weight: 0.38, season: null },

  // DE-BW (Baden-Württemberg) -> Austria/France/Italy mix
  { sourceRegionId: "DE-BW", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.65, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.60, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "AT-VORARLBERG-SKI", weight: 0.58, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "CH-GRAUBUENDEN", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "CH-VALAIS", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "FR-ALPS", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "IT-SUEDTIROL", weight: 0.62, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "IT-GARDASEE", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "FR-COTE-AZUR", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "FR-PROVENCE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-TUSCANY", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-LIGURIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "HR-ISTRIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "ES-COSTA-BRAVA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-SARDINIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "DE-BLACK-FOREST", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "ES-CANARY", weight: 0.38, season: null },

  // DE-NW (Nordrhein-Westfalen) -> biggest German state by pop, Dutch coast, Austria, Mediterranean
  { sourceRegionId: "DE-NW", destinationId: "NL-COAST-ZEELAND", weight: 0.62, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "NL-COAST-NORTH", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.62, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.58, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "AT-SALZBURG-LAND", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "AT-SAALBACH", weight: 0.45, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-KOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-RHODES", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-COSTA-DEL-SOL", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IT-GARDASEE", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "HR-ISTRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IT-TUSCANY", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "PT-ALGARVE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "EG-HURGHADA", weight: 0.40, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-BARCELONA", weight: 0.35, season: null },
  { sourceRegionId: "DE-NW", destinationId: "TN-DJERBA", weight: 0.32, season: "summer" },

  // DE-NI (Niedersachsen) -> North Sea, Austria, Mediterranean
  { sourceRegionId: "DE-NI", destinationId: "DE-NORTH-SEA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "DK-JUTLAND", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "AT-SALZBURG-LAND", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "TR-ANTALYA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "IT-GARDASEE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "ES-CANARY", weight: 0.38, season: null },
  { sourceRegionId: "DE-NI", destinationId: "EG-HURGHADA", weight: 0.35, season: null },

  // DE-HE (Hessen) -> mixed Austria/Mediterranean
  { sourceRegionId: "DE-HE", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.58, season: "winter" },
  { sourceRegionId: "DE-HE", destinationId: "AT-SALZBURG-LAND", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-HE", destinationId: "IT-SUEDTIROL", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-HE", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "IT-GARDASEE", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "TR-ANTALYA", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "HR-DALMATIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "HR-ISTRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "IT-TUSCANY", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "ES-COSTA-DEL-SOL", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-HE", destinationId: "EG-HURGHADA", weight: 0.38, season: null },
  { sourceRegionId: "DE-HE", destinationId: "ES-CANARY", weight: 0.40, season: null },

  // DE-HH (Hamburg) -> North/Baltic, Scandinavia, Austria, Mediterranean
  { sourceRegionId: "DE-HH", destinationId: "DE-NORTH-SEA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "DE-BALTIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "DK-JUTLAND", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-HH", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "IT-GARDASEE", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "DE-HH", destinationId: "ES-FUERTEVENTURA", weight: 0.35, season: null },

  // DE-SH (Schleswig-Holstein) -> Baltic, North Sea, Scandinavia
  { sourceRegionId: "DE-SH", destinationId: "DE-BALTIC", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "DE-NORTH-SEA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "DK-JUTLAND", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.42, season: "winter" },
  { sourceRegionId: "DE-SH", destinationId: "TR-ANTALYA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "ES-CANARY", weight: 0.38, season: null },

  // DE-BE (Berlin) -> Mediterranean, Austria, Baltic
  { sourceRegionId: "DE-BE", destinationId: "DE-BALTIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "GR-KOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-BE", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "HR-ISTRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "IT-GARDASEE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "BG-BLACK-SEA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "EG-HURGHADA", weight: 0.40, season: null },
  { sourceRegionId: "DE-BE", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "DE-BE", destinationId: "ES-CANARY", weight: 0.40, season: null },
  { sourceRegionId: "DE-BE", destinationId: "TN-DJERBA", weight: 0.32, season: "summer" },

  // DE-BB (Brandenburg) -> similar to Berlin
  { sourceRegionId: "DE-BB", destinationId: "DE-BALTIC", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "TR-ANTALYA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-BB", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "BG-BLACK-SEA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BB", destinationId: "EG-HURGHADA", weight: 0.35, season: null },

  // DE-MV (Mecklenburg-Vorpommern) -> Baltic, Mediterranean
  { sourceRegionId: "DE-MV", destinationId: "DE-BALTIC", weight: 0.62, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "GR-CRETE", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "BG-BLACK-SEA", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "EG-HURGHADA", weight: 0.32, season: null },

  // DE-SN (Sachsen) -> Austria/Mediterranean/Baltic, Czech neighbors
  { sourceRegionId: "DE-SN", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-SN", destinationId: "AT-SALZBURG-LAND", weight: 0.42, season: "winter" },
  { sourceRegionId: "DE-SN", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "HR-ISTRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "DE-BALTIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "BG-BLACK-SEA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-SN", destinationId: "EG-HURGHADA", weight: 0.35, season: null },
  { sourceRegionId: "DE-SN", destinationId: "HU-BALATON", weight: 0.30, season: "summer" },

  // DE-ST (Sachsen-Anhalt) -> similar to Sachsen
  { sourceRegionId: "DE-ST", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.42, season: "winter" },
  { sourceRegionId: "DE-ST", destinationId: "DE-BALTIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "BG-BLACK-SEA", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-ST", destinationId: "EG-HURGHADA", weight: 0.32, season: null },

  // DE-TH (Thüringen)
  { sourceRegionId: "DE-TH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-TH", destinationId: "AT-SALZBURG-LAND", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-TH", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "HR-ISTRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "TR-ANTALYA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-TH", destinationId: "EG-HURGHADA", weight: 0.32, season: null },

  // DE-RP (Rheinland-Pfalz) -> France, Austria, Mediterranean
  { sourceRegionId: "DE-RP", destinationId: "FR-COTE-AZUR", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "FR-ALPS", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-RP", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "DE-RP", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "HR-DALMATIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "FR-PROVENCE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-RP", destinationId: "ES-CANARY", weight: 0.38, season: null },

  // DE-SL (Saarland) -> France-oriented
  { sourceRegionId: "DE-SL", destinationId: "FR-COTE-AZUR", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "FR-ALPS", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-SL", destinationId: "FR-PROVENCE", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "FR-CORSICA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "FR-ATLANTIC", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.42, season: "winter" },
  { sourceRegionId: "DE-SL", destinationId: "IT-GARDASEE", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-SL", destinationId: "ES-COSTA-DEL-SOL", weight: 0.38, season: "summer" },

  // DE-HB (Bremen) -> North Sea, similar to NI
  { sourceRegionId: "DE-HB", destinationId: "DE-NORTH-SEA", weight: 0.58, season: "summer" },
  { sourceRegionId: "DE-HB", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-HB", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-HB", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-HB", destinationId: "GR-CRETE", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-HB", destinationId: "DK-JUTLAND", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-HB", destinationId: "ES-CANARY", weight: 0.38, season: null },

  // ========================================
  // AUSTRIAN SOURCE REGIONS -> DESTINATIONS
  // ========================================

  // AT-9 (Wien) -> Italian Adriatic, Croatia, Greece, domestic ski
  { sourceRegionId: "AT-9", destinationId: "IT-JESOLO", weight: 0.68, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-CAORLE", weight: 0.62, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-ADRIATIC", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-ISTRIA", weight: 0.62, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-DALMATIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-KVARNER", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-CORFU", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-ZAKYNTHOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-HALKIDIKI", weight: 0.35, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-GARDASEE", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.58, season: "winter" },
  { sourceRegionId: "AT-9", destinationId: "AT-SALZBURG-LAND", weight: 0.52, season: "winter" },
  { sourceRegionId: "AT-9", destinationId: "AT-SAALBACH", weight: 0.45, season: "winter" },
  { sourceRegionId: "AT-9", destinationId: "AT-KAERNTEN-LAKES", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "AT-SALZKAMMERGUT", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "ME-COAST", weight: 0.35, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "EG-HURGHADA", weight: 0.35, season: null },
  { sourceRegionId: "AT-9", destinationId: "IT-ROME", weight: 0.32, season: null },
  { sourceRegionId: "AT-9", destinationId: "ES-CANARY", weight: 0.32, season: null },
  { sourceRegionId: "AT-9", destinationId: "HU-BALATON", weight: 0.38, season: "summer" },

  // AT-3 (Niederösterreich) -> similar to Wien
  { sourceRegionId: "AT-3", destinationId: "IT-JESOLO", weight: 0.62, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "IT-CAORLE", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "HR-ISTRIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "IT-ADRIATIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "HR-DALMATIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "HR-KVARNER", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "AT-KAERNTEN-LAKES", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "AT-3", destinationId: "AT-SALZBURG-LAND", weight: 0.48, season: "winter" },
  { sourceRegionId: "AT-3", destinationId: "GR-CORFU", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "GR-CRETE", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "TR-ANTALYA", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "HU-BALATON", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-3", destinationId: "ME-COAST", weight: 0.32, season: "summer" },

  // AT-4 (Oberösterreich)
  { sourceRegionId: "AT-4", destinationId: "IT-JESOLO", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "IT-CAORLE", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "IT-GARDASEE", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "HR-ISTRIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "AT-4", destinationId: "AT-SALZBURG-LAND", weight: 0.52, season: "winter" },
  { sourceRegionId: "AT-4", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "GR-CORFU", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "TR-ANTALYA", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "IT-ADRIATIC", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "AT-KAERNTEN-LAKES", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "ES-MALLORCA", weight: 0.38, season: "summer" },

  // AT-5 (Salzburg)
  { sourceRegionId: "AT-5", destinationId: "IT-JESOLO", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "IT-CAORLE", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "IT-GARDASEE", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "HR-DALMATIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "GR-CORFU", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "IT-ADRIATIC", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "HR-ISTRIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "TR-ANTALYA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-5", destinationId: "ES-MALLORCA", weight: 0.38, season: "summer" },

  // AT-6 (Steiermark)
  { sourceRegionId: "AT-6", destinationId: "IT-JESOLO", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "IT-CAORLE", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "HR-ISTRIA", weight: 0.62, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "HR-DALMATIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "HR-KVARNER", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "IT-ADRIATIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "GR-CORFU", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "ME-COAST", weight: 0.35, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.45, season: "winter" },
  { sourceRegionId: "AT-6", destinationId: "TR-ANTALYA", weight: 0.38, season: "summer" },

  // AT-7 (Tirol) -> locals travel south
  { sourceRegionId: "AT-7", destinationId: "IT-GARDASEE", weight: 0.62, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "IT-TUSCANY", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "IT-LIGURIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "IT-SARDINIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "ES-MALLORCA", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "IT-ROME", weight: 0.32, season: null },

  // AT-8 (Vorarlberg)
  { sourceRegionId: "AT-8", destinationId: "IT-GARDASEE", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "IT-SARDINIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "FR-COTE-AZUR", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "IT-TUSCANY", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "IT-LIGURIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-8", destinationId: "ES-MALLORCA", weight: 0.38, season: "summer" },

  // AT-2 (Kärnten)
  { sourceRegionId: "AT-2", destinationId: "IT-JESOLO", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "IT-CAORLE", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "HR-ISTRIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "IT-ADRIATIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "GR-RHODES", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "GR-CORFU", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "ME-COAST", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "IT-GARDASEE", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "TR-ANTALYA", weight: 0.35, season: "summer" },

  // AT-1 (Burgenland)
  { sourceRegionId: "AT-1", destinationId: "IT-JESOLO", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "IT-CAORLE", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "HR-ISTRIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "HR-DALMATIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "IT-ADRIATIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "GR-CORFU", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "HU-BALATON", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "ME-COAST", weight: 0.32, season: "summer" },
  { sourceRegionId: "AT-1", destinationId: "TR-ANTALYA", weight: 0.35, season: "summer" },

  // ========================================
  // BELGIAN SOURCE REGION -> DESTINATIONS
  // Similar to Dutch but more France-oriented, also heavy Austria ski
  // ========================================
  // BE -> Winter ski
  { sourceRegionId: "BE", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.72, season: "winter" },
  { sourceRegionId: "BE", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.65, season: "winter" },
  { sourceRegionId: "BE", destinationId: "AT-TYROL-OETZTAL", weight: 0.55, season: "winter" },
  { sourceRegionId: "BE", destinationId: "AT-TYROL-STANTON", weight: 0.48, season: "winter" },
  { sourceRegionId: "BE", destinationId: "AT-SALZBURG-LAND", weight: 0.52, season: "winter" },
  { sourceRegionId: "BE", destinationId: "FR-ALPS", weight: 0.68, season: "winter" },
  { sourceRegionId: "BE", destinationId: "CH-VALAIS", weight: 0.52, season: "winter" },
  { sourceRegionId: "BE", destinationId: "CH-GRAUBUENDEN", weight: 0.42, season: "winter" },
  { sourceRegionId: "BE", destinationId: "IT-SUEDTIROL", weight: 0.40, season: "winter" },
  // BE -> Summer
  { sourceRegionId: "BE", destinationId: "FR-COTE-AZUR", weight: 0.72, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-LANGUEDOC", weight: 0.58, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-PROVENCE", weight: 0.55, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-ATLANTIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-CORSICA", weight: 0.45, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-BRITTANY", weight: 0.42, season: "summer" },
  { sourceRegionId: "BE", destinationId: "ES-COSTA-BRAVA", weight: 0.58, season: "summer" },
  { sourceRegionId: "BE", destinationId: "ES-COSTA-DEL-SOL", weight: 0.52, season: "summer" },
  { sourceRegionId: "BE", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "BE", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "BE", destinationId: "IT-TUSCANY", weight: 0.45, season: "summer" },
  { sourceRegionId: "BE", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "BE", destinationId: "GR-RHODES", weight: 0.40, season: "summer" },
  { sourceRegionId: "BE", destinationId: "TR-ANTALYA", weight: 0.50, season: "summer" },
  { sourceRegionId: "BE", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "BE", destinationId: "PT-ALGARVE", weight: 0.48, season: "summer" },
  { sourceRegionId: "BE", destinationId: "TN-DJERBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "BE", destinationId: "MA-MARRAKECH", weight: 0.45, season: null },
  { sourceRegionId: "BE", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "BE", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "BE", destinationId: "FR-PARIS", weight: 0.38, season: null },
  { sourceRegionId: "BE", destinationId: "IT-ROME", weight: 0.32, season: null },
  { sourceRegionId: "BE", destinationId: "EG-HURGHADA", weight: 0.38, season: null },
  { sourceRegionId: "BE", destinationId: "MT-MALTA", weight: 0.32, season: "summer" },
  { sourceRegionId: "BE", destinationId: "CY-COAST", weight: 0.30, season: "summer" },

  // ========================================
  // SWISS SOURCE REGIONS -> DESTINATIONS
  // ========================================

  // CH-ZH (Zürich) -> Italy, Spain, France, Greece
  { sourceRegionId: "CH-ZH", destinationId: "IT-GARDASEE", weight: 0.62, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-TUSCANY", weight: 0.55, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-LIGURIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-SARDINIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-COMO", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "FR-COTE-AZUR", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "FR-PROVENCE", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "ES-COSTA-BRAVA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "GR-SANTORINI", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "PT-ALGARVE", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "TR-ANTALYA", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "ES-CANARY", weight: 0.35, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "ES-BARCELONA", weight: 0.40, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "FR-PARIS", weight: 0.35, season: null },

  // CH-BE (Bern) -> similar to Zürich
  { sourceRegionId: "CH-BE", destinationId: "IT-GARDASEE", weight: 0.58, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "IT-TUSCANY", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "IT-LIGURIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "FR-COTE-AZUR", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "FR-PROVENCE", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "GR-CRETE", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "IT-SARDINIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "PT-ALGARVE", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-BE", destinationId: "ES-CANARY", weight: 0.35, season: null },

  // CH-VD (Vaud) -> more France-oriented (Francophone)
  { sourceRegionId: "CH-VD", destinationId: "FR-COTE-AZUR", weight: 0.62, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-PROVENCE", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-CORSICA", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-LANGUEDOC", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-ATLANTIC", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "ES-COSTA-BRAVA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "IT-SARDINIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "PT-ALGARVE", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "MA-MARRAKECH", weight: 0.38, season: null },
  { sourceRegionId: "CH-VD", destinationId: "TN-DJERBA", weight: 0.32, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-PARIS", weight: 0.38, season: null },

  // CH-TI (Ticino) -> already in "south", travel to beach/islands
  { sourceRegionId: "CH-TI", destinationId: "IT-SARDINIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "GR-CRETE", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "GR-SANTORINI", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "HR-DALMATIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "IT-SICILY", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "IT-AMALFI", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "FR-CORSICA", weight: 0.35, season: "summer" },

  // CH-BS (Basel) -> Germany-oriented, also France, Italy
  { sourceRegionId: "CH-BS", destinationId: "IT-GARDASEE", weight: 0.55, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "FR-COTE-AZUR", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "IT-TUSCANY", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "ES-COSTA-BRAVA", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "HR-DALMATIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "FR-PROVENCE", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "PT-ALGARVE", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-BS", destinationId: "ES-CANARY", weight: 0.35, season: null },

  // ========================================
  // FRENCH SOURCE REGIONS -> DESTINATIONS
  // France is the #1 tourist source in Europe (67M pop)
  // Strong Mediterranean orientation + Morocco/Tunisia
  // ========================================

  // FR-ZA (Zone A: Lyon, Bordeaux, Grenoble area)
  { sourceRegionId: "FR-ZA", destinationId: "ES-COSTA-BRAVA", weight: 0.62, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-COSTA-DEL-SOL", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-IBIZA", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-TUSCANY", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-SARDINIA", weight: 0.50, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-LIGURIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-SICILY", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "GR-CORFU", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "GR-SANTORINI", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "PT-ALGARVE", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "PT-LISBON", weight: 0.40, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "MA-MARRAKECH", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "MA-AGADIR", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "TN-DJERBA", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-CANARY", weight: 0.40, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "ES-BARCELONA", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "FR-CORSICA", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "MT-MALTA", weight: 0.32, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "CY-COAST", weight: 0.30, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "EG-HURGHADA", weight: 0.32, season: null },

  // FR-ZB (Zone B: Lille, Strasbourg, Nantes, Nice, Rennes)
  { sourceRegionId: "FR-ZB", destinationId: "ES-COSTA-BRAVA", weight: 0.58, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "ES-COSTA-DEL-SOL", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "IT-TUSCANY", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "IT-SARDINIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "IT-SICILY", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "GR-CRETE", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "GR-RHODES", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "GR-SANTORINI", weight: 0.35, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "PT-ALGARVE", weight: 0.50, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "PT-LISBON", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "MA-MARRAKECH", weight: 0.52, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "MA-AGADIR", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "TN-DJERBA", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "ES-BARCELONA", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "FR-CORSICA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.35, season: "winter" },
  { sourceRegionId: "FR-ZB", destinationId: "FR-ALPS", weight: 0.48, season: "winter" },
  { sourceRegionId: "FR-ZB", destinationId: "EG-HURGHADA", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "MT-MALTA", weight: 0.32, season: "summer" },

  // FR-ZC (Zone C: Paris, Toulouse, Montpellier)
  { sourceRegionId: "FR-ZC", destinationId: "ES-COSTA-BRAVA", weight: 0.58, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "ES-MALLORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "ES-COSTA-DEL-SOL", weight: 0.50, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "ES-IBIZA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IT-TUSCANY", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IT-SARDINIA", weight: 0.50, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IT-AMALFI", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IT-SICILY", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IT-ROME", weight: 0.45, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "GR-CRETE", weight: 0.50, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "GR-SANTORINI", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "GR-CORFU", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "PT-ALGARVE", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "PT-LISBON", weight: 0.45, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "PT-MADEIRA", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "MA-MARRAKECH", weight: 0.58, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "MA-AGADIR", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "TN-DJERBA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "HR-DALMATIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "TR-ANTALYA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "ES-CANARY", weight: 0.45, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "ES-BARCELONA", weight: 0.52, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "FR-CORSICA", weight: 0.55, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "FR-ALPS", weight: 0.52, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "CH-VALAIS", weight: 0.38, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "EG-HURGHADA", weight: 0.38, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "MT-MALTA", weight: 0.35, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "CY-COAST", weight: 0.32, season: "summer" },

  // ========================================
  // CZECH REPUBLIC -> DESTINATIONS
  // Croatia is #1 foreign destination for Czechs
  // ========================================
  { sourceRegionId: "CZ", destinationId: "HR-ISTRIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-DALMATIA", weight: 0.68, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-KVARNER", weight: 0.58, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-CORFU", weight: 0.42, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-RHODES", weight: 0.42, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-KOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-ZAKYNTHOS", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "IT-ADRIATIC", weight: 0.52, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "IT-JESOLO", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "IT-CAORLE", weight: 0.45, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "TR-BODRUM", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "ES-MALLORCA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "ES-CANARY", weight: 0.40, season: null },
  { sourceRegionId: "CZ", destinationId: "BG-BLACK-SEA", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "EG-HURGHADA", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "EG-SHARM", weight: 0.35, season: null },
  { sourceRegionId: "CZ", destinationId: "TN-DJERBA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "ME-COAST", weight: 0.38, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.45, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "AT-SALZBURG-LAND", weight: 0.40, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "IT-SUEDTIROL", weight: 0.38, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "HU-BALATON", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "CY-COAST", weight: 0.30, season: "summer" },

  // ========================================
  // POLAND -> DESTINATIONS
  // 38M population, huge travel volume
  // Croatia, Greece, Turkey, Spain, Egypt are top destinations
  // ========================================
  { sourceRegionId: "PL", destinationId: "HR-ISTRIA", weight: 0.65, season: "summer" },
  { sourceRegionId: "PL", destinationId: "HR-DALMATIA", weight: 0.62, season: "summer" },
  { sourceRegionId: "PL", destinationId: "HR-KVARNER", weight: 0.52, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-CORFU", weight: 0.45, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-RHODES", weight: 0.45, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-KOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-ZAKYNTHOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "PL", destinationId: "GR-HALKIDIKI", weight: 0.38, season: "summer" },
  { sourceRegionId: "PL", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "PL", destinationId: "TR-BODRUM", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL", destinationId: "TR-DALAMAN", weight: 0.38, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ES-COSTA-DEL-SOL", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ES-CANARY", weight: 0.42, season: null },
  { sourceRegionId: "PL", destinationId: "ES-TENERIFE", weight: 0.35, season: null },
  { sourceRegionId: "PL", destinationId: "BG-BLACK-SEA", weight: 0.52, season: "summer" },
  { sourceRegionId: "PL", destinationId: "EG-HURGHADA", weight: 0.52, season: null },
  { sourceRegionId: "PL", destinationId: "EG-SHARM", weight: 0.40, season: null },
  { sourceRegionId: "PL", destinationId: "TN-DJERBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL", destinationId: "IT-ADRIATIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "PL", destinationId: "IT-GARDASEE", weight: 0.38, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ME-COAST", weight: 0.40, season: "summer" },
  { sourceRegionId: "PL", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.38, season: "winter" },
  { sourceRegionId: "PL", destinationId: "IT-SUEDTIROL", weight: 0.32, season: "winter" },
  { sourceRegionId: "PL", destinationId: "CY-COAST", weight: 0.35, season: "summer" },
  { sourceRegionId: "PL", destinationId: "MT-MALTA", weight: 0.30, season: "summer" },
  { sourceRegionId: "PL", destinationId: "PT-ALGARVE", weight: 0.35, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ES-BARCELONA", weight: 0.35, season: null },

  // ========================================
  // LUXEMBOURG -> DESTINATIONS
  // Wealthy, high travel propensity, France/Mediterranean oriented
  // ========================================
  { sourceRegionId: "LU", destinationId: "FR-COTE-AZUR", weight: 0.62, season: "summer" },
  { sourceRegionId: "LU", destinationId: "FR-PROVENCE", weight: 0.48, season: "summer" },
  { sourceRegionId: "LU", destinationId: "FR-CORSICA", weight: 0.42, season: "summer" },
  { sourceRegionId: "LU", destinationId: "FR-ALPS", weight: 0.52, season: "winter" },
  { sourceRegionId: "LU", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "LU", destinationId: "CH-VALAIS", weight: 0.45, season: "winter" },
  { sourceRegionId: "LU", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "LU", destinationId: "ES-COSTA-DEL-SOL", weight: 0.45, season: "summer" },
  { sourceRegionId: "LU", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "LU", destinationId: "IT-TUSCANY", weight: 0.48, season: "summer" },
  { sourceRegionId: "LU", destinationId: "IT-SARDINIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "LU", destinationId: "IT-GARDASEE", weight: 0.45, season: "summer" },
  { sourceRegionId: "LU", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "LU", destinationId: "PT-ALGARVE", weight: 0.48, season: "summer" },
  { sourceRegionId: "LU", destinationId: "PT-LISBON", weight: 0.38, season: null },
  { sourceRegionId: "LU", destinationId: "MA-MARRAKECH", weight: 0.42, season: null },
  { sourceRegionId: "LU", destinationId: "TR-ANTALYA", weight: 0.38, season: "summer" },
  { sourceRegionId: "LU", destinationId: "ES-CANARY", weight: 0.40, season: null },
  { sourceRegionId: "LU", destinationId: "FR-PARIS", weight: 0.38, season: null },
  { sourceRegionId: "LU", destinationId: "IT-ROME", weight: 0.32, season: null },
  { sourceRegionId: "LU", destinationId: "EG-HURGHADA", weight: 0.32, season: null },

  // ========================================
  // NEW DESTINATIONS — INBOUND PATTERNS
  // ========================================

  // ----------------------------------------
  // DE-MUNICH (Munich) — major German city
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "DE-MUNICH", weight: 0.72, season: null },
  { sourceRegionId: "DE-BW", destinationId: "DE-MUNICH", weight: 0.60, season: null },
  { sourceRegionId: "AT-9", destinationId: "DE-MUNICH", weight: 0.65, season: null },
  { sourceRegionId: "AT-7", destinationId: "DE-MUNICH", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-MUNICH", weight: 0.45, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "DE-MUNICH", weight: 0.52, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-MUNICH", weight: 0.58, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-MUNICH", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "DE-MUNICH", weight: 0.45, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "DE-MUNICH", weight: 0.42, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "DE-MUNICH", weight: 0.40, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-MUNICH", weight: 0.38, season: null },

  // ----------------------------------------
  // DE-HAMBURG (Hamburg)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-HAMBURG", weight: 0.55, season: null },
  { sourceRegionId: "DE-NI", destinationId: "DE-HAMBURG", weight: 0.60, season: null },
  { sourceRegionId: "DE-BE", destinationId: "DE-HAMBURG", weight: 0.48, season: null },
  { sourceRegionId: "DK", destinationId: "DE-HAMBURG", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-HAMBURG", weight: 0.45, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "DE-HAMBURG", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DE-HAMBURG", weight: 0.48, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-HAMBURG", weight: 0.38, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "DE-HAMBURG", weight: 0.40, season: null },

  // ----------------------------------------
  // DE-BERLIN (Berlin) — major European city
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-BERLIN", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "PL", destinationId: "DE-BERLIN", weight: 0.65, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-BERLIN", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-BERLIN", weight: 0.50, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-BERLIN", weight: 0.58, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "DE-BERLIN", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DE-BERLIN", weight: 0.48, season: null },
  { sourceRegionId: "DK", destinationId: "DE-BERLIN", weight: 0.52, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-BERLIN", weight: 0.42, season: null },
  { sourceRegionId: "AT-9", destinationId: "DE-BERLIN", weight: 0.40, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "DE-BERLIN", weight: 0.35, season: null },

  // ----------------------------------------
  // DE-DRESDEN (Dresden)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "DE-DRESDEN", weight: 0.65, season: null },
  { sourceRegionId: "DE-BY", destinationId: "DE-DRESDEN", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-DRESDEN", weight: 0.60, season: null },
  { sourceRegionId: "PL", destinationId: "DE-DRESDEN", weight: 0.45, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-DRESDEN", weight: 0.38, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "DE-DRESDEN", weight: 0.35, season: null },
  { sourceRegionId: "AT-9", destinationId: "DE-DRESDEN", weight: 0.32, season: null },

  // ----------------------------------------
  // DE-COLOGNE (Cologne)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-COLOGNE", weight: 0.68, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-COLOGNE", weight: 0.60, season: null },
  { sourceRegionId: "BE", destinationId: "DE-COLOGNE", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-COLOGNE", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "DE-COLOGNE", weight: 0.42, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-COLOGNE", weight: 0.38, season: null },
  { sourceRegionId: "DE-RP", destinationId: "DE-COLOGNE", weight: 0.55, season: null },

  // ----------------------------------------
  // DE-SYLT (Sylt island)
  // ----------------------------------------
  { sourceRegionId: "DE-SH", destinationId: "DE-SYLT", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "DE-SYLT", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "DE-SYLT", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "DE-SYLT", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "DE-SYLT", weight: 0.40, season: "summer" },
  { sourceRegionId: "DK", destinationId: "DE-SYLT", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // DE-MOSEL (Mosel Valley)
  // ----------------------------------------
  { sourceRegionId: "DE-RP", destinationId: "DE-MOSEL", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "DE-MOSEL", weight: 0.52, season: "summer" },
  { sourceRegionId: "BE", destinationId: "DE-MOSEL", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-MOSEL", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "DE-MOSEL", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "DE-MOSEL", weight: 0.30, season: "summer" },

  // ----------------------------------------
  // DE-SAXON-SWITZERLAND (Saxon Switzerland)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.68, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.55, season: "summer" },
  { sourceRegionId: "PL", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // DE-BAVARIAN-LAKES (Bavarian Lakes)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "DE-BAVARIAN-LAKES", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "DE-BAVARIAN-LAKES", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "DE-BAVARIAN-LAKES", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "DE-BAVARIAN-LAKES", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "DE-BAVARIAN-LAKES", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "DE-BAVARIAN-LAKES", weight: 0.32, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "DE-BAVARIAN-LAKES", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // IT-NAPLES (Naples)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-NAPLES", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "IT-NAPLES", weight: 0.38, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-NAPLES", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-NAPLES", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "IT-NAPLES", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "IT-NAPLES", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-NAPLES", weight: 0.38, season: null },
  { sourceRegionId: "AT-9", destinationId: "IT-NAPLES", weight: 0.35, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-NAPLES", weight: 0.40, season: null },

  // ----------------------------------------
  // IT-FLORENCE (Florence)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-FLORENCE", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "IT-FLORENCE", weight: 0.50, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-FLORENCE", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-FLORENCE", weight: 0.58, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "IT-FLORENCE", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "IT-FLORENCE", weight: 0.75, season: null },
  { sourceRegionId: "US-W", destinationId: "IT-FLORENCE", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-FLORENCE", weight: 0.50, season: null },
  { sourceRegionId: "AT-9", destinationId: "IT-FLORENCE", weight: 0.42, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-FLORENCE", weight: 0.62, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "IT-FLORENCE", weight: 0.48, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "IT-FLORENCE", weight: 0.42, season: null },

  // ----------------------------------------
  // IT-MILAN (Milan)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-MILAN", weight: 0.55, season: null },
  { sourceRegionId: "DE-BW", destinationId: "IT-MILAN", weight: 0.52, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "IT-MILAN", weight: 0.60, season: null },
  { sourceRegionId: "CH-VD", destinationId: "IT-MILAN", weight: 0.52, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "IT-MILAN", weight: 0.60, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-MILAN", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "IT-MILAN", weight: 0.58, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-MILAN", weight: 0.45, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-MILAN", weight: 0.50, season: null },
  { sourceRegionId: "AE", destinationId: "IT-MILAN", weight: 0.42, season: null },
  { sourceRegionId: "AT-9", destinationId: "IT-MILAN", weight: 0.45, season: null },

  // ----------------------------------------
  // IT-ISCHIA (Ischia)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ISCHIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IT-ISCHIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-ISCHIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-ISCHIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-ISCHIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ISCHIA", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // IT-ELBA (Elba)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ELBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-ELBA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-ELBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-ELBA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ELBA", weight: 0.32, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-ELBA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // IT-CAPRI (Capri)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "IT-CAPRI", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "IT-CAPRI", weight: 0.60, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-CAPRI", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-CAPRI", weight: 0.45, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-CAPRI", weight: 0.48, season: "summer" },
  { sourceRegionId: "AE", destinationId: "IT-CAPRI", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-CAPRI", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // IT-DOLOMITES-SUMMER (Val Gardena Summer)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-7", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.38, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // IT-CINQUE-TERRE-TOWN (Manarola)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.65, season: null },
  { sourceRegionId: "US-W", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.52, season: null },
  { sourceRegionId: "DE-BW", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.50, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.55, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.42, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.40, season: null },

  // ----------------------------------------
  // ES-SEVILLE (Seville)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-SEVILLE", weight: 0.60, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ES-SEVILLE", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-SEVILLE", weight: 0.42, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-SEVILLE", weight: 0.38, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "ES-SEVILLE", weight: 0.52, season: null },
  { sourceRegionId: "US-NE", destinationId: "ES-SEVILLE", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-SEVILLE", weight: 0.38, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-SEVILLE", weight: 0.35, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "ES-SEVILLE", weight: 0.40, season: null },

  // ----------------------------------------
  // ES-GRANADA (Granada)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-GRANADA", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "ES-GRANADA", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-GRANADA", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "ES-GRANADA", weight: 0.48, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-GRANADA", weight: 0.35, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-GRANADA", weight: 0.32, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "ES-GRANADA", weight: 0.38, season: null },

  // ----------------------------------------
  // ES-BILBAO (Bilbao)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-BILBAO", weight: 0.50, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "ES-BILBAO", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "ES-BILBAO", weight: 0.45, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-BILBAO", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "ES-BILBAO", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-BILBAO", weight: 0.32, season: null },

  // ----------------------------------------
  // ES-SAN-SEBASTIAN (San Sebastián)
  // ----------------------------------------
  { sourceRegionId: "FR-ZB", destinationId: "ES-SAN-SEBASTIAN", weight: 0.62, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-SAN-SEBASTIAN", weight: 0.50, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-SAN-SEBASTIAN", weight: 0.48, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "ES-SAN-SEBASTIAN", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-SAN-SEBASTIAN", weight: 0.35, season: "summer" },
  { sourceRegionId: "BE", destinationId: "ES-SAN-SEBASTIAN", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // ES-MARBELLA (Marbella)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-MARBELLA", weight: 0.70, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-MARBELLA", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-MARBELLA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-MARBELLA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-MARBELLA", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-MARBELLA", weight: 0.40, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-MARBELLA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AE", destinationId: "ES-MARBELLA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // ES-PAMPLONA (Pamplona)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-PAMPLONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "ES-PAMPLONA", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "ES-PAMPLONA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-PAMPLONA", weight: 0.30, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "ES-PAMPLONA", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // ES-COSTA-DAURADA (Costa Daurada)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "ES-COSTA-DAURADA", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ES-COSTA-DAURADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-COSTA-DAURADA", weight: 0.48, season: "summer" },
  { sourceRegionId: "BE", destinationId: "ES-COSTA-DAURADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-COSTA-DAURADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-COSTA-DAURADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL", destinationId: "ES-COSTA-DAURADA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // ES-GRAN-CANARIA (Gran Canaria)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "ES-GRAN-CANARIA", weight: 0.65, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ES-GRAN-CANARIA", weight: 0.58, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-GRAN-CANARIA", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-GRAN-CANARIA", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.58, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.55, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.52, season: null },
  { sourceRegionId: "DK", destinationId: "ES-GRAN-CANARIA", weight: 0.50, season: null },
  { sourceRegionId: "BE", destinationId: "ES-GRAN-CANARIA", weight: 0.45, season: null },

  // ----------------------------------------
  // ES-LA-PALMA (La Palma)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "ES-LA-PALMA", weight: 0.40, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-LA-PALMA", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ES-LA-PALMA", weight: 0.38, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.38, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.35, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.32, season: null },

  // ----------------------------------------
  // FR-LYON (Lyon)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-LYON", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "FR-LYON", weight: 0.65, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "FR-LYON", weight: 0.48, season: null },
  { sourceRegionId: "CH-VD", destinationId: "FR-LYON", weight: 0.55, season: null },
  { sourceRegionId: "BE", destinationId: "FR-LYON", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-LYON", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-LYON", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "FR-LYON", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-BORDEAUX (Bordeaux)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-BORDEAUX", weight: 0.60, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "FR-BORDEAUX", weight: 0.65, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-BORDEAUX", weight: 0.62, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-BORDEAUX", weight: 0.50, season: null },
  { sourceRegionId: "BE", destinationId: "FR-BORDEAUX", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-BORDEAUX", weight: 0.42, season: null },
  { sourceRegionId: "US-NE", destinationId: "FR-BORDEAUX", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "FR-BORDEAUX", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-MARSEILLE (Marseille)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-MARSEILLE", weight: 0.58, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "FR-MARSEILLE", weight: 0.72, season: null },
  { sourceRegionId: "BE", destinationId: "FR-MARSEILLE", weight: 0.45, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-MARSEILLE", weight: 0.48, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "FR-MARSEILLE", weight: 0.42, season: null },
  { sourceRegionId: "CH-VD", destinationId: "FR-MARSEILLE", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-MARSEILLE", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-STRASBOURG (Strasbourg)
  // ----------------------------------------
  { sourceRegionId: "FR-ZB", destinationId: "FR-STRASBOURG", weight: 0.75, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "FR-STRASBOURG", weight: 0.52, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-STRASBOURG", weight: 0.68, season: null },
  { sourceRegionId: "DE-RP", destinationId: "FR-STRASBOURG", weight: 0.55, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "FR-STRASBOURG", weight: 0.58, season: null },
  { sourceRegionId: "BE", destinationId: "FR-STRASBOURG", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-STRASBOURG", weight: 0.38, season: null },

  // ----------------------------------------
  // FR-CHAMONIX (Chamonix) — ski
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-CHAMONIX", weight: 0.65, season: "winter" },
  { sourceRegionId: "FR-ZA", destinationId: "FR-CHAMONIX", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-CHAMONIX", weight: 0.68, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-CHAMONIX", weight: 0.55, season: "winter" },
  { sourceRegionId: "BE", destinationId: "FR-CHAMONIX", weight: 0.52, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-CHAMONIX", weight: 0.48, season: "winter" },
  { sourceRegionId: "CH-ZH", destinationId: "FR-CHAMONIX", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "FR-CHAMONIX", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-NSW", destinationId: "FR-CHAMONIX", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // FR-DORDOGNE (Dordogne)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "FR-DORDOGNE", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-DORDOGNE", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "FR-DORDOGNE", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "FR-DORDOGNE", weight: 0.60, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-DORDOGNE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "FR-DORDOGNE", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // FR-ANNECY (Lake Annecy)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-ANNECY", weight: 0.62, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "FR-ANNECY", weight: 0.70, season: "summer" },
  { sourceRegionId: "CH-VD", destinationId: "FR-ANNECY", weight: 0.60, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "FR-ANNECY", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-ANNECY", weight: 0.45, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-ANNECY", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "FR-ANNECY", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // FR-CAMARGUE (Camargue)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-CAMARGUE", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "FR-CAMARGUE", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-CAMARGUE", weight: 0.32, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-CAMARGUE", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "FR-CAMARGUE", weight: 0.28, season: "summer" },

  // ----------------------------------------
  // AT-VIENNA (Vienna)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-VIENNA", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "AT-VIENNA", weight: 0.50, season: null },
  { sourceRegionId: "CZ", destinationId: "AT-VIENNA", weight: 0.65, season: null },
  { sourceRegionId: "HU", destinationId: "AT-VIENNA", weight: 0.70, season: null },
  { sourceRegionId: "SK", destinationId: "AT-VIENNA", weight: 0.68, season: null },
  { sourceRegionId: "PL", destinationId: "AT-VIENNA", weight: 0.48, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AT-VIENNA", weight: 0.60, season: null },
  { sourceRegionId: "US-NE", destinationId: "AT-VIENNA", weight: 0.58, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "AT-VIENNA", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-VIENNA", weight: 0.45, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "AT-VIENNA", weight: 0.42, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "AT-VIENNA", weight: 0.50, season: null },

  // ----------------------------------------
  // AT-SALZBURG (Salzburg)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-SALZBURG", weight: 0.70, season: null },
  { sourceRegionId: "DE-BW", destinationId: "AT-SALZBURG", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "AT-SALZBURG", weight: 0.48, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AT-SALZBURG", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "AT-SALZBURG", weight: 0.52, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "AT-SALZBURG", weight: 0.58, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-SALZBURG", weight: 0.42, season: null },
  { sourceRegionId: "CZ", destinationId: "AT-SALZBURG", weight: 0.40, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "AT-SALZBURG", weight: 0.45, season: null },

  // ----------------------------------------
  // AT-WACHAU (Wachau)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-WACHAU", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "AT-WACHAU", weight: 0.65, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "AT-WACHAU", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-WACHAU", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "AT-WACHAU", weight: 0.38, season: "summer" },
  { sourceRegionId: "HU", destinationId: "AT-WACHAU", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // AT-HALLSTATT (Hallstatt)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-HALLSTATT", weight: 0.62, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "AT-HALLSTATT", weight: 0.75, season: null },
  { sourceRegionId: "KR", destinationId: "AT-HALLSTATT", weight: 0.70, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AT-HALLSTATT", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "AT-HALLSTATT", weight: 0.52, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "AT-HALLSTATT", weight: 0.48, season: null },
  { sourceRegionId: "AT-4", destinationId: "AT-HALLSTATT", weight: 0.58, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "AT-HALLSTATT", weight: 0.45, season: null },

  // ----------------------------------------
  // CH-ZURICH (Zurich)
  // ----------------------------------------
  { sourceRegionId: "DE-BW", destinationId: "CH-ZURICH", weight: 0.58, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-ZURICH", weight: 0.52, season: null },
  { sourceRegionId: "AT-9", destinationId: "CH-ZURICH", weight: 0.48, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CH-ZURICH", weight: 0.60, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "CH-ZURICH", weight: 0.52, season: null },
  { sourceRegionId: "US-NE", destinationId: "CH-ZURICH", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "CH-ZURICH", weight: 0.48, season: null },
  { sourceRegionId: "AE", destinationId: "CH-ZURICH", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-ZURICH", weight: 0.42, season: null },

  // ----------------------------------------
  // CH-GENEVA (Geneva)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "CH-GENEVA", weight: 0.62, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "CH-GENEVA", weight: 0.58, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CH-GENEVA", weight: 0.58, season: null },
  { sourceRegionId: "BE", destinationId: "CH-GENEVA", weight: 0.52, season: null },
  { sourceRegionId: "US-NE", destinationId: "CH-GENEVA", weight: 0.52, season: null },
  { sourceRegionId: "AE", destinationId: "CH-GENEVA", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "CH-GENEVA", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-GENEVA", weight: 0.38, season: null },

  // ----------------------------------------
  // CH-LUCERNE (Lucerne)
  // ----------------------------------------
  { sourceRegionId: "JP-KANTO", destinationId: "CH-LUCERNE", weight: 0.70, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CH-LUCERNE", weight: 0.65, season: null },
  { sourceRegionId: "KR", destinationId: "CH-LUCERNE", weight: 0.58, season: null },
  { sourceRegionId: "US-NE", destinationId: "CH-LUCERNE", weight: 0.60, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CH-LUCERNE", weight: 0.55, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-LUCERNE", weight: 0.50, season: null },
  { sourceRegionId: "DE-BW", destinationId: "CH-LUCERNE", weight: 0.48, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-LUCERNE", weight: 0.42, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "CH-LUCERNE", weight: 0.45, season: null },

  // ----------------------------------------
  // CH-INTERLAKEN (Interlaken)
  // ----------------------------------------
  { sourceRegionId: "JP-KANTO", destinationId: "CH-INTERLAKEN", weight: 0.72, season: null },
  { sourceRegionId: "KR", destinationId: "CH-INTERLAKEN", weight: 0.65, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "CH-INTERLAKEN", weight: 0.60, season: null },
  { sourceRegionId: "US-NE", destinationId: "CH-INTERLAKEN", weight: 0.58, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CH-INTERLAKEN", weight: 0.55, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-INTERLAKEN", weight: 0.50, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "CH-INTERLAKEN", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CH-INTERLAKEN", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-INTERLAKEN", weight: 0.40, season: null },

  // ----------------------------------------
  // CH-TICINO (Ticino)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CH-TICINO", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "CH-TICINO", weight: 0.50, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "CH-TICINO", weight: 0.65, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "CH-TICINO", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-TICINO", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "CH-TICINO", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // PT-PORTO (Porto)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "PT-PORTO", weight: 0.68, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PT-PORTO", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "PT-PORTO", weight: 0.60, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "PT-PORTO", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-PORTO", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-PORTO", weight: 0.50, season: null },
  { sourceRegionId: "US-NE", destinationId: "PT-PORTO", weight: 0.55, season: null },
  { sourceRegionId: "BE", destinationId: "PT-PORTO", weight: 0.42, season: null },
  { sourceRegionId: "IE", destinationId: "PT-PORTO", weight: 0.48, season: null },

  // ----------------------------------------
  // PT-SINTRA (Sintra)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "PT-SINTRA", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "PT-SINTRA", weight: 0.52, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "PT-SINTRA", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-SINTRA", weight: 0.38, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "PT-SINTRA", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-SINTRA", weight: 0.38, season: null },

  // ----------------------------------------
  // BE-BRUGES (Bruges)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "BE-BRUGES", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "BE-BRUGES", weight: 0.60, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "BE-BRUGES", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-BRUGES", weight: 0.65, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-BRUGES", weight: 0.58, season: null },
  { sourceRegionId: "US-NE", destinationId: "BE-BRUGES", weight: 0.55, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "BE-BRUGES", weight: 0.50, season: null },
  { sourceRegionId: "IE", destinationId: "BE-BRUGES", weight: 0.48, season: null },

  // ----------------------------------------
  // BE-BRUSSELS (Brussels)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "BE-BRUSSELS", weight: 0.65, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "BE-BRUSSELS", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-BRUSSELS", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-BRUSSELS", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "BE-BRUSSELS", weight: 0.52, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "BE-BRUSSELS", weight: 0.42, season: null },
  { sourceRegionId: "LU", destinationId: "BE-BRUSSELS", weight: 0.55, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "BE-BRUSSELS", weight: 0.38, season: null },

  // ----------------------------------------
  // BE-GHENT (Ghent)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "BE-GHENT", weight: 0.52, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "BE-GHENT", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-GHENT", weight: 0.60, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-GHENT", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "BE-GHENT", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "BE-GHENT", weight: 0.35, season: null },

  // ----------------------------------------
  // NL-AMSTERDAM (Amsterdam)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "NL-AMSTERDAM", weight: 0.82, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NL-AMSTERDAM", weight: 0.70, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "NL-AMSTERDAM", weight: 0.68, season: null },
  { sourceRegionId: "DE-NW", destinationId: "NL-AMSTERDAM", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "NL-AMSTERDAM", weight: 0.75, season: null },
  { sourceRegionId: "US-W", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "NL-AMSTERDAM", weight: 0.58, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "NL-AMSTERDAM", weight: 0.55, season: null },
  { sourceRegionId: "DK", destinationId: "NL-AMSTERDAM", weight: 0.55, season: null },
  { sourceRegionId: "BE", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "AU-NSW", destinationId: "NL-AMSTERDAM", weight: 0.50, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "NL-AMSTERDAM", weight: 0.58, season: null },

  // ----------------------------------------
  // NL-UTRECHT (Utrecht)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "NL-UTRECHT", weight: 0.40, season: null },
  { sourceRegionId: "DE-NW", destinationId: "NL-UTRECHT", weight: 0.45, season: null },
  { sourceRegionId: "BE", destinationId: "NL-UTRECHT", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "NL-UTRECHT", weight: 0.35, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "NL-UTRECHT", weight: 0.50, season: null },

  // ----------------------------------------
  // NL-WADDEN (Wadden Islands)
  // ----------------------------------------
  { sourceRegionId: "NL-NORTH", destinationId: "NL-WADDEN", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "NL-WADDEN", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NL-WADDEN", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "NL-WADDEN", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NL-WADDEN", weight: 0.28, season: "summer" },

  // ----------------------------------------
  // PL-KRAKOW (Krakow)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "PL-KRAKOW", weight: 0.48, season: null },
  { sourceRegionId: "DE-BE", destinationId: "PL-KRAKOW", weight: 0.45, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PL-KRAKOW", weight: 0.65, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PL-KRAKOW", weight: 0.52, season: null },
  { sourceRegionId: "IE", destinationId: "PL-KRAKOW", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "PL-KRAKOW", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PL-KRAKOW", weight: 0.42, season: null },
  { sourceRegionId: "CZ", destinationId: "PL-KRAKOW", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "PL-KRAKOW", weight: 0.55, season: null },
  { sourceRegionId: "AT-9", destinationId: "PL-KRAKOW", weight: 0.38, season: null },

  // ----------------------------------------
  // PL-WARSAW (Warsaw)
  // ----------------------------------------
  { sourceRegionId: "DE-BE", destinationId: "PL-WARSAW", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PL-WARSAW", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PL-WARSAW", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "PL-WARSAW", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PL-WARSAW", weight: 0.38, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "PL-WARSAW", weight: 0.42, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "PL-WARSAW", weight: 0.38, season: null },
  { sourceRegionId: "UA", destinationId: "PL-WARSAW", weight: 0.55, season: null },

  // ----------------------------------------
  // PL-GDANSK (Gdańsk)
  // ----------------------------------------
  { sourceRegionId: "DE-BE", destinationId: "PL-GDANSK", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "PL-GDANSK", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "PL-GDANSK", weight: 0.45, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "PL-GDANSK", weight: 0.52, season: "summer" },
  { sourceRegionId: "DK", destinationId: "PL-GDANSK", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "PL-GDANSK", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // PL-ZAKOPANE (Zakopane) — ski
  // ----------------------------------------
  { sourceRegionId: "PL", destinationId: "PL-ZAKOPANE", weight: 0.75, season: "winter" },
  { sourceRegionId: "PL", destinationId: "PL-ZAKOPANE", weight: 0.65, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "PL-ZAKOPANE", weight: 0.52, season: "winter" },
  { sourceRegionId: "SK", destinationId: "PL-ZAKOPANE", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-SN", destinationId: "PL-ZAKOPANE", weight: 0.35, season: "winter" },
  { sourceRegionId: "HU", destinationId: "PL-ZAKOPANE", weight: 0.32, season: "winter" },

  // ----------------------------------------
  // PL-WROCLAW (Wrocław)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "PL-WROCLAW", weight: 0.60, season: null },
  { sourceRegionId: "DE-BE", destinationId: "PL-WROCLAW", weight: 0.48, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PL-WROCLAW", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "PL-WROCLAW", weight: 0.52, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "PL-WROCLAW", weight: 0.35, season: null },
  { sourceRegionId: "AT-9", destinationId: "PL-WROCLAW", weight: 0.32, season: null },

  // ----------------------------------------
  // CZ-PRAGUE (Prague)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "CZ-PRAGUE", weight: 0.75, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CZ-PRAGUE", weight: 0.68, season: null },
  { sourceRegionId: "AT-9", destinationId: "CZ-PRAGUE", weight: 0.65, season: null },
  { sourceRegionId: "PL", destinationId: "CZ-PRAGUE", weight: 0.62, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CZ-PRAGUE", weight: 0.78, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CZ-PRAGUE", weight: 0.62, season: null },
  { sourceRegionId: "US-NE", destinationId: "CZ-PRAGUE", weight: 0.70, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CZ-PRAGUE", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "CZ-PRAGUE", weight: 0.58, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "CZ-PRAGUE", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "CZ-PRAGUE", weight: 0.60, season: null },
  { sourceRegionId: "HU", destinationId: "CZ-PRAGUE", weight: 0.55, season: null },
  { sourceRegionId: "IE", destinationId: "CZ-PRAGUE", weight: 0.60, season: null },

  // ----------------------------------------
  // CZ-CESKY-KRUMLOV (Český Krumlov)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-4", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.52, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.60, season: "summer" },
  { sourceRegionId: "KR", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.52, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.45, season: "summer" },

  // ----------------------------------------
  // CZ-KARLOVY-VARY (Karlovy Vary)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CZ-KARLOVY-VARY", weight: 0.48, season: null },
  { sourceRegionId: "DE-SN", destinationId: "CZ-KARLOVY-VARY", weight: 0.52, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "CZ-KARLOVY-VARY", weight: 0.65, season: null },
  { sourceRegionId: "RU-SPE", destinationId: "CZ-KARLOVY-VARY", weight: 0.55, season: null },
  { sourceRegionId: "AT-9", destinationId: "CZ-KARLOVY-VARY", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "CZ-KARLOVY-VARY", weight: 0.35, season: null },

  // ----------------------------------------
  // DK-COPENHAGEN (Copenhagen)
  // ----------------------------------------
  { sourceRegionId: "DE-HH", destinationId: "DK-COPENHAGEN", weight: 0.65, season: null },
  { sourceRegionId: "DE-SH", destinationId: "DK-COPENHAGEN", weight: 0.58, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DK-COPENHAGEN", weight: 0.50, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.70, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DK-COPENHAGEN", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "DK-COPENHAGEN", weight: 0.58, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "DK-COPENHAGEN", weight: 0.48, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "DK-COPENHAGEN", weight: 0.45, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.55, season: null },

  // ----------------------------------------
  // HR-SPLIT (Split)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "HR-SPLIT", weight: 0.48, season: null },
  { sourceRegionId: "AT-9", destinationId: "HR-SPLIT", weight: 0.52, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "HR-SPLIT", weight: 0.62, season: null },
  { sourceRegionId: "US-NE", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "CZ", destinationId: "HR-SPLIT", weight: 0.58, season: null },
  { sourceRegionId: "PL", destinationId: "HR-SPLIT", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "HR-SPLIT", weight: 0.50, season: null },
  { sourceRegionId: "HU", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "SI", destinationId: "HR-SPLIT", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "HR-SPLIT", weight: 0.42, season: null },

  // ----------------------------------------
  // HR-HVAR (Hvar)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "HR-HVAR", weight: 0.58, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "HR-HVAR", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-HVAR", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-HVAR", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-HVAR", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "HR-HVAR", weight: 0.40, season: "summer" },
  { sourceRegionId: "AE", destinationId: "HR-HVAR", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-NAXOS (Naxos)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "GR-NAXOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-NAXOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-NAXOS", weight: 0.50, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-NAXOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "GR-NAXOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "GR-NAXOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-NAXOS", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-PAROS (Paros)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "GR-PAROS", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-PAROS", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "GR-PAROS", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-PAROS", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "GR-PAROS", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-PAROS", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "GR-PAROS", weight: 0.42, season: "summer" },

  // ----------------------------------------
  // GR-MILOS (Milos)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "GR-MILOS", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "GR-MILOS", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "GR-MILOS", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-MILOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-MILOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "AU-NSW", destinationId: "GR-MILOS", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // GR-LEFKADA (Lefkada)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "GR-LEFKADA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-LEFKADA", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-LEFKADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-LEFKADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-LEFKADA", weight: 0.38, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-LEFKADA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-CEPHALONIA (Cephalonia)
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "GR-CEPHALONIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-CEPHALONIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-CEPHALONIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-CEPHALONIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-CEPHALONIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GR-CEPHALONIA", weight: 0.42, season: "summer" },

  // ----------------------------------------
  // HU-THERMAL (Thermal Baths — Hévíz)
  // ----------------------------------------
  { sourceRegionId: "AT-9", destinationId: "HU-THERMAL", weight: 0.52, season: null },
  { sourceRegionId: "DE-BY", destinationId: "HU-THERMAL", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "HU-THERMAL", weight: 0.48, season: null },
  { sourceRegionId: "SK", destinationId: "HU-THERMAL", weight: 0.55, season: null },
  { sourceRegionId: "RO", destinationId: "HU-THERMAL", weight: 0.42, season: null },
  { sourceRegionId: "PL", destinationId: "HU-THERMAL", weight: 0.35, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "HU-THERMAL", weight: 0.30, season: null },

  // ----------------------------------------
  // LU-LUXEMBOURG (Luxembourg City)
  // ----------------------------------------
  { sourceRegionId: "BE", destinationId: "LU-LUXEMBOURG", weight: 0.55, season: null },
  { sourceRegionId: "BE", destinationId: "LU-LUXEMBOURG", weight: 0.60, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "LU-LUXEMBOURG", weight: 0.58, season: null },
  { sourceRegionId: "DE-RP", destinationId: "LU-LUXEMBOURG", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "LU-LUXEMBOURG", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "LU-LUXEMBOURG", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "LU-LUXEMBOURG", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "LU-LUXEMBOURG", weight: 0.30, season: null },

  // ----------------------------------------
  // TR-ALACATI (Alaçatı)
  // ----------------------------------------
  { sourceRegionId: "TR-WEST", destinationId: "TR-ALACATI", weight: 0.70, season: "summer" },
  { sourceRegionId: "TR-EAST", destinationId: "TR-ALACATI", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "TR-ALACATI", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "TR-ALACATI", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "TR-ALACATI", weight: 0.35, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "TR-ALACATI", weight: 0.40, season: "summer" },
  { sourceRegionId: "UA", destinationId: "TR-ALACATI", weight: 0.35, season: "summer" },

  // ========================================
  // NEW DESTINATIONS — ADDED 2024
  // ========================================

  // ----------------------------------------
  // SI-PORTOROZ (Slovenian Riviera)
  // ----------------------------------------
  { sourceRegionId: "SI", destinationId: "SI-PORTOROZ", weight: 0.80, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "SI-PORTOROZ", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "SI-PORTOROZ", weight: 0.42, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "SI-PORTOROZ", weight: 0.48, season: "summer" },
  { sourceRegionId: "HU", destinationId: "SI-PORTOROZ", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // DE-HEIDELBERG
  // ----------------------------------------
  { sourceRegionId: "DE-BW", destinationId: "DE-HEIDELBERG", weight: 0.75, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DE-HEIDELBERG", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "DE-HEIDELBERG", weight: 0.38, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-HEIDELBERG", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-HEIDELBERG", weight: 0.28, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-HEIDELBERG", weight: 0.22, season: null },

  // ----------------------------------------
  // DE-ROTHENBURG (ob der Tauber)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "DE-ROTHENBURG", weight: 0.72, season: null },
  { sourceRegionId: "DE-BW", destinationId: "DE-ROTHENBURG", weight: 0.60, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "DE-ROTHENBURG", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "DE-ROTHENBURG", weight: 0.30, season: null },
  { sourceRegionId: "JP-KANTO", destinationId: "DE-ROTHENBURG", weight: 0.28, season: null },

  // ----------------------------------------
  // IT-ORTISEI (South Tyrol / Dolomites)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ORTISEI", weight: 0.75, season: "winter" },
  { sourceRegionId: "AT-7", destinationId: "IT-ORTISEI", weight: 0.65, season: "winter" },
  { sourceRegionId: "AT-9", destinationId: "IT-ORTISEI", weight: 0.55, season: "winter" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-ORTISEI", weight: 0.48, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ORTISEI", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "IT-ORTISEI", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // IT-PORTOFINO
  // ----------------------------------------
  { sourceRegionId: "IT-NORTH", destinationId: "IT-PORTOFINO", weight: 0.70, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-PORTOFINO", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-PORTOFINO", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-PORTOFINO", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-PORTOFINO", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // FR-MONT-BLANC (Chamonix region)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-MONT-BLANC", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-MONT-BLANC", weight: 0.60, season: "winter" },
  { sourceRegionId: "CH-ZH", destinationId: "FR-MONT-BLANC", weight: 0.55, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "FR-MONT-BLANC", weight: 0.48, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-MONT-BLANC", weight: 0.42, season: "winter" },
  { sourceRegionId: "BE", destinationId: "FR-MONT-BLANC", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // FR-COLMAR (Alsace)
  // ----------------------------------------
  { sourceRegionId: "FR-ZA", destinationId: "FR-COLMAR", weight: 0.68, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-COLMAR", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "FR-COLMAR", weight: 0.45, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "FR-COLMAR", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-COLMAR", weight: 0.38, season: null },
  { sourceRegionId: "BE", destinationId: "FR-COLMAR", weight: 0.35, season: null },

  // ----------------------------------------
  // ES-FORMENTERA
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "ES-FORMENTERA", weight: 0.60, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "ES-FORMENTERA", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-FORMENTERA", weight: 0.52, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-FORMENTERA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "ES-FORMENTERA", weight: 0.45, season: "summer" },

  // ----------------------------------------
  // PT-ALENTEJO
  // ----------------------------------------
  { sourceRegionId: "GB-ENG", destinationId: "PT-ALENTEJO", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "PT-ALENTEJO", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-ALENTEJO", weight: 0.35, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-ALENTEJO", weight: 0.32, season: null },
  { sourceRegionId: "DE-BY", destinationId: "PT-ALENTEJO", weight: 0.28, season: null },

  // ----------------------------------------
  // AT-LECH (Lech am Arlberg)
  // ----------------------------------------
  { sourceRegionId: "AT-9", destinationId: "AT-LECH", weight: 0.70, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-LECH", weight: 0.65, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AT-LECH", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-LECH", weight: 0.48, season: "winter" },
  { sourceRegionId: "CH-ZH", destinationId: "AT-LECH", weight: 0.42, season: "winter" },
  { sourceRegionId: "BE", destinationId: "AT-LECH", weight: 0.35, season: "winter" },

  // ----------------------------------------
  // GR-IKARIA
  // ----------------------------------------
  { sourceRegionId: "BG", destinationId: "GR-IKARIA", weight: 0.75, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-IKARIA", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-IKARIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "GR-IKARIA", weight: 0.25, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-IKARIA", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // HR-VIS
  // ----------------------------------------
  { sourceRegionId: "HR", destinationId: "HR-VIS", weight: 0.78, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-VIS", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-VIS", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "HR-VIS", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-VIS", weight: 0.38, season: "summer" },
  { sourceRegionId: "PL", destinationId: "HR-VIS", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // NL-GIETHOORN
  // ----------------------------------------
  { sourceRegionId: "NL-NORTH", destinationId: "NL-GIETHOORN", weight: 0.82, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "NL-GIETHOORN", weight: 0.78, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "NL-GIETHOORN", weight: 0.55, season: "summer" },
  { sourceRegionId: "BE", destinationId: "NL-GIETHOORN", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "NL-GIETHOORN", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // PL-MASURIA (Masurian Lakes)
  // ----------------------------------------
  { sourceRegionId: "PL", destinationId: "PL-MASURIA", weight: 0.82, season: "summer" },
  { sourceRegionId: "PL", destinationId: "PL-MASURIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "PL-MASURIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "PL-MASURIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "PL-MASURIA", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // CZ-BRNO
  // ----------------------------------------
  { sourceRegionId: "CZ", destinationId: "CZ-BRNO", weight: 0.85, season: null },
  { sourceRegionId: "SK", destinationId: "CZ-BRNO", weight: 0.60, season: null },
  { sourceRegionId: "AT-9", destinationId: "CZ-BRNO", weight: 0.48, season: null },
  { sourceRegionId: "HU", destinationId: "CZ-BRNO", weight: 0.38, season: null },
  { sourceRegionId: "PL", destinationId: "CZ-BRNO", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CZ-BRNO", weight: 0.30, season: null },

  // ========================================
  // IT-MAGGIORE (Lake Maggiore) — INBOUND
  // ========================================
  { sourceRegionId: "IT-NORTH", destinationId: "IT-MAGGIORE", weight: 0.72, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "IT-MAGGIORE", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-MAGGIORE", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-MAGGIORE", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-MAGGIORE", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-MAGGIORE", weight: 0.28, season: "summer" },

  // ========================================
  // FR-LOIRE (Loire Valley) — INBOUND
  // ========================================
  { sourceRegionId: "FR-ZA", destinationId: "FR-LOIRE", weight: 0.70, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "FR-LOIRE", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-LOIRE", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "FR-LOIRE", weight: 0.35, season: "summer" },
  { sourceRegionId: "BE", destinationId: "FR-LOIRE", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "FR-LOIRE", weight: 0.25, season: "summer" },

  // ========================================
  // DE-ALLGAEU (Allgäu) — INBOUND
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "DE-ALLGAEU", weight: 0.78, season: null },
  { sourceRegionId: "DE-BW", destinationId: "DE-ALLGAEU", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DE-ALLGAEU", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-ALLGAEU", weight: 0.35, season: "winter" },
  { sourceRegionId: "AT-7", destinationId: "DE-ALLGAEU", weight: 0.30, season: null },

  // ========================================
  // CH-BERNESE-OBERLAND — INBOUND
  // ========================================
  { sourceRegionId: "CH-BE", destinationId: "CH-BERNESE-OBERLAND", weight: 0.80, season: null },
  { sourceRegionId: "CH-ZH", destinationId: "CH-BERNESE-OBERLAND", weight: 0.65, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-BERNESE-OBERLAND", weight: 0.48, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "CH-BERNESE-OBERLAND", weight: 0.45, season: "summer" },
  { sourceRegionId: "JP-KANTO", destinationId: "CH-BERNESE-OBERLAND", weight: 0.35, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "CH-BERNESE-OBERLAND", weight: 0.30, season: "summer" },

  // ========================================
  // DE-NUREMBERG — INBOUND
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "DE-NUREMBERG", weight: 0.80, season: null },
  { sourceRegionId: "DE-BW", destinationId: "DE-NUREMBERG", weight: 0.55, season: null },
  { sourceRegionId: "DE-HE", destinationId: "DE-NUREMBERG", weight: 0.48, season: null },
  { sourceRegionId: "DE-SN", destinationId: "DE-NUREMBERG", weight: 0.42, season: null },
  { sourceRegionId: "AT-4", destinationId: "DE-NUREMBERG", weight: 0.35, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-NUREMBERG", weight: 0.32, season: null },

  // ========================================
  // IT-RAVENNA — INBOUND
  // ========================================
  { sourceRegionId: "IT-NORTH", destinationId: "IT-RAVENNA", weight: 0.72, season: null },
  { sourceRegionId: "DE-BY", destinationId: "IT-RAVENNA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-RAVENNA", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-RAVENNA", weight: 0.30, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "IT-RAVENNA", weight: 0.25, season: null },
];
