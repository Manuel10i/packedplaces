import { destinations as europeCentral } from "./europe-central";
import { destinations as europeNorth } from "./europe-north";
import { destinations as europeSouthEast } from "./europe-south-east";
import { destinations as mena } from "./mena";

export const allDestinations = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
  ...mena,
];

export { allDestinations as destinations };
