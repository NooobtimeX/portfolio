"use client";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import {
	TbDeviceImacCode,
	TbDeviceIpadHorizontalCode,
	TbDeviceMobileCode,
} from "react-icons/tb";

export default function HeroSection() {
	const socialLinks = [
		{
			icon: <FaGithub />,
			url: "https://github.com/NooobtimeX",
			label: "GitHub",
		},
		{
			icon: <FaFacebook />,
			url: "https://www.facebook.com/xnooobtime",
			label: "Facebook",
		},
	];

	return (
		<section className="min-h-screen bg-base-200 text-base-content flex flex-col lg:flex-row items-center justify-center -pt-20 -mt-6">
			<div className="text-center">
				<div className="flex justify-center items-center mb-2">
					{/* Carousel for icons, not responsive, with autoplay */}
					<Carousel className="w-[120px]" plugins={[Autoplay({ delay: 5000 })]}>
						<CarouselContent>
							<CarouselItem>
								<TbDeviceImacCode size={100} />
							</CarouselItem>
							<CarouselItem>
								<TbDeviceIpadHorizontalCode size={100} />
							</CarouselItem>
							<CarouselItem>
								<TbDeviceMobileCode size={100} />
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
				<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">PORTFOLIO</h1>
				<h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
					WONGSAPHAT PUANGSORN
				</h2>
				<p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto">
					Specializing in{" "}
					<span className="text-primary">modern web development</span>, I turn
					ideas into seamless digital experiences by building robust web
					applications using the latest technologies.
				</p>
				<div className="mt-8 flex justify-center space-x-4 mb-2">
					<Link href="/#skill">
						<Button variant="outline" className="hover:cursor-pointer">
							VIEW SKILL
						</Button>
					</Link>
					<Link href="/#project">
						<Button variant="outline" className="hover:cursor-pointer">
							VIEW PROJECT
						</Button>
					</Link>
				</div>
				<TooltipProvider>
					<div className="mt-4 flex justify-center space-x-4">
						{socialLinks.map((link, index) => (
							<Tooltip key={index}>
								<TooltipTrigger asChild>
									<Link
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-2xl"
									>
										{link.icon}
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{link.label}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</div>
				</TooltipProvider>
			</div>
		</section>
	);
}
