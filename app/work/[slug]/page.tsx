import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/section-container";
import { projects } from "@/content/projects";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";

export async function generateStaticParams() {
  if (!WORK_PAGE_ENABLED) {
    return [];
  }

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!WORK_PAGE_ENABLED) {
    return {};
  }

  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  if (!WORK_PAGE_ENABLED) {
    notFound();
  }

  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <SectionContainer className="pt-24">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.category.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="text-lg text-muted-foreground">{project.summary}</p>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="mt-2 text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Solution</h2>
              <p className="mt-2 text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Results</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {project.results.map((result) => (
                  <li key={result}>- {result}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/60 p-6 dark:bg-white/5">
            <h3 className="text-lg font-semibold">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.gallery.map((image) => (
            <div key={image} className="relative h-64 overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20 p-10 text-center">
          <h2 className="text-3xl font-semibold">Want something similar?</h2>
          <p className="mt-3 text-muted-foreground">
            Let&apos;s map your product goals and launch plan together.
          </p>
          <Button variant="glow" size="lg" className="mt-6" asChild>
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
