import type { MajorEvent } from "@/types";

export interface RecurringEventTemplate {
  id: string;
  name: string;
  destinationId: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  trafficBoost: number;
  category: MajorEvent["category"];
}

export const recurringEvents: RecurringEventTemplate[] = [
  // ========================================
  // FESTIVALS
  // ========================================
  { id: "oktoberfest", name: "Oktoberfest", destinationId: "DE-MUNICH", startMonth: 9, startDay: 19, endMonth: 10, endDay: 4, trafficBoost: 0.7, category: "festival" },
  { id: "carnival-rio", name: "Carnival Rio", destinationId: "BR-RIO", startMonth: 2, startDay: 13, endMonth: 2, endDay: 21, trafficBoost: 0.8, category: "festival" },
  { id: "venice-carnival", name: "Venice Carnival", destinationId: "IT-VENICE", startMonth: 1, startDay: 31, endMonth: 2, endDay: 17, trafficBoost: 0.5, category: "festival" },
  { id: "cologne-carnival", name: "Cologne Carnival", destinationId: "DE-COLOGNE", startMonth: 2, startDay: 12, endMonth: 2, endDay: 17, trafficBoost: 0.4, category: "festival" },
  { id: "mardi-gras", name: "Mardi Gras", destinationId: "US-NEW-ORLEANS", startMonth: 2, startDay: 11, endMonth: 2, endDay: 17, trafficBoost: 0.5, category: "festival" },
  { id: "songkran", name: "Songkran", destinationId: "TH-BANGKOK", startMonth: 4, startDay: 13, endMonth: 4, endDay: 15, trafficBoost: 0.4, category: "festival" },
  { id: "cny-hk", name: "Chinese New Year", destinationId: "HK-HONG-KONG", startMonth: 2, startDay: 15, endMonth: 2, endDay: 23, trafficBoost: 0.5, category: "cultural" },
  { id: "cny-sg", name: "Chinese New Year", destinationId: "SG-SINGAPORE", startMonth: 2, startDay: 15, endMonth: 2, endDay: 23, trafficBoost: 0.4, category: "cultural" },
  { id: "holi", name: "Holi", destinationId: "IN-RAJASTHAN", startMonth: 3, startDay: 3, endMonth: 3, endDay: 4, trafficBoost: 0.3, category: "cultural" },
  { id: "diwali", name: "Diwali", destinationId: "IN-DELHI", startMonth: 11, startDay: 6, endMonth: 11, endDay: 10, trafficBoost: 0.3, category: "cultural" },
  { id: "san-fermin", name: "San Fermín", destinationId: "ES-PAMPLONA", startMonth: 7, startDay: 6, endMonth: 7, endDay: 14, trafficBoost: 0.5, category: "festival" },
  { id: "edinburgh-fringe", name: "Edinburgh Fringe", destinationId: "GB-EDINBURGH", startMonth: 8, startDay: 7, endMonth: 8, endDay: 31, trafficBoost: 0.6, category: "cultural" },
  { id: "cannes-film", name: "Cannes Film Festival", destinationId: "FR-COTE-AZUR", startMonth: 5, startDay: 12, endMonth: 5, endDay: 23, trafficBoost: 0.3, category: "cultural" },
  { id: "kings-day", name: "King's Day", destinationId: "NL-AMSTERDAM", startMonth: 4, startDay: 27, endMonth: 4, endDay: 27, trafficBoost: 0.4, category: "festival" },
  { id: "st-patricks", name: "St. Patrick's Day", destinationId: "IE-DUBLIN", startMonth: 3, startDay: 14, endMonth: 3, endDay: 17, trafficBoost: 0.3, category: "festival" },
  { id: "day-of-dead", name: "Day of the Dead", destinationId: "MX-CDMX", startMonth: 10, startDay: 31, endMonth: 11, endDay: 2, trafficBoost: 0.3, category: "cultural" },
  { id: "semana-santa", name: "Semana Santa", destinationId: "ES-SEVILLE", startMonth: 3, startDay: 29, endMonth: 4, endDay: 5, trafficBoost: 0.4, category: "cultural" },
  { id: "christmas-markets-vienna", name: "Christmas Markets", destinationId: "AT-VIENNA", startMonth: 11, startDay: 22, endMonth: 12, endDay: 23, trafficBoost: 0.3, category: "cultural" },
  { id: "christmas-markets-munich", name: "Christmas Markets", destinationId: "DE-MUNICH", startMonth: 11, startDay: 22, endMonth: 12, endDay: 23, trafficBoost: 0.3, category: "cultural" },
  { id: "inti-raymi", name: "Inti Raymi", destinationId: "PE-CUSCO", startMonth: 6, startDay: 22, endMonth: 6, endDay: 24, trafficBoost: 0.3, category: "cultural" },

  // ========================================
  // MUSIC FESTIVALS
  // ========================================
  { id: "coachella", name: "Coachella", destinationId: "US-CALIFORNIA", startMonth: 4, startDay: 10, endMonth: 4, endDay: 19, trafficBoost: 0.3, category: "music" },
  { id: "tomorrowland", name: "Tomorrowland", destinationId: "BE-BRUSSELS", startMonth: 7, startDay: 17, endMonth: 7, endDay: 26, trafficBoost: 0.3, category: "music" },
  { id: "rock-in-rio", name: "Rock in Rio", destinationId: "BR-RIO", startMonth: 9, startDay: 4, endMonth: 9, endDay: 13, trafficBoost: 0.4, category: "music" },
  { id: "primavera-sound", name: "Primavera Sound", destinationId: "ES-BARCELONA", startMonth: 6, startDay: 4, endMonth: 6, endDay: 7, trafficBoost: 0.2, category: "music" },
  { id: "lollapalooza", name: "Lollapalooza", destinationId: "US-CHICAGO", startMonth: 7, startDay: 30, endMonth: 8, endDay: 3, trafficBoost: 0.2, category: "music" },
  { id: "burning-man", name: "Burning Man", destinationId: "US-LAS-VEGAS", startMonth: 8, startDay: 30, endMonth: 9, endDay: 7, trafficBoost: 0.1, category: "music" },
  { id: "fuji-rock", name: "Fuji Rock", destinationId: "JP-TOKYO", startMonth: 7, startDay: 24, endMonth: 7, endDay: 26, trafficBoost: 0.15, category: "music" },
  { id: "roskilde", name: "Roskilde Festival", destinationId: "DK-COPENHAGEN", startMonth: 6, startDay: 27, endMonth: 7, endDay: 4, trafficBoost: 0.2, category: "music" },

  // ========================================
  // TRADE SHOWS
  // ========================================
  { id: "ces", name: "CES", destinationId: "US-LAS-VEGAS", startMonth: 1, startDay: 6, endMonth: 1, endDay: 9, trafficBoost: 0.3, category: "trade" },
  { id: "mwc", name: "MWC", destinationId: "ES-BARCELONA", startMonth: 3, startDay: 2, endMonth: 3, endDay: 5, trafficBoost: 0.2, category: "trade" },
  { id: "art-basel-miami", name: "Art Basel Miami", destinationId: "US-FLORIDA", startMonth: 12, startDay: 2, endMonth: 12, endDay: 6, trafficBoost: 0.2, category: "trade" },

  // ========================================
  // SPORTS - RECURRING
  // ========================================
  { id: "f1-monaco", name: "F1 Monaco GP", destinationId: "FR-COTE-AZUR", startMonth: 5, startDay: 23, endMonth: 5, endDay: 25, trafficBoost: 0.4, category: "sports" },
  { id: "f1-singapore", name: "F1 Singapore GP", destinationId: "SG-SINGAPORE", startMonth: 10, startDay: 9, endMonth: 10, endDay: 11, trafficBoost: 0.3, category: "sports" },
  { id: "australian-open", name: "Australian Open", destinationId: "AU-MELBOURNE", startMonth: 1, startDay: 18, endMonth: 2, endDay: 1, trafficBoost: 0.2, category: "sports" },
  { id: "french-open", name: "French Open", destinationId: "FR-PARIS", startMonth: 5, startDay: 24, endMonth: 6, endDay: 7, trafficBoost: 0.15, category: "sports" },
  { id: "wimbledon", name: "Wimbledon", destinationId: "GB-LONDON", startMonth: 6, startDay: 29, endMonth: 7, endDay: 12, trafficBoost: 0.15, category: "sports" },
  { id: "us-open-tennis", name: "US Open", destinationId: "US-NYC", startMonth: 8, startDay: 30, endMonth: 9, endDay: 13, trafficBoost: 0.15, category: "sports" },
  { id: "la-tomatina", name: "La Tomatina", destinationId: "ES-VALENCIA", startMonth: 8, startDay: 26, endMonth: 8, endDay: 26, trafficBoost: 0.15, category: "festival" },
];
