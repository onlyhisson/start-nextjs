import { MyNavigation } from "@/app/ui/MyNavigation";
import { MySection } from "@/app/ui/MySection";

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

export default function Home() {
  return (
    <>
      <MyNavigation navLinks={navLinks} />
      <main className="">
        <MySection data={mySections} />
      </main>
    </>
  );
}
