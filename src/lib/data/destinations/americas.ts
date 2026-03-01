import type { Destination } from "@/types";

export const destinations: Destination[] = [
  // ========================================
  // UNITED STATES (8)
  // ========================================
  { id: "US-HAWAII", name: "Hawaii", country: "US", lat: 21.31, lng: -157.86, category: "island", seasonality: "winter", basePopularity: 0.88, region: "americas" },
  { id: "US-FLORIDA", name: "Florida", country: "US", lat: 25.76, lng: -80.19, category: "beach", seasonality: "winter", basePopularity: 0.90, region: "americas" },
  { id: "US-LAS-VEGAS", name: "Las Vegas", country: "US", lat: 36.17, lng: -115.14, category: "city", seasonality: "year-round", basePopularity: 0.85, region: "americas" },
  { id: "US-NYC", name: "New York City", country: "US", lat: 40.71, lng: -74.01, category: "city", seasonality: "year-round", basePopularity: 0.95, region: "americas", capacityOverride: 8.0 },
  { id: "US-CALIFORNIA", name: "California Coast", country: "US", lat: 34.05, lng: -118.24, category: "beach", seasonality: "summer", basePopularity: 0.88, region: "americas" },
  { id: "US-COLORADO-SKI", name: "Colorado Ski", country: "US", lat: 39.64, lng: -106.37, category: "ski", seasonality: "winter", basePopularity: 0.78, region: "americas" },
  { id: "US-UTAH-NP", name: "Utah National Parks", country: "US", lat: 38.73, lng: -109.57, category: "nature", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "US-NATIONAL-PARKS", name: "National Parks (West)", country: "US", lat: 37.75, lng: -119.60, category: "nature", seasonality: "summer", basePopularity: 0.80, region: "americas" },

  // ========================================
  // MEXICO (5)
  // ========================================
  { id: "MX-CANCUN", name: "Cancun", country: "MX", lat: 21.16, lng: -86.85, category: "beach", seasonality: "winter", basePopularity: 0.90, region: "americas" },
  { id: "MX-LOS-CABOS", name: "Los Cabos", country: "MX", lat: 22.89, lng: -109.92, category: "beach", seasonality: "winter", basePopularity: 0.78, region: "americas" },
  { id: "MX-PUERTO-VALLARTA", name: "Puerto Vallarta", country: "MX", lat: 20.65, lng: -105.23, category: "beach", seasonality: "winter", basePopularity: 0.72, region: "americas" },
  { id: "MX-OAXACA", name: "Oaxaca", country: "MX", lat: 17.07, lng: -96.73, category: "cultural", seasonality: "year-round", basePopularity: 0.62, region: "americas" },
  { id: "MX-CDMX", name: "Mexico City", country: "MX", lat: 19.43, lng: -99.13, category: "city", seasonality: "year-round", basePopularity: 0.78, region: "americas" },

  // ========================================
  // CANADA (3)
  // ========================================
  { id: "CA-BANFF", name: "Banff", country: "CA", lat: 51.18, lng: -115.57, category: "ski", seasonality: "winter", basePopularity: 0.72, region: "americas" },
  { id: "CA-WHISTLER", name: "Whistler", country: "CA", lat: 50.12, lng: -122.95, category: "ski", seasonality: "winter", basePopularity: 0.70, region: "americas" },
  { id: "CA-NIAGARA", name: "Niagara Falls", country: "CA", lat: 43.09, lng: -79.08, category: "nature", seasonality: "summer", basePopularity: 0.68, region: "americas" },

  // ========================================
  // CARIBBEAN (4)
  // ========================================
  { id: "CR-COSTA-RICA", name: "Costa Rica", country: "CR", lat: 9.93, lng: -84.08, category: "tropical", seasonality: "winter", basePopularity: 0.72, region: "americas" },
  { id: "CU-CUBA", name: "Cuba", country: "CU", lat: 23.11, lng: -82.37, category: "island", seasonality: "winter", basePopularity: 0.62, region: "americas" },
  { id: "DO-PUNTA-CANA", name: "Punta Cana", country: "DO", lat: 18.58, lng: -68.40, category: "beach", seasonality: "winter", basePopularity: 0.75, region: "americas" },
  { id: "JM-MONTEGO-BAY", name: "Montego Bay", country: "JM", lat: 18.47, lng: -77.92, category: "beach", seasonality: "winter", basePopularity: 0.65, region: "americas" },

  // ========================================
  // BRAZIL (4)
  // ========================================
  { id: "BR-RIO", name: "Rio de Janeiro", country: "BR", lat: -22.91, lng: -43.17, category: "city", seasonality: "summer", basePopularity: 0.88, region: "americas" },
  { id: "BR-FLORIANOPOLIS", name: "Florianopolis", country: "BR", lat: -27.60, lng: -48.55, category: "beach", seasonality: "summer", basePopularity: 0.68, region: "americas" },
  { id: "BR-NORTHEAST", name: "Northeast Coast (Jericoacoara)", country: "BR", lat: -2.80, lng: -40.51, category: "beach", seasonality: "summer", basePopularity: 0.65, region: "americas" },
  { id: "BR-NORONHA", name: "Fernando de Noronha", country: "BR", lat: -3.85, lng: -32.43, category: "island", seasonality: "year-round", basePopularity: 0.62, region: "americas" },

  // ========================================
  // ARGENTINA (4)
  // ========================================
  { id: "AR-BUENOS-AIRES", name: "Buenos Aires", country: "AR", lat: -34.60, lng: -58.38, category: "city", seasonality: "year-round", basePopularity: 0.82, region: "americas" },
  { id: "AR-PATAGONIA", name: "Patagonia", country: "AR", lat: -50.34, lng: -72.26, category: "nature", seasonality: "summer", basePopularity: 0.72, region: "americas" },
  { id: "AR-BARILOCHE", name: "Bariloche", country: "AR", lat: -41.13, lng: -71.31, category: "ski", seasonality: "winter", basePopularity: 0.68, region: "americas" },
  { id: "AR-MENDOZA", name: "Mendoza", country: "AR", lat: -32.89, lng: -68.83, category: "nature", seasonality: "year-round", basePopularity: 0.58, region: "americas" },

  // ========================================
  // CHILE (3)
  // ========================================
  { id: "CL-ATACAMA", name: "Atacama Desert", country: "CL", lat: -23.65, lng: -68.15, category: "desert", seasonality: "year-round", basePopularity: 0.62, region: "americas" },
  { id: "CL-TORRES", name: "Torres del Paine", country: "CL", lat: -50.94, lng: -73.41, category: "nature", seasonality: "summer", basePopularity: 0.68, region: "americas" },
  { id: "CL-VALLE-NEVADO", name: "Valle Nevado", country: "CL", lat: -33.36, lng: -70.25, category: "ski", seasonality: "winter", basePopularity: 0.55, region: "americas" },

  // ========================================
  // PERU (2)
  // ========================================
  { id: "PE-CUSCO", name: "Cusco & Machu Picchu", country: "PE", lat: -13.53, lng: -71.97, category: "cultural", seasonality: "year-round", basePopularity: 0.78, region: "americas" },
  { id: "PE-LIMA", name: "Lima", country: "PE", lat: -12.05, lng: -77.04, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "americas" },

  // ========================================
  // COLOMBIA (1)
  // ========================================
  { id: "CO-CARTAGENA", name: "Cartagena", country: "CO", lat: 10.39, lng: -75.51, category: "city", seasonality: "winter", basePopularity: 0.68, region: "americas" },

  // ========================================
  // ECUADOR (1)
  // ========================================
  { id: "EC-GALAPAGOS", name: "Galapagos", country: "EC", lat: -0.95, lng: -89.62, category: "nature", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
];
