import { Experience } from "./Experience";
import { PersonalData } from "./PersonalData";
import { Project } from "./Project";
import { Skill } from "./Skill";

// Data container interface
export interface PortfolioData {
	personal: PersonalData;
	projects: Project[];
	skills: Skill[];
	experience: Experience[];
}
