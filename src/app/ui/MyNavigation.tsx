"use client";

import { Link } from "react-scroll";
import "./MyNavigation.scss";

type TNavLink = {
  id: number;
  href: string;
  name: string;
};

export function MyNavigation({ navLinks }: { navLinks: TNavLink[] }) {
  return (
    <nav id="navbar" className="navbar">
      <span className="material-symbols-outlined"> menu </span>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            activeClass="active"
            smooth
            duration={0.3}
            spy
            to={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
