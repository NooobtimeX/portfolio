import type { Project } from "@/interface";
import { nextjs, tailwindcss, vercel } from "../technologies";

export const prettierConfig: Project = {
	id: "prettier-config",
	title: "Prettier Config Generator",
	description:
		"Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.",
	images: {
		thumbnail: "/project/prettier.png",
		banner: "/project/prettier.png",
		photos: ["/project/prettier.png"],
	},
	technologies: [nextjs, vercel, tailwindcss],
	links: {
		live: "https://prettier-config-generator.com/",
	},
	startDate: "2024-01-15",
};
