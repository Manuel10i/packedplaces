import { ImageResponse } from "next/og";
import { crowdColor } from "@/lib/crowd-palette";

/**
 * Default Open Graph card for the site (1200x630), used by the home page and
 * any page that does not supply its own image. Lives under /api so it stays
 * dynamic while the marketing pages remain static; the root layout references
 * it via openGraph.images. Destination pages set their own card at
 * /api/og/destination/[slug].
 */

export const runtime = "nodejs";

const SIZE = { width: 1200, height: 630 };

const FRAUNCES_URL =
  "https://fonts.gstatic.com/s/fraunces/v38/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lod_sPEKsxx664UJf1iVSv7W.ttf";

// A left-to-right crowd ramp (quiet to packed) built from the shared palette,
// so the card reads in the same visual language as the map and the charts.
const RAMP = Array.from({ length: 24 }, (_, i) => i / 23);

let frauncesPromise: Promise<ArrayBuffer | null> | null = null;

function loadFraunces(): Promise<ArrayBuffer | null> {
  frauncesPromise ??= fetch(FRAUNCES_URL)
    .then((res) => (res.ok ? res.arrayBuffer() : null))
    .catch(() => null);
  return frauncesPromise;
}

export async function GET() {
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
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#c2542f" }}>
          127 REGIONS  ·  700+ DESTINATIONS  ·  100+ COUNTRIES
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              color: "#22303a",
              fontFamily: fraunces ? "Fraunces" : undefined,
            }}
          >
            PackedPlaces
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 40,
              lineHeight: 1.15,
              maxWidth: 900,
              color: "#5c6a72",
              fontFamily: fraunces ? "Fraunces" : undefined,
              fontStyle: fraunces ? "italic" : undefined,
            }}
          >
            See how crowded travel destinations really get, week by week.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {RAMP.map((score, i) => (
              <div
                key={i}
                style={{
                  width: 42,
                  height: 48,
                  borderRadius: 3,
                  backgroundColor: crowdColor(score, "light"),
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
              fontSize: 20,
              letterSpacing: 4,
              color: "#97998c",
            }}
          >
            <div style={{ display: "flex" }}>QUIET</div>
            <div style={{ display: "flex" }}>PACKED</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 20,
              fontSize: 22,
              letterSpacing: 4,
              color: "#97998c",
            }}
          >
            PACKEDPLACES.COM
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
        ? [{ name: "Fraunces", data: fraunces, weight: 600 as const }]
        : undefined,
    },
  );
}
