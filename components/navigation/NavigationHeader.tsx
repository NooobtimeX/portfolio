"use client";

import NavigationHeaderDesktop from "@/components/navigation/NavigationHeaderDesktop";
import NavigationHeaderMobile from "@/components/navigation/NavigationHeaderMobile";
import MenuItem from "@/interface/menuItem";

export default function NavigationHeader() {
	const menuItems: MenuItem[] = [
		{
			title: "SKILLS",
			href: "/#skill",
			icon: {
				name: "Brain",
				icon: "material-symbols:psychology",
				description: "View my technical skills and expertise",
			},
		},
		{
			title: "PROJECTS",
			href: "/project",
			icon: {
				name: "Laptop Code",
				icon: "material-symbols:laptop-chromebook",
				description: "Explore my portfolio projects",
			},
		},
		{
			title: "EXPERIENCE",
			href: "/#experience",
			icon: {
				name: "Building",
				icon: "material-symbols:business",
				description: "Review my work experience and achievements",
			},
		},
	];

	return (
		<nav className="z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0 w-full">
			{/* Desktop Header */}
			<div className="hidden md:block">
				<NavigationHeaderDesktop menuItems={menuItems} />
			</div>
			{/* Mobile Header */}
			<div className="block md:hidden">
				<NavigationHeaderMobile menuItems={menuItems} />
			</div>
		</nav>
	);
}
