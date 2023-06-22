import Link from "next/link";
import ProfileNavigation from "@/app/ui/ProfileNavigation";
import Image from "next/image";

const navLinks = [
  { id: 1, href: "about", name: "About" },
  { id: 2, href: "experience", name: "Experience" },
  { id: 3, href: "projects", name: "Projects" },
];

const mySections = [
  { no: 1, id: "about", title: "About" },
  { no: 2, id: "experience", title: "Experience" },
  { no: 3, id: "projects", title: "Projects" },
];

export default function Profile() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">장형수</Link>
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
            <ul className="ml-1 mt-18 flex items-center">
              <li className="mr-5 text-xs">
                <Link
                  className="block hover:text-slate-200"
                  href="https://github.com/onlyhisson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-24 lg:w-1/2 lg:py-24">
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
            <h3>What&apos;s it all about?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium qui error nulla, est deleniti repellat
              soluta animi similique eveniet, amet maxime sapiente, repellendus
              tenetur porro quae? Itaque, provident mollitia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
