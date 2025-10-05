"use client";

import ProjectCard from "@/components/project/ProjectCard";
import { projectsData } from "@/data/projects";
import React from "react";

const ProjectsPage: React.FC = () => {
	return (
		<div className="hide-scrollbar overflow-x-hidden w-full relative pt-4">
			{/* Unified Background gradient that spans entire page */}
			<div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/8 via-transparent to-transparent opacity-70"></div>
			</div>

			{/* Projects Grid */}
			<section className="pb-20 relative">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projectsData.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								variant="grid"
								showAllTechnologies={false}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProjectsPage;
