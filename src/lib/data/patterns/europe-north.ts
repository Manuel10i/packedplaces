import type { TravelPattern } from "@/types";

// Travel patterns for Northern & Western Europe
// UK: Spain #1, France, Italy, Greece, Turkey, Portugal, USA patterns
// Nordics: Spain/Canaries, Greece, Turkey, Thailand (winter escape)

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // ENGLAND -> DESTINATIONS
  // ========================================
  // Spain is #1 destination for UK tourists
  { sourceRegionId: "GB-ENG", destinationId: "ES-COSTA-DEL-SOL", weight: 0.90, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-COSTA-BLANCA", weight: 0.80, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-MALLORCA", weight: 0.85, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-IBIZA", weight: 0.75, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-CANARY", weight: 0.80, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-TENERIFE", weight: 0.78, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-LANZAROTE", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-FUERTEVENTURA", weight: 0.65, season: "winter" },
  { sourceRegionId: "GB-ENG", destinationId: "ES-BARCELONA", weight: 0.72, season: null },
  // France
  { sourceRegionId: "GB-ENG", destinationId: "FR-COTE-AZUR", weight: 0.70, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-PARIS", weight: 0.75, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "FR-NORMANDY", weight: 0.50, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-BRITTANY", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "FR-ALPS", weight: 0.65, season: "winter" },
  // Italy
  { sourceRegionId: "GB-ENG", destinationId: "IT-ROME", weight: 0.72, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-VENICE", weight: 0.55, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "IT-TUSCANY", weight: 0.58, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-AMALFI", weight: 0.62, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-SARDINIA", weight: 0.50, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-SICILY", weight: 0.48, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "IT-PUGLIA", weight: 0.45, season: "summer" },
  // Greece
  { sourceRegionId: "GB-ENG", destinationId: "GR-CRETE", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-CORFU", weight: 0.62, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-RHODES", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-KOS", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-ZAKYNTHOS", weight: 0.58, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GR-SANTORINI", weight: 0.52, season: "summer" },
  // Turkey
  { sourceRegionId: "GB-ENG", destinationId: "TR-ANTALYA", weight: 0.70, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "TR-BODRUM", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "TR-DALAMAN", weight: 0.58, season: "summer" },
  // Portugal
  { sourceRegionId: "GB-ENG", destinationId: "PT-ALGARVE", weight: 0.75, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "PT-LISBON", weight: 0.58, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "PT-MADEIRA", weight: 0.48, season: null },
  // Domestic
  { sourceRegionId: "GB-ENG", destinationId: "GB-CORNWALL", weight: 0.65, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GB-HIGHLANDS", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "GB-LONDON", weight: 0.35, season: null },
  // Egypt
  { sourceRegionId: "GB-ENG", destinationId: "EG-HURGHADA", weight: 0.52, season: null },
  { sourceRegionId: "GB-ENG", destinationId: "EG-SHARM", weight: 0.48, season: null },
  // Morocco
  { sourceRegionId: "GB-ENG", destinationId: "MA-MARRAKECH", weight: 0.48, season: null },
  // Cyprus & Malta
  { sourceRegionId: "GB-ENG", destinationId: "CY-COAST", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-ENG", destinationId: "MT-MALTA", weight: 0.42, season: "summer" },
  // Croatia
  { sourceRegionId: "GB-ENG", destinationId: "HR-DALMATIA", weight: 0.50, season: "summer" },
  // Iceland
  { sourceRegionId: "GB-ENG", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.35, season: "summer" },

  // ========================================
  // SCOTLAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "GB-SCT", destinationId: "ES-COSTA-DEL-SOL", weight: 0.85, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "ES-MALLORCA", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "ES-CANARY", weight: 0.75, season: "winter" },
  { sourceRegionId: "GB-SCT", destinationId: "ES-TENERIFE", weight: 0.70, season: "winter" },
  { sourceRegionId: "GB-SCT", destinationId: "GR-CRETE", weight: 0.62, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "PT-ALGARVE", weight: 0.65, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "FR-PARIS", weight: 0.50, season: null },
  { sourceRegionId: "GB-SCT", destinationId: "IT-ROME", weight: 0.48, season: null },
  { sourceRegionId: "GB-SCT", destinationId: "GB-LONDON", weight: 0.55, season: null },
  { sourceRegionId: "GB-SCT", destinationId: "GB-HIGHLANDS", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "GB-CORNWALL", weight: 0.40, season: "summer" },
  { sourceRegionId: "GB-SCT", destinationId: "EG-HURGHADA", weight: 0.45, season: null },

  // ========================================
  // WALES -> DESTINATIONS
  // ========================================
  { sourceRegionId: "GB-WLS", destinationId: "ES-COSTA-DEL-SOL", weight: 0.82, season: "summer" },
  { sourceRegionId: "GB-WLS", destinationId: "ES-MALLORCA", weight: 0.70, season: "summer" },
  { sourceRegionId: "GB-WLS", destinationId: "ES-CANARY", weight: 0.72, season: "winter" },
  { sourceRegionId: "GB-WLS", destinationId: "GR-CRETE", weight: 0.58, season: "summer" },
  { sourceRegionId: "GB-WLS", destinationId: "TR-ANTALYA", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-WLS", destinationId: "PT-ALGARVE", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-WLS", destinationId: "FR-PARIS", weight: 0.48, season: null },
  { sourceRegionId: "GB-WLS", destinationId: "GB-LONDON", weight: 0.50, season: null },
  { sourceRegionId: "GB-WLS", destinationId: "GB-CORNWALL", weight: 0.52, season: "summer" },

  // ========================================
  // NORTHERN IRELAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "GB-NIR", destinationId: "ES-COSTA-DEL-SOL", weight: 0.78, season: "summer" },
  { sourceRegionId: "GB-NIR", destinationId: "ES-CANARY", weight: 0.70, season: "winter" },
  { sourceRegionId: "GB-NIR", destinationId: "PT-ALGARVE", weight: 0.58, season: "summer" },
  { sourceRegionId: "GB-NIR", destinationId: "GR-CRETE", weight: 0.52, season: "summer" },
  { sourceRegionId: "GB-NIR", destinationId: "TR-ANTALYA", weight: 0.50, season: "summer" },
  { sourceRegionId: "GB-NIR", destinationId: "GB-LONDON", weight: 0.55, season: null },
  { sourceRegionId: "GB-NIR", destinationId: "IE-WILD-ATLANTIC", weight: 0.45, season: "summer" },

  // ========================================
  // IRELAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IE", destinationId: "ES-COSTA-DEL-SOL", weight: 0.82, season: "summer" },
  { sourceRegionId: "IE", destinationId: "ES-MALLORCA", weight: 0.68, season: "summer" },
  { sourceRegionId: "IE", destinationId: "ES-CANARY", weight: 0.75, season: "winter" },
  { sourceRegionId: "IE", destinationId: "ES-TENERIFE", weight: 0.68, season: "winter" },
  { sourceRegionId: "IE", destinationId: "ES-LANZAROTE", weight: 0.60, season: "winter" },
  { sourceRegionId: "IE", destinationId: "PT-ALGARVE", weight: 0.70, season: "summer" },
  { sourceRegionId: "IE", destinationId: "PT-LISBON", weight: 0.52, season: null },
  { sourceRegionId: "IE", destinationId: "FR-PARIS", weight: 0.55, season: null },
  { sourceRegionId: "IE", destinationId: "FR-COTE-AZUR", weight: 0.50, season: "summer" },
  { sourceRegionId: "IE", destinationId: "IT-ROME", weight: 0.52, season: null },
  { sourceRegionId: "IE", destinationId: "IT-TUSCANY", weight: 0.45, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GR-CRETE", weight: 0.58, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GR-RHODES", weight: 0.48, season: "summer" },
  { sourceRegionId: "IE", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GB-LONDON", weight: 0.60, season: null },
  { sourceRegionId: "IE", destinationId: "IE-WILD-ATLANTIC", weight: 0.55, season: "summer" },
  { sourceRegionId: "IE", destinationId: "EG-HURGHADA", weight: 0.42, season: null },
  { sourceRegionId: "IE", destinationId: "CY-COAST", weight: 0.40, season: "summer" },

  // ========================================
  // DENMARK -> DESTINATIONS
  // ========================================
  { sourceRegionId: "DK", destinationId: "ES-COSTA-DEL-SOL", weight: 0.75, season: "summer" },
  { sourceRegionId: "DK", destinationId: "ES-MALLORCA", weight: 0.72, season: "summer" },
  { sourceRegionId: "DK", destinationId: "ES-CANARY", weight: 0.70, season: "winter" },
  { sourceRegionId: "DK", destinationId: "ES-TENERIFE", weight: 0.62, season: "winter" },
  { sourceRegionId: "DK", destinationId: "GR-CRETE", weight: 0.65, season: "summer" },
  { sourceRegionId: "DK", destinationId: "GR-RHODES", weight: 0.55, season: "summer" },
  { sourceRegionId: "DK", destinationId: "TR-ANTALYA", weight: 0.60, season: "summer" },
  { sourceRegionId: "DK", destinationId: "IT-ROME", weight: 0.50, season: null },
  { sourceRegionId: "DK", destinationId: "IT-TUSCANY", weight: 0.45, season: "summer" },
  { sourceRegionId: "DK", destinationId: "FR-PARIS", weight: 0.48, season: null },
  { sourceRegionId: "DK", destinationId: "PT-ALGARVE", weight: 0.55, season: "summer" },
  { sourceRegionId: "DK", destinationId: "DK-JUTLAND", weight: 0.50, season: "summer" },
  { sourceRegionId: "DK", destinationId: "DK-RIVIERA", weight: 0.45, season: "summer" },
  { sourceRegionId: "DK", destinationId: "NO-FJORDS", weight: 0.40, season: "summer" },
  { sourceRegionId: "DK", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.55, season: "winter" },
  { sourceRegionId: "DK", destinationId: "AT-TYROL-ZILLERTAL", weight: 0.48, season: "winter" },
  { sourceRegionId: "DK", destinationId: "EG-HURGHADA", weight: 0.42, season: "winter" },

  // ========================================
  // SOUTHERN SWEDEN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.72, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-MALLORCA", weight: 0.68, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-CANARY", weight: 0.72, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "ES-TENERIFE", weight: 0.65, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "GR-CRETE", weight: 0.65, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "GR-RHODES", weight: 0.58, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "IT-ROME", weight: 0.48, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "PT-ALGARVE", weight: 0.50, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "HR-DALMATIA", weight: 0.48, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.52, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "FR-ALPS", weight: 0.45, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-FJORDS", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "DK-RIVIERA", weight: 0.35, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "EG-HURGHADA", weight: 0.40, season: "winter" },

  // ========================================
  // NORTHERN SWEDEN -> DESTINATIONS
  // ========================================
  { sourceRegionId: "SE-NORTH", destinationId: "ES-CANARY", weight: 0.75, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "ES-TENERIFE", weight: 0.68, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.65, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "ES-MALLORCA", weight: 0.60, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "GR-CRETE", weight: 0.58, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "SE-LAPLAND", weight: 0.55, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "FI-LAPLAND", weight: 0.40, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "NO-LOFOTEN", weight: 0.42, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.48, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "EG-HURGHADA", weight: 0.42, season: "winter" },

  // ========================================
  // SOUTHERN NORWAY -> DESTINATIONS
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.72, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-MALLORCA", weight: 0.65, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-CANARY", weight: 0.75, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "ES-TENERIFE", weight: 0.68, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "GR-CRETE", weight: 0.62, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "GR-RHODES", weight: 0.52, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "IT-ROME", weight: 0.48, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "GB-LONDON", weight: 0.48, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-FJORDS", weight: 0.55, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-LOFOTEN", weight: 0.48, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.55, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "FR-ALPS", weight: 0.48, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "PT-ALGARVE", weight: 0.50, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "HR-DALMATIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "DK-JUTLAND", weight: 0.38, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "EG-HURGHADA", weight: 0.40, season: "winter" },

  // ========================================
  // NORTHERN NORWAY -> DESTINATIONS
  // ========================================
  { sourceRegionId: "NO-NORTH", destinationId: "ES-CANARY", weight: 0.78, season: "winter" },
  { sourceRegionId: "NO-NORTH", destinationId: "ES-TENERIFE", weight: 0.70, season: "winter" },
  { sourceRegionId: "NO-NORTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.62, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "TR-ANTALYA", weight: 0.52, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-LOFOTEN", weight: 0.60, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-FJORDS", weight: 0.48, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "SE-LAPLAND", weight: 0.42, season: "winter" },
  { sourceRegionId: "NO-NORTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.50, season: "winter" },
  { sourceRegionId: "NO-NORTH", destinationId: "EG-HURGHADA", weight: 0.45, season: "winter" },

  // ========================================
  // SOUTHERN FINLAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "FI-SOUTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.68, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "ES-MALLORCA", weight: 0.62, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "ES-CANARY", weight: 0.72, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "ES-TENERIFE", weight: 0.65, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "GR-CRETE", weight: 0.62, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "GR-RHODES", weight: 0.55, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "TR-ANTALYA", weight: 0.58, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "IT-ROME", weight: 0.45, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "HU-BUDAPEST", weight: 0.35, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "FI-LAPLAND", weight: 0.55, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "SE-LAPLAND", weight: 0.40, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.50, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "FR-ALPS", weight: 0.42, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "EG-HURGHADA", weight: 0.45, season: "winter" },
  { sourceRegionId: "FI-SOUTH", destinationId: "PT-ALGARVE", weight: 0.45, season: "summer" },

  // ========================================
  // NORTHERN FINLAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "FI-NORTH", destinationId: "ES-CANARY", weight: 0.75, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "ES-TENERIFE", weight: 0.68, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "ES-COSTA-DEL-SOL", weight: 0.60, season: "summer" },
  { sourceRegionId: "FI-NORTH", destinationId: "GR-CRETE", weight: 0.55, season: "summer" },
  { sourceRegionId: "FI-NORTH", destinationId: "TR-ANTALYA", weight: 0.50, season: "summer" },
  { sourceRegionId: "FI-NORTH", destinationId: "FI-LAPLAND", weight: 0.60, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "SE-LAPLAND", weight: 0.45, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "NO-LOFOTEN", weight: 0.38, season: "summer" },
  { sourceRegionId: "FI-NORTH", destinationId: "AT-TYROL-INNSBRUCK", weight: 0.45, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "EG-HURGHADA", weight: 0.48, season: "winter" },

  // ========================================
  // ICELAND -> DESTINATIONS
  // ========================================
  { sourceRegionId: "IS", destinationId: "ES-CANARY", weight: 0.72, season: "winter" },
  { sourceRegionId: "IS", destinationId: "ES-TENERIFE", weight: 0.65, season: "winter" },
  { sourceRegionId: "IS", destinationId: "ES-COSTA-DEL-SOL", weight: 0.58, season: "summer" },
  { sourceRegionId: "IS", destinationId: "ES-MALLORCA", weight: 0.52, season: "summer" },
  { sourceRegionId: "IS", destinationId: "GB-LONDON", weight: 0.55, season: null },
  { sourceRegionId: "IS", destinationId: "DK-RIVIERA", weight: 0.35, season: "summer" },
  { sourceRegionId: "IS", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "IS", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.45, season: "summer" },
  { sourceRegionId: "IS", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "IS", destinationId: "GR-CRETE", weight: 0.45, season: "summer" },
  { sourceRegionId: "IS", destinationId: "PT-ALGARVE", weight: 0.42, season: "summer" },

  // ========================================
  // INBOUND: Central European regions -> new UK/Nordic destinations
  // ========================================
  // Germans to London
  { sourceRegionId: "DE-BY", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "DE-NW", destinationId: "GB-LONDON", weight: 0.48, season: null },
  { sourceRegionId: "DE-BE", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "DE-HE", destinationId: "GB-LONDON", weight: 0.40, season: null },
  { sourceRegionId: "DE-BW", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "DE-HH", destinationId: "GB-LONDON", weight: 0.45, season: null },
  // Germans/Dutch to Scandinavian nature
  { sourceRegionId: "DE-SH", destinationId: "NO-FJORDS", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-FJORDS", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "NO-FJORDS", weight: 0.40, season: "summer" },
  { sourceRegionId: "DE-SH", destinationId: "SE-LAPLAND", weight: 0.30, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "NO-FJORDS", weight: 0.35, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "SE-LAPLAND", weight: 0.28, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "FI-LAPLAND", weight: 0.30, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "GB-LONDON", weight: 0.55, season: null },
  { sourceRegionId: "NL-SOUTH", destinationId: "GB-LONDON", weight: 0.52, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "GB-LONDON", weight: 0.48, season: null },
  // Dutch to Scandinavian nature
  { sourceRegionId: "NL-CENTRAL", destinationId: "NO-FJORDS", weight: 0.38, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "NO-FJORDS", weight: 0.35, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "FI-LAPLAND", weight: 0.30, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "FI-LAPLAND", weight: 0.28, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "SE-LAPLAND", weight: 0.28, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "SE-LAPLAND", weight: 0.26, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.32, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.30, season: "summer" },
  // Dutch/Belgian to Iceland
  { sourceRegionId: "BE", destinationId: "GB-LONDON", weight: 0.58, season: null },
  { sourceRegionId: "BE", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.28, season: "summer" },
  // Swiss to London
  { sourceRegionId: "CH-ZH", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "CH-BE", destinationId: "GB-LONDON", weight: 0.38, season: null },
  // French to London and UK
  { sourceRegionId: "FR-ZC", destinationId: "GB-LONDON", weight: 0.55, season: null },
  { sourceRegionId: "FR-ZB", destinationId: "GB-LONDON", weight: 0.48, season: null },
  { sourceRegionId: "FR-ZA", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "FR-ZC", destinationId: "GB-CORNWALL", weight: 0.25, season: "summer" },
  // French to Scandinavian nature
  { sourceRegionId: "FR-ZC", destinationId: "NO-FJORDS", weight: 0.32, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.30, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "NO-FJORDS", weight: 0.28, season: "summer" },
  { sourceRegionId: "FR-ZB", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.28, season: "summer" },
  // Austria to London
  { sourceRegionId: "AT-9", destinationId: "GB-LONDON", weight: 0.40, season: null },
  // Czech/Polish to London
  { sourceRegionId: "CZ", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "PL", destinationId: "GB-LONDON", weight: 0.48, season: null },
  // Germans/others to Lanzarote and Puglia
  { sourceRegionId: "DE-NW", destinationId: "ES-LANZAROTE", weight: 0.45, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "ES-LANZAROTE", weight: 0.42, season: "winter" },
  { sourceRegionId: "DE-BW", destinationId: "ES-LANZAROTE", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-HE", destinationId: "ES-LANZAROTE", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "ES-LANZAROTE", weight: 0.40, season: "winter" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "ES-LANZAROTE", weight: 0.42, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "ES-LANZAROTE", weight: 0.40, season: "winter" },
  { sourceRegionId: "BE", destinationId: "ES-LANZAROTE", weight: 0.38, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "IT-PUGLIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-BW", destinationId: "IT-PUGLIA", weight: 0.32, season: "summer" },
  { sourceRegionId: "AT-9", destinationId: "IT-PUGLIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "CH-ZH", destinationId: "IT-PUGLIA", weight: 0.30, season: "summer" },
  { sourceRegionId: "FR-ZA", destinationId: "IT-PUGLIA", weight: 0.28, season: "summer" },
  // Germans to Ireland
  { sourceRegionId: "DE-NW", destinationId: "IE-WILD-ATLANTIC", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "IE-WILD-ATLANTIC", weight: 0.25, season: "summer" },
  { sourceRegionId: "DE-BE", destinationId: "IE-WILD-ATLANTIC", weight: 0.22, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "IE-WILD-ATLANTIC", weight: 0.25, season: "summer" },
  { sourceRegionId: "FR-ZC", destinationId: "IE-WILD-ATLANTIC", weight: 0.22, season: "summer" },
  // Germans to Scottish Highlands
  { sourceRegionId: "DE-NW", destinationId: "GB-HIGHLANDS", weight: 0.25, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GB-HIGHLANDS", weight: 0.22, season: "summer" },
  { sourceRegionId: "NL-CENTRAL", destinationId: "GB-HIGHLANDS", weight: 0.20, season: "summer" },
  // Germans to Danish Riviera
  { sourceRegionId: "DE-SH", destinationId: "DK-RIVIERA", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-HH", destinationId: "DK-RIVIERA", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "DK-RIVIERA", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-MV", destinationId: "DK-RIVIERA", weight: 0.25, season: "summer" },

  // ========================================
  // GB-EDINBURGH -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-SCOTLAND", destinationId: "GB-EDINBURGH", weight: 0.90, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-EDINBURGH", weight: 0.70, season: null },
  { sourceRegionId: "GB-NORTH", destinationId: "GB-EDINBURGH", weight: 0.60, season: null },
  { sourceRegionId: "IE", destinationId: "GB-EDINBURGH", weight: 0.30, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-EDINBURGH", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-EDINBURGH", weight: 0.25, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-EDINBURGH", weight: 0.22, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "GB-EDINBURGH", weight: 0.20, season: "summer" },

  // ========================================
  // GB-BATH -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GB-BATH", weight: 0.70, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-BATH", weight: 0.55, season: null },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-BATH", weight: 0.45, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-BATH", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-WEST", destinationId: "GB-BATH", weight: 0.25, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GB-BATH", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-BY", destinationId: "GB-BATH", weight: 0.20, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-BATH", weight: 0.22, season: "summer" },

  // ========================================
  // GB-LAKE-DISTRICT -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-NORTH", destinationId: "GB-LAKE-DISTRICT", weight: 0.75, season: "summer" },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-LAKE-DISTRICT", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-LAKE-DISTRICT", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-SCOTLAND", destinationId: "GB-LAKE-DISTRICT", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-LAKE-DISTRICT", weight: 0.25, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-LAKE-DISTRICT", weight: 0.18, season: "summer" },

  // ========================================
  // GB-YORK -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-NORTH", destinationId: "GB-YORK", weight: 0.72, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-YORK", weight: 0.55, season: null },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-YORK", weight: 0.48, season: null },
  { sourceRegionId: "GB-SCOTLAND", destinationId: "GB-YORK", weight: 0.35, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-YORK", weight: 0.28, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GB-YORK", weight: 0.20, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "GB-YORK", weight: 0.18, season: "summer" },

  // ========================================
  // GB-COTSWOLDS -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GB-COTSWOLDS", weight: 0.75, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-COTSWOLDS", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-COTSWOLDS", weight: 0.50, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-COTSWOLDS", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-WEST", destinationId: "GB-COTSWOLDS", weight: 0.28, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GB-COTSWOLDS", weight: 0.25, season: "summer" },
  { sourceRegionId: "JP", destinationId: "GB-COTSWOLDS", weight: 0.20, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-COTSWOLDS", weight: 0.22, season: "summer" },

  // ========================================
  // GB-BRIGHTON -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GB-BRIGHTON", weight: 0.80, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-BRIGHTON", weight: 0.60, season: "summer" },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-BRIGHTON", weight: 0.38, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-BRIGHTON", weight: 0.30, season: "summer" },
  { sourceRegionId: "NL-SOUTH", destinationId: "GB-BRIGHTON", weight: 0.20, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-BRIGHTON", weight: 0.18, season: "summer" },

  // ========================================
  // GB-GLASGOW -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-SCOTLAND", destinationId: "GB-GLASGOW", weight: 0.85, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-GLASGOW", weight: 0.55, season: null },
  { sourceRegionId: "GB-NORTH", destinationId: "GB-GLASGOW", weight: 0.50, season: null },
  { sourceRegionId: "IE", destinationId: "GB-GLASGOW", weight: 0.35, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-GLASGOW", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-GLASGOW", weight: 0.18, season: "summer" },

  // ========================================
  // IE-DUBLIN -> inbound patterns
  // ========================================
  { sourceRegionId: "IE", destinationId: "IE-DUBLIN", weight: 0.90, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "IE-DUBLIN", weight: 0.60, season: null },
  { sourceRegionId: "GB-NORTH", destinationId: "IE-DUBLIN", weight: 0.40, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IE-DUBLIN", weight: 0.40, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "IE-DUBLIN", weight: 0.20, season: null },
  { sourceRegionId: "DE-NW", destinationId: "IE-DUBLIN", weight: 0.25, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "IE-DUBLIN", weight: 0.22, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "IE-DUBLIN", weight: 0.28, season: "summer" },

  // ========================================
  // IE-GALWAY -> inbound patterns
  // ========================================
  { sourceRegionId: "IE", destinationId: "IE-GALWAY", weight: 0.85, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IE-GALWAY", weight: 0.40, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IE-GALWAY", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IE-GALWAY", weight: 0.20, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IE-GALWAY", weight: 0.18, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "IE-GALWAY", weight: 0.22, season: "summer" },

  // ========================================
  // IE-KERRY -> inbound patterns
  // ========================================
  { sourceRegionId: "IE", destinationId: "IE-KERRY", weight: 0.80, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IE-KERRY", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IE-KERRY", weight: 0.42, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IE-KERRY", weight: 0.18, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "IE-KERRY", weight: 0.25, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IE-KERRY", weight: 0.15, season: "summer" },

  // ========================================
  // SE-STOCKHOLM -> inbound patterns
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "SE-STOCKHOLM", weight: 0.90, season: null },
  { sourceRegionId: "SE-NORTH", destinationId: "SE-STOCKHOLM", weight: 0.70, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "SE-STOCKHOLM", weight: 0.40, season: null },
  { sourceRegionId: "FI-SOUTH", destinationId: "SE-STOCKHOLM", weight: 0.40, season: null },
  { sourceRegionId: "DK", destinationId: "SE-STOCKHOLM", weight: 0.50, season: null },
  { sourceRegionId: "DE-NI", destinationId: "SE-STOCKHOLM", weight: 0.30, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "SE-STOCKHOLM", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "SE-STOCKHOLM", weight: 0.32, season: null },

  // ========================================
  // SE-GOTHENBURG -> inbound patterns
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "SE-GOTHENBURG", weight: 0.80, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "SE-GOTHENBURG", weight: 0.50, season: null },
  { sourceRegionId: "DK", destinationId: "SE-GOTHENBURG", weight: 0.55, season: null },
  { sourceRegionId: "DE-NI", destinationId: "SE-GOTHENBURG", weight: 0.28, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "SE-GOTHENBURG", weight: 0.22, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "SE-GOTHENBURG", weight: 0.25, season: null },

  // ========================================
  // SE-VISBY -> inbound patterns
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "SE-VISBY", weight: 0.85, season: "summer" },
  { sourceRegionId: "SE-NORTH", destinationId: "SE-VISBY", weight: 0.55, season: "summer" },
  { sourceRegionId: "DK", destinationId: "SE-VISBY", weight: 0.45, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "SE-VISBY", weight: 0.35, season: "summer" },
  { sourceRegionId: "FI-SOUTH", destinationId: "SE-VISBY", weight: 0.30, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "SE-VISBY", weight: 0.20, season: "summer" },

  // ========================================
  // NO-OSLO -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-OSLO", weight: 0.90, season: null },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-OSLO", weight: 0.70, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-OSLO", weight: 0.40, season: null },
  { sourceRegionId: "DK", destinationId: "NO-OSLO", weight: 0.40, season: null },
  { sourceRegionId: "DE-NI", destinationId: "NO-OSLO", weight: 0.20, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-OSLO", weight: 0.30, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NO-OSLO", weight: 0.25, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "NO-OSLO", weight: 0.22, season: null },

  // ========================================
  // NO-BERGEN -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-BERGEN", weight: 0.85, season: null },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-BERGEN", weight: 0.60, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-BERGEN", weight: 0.35, season: "summer" },
  { sourceRegionId: "DK", destinationId: "NO-BERGEN", weight: 0.38, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-BERGEN", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-BERGEN", weight: 0.32, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NO-BERGEN", weight: 0.28, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "NO-BERGEN", weight: 0.22, season: "summer" },

  // ========================================
  // NO-TROMSO -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-TROMSO", weight: 0.70, season: "winter" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-TROMSO", weight: 0.60, season: "winter" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-TROMSO", weight: 0.38, season: "winter" },
  { sourceRegionId: "DK", destinationId: "NO-TROMSO", weight: 0.35, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "NO-TROMSO", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-TROMSO", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NO-TROMSO", weight: 0.25, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "NO-TROMSO", weight: 0.30, season: "winter" },

  // ========================================
  // NO-STAVANGER -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-STAVANGER", weight: 0.80, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-STAVANGER", weight: 0.45, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-STAVANGER", weight: 0.30, season: "summer" },
  { sourceRegionId: "DK", destinationId: "NO-STAVANGER", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-STAVANGER", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-STAVANGER", weight: 0.20, season: "summer" },

  // ========================================
  // FI-HELSINKI -> inbound patterns
  // ========================================
  { sourceRegionId: "FI-SOUTH", destinationId: "FI-HELSINKI", weight: 0.90, season: null },
  { sourceRegionId: "FI-NORTH", destinationId: "FI-HELSINKI", weight: 0.70, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "FI-HELSINKI", weight: 0.30, season: null },
  { sourceRegionId: "DE-NI", destinationId: "FI-HELSINKI", weight: 0.20, season: null },
  { sourceRegionId: "JP", destinationId: "FI-HELSINKI", weight: 0.20, season: "summer" },
  { sourceRegionId: "DK", destinationId: "FI-HELSINKI", weight: 0.28, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "FI-HELSINKI", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "FI-HELSINKI", weight: 0.25, season: null },

  // ========================================
  // FI-ROVANIEMI -> inbound patterns
  // ========================================
  { sourceRegionId: "FI-SOUTH", destinationId: "FI-ROVANIEMI", weight: 0.80, season: "winter" },
  { sourceRegionId: "FI-NORTH", destinationId: "FI-ROVANIEMI", weight: 0.55, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "FI-ROVANIEMI", weight: 0.45, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "FI-ROVANIEMI", weight: 0.35, season: "winter" },
  { sourceRegionId: "JP", destinationId: "FI-ROVANIEMI", weight: 0.30, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "FI-ROVANIEMI", weight: 0.28, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "FI-ROVANIEMI", weight: 0.28, season: "winter" },
  { sourceRegionId: "NL-NORTH", destinationId: "FI-ROVANIEMI", weight: 0.25, season: "winter" },

  // ========================================
  // IS-AKUREYRI -> inbound patterns
  // ========================================
  { sourceRegionId: "IS", destinationId: "IS-AKUREYRI", weight: 0.80, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IS-AKUREYRI", weight: 0.30, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IS-AKUREYRI", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "IS-AKUREYRI", weight: 0.20, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IS-AKUREYRI", weight: 0.18, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "IS-AKUREYRI", weight: 0.18, season: "summer" },

  // ========================================
  // GB-JERSEY -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-JERSEY", weight: 0.65, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-JERSEY", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-JERSEY", weight: 0.40, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-JERSEY", weight: 0.35, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GB-JERSEY", weight: 0.25, season: "summer" },

  // ========================================
  // SE-ABISKO -> inbound patterns
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "SE-ABISKO", weight: 0.70, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "SE-ABISKO", weight: 0.55, season: "winter" },
  { sourceRegionId: "NO-SOUTH", destinationId: "SE-ABISKO", weight: 0.35, season: "winter" },
  { sourceRegionId: "DK", destinationId: "SE-ABISKO", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "SE-ABISKO", weight: 0.32, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "SE-ABISKO", weight: 0.28, season: "winter" },
  { sourceRegionId: "JP", destinationId: "SE-ABISKO", weight: 0.25, season: "winter" },

  // ========================================
  // NO-PREIKESTOLEN -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-PREIKESTOLEN", weight: 0.82, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-PREIKESTOLEN", weight: 0.45, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-PREIKESTOLEN", weight: 0.35, season: "summer" },
  { sourceRegionId: "DK", destinationId: "NO-PREIKESTOLEN", weight: 0.32, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-PREIKESTOLEN", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-PREIKESTOLEN", weight: 0.25, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NO-PREIKESTOLEN", weight: 0.22, season: "summer" },

  // ========================================
  // FI-LAKE-SAIMAA -> inbound patterns
  // ========================================
  { sourceRegionId: "FI-SOUTH", destinationId: "FI-LAKE-SAIMAA", weight: 0.85, season: "summer" },
  { sourceRegionId: "FI-NORTH", destinationId: "FI-LAKE-SAIMAA", weight: 0.50, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "FI-LAKE-SAIMAA", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "FI-LAKE-SAIMAA", weight: 0.18, season: "summer" },
  { sourceRegionId: "JP", destinationId: "FI-LAKE-SAIMAA", weight: 0.15, season: "summer" },

  // ========================================
  // DK-BORNHOLM -> inbound patterns
  // ========================================
  { sourceRegionId: "DK", destinationId: "DK-BORNHOLM", weight: 0.80, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "DK-BORNHOLM", weight: 0.55, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "DK-BORNHOLM", weight: 0.35, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "DK-BORNHOLM", weight: 0.28, season: "summer" },
  { sourceRegionId: "NO-SOUTH", destinationId: "DK-BORNHOLM", weight: 0.30, season: "summer" },
  { sourceRegionId: "NL-NORTH", destinationId: "DK-BORNHOLM", weight: 0.20, season: "summer" },

  // ========================================
  // GB-ISLE-OF-SKYE -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-SCOTLAND", destinationId: "GB-ISLE-OF-SKYE", weight: 0.85, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-ISLE-OF-SKYE", weight: 0.55, season: "summer" },
  { sourceRegionId: "GB-NORTH", destinationId: "GB-ISLE-OF-SKYE", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-ISLE-OF-SKYE", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-WEST", destinationId: "GB-ISLE-OF-SKYE", weight: 0.25, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GB-ISLE-OF-SKYE", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-ISLE-OF-SKYE", weight: 0.20, season: "summer" },

  // ========================================
  // NO-SVALBARD -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-SVALBARD", weight: 0.65, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-SVALBARD", weight: 0.50, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-SVALBARD", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-SVALBARD", weight: 0.30, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "NO-SVALBARD", weight: 0.25, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-SVALBARD", weight: 0.30, season: "summer" },

  // ========================================
  // IE-CLIFFS-MOHER -> inbound patterns
  // ========================================
  { sourceRegionId: "IE", destinationId: "IE-CLIFFS-MOHER", weight: 0.88, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "IE-CLIFFS-MOHER", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "IE-CLIFFS-MOHER", weight: 0.48, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "IE-CLIFFS-MOHER", weight: 0.22, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "IE-CLIFFS-MOHER", weight: 0.20, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "IE-CLIFFS-MOHER", weight: 0.28, season: "summer" },

  // ========================================
  // GB-WINDSOR -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "GB-WINDSOR", weight: 0.80, season: null },
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-WINDSOR", weight: 0.55, season: null },
  { sourceRegionId: "US-NORTHEAST", destinationId: "GB-WINDSOR", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-WEST", destinationId: "GB-WINDSOR", weight: 0.32, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "GB-WINDSOR", weight: 0.30, season: "summer" },
  { sourceRegionId: "JP", destinationId: "GB-WINDSOR", weight: 0.28, season: "summer" },
  { sourceRegionId: "CN-EAST", destinationId: "GB-WINDSOR", weight: 0.25, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "GB-WINDSOR", weight: 0.30, season: null },

  // ========================================
  // SE-ICEHOTEL -> inbound patterns
  // ========================================
  { sourceRegionId: "SE-SOUTH", destinationId: "SE-ICEHOTEL", weight: 0.65, season: "winter" },
  { sourceRegionId: "SE-NORTH", destinationId: "SE-ICEHOTEL", weight: 0.50, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "SE-ICEHOTEL", weight: 0.40, season: "winter" },
  { sourceRegionId: "DE-NI", destinationId: "SE-ICEHOTEL", weight: 0.30, season: "winter" },
  { sourceRegionId: "JP", destinationId: "SE-ICEHOTEL", weight: 0.28, season: "winter" },
  { sourceRegionId: "CN-EAST", destinationId: "SE-ICEHOTEL", weight: 0.25, season: "winter" },
  { sourceRegionId: "DK", destinationId: "SE-ICEHOTEL", weight: 0.32, season: "winter" },
  { sourceRegionId: "US-NORTHEAST", destinationId: "SE-ICEHOTEL", weight: 0.22, season: "winter" },

  // ========================================
  // GB-SNOWDONIA -> inbound patterns
  // ========================================
  { sourceRegionId: "GB-MIDLANDS", destinationId: "GB-SNOWDONIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "GB-NORTH", destinationId: "GB-SNOWDONIA", weight: 0.65, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "GB-SNOWDONIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "GB-SOUTH", destinationId: "GB-SNOWDONIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "IE", destinationId: "GB-SNOWDONIA", weight: 0.22, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "GB-SNOWDONIA", weight: 0.15, season: "summer" },

  // ========================================
  // NO-ATLANTIC-ROAD -> inbound patterns
  // ========================================
  { sourceRegionId: "NO-SOUTH", destinationId: "NO-ATLANTIC-ROAD", weight: 0.75, season: "summer" },
  { sourceRegionId: "NO-NORTH", destinationId: "NO-ATLANTIC-ROAD", weight: 0.50, season: "summer" },
  { sourceRegionId: "SE-SOUTH", destinationId: "NO-ATLANTIC-ROAD", weight: 0.30, season: "summer" },
  { sourceRegionId: "DK", destinationId: "NO-ATLANTIC-ROAD", weight: 0.28, season: "summer" },
  { sourceRegionId: "DE-NI", destinationId: "NO-ATLANTIC-ROAD", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "NO-ATLANTIC-ROAD", weight: 0.20, season: "summer" },

  // ========================================
  // DK-AARHUS -> inbound patterns
  // ========================================
  { sourceRegionId: "DK", destinationId: "DK-AARHUS", weight: 0.85, season: null },
  { sourceRegionId: "SE-SOUTH", destinationId: "DK-AARHUS", weight: 0.45, season: null },
  { sourceRegionId: "NO-SOUTH", destinationId: "DK-AARHUS", weight: 0.35, season: null },
  { sourceRegionId: "DE-NI", destinationId: "DK-AARHUS", weight: 0.30, season: null },
  { sourceRegionId: "DE-NW", destinationId: "DK-AARHUS", weight: 0.25, season: null },
  { sourceRegionId: "NL-NORTH", destinationId: "DK-AARHUS", weight: 0.20, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "DK-AARHUS", weight: 0.18, season: "summer" },
];
