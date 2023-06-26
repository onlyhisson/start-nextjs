import Link from "next/link";

type TLinkInfo = {
  id: number;
  title: string;
  href: string;
};

type TExperience = {
  period: string;
  title: string;
  titleLabel: string;
  subTitle: string[];
  skillLinks: TLinkInfo[];
  skills: string[];
  description: string;
};

export function TechCard({ experience }: { experience: TExperience }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <Period period={experience.period} />
      <div className="z-10 sm:col-span-6">
        <Title title={experience.title} label={experience.titleLabel}>
          <SubTitle subTitle={experience.subTitle} />
        </Title>
        <p className="mt-2 text-sm leading-normal">{experience.description}</p>
        <SkillLinks items={experience.skillLinks} />
        <Skills items={experience.skills} />
      </div>
    </div>
  );
}

function Title({
  children,
  title,
  label,
}: {
  children: React.ReactNode;
  title: string;
  label: string;
}) {
  return (
    <h3 className="font-medium leading-snug text-slate-200">
      <div>
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
          href="https://upstatement.com"
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span className="inline-block">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
      {children}
    </h3>
  );
}

function SubTitle({ subTitle }: { subTitle: string[] }) {
  return (
    <>
      {subTitle[0] && (
        <div className="mt-1">
          <div className="text-slate-500" aria-hidden="true">
            {subTitle[0]}
          </div>
        </div>
      )}
      {subTitle[1] && (
        <div>
          <div className="text-slate-500" aria-hidden="true">
            {subTitle[1]}
          </div>
        </div>
      )}
    </>
  );
}

export function Period({ period }: { period: string }) {
  return (
    <header
      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="2018 to Present"
    >
      {period}
    </header>
  );
}

export function Skills({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="skills used">
      {items.map((item) => {
        return (
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              {item}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function SkillLinks({ items }: { items: TLinkInfo[] }) {
  return (
    <ul className="mt-2 flex flex-wrap">
      {items.map((item) => {
        return (
          <li key={item.id} className="mr-4">
            <Link
              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-3 w-3"
                aria-hidden="true"
              >
                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
              </svg>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
