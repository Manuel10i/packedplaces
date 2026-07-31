import en from "@/messages/en.json";
import { guides } from "@/lib/guides";

const BASE_URL = "https://packedplaces.com";
const FEED_URL = `${BASE_URL}/guides/feed.xml`;
const HUB_URL = `${BASE_URL}/guides`;

// A single-language (English) Atom feed for the evergreen crowd guides. It lets
// travel newsletters, feed readers and syndication tools (Feedly, Zapier and
// the like) pick up each new guide automatically, so the guide cluster gains a
// distribution channel beyond internal links and the sitemap. Content is served
// static and cached; guides change rarely.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Atom wants an RFC 3339 timestamp; the registry stores a plain ISO date.
function toRfc3339(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toISOString();
}

export async function GET() {
  const g = en.guides as unknown as Record<
    string,
    { cardTitle: string; cardBlurb: string }
  >;

  const entries = [...guides].sort((a, b) =>
    b.publishedISO.localeCompare(a.publishedISO),
  );

  const updated = entries.length
    ? toRfc3339(entries[0].publishedISO)
    : new Date("2026-07-06T00:00:00Z").toISOString();

  const items = entries
    .map((guide) => {
      const copy = g[guide.i18nKey];
      const url = `${BASE_URL}/guides/${guide.slug}`;
      const published = toRfc3339(guide.publishedISO);
      return [
        "  <entry>",
        `    <title>${escapeXml(copy.cardTitle)}</title>`,
        `    <link href="${url}" />`,
        `    <id>${url}</id>`,
        `    <published>${published}</published>`,
        `    <updated>${published}</updated>`,
        `    <summary>${escapeXml(copy.cardBlurb)}</summary>`,
        "  </entry>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    `  <title>${escapeXml(en.guides.hubMetaTitle)}</title>`,
    `  <subtitle>${escapeXml(en.guides.hubMetaDescription)}</subtitle>`,
    `  <link href="${FEED_URL}" rel="self" />`,
    `  <link href="${HUB_URL}" />`,
    `  <id>${HUB_URL}</id>`,
    `  <updated>${updated}</updated>`,
    "  <author><name>PackedPlaces</name></author>",
    items,
    "</feed>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "content-type": "application/atom+xml; charset=utf-8",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
