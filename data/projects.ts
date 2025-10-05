import type { Project } from "@/interface";
import {
	looklookPet,
	prettierConfig,
	rsAward,
	rsMedal,
} from "./projects/index";

/**
 * Project Data with Image Requirements:
 *
 * Images object should contain:
 * - thumbnail: Aspect ratio 16:9 (e.g., 1200x675px) - Used in project cards and grid
 * - banner: Aspect ratio 21:9 (e.g., 1400x600px) - Used in project detail page hero
 * - photos: Array of square images 1:1 (e.g., 800x800px) - Used in image gallery
 *
 * Individual project files are located in data/projects/ directory for easier maintenance.
 * Add new projects by creating a new file in data/projects/ and importing it here.
 */

export const projectsData: Project[] = [
	looklookPet,
	prettierConfig,
	rsAward,
	rsMedal,
];
