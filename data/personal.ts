import { SocialPlatform } from "@/enum";
import type { PersonalData } from "@/interface";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const personalData: PersonalData = {
	name: "WONGSAPHAT PUANGSORN",
	title: "Full Stack Developer",
	tagline:
		"Specializing in modern web development, I turn ideas into seamless digital experiences by building robust web applications using the latest technologies.",
	avatar: "/profile/NooobtimeX.webp",
	about: {
		bio: "I am a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
		highlights: [
			"3+ years of web development experience",
			"Expert in React, Next.js, and Node.js",
			"Strong background in UI/UX design",
			"Passionate about clean code and best practices",
		],
	},
	contact: {
		email: "nooobtimex@gmail.com",
		location: "Bangkok, Thailand",
		availability: "Available for freelance and full-time opportunities",
	},
	socialLinks: [
		{
			platform: SocialPlatform.GitHub,
			url: "https://github.com/NooobtimeX",
			icon: FaGithub,
			username: "NooobtimeX",
		},
		{
			platform: SocialPlatform.Website,
			url: "https://www.facebook.com/xnooobtime",
			icon: FaFacebook,
			username: "xnooobtime",
		},
	],
};
