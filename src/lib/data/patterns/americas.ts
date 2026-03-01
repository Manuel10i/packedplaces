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

  // ========================================
  // US CITIES — CHICAGO
  // ========================================
  { sourceRegionId: "US-MW", destinationId: "US-CHICAGO", weight: 0.90, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-CHICAGO", weight: 0.50, season: null },
  { sourceRegionId: "US-W", destinationId: "US-CHICAGO", weight: 0.30, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-CHICAGO", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-CHICAGO", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-CHICAGO", weight: 0.20, season: null },

  // ========================================
  // US CITIES — SAN FRANCISCO
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-SAN-FRANCISCO", weight: 0.85, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SAN-FRANCISCO", weight: 0.50, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-SAN-FRANCISCO", weight: 0.38, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-SAN-FRANCISCO", weight: 0.40, season: null },
  { sourceRegionId: "JP", destinationId: "US-SAN-FRANCISCO", weight: 0.30, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "US-SAN-FRANCISCO", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-SAN-FRANCISCO", weight: 0.25, season: null },

  // ========================================
  // US CITIES — WASHINGTON DC
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "US-WASHINGTON-DC", weight: 0.70, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-WASHINGTON-DC", weight: 0.55, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-WASHINGTON-DC", weight: 0.42, season: null },
  { sourceRegionId: "US-W", destinationId: "US-WASHINGTON-DC", weight: 0.35, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-WASHINGTON-DC", weight: 0.32, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-WASHINGTON-DC", weight: 0.22, season: null },

  // ========================================
  // US CITIES — NEW ORLEANS
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-NEW-ORLEANS", weight: 0.72, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-NEW-ORLEANS", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-NEW-ORLEANS", weight: 0.45, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-NEW-ORLEANS", weight: 0.40, season: null },
  { sourceRegionId: "US-W", destinationId: "US-NEW-ORLEANS", weight: 0.28, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-NEW-ORLEANS", weight: 0.25, season: null },

  // ========================================
  // US CITIES — NASHVILLE
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-NASHVILLE", weight: 0.70, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-NASHVILLE", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-NASHVILLE", weight: 0.42, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-NASHVILLE", weight: 0.35, season: null },
  { sourceRegionId: "US-W", destinationId: "US-NASHVILLE", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-NASHVILLE", weight: 0.18, season: null },

  // ========================================
  // US CITIES — BOSTON
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "US-BOSTON", weight: 0.80, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-BOSTON", weight: 0.40, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-BOSTON", weight: 0.38, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-BOSTON", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-BOSTON", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "US-BOSTON", weight: 0.25, season: null },

  // ========================================
  // US CITIES — SEATTLE
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-SEATTLE", weight: 0.82, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-SEATTLE", weight: 0.55, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SEATTLE", weight: 0.38, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-SEATTLE", weight: 0.32, season: null },
  { sourceRegionId: "JP", destinationId: "US-SEATTLE", weight: 0.28, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "US-SEATTLE", weight: 0.25, season: null },

  // ========================================
  // US CITIES — PORTLAND
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-PORTLAND", weight: 0.75, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-PORTLAND", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-PORTLAND", weight: 0.30, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-PORTLAND", weight: 0.28, season: null },
  { sourceRegionId: "JP", destinationId: "US-PORTLAND", weight: 0.20, season: null },

  // ========================================
  // US CITIES — CHARLESTON
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-CHARLESTON", weight: 0.70, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-CHARLESTON", weight: 0.48, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-CHARLESTON", weight: 0.35, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-CHARLESTON", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-CHARLESTON", weight: 0.18, season: null },

  // ========================================
  // US CITIES — SAVANNAH
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-SAVANNAH", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SAVANNAH", weight: 0.40, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-SAVANNAH", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-SAVANNAH", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-SAVANNAH", weight: 0.15, season: null },

  // ========================================
  // US CITIES — AUSTIN
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-AUSTIN", weight: 0.75, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-AUSTIN", weight: 0.55, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-AUSTIN", weight: 0.45, season: null },
  { sourceRegionId: "US-W", destinationId: "US-AUSTIN", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-AUSTIN", weight: 0.35, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "US-AUSTIN", weight: 0.22, season: null },

  // ========================================
  // US SKI — ASPEN
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-ASPEN", weight: 0.68, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-ASPEN", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-ASPEN", weight: 0.48, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-ASPEN", weight: 0.42, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-ASPEN", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-ASPEN", weight: 0.22, season: "winter" },

  // ========================================
  // US SKI — JACKSON HOLE
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-JACKSON-HOLE", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-JACKSON-HOLE", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-JACKSON-HOLE", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-JACKSON-HOLE", weight: 0.38, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-JACKSON-HOLE", weight: 0.28, season: "winter" },

  // ========================================
  // US SKI — LAKE TAHOE
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-LAKE-TAHOE", weight: 0.82, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-LAKE-TAHOE", weight: 0.50, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-LAKE-TAHOE", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-LAKE-TAHOE", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-LAKE-TAHOE", weight: 0.25, season: "winter" },

  // ========================================
  // US SKI — PARK CITY
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-PARK-CITY", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-PARK-CITY", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-PARK-CITY", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-PARK-CITY", weight: 0.35, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-PARK-CITY", weight: 0.28, season: "winter" },

  // ========================================
  // US NATURE — NAPA VALLEY
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-NAPA", weight: 0.75, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-NAPA", weight: 0.40, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-NAPA", weight: 0.35, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-NAPA", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-NAPA", weight: 0.22, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "US-NAPA", weight: 0.20, season: null },

  // ========================================
  // US NATURE — SEDONA
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-SEDONA", weight: 0.78, season: null },
  { sourceRegionId: "US-W", destinationId: "US-SEDONA", weight: 0.55, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-SEDONA", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SEDONA", weight: 0.35, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-SEDONA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-SEDONA", weight: 0.18, season: null },

  // ========================================
  // US NATURE — YELLOWSTONE
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-YELLOWSTONE", weight: 0.72, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-YELLOWSTONE", weight: 0.58, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-YELLOWSTONE", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-SW", destinationId: "US-YELLOWSTONE", weight: 0.38, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "US-YELLOWSTONE", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-YELLOWSTONE", weight: 0.20, season: "summer" },

  // ========================================
  // US NATURE — GRAND CANYON
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-GRAND-CANYON", weight: 0.80, season: null },
  { sourceRegionId: "US-W", destinationId: "US-GRAND-CANYON", weight: 0.65, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-GRAND-CANYON", weight: 0.48, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-GRAND-CANYON", weight: 0.42, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-GRAND-CANYON", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-GRAND-CANYON", weight: 0.28, season: null },
  { sourceRegionId: "DE-NW", destinationId: "US-GRAND-CANYON", weight: 0.22, season: null },

  // ========================================
  // US NATURE — ALASKA
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-ALASKA", weight: 0.65, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-ALASKA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-ALASKA", weight: 0.35, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "US-ALASKA", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-ALASKA", weight: 0.22, season: "summer" },
  { sourceRegionId: "AU-EAST", destinationId: "US-ALASKA", weight: 0.18, season: "summer" },

  // ========================================
  // US NATURE — ZION
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-ZION", weight: 0.75, season: null },
  { sourceRegionId: "US-W", destinationId: "US-ZION", weight: 0.62, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-ZION", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-ZION", weight: 0.38, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-ZION", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-ZION", weight: 0.22, season: null },

  // ========================================
  // US NATURE — BRYCE CANYON
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-BRYCE", weight: 0.65, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "US-BRYCE", weight: 0.52, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-BRYCE", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-BRYCE", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-BRYCE", weight: 0.20, season: "summer" },

  // ========================================
  // US NATURE — ACADIA
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "US-ACADIA", weight: 0.72, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "US-ACADIA", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "US-ACADIA", weight: 0.32, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-ACADIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-ACADIA", weight: 0.18, season: "summer" },

  // ========================================
  // US NATURE — GLACIER
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-GLACIER", weight: 0.68, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "US-GLACIER", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-GLACIER", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-GLACIER", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-GLACIER", weight: 0.20, season: "summer" },

  // ========================================
  // US NATURE — BIG SUR
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-BIG-SUR", weight: 0.78, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-BIG-SUR", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-BIG-SUR", weight: 0.35, season: null },
  { sourceRegionId: "US-MW", destinationId: "US-BIG-SUR", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "US-BIG-SUR", weight: 0.20, season: null },

  // ========================================
  // US BEACH — KEY WEST
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-KEY-WEST", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-KEY-WEST", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-KEY-WEST", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-KEY-WEST", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "US-KEY-WEST", weight: 0.25, season: "winter" },

  // ========================================
  // US BEACH — OUTER BANKS
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "US-OUTER-BANKS", weight: 0.65, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "US-OUTER-BANKS", weight: 0.55, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-OUTER-BANKS", weight: 0.35, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "US-OUTER-BANKS", weight: 0.22, season: "summer" },

  // ========================================
  // US BEACH — CAPE COD
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "US-CAPE-COD", weight: 0.78, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "US-CAPE-COD", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "US-CAPE-COD", weight: 0.30, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-CAPE-COD", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-CAPE-COD", weight: 0.18, season: "summer" },

  // ========================================
  // US ISLAND — MAUI
  // ========================================
  { sourceRegionId: "US-W", destinationId: "US-MAUI", weight: 0.80, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-MAUI", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-MAUI", weight: 0.52, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-MAUI", weight: 0.45, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-MAUI", weight: 0.40, season: "winter" },
  { sourceRegionId: "JP", destinationId: "US-MAUI", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "US-MAUI", weight: 0.22, season: null },

  // ========================================
  // US BEACH — MIAMI BEACH
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "US-MIAMI-BEACH", weight: 0.80, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "US-MIAMI-BEACH", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-MIAMI-BEACH", weight: 0.60, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-MIAMI-BEACH", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "US-MIAMI-BEACH", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-MIAMI-BEACH", weight: 0.28, season: "winter" },
  { sourceRegionId: "BR-SE", destinationId: "US-MIAMI-BEACH", weight: 0.25, season: null },

  // ========================================
  // US DESERT — JOSHUA TREE
  // ========================================
  { sourceRegionId: "US-SW", destinationId: "US-JOSHUA-TREE", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "US-JOSHUA-TREE", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-JOSHUA-TREE", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-JOSHUA-TREE", weight: 0.22, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-JOSHUA-TREE", weight: 0.20, season: "winter" },

  // ========================================
  // CANADA — VANCOUVER
  // ========================================
  { sourceRegionId: "CA-WEST", destinationId: "CA-VANCOUVER", weight: 0.90, season: null },
  { sourceRegionId: "US-W", destinationId: "CA-VANCOUVER", weight: 0.50, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "CA-VANCOUVER", weight: 0.40, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CA-VANCOUVER", weight: 0.30, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "CA-VANCOUVER", weight: 0.30, season: null },
  { sourceRegionId: "JP", destinationId: "CA-VANCOUVER", weight: 0.20, season: null },

  // ========================================
  // CANADA — MONTREAL
  // ========================================
  { sourceRegionId: "CA-EAST", destinationId: "CA-MONTREAL", weight: 0.85, season: null },
  { sourceRegionId: "US-NE", destinationId: "CA-MONTREAL", weight: 0.55, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "CA-MONTREAL", weight: 0.38, season: null },
  { sourceRegionId: "US-MW", destinationId: "CA-MONTREAL", weight: 0.30, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-MONTREAL", weight: 0.22, season: null },

  // ========================================
  // CANADA — QUEBEC CITY
  // ========================================
  { sourceRegionId: "CA-EAST", destinationId: "CA-QUEBEC-CITY", weight: 0.80, season: null },
  { sourceRegionId: "US-NE", destinationId: "CA-QUEBEC-CITY", weight: 0.50, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "CA-QUEBEC-CITY", weight: 0.35, season: null },
  { sourceRegionId: "US-MW", destinationId: "CA-QUEBEC-CITY", weight: 0.28, season: null },
  { sourceRegionId: "US-SE", destinationId: "CA-QUEBEC-CITY", weight: 0.22, season: null },

  // ========================================
  // CANADA — TORONTO
  // ========================================
  { sourceRegionId: "CA-EAST", destinationId: "CA-TORONTO", weight: 0.85, season: null },
  { sourceRegionId: "US-NE", destinationId: "CA-TORONTO", weight: 0.55, season: null },
  { sourceRegionId: "US-MW", destinationId: "CA-TORONTO", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-TORONTO", weight: 0.30, season: null },
  { sourceRegionId: "US-SE", destinationId: "CA-TORONTO", weight: 0.28, season: null },
  { sourceRegionId: "CN-EAST", destinationId: "CA-TORONTO", weight: 0.25, season: null },

  // ========================================
  // CANADA — PRINCE EDWARD ISLAND
  // ========================================
  { sourceRegionId: "CA-EAST", destinationId: "CA-PEI", weight: 0.70, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CA-PEI", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-PEI", weight: 0.22, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "CA-PEI", weight: 0.18, season: "summer" },

  // ========================================
  // MEXICO — TULUM
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "MX-TULUM", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-TULUM", weight: 0.40, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-TULUM", weight: 0.50, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-TULUM", weight: 0.40, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MX-TULUM", weight: 0.20, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "MX-TULUM", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "MX-TULUM", weight: 0.32, season: "winter" },

  // ========================================
  // MEXICO — RIVIERA MAYA
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "MX-RIVIERA-MAYA", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "MX-RIVIERA-MAYA", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "MX-RIVIERA-MAYA", weight: 0.50, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-RIVIERA-MAYA", weight: 0.45, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-RIVIERA-MAYA", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-RIVIERA-MAYA", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MX-RIVIERA-MAYA", weight: 0.22, season: "winter" },

  // ========================================
  // MEXICO — GUADALAJARA
  // ========================================
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-GUADALAJARA", weight: 0.72, season: null },
  { sourceRegionId: "US-SW", destinationId: "MX-GUADALAJARA", weight: 0.45, season: null },
  { sourceRegionId: "US-W", destinationId: "MX-GUADALAJARA", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "MX-GUADALAJARA", weight: 0.25, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "MX-GUADALAJARA", weight: 0.22, season: null },

  // ========================================
  // MEXICO — MERIDA
  // ========================================
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-MERIDA", weight: 0.65, season: null },
  { sourceRegionId: "US-SW", destinationId: "MX-MERIDA", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "MX-MERIDA", weight: 0.30, season: null },
  { sourceRegionId: "US-SE", destinationId: "MX-MERIDA", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "MX-MERIDA", weight: 0.18, season: null },

  // ========================================
  // MEXICO — SAN MIGUEL DE ALLENDE
  // ========================================
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-SAN-MIGUEL", weight: 0.62, season: null },
  { sourceRegionId: "US-SW", destinationId: "MX-SAN-MIGUEL", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "MX-SAN-MIGUEL", weight: 0.38, season: null },
  { sourceRegionId: "US-W", destinationId: "MX-SAN-MIGUEL", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "MX-SAN-MIGUEL", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "MX-SAN-MIGUEL", weight: 0.20, season: null },

  // ========================================
  // MEXICO — SAYULITA
  // ========================================
  { sourceRegionId: "US-W", destinationId: "MX-SAYULITA", weight: 0.55, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-SAYULITA", weight: 0.48, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "MX-SAYULITA", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "MX-SAYULITA", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "MX-SAYULITA", weight: 0.28, season: "winter" },

  // ========================================
  // CARIBBEAN — NASSAU
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "BS-NASSAU", weight: 0.70, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "BS-NASSAU", weight: 0.60, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "BS-NASSAU", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "BS-NASSAU", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "BS-NASSAU", weight: 0.20, season: "winter" },

  // ========================================
  // CARIBBEAN — ARUBA
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "AW-ARUBA", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "AW-ARUBA", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "AW-ARUBA", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "AW-ARUBA", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "AW-ARUBA", weight: 0.22, season: "winter" },
  { sourceRegionId: "NL-SOUTH", destinationId: "AW-ARUBA", weight: 0.30, season: "winter" },

  // ========================================
  // CARIBBEAN — BARBADOS
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "BB-BARBADOS", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "BB-BARBADOS", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "BB-BARBADOS", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "BB-BARBADOS", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "BB-BARBADOS", weight: 0.28, season: "winter" },

  // ========================================
  // CARIBBEAN — TURKS & CAICOS
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "TC-TURKS", weight: 0.62, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "TC-TURKS", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "TC-TURKS", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "TC-TURKS", weight: 0.35, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "TC-TURKS", weight: 0.25, season: "winter" },

  // ========================================
  // CARIBBEAN — ST. LUCIA
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "LC-ST-LUCIA", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "LC-ST-LUCIA", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "LC-ST-LUCIA", weight: 0.38, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "LC-ST-LUCIA", weight: 0.32, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "LC-ST-LUCIA", weight: 0.25, season: "winter" },

  // ========================================
  // CARIBBEAN — ANTIGUA
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "AG-ANTIGUA", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "AG-ANTIGUA", weight: 0.38, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "AG-ANTIGUA", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "AG-ANTIGUA", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "AG-ANTIGUA", weight: 0.20, season: "winter" },

  // ========================================
  // CARIBBEAN — SAN JUAN
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "PR-SAN-JUAN", weight: 0.70, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "PR-SAN-JUAN", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "PR-SAN-JUAN", weight: 0.42, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "PR-SAN-JUAN", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "PR-SAN-JUAN", weight: 0.28, season: "winter" },

  // ========================================
  // CARIBBEAN — CURACAO
  // ========================================
  { sourceRegionId: "NL-SOUTH", destinationId: "CW-CURACAO", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "CW-CURACAO", weight: 0.35, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CW-CURACAO", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CW-CURACAO", weight: 0.25, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "CW-CURACAO", weight: 0.22, season: "winter" },

  // ========================================
  // CARIBBEAN — CAYMAN ISLANDS
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "KY-CAYMAN", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "KY-CAYMAN", weight: 0.52, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "KY-CAYMAN", weight: 0.42, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "KY-CAYMAN", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "KY-CAYMAN", weight: 0.28, season: "winter" },

  // ========================================
  // CARIBBEAN — US VIRGIN ISLANDS
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "VI-USVI", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "VI-USVI", weight: 0.50, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "VI-USVI", weight: 0.35, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "VI-USVI", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "VI-USVI", weight: 0.22, season: "winter" },

  // ========================================
  // CARIBBEAN — TRINIDAD & TOBAGO
  // ========================================
  { sourceRegionId: "GB-LONDON", destinationId: "TT-TRINIDAD", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "TT-TRINIDAD", weight: 0.28, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "TT-TRINIDAD", weight: 0.25, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "TT-TRINIDAD", weight: 0.22, season: "winter" },
  { sourceRegionId: "BR-SE", destinationId: "TT-TRINIDAD", weight: 0.18, season: "winter" },

  // ========================================
  // CARIBBEAN — BERMUDA
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "BM-BERMUDA", weight: 0.60, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "BM-BERMUDA", weight: 0.40, season: null },
  { sourceRegionId: "US-SE", destinationId: "BM-BERMUDA", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BM-BERMUDA", weight: 0.30, season: null },
  { sourceRegionId: "US-MW", destinationId: "BM-BERMUDA", weight: 0.22, season: null },

  // ========================================
  // CENTRAL AMERICA — ANTIGUA GUATEMALA
  // ========================================
  { sourceRegionId: "US-W", destinationId: "GT-ANTIGUA", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "GT-ANTIGUA", weight: 0.40, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "GT-ANTIGUA", weight: 0.38, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "GT-ANTIGUA", weight: 0.28, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "GT-ANTIGUA", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "GT-ANTIGUA", weight: 0.18, season: "winter" },

  // ========================================
  // CENTRAL AMERICA — BELIZE
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "BZ-BELIZE", weight: 0.48, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "BZ-BELIZE", weight: 0.42, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "BZ-BELIZE", weight: 0.35, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "BZ-BELIZE", weight: 0.28, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "BZ-BELIZE", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "BZ-BELIZE", weight: 0.18, season: "winter" },

  // ========================================
  // CENTRAL AMERICA — PANAMA CITY
  // ========================================
  { sourceRegionId: "US-NE", destinationId: "PA-PANAMA", weight: 0.48, season: null },
  { sourceRegionId: "US-SE", destinationId: "PA-PANAMA", weight: 0.42, season: null },
  { sourceRegionId: "CO", destinationId: "PA-PANAMA", weight: 0.45, season: null },
  { sourceRegionId: "MX-CENTRAL", destinationId: "PA-PANAMA", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "PA-PANAMA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PA-PANAMA", weight: 0.18, season: null },

  // ========================================
  // CENTRAL AMERICA — ROATAN
  // ========================================
  { sourceRegionId: "US-SE", destinationId: "HN-ROATAN", weight: 0.52, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "HN-ROATAN", weight: 0.40, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "HN-ROATAN", weight: 0.32, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "HN-ROATAN", weight: 0.25, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "HN-ROATAN", weight: 0.18, season: "winter" },

  // ========================================
  // SOUTH AMERICA — MONTEVIDEO
  // ========================================
  { sourceRegionId: "AR", destinationId: "UY-MONTEVIDEO", weight: 0.60, season: null },
  { sourceRegionId: "BR-SE", destinationId: "UY-MONTEVIDEO", weight: 0.45, season: null },
  { sourceRegionId: "CL", destinationId: "UY-MONTEVIDEO", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "UY-MONTEVIDEO", weight: 0.22, season: null },
  { sourceRegionId: "ES", destinationId: "UY-MONTEVIDEO", weight: 0.20, season: null },

  // ========================================
  // SOUTH AMERICA — PUNTA DEL ESTE
  // ========================================
  { sourceRegionId: "AR", destinationId: "UY-PUNTA", weight: 0.72, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "UY-PUNTA", weight: 0.55, season: "summer" },
  { sourceRegionId: "CL", destinationId: "UY-PUNTA", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "UY-PUNTA", weight: 0.25, season: "summer" },
  { sourceRegionId: "ES", destinationId: "UY-PUNTA", weight: 0.22, season: "summer" },

  // ========================================
  // SOUTH AMERICA — BOGOTA
  // ========================================
  { sourceRegionId: "CO", destinationId: "CO-BOGOTA", weight: 0.75, season: null },
  { sourceRegionId: "US-SE", destinationId: "CO-BOGOTA", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "CO-BOGOTA", weight: 0.30, season: null },
  { sourceRegionId: "MX-CENTRAL", destinationId: "CO-BOGOTA", weight: 0.28, season: null },
  { sourceRegionId: "ES", destinationId: "CO-BOGOTA", weight: 0.25, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "CO-BOGOTA", weight: 0.20, season: null },

  // ========================================
  // SOUTH AMERICA — MEDELLIN
  // ========================================
  { sourceRegionId: "CO", destinationId: "CO-MEDELLIN", weight: 0.70, season: null },
  { sourceRegionId: "US-SE", destinationId: "CO-MEDELLIN", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "CO-MEDELLIN", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "CO-MEDELLIN", weight: 0.22, season: null },
  { sourceRegionId: "AR", destinationId: "CO-MEDELLIN", weight: 0.20, season: null },
  { sourceRegionId: "ES", destinationId: "CO-MEDELLIN", weight: 0.18, season: null },

  // ========================================
  // SOUTH AMERICA — SANTA MARTA
  // ========================================
  { sourceRegionId: "CO", destinationId: "CO-SANTA-MARTA", weight: 0.62, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "CO-SANTA-MARTA", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CO-SANTA-MARTA", weight: 0.28, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CO-SANTA-MARTA", weight: 0.22, season: "winter" },
  { sourceRegionId: "ES", destinationId: "CO-SANTA-MARTA", weight: 0.18, season: "winter" },

  // ========================================
  // SOUTH AMERICA — TAYRONA NP
  // ========================================
  { sourceRegionId: "CO", destinationId: "CO-TAYRONA", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "CO-TAYRONA", weight: 0.28, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CO-TAYRONA", weight: 0.25, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CO-TAYRONA", weight: 0.20, season: "winter" },
  { sourceRegionId: "ES", destinationId: "CO-TAYRONA", weight: 0.18, season: "winter" },

  // ========================================
  // SOUTH AMERICA — QUITO
  // ========================================
  { sourceRegionId: "CO", destinationId: "EC-QUITO", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "EC-QUITO", weight: 0.38, season: null },
  { sourceRegionId: "US-W", destinationId: "EC-QUITO", weight: 0.30, season: null },
  { sourceRegionId: "CA-EAST", destinationId: "EC-QUITO", weight: 0.25, season: null },
  { sourceRegionId: "DE-NW", destinationId: "EC-QUITO", weight: 0.18, season: null },
  { sourceRegionId: "ES", destinationId: "EC-QUITO", weight: 0.18, season: null },

  // ========================================
  // SOUTH AMERICA — BANOS
  // ========================================
  { sourceRegionId: "CO", destinationId: "EC-BANOS", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "EC-BANOS", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "EC-BANOS", weight: 0.22, season: null },
  { sourceRegionId: "DE-NW", destinationId: "EC-BANOS", weight: 0.18, season: null },
  { sourceRegionId: "ES", destinationId: "EC-BANOS", weight: 0.15, season: null },

  // ========================================
  // SOUTH AMERICA — LA PAZ
  // ========================================
  { sourceRegionId: "AR", destinationId: "BO-LA-PAZ", weight: 0.40, season: null },
  { sourceRegionId: "BR-SE", destinationId: "BO-LA-PAZ", weight: 0.30, season: null },
  { sourceRegionId: "CL", destinationId: "BO-LA-PAZ", weight: 0.32, season: null },
  { sourceRegionId: "US-NE", destinationId: "BO-LA-PAZ", weight: 0.25, season: null },
  { sourceRegionId: "PE", destinationId: "BO-LA-PAZ", weight: 0.35, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BO-LA-PAZ", weight: 0.15, season: null },

  // ========================================
  // SOUTH AMERICA — SALAR DE UYUNI
  // ========================================
  { sourceRegionId: "AR", destinationId: "BO-UYUNI", weight: 0.52, season: "winter" },
  { sourceRegionId: "CL", destinationId: "BO-UYUNI", weight: 0.45, season: "winter" },
  { sourceRegionId: "BR-SE", destinationId: "BO-UYUNI", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "BO-UYUNI", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "BO-UYUNI", weight: 0.20, season: "winter" },
  { sourceRegionId: "PE", destinationId: "BO-UYUNI", weight: 0.30, season: "winter" },

  // ========================================
  // SOUTH AMERICA — SACRED VALLEY
  // ========================================
  { sourceRegionId: "PE", destinationId: "PE-SACRED-VALLEY", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "PE-SACRED-VALLEY", weight: 0.35, season: null },
  { sourceRegionId: "US-W", destinationId: "PE-SACRED-VALLEY", weight: 0.28, season: null },
  { sourceRegionId: "AR", destinationId: "PE-SACRED-VALLEY", weight: 0.30, season: null },
  { sourceRegionId: "BR-SE", destinationId: "PE-SACRED-VALLEY", weight: 0.25, season: null },
  { sourceRegionId: "DE-NW", destinationId: "PE-SACRED-VALLEY", weight: 0.20, season: null },

  // ========================================
  // SOUTH AMERICA — IGUAZU FALLS
  // ========================================
  { sourceRegionId: "AR", destinationId: "AR-IGUAZU", weight: 0.70, season: null },
  { sourceRegionId: "BR-SE", destinationId: "AR-IGUAZU", weight: 0.60, season: null },
  { sourceRegionId: "US-NE", destinationId: "AR-IGUAZU", weight: 0.22, season: null },
  { sourceRegionId: "CL", destinationId: "AR-IGUAZU", weight: 0.28, season: null },
  { sourceRegionId: "DE-NW", destinationId: "AR-IGUAZU", weight: 0.18, season: null },

  // ========================================
  // SOUTH AMERICA — USHUAIA
  // ========================================
  { sourceRegionId: "AR", destinationId: "AR-USHUAIA", weight: 0.60, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "AR-USHUAIA", weight: 0.35, season: "summer" },
  { sourceRegionId: "CL", destinationId: "AR-USHUAIA", weight: 0.38, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "AR-USHUAIA", weight: 0.25, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "AR-USHUAIA", weight: 0.20, season: "summer" },
  { sourceRegionId: "DE-NW", destinationId: "AR-USHUAIA", weight: 0.18, season: "summer" },

  // ========================================
  // SOUTH AMERICA — SALTA
  // ========================================
  { sourceRegionId: "AR", destinationId: "AR-SALTA", weight: 0.62, season: null },
  { sourceRegionId: "BR-SE", destinationId: "AR-SALTA", weight: 0.28, season: null },
  { sourceRegionId: "CL", destinationId: "AR-SALTA", weight: 0.32, season: null },
  { sourceRegionId: "US-NE", destinationId: "AR-SALTA", weight: 0.18, season: null },
  { sourceRegionId: "DE-NW", destinationId: "AR-SALTA", weight: 0.15, season: null },

  // ========================================
  // SOUTH AMERICA — EASTER ISLAND
  // ========================================
  { sourceRegionId: "CL", destinationId: "CL-EASTER-ISLAND", weight: 0.55, season: null },
  { sourceRegionId: "AR", destinationId: "CL-EASTER-ISLAND", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "CL-EASTER-ISLAND", weight: 0.28, season: null },
  { sourceRegionId: "US-W", destinationId: "CL-EASTER-ISLAND", weight: 0.25, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "CL-EASTER-ISLAND", weight: 0.22, season: null },
  { sourceRegionId: "JP", destinationId: "CL-EASTER-ISLAND", weight: 0.18, season: null },

  // ========================================
  // SOUTH AMERICA — VALPARAISO
  // ========================================
  { sourceRegionId: "CL", destinationId: "CL-VALPARAISO", weight: 0.72, season: null },
  { sourceRegionId: "AR", destinationId: "CL-VALPARAISO", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "CL-VALPARAISO", weight: 0.28, season: null },
  { sourceRegionId: "BR-SE", destinationId: "CL-VALPARAISO", weight: 0.25, season: null },
  { sourceRegionId: "ES", destinationId: "CL-VALPARAISO", weight: 0.20, season: null },

  // ========================================
  // SOUTH AMERICA — SALVADOR DE BAHIA
  // ========================================
  { sourceRegionId: "BR-SE", destinationId: "BR-SALVADOR", weight: 0.65, season: null },
  { sourceRegionId: "BR-NE", destinationId: "BR-SALVADOR", weight: 0.55, season: null },
  { sourceRegionId: "AR", destinationId: "BR-SALVADOR", weight: 0.30, season: null },
  { sourceRegionId: "US-NE", destinationId: "BR-SALVADOR", weight: 0.25, season: null },
  { sourceRegionId: "ES", destinationId: "BR-SALVADOR", weight: 0.22, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "BR-SALVADOR", weight: 0.18, season: null },

  // ========================================
  // SOUTH AMERICA — PANTANAL
  // ========================================
  { sourceRegionId: "BR-SE", destinationId: "BR-PANTANAL", weight: 0.48, season: "winter" },
  { sourceRegionId: "AR", destinationId: "BR-PANTANAL", weight: 0.30, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "BR-PANTANAL", weight: 0.22, season: "winter" },
  { sourceRegionId: "DE-NW", destinationId: "BR-PANTANAL", weight: 0.18, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "BR-PANTANAL", weight: 0.15, season: "winter" },

  // ========================================
  // SOUTH AMERICA — AMAZON (MANAUS)
  // ========================================
  { sourceRegionId: "BR-SE", destinationId: "BR-AMAZON", weight: 0.52, season: null },
  { sourceRegionId: "BR-NE", destinationId: "BR-AMAZON", weight: 0.35, season: null },
  { sourceRegionId: "US-NE", destinationId: "BR-AMAZON", weight: 0.28, season: null },
  { sourceRegionId: "DE-NW", destinationId: "BR-AMAZON", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BR-AMAZON", weight: 0.20, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "BR-AMAZON", weight: 0.18, season: null },

  // ========================================
  // NEW DESTINATIONS — ADDED 2024
  // ========================================

  // ----------------------------------------
  // US-SANTA-FE (New Mexico)
  // ----------------------------------------
  { sourceRegionId: "US-SW", destinationId: "US-SANTA-FE", weight: 0.78, season: null },
  { sourceRegionId: "US-W", destinationId: "US-SANTA-FE", weight: 0.60, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SANTA-FE", weight: 0.45, season: null },
  { sourceRegionId: "US-SE", destinationId: "US-SANTA-FE", weight: 0.38, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-SANTA-FE", weight: 0.28, season: null },

  // ----------------------------------------
  // US-MOAB (Utah)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-MOAB", weight: 0.72, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-MOAB", weight: 0.65, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-MOAB", weight: 0.42, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "US-MOAB", weight: 0.32, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-MOAB", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // US-MONTEREY (California)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-MONTEREY", weight: 0.78, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-MONTEREY", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-SW", destinationId: "US-MONTEREY", weight: 0.48, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-MONTEREY", weight: 0.35, season: null },
  { sourceRegionId: "JP", destinationId: "US-MONTEREY", weight: 0.22, season: null },

  // ----------------------------------------
  // US-MARTHA-VINEYARD
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "US-MARTHA-VINEYARD", weight: 0.85, season: "summer" },
  { sourceRegionId: "US-SE", destinationId: "US-MARTHA-VINEYARD", weight: 0.42, season: "summer" },
  { sourceRegionId: "US-MW", destinationId: "US-MARTHA-VINEYARD", weight: 0.35, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "US-MARTHA-VINEYARD", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-MARTHA-VINEYARD", weight: 0.20, season: "summer" },

  // ----------------------------------------
  // US-PALM-SPRINGS (California desert)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-PALM-SPRINGS", weight: 0.82, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-PALM-SPRINGS", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-PALM-SPRINGS", weight: 0.42, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-PALM-SPRINGS", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-PALM-SPRINGS", weight: 0.22, season: "winter" },

  // ----------------------------------------
  // US-TELLURIDE (Colorado ski)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-TELLURIDE", weight: 0.68, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-TELLURIDE", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-TELLURIDE", weight: 0.60, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-TELLURIDE", weight: 0.30, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-TELLURIDE", weight: 0.28, season: "winter" },

  // ----------------------------------------
  // US-MAMMOTH (California ski)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-MAMMOTH", weight: 0.82, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "US-MAMMOTH", weight: 0.58, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "US-MAMMOTH", weight: 0.35, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "US-MAMMOTH", weight: 0.30, season: "winter" },
  { sourceRegionId: "JP", destinationId: "US-MAMMOTH", weight: 0.25, season: "winter" },

  // ----------------------------------------
  // US-SARASOTA (Florida Gulf Coast)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "US-SARASOTA", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-SARASOTA", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "US-SARASOTA", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "US-SARASOTA", weight: 0.30, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "US-SARASOTA", weight: 0.20, season: "winter" },

  // ----------------------------------------
  // US-SAN-DIEGO
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-SAN-DIEGO", weight: 0.80, season: null },
  { sourceRegionId: "US-SW", destinationId: "US-SAN-DIEGO", weight: 0.68, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-SAN-DIEGO", weight: 0.50, season: "summer" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "US-SAN-DIEGO", weight: 0.45, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-SAN-DIEGO", weight: 0.35, season: null },
  { sourceRegionId: "JP", destinationId: "US-SAN-DIEGO", weight: 0.22, season: null },

  // ----------------------------------------
  // US-HONOLULU (Oahu, Hawaii)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "US-HONOLULU", weight: 0.78, season: null },
  { sourceRegionId: "US-NE", destinationId: "US-HONOLULU", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "US-HONOLULU", weight: 0.55, season: "winter" },
  { sourceRegionId: "JP", destinationId: "US-HONOLULU", weight: 0.65, season: null },
  { sourceRegionId: "CA-WEST", destinationId: "US-HONOLULU", weight: 0.42, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "US-HONOLULU", weight: 0.30, season: null },

  // ----------------------------------------
  // CA-JASPER (Alberta)
  // ----------------------------------------
  { sourceRegionId: "CA-WEST", destinationId: "CA-JASPER", weight: 0.75, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "CA-JASPER", weight: 0.52, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "CA-JASPER", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CA-JASPER", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-JASPER", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // CA-VICTORIA (British Columbia)
  // ----------------------------------------
  { sourceRegionId: "CA-WEST", destinationId: "CA-VICTORIA", weight: 0.82, season: "summer" },
  { sourceRegionId: "US-W", destinationId: "CA-VICTORIA", weight: 0.60, season: "summer" },
  { sourceRegionId: "CA-EAST", destinationId: "CA-VICTORIA", weight: 0.45, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CA-VICTORIA", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-VICTORIA", weight: 0.25, season: "summer" },

  // ----------------------------------------
  // CA-HALIFAX (Nova Scotia)
  // ----------------------------------------
  { sourceRegionId: "CA-EAST", destinationId: "CA-HALIFAX", weight: 0.82, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CA-HALIFAX", weight: 0.55, season: "summer" },
  { sourceRegionId: "CA-WEST", destinationId: "CA-HALIFAX", weight: 0.38, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CA-HALIFAX", weight: 0.28, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "CA-HALIFAX", weight: 0.22, season: "summer" },

  // ----------------------------------------
  // MX-HUATULCO (Oaxaca Coast)
  // ----------------------------------------
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-HUATULCO", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "MX-HUATULCO", weight: 0.45, season: "winter" },
  { sourceRegionId: "US-W", destinationId: "MX-HUATULCO", weight: 0.38, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-HUATULCO", weight: 0.30, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "MX-HUATULCO", weight: 0.18, season: "winter" },

  // ----------------------------------------
  // MX-COZUMEL
  // ----------------------------------------
  { sourceRegionId: "US-SE", destinationId: "MX-COZUMEL", weight: 0.72, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "MX-COZUMEL", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-MW", destinationId: "MX-COZUMEL", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "MX-COZUMEL", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "MX-COZUMEL", weight: 0.28, season: "winter" },

  // ----------------------------------------
  // MX-CABO-PULMO (Marine reserve, Baja)
  // ----------------------------------------
  { sourceRegionId: "US-W", destinationId: "MX-CABO-PULMO", weight: 0.65, season: "winter" },
  { sourceRegionId: "US-SW", destinationId: "MX-CABO-PULMO", weight: 0.58, season: "winter" },
  { sourceRegionId: "MX-CENTRAL", destinationId: "MX-CABO-PULMO", weight: 0.55, season: "winter" },
  { sourceRegionId: "US-NE", destinationId: "MX-CABO-PULMO", weight: 0.35, season: "winter" },
  { sourceRegionId: "CA-WEST", destinationId: "MX-CABO-PULMO", weight: 0.30, season: "winter" },

  // ----------------------------------------
  // CR-MANUEL-ANTONIO (Costa Rica)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "CR-MANUEL-ANTONIO", weight: 0.60, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CR-MANUEL-ANTONIO", weight: 0.55, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CR-MANUEL-ANTONIO", weight: 0.40, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "CR-MANUEL-ANTONIO", weight: 0.28, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "CR-MANUEL-ANTONIO", weight: 0.22, season: "winter" },

  // ----------------------------------------
  // CR-ARENAL (Volcano, Costa Rica)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "CR-ARENAL", weight: 0.58, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "CR-ARENAL", weight: 0.50, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "CR-ARENAL", weight: 0.38, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "CR-ARENAL", weight: 0.30, season: "winter" },
  { sourceRegionId: "DE-BY", destinationId: "CR-ARENAL", weight: 0.25, season: "winter" },

  // ----------------------------------------
  // PA-BOCAS (Bocas del Toro, Panama)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "PA-BOCAS", weight: 0.50, season: "winter" },
  { sourceRegionId: "US-SE", destinationId: "PA-BOCAS", weight: 0.45, season: "winter" },
  { sourceRegionId: "CA-EAST", destinationId: "PA-BOCAS", weight: 0.32, season: "winter" },
  { sourceRegionId: "GB-LONDON", destinationId: "PA-BOCAS", weight: 0.28, season: "winter" },
  { sourceRegionId: "FR-IDF", destinationId: "PA-BOCAS", weight: 0.20, season: "winter" },

  // ----------------------------------------
  // CO-LETICIA (Amazon, Colombia)
  // ----------------------------------------
  { sourceRegionId: "CO", destinationId: "CO-LETICIA", weight: 0.65, season: null },
  { sourceRegionId: "BR-SE", destinationId: "CO-LETICIA", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "CO-LETICIA", weight: 0.25, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "CO-LETICIA", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "CO-LETICIA", weight: 0.15, season: null },

  // ----------------------------------------
  // PE-AREQUIPA (Peru)
  // ----------------------------------------
  { sourceRegionId: "PE", destinationId: "PE-AREQUIPA", weight: 0.78, season: null },
  { sourceRegionId: "CL", destinationId: "PE-AREQUIPA", weight: 0.50, season: null },
  { sourceRegionId: "US-NE", destinationId: "PE-AREQUIPA", weight: 0.32, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PE-AREQUIPA", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "PE-AREQUIPA", weight: 0.22, season: null },

  // ----------------------------------------
  // PE-HUACACHINA (Ica desert oasis)
  // ----------------------------------------
  { sourceRegionId: "PE", destinationId: "PE-HUACACHINA", weight: 0.75, season: null },
  { sourceRegionId: "CL", destinationId: "PE-HUACACHINA", weight: 0.45, season: null },
  { sourceRegionId: "AR", destinationId: "PE-HUACACHINA", weight: 0.38, season: null },
  { sourceRegionId: "US-NE", destinationId: "PE-HUACACHINA", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "PE-HUACACHINA", weight: 0.22, season: null },

  // ----------------------------------------
  // BR-LENCOIS (Lençóis Maranhenses)
  // ----------------------------------------
  { sourceRegionId: "BR-SE", destinationId: "BR-LENCOIS", weight: 0.62, season: "summer" },
  { sourceRegionId: "BR-NE", destinationId: "BR-LENCOIS", weight: 0.70, season: "summer" },
  { sourceRegionId: "AR", destinationId: "BR-LENCOIS", weight: 0.30, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "BR-LENCOIS", weight: 0.22, season: "summer" },
  { sourceRegionId: "FR-IDF", destinationId: "BR-LENCOIS", weight: 0.20, season: "summer" },

  // ----------------------------------------
  // BR-BONITO (Eco-tourism, Mato Grosso do Sul)
  // ----------------------------------------
  { sourceRegionId: "BR-SE", destinationId: "BR-BONITO", weight: 0.68, season: null },
  { sourceRegionId: "BR-NE", destinationId: "BR-BONITO", weight: 0.45, season: null },
  { sourceRegionId: "AR", destinationId: "BR-BONITO", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BR-BONITO", weight: 0.20, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BR-BONITO", weight: 0.18, season: null },

  // ----------------------------------------
  // AR-CAFAYATE (Salta wine region)
  // ----------------------------------------
  { sourceRegionId: "AR", destinationId: "AR-CAFAYATE", weight: 0.80, season: null },
  { sourceRegionId: "CL", destinationId: "AR-CAFAYATE", weight: 0.42, season: null },
  { sourceRegionId: "BR-SE", destinationId: "AR-CAFAYATE", weight: 0.35, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "AR-CAFAYATE", weight: 0.25, season: null },
  { sourceRegionId: "US-NE", destinationId: "AR-CAFAYATE", weight: 0.20, season: null },

  // ----------------------------------------
  // CL-LAKE-DISTRICT (Patagonia Lakes)
  // ----------------------------------------
  { sourceRegionId: "CL", destinationId: "CL-LAKE-DISTRICT", weight: 0.78, season: "summer" },
  { sourceRegionId: "AR", destinationId: "CL-LAKE-DISTRICT", weight: 0.65, season: "summer" },
  { sourceRegionId: "BR-SE", destinationId: "CL-LAKE-DISTRICT", weight: 0.35, season: "summer" },
  { sourceRegionId: "US-NE", destinationId: "CL-LAKE-DISTRICT", weight: 0.28, season: "summer" },
  { sourceRegionId: "GB-LONDON", destinationId: "CL-LAKE-DISTRICT", weight: 0.25, season: "summer" },

  // ----------------------------------------
  // EC-AMAZON (Ecuador Amazon)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "EC-AMAZON", weight: 0.42, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "EC-AMAZON", weight: 0.35, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "EC-AMAZON", weight: 0.28, season: null },
  { sourceRegionId: "DE-BY", destinationId: "EC-AMAZON", weight: 0.22, season: null },
  { sourceRegionId: "AU-EAST", destinationId: "EC-AMAZON", weight: 0.18, season: null },

  // ----------------------------------------
  // BO-SUCRE (Bolivia)
  // ----------------------------------------
  { sourceRegionId: "AR", destinationId: "BO-SUCRE", weight: 0.52, season: null },
  { sourceRegionId: "CL", destinationId: "BO-SUCRE", weight: 0.45, season: null },
  { sourceRegionId: "US-NE", destinationId: "BO-SUCRE", weight: 0.28, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "BO-SUCRE", weight: 0.22, season: null },
  { sourceRegionId: "DE-BY", destinationId: "BO-SUCRE", weight: 0.18, season: null },

  // ----------------------------------------
  // UY-COLONIA (Colonia del Sacramento)
  // ----------------------------------------
  { sourceRegionId: "AR", destinationId: "UY-COLONIA", weight: 0.85, season: null },
  { sourceRegionId: "BR-SE", destinationId: "UY-COLONIA", weight: 0.55, season: null },
  { sourceRegionId: "CL", destinationId: "UY-COLONIA", weight: 0.40, season: null },
  { sourceRegionId: "US-NE", destinationId: "UY-COLONIA", weight: 0.22, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "UY-COLONIA", weight: 0.18, season: null },

  // ----------------------------------------
  // GT-TIKAL (Guatemala, Maya ruins)
  // ----------------------------------------
  { sourceRegionId: "US-NE", destinationId: "GT-TIKAL", weight: 0.45, season: null },
  { sourceRegionId: "US-SE", destinationId: "GT-TIKAL", weight: 0.40, season: null },
  { sourceRegionId: "MX-CENTRAL", destinationId: "GT-TIKAL", weight: 0.55, season: null },
  { sourceRegionId: "GB-LONDON", destinationId: "GT-TIKAL", weight: 0.30, season: null },
  { sourceRegionId: "DE-BY", destinationId: "GT-TIKAL", weight: 0.22, season: null },
  { sourceRegionId: "FR-IDF", destinationId: "GT-TIKAL", weight: 0.20, season: null },
];
