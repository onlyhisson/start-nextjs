import Link from "next/link";

import ProfileNavigation from "@/app/ui/profile/ProfileNavigation";
import SNSLinks from "@/app/ui/SNSLinks";
import { StrongLink2 } from "@/app/ui/profile/CustomLink";

import SectionAbout from "@/app/ui/profile/SectionAbout";
import SectionExperience from "@/app/ui/profile/SectionExperience";
import SectionProjects from "@/app/ui/profile/SectionProjects";

import navLinks from "@/app/static/navigation";
import experienceInfos from "@/app/static/experience";
import projects from "@/app/static/projects";
import Footer from "@/app/ui/profile/Footer";

export default function Profile() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-500 tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">장형수</Link>
              </h1>
              <h2 className="mt-3 text-lg font-normal text-slate-200 sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="mt-4 font-light max-w-xs leading-normal">
                프로젝트에 대한 능동적이고 적극적인 이해, 주어진 환경과 자원에
                따라 필요한 기술을 학습하며 적용하는 일에 열린 태도, 팀원들과
                효과적인 소통을 추구합니다.
              </p>
              <ProfileNavigation navLinks={navLinks} />
            </div>
            <SNSLinks />
          </div>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <SectionAbout id="about" label="About me" />
            <SectionExperience
              id="experience"
              label="Work experience"
              data={experienceInfos}
            />
            <SectionProjects
              id="project"
              label="Selected projects"
              data={projects}
            />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
