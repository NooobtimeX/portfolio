"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
					{projectsData.map((project, index) => {
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={project.id}
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
									<div className="group relative overflow-hidden rounded-xl shadow-lg">
										<Image
											src={project.image}
											alt={project.title}
											width={600}
											height={400}
											className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<Badge className="absolute top-4 right-4 bg-background/90 text-foreground backdrop-blur-sm">
											{project.category}
										</Badge>
									</div>
								</div>

								{/* Project Details */}
								<div className="w-full lg:w-1/2 space-y-6">
									<div className="space-y-4">
										<h3 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
											{project.title}
										</h3>
										<p className="text-muted-foreground text-base md:text-lg leading-relaxed">
											{project.description}
										</p>
									</div>

									{/* Technologies */}
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
											Technologies Used
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="outline"
													className="text-sm gap-2 py-1 px-3"
												>
													<Icon icon={tech.icon} className="w-4 h-4" />
													{tech.name}
												</Badge>
											))}
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col sm:flex-row gap-4 pt-4">
										{project.links.live && (
											<Button asChild size="lg" className="flex-1 sm:flex-none">
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
					})}
				</div>
			</div>
		</section>
	);
}
