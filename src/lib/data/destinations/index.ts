import { destinations as europeCentral } from "./europe-central";
import { destinations as europeNorth } from "./europe-north";
import { destinations as europeSouthEast } from "./europe-south-east";

export const allDestinations = [
  ...europeCentral,
  ...europeNorth,
  ...europeSouthEast,
];

export { allDestinations as destinations };
