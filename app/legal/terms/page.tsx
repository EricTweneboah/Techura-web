import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SectionContainer } from "@/components/section-container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Techura terms of service.",
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Key terms that apply when you work with Techura."
      />
      <SectionContainer className="pt-0">
        <div className="space-y-8 text-sm text-muted-foreground">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Acceptance of terms</h2>
            <p>
              By accessing this site or engaging Techura services, you agree to these Terms of Service and any applicable statements of work or proposals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Services and scope</h2>
            <p>
              Services are delivered according to the scope, timeline, and deliverables outlined in your proposal or contract. Changes to scope may require a written change order and additional fees.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Client responsibilities</h2>
            <p>
              You agree to provide timely access to required materials, feedback, and approvals. Delays in client inputs may shift delivery dates or impact outcomes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Fees, invoicing, and payments</h2>
            <p>
              Fees and payment schedules are specified in your proposal. Invoices are due as stated. Late payments may pause work and may incur additional administrative costs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Intellectual property</h2>
            <p>
              Unless otherwise agreed, Techura retains ownership of pre-existing materials, tools, and frameworks. Upon full payment, you receive ownership or a license to the final deliverables as outlined in your agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Third-party services</h2>
            <p>
              Projects may require third-party services such as hosting, domains, or software subscriptions. You are responsible for third-party costs unless explicitly included in your proposal.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Confidentiality</h2>
            <p>
              Each party agrees to keep confidential information private and to use it only for the purpose of delivering the services, unless disclosure is required by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Warranties and disclaimers</h2>
            <p>
              Services are provided on an &quot;as-is&quot; basis. Techura does not warrant uninterrupted operation or specific business outcomes, except as expressly stated in writing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Techura is not liable for indirect, incidental, special, or consequential damages. Our total liability is limited to the fees paid for the specific services giving rise to the claim.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Termination</h2>
            <p>
              Either party may terminate services as described in the applicable agreement. Upon termination, you are responsible for fees incurred up to the termination date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales, without regard to conflict of law principles, unless your local consumer protection laws require otherwise.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p>
              For questions about these terms, contact support@techura.co.uk, UK +44 (7920 693839), or Ghana +233 (4177 3287).
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
