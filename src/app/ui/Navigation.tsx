"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TNavLink = {
  id: number;
  href: string;
  name: string;
};

export function Navigation({ navLinks }: { navLinks: TNavLink[] }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {navLinks.map((link) => {
        // const isActive = pathname.startsWith(link.href);
        const isActive = pathname === link.href ? true : false;

        return (
          <nav key={link.id}>
            <Link
              className={isActive ? "text-grey" : "text-white"}
              href={link.href}
            >
              {link.name}
            </Link>
          </nav>
        );
      })}
    </>
  );
}
