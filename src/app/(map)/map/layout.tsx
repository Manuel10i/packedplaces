import type { Metadata } from "next";

// The map is a client component and syncs state (week/year) into the URL query
// string, so set an explicit canonical here to consolidate those variants onto
// the clean /map URL.
export const metadata: Metadata = {
  alternates: { canonical: "https://packedplaces.com/map" },
};

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex w-screen flex-col overflow-hidden" style={{ height: "100dvh" }}>{children}</div>;
}
