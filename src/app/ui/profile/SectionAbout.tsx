import { StrongLink } from "@/app/ui/profile/CustomLink";
import { Section, StickySectionTitle } from "@/app/ui/profile";

export default function SectionAbout({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <Section id={id} label={label}>
      <StickySectionTitle>About</StickySectionTitle>
      <div className="font-light">
        <p className="mb-4">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an{" "}
          <StrongLink href="https://us.mullenlowe.com/">
            advertising agency
          </StrongLink>
          , a <StrongLink href="https://starry.com/">start-up</StrongLink>, a{" "}
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
          My main focus these days is building products and leading projects for
          our clients at{" "}
          <StrongLink href="https://upstatement.com/">Upstatement</StrongLink>.
          In my free time I've also released an{" "}
          <StrongLink href="https://www.newline.co/courses/build-a-spotify-connected-app">
            online video course
          </StrongLink>{" "}
          that covers everything you need to know to build a web app with the
          Spotify API.
        </p>
        <p>
          When I’m not at the computer, I’m usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for{" "}
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
  );
}
