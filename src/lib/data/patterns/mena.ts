import type { TravelPattern } from "@/types";

// Travel patterns for Turkey, Russia, Middle East & North Africa
// Russia: Turkey #1, Egypt, UAE, Thailand, Spain, Italy, Greece, Maldives
// Gulf states: Egypt, Turkey, Georgia, Maldives, UK, France, Indonesia
// Israel: Greece, Italy, Turkey, Thailand, Portugal, Georgia

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // WESTERN TURKEY (source) -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "TR-WEST", destinationId: "TR-ANTALYA", weight: 0.72, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "TR-BODRUM", weight: 0.65, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "TR-DALAMAN", weight: 0.55, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "TR-CAPPADOCIA", weight: 0.50, season: null },
  // International
  { sourceRegionId: "TR-WEST", destinationId: "GR-CRETE", weight: 0.45, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "GR-RHODES", weight: 0.42, season: "summer" },
  { sourceRegionId: "TR-WEST", destinationId: "IT-ROME", weight: 0.42, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "FR-PARIS", weight: 0.40, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "ES-BARCELONA", weight: 0.38, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "AE-DUBAI", weight: 0.48, season: "winter" },
  { sourceRegionId: "TR-WEST", destinationId: "EG-HURGHADA", weight: 0.42, season: "winter" },
  { sourceRegionId: "TR-WEST", destinationId: "GE-TBILISI", weight: 0.40, season: null },
  { sourceRegionId: "TR-WEST", destinationId: "GE-BATUMI", weight: 0.38, season: "summer" },

  // ========================================
  // EASTERN TURKEY (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "TR-EAST", destinationId: "TR-ANTALYA", weight: 0.70, season: "summer" },
  { sourceRegionId: "TR-EAST", destinationId: "TR-BODRUM", weight: 0.55, season: "summer" },
  { sourceRegionId: "TR-EAST", destinationId: "TR-CAPPADOCIA", weight: 0.48, season: null },
  { sourceRegionId: "TR-EAST", destinationId: "TR-ISTANBUL", weight: 0.55, season: null },
  { sourceRegionId: "TR-EAST", destinationId: "AE-DUBAI", weight: 0.42, season: "winter" },
  { sourceRegionId: "TR-EAST", destinationId: "EG-HURGHADA", weight: 0.38, season: "winter" },
  { sourceRegionId: "TR-EAST", destinationId: "GE-TBILISI", weight: 0.42, season: null },
  { sourceRegionId: "TR-EAST", destinationId: "GE-BATUMI", weight: 0.40, season: "summer" },
  { sourceRegionId: "TR-EAST", destinationId: "GR-CRETE", weight: 0.38, season: "summer" },

  // ========================================
  // MOSCOW (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "RU-MOW", destinationId: "TR-ANTALYA", weight: 0.85, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "TR-BODRUM", weight: 0.60, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "TR-ISTANBUL", weight: 0.55, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "EG-HURGHADA", weight: 0.72, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "EG-SHARM", weight: 0.62, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "AE-DUBAI", weight: 0.60, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "GR-RHODES", weight: 0.48, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "ES-COSTA-DEL-SOL", weight: 0.48, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "IT-ROME", weight: 0.45, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "CY-COAST", weight: 0.52, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "ME-COAST", weight: 0.45, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "GE-TBILISI", weight: 0.50, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "GE-BATUMI", weight: 0.48, season: "summer" },
  { sourceRegionId: "RU-MOW", destinationId: "MV-MALDIVES", weight: 0.45, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "LK-SRI-LANKA", weight: 0.38, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "FR-PARIS", weight: 0.40, season: null },
  { sourceRegionId: "RU-MOW", destinationId: "BG-BLACK-SEA", weight: 0.42, season: "summer" },

  // ========================================
  // ST. PETERSBURG (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "RU-SPE", destinationId: "TR-ANTALYA", weight: 0.82, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "EG-HURGHADA", weight: 0.68, season: "winter" },
  { sourceRegionId: "RU-SPE", destinationId: "EG-SHARM", weight: 0.58, season: "winter" },
  { sourceRegionId: "RU-SPE", destinationId: "AE-DUBAI", weight: 0.55, season: "winter" },
  { sourceRegionId: "RU-SPE", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "CY-COAST", weight: 0.48, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "GE-TBILISI", weight: 0.48, season: null },
  { sourceRegionId: "RU-SPE", destinationId: "GE-BATUMI", weight: 0.45, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "ES-COSTA-DEL-SOL", weight: 0.42, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "IT-ROME", weight: 0.40, season: null },
  { sourceRegionId: "RU-SPE", destinationId: "MV-MALDIVES", weight: 0.40, season: "winter" },
  { sourceRegionId: "RU-SPE", destinationId: "FI-LAPLAND", weight: 0.35, season: "winter" },
  { sourceRegionId: "RU-SPE", destinationId: "BG-BLACK-SEA", weight: 0.40, season: "summer" },
  { sourceRegionId: "RU-SPE", destinationId: "ME-COAST", weight: 0.42, season: "summer" },

  // ========================================
  // UKRAINE (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "UA", destinationId: "TR-ANTALYA", weight: 0.78, season: "summer" },
  { sourceRegionId: "UA", destinationId: "EG-HURGHADA", weight: 0.62, season: "winter" },
  { sourceRegionId: "UA", destinationId: "EG-SHARM", weight: 0.52, season: "winter" },
  { sourceRegionId: "UA", destinationId: "GR-CRETE", weight: 0.50, season: "summer" },
  { sourceRegionId: "UA", destinationId: "ES-COSTA-DEL-SOL", weight: 0.42, season: "summer" },
  { sourceRegionId: "UA", destinationId: "BG-BLACK-SEA", weight: 0.52, season: "summer" },
  { sourceRegionId: "UA", destinationId: "GE-TBILISI", weight: 0.48, season: null },
  { sourceRegionId: "UA", destinationId: "GE-BATUMI", weight: 0.45, season: "summer" },
  { sourceRegionId: "UA", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "UA", destinationId: "AE-DUBAI", weight: 0.42, season: "winter" },
  { sourceRegionId: "UA", destinationId: "CY-COAST", weight: 0.42, season: "summer" },
  { sourceRegionId: "UA", destinationId: "ME-COAST", weight: 0.40, season: "summer" },

  // ========================================
  // ISRAEL (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IL", destinationId: "GR-CRETE", weight: 0.62, season: "summer" },
  { sourceRegionId: "IL", destinationId: "GR-SANTORINI", weight: 0.48, season: "summer" },
  { sourceRegionId: "IL", destinationId: "GR-MYKONOS", weight: 0.45, season: "summer" },
  { sourceRegionId: "IL", destinationId: "GR-RHODES", weight: 0.50, season: "summer" },
  { sourceRegionId: "IL", destinationId: "IT-ROME", weight: 0.52, season: null },
  { sourceRegionId: "IL", destinationId: "IT-TUSCANY", weight: 0.40, season: "summer" },
  { sourceRegionId: "IL", destinationId: "TR-ISTANBUL", weight: 0.55, season: null },
  { sourceRegionId: "IL", destinationId: "TR-ANTALYA", weight: 0.48, season: "summer" },
  { sourceRegionId: "IL", destinationId: "CY-COAST", weight: 0.52, season: "summer" },
  { sourceRegionId: "IL", destinationId: "PT-LISBON", weight: 0.45, season: null },
  { sourceRegionId: "IL", destinationId: "PT-ALGARVE", weight: 0.42, season: "summer" },
  { sourceRegionId: "IL", destinationId: "ES-BARCELONA", weight: 0.48, season: null },
  { sourceRegionId: "IL", destinationId: "GE-TBILISI", weight: 0.50, season: null },
  { sourceRegionId: "IL", destinationId: "GE-BATUMI", weight: 0.42, season: "summer" },
  { sourceRegionId: "IL", destinationId: "FR-PARIS", weight: 0.45, season: null },
  { sourceRegionId: "IL", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "IL", destinationId: "MV-MALDIVES", weight: 0.35, season: "winter" },

  // ========================================
  // UAE (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "AE", destinationId: "EG-CAIRO", weight: 0.55, season: null },
  { sourceRegionId: "AE", destinationId: "EG-HURGHADA", weight: 0.48, season: null },
  { sourceRegionId: "AE", destinationId: "TR-ISTANBUL", weight: 0.55, season: null },
  { sourceRegionId: "AE", destinationId: "GE-TBILISI", weight: 0.52, season: "summer" },
  { sourceRegionId: "AE", destinationId: "GE-BATUMI", weight: 0.45, season: "summer" },
  { sourceRegionId: "AE", destinationId: "MV-MALDIVES", weight: 0.55, season: "winter" },
  { sourceRegionId: "AE", destinationId: "SC-SEYCHELLES", weight: 0.45, season: null },
  { sourceRegionId: "AE", destinationId: "LK-SRI-LANKA", weight: 0.42, season: "winter" },
  { sourceRegionId: "AE", destinationId: "GB-LONDON", weight: 0.58, season: "summer" },
  { sourceRegionId: "AE", destinationId: "FR-PARIS", weight: 0.52, season: "summer" },
  { sourceRegionId: "AE", destinationId: "ES-BARCELONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AE", destinationId: "IT-ROME", weight: 0.40, season: null },
  { sourceRegionId: "AE", destinationId: "OM-MUSCAT", weight: 0.42, season: "winter" },
  { sourceRegionId: "AE", destinationId: "JO-PETRA", weight: 0.38, season: null },

  // ========================================
  // SAUDI ARABIA (source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SA", destinationId: "AE-DUBAI", weight: 0.62, season: null },
  { sourceRegionId: "SA", destinationId: "EG-CAIRO", weight: 0.52, season: null },
  { sourceRegionId: "SA", destinationId: "TR-ISTANBUL", weight: 0.55, season: null },
  { sourceRegionId: "SA", destinationId: "MV-MALDIVES", weight: 0.50, season: "winter" },
  { sourceRegionId: "SA", destinationId: "GE-TBILISI", weight: 0.48, season: "summer" },
  { sourceRegionId: "SA", destinationId: "GB-LONDON", weight: 0.55, season: "summer" },
  { sourceRegionId: "SA", destinationId: "FR-PARIS", weight: 0.50, season: "summer" },
  { sourceRegionId: "SA", destinationId: "ES-BARCELONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "SA", destinationId: "MA-MARRAKECH", weight: 0.42, season: null },
  { sourceRegionId: "SA", destinationId: "SC-SEYCHELLES", weight: 0.40, season: null },
  { sourceRegionId: "SA", destinationId: "LK-SRI-LANKA", weight: 0.38, season: "winter" },
  { sourceRegionId: "SA", destinationId: "JO-PETRA", weight: 0.40, season: null },

  // ========================================
  // EGYPT (domestic source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "EG", destinationId: "EG-HURGHADA", weight: 0.68, season: "summer" },
  { sourceRegionId: "EG", destinationId: "EG-SHARM", weight: 0.62, season: "summer" },
  { sourceRegionId: "EG", destinationId: "EG-LUXOR", weight: 0.50, season: "winter" },
  { sourceRegionId: "EG", destinationId: "AE-DUBAI", weight: 0.45, season: null },
  { sourceRegionId: "EG", destinationId: "TR-ISTANBUL", weight: 0.42, season: null },
  { sourceRegionId: "EG", destinationId: "MA-MARRAKECH", weight: 0.32, season: null },

  // ========================================
  // MOROCCO (domestic source) -> DESTINATIONS
  // ========================================
  { sourceRegionId: "MA", destinationId: "MA-AGADIR", weight: 0.65, season: "summer" },
  { sourceRegionId: "MA", destinationId: "MA-ESSAOUIRA", weight: 0.55, season: null },
  { sourceRegionId: "MA", destinationId: "MA-FES", weight: 0.45, season: null },
  { sourceRegionId: "MA", destinationId: "ES-BARCELONA", weight: 0.42, season: null },
  { sourceRegionId: "MA", destinationId: "FR-PARIS", weight: 0.52, season: null },
  { sourceRegionId: "MA", destinationId: "TR-ISTANBUL", weight: 0.38, season: null },
  { sourceRegionId: "MA", destinationId: "AE-DUBAI", weight: 0.35, season: "winter" },
  { sourceRegionId: "MA", destinationId: "EG-CAIRO", weight: 0.32, season: null },

  // ========================================
  // INBOUND: Existing regions -> new MENA destinations
  // ========================================
  // Europeans to Istanbul
  { sourceRegionId: "DE-BY", destinationId: "TR-ISTANBUL", weight: 0.42, season: null },
  { sourceRegionId: "DE-NW", destinationId: "TR-ISTANBUL", weight: 0.40, season: null },
  { sourceRegionId: "DE-BE", destinationId: "TR-ISTANBUL", weight: 0.42, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "TR-ISTANBUL", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "TR-ISTANBUL", weight: 0.42, season: null },
  { sourceRegionId: "NL-CENTRAL", destinationId: "TR-ISTANBUL", weight: 0.38, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "TR-ISTANBUL", weight: 0.35, season: null },
  { sourceRegionId: "ES-MADRID", destinationId: "TR-ISTANBUL", weight: 0.32, season: null },

  // Europeans to Dubai
  { sourceRegionId: "GB-ENG", destinationId: "AE-DUBAI", weight: 0.55, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "AE-DUBAI", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "AE-DUBAI", weight: 0.35, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "AE-DUBAI", weight: 0.40, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "AE-DUBAI", weight: 0.35, season: "winter" },
  { sourceRegionId: "RU-MOW", destinationId: "AE-ABU-DHABI", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "AE-ABU-DHABI", weight: 0.30, season: "winter" },

  // Europeans to Cairo & Egypt cultural
  { sourceRegionId: "GB-ENG", destinationId: "EG-CAIRO", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "EG-CAIRO", weight: 0.30, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "EG-CAIRO", weight: 0.32, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "EG-CAIRO", weight: 0.28, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "EG-LUXOR", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "EG-LUXOR", weight: 0.25, season: "winter" },

  // Europeans to Maldives (luxury winter escape)
  { sourceRegionId: "GB-ENG", destinationId: "MV-MALDIVES", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MV-MALDIVES", weight: 0.32, season: "winter" },
  { sourceRegionId: "CH-ZH", destinationId: "MV-MALDIVES", weight: 0.35, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "MV-MALDIVES", weight: 0.30, season: "winter" },
  { sourceRegionId: "AT-9", destinationId: "MV-MALDIVES", weight: 0.28, season: "winter" },

  // Europeans to Sri Lanka
  { sourceRegionId: "GB-ENG", destinationId: "LK-SRI-LANKA", weight: 0.35, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "LK-SRI-LANKA", weight: 0.28, season: "winter" },

  // Europeans to Georgia (emerging destination)
  { sourceRegionId: "PL", destinationId: "GE-TBILISI", weight: 0.35, season: null },
  { sourceRegionId: "DE-BE", destinationId: "GE-TBILISI", weight: 0.28, season: null },
  { sourceRegionId: "LT", destinationId: "GE-TBILISI", weight: 0.32, season: null },

  // Europeans to Jordan
  { sourceRegionId: "GB-ENG", destinationId: "JO-PETRA", weight: 0.32, season: null },
  { sourceRegionId: "DE-BY", destinationId: "JO-PETRA", weight: 0.28, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "JO-PETRA", weight: 0.25, season: null },

  // French to Morocco (strong cultural ties)
  { sourceRegionId: "FR-ZC", destinationId: "MA-FES", weight: 0.40, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "MA-FES", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "MA-FES", weight: 0.32, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "MA-ESSAOUIRA", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "MA-ESSAOUIRA", weight: 0.30, season: null },

  // French to Tunisia
  { sourceRegionId: "FR-ZC", destinationId: "TN-TUNIS", weight: 0.35, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "TN-TUNIS", weight: 0.30, season: null },

  // Europeans to Cappadocia
  { sourceRegionId: "GB-ENG", destinationId: "TR-CAPPADOCIA", weight: 0.32, season: null },
  { sourceRegionId: "DE-BY", destinationId: "TR-CAPPADOCIA", weight: 0.28, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "TR-CAPPADOCIA", weight: 0.25, season: null },

  // Seychelles (luxury)
  { sourceRegionId: "GB-ENG", destinationId: "SC-SEYCHELLES", weight: 0.30, season: "winter" },
  { sourceRegionId: "FR-ZC", destinationId: "SC-SEYCHELLES", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "SC-SEYCHELLES", weight: 0.25, season: "winter" },
  { sourceRegionId: "IT-NORTH", destinationId: "SC-SEYCHELLES", weight: 0.25, season: "winter" },

  // Europeans to Tel Aviv and Jerusalem
  { sourceRegionId: "GB-ENG", destinationId: "IL-TEL-AVIV", weight: 0.35, season: null },
  { sourceRegionId: "DE-BY", destinationId: "IL-TEL-AVIV", weight: 0.28, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "IL-TEL-AVIV", weight: 0.30, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IL-JERUSALEM", weight: 0.30, season: null },
  { sourceRegionId: "IT-NORTH", destinationId: "IL-JERUSALEM", weight: 0.25, season: null },

  // Muscat
  { sourceRegionId: "GB-ENG", destinationId: "OM-MUSCAT", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "OM-MUSCAT", weight: 0.22, season: "winter" },
];
