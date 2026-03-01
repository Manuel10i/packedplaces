import { destinations as europeCentral } from "./europe-central";
import { destinations as europeNorth } from "./europe-north";
import { destinations as europeSouthEast } from "./europe-south-east";
import { destinations as mena } from "./mena";
import { destinations as asia } from "./asia";
import { destinations as americas } from "./americas";

export const allDestinations = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
  ...asia,
  ...americas,
];

export { allDestinations as destinations };
