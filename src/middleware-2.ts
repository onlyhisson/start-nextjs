/**
 * '/profile' 페이지 호출시 URL은 그대로 내용은 /profile2의 컨텐츠가 화면에 출력됨
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.rewrite(new URL("/profile2", request.url));
  }
}
