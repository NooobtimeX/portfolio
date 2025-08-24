import { Skill } from "./Skill";

// Skill group interface for organizing skills by category
export interface SkillGroup {
	category: string;
	description: string;
	icon: string; // Icon name for @iconify/react
	skills: Skill[];
}
