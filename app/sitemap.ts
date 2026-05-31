import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techura.co.uk";
  const routes = [
    "",
    "/services",
    "/about",
    "/projects",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
