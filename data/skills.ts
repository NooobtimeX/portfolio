import type { SkillGroup } from "@/interface";
import {
	docker,
	firebase,
	github,
	mongodb,
	nestjs,
	nextjs,
	nodejs,
	postgresql,
	react,
	shadcnui,
	tailwindcss,
	typescript,
	vercel,
} from "./technologies";

export const skillsData: SkillGroup[] = [
	{
		category: "Frontend & UI",
		description: "Modern web development and user interface technologies",
		icon: "material-symbols:laptop-chromebook",
		skills: [nextjs, react, typescript, tailwindcss, shadcnui],
	},
	{
		category: "Backend",
		description: "Server-side development and data management",
		icon: "material-symbols:database",
		skills: [nodejs, nestjs, postgresql, mongodb],
	},
	{
		category: "DevOps & Cloud",
		description: "Deployment, cloud services, and development workflow",
		icon: "material-symbols:cloud",
		skills: [vercel, firebase, docker, github],
	},
];
