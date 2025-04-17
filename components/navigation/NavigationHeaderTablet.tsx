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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavigationHeaderDesktopProps {
  menuItems: MenuItem[];
}

export default function NavigationHeaderDesktop({
  menuItems,
}: NavigationHeaderDesktopProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-between backdrop-blur-xs p-4 border-b xl:px-8 rounded-b-2xl bg-white/80 dark:bg-zinc-900/80">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full"
            width={40}
            height={40}
            quality={100}
          />
        </Link>
        <Link href="/">NooobtimeX</Link>
      </div>

      <div className="flex items-center gap-2">
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant={"outline"} onClick={() => setOpen(true)}>
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
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="flex items-center">{item.title}</span>
                  </Link>
                ))}
              </div>
              <div className="mx-auto">
                <ThemeChanger />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
