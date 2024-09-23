"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoGameController } from "react-icons/io5";

const navigation = [
  { href: "/", name: "About me" },
  { href: "/#skill", name: "Skill" },
  { href: "/#project", name: "Project" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
    if (isDropdownOpen) setDropdownOpen(false); // Close dropdown when opening mobile menu
  };

  return (
    <nav className="sticky top-0 z-40 mb-1 rounded-b-xl bg-gray-800 shadow-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="bg-800 inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              />
              <XMarkIcon
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="/favicon.ico"
                  className="w-9 rounded-full"
                  alt="HoYoSmash"
                />
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-50 w-full rounded-xl bg-gray-800 p-2 sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
