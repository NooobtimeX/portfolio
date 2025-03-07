"use client";

import ThemeChanger from "@/components/ThemeChanger";
import { Separator } from "@/components/ui/separator";
import MenuItem from "@/interface/menuItem";
import Link from "next/link";

interface NavigationHeaderDesktopProps {
  menuItems: MenuItem[];
}

export default function NavigationHeaderDesktop({
  menuItems,
}: NavigationHeaderDesktopProps) {
  return (
    <div className="flex w-full items-center justify-between bg-background p-4 border-b-1 xl:px-8 rounded-b-2xl">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-ful  l"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/">NooobtimeX</Link>
      </div>

      <div className="flex items-center gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group px-4 py-2 transition-colors duration-500 font-bold flex items-center"
          >
            <div className="relative inline-block">
              {/* Text transitions out */}
              <span className="transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
                {item.title}
              </span>
              {/* Icon transitions in */}
              {item.icon && (
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
                  <item.icon />
                </span>
              )}
            </div>
          </Link>
        ))}
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}
