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
		{
			url: `${domain}/ability`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${domain}/affiliation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${domain}/issue`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
