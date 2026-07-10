import type { MetadataRoute } from "next";
import { allDestinationSlugs, hreflangSlugMap } from "@/lib/destinations";
import { allGuideSlugs } from "@/lib/guides";

const BASE_URL = "https://packedplaces.com";

/**
 * hreflang cluster for a destination slug. Only destinations with a German
 * exonym slug have genuinely distinct per-language URLs; those get a de/en
 * cluster. Everything else is served from a single URL in every language, so
 * emitting same-URL alternates would signal nothing — return undefined instead.
 */
function destinationAlternates(slug: string) {
  const map = hreflangSlugMap(slug);
  if (!map) return undefined;
  return {
    languages: Object.fromEntries(
      Object.entries(map).map(([lang, s]) => [lang, `${BASE_URL}/destination/${s}`]),
    ),
  };
}

const PATHS = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "map", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "best-time", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "guides", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "features/crowdedness", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/seasonality", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/categories", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/holiday-boost", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/timeline", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/holiday-providers", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/events", changeFrequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages are served from a single URL in every language (locale is
  // negotiated, not path-prefixed), so they carry no hreflang alternates.
  const staticEntries = PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const destinationEntries = allDestinationSlugs().map((slug) => {
    const path = `destination/${slug}`;
    return {
      url: `${BASE_URL}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: destinationAlternates(slug),
    };
  });

  // Editorial crowd guides (single URL per guide, locale negotiated, no
  // hreflang alternates) so the /guides hub and articles are crawl-discoverable
  // rather than reachable only through internal links.
  const guideEntries = allGuideSlugs().map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...destinationEntries, ...guideEntries];
}
