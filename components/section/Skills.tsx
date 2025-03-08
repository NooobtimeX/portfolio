"use client";

import SectionTransition from "@/components/SectionTransition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CgMonday } from "react-icons/cg";
import { FaDatabase, FaGitAlt, FaLaptopCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import {
  SiBootstrap,
  SiClickup,
  SiDaisyui,
  SiGithub,
  SiGitlab,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

type Skill = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SkillGroup = {
  groupName: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: Skill[];
};

const frontendDevelopment: SkillGroup = {
  groupName: "Frontend Development",
  Icon: FaLaptopCode,
  skills: [
    { name: "NEXT JS", Icon: SiNextdotjs },
    { name: "NUXT JS", Icon: SiNuxtdotjs },
    { name: "REACT JS", Icon: SiReact },
    { name: "VUE JS", Icon: SiVuedotjs },
    { name: "BOOTSTRAP", Icon: SiBootstrap },
    { name: "TAILWIND CSS", Icon: SiTailwindcss },
    { name: "DAISY UI", Icon: SiDaisyui },
    { name: "SHAD/CN UI", Icon: SiShadcnui },
  ],
};

const backendDevelopment: SkillGroup = {
  groupName: "Backend Development",
  Icon: FaDatabase,
  skills: [
    { name: "NODE JS", Icon: SiNodedotjs },
    { name: "MYSQL", Icon: SiMysql },
    { name: "POSTGRESQL", Icon: SiPostgresql },
    { name: "PRISMA", Icon: SiPrisma },
  ],
};

const versionControl: SkillGroup = {
  groupName: "Version Control",
  Icon: FaGitAlt,
  skills: [
    { name: "GITHUB", Icon: SiGithub },
    { name: "GITLAB", Icon: SiGitlab },
  ],
};

const managementTools: SkillGroup = {
  groupName: "Management Tools",
  Icon: GoProject,
  skills: [
    { name: "MONDAY", Icon: CgMonday },
    { name: "CLICK UP", Icon: SiClickup },
  ],
};

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const GroupIcon = group.Icon;
  return (
    <Card className="min-h-full">
      <div className="flex justify-center mt-4">
        <GroupIcon className="h-10 w-10" />
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-center">
        {group.groupName}
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {group.skills.map((skill, index) => {
          const SkillIcon = skill.Icon;
          return (
            <Button key={index} variant="outline">
              <SkillIcon className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              {skill.name}
            </Button>
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
        <div className="grid gap-4 grid-cols-1">
          <SectionTransition>
            <SkillGroupCard group={frontendDevelopment} />
          </SectionTransition>
          <SectionTransition>
            <SkillGroupCard group={backendDevelopment} />
          </SectionTransition>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
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
