"use client";

import ThemeChanger from "@/components/ThemeChanger";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { IconType } from "react-icons";
import { SiFacebook, SiGithub } from "react-icons/si";

export interface MenuItem {
  title: string;
  href: string;
  icon?: IconType;
}

const NavigationHeaderDesktop = () => {
  const menuItemsDesktop: MenuItem[] = [
    { title: "SKILL", href: "/#skill" },
    { title: "PROJECT", href: "/#project" },
    { title: "EXPERIENCE", href: "/#experience" },
    { title: "CONTACT", href: "/#contact" },
  ];

  return (
    <div className="flex w-full items-center justify-between bg-background p-4 border-b-1 xl:px-8 rounded-b-2xl">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/">NooobtimeX</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {menuItemsDesktop.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 text-primary transition-colors duration-200 hover:text-primary font-bold"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Link href={"https://github.com/NooobtimeX"} target="_blank">
          <SiGithub className="text-2xl text-black dark:text-white hover:cursor-pointer" />
        </Link>
        <Link href={"https://www.facebook.com/xnooobtime"} target="_blank">
          <SiFacebook className="text-2xl text-black dark:text-white hover:cursor-pointer" />
        </Link>
        <Separator orientation="vertical" />
        <ThemeChanger />
      </div>
    </div>
  );
};

export default NavigationHeaderDesktop;
