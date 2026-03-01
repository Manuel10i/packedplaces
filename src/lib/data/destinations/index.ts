import { destinations as europeCentral } from "./europe-central";

export const allDestinations = [
  ...europeCentral,
];

// Re-export for backwards compatibility
export { allDestinations as destinations };
