import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { CookieConsent } from "@/components/CookieConsent";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { THEME_SCRIPT } from "@/components/theme/theme-script";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    // Resolve relative metadata URLs (og:image / twitter:image from the file-based
    // opengraph-image route) against the production origin. Without this, Next.js
    // falls back to http://localhost:3000, which shipped broken social previews.
    metadataBase: new URL("https://packedplaces.com"),
    title: {
      // Every page title already includes the brand (e.g. "Contact — PackedPlaces.com"),
      // so a "%s | PackedPlaces.com" template doubled it. Drop the template; page titles
      // are used as-is and the brand appears once.
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://packedplaces.com",
      siteName: "PackedPlaces.com",
      type: "website",
    },
    // No hreflang alternates: the site serves every language from the same URL
    // (locale is negotiated, not path-prefixed), so per-language alternates would
    // all point here and signal nothing. Destination pages that genuinely have
    // distinct de/en URLs set their own alternates.
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1922" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${plexMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {children}
            <CookieConsent gaId={gaId} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
