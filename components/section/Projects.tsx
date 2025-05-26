"use client";

import SectionTransition from "@/components/SectionTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	SiFirebase,
	SiGoogleads,
	SiGoogleanalytics,
	SiGoogletagmanager,
	SiNextdotjs,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiWoocommerce,
	SiWordpress,
} from "react-icons/si";

type Skill = {
	name: string;
	Icon: React.ComponentType<{ size?: number }>;
};

type ProjectItem = {
	href: string;
	imgSrc: string;
	name: string;
	description?: string;
	skills: Skill[];
};

const projects: ProjectItem[] = [
	{
		href: "https://prettier-config-generator.nooobtimex.me/",
		imgSrc: "/project/prettier.png",
		name: "Prettier Config Generator",
		skills: [
			{ name: "NEXT JS", Icon: SiNextdotjs },
			{ name: "VERCEL", Icon: SiVercel },
			{ name: "TAILWIND CSS", Icon: SiTailwindcss },
			{ name: "SHAD/CN UI", Icon: SiShadcnui },
		],
		description:
			"Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.",
	},
	{
		href: "https://combomaker.nooobtimex.me/",
		imgSrc: "/project/ComboMaker.png",
		name: "Combo Maker",
		skills: [
			{ name: "NEXT JS", Icon: SiNextdotjs },
			{ name: "TAILWIND CSS", Icon: SiTailwindcss },
			{ name: "SHAD/CN UI", Icon: SiShadcnui },
			{ name: "TYPESCRIPT", Icon: SiTypescript },
			{ name: "FIREBASE", Icon: SiFirebase },
		],
		description:
			"A platform for designing personalized fighting game combos with a user-friendly interface and seamless sharing capabilities.",
	},
	{
		href: "https://hoyosmash.com/",
		imgSrc: "/project/HoYoSmash.png",
		name: "HoyoSmash",
		skills: [
			{ name: "NEXT JS", Icon: SiNextdotjs },
			{ name: "TAILWIND CSS", Icon: SiTailwindcss },
			{ name: "SHAD/CN UI", Icon: SiShadcnui },
			{ name: "TYPESCRIPT", Icon: SiTypescript },
			{ name: "FIREBASE", Icon: SiFirebase },
		],
		description:
			"An interactive platform where users rate their favorite characters in a fun 'Smash or Pass' style, fostering engaging discussions.",
	},
	{
		href: "https://www.rs-trophy.com",
		imgSrc: "/project/RSTROPHY.png",
		name: "rs-trophy.com",
		skills: [
			{ name: "WORDPRESS", Icon: SiWordpress },
			{ name: "WOOCOMMERCE", Icon: SiWoocommerce },
			{ name: "GOOGLE ADS", Icon: SiGoogleads },
			{
				name: "GOOGLE TAG MANAGER",
				Icon: SiGoogletagmanager,
			},
			{
				name: "Google ANALYTICS",
				Icon: SiGoogleanalytics,
			},
		],
		description:
			"A trophy showcase web application built to display awards and accolades in an elegant layout.",
	},
];

export default function ProjectSection() {
	return (
		<section id="project" className="min-h-screen container mx-auto">
			<div className="pt-16 md:pt-24">
				<h2 className="text-center text-4xl font-bold text-primary mb-8">
					PROJECT
				</h2>
				{/* Make the grid items stretch to ensure equal card height */}
				<div className="grid gap-4 md:grid-cols-2 items-stretch">
					{projects.map((project, index) => (
						<SectionTransition key={index}>
							{/* Flex column to push footer to bottom */}
							<Card className="flex flex-col justify-between h-full">
								<CardHeader className="text-center flex-grow flex flex-col items-center">
									<Image
										src={project.imgSrc}
										alt={project.name}
										className="object-cover rounded-2xl w-64 h-64 mb-4"
										height={200}
										width={200}
										quality={100}
									/>
									<CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
										{project.name}
									</CardTitle>
								</CardHeader>

								{/* flex-grow so content fills available space before footer */}
								<CardContent className="flex-grow flex flex-col items-center">
									{project.description && (
										<p className="text-center text-sm mb-4">
											{project.description}
										</p>
									)}
									<div className="flex flex-wrap justify-center gap-2">
										{project.skills.map((skill, idx) => (
											<Badge key={idx} variant="secondary">
												<skill.Icon size={16} />
												{skill.name}
											</Badge>
										))}
									</div>
								</CardContent>

								{/* Button at the bottom center */}
								<CardFooter className="flex justify-center mt-auto">
									<Button>
										<Link href={project.href} target="_blank">
											View Project
										</Link>
									</Button>
								</CardFooter>
							</Card>
						</SectionTransition>
					))}
				</div>
			</div>
		</section>
	);
}
