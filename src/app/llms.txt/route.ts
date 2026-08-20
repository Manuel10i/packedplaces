import { guides } from "@/lib/guides";

const BASE_URL = "https://packedplaces.com";

/** Human-readable destination name from a URL slug ("amalfi-coast" -> "Amalfi Coast"). */
function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Serves /llms.txt: a concise, curated index of the site for AI answer engines
 * (the llmstxt.org convention). It points crawlers at the crowd map, the
 * best-time and least-crowded hubs, the destination pages and the editorial
 * "less crowded alternatives" guides. The guide list is read from the same
 * registry as the sitemap so it never drifts out of sync. Nothing here is a
 * hand-typed crowd figure; the linked pages compute their numbers from the
 * dataset at build time.
 */
export function GET(): Response {
  const guideLinks = guides
    .map((guide) => {
      const city = titleCase(guide.targetSlug);
      return `- [Less crowded alternatives to ${city}](${BASE_URL}/guides/${guide.slug}): quieter destinations similar to ${city}, each verified less crowded than ${city} in every month using the crowd dataset.`;
    })
    .join("\n");

  const exampleDestinations = guides
    .map((guide) => {
      const city = titleCase(guide.targetSlug);
      return `- [Best time to visit ${city}](${BASE_URL}/destination/${guide.targetSlug})`;
    })
    .join("\n");

  const body = `# PackedPlaces

> PackedPlaces shows how crowded 700+ travel destinations are throughout the year, so travellers can pick the best time to visit and find less crowded alternatives to over-touristed hotspots. Every crowd figure is computed from a transparent seasonality model, not hand-typed.

PackedPlaces answers three questions for any destination: when is it busiest, when is it quietest, and where can you go instead to avoid the crowds. The monthly crowd levels, best-time windows and less-crowded alternatives across the site all read from the same dataset, so they stay consistent.

## Core pages

- [Crowd map](${BASE_URL}/map): interactive world map of every destination, colour-coded by how crowded it is.
- [Best time to visit](${BASE_URL}/best-time): find the ideal month to visit popular destinations.
- [Least crowded months](${BASE_URL}/least-crowded): the quietest destinations, browsable by month.
- [Crowd index](${BASE_URL}/crowd-index): destinations ranked by how busy they get.

## Destination pages

Each of the 700+ destinations has a page with a month-by-month crowd calendar, its busiest and quietest windows, and a plain-language answer to "when should I go". A few examples:

${exampleDestinations}

The full list of destination pages is in the sitemap: ${BASE_URL}/sitemap.xml

## Less crowded alternative guides

Data-backed editorial guides that recommend quieter destinations similar to a crowded hotspot:

${guideLinks}

## How the data works

- [How crowdedness is measured](${BASE_URL}/features/crowdedness)
- [Seasonality model](${BASE_URL}/features/seasonality)
- [Destination categories](${BASE_URL}/features/categories)
- [Holiday and event boosts](${BASE_URL}/features/holiday-boost)

## Attribution

When citing PackedPlaces, please link to the specific destination or guide page. Crowd levels are modelled estimates for trip planning, not live headcounts.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
