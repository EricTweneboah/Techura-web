import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SectionContainer } from "@/components/section-container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Techura privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Techura collects, uses, and protects your information."
      />
      <SectionContainer className="pt-0">
        <div className="space-y-8 text-sm text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Overview</h2>
            <p>
              This Privacy Policy explains how Techura ("we", "us", "our") collects, uses, and safeguards personal data when you visit techura.co.uk, contact us, or engage our services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Data controller</h2>
            <p>
              Techura is the data controller for personal data processed under this policy. If you have questions or requests, contact us at support@techura.co.uk, UK +44 (7920 693839), or Ghana +233 (4177 3287).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
            <p>
              We collect information you provide directly, such as name, email address, company, project details, and any information you submit through our forms or communications.
            </p>
            <p>
              We also collect limited technical data, such as IP address, device identifiers, browser type, and pages visited, to maintain site security, measure performance, and improve the site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">How we use your data</h2>
            <p>
              We use your data to respond to inquiries, provide proposals or services, manage client relationships, improve our offerings, and comply with legal obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Legal bases for processing</h2>
            <p>
              We process personal data under one or more of the following bases: performance of a contract, legitimate interests (such as running our business and improving services), consent (where required), and compliance with legal obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Cookies and analytics</h2>
            <p>
              We may use cookies or similar technologies to maintain site functionality and understand usage. You can control cookies through your browser settings. Where required by law, we will obtain consent before placing non-essential cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Sharing and processors</h2>
            <p>
              We do not sell your personal data. We may share data with trusted service providers who process data on our behalf (such as hosting, email, or analytics) under contractual obligations to protect it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">International transfers</h2>
            <p>
              When data is transferred outside your country, we use appropriate safeguards such as contractual protections or other lawful mechanisms to ensure adequate protection.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Security and retention</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures to protect your data. We retain data only as long as needed for the purposes described in this policy, unless a longer retention period is required by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing of your data, request portability, or withdraw consent. You may also lodge a complaint with your local data protection authority.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Children</h2>
            <p>
              Our services are not directed to children, and we do not knowingly collect personal data from children under 16. If you believe a child has provided data, contact us so we can delete it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The latest version will be posted on this page with a revised effective date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Contact us</h2>
            <p>
              For privacy questions, data access requests, or deletion requests, contact support@techura.co.uk, UK +44 (7920 693839), or Ghana +233 (4177 3287).
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
