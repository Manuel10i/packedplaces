import { sourceRegions as europeCentral } from "./europe-central";
import { sourceRegions as europeNorth } from "./europe-north";
import { sourceRegions as europeSouthEast } from "./europe-south-east";
import { sourceRegions as mena } from "./mena";
import { sourceRegions as asia } from "./asia";
import { sourceRegions as americas } from "./americas";
import { sourceRegions as oceaniaAfrica } from "./oceania-africa";
import { sourceRegions as remaining } from "./remaining";

export const allSourceRegions = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
  ...asia,
  ...americas,
  ...oceaniaAfrica,
  ...remaining,
];

export { allSourceRegions as sourceRegions };
