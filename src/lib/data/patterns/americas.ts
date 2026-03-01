import type { TravelPattern } from "@/types";

// Travel patterns for Americas
// US: Mexico (#1), Caribbean, Europe (UK, France, Italy), Hawaii, domestic
// Canada: US (#1), Mexico, Caribbean, Europe
// Mexico: Domestic, US
// Brazil: Domestic (NE coast, Florianopolis), Argentina, Chile, Portugal, US
// Argentina: Brazil (#1), Chile, Uruguay, domestic (Bariloche, Patagonia), Europe
// Colombia: US, Mexico, Panama, Spain, domestic
// Chile: Argentina, Brazil, Peru, domestic (Atacama, ski)
// Peru: Chile, Brazil, US, domestic (Cusco)

export const travelPatterns: TravelPattern[] = [
  // ========================================
  // US NORTHEAST -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "US-NE", destinationId: "US-FLORIDA", weight: 0.80, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-CALIFORNIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-HAWAII", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-LAS-VEGAS", weight: 0.50, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-NATIONAL-PARKS", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-COLORADO-SKI", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-UTAH-NP", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "CA-NIAGARA", weight: 0.42, season: "summer" },
  // Caribbean / Mexico
  { sourceRegionId: "US-NE", destinationId: "MX-CANCUN", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "DO-PUNTA-CANA", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "JM-MONTEGO-BAY", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "CR-COSTA-RICA", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "CU-CUBA", weight: 0.30, season: "winter" },
  // Europe
  { sourceRegionId: "US-NE", destinationId: "GB-LONDON", weight: 0.60, season: null },
  { sourceRegionId: "US-NE", destinationId: "FR-PARIS", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "IT-ROME", weight: 0.50, season: null },
  { sourceRegionId: "US-NE", destinationId: "ES-BARCELONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "IT-AMALFI", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "GR-SANTORINI", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "IS-GOLDEN-CIRCLE", weight: 0.32, season: "summer" },
  // South America
  { sourceRegionId: "US-NE", destinationId: "CO-CARTAGENA", weight: 0.32, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "PE-CUSCO", weight: 0.30, season: null },

  // ========================================
  // US SOUTHEAST -> DESTINATIONS
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "MX-CANCUN", weight: 0.75, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "US-LAS-VEGAS", weight: 0.50, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-NYC", weight: 0.48, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-HAWAII", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "US-COLORADO-SKI", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "US-CALIFORNIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "US-NATIONAL-PARKS", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "DO-PUNTA-CANA", weight: 0.50, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "JM-MONTEGO-BAY", weight: 0.48, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CR-COSTA-RICA", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CU-CUBA", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "MX-LOS-CABOS", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "US-SE", destinationId: "FR-PARIS", weight: 0.38, season: null },
  { sourceRegionId: "US-SE", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "US-SE", destinationId: "CO-CARTAGENA", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "BR-RIO", weight: 0.28, season: null },

  // ========================================
  // US MIDWEST -> DESTINATIONS
  // ========================================
  { sourceRegionId: "US-MW", destinationId: "MX-CANCUN", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-FLORIDA", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-LAS-VEGAS", weight: 0.55, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-HAWAII", weight: 0.48, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-COLORADO-SKI", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-CALIFORNIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-NATIONAL-PARKS", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-NYC", weight: 0.45, season: null },
  { sourceRegionId: "US-MW", destinationId: "DO-PUNTA-CANA", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "JM-MONTEGO-BAY", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "CR-COSTA-RICA", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "MX-PUERTO-VALLARTA", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "US-MW", destinationId: "FR-PARIS", weight: 0.35, season: null },
  { sourceRegionId: "US-MW", destinationId: "IT-ROME", weight: 0.32, season: null },
  { sourceRegionId: "US-MW", destinationId: "CA-BANFF", weight: 0.32, season: "winter" },

  // ========================================
  // US SOUTHWEST -> DESTINATIONS
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "MX-LOS-CABOS", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "MX-PUERTO-VALLARTA", weight: 0.62, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "MX-CANCUN", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-HAWAII", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-LAS-VEGAS", weight: 0.60, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-CALIFORNIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-SW", destinationId: "US-COLORADO-SKI", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-UTAH-NP", weight: 0.52, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-NATIONAL-PARKS", weight: 0.48, season: "summer" },
  { sourceRegionId: "US-SW", destinationId: "US-NYC", weight: 0.42, season: null },
  { sourceRegionId: "US-SW", destinationId: "MX-CDMX", weight: 0.42, season: null },
  { sourceRegionId: "US-SW", destinationId: "CR-COSTA-RICA", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "DO-PUNTA-CANA", weight: 0.32, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "GB-LONDON", weight: 0.38, season: null },
  { sourceRegionId: "US-SW", destinationId: "FR-PARIS", weight: 0.32, season: null },
  { sourceRegionId: "US-SW", destinationId: "IT-ROME", weight: 0.30, season: null },

  // ========================================
  // US WEST -> DESTINATIONS
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-HAWAII", weight: 0.75, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-LOS-CABOS", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-PUERTO-VALLARTA", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-CANCUN", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "US-LAS-VEGAS", weight: 0.62, season: null },
  { sourceRegionId: "US-W", destinationId: "US-NATIONAL-PARKS", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "US-COLORADO-SKI", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "US-UTAH-NP", weight: 0.48, season: null },
  { sourceRegionId: "US-W", destinationId: "US-NYC", weight: 0.50, season: null },
  { sourceRegionId: "US-W", destinationId: "CA-WHISTLER", weight: 0.48, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "CA-BANFF", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "JP-TOKYO", weight: 0.42, season: null },
  { sourceRegionId: "US-W", destinationId: "TH-BANGKOK", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "GB-LONDON", weight: 0.45, season: null },
  { sourceRegionId: "US-W", destinationId: "FR-PARIS", weight: 0.40, season: null },
  { sourceRegionId: "US-W", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "US-W", destinationId: "ID-BALI", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "CR-COSTA-RICA", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "CO-CARTAGENA", weight: 0.30, season: "winter" },

  // ========================================
  // EASTERN CANADA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CA-EAST", destinationId: "US-FLORIDA", weight: 0.75, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-CANCUN", weight: 0.72, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CU-CUBA", weight: 0.58, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "DO-PUNTA-CANA", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "JM-MONTEGO-BAY", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-LAS-VEGAS", weight: 0.45, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-NYC", weight: 0.50, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-HAWAII", weight: 0.40, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CA-BANFF", weight: 0.42, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "CA-NIAGARA", weight: 0.38, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "CR-COSTA-RICA", weight: 0.40, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "GB-LONDON", weight: 0.48, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "FR-PARIS", weight: 0.42, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "PT-ALGARVE", weight: 0.32, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "ES-BARCELONA", weight: 0.30, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-PUERTO-VALLARTA", weight: 0.38, season: "winter" },

  // ========================================
  // WESTERN CANADA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CA-WEST", destinationId: "US-HAWAII", weight: 0.72, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "MX-LOS-CABOS", weight: 0.65, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "MX-PUERTO-VALLARTA", weight: 0.62, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "MX-CANCUN", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "CU-CUBA", weight: 0.48, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-LAS-VEGAS", weight: 0.55, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-CALIFORNIA", weight: 0.52, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "CA-WHISTLER", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "CA-BANFF", weight: 0.52, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-COLORADO-SKI", weight: 0.42, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "DO-PUNTA-CANA", weight: 0.40, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "CR-COSTA-RICA", weight: 0.40, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "JP-TOKYO", weight: 0.38, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "TH-BANGKOK", weight: 0.32, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "GB-LONDON", weight: 0.42, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "FR-PARIS", weight: 0.35, season: null },

  // ========================================
  // MEXICO -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "MX", destinationId: "MX-CANCUN", weight: 0.78, season: "winter" },
  { sourceRegionId: "MX", destinationId: "MX-LOS-CABOS", weight: 0.62, season: null },
  { sourceRegionId: "MX", destinationId: "MX-PUERTO-VALLARTA", weight: 0.60, season: null },
  { sourceRegionId: "MX", destinationId: "MX-OAXACA", weight: 0.48, season: null },
  { sourceRegionId: "MX", destinationId: "MX-CDMX", weight: 0.42, season: null },
  // International
  { sourceRegionId: "MX", destinationId: "US-NYC", weight: 0.52, season: null },
  { sourceRegionId: "MX", destinationId: "US-LAS-VEGAS", weight: 0.48, season: null },
  { sourceRegionId: "MX", destinationId: "US-CALIFORNIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "MX", destinationId: "US-FLORIDA", weight: 0.42, season: "winter" },
  { sourceRegionId: "MX", destinationId: "FR-PARIS", weight: 0.35, season: null },
  { sourceRegionId: "MX", destinationId: "ES-BARCELONA", weight: 0.32, season: "summer" },
  { sourceRegionId: "MX", destinationId: "IT-ROME", weight: 0.30, season: null },
  { sourceRegionId: "MX", destinationId: "GB-LONDON", weight: 0.30, season: null },
  { sourceRegionId: "MX", destinationId: "CO-CARTAGENA", weight: 0.28, season: "winter" },
  { sourceRegionId: "MX", destinationId: "CU-CUBA", weight: 0.25, season: "winter" },

  // ========================================
  // SOUTHEAST BRAZIL -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "BR-SE", destinationId: "BR-NORTHEAST", weight: 0.72, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "BR-FLORIANOPOLIS", weight: 0.68, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "BR-RIO", weight: 0.55, season: null },
  { sourceRegionId: "BR-SE", destinationId: "BR-NORONHA", weight: 0.42, season: null },
  // International
  { sourceRegionId: "BR-SE", destinationId: "AR-BUENOS-AIRES", weight: 0.55, season: null },
  { sourceRegionId: "BR-SE", destinationId: "CL-VALLE-NEVADO", weight: 0.35, season: "winter" },
  { sourceRegionId: "BR-SE", destinationId: "PT-LISBON", weight: 0.52, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "PT-ALGARVE", weight: 0.40, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "US-FLORIDA", weight: 0.48, season: null },
  { sourceRegionId: "BR-SE", destinationId: "US-NYC", weight: 0.42, season: null },
  { sourceRegionId: "BR-SE", destinationId: "FR-PARIS", weight: 0.40, season: null },
  { sourceRegionId: "BR-SE", destinationId: "IT-ROME", weight: 0.35, season: null },
  { sourceRegionId: "BR-SE", destinationId: "MX-CANCUN", weight: 0.35, season: "winter" },
  { sourceRegionId: "BR-SE", destinationId: "PE-CUSCO", weight: 0.30, season: null },
  { sourceRegionId: "BR-SE", destinationId: "CO-CARTAGENA", weight: 0.28, season: null },

  // ========================================
  // NORTHEAST BRAZIL -> DESTINATIONS
  // ========================================
  { sourceRegionId: "BR-NE", destinationId: "BR-RIO", weight: 0.60, season: null },
  { sourceRegionId: "BR-NE", destinationId: "BR-NORONHA", weight: 0.52, season: null },
  { sourceRegionId: "BR-NE", destinationId: "BR-FLORIANOPOLIS", weight: 0.42, season: "summer" },
  { sourceRegionId: "BR-NE", destinationId: "BR-NORTHEAST", weight: 0.48, season: "summer" },
  { sourceRegionId: "BR-NE", destinationId: "AR-BUENOS-AIRES", weight: 0.40, season: null },
  { sourceRegionId: "BR-NE", destinationId: "PT-LISBON", weight: 0.45, season: "summer" },
  { sourceRegionId: "BR-NE", destinationId: "US-FLORIDA", weight: 0.38, season: null },
  { sourceRegionId: "BR-NE", destinationId: "US-NYC", weight: 0.32, season: null },
  { sourceRegionId: "BR-NE", destinationId: "FR-PARIS", weight: 0.30, season: null },
  { sourceRegionId: "BR-NE", destinationId: "MX-CANCUN", weight: 0.28, season: "winter" },

  // ========================================
  // ARGENTINA -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "AR", destinationId: "AR-BARILOCHE", weight: 0.68, season: "winter" },
  { sourceRegionId: "AR", destinationId: "AR-PATAGONIA", weight: 0.55, season: "summer" },
  { sourceRegionId: "AR", destinationId: "AR-MENDOZA", weight: 0.50, season: null },
  // International
  { sourceRegionId: "AR", destinationId: "BR-RIO", weight: 0.62, season: "summer" },
  { sourceRegionId: "AR", destinationId: "BR-FLORIANOPOLIS", weight: 0.52, season: "summer" },
  { sourceRegionId: "AR", destinationId: "BR-NORTHEAST", weight: 0.42, season: "summer" },
  { sourceRegionId: "AR", destinationId: "CL-ATACAMA", weight: 0.35, season: null },
  { sourceRegionId: "AR", destinationId: "CL-TORRES", weight: 0.32, season: "summer" },
  { sourceRegionId: "AR", destinationId: "PE-CUSCO", weight: 0.35, season: null },
  { sourceRegionId: "AR", destinationId: "CO-CARTAGENA", weight: 0.30, season: "winter" },
  { sourceRegionId: "AR", destinationId: "MX-CANCUN", weight: 0.40, season: "winter" },
  { sourceRegionId: "AR", destinationId: "US-FLORIDA", weight: 0.42, season: null },
  { sourceRegionId: "AR", destinationId: "US-NYC", weight: 0.38, season: null },
  { sourceRegionId: "AR", destinationId: "ES-BARCELONA", weight: 0.42, season: "summer" },
  { sourceRegionId: "AR", destinationId: "IT-ROME", weight: 0.38, season: null },
  { sourceRegionId: "AR", destinationId: "FR-PARIS", weight: 0.35, season: null },

  // ========================================
  // COLOMBIA -> DESTINATIONS
  // ========================================
  { sourceRegionId: "CO", destinationId: "CO-CARTAGENA", weight: 0.65, season: null },
  { sourceRegionId: "CO", destinationId: "US-FLORIDA", weight: 0.55, season: null },
  { sourceRegionId: "CO", destinationId: "US-NYC", weight: 0.45, season: null },
  { sourceRegionId: "CO", destinationId: "MX-CANCUN", weight: 0.52, season: null },
  { sourceRegionId: "CO", destinationId: "MX-CDMX", weight: 0.38, season: null },
  { sourceRegionId: "CO", destinationId: "ES-BARCELONA", weight: 0.40, season: "summer" },
  { sourceRegionId: "CO", destinationId: "FR-PARIS", weight: 0.32, season: null },
  { sourceRegionId: "CO", destinationId: "PE-CUSCO", weight: 0.30, season: null },
  { sourceRegionId: "CO", destinationId: "AR-BUENOS-AIRES", weight: 0.32, season: null },
  { sourceRegionId: "CO", destinationId: "BR-RIO", weight: 0.28, season: null },
  { sourceRegionId: "CO", destinationId: "DO-PUNTA-CANA", weight: 0.38, season: null },
  { sourceRegionId: "CO", destinationId: "CR-COSTA-RICA", weight: 0.30, season: null },

  // ========================================
  // CHILE -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "CL", destinationId: "CL-ATACAMA", weight: 0.52, season: null },
  { sourceRegionId: "CL", destinationId: "CL-TORRES", weight: 0.48, season: "summer" },
  { sourceRegionId: "CL", destinationId: "CL-VALLE-NEVADO", weight: 0.55, season: "winter" },
  // International
  { sourceRegionId: "CL", destinationId: "AR-BUENOS-AIRES", weight: 0.62, season: null },
  { sourceRegionId: "CL", destinationId: "AR-BARILOCHE", weight: 0.45, season: "winter" },
  { sourceRegionId: "CL", destinationId: "AR-MENDOZA", weight: 0.48, season: null },
  { sourceRegionId: "CL", destinationId: "BR-RIO", weight: 0.45, season: "summer" },
  { sourceRegionId: "CL", destinationId: "PE-CUSCO", weight: 0.40, season: null },
  { sourceRegionId: "CL", destinationId: "CO-CARTAGENA", weight: 0.32, season: null },
  { sourceRegionId: "CL", destinationId: "MX-CANCUN", weight: 0.38, season: "winter" },
  { sourceRegionId: "CL", destinationId: "US-FLORIDA", weight: 0.35, season: null },
  { sourceRegionId: "CL", destinationId: "ES-BARCELONA", weight: 0.35, season: "summer" },
  { sourceRegionId: "CL", destinationId: "FR-PARIS", weight: 0.32, season: null },

  // ========================================
  // PERU -> DESTINATIONS
  // ========================================
  // Domestic
  { sourceRegionId: "PE", destinationId: "PE-CUSCO", weight: 0.65, season: null },
  { sourceRegionId: "PE", destinationId: "PE-LIMA", weight: 0.42, season: null },
  // International
  { sourceRegionId: "PE", destinationId: "CL-ATACAMA", weight: 0.35, season: null },
  { sourceRegionId: "PE", destinationId: "AR-BUENOS-AIRES", weight: 0.38, season: null },
  { sourceRegionId: "PE", destinationId: "BR-RIO", weight: 0.32, season: "summer" },
  { sourceRegionId: "PE", destinationId: "CO-CARTAGENA", weight: 0.35, season: null },
  { sourceRegionId: "PE", destinationId: "MX-CANCUN", weight: 0.38, season: "winter" },
  { sourceRegionId: "PE", destinationId: "US-FLORIDA", weight: 0.38, season: null },
  { sourceRegionId: "PE", destinationId: "US-NYC", weight: 0.32, season: null },
  { sourceRegionId: "PE", destinationId: "ES-BARCELONA", weight: 0.32, season: "summer" },
  { sourceRegionId: "PE", destinationId: "EC-GALAPAGOS", weight: 0.28, season: null },
  { sourceRegionId: "PE", destinationId: "FR-PARIS", weight: 0.28, season: null },
];
