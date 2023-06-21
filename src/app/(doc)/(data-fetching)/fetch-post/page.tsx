import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fetch Post Test",
  description: "Full Error Page",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/item", {
    method: "POST",
    body: JSON.stringify({ test: "test value" }),
  });

  return res.json();
}

export default async function FetchPost() {
  const data = await getData(); // 강제 에러 발생
  console.log(`data : ${JSON.stringify(data)}`);
  return <div>data : {data.res.test}</div>;
}
