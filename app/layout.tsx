import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bangers = Bangers({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bangers",
});

export const metadata: Metadata = {
	title: "Portfolio | Wongsaphat Puangsorn",
	abstract:
		"Portfolio | Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
	description:
		"Portfolio | Wongsaphat Puangsorn - Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications using the latest abilities.",
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
		<html lang="en" className="dark" suppressHydrationWarning>
			<Head>
				<link rel="canonical" href="https://nooobtimex.me/" />
			</Head>
			<GoogleTagManager gtmId="GTM-5PVXPTWP" />
			<body
				className={`${inter.variable} ${bangers.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
			>
				{/* Global Comic Texture Overlay */}
				<div className="fixed inset-0 z-50 pointer-events-none comic-texture opacity-30 mix-blend-overlay"></div>

				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					forcedTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
