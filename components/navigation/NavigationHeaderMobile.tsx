"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { LuContact } from "react-icons/lu";

export interface MenuItem {
  title: string;
  href: string;
  icon?: IconType;
}

const Header = () => {
  // Mobile menu items
  const menuItemsLeft: MenuItem[] = [
    { title: "SKILL", href: "/#skill", icon: GiBrain },
    { title: "PROJECT", href: "/#project", icon: FaLaptopCode },
  ];

  const menuItemsRight: MenuItem[] = [
    { title: "EXPERIENCE", href: "/#experience", icon: FaRegBuilding },
    { title: "CONTACT", href: "/#contact", icon: LuContact },
  ];

  return (
    <div className="relative flex w-full items-center justify-around bg-background pb-4 pt-2 shadow-lg xl:px-8 border-t-2 rounded-t-2xl">
      {/* Overlapping Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15%]">
        <Link href="/" className="flex flex-col items-center mb-12">
          <img
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full p-[1px] bg-purple-500"
            width={60}
            height={60}
          />
          <p className="text-center text-primary">NooobtimeX</p>
        </Link>
      </div>

      {/* Navigation Links Left */}
      <div className="grid grid-cols-2 gap-2 w-full justify-items-center">
        {menuItemsLeft.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-gray-700 dark:text-gray-300"
            >
              {Icon && <Icon className="w-5 h-5 mx-auto" />}
              <p className="mt-2 -mb-2 text-center">{item.title}</p>
            </Link>
          );
        })}
      </div>

      <div className="mx-12"></div>

      {/* Navigation Links Right */}
      <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
        {menuItemsRight.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-gray-700 dark:text-gray-300"
            >
              {Icon && <Icon className="w-5 h-5 mx-auto" />}
              <p className="mt-2 -mb-2 text-center">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
