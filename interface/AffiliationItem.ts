import { AffiliationType, Position } from "@/enum";
import { Affiliation } from "./Affiliation";
import { Technology } from "./Technology";

// AffiliationItem interface
export interface AffiliationItem {
	id: string;
	affiliation: Affiliation;
	position: Position;
	description: string;
	technologies: Technology[];
	type: AffiliationType;
	startDate: string;
	endDate?: string;
}
