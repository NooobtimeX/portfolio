import { ExperienceId } from "@/enum";
import type { Project } from "@/interface";
import { googleAds, nextjs, tailwindcss, vercel } from "../technologies";

export const rsAward: Project = {
	id: "rs-award",
	title: "RS Award",
	description:
		"A plaque showcase web application built to display awards and accolades in an elegant layout.",
	images: {
		thumbnail: "/project/RSAWARD.png",
		banner: "/project/RSAWARD.png",
		photos: ["/project/RSAWARD.png"],
	},
	technologies: [nextjs, vercel, tailwindcss, googleAds],
	links: {
		live: "https://www.rs-award.com",
	},
	startDate: "2022-03-01",
	linkedExperienceId: ExperienceId.RuamsukPlatingJunior,
};
