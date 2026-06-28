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
    // Every page title already includes the brand (e.g. "Contact — PackedPlaces.com"),
    // so a "%s | PackedPlaces.com" template doubled it. Drop the template; page titles
    // are used as-is and the brand appears once.
    default: "PackedPlaces.com — See How Crowded Travel Destinations Really Get",
    template: "%s",
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
  alternates: {
    languages: {
      en: "https://packedplaces.com",
      de: "https://packedplaces.com",
      es: "https://packedplaces.com",
      fr: "https://packedplaces.com",
      "x-default": "https://packedplaces.com",
    },
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
