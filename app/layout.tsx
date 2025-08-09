import NavigationFooter from "@/components/navigation/NavigationFooter";
import NavigationHeader from "@/components/navigation/NavigationHeader";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Head from "next/head";
import React from "react";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio | Wongsaphat Puangsorn",
	abstract:
		"Portfolio | Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
	description:
		"Portfolio | Wongsaphat Puangsorn - Specializing in modern web development, I turn ideas into seamless digital experiences by building robust web applications using the latest technologies.",
	keywords:
		"Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Portfolio, Resume, Frontend, CV",
	icons: "/favicon.ico",
	robots: "index, follow",
	verification: {
		google: "KiAn5R5UAuZgmwSS_KpMOO2FIRmt-39QIKrHKXrAOL8",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<link rel="canonical" href="https://nooobtimex.me/" />
			</Head>
			<GoogleTagManager gtmId="GTM-5PVXPTWP" />
			<body
				className={
					nunito.className +
					" bg-gradient-to-r from-blue-50 to-green-50 dark:from-zinc-900 dark:to-zinc-800"
				}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavigationHeader />
					<main className="px-4 max-w-[1600px] mx-auto">{children}</main>
					<NavigationFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
