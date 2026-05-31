import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Techura projects across websites, apps, healthcare, agritech, government platforms, and digital products.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Real products, platforms, and websites we have delivered"
        subtitle="A look at selected Techura work across healthcare, public sector, agritech, nonprofit, coaching, and service brands."
      />

      <SectionContainer className="pt-0">
        <Reveal>
          <WorkGrid />
        </Reveal>
      </SectionContainer>
    </div>
  );
}
