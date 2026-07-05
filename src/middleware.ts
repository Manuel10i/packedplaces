import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  if (hostname.startsWith("map.")) {
    const url = request.nextUrl.clone();
    url.pathname = `/map${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
}

export const config = {
  // Skip API routes, Next internals, PWA assets (manifest/icons) and any
  // static file with an extension so the map-subdomain rewrite never
  // swallows them.
  matcher: ["/((?!api|_next|favicon.ico|manifest.webmanifest|icons|.*\\..*).*)"],
};
