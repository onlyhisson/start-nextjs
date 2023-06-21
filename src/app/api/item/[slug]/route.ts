import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  return NextResponse.json({
    data: {
      slug,
    },
  });
}
