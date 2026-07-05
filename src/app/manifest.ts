import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PackedPlaces — Travel Crowd Forecast",
    short_name: "PackedPlaces",
    description:
      "See how crowded travel destinations really get, week by week — and find the quietest time to go.",
    start_url: "/map?utm_source=pwa",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#f6f1e7",
    orientation: "portrait-primary",
    categories: ["travel", "navigation", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Map",
        url: "/map",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Best time to visit",
        url: "/best-time",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
    ],
  };
}
