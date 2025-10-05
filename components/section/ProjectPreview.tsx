"use client";

import ProjectCard from "@/components/project/ProjectCard";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectPreview() {
	return (
		<section id="project" className="py-20 relative">
			{/* Subtle decorative elements */}
			<div className="absolute top-10 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
			<div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						Projects
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						A showcase of my recent work and creative solutions
					</p>
				</motion.div>

				<div className="space-y-16 mb-12">
					{projectsData.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							variant="featured"
							showAllTechnologies={false}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
