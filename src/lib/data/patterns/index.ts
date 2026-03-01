import { travelPatterns as europeCentral } from "./europe-central";
import { travelPatterns as europeNorth } from "./europe-north";
import { travelPatterns as europeSouthEast } from "./europe-south-east";
import { travelPatterns as mena } from "./mena";

export const allTravelPatterns = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
];

export { allTravelPatterns as travelPatterns };
