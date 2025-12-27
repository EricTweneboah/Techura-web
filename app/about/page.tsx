import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/content/services";
import { TEAM_SECTION_ENABLED } from "@/lib/site-flags";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Techura's mission, values, and team.",
};

const values = [
  {
    title: "Craft matters",
    description: "We obsess over polish, performance, and product clarity.",
  },
  {
    title: "Partnership first",
    description: "Transparent communication and shared ownership drive results.",
  },
  {
    title: "Build for growth",
    description: "We design scalable foundations that support long-term traction.",
  },
  {
    title: "Move with intent",
    description: "Speed is important, but never at the expense of quality.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="A modern agency built for product teams"
        subtitle="Techura combines senior-level strategy, design, and engineering to launch world-class digital experiences."
      />

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="section-title">Mission</h2>
              <p className="text-muted-foreground">
                Help ambitious teams launch fast, premium digital products that convert, scale, and endure.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="section-title">Vision</h2>
              <p className="text-muted-foreground">
                Become the most trusted partner for product and marketing teams who want modern experiences without enterprise friction.
              </p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Values that guide every engagement</h2>
            <p className="section-subtitle">
              Our process is rooted in clarity, collaboration, and quality.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/60 p-6 text-sm dark:bg-white/5">
                <p className="font-semibold">{value.title}</p>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Our delivery playbook</h2>
            <p className="section-subtitle">
              A transparent, collaborative flow keeps every stakeholder aligned.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/60 p-5 text-sm dark:bg-white/5">
                <p className="text-xs text-primary">0{index + 1}</p>
                <p className="mt-2 font-semibold">{step.title}</p>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {TEAM_SECTION_ENABLED ? (
        <SectionContainer className="pt-0">
          <Reveal>
            <div className="space-y-4 text-center">
              <h2 className="section-title">Meet the team</h2>
              <p className="section-subtitle mx-auto">
                A senior, distributed team of designers, engineers, and strategists.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Product Strategy",
              "UI/UX Design",
              "Full-stack Engineering",
              "Client Success",
            ].map((role) => (
              <div key={role} className="rounded-2xl border border-white/10 bg-white/60 p-6 text-sm text-center dark:bg-white/5">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10" />
                <p className="font-semibold">{role}</p>
                <Badge className="mt-3">Hiring</Badge>
              </div>
            ))}
          </div>
        </SectionContainer>
      ) : null}
    </div>
  );
}
