import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error1",
  description: "Full Error Page",
};

async function getData() {
  throw new Error("test error message");
}

export default async function Error1() {
  const data = await getData(); // 강제 에러 발생
  return <div>Error test Page</div>;
}
