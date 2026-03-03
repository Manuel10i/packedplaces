import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PackedPlaces.com — See How Crowded Travel Destinations Really Get",
    template: "%s | PackedPlaces.com",
  },
  description:
    "PackedPlaces.com visualizes tourist crowdedness for 230+ destinations worldwide, week by week, powered by school holiday data from 75 countries.",
  openGraph: {
    title: "PackedPlaces.com — See How Crowded Travel Destinations Really Get",
    description:
      "Visualize tourist crowdedness for 230+ destinations worldwide, week by week, powered by school holiday data from 75 countries.",
    url: "https://packedplaces.com",
    siteName: "PackedPlaces.com",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
