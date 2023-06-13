import { Metadata } from "next";
import { Navigation } from "@/app/ui/Navigation";

const navLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/dashboard", name: "Dashboard" },
  { id: 3, href: "/dynamic-routes/1", name: "Dynamic-route" },
];

export const metadata: Metadata = {
  title: "Dynamic Routes",
  description: "parameter routes",
};

export default function DynamicRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navigation navLinks={navLinks} />
      </div>
      <div className="dr-layout">{children}</div>;
    </>
  );
}
