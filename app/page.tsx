"use client";

import ExperiencePreview from "@/components/section/ExperiencePreview";
import ProjectPreview from "@/components/section/ProjectPreview";
import SkillPreview from "@/components/section/SkillPreview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalData } from "@/data/personal";
import { motion } from "framer-motion";
import { ArrowDownIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
	return (
		<div className="hide-scrollbar overflow-x-hidden w-full relative">
			{/* Unified Background gradient that spans entire page */}
			<div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/8 via-transparent to-transparent opacity-70"></div>
			</div>

			{/* Hero Section - Inline */}
			<section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20">
				<div className="container mx-auto px-4 py-4 relative z-10">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, staggerChildren: 0.2 }}
						className="max-w-6xl mx-auto"
					>
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							{/* Left Column - Text Content */}
							<div className="space-y-8 text-center lg:text-left">
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									className="space-y-2"
								>
									<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
										<span className="block">Hello, I&apos;m</span>
										<span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
											{personalData.name.split(" ")[0]}
										</span>
									</h1>

									<h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
										{personalData.title}
									</h2>
								</motion.div>

								<motion.p
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
								>
									{personalData.tagline}
								</motion.p>

								{/* Contact Info */}
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className="flex flex-wrap gap-4 justify-center lg:justify-start"
								>
									<div className="flex items-center gap-2 text-muted-foreground">
										<MapPinIcon className="w-4 h-4 text-primary" />
										<span className="text-sm">
											{personalData.contact.location}
										</span>
									</div>
									<div className="flex items-center gap-2 text-muted-foreground">
										<MailIcon className="w-4 h-4 text-primary" />
										<span className="text-sm">
											{personalData.contact.email}
										</span>
									</div>
								</motion.div>

								{/* Action Buttons */}
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
								>
									<Button asChild size="lg" className="px-8 py-2 text-lg">
										<Link href="/projects">View My Work</Link>
									</Button>
									<Button
										variant="outline"
										size="lg"
										className="px-8 py-2 text-lg"
									>
										<Link href="#contact">Get In Touch</Link>
									</Button>
								</motion.div>

								{/* Social Links */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									className="flex items-center gap-4 justify-center lg:justify-start"
								>
									<span className="text-sm text-muted-foreground">
										Follow me:
									</span>
									<div className="flex items-center gap-3">
										{personalData.socialLinks.map((social, index) => {
											const SocialIcon = social.icon;
											return (
												<motion.a
													key={index}
													href={social.url}
													target="_blank"
													rel="noopener noreferrer"
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.95 }}
													className="w-10 h-10 bg-card hover:bg-primary/10 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:border-primary/50"
												>
													<SocialIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
												</motion.a>
											);
										})}
									</div>
								</motion.div>
							</div>

							{/* Right Column - Avatar & Stats */}
							<div className="relative">
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.2 }}
									className="relative"
								>
									{/* Decorative background */}
									<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl transform scale-150 animate-pulse"></div>

									{/* Main avatar */}
									<div className="relative z-10 w-80 h-80 md:w-96 md:h-96 mx-auto">
										<Avatar className="w-full h-full border-4 border-background shadow-2xl">
											<AvatarImage
												src={personalData.avatar}
												alt={personalData.name}
												className="object-cover"
											/>
											<AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
												{personalData.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
									</div>

									{/* Floating stats cards */}
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: 0.8 }}
										className="absolute -right-16 top-1/4 hidden xl:block"
									>
										<Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
											<CardContent className="p-3 text-center">
												<div className="text-xl font-bold text-primary">3+</div>
												<div className="text-xs text-muted-foreground whitespace-nowrap">
													Years Experience
												</div>
											</CardContent>
										</Card>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: 1 }}
										className="absolute -left-16 bottom-1/4 hidden xl:block"
									>
										<Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
											<CardContent className="p-3 text-center">
												<div className="text-xl font-bold text-secondary">
													10+
												</div>
												<div className="text-xs text-muted-foreground whitespace-nowrap">
													Projects Completed
												</div>
											</CardContent>
										</Card>
									</motion.div>
								</motion.div>
							</div>
						</div>

						{/* Scroll indicator */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.2 }}
							className="flex flex-col items-center mt-16 lg:mt-20"
						>
							<span className="text-sm text-muted-foreground mb-2">
								Scroll to explore
							</span>
							<motion.div
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="w-8 h-8 border border-primary/50 rounded-full flex items-center justify-center"
							>
								<ArrowDownIcon className="w-4 h-4 text-primary" />
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>
			<SkillPreview />
			<ProjectPreview />
			<ExperiencePreview />
		</div>
	);
};

export default Home;
