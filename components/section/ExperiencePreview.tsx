"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experienceData } from "@/data/experience";
import { formatExperienceDuration, isCurrentPosition } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperiencePreview() {
	// Group consecutive experiences by company
	const groupedExperiences: Array<{
		company: any;
		logo?: string;
		location: string;
		experiences: typeof experienceData;
	}> = [];

	for (let i = 0; i < experienceData.length; i++) {
		const exp = experienceData[i];
		if (
			groupedExperiences.length > 0 &&
			groupedExperiences[groupedExperiences.length - 1].company === exp.company
		) {
			groupedExperiences[groupedExperiences.length - 1].experiences.push(exp);
		} else {
			groupedExperiences.push({
				company: exp.company,
				logo: exp.logo,
				location: exp.location,
				experiences: [exp],
			});
		}
	}

	return (
		<section id="experience" className="py-20 relative">
			{/* Subtle decorative elements */}
			<div className="absolute top-20 left-20 w-72 h-72 bg-secondary/3 rounded-full blur-3xl" />
			<div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						Experience
					</h2>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
						My journey in software development and the experiences that shaped
						my career
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

					{groupedExperiences.map((group, groupIndex) => (
						<motion.div
							key={group.company + groupIndex}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
							viewport={{ once: true }}
							className="relative mb-16"
						>
							{/* Timeline Dot */}
							<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

							<div className="md:grid md:grid-cols-2 md:gap-8 pl-12 md:pl-0">
								{/* Experience Card (Company) */}
								<div
									className={`mb-8 md:mb-0 ${groupIndex % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}`}
								>
									<Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
										<CardHeader>
											<div
												className={`flex items-center gap-4 ${groupIndex % 2 === 0 ? "md:flex-row-reverse" : ""}`}
											>
												{group.logo && (
													<div className="relative">
														<Image
															src={group.logo}
															alt={`${group.company} logo`}
															width={60}
															height={60}
															className="rounded-lg border border-muted"
														/>
													</div>
												)}
												<div className="flex-1">
													<CardTitle className="text-xl">
														{group.company}
													</CardTitle>
													<div
														className={`flex flex-wrap gap-2 mt-2 ${groupIndex % 2 === 0 ? "justify-end" : ""}`}
													>
														<Badge variant="outline" className="text-xs gap-1">
															<Icon
																icon="material-symbols:location-on"
																className="w-3 h-3"
															/>
															{group.location}
														</Badge>
													</div>
												</div>
											</div>
										</CardHeader>
									</Card>
								</div>

								{/* Position Details (all roles) */}
								<div
									className={
										groupIndex % 2 === 0
											? "md:col-start-1 md:pr-8"
											: "md:col-start-2 md:pl-8"
									}
								>
									{group.experiences.map((experience, expIdx) => (
										<motion.div
											key={experience.id}
											initial={{
												opacity: 0,
												x: groupIndex % 2 === 0 ? -30 : 30,
											}}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6, delay: 0.1 + expIdx * 0.1 }}
											viewport={{ once: true }}
											className="mb-6"
										>
											<Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
												<CardHeader>
													<div className="flex flex-wrap items-center justify-between gap-2">
														<CardTitle className="text-lg">
															{experience.position}
														</CardTitle>
														<Badge
															variant={
																isCurrentPosition(experience.endDate)
																	? "default"
																	: "outline"
															}
														>
															{experience.type}
														</Badge>
													</div>
													<div className="flex items-center gap-4 text-sm text-muted-foreground">
														<div className="flex items-center gap-1">
															<Icon
																icon="material-symbols:calendar-month"
																className="w-3 h-3"
															/>
															<span>
																{formatExperienceDuration(
																	experience.startDate,
																	experience.endDate
																)}
															</span>
														</div>
														{isCurrentPosition(experience.endDate) && (
															<Badge variant="default" className="text-xs">
																Current
															</Badge>
														)}
													</div>
												</CardHeader>
												<CardContent>
													{/* Technologies */}
													<div>
														<h4 className="font-medium mb-2">
															Technologies & Tools
														</h4>
														<div className="flex flex-wrap gap-2">
															{experience.technologies.map(
																(tech, techIndex) => (
																	<Badge
																		key={techIndex}
																		variant="outline"
																		className="text-xs gap-1"
																	>
																		<Icon
																			icon={tech.icon}
																			className="w-3 h-3"
																		/>
																		{tech.name}
																	</Badge>
																)
															)}
														</div>
													</div>
												</CardContent>
											</Card>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
