/**
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 * https://nextjs.org/docs/app/building-your-application/routing#file-conventions
 */

import "@/app/globals.css";

export const metadata = {
  title: "Profile",
  description: "about, experience, project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
