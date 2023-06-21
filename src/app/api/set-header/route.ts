import { headers } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  console.log(`headersList : ${JSON.stringify(headersList)}`); // {}
  console.log(`referer : ${referer}`); // null

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { referer: "set-header-test1" },
  });
}
