"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeChanger = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button
			onClick={toggleTheme}
			variant="outline"
			size="icon"
			className="rounded-full"
		>
			{theme === "dark" ? (
				<Icon icon="material-symbols:dark-mode" width={24} height={24} />
			) : (
				<Icon icon="material-symbols:light-mode" width={24} height={24} />
			)}
		</Button>
	);
};

export default ThemeChanger;
