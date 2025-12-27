import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionContainer } from "@/components/section-container";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with the Techura team.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something remarkable"
        subtitle="Tell us about your project and we will be in touch within one business day."
      />

      <SectionContainer className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/60 p-8 dark:bg-white/5">
              <h2 className="text-2xl font-semibold">Start your project</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your goals and timeline. We will respond with a tailored plan.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/60 p-6 dark:bg-white/5">
                <h3 className="text-lg font-semibold">Schedule instantly</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Book a 30-minute discovery call with our team.
                </p>
                <div
                  className="calendly-inline-widget mt-4 min-w-[320px] rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5"
                  data-url="https://calendly.com/techura-support/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ height: 520 }}
                />
              </div>
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
              <div className="rounded-3xl border border-white/10 bg-white/60 p-6 text-sm dark:bg-white/5">
                <h3 className="text-lg font-semibold">Company info</h3>
                <p className="mt-2 text-muted-foreground">support@techura.co.uk</p>
                <p className="text-muted-foreground">UK +44 (7920 693839)</p>
                <p className="text-muted-foreground">Ghana +233 (4177 3287)</p>
                <p className="mt-4 text-muted-foreground">
                  UK - We Are Super (High St, Weston-super-Mare BS23 1HL)
                </p>
                <p className="text-muted-foreground">
                  GHANA - Impact Hub Accra - 1AAP
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
