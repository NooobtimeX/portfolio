"use client";

import ThemeChanger from "@/components/ThemeChanger";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import MenuItem from "@/interface/menuItem";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavigationHeaderMobileProps {
	menuItems: MenuItem[];
}

export default function NavigationHeaderMobile({
	menuItems,
}: NavigationHeaderMobileProps) {
	return (
		<div className="relative w-full">
			<div className="fixed bottom-3 left-3 z-50 flex justify-center">
				<Link href={"/"}>
					<Button variant={"outline"} className="my-auto shadow-lg">
						<Image
							src="/favicon.ico"
							alt="NooobtimeX"
							className="rounded-full max-w-7"
							width={50}
							height={50}
							quality={100}
						/>
						NooobtimeX
					</Button>
				</Link>
			</div>
			<Drawer>
				<DrawerTrigger asChild>
					<Button
						variant={"outline"}
						className="fixed bottom-3 right-3 z-50 shadow-lg"
					>
						MENU <RxHamburgerMenu />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="text-center">MENU</DrawerTitle>
					</DrawerHeader>
					<div className="mx-auto">
						<ThemeChanger />
					</div>
					<div className="flex flex-col space-y-2">
						{menuItems.map((item) => (
							<DrawerClose asChild key={item.href}>
								<Link
									href={item.href}
									className="flex items-center space-x-2 p-2"
									title={item.icon.description}
								>
									{item.icon && <Icon icon={item.icon.icon} />}
									<span>{item.title}</span>
								</Link>
							</DrawerClose>
						))}
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant={"destructive"}>CLOSE</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
