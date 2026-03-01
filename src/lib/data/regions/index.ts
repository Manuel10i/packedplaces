import { sourceRegions as europeCentral } from "./europe-central";
import { sourceRegions as europeNorth } from "./europe-north";
import { sourceRegions as europeSouthEast } from "./europe-south-east";

export const allSourceRegions = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
];

export { allSourceRegions as sourceRegions };
