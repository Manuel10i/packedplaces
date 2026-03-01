import { destinations as europeCentral } from "./europe-central";
import { destinations as europeNorth } from "./europe-north";
import { destinations as europeSouthEast } from "./europe-south-east";
import { destinations as mena } from "./mena";
import { destinations as asia } from "./asia";
import { destinations as americas } from "./americas";
import { destinations as oceaniaAfrica } from "./oceania-africa";
import { destinations as remaining } from "./remaining";

export const allDestinations = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
  ...asia,
  ...americas,
  ...oceaniaAfrica,
  ...remaining,
];

export { allDestinations as destinations };
