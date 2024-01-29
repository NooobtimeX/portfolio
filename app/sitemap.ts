import { MetadataRoute } from "next";

const domain = "https://nooobtimex.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
