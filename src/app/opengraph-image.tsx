import { ImageResponse } from "next/og";
import { crowdColor } from "@/lib/crowd-palette";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FRAUNCES_URL =
  "https://fonts.gstatic.com/s/fraunces/v38/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lod_sPEKsxx664UJf1iVSv7W.ttf";

// A stylized "typical year" curve for the brand card.
const SAMPLE = [0.2, 0.15, 0.2, 0.3, 0.35, 0.55, 0.85, 0.95, 0.6, 0.35, 0.25, 0.45];

async function loadFraunces(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(FRAUNCES_URL);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OgImage() {
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
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#c2542f" }}>
            700+ DESTINATIONS · 100+ COUNTRIES · 52 WEEKS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              fontSize: 88,
              lineHeight: 1.06,
              color: "#22303a",
              fontFamily: fraunces ? "Fraunces" : undefined,
            }}
          >
            <span>See how crowded the world</span>
            <span style={{ fontStyle: "italic", color: "#c2542f" }}>really gets.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 140 }}>
            {SAMPLE.map((v, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  width: 78,
                  height: Math.max(18, v * 140),
                  borderRadius: 3,
                  backgroundColor: crowdColor(v, "light"),
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid #d8cdb8",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 32,
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
      ...size,
      fonts: fraunces
        ? [
            { name: "Fraunces", data: fraunces, style: "normal" as const, weight: 600 as const },
            { name: "Fraunces", data: fraunces, style: "italic" as const, weight: 600 as const },
          ]
        : undefined,
    },
  );
}
