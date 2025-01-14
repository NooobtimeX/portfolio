"use client";

import Link from "next/link";

export default function Combomaker() {
  const skills = [
    { imgSrc: "/icon/wordpress.png", name: "WordPress" },
    { imgSrc: "/icon/woocommerce.png", name: "WooCommerce" },
    { imgSrc: "/icon/googleads.png", name: "Google Ads" },
    { imgSrc: "/icon/googletagmanager.png", name: "Google Tagmanager" },
    { imgSrc: "/icon/googleanalytics.png", name: "Google Analytics" },
  ];

  return (
    <div className="p-4">
      {/* Combo Maker Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Skills Section */}
        <div className="space-y-6 m-auto">
          <h3 className="text-center text-3xl font-bold text-primary">
            RS TROPHY
          </h3>
          <div>
            <p className="text-center text-lg text-base-content">Skills</p>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="h-14 w-14 md:h-20 md:w-20 group rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="card shadow-xl">
            <figure className="group relative">
              <Link
                href="https://www.rs-trophy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/project/RSTROPHY.png"
                  alt="RS TROPHY"
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  RS TROPHY
                </div>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}