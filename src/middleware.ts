/**
 *  '/' root path 요청시 /profile 로 리다이렉트 됨
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("\n[START middleware] >>>>>>>>>>>>>>>>>");
  console.log(`# request.url : ${request.url}\n`);

  //return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  //matcher: "/about/:path*",
  matcher: ["/", "/my"],
};
