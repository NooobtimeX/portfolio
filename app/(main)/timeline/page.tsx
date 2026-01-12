"use client";

import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";
import { Company } from "@/enum";
import { formatExperienceDuration, isCurrentPosition } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const OriginPage: React.FC = () => {
	// Group consecutive experiences by company
	const groupedExperiences: Array<{
		company: Company;
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
		<div className="min-h-screen w-full relative bg-black pt-24 pb-20 overflow-x-hidden">
			{/* Background elements */}
			<div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] opacity-20 pointer-events-none"></div>
			<div className="fixed inset-0 comic-halftone opacity-10 pointer-events-none"></div>

			<div className="container max-w-7xl mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-24"
				>
					<div className="inline-block relative group">
						<div className="bg-white text-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1 group-hover:rotate-0 transition-transform">
							<h1 className="text-5xl md:text-7xl font-[Bangers] uppercase tracking-wider">
								ORIGIN STORY
							</h1>
						</div>
					</div>
					<p className="mt-8 text-xl text-gray-400 font-[Bangers] uppercase tracking-wide">
						The Professional Journey & Missions
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative max-w-7xl mx-auto">
					{/* Timeline Line */}
					<div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-2 bg-white border-x-2 border-black z-0"></div>

					{groupedExperiences.map((group, groupIndex) => (
						<motion.div
							key={group.company + groupIndex}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
							viewport={{ once: true }}
							className="relative mb-24 md:mb-32 last:mb-0"
						>
							{/* Timeline Icon/Dot */}
							<div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary border-4 border-white shadow-[0_0_25px_theme(colors.primary.DEFAULT)] z-20 flex items-center justify-center rounded-full text-white">
								<span className="font-[Bangers] text-xl">
									{groupedExperiences.length - groupIndex}
								</span>
							</div>

							<div className="md:grid md:grid-cols-2 md:gap-20 pl-24 md:pl-0">
								{/* Company Info Panel */}
								<div
									className={`mb-8 md:mb-0 ${groupIndex % 2 === 0 ? "md:text-right" : "md:col-start-2 md:text-left"}`}
								>
									<div
										className={`inline-block bg-white p-6 border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,50,50,1)] hover:scale-105 transition-transform ${groupIndex % 2 === 0 ? "md:mr-8" : "md:ml-8"} relative`}
									>
										{/* Speech Bubble Tail for Company Info */}
										<div
											className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-l-4 border-b-4 border-black transform rotate-45 z-[-1] ${groupIndex % 2 === 0 ? "right-[-14px] border-r-0 border-t-0" : "left-[-14px] border-l-2 border-b-2"}`}
										></div>

										<div
											className={`flex items-center gap-6 ${groupIndex % 2 === 0 ? "md:flex-row-reverse" : ""}`}
										>
											{group.logo && (
												<Image
													src={group.logo}
													alt={`${group.company} logo`}
													width={80}
													height={80}
													className="rounded-none border-2 border-black"
												/>
											)}
											<div>
												<h3 className="font-[Bangers] text-3xl uppercase tracking-wide text-black leading-none mb-1">
													{group.company}
												</h3>
												<div
													className={`flex items-center gap-1 ${groupIndex % 2 === 0 ? "md:justify-end" : "justify-start"}`}
												>
													<Icon
														icon="material-symbols:location-on"
														className="text-primary w-5 h-5"
													/>
													<span className="font-[Inter] text-black font-bold uppercase text-sm">
														{group.location}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Role Details Panel */}
								<div
									className={`relative ${groupIndex % 2 === 0 ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"}`}
								>
									{/* Connection Line Desktop - Extra thick */}
									<div
										className={`hidden md:block absolute top-8 ${groupIndex % 2 === 0 ? "right-[-5rem] w-20" : "left-[-5rem] w-20"} h-2 bg-white border-y-2 border-black z-0`}
									></div>

									{group.experiences.map((experience, expIdx) => (
										<motion.div
											key={experience.id}
											className={`bg-card md:mx-0 border-4 border-white p-8 shadow-[12px_12px_0px_0px_white] relative z-10 ${expIdx > 0 ? "mt-8" : ""}`}
										>
											<div className="absolute -top-3 -right-3 w-8 h-8 bg-primary border-4 border-black z-20"></div>
											<div className="absolute -bottom-3 -left-3 w-8 h-8 bg-white border-4 border-black z-20"></div>

											<div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-4 border-white/20 pb-4">
												<h4 className="font-[Bangers] text-2xl md:text-3xl text-white uppercase tracking-wide">
													{experience.position}
												</h4>

												{isCurrentPosition(experience.endDate) && (
													<Badge className="bg-primary text-white font-[Bangers] text-lg tracking-widest border-2 border-white rounded-none animate-pulse px-4 py-1">
														ACTIVE MISSION
													</Badge>
												)}
											</div>

											<div className="flex items-center gap-3 text-gray-300 font-[Inter] mb-6 bg-black/40 p-3 -mx-2 rounded border border-white/10">
												<Icon
													icon="material-symbols:calendar-month"
													className="w-5 h-5 text-primary"
												/>
												<span className="font-bold text-lg">
													{formatExperienceDuration(
														experience.startDate,
														experience.endDate
													)}
												</span>
												<span className="text-zinc-500">|</span>
												<span className="uppercase text-sm font-bold tracking-wider text-primary">
													{experience.type}
												</span>
											</div>

											{/* Tech Stack */}
											<div className="flex flex-wrap gap-2">
												{experience.technologies.map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="outline"
														className="text-xs uppercase font-bold border-white/40 text-white/80 rounded-none hover:bg-white hover:text-black transition-colors px-3 py-1"
													>
														{tech.name}
													</Badge>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OriginPage;
