"use client";

import { skillsData } from "@/data/skills";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SkillPreview() {
	return (
		<section id="skill" className="py-20 relative">
			<div className="container mx-auto px-4">
				{/* Simple Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						Skills & Technologies
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Technologies I work with to build amazing digital experiences
					</p>
				</motion.div>

				{/* Skills organized by category */}
				<div className="max-w-6xl mx-auto space-y-12">
					{skillsData.map((skillGroup, groupIndex) => (
						<motion.div
							key={skillGroup.category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							{/* Category Header */}
							<div className="text-center">
								<div className="flex items-center justify-center gap-3 mb-2">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
										<Icon
											icon={skillGroup.icon}
											className="w-5 h-5 text-primary"
										/>
									</div>
									<h3 className="text-2xl font-semibold text-foreground">
										{skillGroup.category}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm max-w-md mx-auto">
									{skillGroup.description}
								</p>
							</div>

							{/* Skills Grid for this category */}
							<div className="flex flex-wrap gap-3 justify-center">
								{skillGroup.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.4,
											delay: groupIndex * 0.1 + skillIndex * 0.05,
											type: "spring",
											stiffness: 100,
										}}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05 }}
										className="group"
									>
										<div className="flex flex-col items-center justify-center text-center gap-2 w-32 h-32 px-4 py-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
											<div className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors mx-auto">
												<Icon icon={skill.icon} className="w-6 h-6" />
											</div>
											<div className="flex flex-col gap-1 w-full">
												<span className="font-medium text-sm w-full">
													{skill.name}
												</span>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
