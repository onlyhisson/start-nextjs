"use client";

import { Link } from "react-scroll";
import "./ProfileNavigation.scss";

type TNavLink = {
  id: number;
  ref: string;
  href: string;
  name: string;
};

export default function ProfileNavigation({
  navLinks,
}: {
  navLinks: TNavLink[];
}) {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navLinks.map((link, idx) => {
          return (
            <li key={link.id}>
              <Link
                className="group flex items-center py-3"
                activeClass="active"
                smooth
                duration={0.3}
                spy
                to={link.ref}
                href={link.href}
              >
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all
                   group-hover:w-16 group-hover:bg-slate-200 
                   group-focus-visible:w-16 group-focus-visible:bg-slate-200 
                   motion-reduce:transition-none"
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase 
                   tracking-widest text-slate-500
                 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
