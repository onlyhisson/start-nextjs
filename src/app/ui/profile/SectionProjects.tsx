import {
  ProjectCard,
  Section,
  StickySectionTitle,
  TProject,
} from "@/app/ui/profile";

export default function SectionProjects({
  id,
  label,
  data,
}: {
  id: string;
  label: string;
  data: TProject[];
}) {
  return (
    <Section id={id} label={label}>
      <StickySectionTitle>Project</StickySectionTitle>
      <div>
        <ol className="group/list">
          {data.map((project, idx) => {
            return (
              <li key={`project-${idx}`} className="mb-12">
                <ProjectCard project={project} />
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
