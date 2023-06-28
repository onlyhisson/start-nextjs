"use client";

import "./ProfileNavigation.scss";
import { useEffect, useState } from "react";

type TNavLink = {
  id: number;
  ref: string;
  href: string;
  name: string;
};

/**
 * https://codesandbox.io/s/usescrollspy-2d9jg
 */

// 최소한 0 리턴
const minZero = (value: number) => Math.max(0, value);

// find 함수를 사용할 것이기 때문에 양쪽 범위 모두 '=' 포함해도 상관없음
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollSpy = (navLinks: TNavLink[], offset: number = 0) => {
  const sections = navLinks.map((el) => el.ref);
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const scrollHandler = () => {
      // 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환
      const scrollY = window.pageYOffset;

      // viewport 와 각 section 간의 상대적 위치 정보
      const domRectInfos = sections.map((sectionId) => {
        const element = document.getElementById(sectionId);

        // 테스트시 확인 안됨
        if (!element) {
          return { sectionId, top: -1, bottom: -1 };
        }

        // https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
        // 엘리먼트의 크기와 뷰포트와의 상대적인 위치 정보를 제공하는 DOMRect 객체 반환
        /* 
            { 
              x: 뷰포트 왼쪽에서 해당 엘리먼트 왼쪽 기준 위치, 
              y: 뷰포트 상단에서 해당 엘리먼드 상단 간격, 
              left: 뷰포트 왼쪽에서 해당 엘리먼트 왼쪽 기준 위치, 
              top: 뷰포트에서 해당 엘리먼드 상단 간격, 
              bottom: y or top + height, 
              right: x or left + width, 
              width: 해당 엘리먼트 너비, 
              height: 해당 엘리먼트 높이, 
            }
          */
        const domRect = element.getBoundingClientRect();
        const top = minZero(domRect.top + scrollY - offset);
        const bottom = minZero(domRect.bottom + scrollY - offset);

        return { sectionId, top, bottom };
      });

      // 배열에서 먼저 해당 되는 section 엘리먼트 리턴
      const position = domRectInfos.find(({ top, bottom }) =>
        isBetween(scrollY, top, bottom)
      );

      const activeName = position?.sectionId || "";
      if (activeName !== "") {
        setActiveSection(activeName);
      }
    };

    // scrollHandler();

    window.addEventListener("resize", scrollHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("resize", scrollHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [navLinks, offset]);

  return activeSection;
};

export default function ProfileNavigation({
  navLinks,
}: {
  navLinks: TNavLink[];
}) {
  const activeSection = useScrollSpy(navLinks, 110);

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
