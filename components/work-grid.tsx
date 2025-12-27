"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { CaseStudyCard } from "@/components/case-study-card";
import { projectCategories, projects } from "@/content/projects";

export function WorkGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category.includes(active));
  }, [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {["All", ...projectCategories].map((item) => (
          <button key={item} type="button" onClick={() => setActive(item)}>
            <Badge variant={active === item ? "default" : "secondary"}>{item}</Badge>
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <CaseStudyCard
            key={project.slug}
            slug={project.slug}
            name={project.name}
            summary={project.summary}
            category={project.category}
            image={project.gallery[0]}
          />
        ))}
      </div>
    </div>
  );
}
