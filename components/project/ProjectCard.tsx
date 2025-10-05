"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/interface";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
	project: Project;
	index?: number;
	variant?: "grid" | "featured";
	showAllTechnologies?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	index = 0,
	variant = "grid",
	showAllTechnologies = false,
}) => {
	if (variant === "featured") {
		// Featured card layout for ProjectPreview (horizontal layout)
		const isEven = index % 2 === 0;

		return (
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: index * 0.1 }}
				viewport={{ once: true }}
				className={`flex flex-col lg:flex-row items-center gap-8 ${
					!isEven ? "lg:flex-row-reverse" : ""
				}`}
			>
				{/* Project Image */}
				<div className="w-full lg:w-1/2">
					<div className="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
						<Image
							src={project.images.thumbnail}
							alt={project.title}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
				</div>

				{/* Project Details */}
				<div className="w-full lg:w-1/2 space-y-6">
					<div className="space-y-4">
						<h3 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
							<Link href={`/project/${project.id}`}>{project.title}</Link>
						</h3>
						<p
							className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-2"
							style={{
								display: "-webkit-box",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical",
								overflow: "hidden",
							}}
						>
							{project.description}
						</p>
					</div>

					{/* Technologies */}
					<div className="space-y-3">
						<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
							Technologies Used
						</h4>
						<div className="flex flex-wrap gap-2">
							{(showAllTechnologies
								? project.technologies
								: project.technologies.slice(0, 4)
							).map((tech, techIndex) => (
								<Badge
									key={techIndex}
									variant="outline"
									className="text-sm gap-2 py-1 px-3"
								>
									<Icon icon={tech.icon} className="w-4 h-4" />
									{tech.name}
								</Badge>
							))}
							{!showAllTechnologies && project.technologies.length > 4 && (
								<Badge variant="outline" className="text-sm py-1 px-3">
									+{project.technologies.length - 4} more
								</Badge>
							)}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<Button asChild size="lg" className="flex-1 sm:flex-none">
							<Link href={`/project/${project.id}`}>View Details</Link>
						</Button>
						{project.links.live && (
							<Button variant="outline" size="lg" asChild>
								<Link
									href={project.links.live}
									target="_blank"
									rel="noopener noreferrer"
								>
									Live Demo
								</Link>
							</Button>
						)}
					</div>
				</div>
			</motion.div>
		);
	}

	// Grid card layout for project listing page
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="group"
		>
			<Card className="py-0 h-full overflow-hidden bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
				<Link href={`/project/${project.id}`}>
					<div className="relative aspect-video">
						<Image
							src={project.images.thumbnail}
							alt={project.title}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
				</Link>
				<CardContent className="p-6 flex flex-col h-full">
					<div className="flex-grow space-y-4">
						<h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
							<Link href={`/project/${project.id}`}>{project.title}</Link>
						</h3>
						<p
							className="text-muted-foreground leading-relaxed line-clamp-2"
							style={{
								display: "-webkit-box",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical",
								overflow: "hidden",
							}}
						>
							{project.description}
						</p>

						{/* Technologies */}
						<div className="space-y-2">
							<div className="flex flex-wrap gap-1">
								{(showAllTechnologies
									? project.technologies
									: project.technologies.slice(0, 4)
								).map((tech, techIndex) => (
									<Badge
										key={techIndex}
										variant="outline"
										className="text-xs gap-1 py-0.5 px-2"
									>
										<Icon icon={tech.icon} className="w-3 h-3" />
										{tech.name}
									</Badge>
								))}
								{!showAllTechnologies && project.technologies.length > 4 && (
									<Badge variant="outline" className="text-xs py-0.5 px-2">
										+{project.technologies.length - 4} more
									</Badge>
								)}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default ProjectCard;
