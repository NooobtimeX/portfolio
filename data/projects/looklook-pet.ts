import type { Project } from "@/interface";
import {
	docker,
	flutter,
	mongodb,
	nestjs,
	nextjs,
	shadcnui,
	typescript,
} from "../technologies";

export const looklookPet: Project = {
	id: "looklook-pet",
	title: "LOOKLOOK PET",
	description: "The most personalized, AI-powered pet care experience",
	images: {
		thumbnail: "/project/looklook.webp",
		banner: "/project/looklook.webp",
		photos: ["/project/looklook.webp"],
	},
	technologies: [
		nextjs,
		shadcnui,
		nestjs,
		flutter,
		mongodb,
		typescript,
		docker,
	],
	links: {
		live: "https://looklook.pet/",
	},
};
