import { MyNavigation } from "@/app/ui/MyNavigation";

const navLinks = [
  { id: 1, href: "about", name: "About" },
  { id: 2, href: "experience", name: "Experience" },
  { id: 3, href: "projects", name: "Projects" },
];

export default function Home() {
  return (
    <>
      <main className="">
        <MyNavigation navLinks={navLinks} />

        <section id="about" className="section">
          <div className="container">
            <div className="content-wrapper text-center">
              <div className="content">
                <h2>
                  Hello, This Is <br />
                  The About Section
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore odit ipsam expedita dolorem.
                  <br />
                  Distinctio, aliquid minima voluptatem saepe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="content-wrapper text-center">
              <div className="content">
                <h2>
                  Hello, I'm The <br />
                  Experience Section
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore odit ipsam expedita dolorem.
                  <br />
                  Distinctio, aliquid minima voluptatem saepe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="content-wrapper text-center">
              <div className="content">
                <h2>
                  Hello, I'm The <br />
                  Projects Section
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore odit ipsam expedita dolorem.
                  <br />
                  Distinctio, aliquid minima voluptatem saepe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
