import { travelPatterns as europeCentral } from "./europe-central";
import { travelPatterns as europeNorth } from "./europe-north";
import { travelPatterns as europeSouthEast } from "./europe-south-east";

export const allTravelPatterns = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
];

export { allTravelPatterns as travelPatterns };
