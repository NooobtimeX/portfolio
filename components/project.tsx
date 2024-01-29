export default function Project() {
  const items = [
    {
      href: "/project1",
      imgSrc: "path/to/image1.jpg",
      name: "QR Code Order",
      coWorkers: [
        {
          name: "Tateung",
          link: "https://github.com/Tateung",
          imgSrc: "/people/Tateung.png",
        },
      ],
      skills: ["Nuxt Js", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      href: "/project2",
      imgSrc: "path/to/image2.jpg",
      name: "4 website for RUAMSUK PLATING LP",
      coWorkers: [
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["Wordpress", "SEO"],
    },
  ];

  return (
    <>
      <h2 className="text-center" id="project">
        Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div className="shadow-lg rounded-lg p-4" key={index}>
            <a href={item.href}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="rounded-lg mb-2"
              />
            </a>
            <h3 className="text-center">{item.name}</h3>
            <div className="text-center text-sm text-gray-500">
              Co-workers:
              {item.coWorkers.map((coWorker, idx) => (
                <span key={idx} className="inline-block mx-1">
                  <a href={coWorker.link}>
                    <img
                      src={coWorker.imgSrc}
                      alt={coWorker.name}
                      className="w-8 h-8 rounded-full"
                      title={coWorker.name}
                    />
                  </a>
                </span>
              ))}
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              Skills: {item.skills.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
