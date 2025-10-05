import { Separator } from "@/components/ui/separator";
import { personalData } from "@/data/personal";
import Link from "next/link";

export default function Footer() {
	const navigationLinks = [
		{ title: "Home", href: "/" },
		{ title: "Skills", href: "/#skill" },
		{ title: "Projects", href: "/project" },
		{ title: "Experience", href: "/#experience" },
	];

	return (
		<footer className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-zinc-900 dark:to-zinc-800 py-12 text-foreground">
			<div className="container mx-auto max-w-7xl px-4">
				{/* Navigation Links */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Navigation */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Navigation</h3>
						<nav className="space-y-2">
							{navigationLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-muted-foreground hover:text-primary transition-colors duration-200"
								>
									{link.title}
								</Link>
							))}
						</nav>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<div className="space-y-2 text-muted-foreground">
							<p>{personalData.contact.email}</p>
							<p>{personalData.contact.location}</p>
						</div>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Me</h3>
						<div className="flex gap-4">
							{personalData.socialLinks.map((social, index) => {
								const SocialIcon = social.icon;
								return (
									<Link
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-card hover:bg-primary/10 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:border-primary/50 group"
									>
										<SocialIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
									</Link>
								);
							})}
						</div>
					</div>
				</div>

				<Separator className="my-4" />
				<div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
					<p>© 2025 {personalData.name}. All rights reserved.</p>
					<p>Built with Next.js & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}
