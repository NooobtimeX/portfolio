import { Technology } from "./Technology";

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
	technologies: Technology[];
	links: {
		github?: string;
		live?: string;
	};
}
