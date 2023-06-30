import {
  ExperienceCard,
  Section,
  StickySectionTitle,
  TExperience,
} from "@/app/ui/profile";

export default function SectionExperience({
  id,
  label,
  data,
}: {
  id: string;
  label: string;
  data: TExperience[];
}) {
  return (
    <Section id={id} label={label}>
      <StickySectionTitle>Experience</StickySectionTitle>
      <div>
        <ol className="group/list">
          {data.map((experience, idx) => {
            return (
              <li key={`skill-${idx}`} className="mb-12">
                <ExperienceCard experience={experience} />
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
