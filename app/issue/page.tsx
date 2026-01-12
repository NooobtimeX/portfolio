"use client";

import IssueCard from "@/components/issue/IssueCard";
import { projectsData } from "@/data/projects";
import React from "react";
import { motion } from "framer-motion";

const IssuePage: React.FC = () => {
	return (
		<div className="min-h-screen w-full relative pt-24 bg-black overflow-x-hidden">
			{/* Background */}
			<div className="fixed inset-0 comic-halftone opacity-20 pointer-events-none"></div>

			{/* Header */}
			<div className="container mx-auto px-4 relative z-10 mb-16 text-center">
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className="inline-block relative"
				>
					<div className="bg-white text-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1">
						<h1 className="text-5xl md:text-7xl font-[Bangers] uppercase tracking-wider">
							ISSUE ARCHIVE
						</h1>
					</div>
				</motion.div>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="mt-6 text-xl text-gray-400 font-[Bangers] uppercase tracking-wide"
				>
					Select an issue to read details
				</motion.p>
			</div>

			{/* Projects Grid */}
			<section className="pb-20 relative">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
						{projectsData.map((project, index) => (
							<IssueCard
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

export default IssuePage;
