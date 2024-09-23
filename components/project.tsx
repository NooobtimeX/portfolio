export default function Project() {
  const items = [
    {
      href: "https://waifusmash.com/",
      imgSrc: "",
      name: "WaifuSmash!",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
      ],
      skills: [
        "Next Js",
        "TypeScript",
        "Vercel",
        "JSON-LD",
        "Google Tag Manager",
        "Google Analytics",
        "Google Search Console",
      ],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Order",
      imgSrc: "path/to/image1.jpg",
      name: "QR Code Order",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "Tateung",
          link: "https://github.com/Tateung",
          imgSrc: "/people/Tateung.webp",
        },
      ],
      skills: ["Nuxt Js", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/rstrophy.png",
      name: "4 websites for RUAMSUK PLATING LP",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["WordPress", "WooCommerce", "SEO"],
    },
  ];

  return (
    <div className="m-4">
      <h2 className="mb-6 text-center text-3xl font-bold" id="project">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="transform overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative max-h-48">
              <a href={item.href}>
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-full w-full rounded-xl object-cover"
                />
              </a>
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <h4 className="text-md mb-1 text-center font-semibold">
                Co-workers
              </h4>
              <div className="mb-1 flex items-center justify-center">
                {item.team.map((coWorker) => (
                  <span key={coWorker.name} className="mx-1 inline-block">
                    <a href={coWorker.link}>
                      <img
                        src={coWorker.imgSrc}
                        alt={coWorker.name}
                        className="max-h-8 max-w-8 rounded-full border-2 border-green-500 shadow"
                        title={coWorker.name}
                      />
                    </a>
                  </span>
                ))}
              </div>
              <h4 className="text-md mb-2 text-center font-semibold">Skills</h4>
              <div className="text-center text-sm text-gray-600">
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
