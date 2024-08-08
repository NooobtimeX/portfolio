import React from "react";

const iconStyle = { width: "3rem", height: "3rem" };

const skills = [
  {
    category: "Frontend",
    skills: [
      { src: "/logo/nextjs.ico", name: "Next.js" },
      { src: "/logo/nuxtjs.png", name: "Nuxt.js" },
      { src: "/logo/react.ico", name: "React" },
      { src: "/logo/vuejs.svg", name: "Vue.js" },
    ],
  },
  {
    category: "CSS Framework",
    skills: [
      { src: "/logo/tailwindcss.png", name: "Tailwind CSS" },
      { src: "/logo/daisyui.ico", name: "DaisyUI" },
      { src: "/logo/bootstrap.ico", name: "Bootstrap" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { src: "/logo/prisma.png", name: "Prisma" },
      { src: "/logo/sqlite.png", name: "SQLite" },
      { src: "/logo/postgresql.ico", name: "PostgreSQL" },
      { src: "/logo/nodejs.png", name: "Node.js" },
    ],
  },
  {
    category: "Programming Language",
    skills: [
      { src: "/logo/python.ico", name: "Python" },
      { src: "/logo/javascript.png", name: "Javascript" },
      { src: "/logo/typescript.ico", name: "Typescript" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { src: "/logo/chatgpt.png", name: "Chat GPT" },
      { src: "/logo/copilot.png", name: "Copilot" },
      { src: "/logo/gemini.svg", name: "Gemini" },
    ],
  },
];

export default function Skill() {
  return (
    <div className="flex flex-col items-center p-4" id="skill">
      {skills.map((category) => (
        <React.Fragment key={category.category}>
          <h2 className="text-2xl font-bold mb-6">
            {category.category} Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-24 p-4 shadow-lg rounded-lg transform transition-transform hover:scale-110 min-w-[150px] min-h-[100px]"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  style={iconStyle}
                  className="rounded-lg"
                />
                <span className="text-lg font mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
