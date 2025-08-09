"use client";

import SectionTransition from "@/components/SectionTransition";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { JSX } from "react";
import {
	FaCode,
	FaCss3Alt,
	FaFacebook,
	FaGoogle,
	FaNodeJs,
	FaPalette,
	FaRobot,
	FaSearch,
	FaWordpress,
} from "react-icons/fa";
import {
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiTypescript,
	SiWoocommerce,
} from "react-icons/si";

export default function VerticalTimeline01() {
	const data = [
		{
			company: "Jasmine Technology Solution",
			logo: "/logo/JTS.png",
			jobs: [
				{
					title: "Software Engineer",
					start: "Jan 2020",
					end: "Dec 2021",
					jobtype: "Full-Time",
					skills: ["Next.js", "Nest.js", "MongoDB"],
					description:
						"Developed and maintained web applications using modern JavaScript frameworks.",
				},
			],
		},

		{
			company: "Freelance with friends",
			logo: "/logo/blitzwerk.png",
			jobs: [
				{
					title: "Full stack developer",
					start: "Jan 2025",
					end: "Present",
					jobtype: "Freelance",
					skills: ["next js", "typescript", "node.js", "postgresql", "prisma"],
					description:
						"Develop and maintain full-stack web applications using modern frameworks.",
				},
			],
		},
		{
			company: "RUAMSUK PLATING LIMITED PARTNERSHIP",
			logo: "/logo/RSTROPHY.png",
			jobs: [
				{
					title: "Senior IT Support",
					start: "May 2025",
					end: "Jul 2025",
					jobtype: "Full-Time",
					skills: [
						"Online Marketing",
						"Artificial Intelligence",
						"SEO",
						"Full Stack Development",
					],
					description:
						"Lead the development of web applications and online marketing strategies, leveraging AI for enhanced user experience and SEO optimization.",
				},
				{
					title: "Junior IT Support",
					start: "Aug 2021",
					end: "Present",
					jobtype: "Part-Time",
					skills: [
						"wordpress",
						"woocommerce",
						"css",
						"seo",
						"google analytics",
						"google ads",
						"facebook ads",
					],
					description:
						"Develop WordPress websites and customize WooCommerce plugins with Analyze and improve SEO strategies with data-driven insights.",
				},
			],
		},
	];
	// Map skill names to icons
	const skillIconMap: Record<string, JSX.Element> = {
		"Next.js": <SiNextdotjs className="inline mr-1" />, // Jasmine
		"Nest.js": <SiNestjs className="inline mr-1" />,
		MongoDB: <SiMongodb className="inline mr-1" />,
		"next js": <SiNextdotjs className="inline mr-1" />,
		typescript: <SiTypescript className="inline mr-1" />,
		"node.js": <FaNodeJs className="inline mr-1" />,
		postgresql: <SiPostgresql className="inline mr-1" />,
		prisma: <SiPrisma className="inline mr-1" />,
		wordpress: <FaWordpress className="inline mr-1" />,
		woocommerce: <SiWoocommerce className="inline mr-1" />,
		css: <FaCss3Alt className="inline mr-1" />,
		seo: <FaSearch className="inline mr-1" />,
		"google analytics": <FaGoogle className="inline mr-1" />,
		"google ads": <FaGoogle className="inline mr-1" />,
		"facebook ads": <FaFacebook className="inline mr-1" />,
		"Online Marketing": <FaPalette className="inline mr-1" />,
		"Artificial Intelligence": <FaRobot className="inline mr-1" />,
		"Full Stack Development": <FaCode className="inline mr-1" />,
	};
	return (
		<section id="experience" className="min-h-screen mx-auto">
			<div className="pt-16 md:pt-24">
				<h2 className="text-center text-4xl font-bold text-primary mb-8">
					EXPERIENCE
				</h2>
				<div className="mx-auto gap-4 grid">
					{data.map((companyData, companyIndex) => (
						<SectionTransition key={companyIndex}>
							<Card className="p-4">
								{/* Company label displayed once */}
								<div className="flex items-center gap-3">
									{companyData.logo && (
										<Image
											src={companyData.logo}
											alt={companyData.company + " logo"}
											height={40}
											width={40}
											className="h-10 w-10 object-contain rounded-lg border border-gray-200 bg-white"
										/>
									)}
									<span className="font-caveat text-2xl font-medium text-primary">
										{companyData.company}
									</span>
								</div>
								{companyData.jobs.map((job, jobIndex) => (
									<div
										key={jobIndex}
										className="group relative py-4 pl-8 sm:pl-32"
									>
										{/* Time + Title */}
										<div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
											<time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-green-100 text-xs font-semibold uppercase text-primary sm:absolute sm:mb-0">
												{job.start}
											</time>
											<div className="text-xl font-bold">
												{job.title} <Badge>{job.jobtype}</Badge>
											</div>
										</div>
										{/* Job Description */}
										{job.description && (
											<p className="mb-2 text-sm text-gray-400">
												{job.description}
											</p>
										)}
										{/* Skills */}
										<div className="space-x-1 space-y-1">
											{job.skills &&
												job.skills.map((skill, index) => (
													<Badge key={index} variant={"secondary"}>
														{skillIconMap[skill] || (
															<FaCode className="inline mr-1" />
														)}{" "}
														{skill}
													</Badge>
												))}
										</div>
									</div>
								))}
							</Card>
						</SectionTransition>
					))}
				</div>
			</div>
		</section>
	);
}
