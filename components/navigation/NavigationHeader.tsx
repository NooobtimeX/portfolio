"use client";

import NavigationHeaderDesktop from "@/components/navigation/NavigationHeaderDesktop";
import NavigationHeaderMobile from "@/components/navigation/NavigationHeaderMobile";
import NavigationHeaderTablet from "@/components/navigation/NavigationHeaderTablet";
import MenuItem from "@/interface/menuItem";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { LuContact } from "react-icons/lu";

export default function NavigationHeader() {
    const menuItems: MenuItem[] = [
        { title: "SKILL", href: "/#skill", icon: GiBrain },
        { title: "PROJECT", href: "/#project", icon: FaLaptopCode },
        {
            title: "EXPERIENCE",
            href: "/#experience",
            icon: FaRegBuilding,
        },
        { title: "CONTACT", href: "/#contact", icon: LuContact },
    ];

    return (
        <nav className="z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0 max-w-full">
            {/* Desktop Header */}
            <div className="hidden lg:block">
                <NavigationHeaderDesktop menuItems={menuItems} />
            </div>
            {/* Tablet Header */}
            <div className="hidden md:block lg:hidden">
                <NavigationHeaderTablet menuItems={menuItems} />
            </div>
            {/* Mobile Header */}
            <div className="block md:hidden">
                <NavigationHeaderMobile menuItems={menuItems} />
            </div>
        </nav>
    );
}
