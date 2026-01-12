import { ExperienceId } from "@/enum";
import type { Project } from "@/interface";
import { googleAds, nextjs, tailwindcss, vercel } from "../technologies";

export const rsMedal: Project = {
	id: "rs-medal",
	title: "RS Medal",
	description:
		"A medal showcase web application built to display awards and accolades in an elegant layout.",
	images: {
		thumbnail: "/project/RSMEDAL.png",
		banner: "/project/RSMEDAL.png",
		photos: ["/project/RSMEDAL.png"],
	},
	technologies: [nextjs, vercel, tailwindcss, googleAds],
	links: {
		live: "https://www.rs-medal.com",
	},
	startDate: "2022-08-01",
	linkedExperienceId: ExperienceId.RuamsukPlatingJunior,
};
