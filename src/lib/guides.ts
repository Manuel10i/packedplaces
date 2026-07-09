/**
 * Editorial guide registry. Each guide is an evergreen article that leans on
 * the real crowd dataset: the destinations it references are looked up by slug
 * and their crowd numbers are computed at build time (services/destination-
 * busyness), so nothing here is a hand-typed figure. The hub, the article
 * pages and the sitemap all read from this list to stay in sync.
 */

export interface Guide {
  /** URL slug under /guides/. */
  slug: string;
  /** Destination the guide is written about (dataset id). */
  targetId: string;
  /** Slug of the target destination, for the "compare the original" link. */
  targetSlug: string;
  /**
   * Curated, real less-crowded alternatives (destination slugs), in the order
   * they should appear. Every slug must resolve via getSlugEntry; the crowd
   * figures shown for each are computed from the dataset, not stored here.
   */
  alternativeSlugs: string[];
  /** ISO date the guide was published, for the sitemap and the "updated" line. */
  publishedISO: string;
  /** Translation key under the "guides" namespace holding this guide's copy. */
  i18nKey: string;
}

export const guides: Guide[] = [
  {
    slug: "less-crowded-alternatives-to-hallstatt",
    targetId: "AT-HALLSTATT",
    targetSlug: "hallstatt",
    alternativeSlugs: [
      "cesky-krumlov",
      "colmar",
      "karlovy-vary",
      "eger",
      "mostar",
    ],
    publishedISO: "2026-07-06",
    i18nKey: "hallstatt",
  },
  {
    slug: "less-crowded-alternatives-to-venice",
    targetId: "IT-VENICE",
    targetSlug: "venice",
    alternativeSlugs: [
      "bruges",
      "lake-annecy",
      "giethoorn",
      "piran",
      "rovinj",
    ],
    publishedISO: "2026-07-09",
    i18nKey: "venice",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function allGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
