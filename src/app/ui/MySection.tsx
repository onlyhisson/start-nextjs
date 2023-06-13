import "./MySection.scss";

type TSection = {
  no: number;
  id: string;
  title: string;
};

export function MySection({ data }: { data: TSection[] }) {
  return (
    <>
      {data.map((section) => {
        return (
          <section key={section.no} id={section.id}>
            <div className="container">
              <div className="content-wrapper text-center">
                <div className="content">
                  <h2>
                    Hello, This Is <br />
                    The {section.title} Section
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
        );
      })}
    </>
  );
}
