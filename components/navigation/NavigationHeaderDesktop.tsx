"use client";

import ThemeChanger from "@/components/ThemeChanger";
import MenuItem from "@/interface/menuItem";
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
      </div>
      <div className="flex items-center gap-2 mx-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group px-4 py-2 transition-colors duration-500 font-bold hover:text-primary"
          >
            <div className="flex flex-col items-center">
              {/* Text centered horizontally */}
              <div className="text-center">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 mx-auto">
        <div className="flex items-center gap-2 ml-2">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}
