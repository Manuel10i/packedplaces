import { travelPatterns as europeCentral } from "./europe-central";
import { travelPatterns as europeNorth } from "./europe-north";
import { travelPatterns as europeSouthEast } from "./europe-south-east";
import { travelPatterns as mena } from "./mena";
import { travelPatterns as asia } from "./asia";
import { travelPatterns as americas } from "./americas";
import { travelPatterns as oceaniaAfrica } from "./oceania-africa";
import { travelPatterns as remaining } from "./remaining";

export const allTravelPatterns = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
  ...asia,
  ...americas,
  ...oceaniaAfrica,
  ...remaining,
];

export { allTravelPatterns as travelPatterns };
