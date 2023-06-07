import { Metadata } from "next";
import { Navigation } from "@/app/ui/Navigation";

const navLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/dashboard", name: "Dashboard" },
  { id: 3, href: "/ssr/1", name: "SSR1" },
];

export const metadata: Metadata = {
  title: "SSR",
  description: "ssr page",
};

export default function SSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navigation navLinks={navLinks} />
      </div>
      <div className="ssr-layout">{children}</div>;
    </>
  );
}
