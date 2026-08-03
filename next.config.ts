import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Baseline security headers applied to every response. Deliberately no
// Content-Security-Policy here: a correct CSP for this app (inline theme
// script, Google Fonts, Analytics, Turnstile, map tiles) needs to be built
// and tested against the running app, so it is left as a dedicated follow-up
// rather than shipped as a guess that could break rendering.
const securityHeaders = [
  // Force HTTPS for two years, including subdomains, and allow preload-list
  // submission.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Stop browsers from MIME-sniffing responses away from the declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow framing by other origins (clickjacking protection).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Send only the origin on cross-origin navigations; full URL same-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Explicitly deny powerful features the site does not use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

// The embeddable crowd widget (/embed/*) is meant to be framed by other sites,
// so it must NOT carry the site-wide X-Frame-Options: SAMEORIGIN. It keeps the
// rest of the baseline headers and opens framing via CSP frame-ancestors, and
// it is marked noindex so the thin widget documents never compete with the real
// destination pages in search.
const embedHeaders = [
  ...securityHeaders.filter((h) => h.key !== "X-Frame-Options"),
  { key: "Content-Security-Policy", value: "frame-ancestors *" },
  { key: "X-Robots-Tag", value: "noindex" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      // Everything except the embed widget gets the clickjacking-protected set.
      { source: "/((?!embed/).*)", headers: securityHeaders },
      { source: "/embed/:path*", headers: embedHeaders },
    ];
  },
};

export default withNextIntl(nextConfig);
