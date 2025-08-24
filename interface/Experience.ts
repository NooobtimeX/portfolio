import { Company, ExperienceType, Location, Position } from "@/enum";
import { Technology } from "./Technology";

// Experience interface
export interface Experience {
	id: string;
	company: Company;
	position: Position;
	location: Location;
	description: string;
	technologies: Technology[];
	type: ExperienceType;
	logo?: string;
	startDate: string;
	endDate?: string;
}
