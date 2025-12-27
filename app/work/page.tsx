import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { WorkGrid } from "@/components/work-grid";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore Techura's portfolio of web, mobile, and product design projects.",
};

export default function WorkPage() {
  if (!WORK_PAGE_ENABLED) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        eyebrow="Portfolio"
        title="Case studies that turn product vision into reality"
        subtitle="Explore select builds across SaaS, commerce, fintech, and mobile apps."
      />

      <SectionContainer className="pt-0">
        <Reveal>
          <WorkGrid />
        </Reveal>
      </SectionContainer>
    </div>
  );
}
