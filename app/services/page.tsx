import type { Metadata } from "next";
import { Code, Palette, Rocket, Shield, ShoppingBag, Smartphone } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industries, services, techStack } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Techura's full-stack development, design, and support services.",
};

const iconMap = {
  Code,
  Smartphone,
  Palette,
  ShoppingBag,
  Rocket,
  Shield,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Full-stack services for ambitious teams"
        subtitle="From discovery to long-term support, Techura delivers end-to-end product design and engineering."
      />

      <SectionContainer className="pt-0 -mt-6">
        <Reveal>
          <Tabs defaultValue={services[0]?.slug}>
            <TabsList className="flex flex-wrap gap-2">
              {services.map((service) => (
                <TabsTrigger key={service.slug} value={service.slug}>
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <TabsContent key={service.slug} value={service.slug}>
                  <div className="mt-6 grid gap-8 rounded-3xl border border-white/10 bg-white/60 p-8 dark:bg-white/5 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-3xl font-semibold">{service.name}</h2>
                      <p className="text-muted-foreground">{service.summary}</p>
                      <div>
                        <p className="text-sm font-semibold">Who it is for</p>
                        <p className="mt-2 text-sm text-muted-foreground">{service.who}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Deliverables</p>
                        <ul className="mt-2 grid gap-2 text-sm text-muted-foreground">
                          {service.deliverables.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4 rounded-2xl border border-white/10 bg-background p-6">
                      <div>
                        <p className="text-xs uppercase text-muted-foreground">Timeline</p>
                        <p className="text-lg font-semibold">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-muted-foreground">Tech used</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {service.tech.map((item) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Industries we serve</h2>
            <p className="section-subtitle">We adapt proven product workflows to regulated and fast-moving industries.</p>
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Modern tech stack</h2>
            <p className="section-subtitle">We build with technologies that are secure, scalable, and proven.</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/60 p-4 text-sm dark:bg-white/5">
              {item}
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/60 p-10 text-center dark:bg-white/5">
            <h2 className="text-3xl font-semibold">Need a tailored engagement?</h2>
            <p className="mt-3 text-muted-foreground">
              We can assemble a dedicated squad around your goals, whether you need a sprint team or long-term partner.
            </p>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
