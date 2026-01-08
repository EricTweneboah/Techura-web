import Link from "next/link";
import { ArrowRight, Code, Palette, Rocket, Shield, ShoppingBag, Smartphone, Star, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/case-study-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { LogoWall } from "@/components/logo-wall";
import { PrimaryCTA, SecondaryCTA } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { pricingPackages } from "@/content/pricing";
import { faqs } from "@/content/faqs";
import { projects } from "@/content/projects";
import { differentiators, processSteps, services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";

const iconMap = {
  Code,
  Smartphone,
  Palette,
  ShoppingBag,
  Rocket,
  Shield,
};

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div>
      <SectionContainer className="pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Reveal>
              <Badge>Web & App Development Studio</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Build premium digital products that move faster than your market.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Techura designs and engineers modern websites, SaaS platforms, and mobile apps for ambitious teams. We pair strategy, design, and engineering to create experiences that convert.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCTA />
                {WORK_PAGE_ENABLED ? <SecondaryCTA /> : null}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  Trusted by ambitious teams worldwide
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Launch-ready in weeks, not months
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-6">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-background p-4">
                  <p className="text-sm font-semibold">Project delivery snapshot</p>
                  <div className="mt-3 grid gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Discovery to Launch</span>
                      <span className="text-foreground">6-10 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Avg. performance score</span>
                      <span className="text-foreground">95+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Support response time</span>
                      <span className="text-foreground">&lt; 24 hrs</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-background p-4">
                    <p className="text-xs text-muted-foreground">Active builds</p>
                    <p className="text-2xl font-semibold">12</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background p-4">
                    <p className="text-xs text-muted-foreground">Repeat clients</p>
                    <p className="text-2xl font-semibold">78%</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Trusted by teams worldwide</p>
            <h2 className="section-title">Chosen by ambitious brands</h2>
            <p className="section-subtitle mx-auto">
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <LogoWall />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex items-center justify-between">
          <Reveal>
            <div className="space-y-3">
              <h2 className="section-title">Full-stack services, end-to-end delivery</h2>
              <p className="section-subtitle">
                Strategy-led design and engineering for modern brands. We work as your product partner from discovery to growth.
              </p>
            </div>
          </Reveal>
          <Link href="/services" className="hidden md:inline-flex">
            <Button variant="outline" className="rounded-full">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <ServiceCard title={service.name} description={service.summary} icon={Icon} />
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Why Techura</p>
              <h2 className="section-title">A partner obsessed with speed and quality</h2>
              <p className="section-subtitle">
                We blend senior product strategy, premium design, and modern engineering to help you launch with confidence.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/60 p-5 text-sm shadow-sm dark:bg-white/5">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">A clear, collaborative process</h2>
            <p className="section-subtitle">
              Our proven roadmap keeps stakeholders aligned while we build high-quality products quickly.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
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

      {WORK_PAGE_ENABLED ? (
        <SectionContainer className="pt-0">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-title">Featured work</h2>
                <p className="section-subtitle">A few recent builds across SaaS, commerce, and mobile.</p>
              </div>
              <Link href="/work" className="hidden md:inline-flex">
                <Button variant="outline">Explore portfolio</Button>
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <CaseStudyCard
                  slug={project.slug}
                  name={project.name}
                  summary={project.summary}
                  category={project.category}
                  image={project.gallery[0]}
                />
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      ) : null}

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3 text-center">
            <h2 className="section-title">Teams trust Techura to deliver</h2>
            <p className="section-subtitle mx-auto">
              We operate as a high-touch partner for product and marketing teams.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <TestimonialCard quote={item.quote} name={item.name} title={item.title} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Flexible pricing, premium execution</h2>
            <p className="section-subtitle">
              Choose a package or build a custom engagement. We can scope within your timeline and budget.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/60 p-6 text-sm dark:bg-white/5">
                <p className="text-lg font-semibold">{pkg.name}</p>
                <p className="mt-2 text-2xl font-semibold">{pkg.price}</p>
                <p className="mt-2 text-muted-foreground">{pkg.bestFor}</p>
                <Link href="/pricing" className="mt-6 inline-flex items-center text-primary hover:underline">
                  View details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="section-subtitle">
                Everything you need to know before starting your project.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20 p-10 text-center">
            <h2 className="text-3xl font-semibold">Ready to build with Techura?</h2>
            <p className="mt-3 text-muted-foreground">
              Book a free consultation and get a tailored roadmap for your product.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <PrimaryCTA />
              {WORK_PAGE_ENABLED ? <SecondaryCTA /> : null}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
