/**
 * postman 으로 직접 호출시
 * await request.json() => 정상 작동 X
 */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
