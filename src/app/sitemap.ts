import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { allDestinationSlugs } from "@/lib/destinations";

const BASE_URL = "https://packedplaces.com";

function langAlternates(path: string) {
  const url = path ? `${BASE_URL}/${path}` : BASE_URL;
  return {
    languages: Object.fromEntries([
      ...locales.map((l) => [l, url]),
      ["x-default", url],
    ]),
  };
}

const PATHS = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "map", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "features/crowdedness", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/seasonality", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/categories", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/holiday-boost", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/timeline", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/holiday-providers", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "features/events", changeFrequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: langAlternates(path),
  }));

  const destinationEntries = allDestinationSlugs().map((slug) => {
    const path = `destination/${slug}`;
    return {
      url: `${BASE_URL}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: langAlternates(path),
    };
  });

  return [...staticEntries, ...destinationEntries];
}
