"use client";

import NavigationHeaderDesktop from "@/components/navigation/NavigationHeaderDesktop";
import NavigationHeaderMobile from "@/components/navigation/NavigationHeaderMobile";
import { IconType } from "react-icons";

export interface MenuItem {
  title: string;
  href: string;
  icon?: IconType;
}

export default function NavigationHeader() {
  return (
    <nav className="z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0 max-w-full">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <NavigationHeaderDesktop />
      </div>
      {/* Mobile Header */}
      <div className="md:hidden text-xs px-4">
        <NavigationHeaderMobile />
      </div>
    </nav>
  );
}
