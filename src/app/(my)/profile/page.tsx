import Link from "next/link";
import Image from "next/image";
import ProfileNavigation from "@/app/ui/profile/ProfileNavigation";
import SNSLinks from "@/app/ui/SNSLinks";
import {
  Section,
  ExperienceCard,
  StickySectionTitle,
  ProjectCard,
} from "@/app/ui/profile/Profile";
import { StrongLink, StrongLink2 } from "@/app/ui/profile/CustomLink";

import skillInfos from "@/app/static/experience";
import projects from "@/app/static/projects";

const navLinks = [
  { id: 1, href: "#about", name: "About" },
  { id: 2, href: "#experience", name: "Experience" },
  { id: 3, href: "#projects", name: "Projects" },
];

export default function Profile() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">Jang Hyeong-su</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, inclusive products and digital experiences
                for the web.
              </p>
              <ProfileNavigation navLinks={navLinks} />
            </div>
            <SNSLinks />
          </div>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" label="About me">
              <StickySectionTitle>About</StickySectionTitle>
              <div>
                <p className="mb-4">
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and I’ve
                  had the privilege of building software for an{" "}
                  <StrongLink href="https://us.mullenlowe.com/">
                    advertising agency
                  </StrongLink>
                  , a{" "}
                  <StrongLink href="https://starry.com/">start-up</StrongLink>,
                  a{" "}
                  <StrongLink href="https://scout.camd.northeastern.edu/">
                    student-led design studio
                  </StrongLink>
                  , and a{" "}
                  <StrongLink href="https://www.apple.com/apple-music/">
                    huge corporation
                  </StrongLink>
                  .
                </p>
                <p className="mb-4">
                  My main focus these days is building products and leading
                  projects for our clients at{" "}
                  <StrongLink href="https://upstatement.com/">
                    Upstatement
                  </StrongLink>
                  . In my free time I've also released an{" "}
                  <StrongLink href="https://www.newline.co/courses/build-a-spotify-connected-app">
                    online video course
                  </StrongLink>{" "}
                  that covers everything you need to know to build a web app
                  with the Spotify API.
                </p>
                <p>
                  When I’m not at the computer, I’m usually rock climbing,
                  hanging out with my wife and two cats, or running around
                  Hyrule searching for{" "}
                  <span className="group/korok inline-flex lg:cursor-[url('/next.svg'),_pointer] lg:font-medium lg:text-slate-200">
                    <span className="sr-only">Korok seeds</span>
                    <span
                      className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                      aria-hidden="true"
                    >
                      K
                    </span>
                    <span
                      className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                      aria-hidden="true"
                    >
                      r
                    </span>
                    <span
                      className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                      aria-hidden="true"
                    >
                      o
                    </span>
                    <span
                      className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                      aria-hidden="true"
                    >
                      k
                    </span>
                    <span
                      className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                      aria-hidden="true"
                    >
                      &nbsp;
                    </span>
                    <span
                      className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                    <span
                      className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
                      aria-hidden="true"
                    >
                      e
                    </span>
                    <span
                      className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                      aria-hidden="true"
                    >
                      d
                    </span>
                    <span
                      className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
                      aria-hidden="true"
                    >
                      s
                    </span>
                  </span>
                  .
                </p>
              </div>
            </Section>

            <Section id="experience" label="Work experience">
              <StickySectionTitle>Experience</StickySectionTitle>
              <div>
                <ol className="group/list">
                  {skillInfos.map((experience) => {
                    return (
                      <li className="mb-12">
                        <ExperienceCard experience={experience} />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Section>

            <Section id="project" label="Selected projects">
              <StickySectionTitle>Project</StickySectionTitle>
              <div>
                <ol className="group/list">
                  {projects.map((project) => {
                    return (
                      <li className="mb-12">
                        <ProjectCard project={project} />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Section>
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in{" "}
                <StrongLink2 href="https://www.figma.com/">Figma</StrongLink2>{" "}
                and coded in{" "}
                <StrongLink2 href="https://code.visualstudio.com/">
                  Visual Studio Code
                </StrongLink2>{" "}
                by yours truly. Built with{" "}
                <StrongLink2 href="https://nextjs.org/">Next.js</StrongLink2>{" "}
                and{" "}
                <StrongLink2 href="https://tailwindcss.com/">
                  Tailwind CSS
                </StrongLink2>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
