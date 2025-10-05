"use client";

import ImageGallery from "@/components/project/ImageGallery";
import ProjectCard from "@/components/project/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/data/projects";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface ProjectDetailPageProps {
	params: Promise<{
		id: string[];
	}>;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
	const resolvedParams = React.use(params);
	const projectId = resolvedParams.id?.[0];
	const project = projectsData.find((p) => p.id === projectId);

	if (!project) {
		notFound();
	}

	return (
		<div className="hide-scrollbar overflow-x-hidden w-full relative">
			{/* Unified Background gradient that spans entire page */}
			<div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/8 via-transparent to-transparent opacity-70"></div>
			</div>

			{/* Navigation */}
			<section className="pt-32 pb-8 relative">
				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Button variant="outline" asChild className="mb-8">
							<Link href="/project" className="flex items-center gap-2">
								<ArrowLeftIcon className="w-4 h-4" />
								Back to Projects
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Hero Section */}
			<section className="pb-20 relative overflow-hidden">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Column - Project Image */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[21/9]">
								<Image
									src={project.images.banner}
									alt={project.title}
									fill
									className="object-cover"
								/>
								<div className="absolute top-4 right-4 flex gap-2"></div>
							</div>
						</motion.div>

						{/* Right Column - Project Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="space-y-8"
						>
							<div className="space-y-4">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
									<span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
										{project.title}
									</span>
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									{project.description}
								</p>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								{project.links.live && (
									<Button asChild size="lg" className="px-8">
										<Link
											href={project.links.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<ExternalLinkIcon className="w-4 h-4" />
											Live
										</Link>
									</Button>
								)}
								{project.links.github && (
									<Button variant="outline" asChild size="lg" className="px-8">
										<Link
											href={project.links.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<GithubIcon className="w-4 h-4" />
											View Code
										</Link>
									</Button>
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Detailed Information */}
			<section className="pb-20 relative">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Project Description */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="lg:col-span-2"
						>
							<Card className="h-full bg-card/50 backdrop-blur-sm border-0 shadow-lg">
								<CardHeader>
									<CardTitle className="text-2xl">About This Project</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<p className="text-muted-foreground leading-relaxed text-lg">
										{project.description}
									</p>

									{/* Image Gallery */}
									{project.images.photos &&
										project.images.photos.length > 0 && (
											<div className="space-y-4">
												<ImageGallery
													images={project.images.photos}
													title={project.title}
												/>
											</div>
										)}
								</CardContent>
							</Card>
						</motion.div>

						{/* Technologies & Meta */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="space-y-6"
						>
							{/* Technologies */}
							<Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg">
								<CardHeader>
									<CardTitle className="text-xl">Technologies Used</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										{project.technologies.map((tech, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
												className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
											>
												<Icon icon={tech.icon} className="w-6 h-6" />
												<div>
													<h4 className="font-medium">{tech.name}</h4>
													{tech.category && (
														<p className="text-sm text-muted-foreground">
															{tech.category}
														</p>
													)}
												</div>
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Related Projects */}
			<section className="pb-20 relative">
				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Other Projects
							</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							Explore more of my work
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projectsData
							.filter((p) => p.id !== project.id)
							.slice(0, 3)
							.map((relatedProject, index) => (
								<ProjectCard
									key={relatedProject.id}
									project={relatedProject}
									index={index}
									variant="grid"
									showAllTechnologies={false}
								/>
							))}
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="text-center mt-12"
					>
						<Button asChild variant="outline" size="lg">
							<Link href="/project">View All Projects</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ProjectDetailPage;
