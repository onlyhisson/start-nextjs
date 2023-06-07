import Link from "next/link";

export default async function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <Link href="/#work" scroll={true}>
        about - Scroll to specific id.
      </Link>
    </>
  );
}
