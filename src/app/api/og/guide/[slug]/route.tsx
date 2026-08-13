import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { getGuide } from "@/lib/guides";
import { getMonthlyBusyness } from "@/lib/services/destination-busyness";
import { crowdColor } from "@/lib/crowd-palette";

/**
 * On-demand Open Graph card for an editorial guide (1200×630). Mirrors the
 * destination card so shared guide links render a full-width branded preview
 * instead of the image-less "summary_large_image" fallback. Lives under /api so
 * it stays dynamic while the guide pages remain fully static — the pages
 * reference it via openGraph.images in their generateMetadata. The bar strip is
 * the target destination's real 12-month crowd profile (same source the article
 * uses), so the card is a genuine data card, not decoration.
 */

export const runtime = "nodejs";

const SIZE = { width: 1200, height: 630 };

const FRAUNCES_URL =
  "https://fonts.gstatic.com/s/fraunces/v38/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lod_sPEKsxx664UJf1iVSv7W.ttf";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let frauncesPromise: Promise<ArrayBuffer | null> | null = null;

function loadFraunces(): Promise<ArrayBuffer | null> {
  frauncesPromise ??= fetch(FRAUNCES_URL)
    .then((res) => (res.ok ? res.arrayBuffer() : null))
    .catch(() => null);
  return frauncesPromise;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return new Response("Not found", { status: 404 });
  }

  // OG cards are one-per-URL (locale is negotiated, not path-prefixed), so the
  // shared card uses the English headline, matching the default og:title.
  const t = await getTranslations({ locale: "en", namespace: "guides" });
  const title = t(`${guide.i18nKey}.metaTitle`);
  const scores = getMonthlyBusyness(guide.targetId);
  const fraunces = await loadFraunces();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f1e7",
          backgroundImage:
            "linear-gradient(to right, rgba(34,48,58,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,48,58,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#c2542f" }}>
            CROWD GUIDE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 72,
              lineHeight: 1.06,
              color: "#22303a",
              fontFamily: fraunces ? "Fraunces" : undefined,
              fontStyle: fraunces ? "italic" : undefined,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {scores.map((s: number, i: number) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
              >
                <div
                  style={{
                    width: 82,
                    height: 96,
                    borderRadius: 3,
                    backgroundColor: crowdColor(s, "light"),
                  }}
                />
                <div style={{ display: "flex", fontSize: 17, letterSpacing: 3, color: "#5c6a72" }}>
                  {MONTHS[i]}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid #d8cdb8",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#22303a",
                fontFamily: fraunces ? "Fraunces" : undefined,
              }}
            >
              PackedPlaces
            </div>
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#97998c" }}>
              PACKEDPLACES.COM
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      headers: {
        "Cache-Control": "public, max-age=86400",
      },
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, style: "italic" as const, weight: 600 as const }]
        : undefined,
    },
  );
}
