"use client";

import ComicPop from "@/components/motion/ComicPop";
import { abilitiesData } from "@/data/abilitiesData";
import { Icon } from "@iconify/react";
import React from "react";

const AbilityPage: React.FC = () => {
	return (
		<div className="min-h-screen w-full relative bg-black pt-24 pb-20 overflow-x-hidden">
			{/* Background Halftone Pattern */}
			<div className="fixed inset-0 comic-halftone opacity-20 pointer-events-none"></div>

			<div className="container max-w-7xl mx-auto px-4 relative z-10">
				{/* Header Section */}
				<ComicPop
					initial={{ opacity: 0, rotate: -2, scale: 0.9 }}
					animate={{ opacity: 1, rotate: 0, scale: 1 }}
					className="text-center mb-20 relative"
				>
					<div className="inline-block bg-white text-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
						<h1 className="text-5xl md:text-7xl font-[Bangers] uppercase tracking-wider">
							ABILITIES
						</h1>
					</div>
					<div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/80 z-[-1] rounded-full animate-pulse"></div>

					<p className="mt-8 text-xl text-gray-400 font-[Bangers] uppercase tracking-wide max-w-2xl mx-auto">
						A comprehensive breakdown of technical capabilities and arsenal
					</p>
				</ComicPop>

				{/* Abilities organized by category */}
				<div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
					{abilitiesData.map((abilityGroup, groupIndex) => (
						<ComicPop
							key={abilityGroup.category}
							initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							delay={groupIndex * 0.1}
							triggerOnce={true}
							className="relative group perspective-1000"
						>
							{/* Panel Container */}
							<div className="bg-card border-4 border-white p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 transform preserve-3d">
								{/* Header Badge */}
								<div className="flex items-center gap-4 mb-8 border-b-4 border-white pb-6 relative">
									<div className="absolute -top-4 -left-4 w-6 h-6 bg-white border-2 border-black transform rotate-45 z-20"></div>

									<div className="w-16 h-16 flex items-center justify-center bg-primary text-white border-4 border-black shadow-[4px_4px_0px_0px_black] transform -rotate-3">
										<Icon icon={abilityGroup.icon} className="w-8 h-8" />
									</div>
									<div className="flex-1">
										<h3 className="text-3xl md:text-4xl font-[Bangers] uppercase text-white tracking-wide leading-none">
											{abilityGroup.category}
										</h3>
										<div className="h-2 w-full bg-white/10 mt-2 rounded-full overflow-hidden">
											<div className="h-full bg-primary w-3/4 animate-pulse"></div>
										</div>
									</div>
								</div>

								{/* Abilities Grid */}
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
									{abilityGroup.abilities.map((ability) => (
										<ComicPop
											key={ability.name}
											whileHover={{ scale: 1.05 }}
											className="flex flex-col items-center justify-center gap-2 p-3 border-2 border-white/10 hover:border-primary hover:bg-primary/20 transition-all cursor-default bg-black/50"
										>
											<Icon
												icon={ability.icon}
												className="w-8 h-8 text-primary mb-1"
											/>
											<span className="font-[Bangers] text-sm md:text-base text-white tracking-wide uppercase text-center line-clamp-1">
												{ability.name}
											</span>
										</ComicPop>
									))}
								</div>

								{/* Decorative elements */}
								<div className="absolute -right-3 -bottom-3 w-10 h-10 border-r-4 border-b-4 border-primary z-[-1]"></div>
							</div>
						</ComicPop>
					))}
				</div>

				{/* Footer Element */}
				<div className="mt-20 text-center opacity-50">
					<div className="inline-block border-2 border-white px-4 py-1 transform rotate-2">
						<span className="font-[Bangers] text-white tracking-widest">
							DATA UPDATED: 2025
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AbilityPage;
