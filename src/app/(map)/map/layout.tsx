export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex w-screen flex-col overflow-hidden" style={{ height: "100dvh" }}>{children}</div>;
}
