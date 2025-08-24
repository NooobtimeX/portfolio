import { ProjectCategory, ProjectStatus } from "@/enum";
import type { Project } from "@/interface";
import {
	googleAds,
	mongodb,
	nestjs,
	nextjs,
	tailwindcss,
	typescript,
	vercel,
} from "./technologies";

export const projectsData: Project[] = [
	{
		id: "looklook-pet",
		title: "LOOKLOOK PET",
		description: "The most personalized, AI-powered pet care experience",
		longDescription:
			"LOOKLOOK PET is a comprehensive pet care platform that leverages artificial intelligence to provide personalized care recommendations for pet owners. The platform features real-time health monitoring, customized feeding schedules, and expert veterinary consultations.",
		image: "/project/looklook.webp",
		technologies: [nextjs, nestjs, mongodb, typescript],
		features: [
			"AI-powered pet health analysis",
			"Personalized care recommendations",
			"Real-time health monitoring",
			"Expert veterinary consultations",
			"Customized feeding schedules",
		],
		status: ProjectStatus.Completed,
		category: ProjectCategory.WebApp,
		links: {
			live: "https://looklook.pet/",
		},
		createdAt: "2024-01-01",
		updatedAt: "2024-12-01",
	},
	{
		id: "prettier-config-generator",
		title: "Prettier Config Generator",
		description:
			"Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.",
		longDescription:
			"A user-friendly web application that allows developers to generate Prettier configuration files through an intuitive interface. Users can customize formatting rules, preview changes in real-time, and export configurations for their projects.",
		image: "/project/prettier.png",
		technologies: [nextjs, vercel, tailwindcss],
		features: [
			"Interactive configuration builder",
			"Real-time preview",
			"Export to multiple formats",
			"Preset configurations",
			"Copy to clipboard functionality",
		],
		status: ProjectStatus.Completed,
		category: ProjectCategory.Tool,
		links: {
			live: "https://prettier-config-generator.com/",
		},
		createdAt: "2024-01-15",
		updatedAt: "2024-11-15",
	},
	{
		id: "rs-award",
		title: "RS Award",
		description:
			"A plaque showcase web application built to display awards and accolades in an elegant layout.",
		longDescription:
			"RS Award is a sophisticated showcase platform designed for displaying awards, trophies, and accolades. The platform features elegant layouts, search functionality, and detailed award information with high-quality imagery.",
		image: "/project/RSAWARD.png",
		technologies: [nextjs, vercel, tailwindcss, googleAds],
		features: [
			"Elegant award showcase",
			"Advanced search and filtering",
			"High-quality image gallery",
			"Responsive design",
			"SEO optimized",
		],
		status: ProjectStatus.Completed,
		category: ProjectCategory.WebApp,
		links: {
			live: "https://www.rs-award.com",
		},
		createdAt: "2024-02-01",
		updatedAt: "2024-10-01",
	},
	{
		id: "rs-medal",
		title: "RS Medal",
		description:
			"A medal showcase web application built to display awards and accolades in an elegant layout.",
		longDescription:
			"RS Medal is a complementary platform to RS Award, specifically focused on showcasing medals and sporting achievements. It features categorized displays, athlete profiles, and achievement timelines.",
		image: "/project/RSMEDAL.png",
		technologies: [nextjs, vercel, tailwindcss, googleAds],
		features: [
			"Medal categorization system",
			"Athlete profile management",
			"Achievement timelines",
			"Social sharing features",
			"Mobile-optimized interface",
		],
		status: ProjectStatus.Completed,
		category: ProjectCategory.WebApp,
		links: {
			live: "https://www.rs-medal.com",
		},
		createdAt: "2024-02-15",
		updatedAt: "2024-09-15",
	},
];
