import { NextResponse } from "next/server";
import { destinations } from "@/lib/data/destinations";
import type { AllDestinationsResponse } from "@/types";

export async function GET() {
  const response: AllDestinationsResponse = {
    type: "FeatureCollection",
    features: destinations.map((d) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [d.lng, d.lat] as [number, number],
      },
      properties: {
        destinationId: d.id,
        name: d.name,
      },
    })),
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
