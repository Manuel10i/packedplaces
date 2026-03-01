import { travelPatterns as europeCentral } from "./europe-central";
import { travelPatterns as europeNorth } from "./europe-north";

export const allTravelPatterns = [
  ...europeCentral,
  ...europeNorth,
];

export { allTravelPatterns as travelPatterns };
