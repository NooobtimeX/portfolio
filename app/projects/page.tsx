"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    { name: "NEXT JS", id: "NEXT JS", imgSrc: "/icon/nextjs.png" },
    { name: "FIREBASE", id: "FIREBASE", imgSrc: "/icon/firebase.png" },
    {
      name: "TAILWIND CSS",
      id: "TAILWIND CSS",
      imgSrc: "/icon/tailwindcss.png",
    },
    {
      name: "DAISY UI",
      id: "DAISY UI",
      imgSrc: "/icon/daisyui.png",
    },
    { name: "NUXT JS", id: "NUXT JS", imgSrc: "/icon/nuxtjs.png" },
    { name: "VERCEL", id: "VERCEL", imgSrc: "/icon/vercel.png" },
    { name: "SUPABASE", id: "SUPABASE", imgSrc: "/icon/supabase.png" },
    { name: "WORDPRESS", id: "WORDPRESS", imgSrc: "/icon/wordpress.png" },
    { name: "WOOCOMMERCE", id: "WOOCOMMERCE", imgSrc: "/icon/woocommerce.png" },
    { name: "Google Ads", id: "Google Ads", imgSrc: "/icon/googleads.png" },
    {
      name: "Google Tagmanager",
      id: "Google Tagmanager",
      imgSrc: "/icon/googletagmanager.png",
    },
    {
      name: "Google Analytics",
      id: "Google Analytics",
      imgSrc: "/icon/googleanalytics.png",
    },
  ];

  const items = [
    {
      href: "https://nooobtimex.me/",
      imgSrc: "/project/Portfolio.png",
      name: "Porfolio",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS", "DAISY UI"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRFOOD.png",
      name: "QR FOOD",
      skills: ["NUXT JS", "VERCEL", "SUPABASE", "TAILWIND CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/ComboMaker.png",

      name: "Combo Maker",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/HoYoSmash.png",
      name: "HoyoSmash",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/RSTROPHY.png",
      name: "rs-trophy.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc: "/project/RSAWARD.png",
      name: "rs-award.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc: "/project/RSMEDAL.png",
      name: "rs-medal.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc: "/project/RSRIBBON.png",
      name: "rs-ribbon.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
  ];

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  const handleSkillChange = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skill) => skill !== id) : [...prev, id]
    );
  };

  const filteredItems = items.filter((item) => {
    const skillsMatch =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => item.skills.includes(skill));

    return skillsMatch;
  });

  return (
    <div className="bg-base-200 py-8">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/projects" />
      </Head>
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-primary mb-8">
          PROJECTS
        </h1>
        {/* Filter Button */}
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 aspect-square rounded-full w-full max-h-10 max-w-52 bg-primary text-white p-4 shadow-lg hover:bg-primary-focus focus:ring-4 focus:ring-primary/50 z-50 flex items-center justify-center transition-all duration-200"
          onClick={toggleFilter}
          aria-label="Toggle Filter"
        >
          <IoFilterSharp size="1.5em" className="pointer-events-none" />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.name} className="card bg-base-100 shadow-lg">
              <figure>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full rounded-2xl object-cover"
                    width={1600}
                    height={900}
                  />
                </a>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{item.name}</h2>
                <div className="flex gap-2 flex-wrap">
                  {item.skills.map((skill) => {
                    const skillData = skills.find((s) => s.id === skill);
                    return skillData ? (
                      <div
                        key={skillData.id}
                        className="tooltip tooltip-primary"
                        data-tip={skillData.name}
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.name}
                          className="rounded-2xl bg-base-200"
                          width={24}
                          height={24}
                        />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Filter Modal */}
        {isFilterOpen && (
          <div className="modal modal-open">
            <div className="modal-box bg-base-100 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                FILTER
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => handleSkillChange(skill.id)}
                    className={`badge badge-lg cursor-pointer py-4 px-3 ${
                      selectedSkills.includes(skill.id)
                        ? "badge-primary"
                        : "badge-outline"
                    }`}
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="mr-2"
                      width={20}
                      height={20}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="modal-action">
                <button className="btn btn- w-full" onClick={toggleFilter}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
