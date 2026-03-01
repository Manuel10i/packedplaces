import { destinations as europeCentral } from "./europe-central";
import { destinations as europeNorth } from "./europe-north";
import { destinations as europeSouthEast } from "./europe-south-east";
import { destinations as mena } from "./mena";
import { destinations as asia } from "./asia";

export const allDestinations = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
  ...asia,
];

export { allDestinations as destinations };
