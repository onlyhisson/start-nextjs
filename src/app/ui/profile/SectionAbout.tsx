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
          경력 초반 Model2(Java, JSP) 풀스택, Linux 서버 셋팅의 경험과 이후 IoT
          디바이스 통신, 암호화폐 서비스 풀스택 개발(Next.js), 앱(React Native)
          출시까지 프론트엔드의 경계를 넘나들며 실전 문제를 직접 해결해온
          개발자입니다.
        </p>
        <p className="mb-4">
          풀스택 개발 경력도 있지만 현재 기준 직전으로 최소 4~5년 이상 React,
          Next.js 개발 경험이 있어서 프론트엔드 개발에 적합합니다. 기획부터
          배포까지 전 과정을 이해할 수 있고 기술 제약 없이 스스로 문제를 찾아
          해결하며 팀 성과를 최우선으로 합니다.
        </p>
        <p className="mb-4">
          최근까지 프리랜서로 여러 프로젝트에 프론트엔드 개발로 참여하며, React
          / Next.js / TypeScript 스택의 개발을 했고 지금은 Claude Code를
          활용하여 워크플로우 개선에 집중하고 있습니다.
        </p>
        <p>
          컴퓨터 앞에 앉아 있는 시간 외에는 웨이트 트레이닝, 수영 등 운동을
          통해서 스트레스를 풀고 있습니다. 때때로 서핑을 목적으로 여행을
          떠납니다.
        </p>
      </div>
    </Section>
  );
}
