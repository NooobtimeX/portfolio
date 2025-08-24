"use client";

import ThemeChanger from "@/components/ThemeChanger";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import MenuItem from "@/interface/menuItem";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface NavigationHeaderDesktopProps {
	menuItems: MenuItem[];
}

export default function NavigationHeaderDesktop({
	menuItems,
}: NavigationHeaderDesktopProps) {
	return (
		<div className="flex w-full items-center justify-between backdrop-blur-xs p-4 border-b xl:px-8 rounded-b-2xl bg-white/80 dark:bg-zinc-900/80">
			<div className="flex items-center gap-2 mx-auto">
				<div className="flex items-center gap-2">
					<Link href="/">
						<Image
							src="/favicon.ico"
							alt="Portfolio Logo"
							className="rounded-full"
							width={40}
							height={40}
							quality={100}
						/>
					</Link>
					<Link href="/">NooobtimeX</Link>
				</div>
			</div>
			<div className="flex items-center gap-2 mx-auto">
				<TooltipProvider>
					{menuItems.map((item) => (
						<Tooltip key={item.href}>
							<TooltipTrigger asChild>
								<Link
									href={item.href}
									className="group px-4 py-2 transition-colors duration-500 font-bold hover:text-primary"
								>
									<div className="flex flex-col items-center">
										{/* Text centered horizontally */}
										<div className="text-center">{item.title}</div>
									</div>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<div className="flex items-center gap-2">
									<Icon icon={item.icon.icon} className="w-4 h-4" />
									<span>{item.icon.description}</span>
								</div>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
			<div className="flex items-center gap-2 mx-auto">
				<div className="flex items-center gap-2 ml-2">
					<ThemeChanger />
				</div>
			</div>
		</div>
	);
}
