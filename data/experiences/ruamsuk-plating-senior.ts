import {
	Company,
	ExperienceId,
	ExperienceType,
	Location,
	Position,
} from "@/enum";
import type { Experience } from "@/interface";
import {
	artificialIntelligence,
	fullStackDevelopment,
	onlineMarketing,
	seo,
} from "../technologies";

export const ruamsukPlatingSenior: Experience = {
	id: ExperienceId.RuamsukPlatingSenior,
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
};
