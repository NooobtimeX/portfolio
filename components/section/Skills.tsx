"use client";

import { CgMonday } from "react-icons/cg";
import {
  SiBootstrap,
  SiClickup,
  SiDaisyui,
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import SectionTransition from "@/components/SectionTransition";
import { Card } from "@/components/ui/card";

type Skill = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SkillGroup = {
  groupName: string;
  skills: Skill[];
};

const frontendFramework: SkillGroup = {
  groupName: "Frontend Framework",
  skills: [
    { name: "NEXT JS", Icon: SiNextdotjs },
    { name: "NUXT JS", Icon: SiNuxtdotjs },
    { name: "REACT JS", Icon: SiReact },
    { name: "VUE JS", Icon: SiVuedotjs },
    { name: "JAVASCRIPT", Icon: SiJavascript },
    { name: "TYPESCRIPT", Icon: SiTypescript },
  ],
};

const frontendCSS: SkillGroup = {
  groupName: "Frontend CSS",
  skills: [
    { name: "BOOTSTRAP", Icon: SiBootstrap },
    { name: "TAILWIND CSS", Icon: SiTailwindcss },
    { name: "DAISY UI", Icon: SiDaisyui },
    { name: "SHAD/CN UI", Icon: SiShadcnui },
    { name: "MUI", Icon: SiMui },
  ],
};

const backendDevelopment: SkillGroup = {
  groupName: "Backend Development",
  skills: [
    { name: "NODE JS", Icon: SiNodedotjs },
    { name: "MYSQL", Icon: SiMysql },
    { name: "POSTGRESQL", Icon: SiPostgresql },
    { name: "SQLITE", Icon: SiSqlite },
    { name: "PRISMA", Icon: SiPrisma },
  ],
};

const versionControl: SkillGroup = {
  groupName: "Version Control",
  skills: [
    { name: "GITHUB", Icon: SiGithub },
    { name: "GITLAB", Icon: SiGitlab },
  ],
};

const managementTools: SkillGroup = {
  groupName: "Management Tools",
  skills: [
    { name: "MONDAY", Icon: CgMonday },
    { name: "CLICK UP", Icon: SiClickup },
  ],
};

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <Card className="h-full">
      <h3 className="mb-2 text-2xl font-semibold text-center">
        {group.groupName}
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {group.skills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <div key={index}>
              <div className="flex flex-col items-center justify-center p-2">
                <Icon className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12" />
              </div>
              <div className="text-center mx-auto">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default function Skill() {
  return (
    <section id="skill" className="min-h-screen container mx-auto">
      <div className="pt-10 lg:pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          SKILL
        </h2>
        <div className="grid gap-4 grid-cols-1 md:gri d-cols-2 lg:grid-cols-3">
          <SectionTransition>
            <SkillGroupCard group={frontendFramework} />
          </SectionTransition>
          <SectionTransition>
            <SkillGroupCard group={frontendCSS} />
          </SectionTransition>
          <div className="hidden lg:block">
            <SectionTransition>
              <SkillGroupCard group={backendDevelopment} />
            </SectionTransition>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 mt-4 lg:m-0">
          <div className="lg:hidden block">
            <SectionTransition>
              <SkillGroupCard group={backendDevelopment} />
            </SectionTransition>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4  ">
          <SectionTransition>
            <SkillGroupCard group={versionControl} />
          </SectionTransition>
          <SectionTransition>
            <SkillGroupCard group={managementTools} />
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
