"use client";

import "./ProfileNavigation.scss";
import { useEffect, useState } from "react";

type TNavLink = {
  id: number;
  ref: string;
  href: string;
  name: string;
};

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const offset = 110;

export default function ProfileNavigation({
  navLinks,
}: {
  navLinks: TNavLink[];
}) {
  const sections = navLinks.map((el) => el.ref);

  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = sections
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      const activeName = position?.id || "";
      if (activeName !== "") {
        setActiveSection(activeName);
      }
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navLinks.map((link, idx) => {
          return (
            <li key={`nav-item-${link.id}`}>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === link.ref ? "active" : ""
                }`}
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
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
