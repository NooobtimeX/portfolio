"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import {
  TbDeviceImacCode,
  TbDeviceIpadHorizontalCode,
  TbDeviceMobileCode,
} from "react-icons/tb";

export default function HeroSection() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/NooobtimeX",
      label: "GitHub",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/xnooobtime",
      label: "Facebook",
    },
  ];

  return (
    <section className="min-h-screen bg-base-200 text-base-content flex flex-col lg:flex-row items-center justify-center -pt-20 -mt-6">
      <div className="text-center">
        <div className="flex justify-center items-center mb-2">
          {/* Display on large screens */}
          <div className="hidden lg:block">
            <TbDeviceImacCode size={100} />
          </div>
          {/* Display on medium screens */}
          <div className="hidden md:block lg:hidden">
            <TbDeviceIpadHorizontalCode size={100} />
          </div>
          {/* Display on small screens */}
          <div className="block md:hidden">
            <TbDeviceMobileCode size={100} />
          </div>
        </div>{" "}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          FRONTEND PORTFOLIO
        </h1>
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          WONGSAPHAT PUANGSORN
        </h2>
        <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto">
          Specializing in{" "}
          <span className="text-purple-500">modern web development</span>, I
          turn ideas into seamless digital experiences by building robust web
          applications using the latest technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4 mb-2">
          <Link href="/#skill">
            <Button variant="outline" className="hover:cursor-pointer">
              VIEW SKILL
            </Button>
          </Link>
          <Link href="/#project">
            <Button variant="outline" className="hover:cursor-pointer">
              VIEW PROJECT
            </Button>
          </Link>
        </div>
        <Link
          download
          target="_blank"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/Portfolio.pdf?alt=media&token=035c76a7-f76e-4cbc-b560-2b4f8d574059"
        >
          <Button className="hover:cursor-pointer">DOWNLOAD CV</Button>
        </Link>
        <TooltipProvider>
          <div className="mt-4 flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl"
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
