import { getSlugEntry, localizedDestinationName } from "@/lib/destinations";
import { getCountryFlag } from "@/lib/data";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { busynessColor } from "@/lib/busyness-scale";

const BASE_URL = "https://packedplaces.com";
const LOCALES = ["en", "de", "es", "fr"] as const;
type Loc = (typeof LOCALES)[number];

// A handful of micro-strings kept inline: this standalone widget document does
// not run through next-intl (it must stay a tiny, layout-free HTML payload for
// iframes), so it carries its own labels rather than pulling the app messages.
const L: Record<Loc, { busiest: string; quietest: string; more: string }> = {
  en: { busiest: "Busiest", quietest: "Quietest", more: "Full crowd calendar" },
  de: {
    busiest: "Am vollsten",
    quietest: "Am ruhigsten",
    more: "Ganzer Crowd-Kalender",
  },
  es: {
    busiest: "Más lleno",
    quietest: "Más tranquilo",
    more: "Calendario de afluencia",
  },
  fr: {
    busiest: "Le plus fréquenté",
    quietest: "Le plus calme",
    more: "Calendrier de fréquentation",
  },
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pickLocale(value: string | null): Loc {
  return LOCALES.includes(value as Loc) ? (value as Loc) : "en";
}

function monthInitials(locale: string): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: "narrow" });
  return Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2024, i, 1)));
}

function monthLong(locale: string, i: number): string {
  return new Intl.DateTimeFormat(locale, { month: "long" }).format(
    new Date(2024, i, 1),
  );
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const entry = getSlugEntry(slug);
  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  const locale = pickLocale(new URL(request.url).searchParams.get("lang"));
  const d = entry.destination;
  const name = localizedDestinationName(d, locale);
  const flag = getCountryFlag(d.country);
  const scores = getMonthlyBusyness(d.id);
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const busiestIdx = scores.indexOf(max);
  const quietestIdx = scores.indexOf(min);
  const initials = monthInitials(locale);
  const t = L[locale];
  const destUrl = `${BASE_URL}/destination/${slug}`;

  const bars = scores
    .map((s, i) => {
      const h = Math.max(6, Math.round((max > 0 ? s / max : 0) * 46));
      const color = busynessColor(s, "light");
      const title = `${monthLong(locale, i)}`;
      return `<div class="col"><div class="bar" style="height:${h}px;background:${color}" title="${esc(title)}"></div><span>${esc(initials[i])}</span></div>`;
    })
    .join("");

  const html = `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc(name)} ${esc(t.more)}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body { margin: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  .card { max-width: 360px; border: 1px solid #e2d9c6; border-radius: 12px; background: #faf6ee; color: #23303a; padding: 14px 16px; }
  .head { display: flex; align-items: baseline; gap: 6px; }
  .name { font-weight: 700; font-size: 15px; line-height: 1.2; }
  .country { color: #7d7462; font-size: 12px; }
  .chart { display: flex; align-items: flex-end; gap: 4px; height: 58px; margin: 12px 0 4px; }
  .col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; }
  .bar { width: 100%; border-radius: 2px 2px 0 0; }
  .col span { font-size: 9px; color: #7d7462; }
  .meta { font-size: 11px; color: #55606a; margin-top: 8px; }
  .foot { display: block; margin-top: 10px; font-size: 12px; font-weight: 600; color: #b4472a; text-decoration: none; }
  .foot:hover { text-decoration: underline; }
</style>
</head>
<body>
  <div class="card">
    <div class="head">
      <span class="name">${flag} ${esc(name)}</span>
    </div>
    <div class="chart">${bars}</div>
    <div class="meta">${esc(t.busiest)}: ${esc(monthLong(locale, busiestIdx))} &middot; ${esc(t.quietest)}: ${esc(monthLong(locale, quietestIdx))}</div>
    <a class="foot" href="${destUrl}" target="_blank" rel="noopener">${esc(t.more)} &middot; packedplaces &rarr;</a>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      "x-robots-tag": "noindex",
    },
  });
}
