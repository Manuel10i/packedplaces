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
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
