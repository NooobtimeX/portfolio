import { SkillCategory } from "@/enum";

// Technology interface for reusable tech objects
export interface Technology {
	name: string;
	icon: string; // Icon name for @iconify/react
	category?: SkillCategory;
}
