import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiSqlite,
  SiPostgresql,
  SiReact,
  SiVuedotjs,
  SiVercel,
  SiNodedotjs,
  SiTailwindcss,
  SiDaisyui,
  SiPlesk,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import React from "react";

const iconStyle = { fontSize: "3rem" };

const SkillIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <Icon style={iconStyle} />
);

const skills = [
  {
    category: "Frontend",
    skills: [
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiNuxtdotjs, name: "Nuxt.js" },
      { Icon: SiReact, name: "React" },
      { Icon: SiVuedotjs, name: "Vue.js" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: SiDaisyui, name: "DaisyUI" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { Icon: SiPrisma, name: "Prisma" },
      { Icon: SiSqlite, name: "SQLite" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiNodedotjs, name: "Node.js" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { Icon: SiVercel, name: "Vercel" },
      { Icon: SiPlesk, name: "Plesk" },
    ],
  },
  {
    category: "Language",
    skills: [
      { Icon: SiPython, name: "Python" },
      { Icon: SiJavascript, name: "Javascript" },
      { Icon: SiTypescript, name: "Typescript" },
    ],
  },
];

const SkillGrid = ({
  skills,
}: {
  skills: Array<{ Icon: React.ElementType; name: string }>;
}) => (
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center h-24 p-4 shadow-lg rounded-lg transform transition-transform hover:scale-105 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/ xl:lg:w-1/6 2xl:lg:w-1/12 min-w-[150px] min-h-[100px]"
      >
        <div className="text-6xl mb-2">
          <SkillIcon Icon={skill.Icon} />
        </div>
        <span className="text-lg font-semibold">{skill.name}</span>
      </div>
    ))}
  </div>
);

export default function Skill() {
  return (
    <div className="flex flex-col items-center p-4" id="skill">
      {skills.map((category) => (
        <React.Fragment key={category.category}>
          <h2 className="text-2xl font-bold mb-6">
            {category.category} Skills
          </h2>
          <SkillGrid skills={category.skills} />
        </React.Fragment>
      ))}
    </div>
  );
}
