import type { Metadata } from "next";

import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { pricingComparison, pricingPackages } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore Techura's pricing packages and custom engagements.",
};

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent packages for every stage"
        subtitle="Choose a package or build a custom engagement with our senior team."
      />

      <SectionContainer className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <PricingCard {...pkg} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="space-y-3">
            <h2 className="section-title">Compare packages</h2>
            <p className="section-subtitle">Every engagement includes a dedicated project manager and senior delivery team.</p>
          </div>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/60 text-muted-foreground dark:bg-white/5">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Starter</th>
                <th className="p-4">Growth</th>
                <th className="p-4">Scale</th>
              </tr>
            </thead>
            <tbody>
              {pricingComparison.map((row) => (
                <tr key={row.feature} className="border-t border-white/10">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4">{row.starter ? "Yes" : "-"}</td>
                  <td className="p-4">{row.growth ? "Yes" : "-"}</td>
                  <td className="p-4">{row.scale ? "Yes" : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/60 p-10 text-center dark:bg-white/5">
            <h2 className="text-3xl font-semibold">Enterprise & custom engagements</h2>
            <p className="mt-3 text-muted-foreground">
              Need a multi-team rollout, advanced security, or ongoing product support? We can scope a custom engagement and maintenance retainer.
            </p>
            <Button variant="glow" size="lg" className="mt-6" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
