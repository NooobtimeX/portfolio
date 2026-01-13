"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { affiliationData } from "@/data/affiliationData";
import { AffiliationEntityType } from "@/enum";
import type { Affiliation } from "@/interface";
import { formatAffiliationDuration, isCurrentPosition } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AffiliationPreview() {
	// Group consecutive affiliations
	const groupedAffiliations: Array<{
		affiliation: Affiliation;
		affiliations: typeof affiliationData;
	}> = [];

	for (let i = 0; i < affiliationData.length; i++) {
		const aff = affiliationData[i];
		if (
			groupedAffiliations.length > 0 &&
			groupedAffiliations[groupedAffiliations.length - 1].affiliation.id ===
				aff.affiliation.id
		) {
			groupedAffiliations[groupedAffiliations.length - 1].affiliations.push(
				aff
			);
		} else {
			groupedAffiliations.push({
				affiliation: aff.affiliation,
				affiliations: [aff],
			});
		}
	}

	// Only show the first group (latest company) as preview
	const displayedGroups = groupedAffiliations.slice(0, 1);

	return (
		<section
			id="affiliation"
			className="py-20 relative bg-black overflow-hidden"
		>
			{/* Background elements */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] opacity-20 pointer-events-none"></div>

			<div className="container max-w-7xl mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<div className="inline-block relative">
						<div className="bg-white text-black px-10 py-4 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1">
							<h2 className="text-4xl md:text-6xl font-[Bangers] uppercase tracking-wider">
								CURRENT MISSION
							</h2>
						</div>
					</div>
				</motion.div>

				{/* Affiliation */}
				<div className="relative max-w-3xl mx-auto mb-16">
					{displayedGroups.map((group, groupIndex) => (
						<motion.div
							key={group.affiliation.id + groupIndex}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
							viewport={{ once: true }}
							className="relative mb-0"
						>
							<div className="max-w-3xl mx-auto">
								{/* Company/Affiliation Info Panel */}
								<div className="mb-8 md:mb-0">
									<div className="inline-block bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] hover:scale-105 transition-transform md:ml-8">
										<div className="flex items-center gap-4">
											{group.affiliation.logo && (
												<Image
													src={group.affiliation.logo}
													alt={`${group.affiliation.name} logo`}
													width={60}
													height={60}
													className="rounded-none border-2 border-black"
												/>
											)}
											<div>
												<h3 className="font-[Bangers] text-2xl uppercase tracking-wide text-black">
													{group.affiliation.name}
												</h3>
												{group.affiliation.type ===
													AffiliationEntityType.Company && (
													<Badge
														variant="outline"
														className="text-xs font-[Inter] border-black text-black gap-1 rounded-none px-2"
													>
														<Icon icon="material-symbols:location-on" />
														{group.affiliation.location}
													</Badge>
												)}
											</div>
										</div>
									</div>
								</div>

								{/* Role Details Panel */}
								<div className="relative">
									{group.affiliations.map((affiliation, expIdx) => (
										<motion.div
											key={affiliation.id}
											className={`bg-card md:mx-0 border-4 border-white p-6 shadow-[8px_8px_0px_0px_white] relative z-10 ${expIdx > 0 ? "mt-6" : ""}`}
										>
											<div className="absolute -top-3 -right-3 w-6 h-6 bg-white border-2 border-black z-20 transform rotate-45"></div>
											<div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary border-2 border-black z-20 transform rotate-45"></div>

											<div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b-2 border-white/20 pb-4">
												<h4 className="font-[Bangers] text-xl md:text-2xl text-white uppercase tracking-wide">
													{affiliation.position}
												</h4>

												{isCurrentPosition(affiliation.endDate) && (
													<Badge className="bg-primary text-white font-[Bangers] tracking-widest border-2 border-white rounded-none animate-pulse">
														ACTIVE MISSION
													</Badge>
												)}
											</div>

											<div className="flex items-center gap-2 text-sm text-gray-300 font-[Inter] mb-4">
												<Icon
													icon="material-symbols:calendar-month"
													className="w-4 h-4 text-primary"
												/>
												<span className="font-bold">
													{formatAffiliationDuration(
														affiliation.startDate,
														affiliation.endDate
													)}
												</span>
												<span className="text-zinc-500">|</span>
												<span className="uppercase text-xs font-bold tracking-wider">
													{affiliation.type}
												</span>
											</div>

											{/* Ability Stack */}
											<div className="flex flex-wrap gap-2">
												{affiliation.abilities.map((ability, abilityIndex) => (
													<Badge
														key={abilityIndex}
														variant="outline"
														className="text-[10px] uppercase font-bold border-white/40 text-white/80 rounded-none hover:bg-white hover:text-black transition-colors"
													>
														{ability.name}
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

				{/* Footer Button for Preview */}
				<div className="flex justify-center mt-12">
					<Button
						asChild
						className="bg-transparent text-white border-4 border-white font-[Bangers] text-xl px-10 py-6 hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
					>
						<Link href="/affiliation">VIEW CAREER HISTORY</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
