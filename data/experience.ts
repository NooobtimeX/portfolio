import { Company, ExperienceType, Location, Position } from "@/enum";
import type { Experience } from "@/interface";
import {
	artificialIntelligence,
	css,
	facebookAds,
	fullStackDevelopment,
	googleAds,
	googleAnalytics,
	mongodb,
	nestjs,
	nextjs,
	nodejs,
	onlineMarketing,
	postgresql,
	prisma,
	seo,
	typescript,
	woocommerce,
	wordpress,
} from "./technologies";

export const experienceData: Experience[] = [
	{
		id: "jasmine-tech",
		company: Company.JasmineTechnologySolution,
		position: Position.SoftwareEngineer,
		location: Location.BangkokThailand,
		description:
			"Technology consulting company specializing in enterprise software solutions.",
		technologies: [nextjs, nestjs, mongodb],
		type: ExperienceType.Work,
		logo: "/logo/JTS.png",
		startDate: "2025-07-16",
	},
	{
		id: "freelance-blitzwerk",
		company: Company.FreelanceWithFriends,
		position: Position.FullStackDeveloper,
		location: Location.Remote,
		description:
			"Collaborative freelance work developing modern web applications for various clients.",
		technologies: [nextjs, typescript, nodejs, postgresql, prisma],
		type: ExperienceType.Freelance,
		logo: "/logo/blitzwerk.png",
		startDate: "2025-01-01",
	},
	{
		id: "ruamsuk-senior",
		company: Company.RuamsukPlating,
		position: Position.SeniorITSupport,
		location: Location.BangkokThailand,
		description:
			"Leading trophy and award manufacturing company specializing in custom plaques and medals.",
		technologies: [
			onlineMarketing,
			artificialIntelligence,
			seo,
			fullStackDevelopment,
		],
		type: ExperienceType.Work,
		logo: "/logo/RSTROPHY.png",
		startDate: "2025-05-01",
		endDate: "2025-07-15",
	},
	{
		id: "ruamsuk-junior",
		company: Company.RuamsukPlating,
		position: Position.JuniorITSupport,
		location: Location.BangkokThailand,
		description:
			"Developing WordPress websites and managing digital marketing campaigns for a leading trophy and award manufacturing company.",
		technologies: [
			wordpress,
			woocommerce,
			css,
			seo,
			googleAnalytics,
			googleAds,
			facebookAds,
		],
		type: ExperienceType.Work,
		logo: "/logo/RSTROPHY.png",
		startDate: "2021-08-01",
		endDate: "2025-04-30",
	},
];
