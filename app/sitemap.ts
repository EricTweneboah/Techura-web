import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techura.co.uk";
  const routes = [
    "",
    "/services",
    "/about",
    "/pricing",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ];

  if (WORK_PAGE_ENABLED) {
    routes.push("/work");
  }

  const projectRoutes = WORK_PAGE_ENABLED
    ? projects.map((project) => `/work/${project.slug}`)
    : [];

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
