"use client";

import SectionTransition from "@/components/SectionTransition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaDatabase, FaGitAlt, FaLaptopCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { GrCycle } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import {
	SiClickup,
	SiFirebase,
	SiGithub,
	SiGoogledocs,
	SiGooglegemini,
	SiNextdotjs,
	SiNodedotjs,
	SiOpenai,
	SiPostgresql,
	SiPrisma,
	SiShadcnui,
	SiTailwindcss,
	SiVercel,
} from "react-icons/si";

type Skill = {
	name: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SkillGroup = {
	groupName: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	skills: Skill[];
};

const frontendDevelopment: SkillGroup = {
	groupName: "Frontend Development",
	Icon: FaLaptopCode,
	skills: [
		{ name: "NEXT JS", Icon: SiNextdotjs },
		{ name: "TAILWIND CSS", Icon: SiTailwindcss },
		{ name: "SHAD/CN UI", Icon: SiShadcnui },
	],
};

const backendDevelopment: SkillGroup = {
	groupName: "Backend Development",
	Icon: FaDatabase,
	skills: [
		{ name: "NODE JS", Icon: SiNodedotjs },
		{ name: "POSTGRESQL", Icon: SiPostgresql },
		{ name: "PRISMA", Icon: SiPrisma },
	],
};

const DevOps: SkillGroup = {
	groupName: "DevOps",
	Icon: GrCycle,
	skills: [
		{ name: "VERCEL", Icon: SiVercel },
		{ name: "FIREBASE", Icon: SiFirebase },
	],
};

const versionControl: SkillGroup = {
	groupName: "Version Control",
	Icon: FaGitAlt,
	skills: [{ name: "GITHUB", Icon: SiGithub }],
};

const managementTools: SkillGroup = {
	groupName: "Management Tools",
	Icon: GoProject,
	skills: [{ name: "CLICK UP", Icon: SiClickup }],
};

const documentTools: SkillGroup = {
	groupName: "Document Tools",
	Icon: IoDocumentText,
	skills: [{ name: "GOOGLE DOCS", Icon: SiGoogledocs }],
};

const ArtificialIntelligence: SkillGroup = {
	groupName: "Artificial Intelligence",
	Icon: RiRobot2Fill,
	skills: [
		{ name: "CHATGPT", Icon: SiOpenai },
		{ name: "GEMINI", Icon: SiGooglegemini },
	],
};

function SkillGroupCard({ group }: { group: SkillGroup }) {
	const GroupIcon = group.Icon;
	return (
		<Card className="min-h-full">
			<div className="flex justify-center mt-2">
				<GroupIcon className="h-10 w-10" />
			</div>
			<h3 className="mb-2 text-2xl font-semibold text-center">
				{group.groupName}
			</h3>
			<div className="flex flex-wrap justify-center gap-2">
				{group.skills.map((skill, index) => {
					const SkillIcon = skill.Icon;
					return (
						<Button key={index} variant="outline">
							<SkillIcon className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
							{skill.name}
						</Button>
					);
				})}
			</div>
		</Card>
	);
}

export default function Skill() {
	return (
		<section id="skill" className="min-h-screen container mx-auto">
			<div className="pt-10 md:pt-16">
				<h2 className="text-center text-4xl font-bold text-primary mb-8">
					SKILL
				</h2>
				<div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-4">
					<SectionTransition>
						<SkillGroupCard group={frontendDevelopment} />
					</SectionTransition>
					<SectionTransition>
						<SkillGroupCard group={backendDevelopment} />
					</SectionTransition>
					<SectionTransition>
						<SkillGroupCard group={DevOps} />
					</SectionTransition>
				</div>
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4">
					<SectionTransition>
						<SkillGroupCard group={versionControl} />
					</SectionTransition>
					<SectionTransition>
						<SkillGroupCard group={managementTools} />
					</SectionTransition>
					<SectionTransition>
						<SkillGroupCard group={documentTools} />
					</SectionTransition>
					<SectionTransition>
						<SkillGroupCard group={ArtificialIntelligence} />
					</SectionTransition>
				</div>
			</div>
		</section>
	);
}
