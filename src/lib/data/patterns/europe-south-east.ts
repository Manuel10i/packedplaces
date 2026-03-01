import type { TravelPattern } from "@/types";

// Travel patterns for Southern & Eastern Europe
// Italy (source): Domestic, Spain, France, Greece, Croatia, Egypt
// Spain (source): Domestic (Balearics, Canaries), France, Portugal, Italy, Morocco
// Balkans: Croatia coast #1, then Greece, Turkey, Italy
// Baltics: Spain/Canaries, Greece, Turkey, Finland

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // NORTHERN ITALY (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "IT-NORTH", destinationId: "IT-SARDINIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-SICILY", weight: 0.62, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-GARDASEE", weight: 0.70, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-LIGURIA", weight: 0.68, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-ADRIATIC", weight: 0.65, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-JESOLO", weight: 0.62, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-CAORLE", weight: 0.58, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-TUSCANY", weight: 0.60, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-AMALFI", weight: 0.58, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-CALABRIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-PUGLIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-ISEO", weight: 0.45, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-COMO", weight: 0.50, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-SUEDTIROL", weight: 0.55, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "IT-DOLOMITES", weight: 0.52, season: "winter" },
  // International
  { sourceRegionId: "IT-NORTH", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-BARCELONA", weight: 0.48, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "ES-CANARY", weight: 0.50, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "FR-COTE-AZUR", weight: 0.52, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "FR-PARIS", weight: 0.50, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-SANTORINI", weight: 0.45, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-MYKONOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "HR-DALMATIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "HR-ISTRIA", weight: 0.50, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "EG-HURGHADA", weight: 0.40, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "EG-SHARM", weight: 0.38, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },

  // ========================================
  // SOUTHERN ITALY (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-SARDINIA", weight: 0.65, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-SICILY", weight: 0.70, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-CALABRIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-PUGLIA", weight: 0.62, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-AMALFI", weight: 0.60, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "ES-MALLORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "ES-CANARY", weight: 0.45, season: "winter" },
  { sourceRegionId: "IT-SOUTH", destinationId: "GR-CRETE", weight: 0.50, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "GR-CORFU", weight: 0.45, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "IT-ROME", weight: 0.50, season: null },
  { sourceRegionId: "IT-SOUTH", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "IT-SOUTH", destinationId: "GB-LONDON", weight: 0.40, season: null },
  { sourceRegionId: "IT-SOUTH", destinationId: "EG-HURGHADA", weight: 0.42, season: "winter" },
  { sourceRegionId: "IT-SOUTH", destinationId: "MA-MARRAKECH", weight: 0.35, season: null },

  // ========================================
  // MADRID REGION (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "ES-MADRID", destinationId: "ES-COSTA-DEL-SOL", weight: 0.75, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-COSTA-BLANCA", weight: 0.68, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-MALLORCA", weight: 0.72, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-IBIZA", weight: 0.58, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-MENORCA", weight: 0.48, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-CANARY", weight: 0.65, season: "winter" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-TENERIFE", weight: 0.60, season: "winter" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-FUERTEVENTURA", weight: 0.48, season: "winter" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-LANZAROTE", weight: 0.50, season: "winter" },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-VALENCIA", weight: 0.55, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "ES-BARCELONA", weight: 0.55, season: null },
  // International
  { sourceRegionId: "ES-MADRID", destinationId: "FR-PARIS", weight: 0.55, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "IT-ROME", weight: 0.48, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "PT-LISBON", weight: 0.58, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "PT-ALGARVE", weight: 0.52, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "GB-LONDON", weight: 0.48, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "MA-MARRAKECH", weight: 0.50, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "ES-MADRID", destinationId: "GR-MYKONOS", weight: 0.38, season: "summer" },

  // ========================================
  // CATALONIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "ES-CATALONIA", destinationId: "ES-COSTA-BRAVA", weight: 0.72, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "ES-MALLORCA", weight: 0.68, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "ES-MENORCA", weight: 0.55, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "ES-CANARY", weight: 0.60, season: "winter" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "ES-TENERIFE", weight: 0.55, season: "winter" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "FR-COTE-AZUR", weight: 0.48, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "FR-PARIS", weight: 0.50, season: null },
  { sourceRegionId: "ES-CATALONIA", destinationId: "IT-ROME", weight: 0.45, season: null },
  { sourceRegionId: "ES-CATALONIA", destinationId: "IT-SARDINIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "PT-LISBON", weight: 0.48, season: null },
  { sourceRegionId: "ES-CATALONIA", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "ES-CATALONIA", destinationId: "GR-CRETE", weight: 0.42, season: "summer" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "MA-MARRAKECH", weight: 0.42, season: null },

  // ========================================
  // ANDALUSIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "ES-COSTA-DEL-SOL", weight: 0.70, season: "summer" },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "ES-MALLORCA", weight: 0.58, season: "summer" },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "ES-CANARY", weight: 0.60, season: "winter" },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "ES-TENERIFE", weight: 0.55, season: "winter" },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "ES-BARCELONA", weight: 0.48, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "PT-ALGARVE", weight: 0.55, season: "summer" },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "PT-LISBON", weight: 0.48, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "MA-MARRAKECH", weight: 0.52, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "MA-AGADIR", weight: 0.42, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "IT-ROME", weight: 0.40, season: null },
  { sourceRegionId: "ES-ANDALUSIA", destinationId: "GB-LONDON", weight: 0.42, season: null },

  // ========================================
  // PORTUGAL (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "PT", destinationId: "PT-ALGARVE", weight: 0.72, season: "summer" },
  { sourceRegionId: "PT", destinationId: "PT-MADEIRA", weight: 0.55, season: null },
  { sourceRegionId: "PT", destinationId: "PT-AZORES", weight: 0.42, season: "summer" },
  { sourceRegionId: "PT", destinationId: "ES-MADRID", weight: 0.48, season: null },
  { sourceRegionId: "PT", destinationId: "ES-BARCELONA", weight: 0.45, season: null },
  { sourceRegionId: "PT", destinationId: "ES-CANARY", weight: 0.52, season: "winter" },
  { sourceRegionId: "PT", destinationId: "FR-PARIS", weight: 0.50, season: null },
  { sourceRegionId: "PT", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "PT", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "PT", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },
  { sourceRegionId: "PT", destinationId: "MA-MARRAKECH", weight: 0.42, season: null },
  { sourceRegionId: "PT", destinationId: "EG-HURGHADA", weight: 0.35, season: "winter" },

  // ========================================
  // HUNGARY (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "HU", destinationId: "HR-DALMATIA", weight: 0.78, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-ISTRIA", weight: 0.65, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-KVARNER", weight: 0.60, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-DUBROVNIK", weight: 0.55, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HU-BALATON", weight: 0.70, season: "summer" },
  { sourceRegionId: "HU", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "HU", destinationId: "GR-RHODES", weight: 0.48, season: "summer" },
  { sourceRegionId: "HU", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "HU", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "HU", destinationId: "IT-ADRIATIC", weight: 0.48, season: "summer" },
  { sourceRegionId: "HU", destinationId: "IT-JESOLO", weight: 0.42, season: "summer" },
  { sourceRegionId: "HU", destinationId: "IT-CAORLE", weight: 0.38, season: "summer" },
  { sourceRegionId: "HU", destinationId: "ES-COSTA-DEL-SOL", weight: 0.45, season: "summer" },
  { sourceRegionId: "HU", destinationId: "EG-HURGHADA", weight: 0.45, season: "winter" },
  { sourceRegionId: "HU", destinationId: "ME-COAST", weight: 0.42, season: "summer" },
  { sourceRegionId: "HU", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.45, season: "winter" },
  { sourceRegionId: "HU", destinationId: "SI-BLED", weight: 0.40, season: "summer" },

  // ========================================
  // ROMANIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "RO", destinationId: "RO-BLACK-SEA", weight: 0.72, season: "summer" },
  { sourceRegionId: "RO", destinationId: "GR-CRETE", weight: 0.58, season: "summer" },
  { sourceRegionId: "RO", destinationId: "GR-RHODES", weight: 0.48, season: "summer" },
  { sourceRegionId: "RO", destinationId: "GR-HALKIDIKI", weight: 0.50, season: "summer" },
  { sourceRegionId: "RO", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "RO", destinationId: "BG-BLACK-SEA", weight: 0.55, season: "summer" },
  { sourceRegionId: "RO", destinationId: "HR-DALMATIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "RO", destinationId: "IT-ROME", weight: 0.40, season: null },
  { sourceRegionId: "RO", destinationId: "ES-COSTA-DEL-SOL", weight: 0.38, season: "summer" },
  { sourceRegionId: "RO", destinationId: "EG-HURGHADA", weight: 0.48, season: "winter" },
  { sourceRegionId: "RO", destinationId: "EG-SHARM", weight: 0.42, season: "winter" },
  { sourceRegionId: "RO", destinationId: "TN-DJERBA", weight: 0.38, season: "summer" },

  // ========================================
  // BULGARIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "BG", destinationId: "BG-BLACK-SEA", weight: 0.70, season: "summer" },
  { sourceRegionId: "BG", destinationId: "GR-HALKIDIKI", weight: 0.62, season: "summer" },
  { sourceRegionId: "BG", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "BG", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "BG", destinationId: "TR-BODRUM", weight: 0.42, season: "summer" },
  { sourceRegionId: "BG", destinationId: "ES-COSTA-DEL-SOL", weight: 0.38, season: "summer" },
  { sourceRegionId: "BG", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "BG", destinationId: "EG-HURGHADA", weight: 0.45, season: "winter" },
  { sourceRegionId: "BG", destinationId: "TN-DJERBA", weight: 0.38, season: "summer" },

  // ========================================
  // CROATIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "HR", destinationId: "HR-DALMATIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "HR", destinationId: "HR-ISTRIA", weight: 0.65, season: "summer" },
  { sourceRegionId: "HR", destinationId: "HR-DUBROVNIK", weight: 0.55, season: "summer" },
  { sourceRegionId: "HR", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "HR", destinationId: "ES-BARCELONA", weight: 0.38, season: null },
  { sourceRegionId: "HR", destinationId: "GR-CRETE", weight: 0.45, season: "summer" },
  { sourceRegionId: "HR", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.40, season: "winter" },
  { sourceRegionId: "HR", destinationId: "ME-COAST", weight: 0.42, season: "summer" },
  { sourceRegionId: "HR", destinationId: "ME-KOTOR", weight: 0.40, season: "summer" },
  { sourceRegionId: "HR", destinationId: "SI-BLED", weight: 0.38, season: "summer" },
  { sourceRegionId: "HR", destinationId: "EG-HURGHADA", weight: 0.35, season: "winter" },

  // ========================================
  // SERBIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "RS", destinationId: "GR-HALKIDIKI", weight: 0.68, season: "summer" },
  { sourceRegionId: "RS", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "RS", destinationId: "ME-COAST", weight: 0.65, season: "summer" },
  { sourceRegionId: "RS", destinationId: "ME-KOTOR", weight: 0.55, season: "summer" },
  { sourceRegionId: "RS", destinationId: "HR-DALMATIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "RS", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "RS", destinationId: "BG-BLACK-SEA", weight: 0.42, season: "summer" },
  { sourceRegionId: "RS", destinationId: "AL-RIVIERA", weight: 0.48, season: "summer" },
  { sourceRegionId: "RS", destinationId: "EG-HURGHADA", weight: 0.42, season: "winter" },
  { sourceRegionId: "RS", destinationId: "ES-COSTA-DEL-SOL", weight: 0.38, season: "summer" },
  { sourceRegionId: "RS", destinationId: "IT-ROME", weight: 0.35, season: null },

  // ========================================
  // SLOVAKIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SK", destinationId: "HR-DALMATIA", weight: 0.70, season: "summer" },
  { sourceRegionId: "SK", destinationId: "HR-ISTRIA", weight: 0.58, season: "summer" },
  { sourceRegionId: "SK", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "SK", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "SK", destinationId: "IT-ADRIATIC", weight: 0.50, season: "summer" },
  { sourceRegionId: "SK", destinationId: "IT-JESOLO", weight: 0.45, season: "summer" },
  { sourceRegionId: "SK", destinationId: "IT-CAORLE", weight: 0.42, season: "summer" },
  { sourceRegionId: "SK", destinationId: "IT-ROME", weight: 0.40, season: null },
  { sourceRegionId: "SK", destinationId: "ES-COSTA-DEL-SOL", weight: 0.42, season: "summer" },
  { sourceRegionId: "SK", destinationId: "EG-HURGHADA", weight: 0.45, season: "winter" },
  { sourceRegionId: "SK", destinationId: "BG-BLACK-SEA", weight: 0.42, season: "summer" },
  { sourceRegionId: "SK", destinationId: "ME-COAST", weight: 0.40, season: "summer" },
  { sourceRegionId: "SK", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "SK", destinationId: "HU-BALATON", weight: 0.45, season: "summer" },

  // ========================================
  // SLOVENIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SI", destinationId: "HR-DALMATIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "SI", destinationId: "HR-ISTRIA", weight: 0.68, season: "summer" },
  { sourceRegionId: "SI", destinationId: "SI-BLED", weight: 0.55, season: "summer" },
  { sourceRegionId: "SI", destinationId: "GR-CRETE", weight: 0.50, season: "summer" },
  { sourceRegionId: "SI", destinationId: "IT-GARDASEE", weight: 0.48, season: "summer" },
  { sourceRegionId: "SI", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "SI", destinationId: "IT-VENICE", weight: 0.45, season: null },
  { sourceRegionId: "SI", destinationId: "AT-KAERNTEN-LAKES", weight: 0.45, season: "summer" },
  { sourceRegionId: "SI", destinationId: "ES-MALLORCA", weight: 0.42, season: "summer" },
  { sourceRegionId: "SI", destinationId: "TR-ANTALYA", weight: 0.45, season: "summer" },
  { sourceRegionId: "SI", destinationId: "EG-HURGHADA", weight: 0.38, season: "winter" },
  { sourceRegionId: "SI", destinationId: "ME-COAST", weight: 0.40, season: "summer" },
  { sourceRegionId: "SI", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.42, season: "winter" },

  // ========================================
  // ESTONIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "EE", destinationId: "ES-CANARY", weight: 0.62, season: "winter" },
  { sourceRegionId: "EE", destinationId: "ES-COSTA-DEL-SOL", weight: 0.52, season: "summer" },
  { sourceRegionId: "EE", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "EE", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "EE", destinationId: "EG-HURGHADA", weight: 0.48, season: "winter" },
  { sourceRegionId: "EE", destinationId: "EE-TALLINN", weight: 0.40, season: null },
  { sourceRegionId: "EE", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "EE", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "EE", destinationId: "FR-PARIS", weight: 0.35, season: null },
  { sourceRegionId: "EE", destinationId: "FI-LAPLAND", weight: 0.35, season: "winter" },

  // ========================================
  // LATVIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "LV", destinationId: "ES-CANARY", weight: 0.60, season: "winter" },
  { sourceRegionId: "LV", destinationId: "ES-COSTA-DEL-SOL", weight: 0.50, season: "summer" },
  { sourceRegionId: "LV", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "LV", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "LV", destinationId: "EG-HURGHADA", weight: 0.48, season: "winter" },
  { sourceRegionId: "LV", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "LV", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "LV", destinationId: "EE-TALLINN", weight: 0.38, season: null },
  { sourceRegionId: "LV", destinationId: "HR-DALMATIA", weight: 0.38, season: "summer" },

  // ========================================
  // LITHUANIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "LT", destinationId: "ES-CANARY", weight: 0.58, season: "winter" },
  { sourceRegionId: "LT", destinationId: "ES-COSTA-DEL-SOL", weight: 0.48, season: "summer" },
  { sourceRegionId: "LT", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "LT", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "LT", destinationId: "EG-HURGHADA", weight: 0.48, season: "winter" },
  { sourceRegionId: "LT", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "LT", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "LT", destinationId: "HR-DALMATIA", weight: 0.40, season: "summer" },
  { sourceRegionId: "LT", destinationId: "BG-BLACK-SEA", weight: 0.40, season: "summer" },
  { sourceRegionId: "LT", destinationId: "ME-COAST", weight: 0.38, season: "summer" },

  // ========================================
  // INBOUND: Existing regions -> new Phase 2 destinations
  // ========================================
  // Germans/Dutch/Swiss/Austrians to new destinations
  { sourceRegionId: "DE-BY", destinationId: "HR-DUBROVNIK", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "HR-DUBROVNIK", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "HR-DUBROVNIK", weight: 0.35, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "HR-DUBROVNIK", weight: 0.48, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "HR-DUBROVNIK", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "HR-DUBROVNIK", weight: 0.42, season: "summer" },

  { sourceRegionId: "DE-BY", destinationId: "GR-ATHENS", weight: 0.40, season: null },
  { sourceRegionId: "DE-NW", destinationId: "GR-ATHENS", weight: 0.38, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "GR-ATHENS", weight: 0.45, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "GR-ATHENS", weight: 0.38, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-ATHENS", weight: 0.40, season: null },

  { sourceRegionId: "GB-ENG", destinationId: "GR-MYKONOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-MYKONOS", weight: 0.35, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "GR-MYKONOS", weight: 0.38, season: "summer" },

  { sourceRegionId: "DE-BY", destinationId: "SI-BLED", weight: 0.38, season: "summer" },
  { sourceRegionId: "AT-2", destinationId: "SI-BLED", weight: 0.45, season: "summer" },
  { sourceRegionId: "AT-6", destinationId: "SI-BLED", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "SI-BLED", weight: 0.40, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "SI-BLED", weight: 0.35, season: "summer" },

  { sourceRegionId: "DE-BY", destinationId: "ME-KOTOR", weight: 0.32, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "ME-KOTOR", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ME-KOTOR", weight: 0.30, season: "summer" },

  { sourceRegionId: "DE-BY", destinationId: "AL-RIVIERA", weight: 0.28, season: "summer" },
  { sourceRegionId: "PL", destinationId: "AL-RIVIERA", weight: 0.32, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "AL-RIVIERA", weight: 0.30, season: "summer" },

  { sourceRegionId: "FI-SOUTH", destinationId: "EE-TALLINN", weight: 0.55, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "EE-TALLINN", weight: 0.35, season: null },
  { sourceRegionId: "DE-BE", destinationId: "EE-TALLINN", weight: 0.28, season: null },

  { sourceRegionId: "DE-BY", destinationId: "ES-VALENCIA", weight: 0.38, season: null },
  { sourceRegionId: "DE-NW", destinationId: "ES-VALENCIA", weight: 0.35, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "ES-VALENCIA", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "ES-VALENCIA", weight: 0.35, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-VALENCIA", weight: 0.32, season: null },

  { sourceRegionId: "DE-BY", destinationId: "IT-ISEO", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-ISEO", weight: 0.28, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-ISEO", weight: 0.32, season: "summer" },
  { sourceRegionId: "CH-TI", destinationId: "IT-ISEO", weight: 0.35, season: "summer" },

  { sourceRegionId: "DE-NW", destinationId: "RO-BLACK-SEA", weight: 0.22, season: "summer" },
  { sourceRegionId: "PL", destinationId: "RO-BLACK-SEA", weight: 0.28, season: "summer" },

  // Spain/Italy/Portugal macro-regions to existing european-central destinations
  { sourceRegionId: "ES-MADRID", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.35, season: "winter" },
  { sourceRegionId: "ES-CATALONIA", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.32, season: "winter" },
  { sourceRegionId: "PT", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.28, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "FR-ALPS", weight: 0.42, season: "winter" },
  { sourceRegionId: "ES-MADRID", destinationId: "FR-ALPS", weight: 0.32, season: "winter" },

  // ========================================
  // SK-BRATISLAVA
  // ========================================
  { sourceRegionId: "AT-W", destinationId: "SK-BRATISLAVA", weight: 0.70, season: null },
  { sourceRegionId: "SK", destinationId: "SK-BRATISLAVA", weight: 0.90, season: null },
  { sourceRegionId: "CZ", destinationId: "SK-BRATISLAVA", weight: 0.50, season: null },
  { sourceRegionId: "HU", destinationId: "SK-BRATISLAVA", weight: 0.50, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "SK-BRATISLAVA", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "SK-BRATISLAVA", weight: 0.30, season: null },
  { sourceRegionId: "DE-BW", destinationId: "SK-BRATISLAVA", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "SK-BRATISLAVA", weight: 0.28, season: null },

  // ========================================
  // SK-HIGH-TATRAS
  // ========================================
  { sourceRegionId: "SK", destinationId: "SK-HIGH-TATRAS", weight: 0.75, season: "winter" },
  { sourceRegionId: "PL-SOUTH", destinationId: "SK-HIGH-TATRAS", weight: 0.55, season: "winter" },
  { sourceRegionId: "CZ", destinationId: "SK-HIGH-TATRAS", weight: 0.50, season: "winter" },
  { sourceRegionId: "HU", destinationId: "SK-HIGH-TATRAS", weight: 0.40, season: "winter" },
  { sourceRegionId: "PL-CENTRAL", destinationId: "SK-HIGH-TATRAS", weight: 0.32, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "SK-HIGH-TATRAS", weight: 0.28, season: "winter" },

  // ========================================
  // RS-BELGRADE
  // ========================================
  { sourceRegionId: "RS", destinationId: "RS-BELGRADE", weight: 0.90, season: null },
  { sourceRegionId: "HR", destinationId: "RS-BELGRADE", weight: 0.40, season: null },
  { sourceRegionId: "HU", destinationId: "RS-BELGRADE", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RS-BELGRADE", weight: 0.20, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "RS-BELGRADE", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "RS-BELGRADE", weight: 0.22, season: null },
  { sourceRegionId: "AT-W", destinationId: "RS-BELGRADE", weight: 0.25, season: null },
  { sourceRegionId: "SI", destinationId: "RS-BELGRADE", weight: 0.28, season: null },

  // ========================================
  // RS-NOVI-SAD
  // ========================================
  { sourceRegionId: "RS", destinationId: "RS-NOVI-SAD", weight: 0.80, season: null },
  { sourceRegionId: "HU", destinationId: "RS-NOVI-SAD", weight: 0.35, season: null },
  { sourceRegionId: "HR", destinationId: "RS-NOVI-SAD", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RS-NOVI-SAD", weight: 0.18, season: null },
  { sourceRegionId: "AT-W", destinationId: "RS-NOVI-SAD", weight: 0.20, season: null },
  { sourceRegionId: "SK", destinationId: "RS-NOVI-SAD", weight: 0.22, season: null },

  // ========================================
  // BA-SARAJEVO
  // ========================================
  { sourceRegionId: "HR", destinationId: "BA-SARAJEVO", weight: 0.45, season: null },
  { sourceRegionId: "RS", destinationId: "BA-SARAJEVO", weight: 0.40, season: null },
  { sourceRegionId: "SI", destinationId: "BA-SARAJEVO", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BA-SARAJEVO", weight: 0.25, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BA-SARAJEVO", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BA-SARAJEVO", weight: 0.25, season: null },
  { sourceRegionId: "AT-W", destinationId: "BA-SARAJEVO", weight: 0.28, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "BA-SARAJEVO", weight: 0.25, season: null },

  // ========================================
  // BA-MOSTAR
  // ========================================
  { sourceRegionId: "HR", destinationId: "BA-MOSTAR", weight: 0.50, season: null },
  { sourceRegionId: "RS", destinationId: "BA-MOSTAR", weight: 0.35, season: null },
  { sourceRegionId: "SI", destinationId: "BA-MOSTAR", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BA-MOSTAR", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BA-MOSTAR", weight: 0.28, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "BA-MOSTAR", weight: 0.20, season: null },
  { sourceRegionId: "AT-W", destinationId: "BA-MOSTAR", weight: 0.25, season: null },

  // ========================================
  // MK-OHRID
  // ========================================
  { sourceRegionId: "RS", destinationId: "MK-OHRID", weight: 0.55, season: "summer" },
  { sourceRegionId: "BG", destinationId: "MK-OHRID", weight: 0.45, season: "summer" },
  { sourceRegionId: "HR", destinationId: "MK-OHRID", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "MK-OHRID", weight: 0.22, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "MK-OHRID", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "MK-OHRID", weight: 0.20, season: "summer" },
  { sourceRegionId: "GR-THESSALONIKI", destinationId: "MK-OHRID", weight: 0.35, season: "summer" },

  // ========================================
  // LT-VILNIUS
  // ========================================
  { sourceRegionId: "PL-NORTH", destinationId: "LT-VILNIUS", weight: 0.50, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "LT-VILNIUS", weight: 0.30, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "LT-VILNIUS", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "LT-VILNIUS", weight: 0.20, season: null },
  { sourceRegionId: "DE-NW", destinationId: "LT-VILNIUS", weight: 0.22, season: null },
  { sourceRegionId: "DK", destinationId: "LT-VILNIUS", weight: 0.18, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "LT-VILNIUS", weight: 0.25, season: null },
  { sourceRegionId: "LV", destinationId: "LT-VILNIUS", weight: 0.45, season: null },

  // ========================================
  // LV-RIGA
  // ========================================
  { sourceRegionId: "FI-SOUTH", destinationId: "LV-RIGA", weight: 0.35, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "LV-RIGA", weight: 0.30, season: null },
  { sourceRegionId: "DE-NW", destinationId: "LV-RIGA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "LV-RIGA", weight: 0.28, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "LV-RIGA", weight: 0.28, season: null },
  { sourceRegionId: "PL-NORTH", destinationId: "LV-RIGA", weight: 0.30, season: null },
  { sourceRegionId: "EE", destinationId: "LV-RIGA", weight: 0.40, season: null },
  { sourceRegionId: "LT", destinationId: "LV-RIGA", weight: 0.45, season: null },

  // ========================================
  // GR-THESSALONIKI
  // ========================================
  { sourceRegionId: "BG", destinationId: "GR-THESSALONIKI", weight: 0.40, season: null },
  { sourceRegionId: "RS", destinationId: "GR-THESSALONIKI", weight: 0.30, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "GR-THESSALONIKI", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "GR-THESSALONIKI", weight: 0.30, season: null },
  { sourceRegionId: "DE-NW", destinationId: "GR-THESSALONIKI", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-THESSALONIKI", weight: 0.28, season: null },
  { sourceRegionId: "RO", destinationId: "GR-THESSALONIKI", weight: 0.28, season: null },
  { sourceRegionId: "SK", destinationId: "GR-THESSALONIKI", weight: 0.22, season: null },

  // ========================================
  // GR-METEORA
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "GR-METEORA", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-METEORA", weight: 0.30, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "GR-METEORA", weight: 0.25, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-METEORA", weight: 0.25, season: null },
  { sourceRegionId: "BG", destinationId: "GR-METEORA", weight: 0.28, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GR-METEORA", weight: 0.28, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-METEORA", weight: 0.22, season: null },

  // ========================================
  // GR-CORFU-TOWN
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GR-CORFU-TOWN", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GR-CORFU-TOWN", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-CORFU-TOWN", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-CORFU-TOWN", weight: 0.28, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "GR-CORFU-TOWN", weight: 0.30, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-CORFU-TOWN", weight: 0.28, season: "summer" },
  { sourceRegionId: "RS", destinationId: "GR-CORFU-TOWN", weight: 0.25, season: "summer" },

  // ========================================
  // GR-SKIATHOS
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GR-SKIATHOS", weight: 0.42, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GR-SKIATHOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-SKIATHOS", weight: 0.28, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-SKIATHOS", weight: 0.25, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "GR-SKIATHOS", weight: 0.22, season: "summer" },
  { sourceRegionId: "DK", destinationId: "GR-SKIATHOS", weight: 0.20, season: "summer" },

  // ========================================
  // GR-SAMOS
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "GR-SAMOS", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GR-SAMOS", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-SAMOS", weight: 0.28, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "GR-SAMOS", weight: 0.25, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-SAMOS", weight: 0.22, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "GR-SAMOS", weight: 0.18, season: "summer" },

  // ========================================
  // RO-BUCHAREST
  // ========================================
  { sourceRegionId: "RO", destinationId: "RO-BUCHAREST", weight: 0.70, season: null },
  { sourceRegionId: "BG", destinationId: "RO-BUCHAREST", weight: 0.30, season: null },
  { sourceRegionId: "MD", destinationId: "RO-BUCHAREST", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RO-BUCHAREST", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "RO-BUCHAREST", weight: 0.25, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "RO-BUCHAREST", weight: 0.22, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "RO-BUCHAREST", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "RO-BUCHAREST", weight: 0.20, season: null },

  // ========================================
  // RO-TRANSYLVANIA
  // ========================================
  { sourceRegionId: "RO", destinationId: "RO-TRANSYLVANIA", weight: 0.60, season: null },
  { sourceRegionId: "HU", destinationId: "RO-TRANSYLVANIA", weight: 0.40, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RO-TRANSYLVANIA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "RO-TRANSYLVANIA", weight: 0.28, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "RO-TRANSYLVANIA", weight: 0.22, season: null },
  { sourceRegionId: "CZ", destinationId: "RO-TRANSYLVANIA", weight: 0.20, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "RO-TRANSYLVANIA", weight: 0.22, season: null },

  // ========================================
  // RO-MARAMURES
  // ========================================
  { sourceRegionId: "RO", destinationId: "RO-MARAMURES", weight: 0.55, season: "summer" },
  { sourceRegionId: "HU", destinationId: "RO-MARAMURES", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "RO-MARAMURES", weight: 0.18, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "RO-MARAMURES", weight: 0.20, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "RO-MARAMURES", weight: 0.20, season: "summer" },

  // ========================================
  // UA-LVIV
  // ========================================
  { sourceRegionId: "UA", destinationId: "UA-LVIV", weight: 0.70, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "UA-LVIV", weight: 0.40, season: null },
  { sourceRegionId: "PL-CENTRAL", destinationId: "UA-LVIV", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "UA-LVIV", weight: 0.18, season: null },
  { sourceRegionId: "SK", destinationId: "UA-LVIV", weight: 0.22, season: null },
  { sourceRegionId: "HU", destinationId: "UA-LVIV", weight: 0.18, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "UA-LVIV", weight: 0.15, season: null },

  // ========================================
  // HR-PLITVICE
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "HR-PLITVICE", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "HR-PLITVICE", weight: 0.30, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "HR-PLITVICE", weight: 0.40, season: "summer" },
  { sourceRegionId: "SI", destinationId: "HR-PLITVICE", weight: 0.45, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-PLITVICE", weight: 0.38, season: "summer" },
  { sourceRegionId: "SK", destinationId: "HR-PLITVICE", weight: 0.35, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-PLITVICE", weight: 0.35, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "HR-PLITVICE", weight: 0.28, season: "summer" },

  // ========================================
  // HR-ZADAR
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "HR-ZADAR", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "HR-ZADAR", weight: 0.32, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "HR-ZADAR", weight: 0.42, season: "summer" },
  { sourceRegionId: "SI", destinationId: "HR-ZADAR", weight: 0.48, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-ZADAR", weight: 0.40, season: "summer" },
  { sourceRegionId: "SK", destinationId: "HR-ZADAR", weight: 0.38, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-ZADAR", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "HR-ZADAR", weight: 0.30, season: "summer" },

  // ========================================
  // ME-DURMITOR
  // ========================================
  { sourceRegionId: "RS", destinationId: "ME-DURMITOR", weight: 0.50, season: "summer" },
  { sourceRegionId: "HR", destinationId: "ME-DURMITOR", weight: 0.30, season: "summer" },
  { sourceRegionId: "SI", destinationId: "ME-DURMITOR", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ME-DURMITOR", weight: 0.18, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "ME-DURMITOR", weight: 0.20, season: "summer" },
  { sourceRegionId: "BG", destinationId: "ME-DURMITOR", weight: 0.22, season: "summer" },

  // ========================================
  // AL-KSAMIL
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "AL-KSAMIL", weight: 0.25, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "AL-KSAMIL", weight: 0.30, season: "summer" },
  { sourceRegionId: "RS", destinationId: "AL-KSAMIL", weight: 0.38, season: "summer" },
  { sourceRegionId: "HR", destinationId: "AL-KSAMIL", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "AL-KSAMIL", weight: 0.22, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "AL-KSAMIL", weight: 0.20, season: "summer" },
  { sourceRegionId: "SK", destinationId: "AL-KSAMIL", weight: 0.18, season: "summer" },

  // ========================================
  // AL-BERAT
  // ========================================
  { sourceRegionId: "DE-BY", destinationId: "AL-BERAT", weight: 0.20, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "AL-BERAT", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AL-BERAT", weight: 0.22, season: null },
  { sourceRegionId: "RS", destinationId: "AL-BERAT", weight: 0.25, season: null },
  { sourceRegionId: "HR", destinationId: "AL-BERAT", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "AL-BERAT", weight: 0.18, season: null },

  // ========================================
  // SI-LJUBLJANA
  // ========================================
  { sourceRegionId: "AT-W", destinationId: "SI-LJUBLJANA", weight: 0.45, season: null },
  { sourceRegionId: "DE-BY", destinationId: "SI-LJUBLJANA", weight: 0.38, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "SI-LJUBLJANA", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "SI-LJUBLJANA", weight: 0.30, season: null },
  { sourceRegionId: "HR", destinationId: "SI-LJUBLJANA", weight: 0.38, season: null },
  { sourceRegionId: "HU", destinationId: "SI-LJUBLJANA", weight: 0.30, season: null },
  { sourceRegionId: "CZ", destinationId: "SI-LJUBLJANA", weight: 0.25, season: null },
  { sourceRegionId: "SK", destinationId: "SI-LJUBLJANA", weight: 0.25, season: null },

  // ========================================
  // SI-PIRAN
  // ========================================
  { sourceRegionId: "AT-W", destinationId: "SI-PIRAN", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "SI-PIRAN", weight: 0.35, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "SI-PIRAN", weight: 0.40, season: "summer" },
  { sourceRegionId: "HU", destinationId: "SI-PIRAN", weight: 0.32, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "SI-PIRAN", weight: 0.28, season: "summer" },
  { sourceRegionId: "SK", destinationId: "SI-PIRAN", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "SI-PIRAN", weight: 0.22, season: "summer" },

  // ========================================
  // BG-PLOVDIV
  // ========================================
  { sourceRegionId: "BG", destinationId: "BG-PLOVDIV", weight: 0.65, season: null },
  { sourceRegionId: "RO", destinationId: "BG-PLOVDIV", weight: 0.28, season: null },
  { sourceRegionId: "RS", destinationId: "BG-PLOVDIV", weight: 0.25, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "BG-PLOVDIV", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BG-PLOVDIV", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BG-PLOVDIV", weight: 0.22, season: null },
  { sourceRegionId: "GR-THESSALONIKI", destinationId: "BG-PLOVDIV", weight: 0.28, season: null },

  // ========================================
  // BG-BANSKO
  // ========================================
  { sourceRegionId: "BG", destinationId: "BG-BANSKO", weight: 0.70, season: "winter" },
  { sourceRegionId: "RO", destinationId: "BG-BANSKO", weight: 0.30, season: "winter" },
  { sourceRegionId: "RS", destinationId: "BG-BANSKO", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "BG-BANSKO", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-SOUTH", destinationId: "BG-BANSKO", weight: 0.28, season: "winter" },
  { sourceRegionId: "IL", destinationId: "BG-BANSKO", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "BG-BANSKO", weight: 0.20, season: "winter" },

  // ========================================
  // HU-EGER
  // ========================================
  { sourceRegionId: "HU", destinationId: "HU-EGER", weight: 0.65, season: null },
  { sourceRegionId: "SK", destinationId: "HU-EGER", weight: 0.35, season: null },
  { sourceRegionId: "CZ", destinationId: "HU-EGER", weight: 0.28, season: null },
  { sourceRegionId: "PL-SOUTH", destinationId: "HU-EGER", weight: 0.22, season: null },
  { sourceRegionId: "AT-W", destinationId: "HU-EGER", weight: 0.25, season: null },
  { sourceRegionId: "DE-BY", destinationId: "HU-EGER", weight: 0.18, season: null },

  // ========================================
  // RS-EXIT (Exit Festival, Novi Sad)
  // ========================================
  { sourceRegionId: "RS", destinationId: "RS-EXIT", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "RS-EXIT", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "RS-EXIT", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "RS-EXIT", weight: 0.20, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "RS-EXIT", weight: 0.18, season: "summer" },
  { sourceRegionId: "HR", destinationId: "RS-EXIT", weight: 0.28, season: "summer" },
  { sourceRegionId: "HU", destinationId: "RS-EXIT", weight: 0.25, season: "summer" },
  { sourceRegionId: "SI", destinationId: "RS-EXIT", weight: 0.22, season: "summer" },

  // ========================================
  // MT-GOZO
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "MT-GOZO", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "MT-GOZO", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "MT-GOZO", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "MT-GOZO", weight: 0.25, season: "summer" },
  { sourceRegionId: "IT-NORTH", destinationId: "MT-GOZO", weight: 0.30, season: "summer" },
  { sourceRegionId: "IT-SOUTH", destinationId: "MT-GOZO", weight: 0.25, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "MT-GOZO", weight: 0.22, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "MT-GOZO", weight: 0.20, season: "summer" },

  // ========================================
  // NEW DESTINATIONS — ADDED 2024
  // ========================================

  // ----------------------------------------
  // GR-RHODES-TOWN (Old Town, Rhodes)
  // ----------------------------------------
  { sourceRegionId: "DE-BY", destinationId: "GR-RHODES-TOWN", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GR-RHODES-TOWN", weight: 0.52, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "GR-RHODES-TOWN", weight: 0.42, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "GR-RHODES-TOWN", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GR-RHODES-TOWN", weight: 0.35, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "GR-RHODES-TOWN", weight: 0.40, season: "summer" },

  // ----------------------------------------
  // GR-THASSOS (Northern Aegean island)
  // ----------------------------------------
  { sourceRegionId: "BG", destinationId: "GR-THASSOS", weight: 0.72, season: "summer" },
  { sourceRegionId: "RO", destinationId: "GR-THASSOS", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-THASSOS", weight: 0.38, season: "summer" },
  { sourceRegionId: "SK", destinationId: "GR-THASSOS", weight: 0.35, season: "summer" },
  { sourceRegionId: "HU", destinationId: "GR-THASSOS", weight: 0.40, season: "summer" },

  // ----------------------------------------
  // GR-HYDRA (Car-free Saronic island)
  // ----------------------------------------
  { sourceRegionId: "GB-LONDON", destinationId: "GR-HYDRA", weight: 0.48, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GR-HYDRA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GR-HYDRA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "GR-HYDRA", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GR-HYDRA", weight: 0.28, season: "summer" },

  // ----------------------------------------
  // HR-ROVINJ (Istria, Croatia)
  // ----------------------------------------
  { sourceRegionId: "AT-W", destinationId: "HR-ROVINJ", weight: 0.72, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-ROVINJ", weight: 0.65, season: "summer" },
  { sourceRegionId: "SI", destinationId: "HR-ROVINJ", weight: 0.68, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-ROVINJ", weight: 0.55, season: "summer" },
  { sourceRegionId: "HU", destinationId: "HR-ROVINJ", weight: 0.50, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "HR-ROVINJ", weight: 0.40, season: "summer" },

  // ----------------------------------------
  // HR-BRAC (Dalmatian island)
  // ----------------------------------------
  { sourceRegionId: "HR", destinationId: "HR-BRAC", weight: 0.82, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "HR-BRAC", weight: 0.60, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "HR-BRAC", weight: 0.55, season: "summer" },
  { sourceRegionId: "CZ", destinationId: "HR-BRAC", weight: 0.48, season: "summer" },
  { sourceRegionId: "PL-SOUTH", destinationId: "HR-BRAC", weight: 0.42, season: "summer" },

  // ----------------------------------------
  // RO-SIBIU (Transylvania)
  // ----------------------------------------
  { sourceRegionId: "RO", destinationId: "RO-SIBIU", weight: 0.82, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RO-SIBIU", weight: 0.35, season: null },
  { sourceRegionId: "HU", destinationId: "RO-SIBIU", weight: 0.45, season: null },
  { sourceRegionId: "AT-W", destinationId: "RO-SIBIU", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "RO-SIBIU", weight: 0.25, season: null },

  // ----------------------------------------
  // RO-BRASOV (Transylvania)
  // ----------------------------------------
  { sourceRegionId: "RO", destinationId: "RO-BRASOV", weight: 0.85, season: null },
  { sourceRegionId: "HU", destinationId: "RO-BRASOV", weight: 0.48, season: null },
  { sourceRegionId: "DE-BY", destinationId: "RO-BRASOV", weight: 0.38, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "RO-BRASOV", weight: 0.30, season: null },
  { sourceRegionId: "AT-W", destinationId: "RO-BRASOV", weight: 0.28, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "RO-BRASOV", weight: 0.22, season: null },

  // ----------------------------------------
  // BG-RILA (Rila Monastery / Mountains)
  // ----------------------------------------
  { sourceRegionId: "BG", destinationId: "BG-RILA", weight: 0.85, season: null },
  { sourceRegionId: "RO", destinationId: "BG-RILA", weight: 0.42, season: null },
  { sourceRegionId: "RS", destinationId: "BG-RILA", weight: 0.38, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BG-RILA", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BG-RILA", weight: 0.22, season: null },

  // ----------------------------------------
  // AL-GJIROKASTER (UNESCO city, Albania)
  // ----------------------------------------
  { sourceRegionId: "RS", destinationId: "AL-GJIROKASTER", weight: 0.55, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AL-GJIROKASTER", weight: 0.38, season: null },
  { sourceRegionId: "DE-BY", destinationId: "AL-GJIROKASTER", weight: 0.28, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "AL-GJIROKASTER", weight: 0.32, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "AL-GJIROKASTER", weight: 0.22, season: null },

  // ----------------------------------------
  // ME-TIVAT (Montenegro, Bay of Kotor)
  // ----------------------------------------
  { sourceRegionId: "RS", destinationId: "ME-TIVAT", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "ME-TIVAT", weight: 0.52, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "ME-TIVAT", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "ME-TIVAT", weight: 0.38, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "ME-TIVAT", weight: 0.30, season: "summer" },
  { sourceRegionId: "AT-W", destinationId: "ME-TIVAT", weight: 0.28, season: "summer" },
];
