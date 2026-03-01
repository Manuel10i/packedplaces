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
  { sourceRegionId: "AT-W", destinationId: "DE-MUNICH", weight: 0.65, season: null },
  { sourceRegionId: "AT-T", destinationId: "DE-MUNICH", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-MUNICH", weight: 0.45, season: null },
  { sourceRegionId: "CH-DE", destinationId: "DE-MUNICH", weight: 0.52, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-MUNICH", weight: 0.58, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-MUNICH", weight: 0.55, season: null },
  { sourceRegionId: "JP", destinationId: "DE-MUNICH", weight: 0.45, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "DE-MUNICH", weight: 0.42, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "DE-MUNICH", weight: 0.40, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-MUNICH", weight: 0.38, season: null },

  // ----------------------------------------
  // DE-HAMBURG (Hamburg)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-HAMBURG", weight: 0.55, season: null },
  { sourceRegionId: "DE-NI", destinationId: "DE-HAMBURG", weight: 0.60, season: null },
  { sourceRegionId: "DE-BE", destinationId: "DE-HAMBURG", weight: 0.48, season: null },
  { sourceRegionId: "DK", destinationId: "DE-HAMBURG", weight: 0.55, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-HAMBURG", weight: 0.45, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "DE-HAMBURG", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DE-HAMBURG", weight: 0.48, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-HAMBURG", weight: 0.38, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "DE-HAMBURG", weight: 0.40, season: null },

  // ----------------------------------------
  // DE-BERLIN (Berlin) — major European city
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-BERLIN", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "PL-CENTRAL", destinationId: "DE-BERLIN", weight: 0.65, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-BERLIN", weight: 0.72, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-BERLIN", weight: 0.50, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "DE-BERLIN", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-BERLIN", weight: 0.58, season: null },
  { sourceRegionId: "JP", destinationId: "DE-BERLIN", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DE-BERLIN", weight: 0.48, season: null },
  { sourceRegionId: "DK", destinationId: "DE-BERLIN", weight: 0.52, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-BERLIN", weight: 0.42, season: null },
  { sourceRegionId: "AT-W", destinationId: "DE-BERLIN", weight: 0.40, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "DE-BERLIN", weight: 0.35, season: null },

  // ----------------------------------------
  // DE-DRESDEN (Dresden)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "DE-DRESDEN", weight: 0.65, season: null },
  { sourceRegionId: "DE-BY", destinationId: "DE-DRESDEN", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "DE-DRESDEN", weight: 0.60, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "DE-DRESDEN", weight: 0.45, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-DRESDEN", weight: 0.38, season: null },
  { sourceRegionId: "NL-EAST", destinationId: "DE-DRESDEN", weight: 0.35, season: null },
  { sourceRegionId: "AT-W", destinationId: "DE-DRESDEN", weight: 0.32, season: null },

  // ----------------------------------------
  // DE-COLOGNE (Cologne)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "DE-COLOGNE", weight: 0.68, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-COLOGNE", weight: 0.60, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "DE-COLOGNE", weight: 0.55, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-COLOGNE", weight: 0.48, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "DE-COLOGNE", weight: 0.42, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-COLOGNE", weight: 0.38, season: null },
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
  { sourceRegionId: "BE-WAL", destinationId: "DE-MOSEL", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-MOSEL", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-NE", destinationId: "DE-MOSEL", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-MOSEL", weight: 0.30, season: "summer" },

  // ----------------------------------------
  // DE-SAXON-SWITZERLAND (Saxon Switzerland)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.68, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.55, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "DE-SAXON-SWITZERLAND", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // DE-BAVARIAN-LAKES (Bavarian Lakes)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "DE-BAVARIAN-LAKES", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "DE-BAVARIAN-LAKES", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "DE-BAVARIAN-LAKES", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-T", destinationId: "DE-BAVARIAN-LAKES", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "DE-BAVARIAN-LAKES", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-BAVARIAN-LAKES", weight: 0.32, season: "summer" },
  { sourceRegionId: "JP", destinationId: "DE-BAVARIAN-LAKES", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // IT-NAPLES (Naples)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-NAPLES", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "IT-NAPLES", weight: 0.38, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-NAPLES", weight: 0.55, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "IT-NAPLES", weight: 0.42, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "IT-NAPLES", weight: 0.45, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IT-NAPLES", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-NAPLES", weight: 0.38, season: null },
  { sourceRegionId: "AT-W", destinationId: "IT-NAPLES", weight: 0.35, season: null },
  { sourceRegionId: "JP", destinationId: "IT-NAPLES", weight: 0.40, season: null },

  // ----------------------------------------
  // IT-FLORENCE (Florence)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-FLORENCE", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "IT-FLORENCE", weight: 0.50, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-FLORENCE", weight: 0.72, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "IT-FLORENCE", weight: 0.58, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "IT-FLORENCE", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IT-FLORENCE", weight: 0.75, season: null },
  { sourceRegionId: "US-WEST", destinationId: "IT-FLORENCE", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-FLORENCE", weight: 0.50, season: null },
  { sourceRegionId: "AT-W", destinationId: "IT-FLORENCE", weight: 0.42, season: null },
  { sourceRegionId: "JP", destinationId: "IT-FLORENCE", weight: 0.62, season: null },
  { sourceRegionId: "CH-DE", destinationId: "IT-FLORENCE", weight: 0.48, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "IT-FLORENCE", weight: 0.42, season: null },

  // ----------------------------------------
  // IT-MILAN (Milan)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-MILAN", weight: 0.55, season: null },
  { sourceRegionId: "DE-BW", destinationId: "IT-MILAN", weight: 0.52, season: null },
  { sourceRegionId: "CH-DE", destinationId: "IT-MILAN", weight: 0.60, season: null },
  { sourceRegionId: "CH-FR", destinationId: "IT-MILAN", weight: 0.52, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "IT-MILAN", weight: 0.60, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-MILAN", weight: 0.65, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IT-MILAN", weight: 0.58, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-MILAN", weight: 0.45, season: null },
  { sourceRegionId: "JP", destinationId: "IT-MILAN", weight: 0.50, season: null },
  { sourceRegionId: "AE", destinationId: "IT-MILAN", weight: 0.42, season: null },
  { sourceRegionId: "AT-W", destinationId: "IT-MILAN", weight: 0.45, season: null },

  // ----------------------------------------
  // IT-ISCHIA (Ischia)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ISCHIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IT-ISCHIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-ISCHIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "IT-ISCHIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "IT-ISCHIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ISCHIA", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // IT-ELBA (Elba)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ELBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-ELBA", weight: 0.45, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "IT-ELBA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "IT-ELBA", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ELBA", weight: 0.32, season: "summer" },
  { sourceRegionId: "FR-SE", destinationId: "IT-ELBA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // IT-CAPRI (Capri)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "IT-CAPRI", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IT-CAPRI", weight: 0.60, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-CAPRI", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IT-CAPRI", weight: 0.45, season: "summer" },
  { sourceRegionId: "JP", destinationId: "IT-CAPRI", weight: 0.48, season: "summer" },
  { sourceRegionId: "AE", destinationId: "IT-CAPRI", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "IT-CAPRI", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // IT-DOLOMITES-SUMMER (Val Gardena Summer)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-T", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.52, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.38, season: "summer" },
  { sourceRegionId: "JP", destinationId: "IT-DOLOMITES-SUMMER", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // IT-CINQUE-TERRE-TOWN (Manarola)
  // ----------------------------------------
  { sourceRegionId: "US-NORTHEAST", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.65, season: null },
  { sourceRegionId: "US-WEST", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.55, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.52, season: null },
  { sourceRegionId: "DE-BW", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.48, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.50, season: null },
  { sourceRegionId: "JP", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.55, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.42, season: null },
  { sourceRegionId: "CH-DE", destinationId: "IT-CINQUE-TERRE-TOWN", weight: 0.40, season: null },

  // ----------------------------------------
  // ES-SEVILLE (Seville)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-SEVILLE", weight: 0.60, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "ES-SEVILLE", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-SEVILLE", weight: 0.42, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-SEVILLE", weight: 0.38, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "ES-SEVILLE", weight: 0.52, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "ES-SEVILLE", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-SEVILLE", weight: 0.38, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-SEVILLE", weight: 0.35, season: null },
  { sourceRegionId: "JP", destinationId: "ES-SEVILLE", weight: 0.40, season: null },

  // ----------------------------------------
  // ES-GRANADA (Granada)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-GRANADA", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "ES-GRANADA", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-GRANADA", weight: 0.38, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "ES-GRANADA", weight: 0.48, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-GRANADA", weight: 0.35, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-GRANADA", weight: 0.32, season: null },
  { sourceRegionId: "JP", destinationId: "ES-GRANADA", weight: 0.38, season: null },

  // ----------------------------------------
  // ES-BILBAO (Bilbao)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-BILBAO", weight: 0.50, season: null },
  { sourceRegionId: "FR-W", destinationId: "ES-BILBAO", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "ES-BILBAO", weight: 0.45, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-BILBAO", weight: 0.35, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "ES-BILBAO", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-BILBAO", weight: 0.32, season: null },

  // ----------------------------------------
  // ES-SAN-SEBASTIAN (San Sebastián)
  // ----------------------------------------
  { sourceRegionId: "FR-W", destinationId: "ES-SAN-SEBASTIAN", weight: 0.62, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "ES-SAN-SEBASTIAN", weight: 0.50, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "ES-SAN-SEBASTIAN", weight: 0.48, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "ES-SAN-SEBASTIAN", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-SAN-SEBASTIAN", weight: 0.35, season: "summer" },
  { sourceRegionId: "BE-VLG", destinationId: "ES-SAN-SEBASTIAN", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // ES-MARBELLA (Marbella)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-MARBELLA", weight: 0.70, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "ES-MARBELLA", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "ES-MARBELLA", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-MARBELLA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-MARBELLA", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-MARBELLA", weight: 0.40, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-MARBELLA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AE", destinationId: "ES-MARBELLA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // ES-PAMPLONA (Pamplona)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-PAMPLONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "ES-PAMPLONA", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-W", destinationId: "ES-PAMPLONA", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "ES-PAMPLONA", weight: 0.30, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "ES-PAMPLONA", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // ES-COSTA-DAURADA (Costa Daurada)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "ES-COSTA-DAURADA", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ES-COSTA-DAURADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-COSTA-DAURADA", weight: 0.48, season: "summer" },
  { sourceRegionId: "BE-VLG", destinationId: "ES-COSTA-DAURADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "ES-COSTA-DAURADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "ES-COSTA-DAURADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "PL-CENTRAL", destinationId: "ES-COSTA-DAURADA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // ES-GRAN-CANARIA (Gran Canaria)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "ES-GRAN-CANARIA", weight: 0.65, season: null },
  { sourceRegionId: "GB-NORTH", destinationId: "ES-GRAN-CANARIA", weight: 0.58, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-GRAN-CANARIA", weight: 0.60, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-GRAN-CANARIA", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.58, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.55, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-GRAN-CANARIA", weight: 0.52, season: null },
  { sourceRegionId: "DK", destinationId: "ES-GRAN-CANARIA", weight: 0.50, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "ES-GRAN-CANARIA", weight: 0.45, season: null },

  // ----------------------------------------
  // ES-LA-PALMA (La Palma)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "ES-LA-PALMA", weight: 0.40, season: null },
  { sourceRegionId: "DE-BY", destinationId: "ES-LA-PALMA", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "ES-LA-PALMA", weight: 0.38, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.38, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.35, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-LA-PALMA", weight: 0.32, season: null },

  // ----------------------------------------
  // FR-LYON (Lyon)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-LYON", weight: 0.55, season: null },
  { sourceRegionId: "FR-SE", destinationId: "FR-LYON", weight: 0.65, season: null },
  { sourceRegionId: "CH-DE", destinationId: "FR-LYON", weight: 0.48, season: null },
  { sourceRegionId: "CH-FR", destinationId: "FR-LYON", weight: 0.55, season: null },
  { sourceRegionId: "BE-WAL", destinationId: "FR-LYON", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-LYON", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-LYON", weight: 0.40, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "FR-LYON", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-BORDEAUX (Bordeaux)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-BORDEAUX", weight: 0.60, season: null },
  { sourceRegionId: "FR-W", destinationId: "FR-BORDEAUX", weight: 0.65, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-BORDEAUX", weight: 0.62, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "FR-BORDEAUX", weight: 0.50, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "FR-BORDEAUX", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-BORDEAUX", weight: 0.42, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "FR-BORDEAUX", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "FR-BORDEAUX", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-MARSEILLE (Marseille)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-MARSEILLE", weight: 0.58, season: null },
  { sourceRegionId: "FR-SE", destinationId: "FR-MARSEILLE", weight: 0.72, season: null },
  { sourceRegionId: "BE-WAL", destinationId: "FR-MARSEILLE", weight: 0.45, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-MARSEILLE", weight: 0.48, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "FR-MARSEILLE", weight: 0.42, season: null },
  { sourceRegionId: "CH-FR", destinationId: "FR-MARSEILLE", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-MARSEILLE", weight: 0.35, season: null },

  // ----------------------------------------
  // FR-STRASBOURG (Strasbourg)
  // ----------------------------------------
  { sourceRegionId: "FR-NE", destinationId: "FR-STRASBOURG", weight: 0.75, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "FR-STRASBOURG", weight: 0.52, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-STRASBOURG", weight: 0.68, season: null },
  { sourceRegionId: "DE-RP", destinationId: "FR-STRASBOURG", weight: 0.55, season: null },
  { sourceRegionId: "CH-DE", destinationId: "FR-STRASBOURG", weight: 0.58, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "FR-STRASBOURG", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-STRASBOURG", weight: 0.38, season: null },

  // ----------------------------------------
  // FR-CHAMONIX (Chamonix) — ski
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-CHAMONIX", weight: 0.65, season: "winter" },
  { sourceRegionId: "FR-SE", destinationId: "FR-CHAMONIX", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-CHAMONIX", weight: 0.68, season: "winter" },
  { sourceRegionId: "GB-SOUTH", destinationId: "FR-CHAMONIX", weight: 0.55, season: "winter" },
  { sourceRegionId: "BE-VLG", destinationId: "FR-CHAMONIX", weight: 0.52, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-CHAMONIX", weight: 0.48, season: "winter" },
  { sourceRegionId: "CH-DE", destinationId: "FR-CHAMONIX", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "FR-CHAMONIX", weight: 0.45, season: "winter" },
  { sourceRegionId: "AU-EAST", destinationId: "FR-CHAMONIX", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // FR-DORDOGNE (Dordogne)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "FR-DORDOGNE", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "FR-DORDOGNE", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "FR-DORDOGNE", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-W", destinationId: "FR-DORDOGNE", weight: 0.60, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-DORDOGNE", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "FR-DORDOGNE", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // FR-ANNECY (Lake Annecy)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-ANNECY", weight: 0.62, season: "summer" },
  { sourceRegionId: "FR-SE", destinationId: "FR-ANNECY", weight: 0.70, season: "summer" },
  { sourceRegionId: "CH-FR", destinationId: "FR-ANNECY", weight: 0.60, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "FR-ANNECY", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-ANNECY", weight: 0.45, season: "summer" },
  { sourceRegionId: "BE-WAL", destinationId: "FR-ANNECY", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "FR-ANNECY", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // FR-CAMARGUE (Camargue)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-CAMARGUE", weight: 0.45, season: "summer" },
  { sourceRegionId: "FR-SE", destinationId: "FR-CAMARGUE", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-CAMARGUE", weight: 0.32, season: "summer" },
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
  { sourceRegionId: "PL-CENTRAL", destinationId: "AT-VIENNA", weight: 0.48, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AT-VIENNA", weight: 0.60, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "AT-VIENNA", weight: 0.58, season: null },
  { sourceRegionId: "JP", destinationId: "AT-VIENNA", weight: 0.52, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-VIENNA", weight: 0.45, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "AT-VIENNA", weight: 0.42, season: null },
  { sourceRegionId: "CH-DE", destinationId: "AT-VIENNA", weight: 0.50, season: null },

  // ----------------------------------------
  // AT-SALZBURG (Salzburg)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-SALZBURG", weight: 0.70, season: null },
  { sourceRegionId: "DE-BW", destinationId: "AT-SALZBURG", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "AT-SALZBURG", weight: 0.48, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AT-SALZBURG", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "AT-SALZBURG", weight: 0.52, season: null },
  { sourceRegionId: "JP", destinationId: "AT-SALZBURG", weight: 0.58, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-SALZBURG", weight: 0.42, season: null },
  { sourceRegionId: "CZ", destinationId: "AT-SALZBURG", weight: 0.40, season: null },
  { sourceRegionId: "CH-DE", destinationId: "AT-SALZBURG", weight: 0.45, season: null },

  // ----------------------------------------
  // AT-WACHAU (Wachau)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-WACHAU", weight: 0.52, season: "summer" },
  { sourceRegionId: "AT-OOE", destinationId: "AT-WACHAU", weight: 0.65, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "AT-WACHAU", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-WACHAU", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "AT-WACHAU", weight: 0.38, season: "summer" },
  { sourceRegionId: "HU", destinationId: "AT-WACHAU", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // AT-HALLSTATT (Hallstatt)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "AT-HALLSTATT", weight: 0.62, season: null },
  { sourceRegionId: "JP", destinationId: "AT-HALLSTATT", weight: 0.75, season: null },
  { sourceRegionId: "KR", destinationId: "AT-HALLSTATT", weight: 0.70, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "AT-HALLSTATT", weight: 0.65, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "AT-HALLSTATT", weight: 0.52, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AT-HALLSTATT", weight: 0.48, season: null },
  { sourceRegionId: "AT-OOE", destinationId: "AT-HALLSTATT", weight: 0.58, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "AT-HALLSTATT", weight: 0.45, season: null },

  // ----------------------------------------
  // CH-ZURICH (Zurich)
  // ----------------------------------------
  { sourceRegionId: "DE-BW", destinationId: "CH-ZURICH", weight: 0.58, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-ZURICH", weight: 0.52, season: null },
  { sourceRegionId: "AT-W", destinationId: "CH-ZURICH", weight: 0.48, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CH-ZURICH", weight: 0.60, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "CH-ZURICH", weight: 0.52, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CH-ZURICH", weight: 0.55, season: null },
  { sourceRegionId: "JP", destinationId: "CH-ZURICH", weight: 0.48, season: null },
  { sourceRegionId: "AE", destinationId: "CH-ZURICH", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-ZURICH", weight: 0.42, season: null },

  // ----------------------------------------
  // CH-GENEVA (Geneva)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "CH-GENEVA", weight: 0.62, season: null },
  { sourceRegionId: "FR-SE", destinationId: "CH-GENEVA", weight: 0.58, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CH-GENEVA", weight: 0.58, season: null },
  { sourceRegionId: "BE-WAL", destinationId: "CH-GENEVA", weight: 0.52, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CH-GENEVA", weight: 0.52, season: null },
  { sourceRegionId: "AE", destinationId: "CH-GENEVA", weight: 0.45, season: null },
  { sourceRegionId: "DE-BW", destinationId: "CH-GENEVA", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-GENEVA", weight: 0.38, season: null },

  // ----------------------------------------
  // CH-LUCERNE (Lucerne)
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "CH-LUCERNE", weight: 0.70, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CH-LUCERNE", weight: 0.65, season: null },
  { sourceRegionId: "KR", destinationId: "CH-LUCERNE", weight: 0.58, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CH-LUCERNE", weight: 0.60, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CH-LUCERNE", weight: 0.55, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-LUCERNE", weight: 0.50, season: null },
  { sourceRegionId: "DE-BW", destinationId: "CH-LUCERNE", weight: 0.48, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-LUCERNE", weight: 0.42, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "CH-LUCERNE", weight: 0.45, season: null },

  // ----------------------------------------
  // CH-INTERLAKEN (Interlaken)
  // ----------------------------------------
  { sourceRegionId: "JP", destinationId: "CH-INTERLAKEN", weight: 0.72, season: null },
  { sourceRegionId: "KR", destinationId: "CH-INTERLAKEN", weight: 0.65, season: null },
  { sourceRegionId: "IN-NORTH", destinationId: "CH-INTERLAKEN", weight: 0.60, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CH-INTERLAKEN", weight: 0.58, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CH-INTERLAKEN", weight: 0.55, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CH-INTERLAKEN", weight: 0.50, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "CH-INTERLAKEN", weight: 0.48, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CH-INTERLAKEN", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-INTERLAKEN", weight: 0.40, season: null },

  // ----------------------------------------
  // CH-TICINO (Ticino)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CH-TICINO", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "CH-TICINO", weight: 0.50, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "CH-TICINO", weight: 0.65, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "CH-TICINO", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "CH-TICINO", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CH-TICINO", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // PT-PORTO (Porto)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "PT-PORTO", weight: 0.68, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "PT-PORTO", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "PT-PORTO", weight: 0.60, season: null },
  { sourceRegionId: "FR-W", destinationId: "PT-PORTO", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-PORTO", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-PORTO", weight: 0.50, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "PT-PORTO", weight: 0.55, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "PT-PORTO", weight: 0.42, season: null },
  { sourceRegionId: "IE", destinationId: "PT-PORTO", weight: 0.48, season: null },

  // ----------------------------------------
  // PT-SINTRA (Sintra)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "PT-SINTRA", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "PT-SINTRA", weight: 0.52, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "PT-SINTRA", weight: 0.48, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-SINTRA", weight: 0.38, season: null },
  { sourceRegionId: "JP", destinationId: "PT-SINTRA", weight: 0.42, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-SINTRA", weight: 0.38, season: null },

  // ----------------------------------------
  // BE-BRUGES (Bruges)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "BE-BRUGES", weight: 0.72, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "BE-BRUGES", weight: 0.60, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "BE-BRUGES", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-BRUGES", weight: 0.65, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-BRUGES", weight: 0.58, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "BE-BRUGES", weight: 0.55, season: null },
  { sourceRegionId: "JP", destinationId: "BE-BRUGES", weight: 0.50, season: null },
  { sourceRegionId: "IE", destinationId: "BE-BRUGES", weight: 0.48, season: null },

  // ----------------------------------------
  // BE-BRUSSELS (Brussels)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "BE-BRUSSELS", weight: 0.65, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "BE-BRUSSELS", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-BRUSSELS", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-BRUSSELS", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "BE-BRUSSELS", weight: 0.52, season: null },
  { sourceRegionId: "JP", destinationId: "BE-BRUSSELS", weight: 0.42, season: null },
  { sourceRegionId: "LU", destinationId: "BE-BRUSSELS", weight: 0.55, season: null },
  { sourceRegionId: "CH-DE", destinationId: "BE-BRUSSELS", weight: 0.38, season: null },

  // ----------------------------------------
  // BE-GHENT (Ghent)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "BE-GHENT", weight: 0.52, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "BE-GHENT", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "BE-GHENT", weight: 0.60, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BE-GHENT", weight: 0.45, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "BE-GHENT", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "BE-GHENT", weight: 0.35, season: null },

  // ----------------------------------------
  // NL-AMSTERDAM (Amsterdam)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "NL-AMSTERDAM", weight: 0.82, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "NL-AMSTERDAM", weight: 0.70, season: null },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "NL-AMSTERDAM", weight: 0.68, season: null },
  { sourceRegionId: "DE-NW", destinationId: "NL-AMSTERDAM", weight: 0.65, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NL-AMSTERDAM", weight: 0.75, season: null },
  { sourceRegionId: "US-WEST", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "JP", destinationId: "NL-AMSTERDAM", weight: 0.58, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "NL-AMSTERDAM", weight: 0.55, season: null },
  { sourceRegionId: "DK", destinationId: "NL-AMSTERDAM", weight: 0.55, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "NL-AMSTERDAM", weight: 0.62, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "NL-AMSTERDAM", weight: 0.50, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "NL-AMSTERDAM", weight: 0.58, season: null },

  // ----------------------------------------
  // NL-UTRECHT (Utrecht)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "NL-UTRECHT", weight: 0.40, season: null },
  { sourceRegionId: "DE-NW", destinationId: "NL-UTRECHT", weight: 0.45, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "NL-UTRECHT", weight: 0.42, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "NL-UTRECHT", weight: 0.35, season: null },
  { sourceRegionId: "NL-EAST", destinationId: "NL-UTRECHT", weight: 0.50, season: null },

  // ----------------------------------------
  // NL-WADDEN (Wadden Islands)
  // ----------------------------------------
  { sourceRegionId: "NL-NORTH", destinationId: "NL-WADDEN", weight: 0.65, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "NL-WADDEN", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NL-WADDEN", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "NL-WADDEN", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NL-WADDEN", weight: 0.28, season: "summer" },

  // ----------------------------------------
  // PL-KRAKOW (Krakow)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "PL-KRAKOW", weight: 0.48, season: null },
  { sourceRegionId: "DE-BE", destinationId: "PL-KRAKOW", weight: 0.45, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PL-KRAKOW", weight: 0.65, season: null },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "PL-KRAKOW", weight: 0.52, season: null },
  { sourceRegionId: "IE", destinationId: "PL-KRAKOW", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "PL-KRAKOW", weight: 0.50, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PL-KRAKOW", weight: 0.42, season: null },
  { sourceRegionId: "CZ", destinationId: "PL-KRAKOW", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "PL-KRAKOW", weight: 0.55, season: null },
  { sourceRegionId: "AT-W", destinationId: "PL-KRAKOW", weight: 0.38, season: null },

  // ----------------------------------------
  // PL-WARSAW (Warsaw)
  // ----------------------------------------
  { sourceRegionId: "DE-BE", destinationId: "PL-WARSAW", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PL-WARSAW", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PL-WARSAW", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "PL-WARSAW", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PL-WARSAW", weight: 0.38, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "PL-WARSAW", weight: 0.42, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "PL-WARSAW", weight: 0.38, season: null },
  { sourceRegionId: "UA", destinationId: "PL-WARSAW", weight: 0.55, season: null },

  // ----------------------------------------
  // PL-GDANSK (Gdańsk)
  // ----------------------------------------
  { sourceRegionId: "DE-BE", destinationId: "PL-GDANSK", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "PL-GDANSK", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "PL-GDANSK", weight: 0.45, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "PL-GDANSK", weight: 0.52, season: "summer" },
  { sourceRegionId: "DK", destinationId: "PL-GDANSK", weight: 0.48, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "PL-GDANSK", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // PL-ZAKOPANE (Zakopane) — ski
  // ----------------------------------------
  { sourceRegionId: "PL-SOUTH", destinationId: "PL-ZAKOPANE", weight: 0.75, season: "winter" },
  { sourceRegionId: "PL-CENTRAL", destinationId: "PL-ZAKOPANE", weight: 0.65, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "PL-ZAKOPANE", weight: 0.52, season: "winter" },
  { sourceRegionId: "SK", destinationId: "PL-ZAKOPANE", weight: 0.48, season: "winter" },
  { sourceRegionId: "DE-SN", destinationId: "PL-ZAKOPANE", weight: 0.35, season: "winter" },
  { sourceRegionId: "HU", destinationId: "PL-ZAKOPANE", weight: 0.32, season: "winter" },

  // ----------------------------------------
  // PL-WROCLAW (Wrocław)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "PL-WROCLAW", weight: 0.60, season: null },
  { sourceRegionId: "DE-BE", destinationId: "PL-WROCLAW", weight: 0.48, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PL-WROCLAW", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "PL-WROCLAW", weight: 0.52, season: null },
  { sourceRegionId: "NL-EAST", destinationId: "PL-WROCLAW", weight: 0.35, season: null },
  { sourceRegionId: "AT-W", destinationId: "PL-WROCLAW", weight: 0.32, season: null },

  // ----------------------------------------
  // CZ-PRAGUE (Prague)
  // ----------------------------------------
  { sourceRegionId: "DE-SN", destinationId: "CZ-PRAGUE", weight: 0.75, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CZ-PRAGUE", weight: 0.68, season: null },
  { sourceRegionId: "AT-W", destinationId: "CZ-PRAGUE", weight: 0.65, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "CZ-PRAGUE", weight: 0.62, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CZ-PRAGUE", weight: 0.78, season: null },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "CZ-PRAGUE", weight: 0.62, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CZ-PRAGUE", weight: 0.70, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "CZ-PRAGUE", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "CZ-PRAGUE", weight: 0.58, season: null },
  { sourceRegionId: "JP", destinationId: "CZ-PRAGUE", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "CZ-PRAGUE", weight: 0.60, season: null },
  { sourceRegionId: "HU", destinationId: "CZ-PRAGUE", weight: 0.55, season: null },
  { sourceRegionId: "IE", destinationId: "CZ-PRAGUE", weight: 0.60, season: null },

  // ----------------------------------------
  // CZ-CESKY-KRUMLOV (Český Krumlov)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.58, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.55, season: "summer" },
  { sourceRegionId: "AT-OOE", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.52, season: "summer" },
  { sourceRegionId: "JP", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.60, season: "summer" },
  { sourceRegionId: "KR", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.52, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CZ-CESKY-KRUMLOV", weight: 0.45, season: "summer" },

  // ----------------------------------------
  // CZ-KARLOVY-VARY (Karlovy Vary)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "CZ-KARLOVY-VARY", weight: 0.48, season: null },
  { sourceRegionId: "DE-SN", destinationId: "CZ-KARLOVY-VARY", weight: 0.52, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "CZ-KARLOVY-VARY", weight: 0.65, season: null },
  { sourceRegionId: "RU-SPE", destinationId: "CZ-KARLOVY-VARY", weight: 0.55, season: null },
  { sourceRegionId: "AT-W", destinationId: "CZ-KARLOVY-VARY", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CZ-KARLOVY-VARY", weight: 0.35, season: null },

  // ----------------------------------------
  // DK-COPENHAGEN (Copenhagen)
  // ----------------------------------------
  { sourceRegionId: "DE-HH", destinationId: "DK-COPENHAGEN", weight: 0.65, season: null },
  { sourceRegionId: "DE-SH", destinationId: "DK-COPENHAGEN", weight: 0.58, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DK-COPENHAGEN", weight: 0.50, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.70, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.72, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DK-COPENHAGEN", weight: 0.65, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DK-COPENHAGEN", weight: 0.58, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "DK-COPENHAGEN", weight: 0.48, season: null },
  { sourceRegionId: "JP", destinationId: "DK-COPENHAGEN", weight: 0.45, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "DK-COPENHAGEN", weight: 0.55, season: null },

  // ----------------------------------------
  // HR-SPLIT (Split)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "DE-NW", destinationId: "HR-SPLIT", weight: 0.48, season: null },
  { sourceRegionId: "AT-W", destinationId: "HR-SPLIT", weight: 0.52, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "HR-SPLIT", weight: 0.62, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "CZ", destinationId: "HR-SPLIT", weight: 0.58, season: null },
  { sourceRegionId: "PL-CENTRAL", destinationId: "HR-SPLIT", weight: 0.52, season: null },
  { sourceRegionId: "SK", destinationId: "HR-SPLIT", weight: 0.50, season: null },
  { sourceRegionId: "HU", destinationId: "HR-SPLIT", weight: 0.55, season: null },
  { sourceRegionId: "SI", destinationId: "HR-SPLIT", weight: 0.60, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "HR-SPLIT", weight: 0.42, season: null },

  // ----------------------------------------
  // HR-HVAR (Hvar)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "HR-HVAR", weight: 0.58, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "HR-HVAR", weight: 0.52, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-HVAR", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "HR-HVAR", weight: 0.48, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-HVAR", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "HR-HVAR", weight: 0.40, season: "summer" },
  { sourceRegionId: "AE", destinationId: "HR-HVAR", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-NAXOS (Naxos)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "GR-NAXOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-NAXOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-NAXOS", weight: 0.50, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-NAXOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GR-NAXOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "GR-NAXOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-NAXOS", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-PAROS (Paros)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "GR-PAROS", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-PAROS", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GR-PAROS", weight: 0.48, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-PAROS", weight: 0.40, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "GR-PAROS", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-PAROS", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GR-PAROS", weight: 0.42, season: "summer" },

  // ----------------------------------------
  // GR-MILOS (Milos)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "GR-MILOS", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GR-MILOS", weight: 0.52, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GR-MILOS", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-MILOS", weight: 0.40, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-MILOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GR-MILOS", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // GR-LEFKADA (Lefkada)
  // ----------------------------------------
  { sourceRegionId: "DE-NW", destinationId: "GR-LEFKADA", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-LEFKADA", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-LEFKADA", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-LEFKADA", weight: 0.42, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-LEFKADA", weight: 0.38, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-LEFKADA", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // GR-CEPHALONIA (Cephalonia)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "GR-CEPHALONIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GR-CEPHALONIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-CEPHALONIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-CEPHALONIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-CEPHALONIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GR-CEPHALONIA", weight: 0.42, season: "summer" },

  // ----------------------------------------
  // HU-THERMAL (Thermal Baths — Hévíz)
  // ----------------------------------------
  { sourceRegionId: "AT-W", destinationId: "HU-THERMAL", weight: 0.52, season: null },
  { sourceRegionId: "DE-BY", destinationId: "HU-THERMAL", weight: 0.45, season: null },
  { sourceRegionId: "CZ", destinationId: "HU-THERMAL", weight: 0.48, season: null },
  { sourceRegionId: "SK", destinationId: "HU-THERMAL", weight: 0.55, season: null },
  { sourceRegionId: "RO", destinationId: "HU-THERMAL", weight: 0.42, season: null },
  { sourceRegionId: "PL-CENTRAL", destinationId: "HU-THERMAL", weight: 0.35, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "HU-THERMAL", weight: 0.30, season: null },

  // ----------------------------------------
  // LU-LUXEMBOURG (Luxembourg City)
  // ----------------------------------------
  { sourceRegionId: "BE-VLG", destinationId: "LU-LUXEMBOURG", weight: 0.55, season: null },
  { sourceRegionId: "BE-WAL", destinationId: "LU-LUXEMBOURG", weight: 0.60, season: null },
  { sourceRegionId: "FR-NE", destinationId: "LU-LUXEMBOURG", weight: 0.58, season: null },
  { sourceRegionId: "DE-RP", destinationId: "LU-LUXEMBOURG", weight: 0.52, season: null },
  { sourceRegionId: "DE-NW", destinationId: "LU-LUXEMBOURG", weight: 0.45, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "LU-LUXEMBOURG", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "LU-LUXEMBOURG", weight: 0.35, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "LU-LUXEMBOURG", weight: 0.30, season: null },

  // ----------------------------------------
  // TR-ALACATI (Alaçatı)
  // ----------------------------------------
  { sourceRegionId: "TR-WEST", destinationId: "TR-ALACATI", weight: 0.70, season: "summer" },
  { sourceRegionId: "TR-EAST", destinationId: "TR-ALACATI", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "TR-ALACATI", weight: 0.42, season: "summer" },
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
  { sourceRegionId: "AT-W", destinationId: "SI-PORTOROZ", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "SI-PORTOROZ", weight: 0.42, season: "summer" },
  { sourceRegionId: "IT", destinationId: "SI-PORTOROZ", weight: 0.48, season: "summer" },
  { sourceRegionId: "HU", destinationId: "SI-PORTOROZ", weight: 0.38, season: "summer" },

  // ----------------------------------------
  // DE-HEIDELBERG
  // ----------------------------------------
  { sourceRegionId: "DE-BW", destinationId: "DE-HEIDELBERG", weight: 0.75, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DE-HEIDELBERG", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "DE-HEIDELBERG", weight: 0.38, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "DE-HEIDELBERG", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-HEIDELBERG", weight: 0.28, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-HEIDELBERG", weight: 0.22, season: null },

  // ----------------------------------------
  // DE-ROTHENBURG (ob der Tauber)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "DE-ROTHENBURG", weight: 0.72, season: null },
  { sourceRegionId: "DE-BW", destinationId: "DE-ROTHENBURG", weight: 0.60, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "DE-ROTHENBURG", weight: 0.35, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "DE-ROTHENBURG", weight: 0.30, season: null },
  { sourceRegionId: "JP", destinationId: "DE-ROTHENBURG", weight: 0.28, season: null },

  // ----------------------------------------
  // IT-ORTISEI (South Tyrol / Dolomites)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "IT-ORTISEI", weight: 0.75, season: "winter" },
  { sourceRegionId: "AT-T", destinationId: "IT-ORTISEI", weight: 0.65, season: "winter" },
  { sourceRegionId: "AT-W", destinationId: "IT-ORTISEI", weight: 0.55, season: "winter" },
  { sourceRegionId: "CH-DE", destinationId: "IT-ORTISEI", weight: 0.48, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IT-ORTISEI", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "IT-ORTISEI", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // IT-PORTOFINO
  // ----------------------------------------
  { sourceRegionId: "IT", destinationId: "IT-PORTOFINO", weight: 0.70, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IT-PORTOFINO", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IT-PORTOFINO", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IT-PORTOFINO", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-DE", destinationId: "IT-PORTOFINO", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // FR-MONT-BLANC (Chamonix region)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-MONT-BLANC", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "FR-MONT-BLANC", weight: 0.60, season: "winter" },
  { sourceRegionId: "CH-DE", destinationId: "FR-MONT-BLANC", weight: 0.55, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "FR-MONT-BLANC", weight: 0.48, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-MONT-BLANC", weight: 0.42, season: "winter" },
  { sourceRegionId: "BE-VLG", destinationId: "FR-MONT-BLANC", weight: 0.38, season: "winter" },

  // ----------------------------------------
  // FR-COLMAR (Alsace)
  // ----------------------------------------
  { sourceRegionId: "FR-IDF", destinationId: "FR-COLMAR", weight: 0.68, season: null },
  { sourceRegionId: "DE-BW", destinationId: "FR-COLMAR", weight: 0.62, season: null },
  { sourceRegionId: "DE-NW", destinationId: "FR-COLMAR", weight: 0.45, season: null },
  { sourceRegionId: "CH-DE", destinationId: "FR-COLMAR", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "FR-COLMAR", weight: 0.38, season: null },
  { sourceRegionId: "BE-VLG", destinationId: "FR-COLMAR", weight: 0.35, season: null },

  // ----------------------------------------
  // ES-FORMENTERA
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "ES-FORMENTERA", weight: 0.60, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "ES-FORMENTERA", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "ES-FORMENTERA", weight: 0.52, season: "summer" },
  { sourceRegionId: "IT", destinationId: "ES-FORMENTERA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "ES-FORMENTERA", weight: 0.45, season: "summer" },

  // ----------------------------------------
  // PT-ALENTEJO
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "PT-ALENTEJO", weight: 0.48, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "PT-ALENTEJO", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PT-ALENTEJO", weight: 0.35, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "PT-ALENTEJO", weight: 0.32, season: null },
  { sourceRegionId: "DE-BY", destinationId: "PT-ALENTEJO", weight: 0.28, season: null },

  // ----------------------------------------
  // AT-LECH (Lech am Arlberg)
  // ----------------------------------------
  { sourceRegionId: "AT-W", destinationId: "AT-LECH", weight: 0.70, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AT-LECH", weight: 0.65, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "AT-LECH", weight: 0.55, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AT-LECH", weight: 0.48, season: "winter" },
  { sourceRegionId: "CH-DE", destinationId: "AT-LECH", weight: 0.42, season: "winter" },
  { sourceRegionId: "BE-VLG", destinationId: "AT-LECH", weight: 0.35, season: "winter" },

  // ----------------------------------------
  // GR-IKARIA
  // ----------------------------------------
  { sourceRegionId: "GR", destinationId: "GR-IKARIA", weight: 0.75, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-IKARIA", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-IKARIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-IKARIA", weight: 0.25, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-IKARIA", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // HR-VIS
  // ----------------------------------------
  { sourceRegionId: "HR", destinationId: "HR-VIS", weight: 0.78, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-VIS", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "HR-VIS", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "HR-VIS", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-VIS", weight: 0.38, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "HR-VIS", weight: 0.32, season: "summer" },

  // ----------------------------------------
  // NL-GIETHOORN
  // ----------------------------------------
  { sourceRegionId: "NL-NORTH", destinationId: "NL-GIETHOORN", weight: 0.82, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "NL-GIETHOORN", weight: 0.78, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "NL-GIETHOORN", weight: 0.55, season: "summer" },
  { sourceRegionId: "BE-VLG", destinationId: "NL-GIETHOORN", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NL-GIETHOORN", weight: 0.35, season: "summer" },

  // ----------------------------------------
  // PL-MASURIA (Masurian Lakes)
  // ----------------------------------------
  { sourceRegionId: "PL-CENTRAL", destinationId: "PL-MASURIA", weight: 0.82, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "PL-MASURIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "PL-MASURIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "PL-MASURIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "PL-MASURIA", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // CZ-BRNO
  // ----------------------------------------
  { sourceRegionId: "CZ", destinationId: "CZ-BRNO", weight: 0.85, season: null },
  { sourceRegionId: "SK", destinationId: "CZ-BRNO", weight: 0.60, season: null },
  { sourceRegionId: "AT-W", destinationId: "CZ-BRNO", weight: 0.48, season: null },
  { sourceRegionId: "HU", destinationId: "CZ-BRNO", weight: 0.38, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "CZ-BRNO", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CZ-BRNO", weight: 0.30, season: null },
];
