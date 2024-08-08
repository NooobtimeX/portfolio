export default function Project() {
  const items = [
    {
      href: "https://github.com/NooobtimeX/QR-Order",
      imgSrc: "path/to/image1.jpg",
      name: "QR Code Order",
      coWorkers: [
        {
          name: "Tateung",
          link: "https://github.com/Tateung",
          imgSrc: "/people/Tateung.webp",
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
    <div className="m-2">
      <h2 className="text-center" id="project">
        Project
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {items.map((item, index) => (
          <div className="rounded-lg p-4 shadow-lg" key={index}>
            <a href={item.href}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="mb-2 rounded-lg"
              />
            </a>
            <h3 className="text-center">{item.name}</h3>
            <div className="text-center text-sm">
              Co-workers:
              {item.coWorkers.map((coWorker, idx) => (
                <span key={idx} className="mx-1 inline-block">
                  <a href={coWorker.link}>
                    <img
                      src={coWorker.imgSrc}
                      alt={coWorker.name}
                      className="h-10 w-10 rounded-full"
                      title={coWorker.name}
                    />
                  </a>
                </span>
              ))}
            </div>
            <div className="mt-2 text-center text-sm">
              Skills: {item.skills.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
