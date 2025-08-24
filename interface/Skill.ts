import { SkillCategory } from "@/enum";

// Skill interface
export interface Skill {
	name: string;
	category: SkillCategory;
	icon: string; // Icon name for @iconify/react
}
