import { Ability } from "./Ability";
import { AffiliationItem } from "./AffiliationItem";
import { PersonalData } from "./PersonalData";
import { Project } from "./Project";

// Data container interface
export interface PortfolioData {
	personal: PersonalData;
	projects: Project[];
	abilities: Ability[];
	affiliations: AffiliationItem[];
}
