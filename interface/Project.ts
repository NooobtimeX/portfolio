import { ProjectCategory, ProjectStatus } from "@/enum";
import { Technology } from "./Technology";

// Project interface
export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	technologies: Technology[];
	features: string[];
	status: ProjectStatus;
	category: ProjectCategory;
	links: {
		github?: string;
		live?: string;
		demo?: string;
	};
	createdAt: string;
	updatedAt: string;
}
