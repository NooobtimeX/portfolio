"use client";

import { CgMonday } from "react-icons/cg";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiBootstrap,
  SiClickup,
  SiDaisyui,
  SiGithub,
  SiGitlab,
  SiJavascript,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skill() {
  const skillGroups1 = [
    {
      groupName: "Frontend Framework",
      skills: [
        { name: "NEXT JS", Icon: SiNextdotjs },
        { name: "NUXT JS", Icon: SiNuxtdotjs },
        { name: "REACT JS", Icon: SiReact },
        { name: "VUE JS", Icon: SiVuedotjs },
        { name: "JAVASCRIPT", Icon: SiJavascript },
        { name: "TYPESCRIPT", Icon: SiTypescript },
      ],
    },
    {
      groupName: "Frontend CSS",
      skills: [
        { name: "BOOTSTRAP", Icon: SiBootstrap },
        { name: "TAILWIND CSS", Icon: SiTailwindcss },
        { name: "DAISY UI", Icon: SiDaisyui },
        { name: "SHAD/CN UI", Icon: SiShadcnui },
      ],
    },
  ];

  const skillGroups2 = [
    {
      groupName: "Backend Development",
      skills: [
        { name: "NODE JS", Icon: SiNodedotjs },
        { name: "MYSQL", Icon: SiMysql },
        { name: "POSTGRESQL", Icon: SiPostgresql },
        { name: "SQLITE", Icon: SiSqlite },
        { name: "PRISMA", Icon: SiPrisma },
      ],
    },
  ];

  const skillGroups3 = [
    {
      groupName: "Version Control",
      skills: [
        { name: "GITHUB", Icon: SiGithub },
        { name: "GITLAB", Icon: SiGitlab },
      ],
    },
    {
      groupName: "Document",
      skills: [{ name: "MICROSOFT 365", Icon: FaMicrosoft }],
    },
    {
      groupName: "Project Management Tools",
      skills: [
        { name: "MONDAY", Icon: CgMonday },
        { name: "CLICK UP", Icon: SiClickup },
      ],
    },
  ];
  return (
    <section id="skill" className="min-h-screen container mx-auto">
      <div className="pt-24">
        <h2 className="mb-6 text-4xl font-bold text-primary text-center">
          SKILL
        </h2>
        <div className="gap-4 mx-auto grid lg:grid-cols-2">
          {skillGroups1.map((group, groupIndex) => (
            <SectionTransition key={groupIndex}>
              <Card>
                <h3 className="text-2xl font-semibold text-center">
                  {group.groupName}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.Icon;
                    return (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center p-2">
                              <Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </Card>
            </SectionTransition>
          ))}
        </div>
        <div className="gap-4 grid mx-auto my-4">
          {skillGroups2.map((group, groupIndex) => (
            <SectionTransition key={groupIndex}>
              <Card>
                <h3 className="text-2xl font-semibold text-center">
                  {group.groupName}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.Icon;
                    return (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center p-2">
                              <Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </Card>
            </SectionTransition>
          ))}
        </div>
        <div className="gap-4 mx-auto grid lg:grid-cols-3">
          {skillGroups3.map((group, groupIndex) => (
            <SectionTransition key={groupIndex}>
              <Card>
                <h3 className="text-2xl font-semibold text-center">
                  {group.groupName}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.Icon;
                    return (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center p-2">
                              <Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
