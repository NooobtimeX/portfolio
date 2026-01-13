import { AffiliationId } from "@/enum";
import { Ability } from "./Ability";

// Project interface
export interface Project {
	id: string;
	title: string;
	description: string;
	images: {
		thumbnail: string; // Used for cards and previews
		banner: string; // Used for project detail page header
		photos: string[]; // Gallery of project screenshots/photos
	};
	abilities: Ability[];
	links: {
		github?: string;
		live?: string;
	};
	startDate: string; // YYYY-MM-DD
	endDate?: string; // YYYY-MM-DD or undefined if ongoing/single release
	linkedAffiliationId?: AffiliationId; // ID of the Affiliation this project belongs to
}
