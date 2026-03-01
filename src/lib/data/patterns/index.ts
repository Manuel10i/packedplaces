import { travelPatterns as europeCentral } from "./europe-central";

export const allTravelPatterns = [
  ...europeCentral,
];

// Re-export for backwards compatibility
export { allTravelPatterns as travelPatterns };
