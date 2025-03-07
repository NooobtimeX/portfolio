"use client";

import ThemeChanger from "@/components/ThemeChanger";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuItem from "@/interface/menuItem";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

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
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/">NooobtimeX</Link>
      </div>

      <div className="flex items-center gap-2">
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"}>
                MENU <RxHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center">MENU</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 hover:bg-muted rounded"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="mx-auto">
                <ThemeChanger />
              </div>{" "}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
