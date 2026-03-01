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

  // ========================================
  // UNITED STATES — CITIES (10)
  // ========================================
  { id: "US-CHICAGO", name: "Chicago", country: "US", lat: 41.88, lng: -87.63, category: "city", seasonality: "year-round", basePopularity: 0.80, region: "americas" },
  { id: "US-SAN-FRANCISCO", name: "San Francisco", country: "US", lat: 37.77, lng: -122.42, category: "city", seasonality: "year-round", basePopularity: 0.82, region: "americas" },
  { id: "US-WASHINGTON-DC", name: "Washington DC", country: "US", lat: 38.91, lng: -77.04, category: "city", seasonality: "year-round", basePopularity: 0.78, region: "americas" },
  { id: "US-NEW-ORLEANS", name: "New Orleans", country: "US", lat: 29.95, lng: -90.07, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "US-NASHVILLE", name: "Nashville", country: "US", lat: 36.16, lng: -86.78, category: "city", seasonality: "year-round", basePopularity: 0.62, region: "americas" },
  { id: "US-BOSTON", name: "Boston", country: "US", lat: 42.36, lng: -71.06, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "US-SEATTLE", name: "Seattle", country: "US", lat: 47.61, lng: -122.33, category: "city", seasonality: "year-round", basePopularity: 0.65, region: "americas" },
  { id: "US-PORTLAND", name: "Portland", country: "US", lat: 45.52, lng: -122.68, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "americas" },
  { id: "US-CHARLESTON", name: "Charleston", country: "US", lat: 32.78, lng: -79.93, category: "city", seasonality: "year-round", basePopularity: 0.55, region: "americas" },
  { id: "US-SAVANNAH", name: "Savannah", country: "US", lat: 32.08, lng: -81.09, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "US-AUSTIN", name: "Austin", country: "US", lat: 30.27, lng: -97.74, category: "city", seasonality: "year-round", basePopularity: 0.55, region: "americas" },

  // ========================================
  // UNITED STATES — SKI (3)
  // ========================================
  { id: "US-ASPEN", name: "Aspen", country: "US", lat: 39.19, lng: -106.82, category: "ski", seasonality: "winter", basePopularity: 0.68, region: "americas" },
  { id: "US-JACKSON-HOLE", name: "Jackson Hole", country: "US", lat: 43.48, lng: -110.76, category: "ski", seasonality: "winter", basePopularity: 0.62, region: "americas" },
  { id: "US-LAKE-TAHOE", name: "Lake Tahoe", country: "US", lat: 39.10, lng: -120.04, category: "ski", seasonality: "winter", basePopularity: 0.65, region: "americas" },
  { id: "US-PARK-CITY", name: "Park City", country: "US", lat: 40.65, lng: -111.50, category: "ski", seasonality: "winter", basePopularity: 0.58, region: "americas" },

  // ========================================
  // UNITED STATES — NATURE / PARKS (9)
  // ========================================
  { id: "US-NAPA", name: "Napa Valley", country: "US", lat: 38.30, lng: -122.29, category: "nature", seasonality: "year-round", basePopularity: 0.55, region: "americas" },
  { id: "US-SEDONA", name: "Sedona", country: "US", lat: 34.87, lng: -111.76, category: "nature", seasonality: "year-round", basePopularity: 0.58, region: "americas" },
  { id: "US-YELLOWSTONE", name: "Yellowstone", country: "US", lat: 44.43, lng: -110.59, category: "nature", seasonality: "summer", basePopularity: 0.72, region: "americas" },
  { id: "US-GRAND-CANYON", name: "Grand Canyon", country: "US", lat: 36.11, lng: -112.11, category: "nature", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "US-ALASKA", name: "Alaska (Denali)", country: "US", lat: 63.07, lng: -151.01, category: "nature", seasonality: "summer", basePopularity: 0.55, region: "americas" },
  { id: "US-ZION", name: "Zion National Park", country: "US", lat: 37.30, lng: -113.03, category: "nature", seasonality: "year-round", basePopularity: 0.62, region: "americas" },
  { id: "US-BRYCE", name: "Bryce Canyon", country: "US", lat: 37.63, lng: -112.17, category: "nature", seasonality: "summer", basePopularity: 0.48, region: "americas" },
  { id: "US-ACADIA", name: "Acadia National Park", country: "US", lat: 44.34, lng: -68.21, category: "nature", seasonality: "summer", basePopularity: 0.52, region: "americas" },
  { id: "US-GLACIER", name: "Glacier National Park", country: "US", lat: 48.76, lng: -113.79, category: "nature", seasonality: "summer", basePopularity: 0.52, region: "americas" },
  { id: "US-BIG-SUR", name: "Big Sur", country: "US", lat: 36.27, lng: -121.81, category: "nature", seasonality: "year-round", basePopularity: 0.52, region: "americas" },

  // ========================================
  // UNITED STATES — BEACH / ISLAND (5)
  // ========================================
  { id: "US-KEY-WEST", name: "Key West", country: "US", lat: 24.56, lng: -81.78, category: "island", seasonality: "winter", basePopularity: 0.62, region: "americas" },
  { id: "US-OUTER-BANKS", name: "Outer Banks", country: "US", lat: 35.56, lng: -75.47, category: "beach", seasonality: "summer", basePopularity: 0.52, region: "americas" },
  { id: "US-CAPE-COD", name: "Cape Cod", country: "US", lat: 41.67, lng: -70.30, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "americas" },
  { id: "US-MAUI", name: "Maui", country: "US", lat: 20.80, lng: -156.32, category: "island", seasonality: "year-round", basePopularity: 0.78, region: "americas" },
  { id: "US-MIAMI-BEACH", name: "Miami Beach", country: "US", lat: 25.79, lng: -80.13, category: "beach", seasonality: "winter", basePopularity: 0.82, region: "americas" },

  // ========================================
  // UNITED STATES — DESERT (1)
  // ========================================
  { id: "US-JOSHUA-TREE", name: "Joshua Tree", country: "US", lat: 33.87, lng: -115.90, category: "desert", seasonality: "winter", basePopularity: 0.42, region: "americas" },

  // ========================================
  // CANADA (5)
  // ========================================
  { id: "CA-VANCOUVER", name: "Vancouver", country: "CA", lat: 49.28, lng: -123.12, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "CA-MONTREAL", name: "Montreal", country: "CA", lat: 45.50, lng: -73.57, category: "city", seasonality: "year-round", basePopularity: 0.68, region: "americas" },
  { id: "CA-QUEBEC-CITY", name: "Quebec City", country: "CA", lat: 46.81, lng: -71.21, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "americas" },
  { id: "CA-TORONTO", name: "Toronto", country: "CA", lat: 43.65, lng: -79.38, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "CA-PEI", name: "Prince Edward Island", country: "CA", lat: 46.24, lng: -63.13, category: "nature", seasonality: "summer", basePopularity: 0.42, region: "americas" },

  // ========================================
  // MEXICO (5)
  // ========================================
  { id: "MX-TULUM", name: "Tulum", country: "MX", lat: 20.21, lng: -87.43, category: "beach", seasonality: "winter", basePopularity: 0.72, region: "americas" },
  { id: "MX-RIVIERA-MAYA", name: "Riviera Maya", country: "MX", lat: 20.63, lng: -87.08, category: "beach", seasonality: "winter", basePopularity: 0.78, region: "americas" },
  { id: "MX-GUADALAJARA", name: "Guadalajara", country: "MX", lat: 20.67, lng: -103.35, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "americas" },
  { id: "MX-MERIDA", name: "Mérida", country: "MX", lat: 20.97, lng: -89.59, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "MX-SAN-MIGUEL", name: "San Miguel de Allende", country: "MX", lat: 20.91, lng: -100.74, category: "cultural", seasonality: "year-round", basePopularity: 0.55, region: "americas" },
  { id: "MX-SAYULITA", name: "Sayulita", country: "MX", lat: 20.87, lng: -105.44, category: "beach", seasonality: "winter", basePopularity: 0.48, region: "americas" },

  // ========================================
  // CARIBBEAN (10)
  // ========================================
  { id: "BS-NASSAU", name: "Nassau (Bahamas)", country: "BS", lat: 25.05, lng: -77.34, category: "beach", seasonality: "winter", basePopularity: 0.68, region: "americas" },
  { id: "AW-ARUBA", name: "Aruba", country: "AW", lat: 12.51, lng: -69.97, category: "island", seasonality: "winter", basePopularity: 0.65, region: "americas" },
  { id: "BB-BARBADOS", name: "Barbados", country: "BB", lat: 13.19, lng: -59.54, category: "island", seasonality: "winter", basePopularity: 0.62, region: "americas" },
  { id: "TC-TURKS", name: "Turks & Caicos", country: "TC", lat: 21.77, lng: -72.17, category: "beach", seasonality: "winter", basePopularity: 0.62, region: "americas" },
  { id: "LC-ST-LUCIA", name: "St. Lucia", country: "LC", lat: 13.91, lng: -60.98, category: "island", seasonality: "winter", basePopularity: 0.58, region: "americas" },
  { id: "AG-ANTIGUA", name: "Antigua", country: "AG", lat: 17.12, lng: -61.85, category: "island", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "PR-SAN-JUAN", name: "San Juan (Puerto Rico)", country: "PR", lat: 18.47, lng: -66.12, category: "city", seasonality: "winter", basePopularity: 0.60, region: "americas" },
  { id: "CW-CURACAO", name: "Curaçao", country: "CW", lat: 12.17, lng: -68.98, category: "island", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "KY-CAYMAN", name: "Cayman Islands", country: "KY", lat: 19.29, lng: -81.38, category: "island", seasonality: "winter", basePopularity: 0.55, region: "americas" },
  { id: "VI-USVI", name: "US Virgin Islands", country: "VI", lat: 18.34, lng: -64.93, category: "island", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "TT-TRINIDAD", name: "Trinidad & Tobago", country: "TT", lat: 10.65, lng: -61.50, category: "island", seasonality: "winter", basePopularity: 0.42, region: "americas" },
  { id: "BM-BERMUDA", name: "Bermuda", country: "BM", lat: 32.32, lng: -64.76, category: "island", seasonality: "year-round", basePopularity: 0.48, region: "americas" },

  // ========================================
  // CENTRAL AMERICA (4)
  // ========================================
  { id: "GT-ANTIGUA", name: "Antigua Guatemala", country: "GT", lat: 14.56, lng: -90.73, category: "cultural", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "BZ-BELIZE", name: "Belize (Ambergris Caye)", country: "BZ", lat: 17.92, lng: -87.97, category: "island", seasonality: "winter", basePopularity: 0.48, region: "americas" },
  { id: "PA-PANAMA", name: "Panama City", country: "PA", lat: 8.98, lng: -79.52, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "americas" },
  { id: "HN-ROATAN", name: "Roatán", country: "HN", lat: 16.32, lng: -86.53, category: "island", seasonality: "winter", basePopularity: 0.48, region: "americas" },

  // ========================================
  // SOUTH AMERICA — ADDITIONAL (16)
  // ========================================
  { id: "UY-MONTEVIDEO", name: "Montevideo", country: "UY", lat: -34.88, lng: -56.16, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "UY-PUNTA", name: "Punta del Este", country: "UY", lat: -34.97, lng: -54.95, category: "beach", seasonality: "summer", basePopularity: 0.55, region: "americas" },
  { id: "CO-BOGOTA", name: "Bogotá", country: "CO", lat: 4.71, lng: -74.07, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "americas" },
  { id: "CO-MEDELLIN", name: "Medellín", country: "CO", lat: 6.25, lng: -75.56, category: "city", seasonality: "year-round", basePopularity: 0.60, region: "americas" },
  { id: "CO-SANTA-MARTA", name: "Santa Marta", country: "CO", lat: 11.24, lng: -74.20, category: "beach", seasonality: "winter", basePopularity: 0.48, region: "americas" },
  { id: "CO-TAYRONA", name: "Tayrona NP", country: "CO", lat: 11.30, lng: -73.93, category: "nature", seasonality: "winter", basePopularity: 0.45, region: "americas" },
  { id: "EC-QUITO", name: "Quito", country: "EC", lat: -0.18, lng: -78.47, category: "city", seasonality: "year-round", basePopularity: 0.52, region: "americas" },
  { id: "EC-BANOS", name: "Baños", country: "EC", lat: -1.40, lng: -78.42, category: "nature", seasonality: "year-round", basePopularity: 0.40, region: "americas" },
  { id: "BO-LA-PAZ", name: "La Paz", country: "BO", lat: -16.50, lng: -68.15, category: "city", seasonality: "year-round", basePopularity: 0.42, region: "americas" },
  { id: "BO-UYUNI", name: "Salar de Uyuni", country: "BO", lat: -20.46, lng: -66.99, category: "desert", seasonality: "winter", basePopularity: 0.48, region: "americas" },
  { id: "PE-SACRED-VALLEY", name: "Sacred Valley", country: "PE", lat: -13.33, lng: -72.12, category: "cultural", seasonality: "year-round", basePopularity: 0.50, region: "americas" },
  { id: "AR-IGUAZU", name: "Iguazu Falls", country: "AR", lat: -25.69, lng: -54.44, category: "nature", seasonality: "year-round", basePopularity: 0.62, region: "americas" },
  { id: "AR-USHUAIA", name: "Ushuaia", country: "AR", lat: -54.81, lng: -68.30, category: "nature", seasonality: "summer", basePopularity: 0.48, region: "americas" },
  { id: "AR-SALTA", name: "Salta & Northwest", country: "AR", lat: -24.79, lng: -65.41, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "americas" },
  { id: "CL-EASTER-ISLAND", name: "Easter Island", country: "CL", lat: -27.11, lng: -109.35, category: "cultural", seasonality: "year-round", basePopularity: 0.42, region: "americas" },
  { id: "CL-VALPARAISO", name: "Valparaíso", country: "CL", lat: -33.05, lng: -71.62, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "BR-SALVADOR", name: "Salvador de Bahia", country: "BR", lat: -12.97, lng: -38.51, category: "city", seasonality: "year-round", basePopularity: 0.58, region: "americas" },
  { id: "BR-PANTANAL", name: "Pantanal", country: "BR", lat: -19.06, lng: -57.66, category: "nature", seasonality: "winter", basePopularity: 0.38, region: "americas" },
  { id: "BR-AMAZON", name: "Amazon (Manaus)", country: "BR", lat: -3.12, lng: -60.02, category: "nature", seasonality: "year-round", basePopularity: 0.42, region: "americas" },

  // ========================================
  // NEW DESTINATIONS
  // ========================================
  { id: "US-SANTA-FE", name: "Santa Fe", country: "US", lat: 35.69, lng: -105.94, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "US-MOAB", name: "Moab", country: "US", lat: 38.57, lng: -109.55, category: "nature", seasonality: "year-round", basePopularity: 0.52, region: "americas" },
  { id: "US-MONTEREY", name: "Monterey", country: "US", lat: 36.60, lng: -121.89, category: "nature", seasonality: "year-round", basePopularity: 0.45, region: "americas" },
  { id: "US-MARTHA-VINEYARD", name: "Martha's Vineyard", country: "US", lat: 41.39, lng: -70.64, category: "island", seasonality: "summer", basePopularity: 0.52, region: "americas" },
  { id: "US-PALM-SPRINGS", name: "Palm Springs", country: "US", lat: 33.83, lng: -116.55, category: "desert", seasonality: "winter", basePopularity: 0.48, region: "americas" },
  { id: "US-TELLURIDE", name: "Telluride", country: "US", lat: 37.94, lng: -107.81, category: "ski", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "US-MAMMOTH", name: "Mammoth Lakes", country: "US", lat: 37.65, lng: -118.97, category: "ski", seasonality: "winter", basePopularity: 0.48, region: "americas" },
  { id: "US-SARASOTA", name: "Sarasota", country: "US", lat: 27.34, lng: -82.53, category: "beach", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "US-SAN-DIEGO", name: "San Diego", country: "US", lat: 32.72, lng: -117.16, category: "city", seasonality: "year-round", basePopularity: 0.68, region: "americas" },
  { id: "US-HONOLULU", name: "Honolulu", country: "US", lat: 21.31, lng: -157.86, category: "city", seasonality: "year-round", basePopularity: 0.72, region: "americas" },
  { id: "CA-JASPER", name: "Jasper", country: "CA", lat: 52.87, lng: -117.80, category: "nature", seasonality: "summer", basePopularity: 0.48, region: "americas" },
  { id: "CA-VICTORIA", name: "Victoria", country: "CA", lat: 48.43, lng: -123.37, category: "city", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "CA-HALIFAX", name: "Halifax", country: "CA", lat: 44.65, lng: -63.57, category: "city", seasonality: "summer", basePopularity: 0.42, region: "americas" },
  { id: "MX-HUATULCO", name: "Huatulco", country: "MX", lat: 15.77, lng: -96.13, category: "beach", seasonality: "winter", basePopularity: 0.42, region: "americas" },
  { id: "MX-COZUMEL", name: "Cozumel", country: "MX", lat: 20.42, lng: -86.92, category: "island", seasonality: "winter", basePopularity: 0.55, region: "americas" },
  { id: "MX-CABO-PULMO", name: "Cabo Pulmo", country: "MX", lat: 23.44, lng: -109.42, category: "nature", seasonality: "winter", basePopularity: 0.32, region: "americas" },
  { id: "CR-MANUEL-ANTONIO", name: "Manuel Antonio", country: "CR", lat: 9.39, lng: -84.14, category: "nature", seasonality: "winter", basePopularity: 0.52, region: "americas" },
  { id: "CR-ARENAL", name: "Arenal", country: "CR", lat: 10.46, lng: -84.70, category: "nature", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "PA-BOCAS", name: "Bocas del Toro", country: "PA", lat: 9.34, lng: -82.24, category: "island", seasonality: "winter", basePopularity: 0.42, region: "americas" },
  { id: "CO-LETICIA", name: "Leticia (Amazon)", country: "CO", lat: -4.22, lng: -69.94, category: "nature", seasonality: "year-round", basePopularity: 0.28, region: "americas" },
  { id: "PE-AREQUIPA", name: "Arequipa", country: "PE", lat: -16.41, lng: -71.54, category: "cultural", seasonality: "year-round", basePopularity: 0.48, region: "americas" },
  { id: "PE-HUACACHINA", name: "Huacachina", country: "PE", lat: -14.09, lng: -75.76, category: "desert", seasonality: "year-round", basePopularity: 0.32, region: "americas" },
  { id: "BR-LENCOIS", name: "Lençóis Maranhenses", country: "BR", lat: -2.49, lng: -43.11, category: "nature", seasonality: "summer", basePopularity: 0.38, region: "americas" },
  { id: "BR-BONITO", name: "Bonito", country: "BR", lat: -21.13, lng: -56.49, category: "nature", seasonality: "winter", basePopularity: 0.35, region: "americas" },
  { id: "AR-CAFAYATE", name: "Cafayate", country: "AR", lat: -26.07, lng: -65.97, category: "nature", seasonality: "year-round", basePopularity: 0.32, region: "americas" },
  { id: "CL-LAKE-DISTRICT", name: "Chilean Lake District", country: "CL", lat: -40.15, lng: -72.33, category: "nature", seasonality: "summer", basePopularity: 0.48, region: "americas" },
  { id: "EC-AMAZON", name: "Ecuadorian Amazon", country: "EC", lat: -1.50, lng: -77.63, category: "nature", seasonality: "year-round", basePopularity: 0.32, region: "americas" },
  { id: "BO-SUCRE", name: "Sucre", country: "BO", lat: -19.04, lng: -65.26, category: "cultural", seasonality: "year-round", basePopularity: 0.32, region: "americas" },
  { id: "UY-COLONIA", name: "Colonia del Sacramento", country: "UY", lat: -34.47, lng: -57.84, category: "cultural", seasonality: "year-round", basePopularity: 0.38, region: "americas" },
  { id: "GT-TIKAL", name: "Tikal", country: "GT", lat: 17.22, lng: -89.62, category: "cultural", seasonality: "winter", basePopularity: 0.42, region: "americas" },
];
