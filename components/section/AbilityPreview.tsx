"use client";

import { Button } from "@/components/ui/button";
import { skillsData } from "@/data/skills";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function AbilityPreview() {
	// Show only first 2 categories and first 4 skills each as a preview
	const displayedSkills = skillsData.slice(0, 2);

	return (
		<section id="ability" className="py-20 relative bg-black">
			{/* Background Halftone Pattern */}
			<div className="absolute inset-0 comic-halftone opacity-20 pointer-events-none"></div>

			<div className="container mx-auto px-4 relative z-10">

				{/* Header Section with Tape Effect */}
				<motion.div
					initial={{ opacity: 0, rotate: -2 }}
					whileInView={{ opacity: 1, rotate: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16 relative"
				>
					<div className="inline-block bg-white text-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-2">
						<h2 className="text-4xl md:text-6xl font-[Bangers] uppercase tracking-wider">
							TOP ABILITIES
						</h2>
					</div>
					<div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/80 z-[-1] rounded-full"></div>
				</motion.div>

				{/* Skills organized by category */}
				<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
					{displayedSkills.map((skillGroup, groupIndex) => (
						<motion.div
							key={skillGroup.category}
							initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
							viewport={{ once: true }}
							className="relative group"
						>
							{/* Panel Container */}
							<div className={`bg-card border-4 border-white p-6 transition-all duration-300
                                ${groupIndex % 2 === 0
									? "shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
									: "shadow-[8px_8px_0px_0px_rgba(220,10,20,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,10,20,1)]"
								} hover:translate-x-[2px] hover:translate-y-[2px]`}
							>

								{/* Header Badge */}
								<div className="flex items-center gap-3 mb-6 border-b-4 border-white pb-4">
									<div className="w-12 h-12 flex items-center justify-center bg-primary text-white border-2 border-black shadow-[2px_2px_0px_0px_black]">
										<Icon
											icon={skillGroup.icon}
											className="w-6 h-6"
										/>
									</div>
									<h3 className="text-2xl md:text-3xl font-[Bangers] uppercase text-white tracking-wide">
										{skillGroup.category}
									</h3>
								</div>

								{/* Skills Grid */}
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
									{skillGroup.skills.slice(0, 4).map((skill, skillIndex) => (
										<div
											key={skill.name}
											className="flex items-center gap-2 p-2 hover:bg-white/10 transition-colors cursor-default"
										>
											<Icon icon={skill.icon} className="w-5 h-5 text-primary" />
											<span className="font-[Bangers] text-lg text-white tracking-wide uppercase">
												{skill.name}
											</span>
										</div>
									))}
									{skillGroup.skills.length > 4 && (
										<div className="flex items-center justify-center p-2">
											<span className="font-[Inter] text-xs text-gray-400">+{skillGroup.skills.length - 4} more...</span>
										</div>
									)}
								</div>

								{/* Decorative elements */}
								<div className="absolute -right-2 -bottom-2 w-8 h-8 border-r-4 border-b-4 border-white"></div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="flex justify-center">
					<Button asChild className="bg-transparent text-white border-4 border-white font-[Bangers] text-xl px-10 py-6 hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
						<Link href="/ability">VIEW FULL ARSENAL</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
