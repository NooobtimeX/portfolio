import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const contents = [
  { name: "SKILL", url: "/#skill" },
  { name: "PROJECT", url: "/#project" },
  { name: "CONTACT", url: "/#contact" },
];

const clientprojects = [
  { name: "RS TROPHY", url: "https://www.rs-trophy.com/" },
];

const personalprojects = [
  { name: "QR FOOD", url: "https://github.com/NooobtimeX/QR-Food" },
  { name: "Combo Maker", url: "https://combomaker.net/" },
  { name: "HoyoSmash", url: "https://hoyosmash.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-inherit py-12 text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="/favicon.ico"
                  alt="NooobtimeX"
                  className="rounded-full"
                  width={36}
                  height={36}
                />
                <AvatarFallback>Nooob</AvatarFallback>
              </Avatar>
              <span className="text-lg font-bold">NooobtimeX</span>
            </div>
            <p className="mt-4 text-sm">
              Passionate about turning ideas into seamless digital experiences.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://www.facebook.com/xnooobtime"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="p-2">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f h-5 w-5" />
                </Button>
              </Link>
              <Link href="#">
                <Button variant="ghost" className="p-2">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              CONTENT
            </h3>
            <ul className="mt-4 space-y-2">
              {contents.map((content, index) => (
                <li key={index}>
                  <Link
                    href={content.url}
                    className="text-foreground hover:text-primary text-sm"
                  >
                    {content.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Work */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              CLIENT WORK
            </h3>
            <ul className="mt-4 space-y-2">
              {clientprojects.map((clientproject, index) => (
                <li key={index}>
                  <Link
                    href={clientproject.url}
                    className="text-foreground hover:text-primary text-sm"
                  >
                    {clientproject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Work */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              PERSONAL WORK
            </h3>
            <ul className="mt-4 space-y-2">
              {personalprojects.map((personalproject, index) => (
                <li key={index}>
                  <Link
                    href={personalproject.url}
                    className="text-foreground hover:text-primary text-sm"
                  >
                    {personalproject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm">
          © 2025 NooobtimeX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
