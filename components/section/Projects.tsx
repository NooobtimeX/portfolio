"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiFirebase,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiNextdotjs,
  SiNuxtdotjs,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import SectionTransition from "../SectionTransition";
import { Card } from "../ui/card";

type Skill = {
  name: string;
  Icon: IconType;
};

type ProjectItem = {
  href: string;
  imgSrc: string;
  name: string;
  description?: string;
  skills: Skill[];
};

const ProjectImage = ({ imgSrc, name }: { imgSrc: string; name: string }) => (
  <div className="flex items-center justify-center h-full">
    <img
      src={imgSrc}
      alt={name}
      width={300}
      height={300}
      className="object-cover rounded-2xl mx-auto aspect-square"
    />
  </div>
);

const ProjectDetails = ({
  name,
  description,
  skills,
  href,
}: {
  name: string;
  description?: string;
  skills: Skill[];
  href: string;
}) => (
  <div className="flex flex-col justify-center items-center text-center p-4">
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
      {name}{" "}
      <Link href={href} target="_blank">
        <FaExternalLinkAlt />
      </Link>
    </h3>
    {description && <p className="text-sm mb-2">{description}</p>}
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      {skills.map((skill, index) => (
        <Card key={index} className="px-2 py-1 flex flex-row">
          <skill.Icon size={12} className="m-auto" />
          <p className="-ml-4 text-xs">{skill.name}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default function ProjectSection() {
  const items: ProjectItem[] = [
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRFOOD.png",
      name: "QR FOOD",
      skills: [
        { name: "NUXT JS", Icon: SiNuxtdotjs },
        { name: "VERCEL", Icon: SiVercel },
        { name: "SUPABASE", Icon: SiSupabase },
        { name: "TAILWIND CSS", Icon: SiTailwindcss },
      ],
      description:
        "This web application is designed to allow customers to order food by scanning a QR code, which will direct users to the restaurant's online menu. Customers can select and place orders directly from their mobile devices. Additionally, the app includes a POS system for the restaurant, enabling efficient management of orders. Administrators can track orders, update food statuses, and view sales reports all within the same system.",
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/ComboMaker.png",
      name: "Combo Maker",
      skills: [
        { name: "NEXT JS", Icon: SiNextdotjs },
        { name: "TAILWIND CSS", Icon: SiTailwindcss },
        { name: "Shad/cn UI", Icon: SiShadcnui },
        { name: "TYPESCRIPT", Icon: SiTypescript },
        { name: "FIREBASE", Icon: SiFirebase },
      ],
      description:
        "Introducing COMBO MAKER, the ultimate platform for designing personalized fighting game combos. With its user-friendly interface and compatibility with various fighting games, COMBO MAKER empowers you to create, test, and share unique combos effortlessly.",
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/HoYoSmash.png",
      name: "HoyoSmash",
      skills: [
        { name: "NEXT JS", Icon: SiNextdotjs },
        { name: "TAILWIND CSS", Icon: SiTailwindcss },
        { name: "Shad/cn UI", Icon: SiShadcnui },
        { name: "TYPESCRIPT", Icon: SiTypescript },
        { name: "FIREBASE", Icon: SiFirebase },
      ],
      description:
        "HoYoSmash, An interactive platform where players can rate their favorite characters in a fun **Smash or Pass** style! Share your opinions, compare ratings, and engage in friendly debates with others. Whether you're here to explore new favorites or passionately defend your beloved characters, this app is made just for you!",
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/RSTROPHY.png",
      name: "rs-trophy.com",
      skills: [
        { name: "WORDPRESS", Icon: SiWordpress },
        { name: "WOOCOMMERCE", Icon: SiWoocommerce },
        { name: "Google Ads", Icon: SiGoogleads },
        { name: "Google Tagmanager", Icon: SiGoogletagmanager },
        { name: "Google Analytics", Icon: SiGoogleanalytics },
      ],
      description:
        "​Introducing Trophy Showcase, a web application designed to display.",
    },
  ];

  return (
    <section id="project" className="min-h-screen container mx-auto">
      <div className="pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          PROJECT
        </h2>
        <div className="mx-auto">
          {items.map((item, idx) => (
            <SectionTransition key={idx}>
              <div className="bg-base-100 p-0 pb-2 m-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <div
                  className={`flex justify-center ${
                    idx % 2 === 0 ? "order-1" : "order-1 md:order-2"
                  }`}
                >
                  <ProjectImage imgSrc={item.imgSrc} name={item.name} />
                </div>
                <div
                  className={`flex justify-center ${
                    idx % 2 === 0 ? "order-2" : "order-2 md:order-1"
                  }`}
                >
                  <ProjectDetails
                    name={item.name}
                    description={item.description}
                    skills={item.skills}
                    href={item.href}
                  />
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
