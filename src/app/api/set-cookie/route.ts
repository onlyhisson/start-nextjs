import { cookies } from "next/headers";

export async function GET(request: Request) {
  // cookies from next/headers is read-only
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  console.log("# cookieStore : ", cookieStore);
  console.log("# token : ", token);

  // new Response => set cookie
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}
