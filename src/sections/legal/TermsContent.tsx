import { Container, Reveal, Section } from "@/components/ui";
import { CONTACT_INFO } from "@/constants";

import { PolicySection } from "./PolicySection";

/**
 * The terms themselves. Where an actual paid engagement is involved, this page
 * intentionally defers to a separate signed project agreement rather than
 * inventing pricing, delivery, or ownership terms that don't exist yet.
 */
export function TermsContent() {
  return (
    <Section container={false} className="scroll-mt-24">
      <Container size="narrow" className="flex flex-col gap-10">
        <Reveal className="text-sm text-muted-foreground sm:text-base">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of this website and any inquiry you submit
            through it. They are between you and Uptime Smart Solutions (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;).
          </p>
        </Reveal>

        <PolicySection heading="1. Acceptance of Terms" delay={0.02}>
          <p>
            By accessing or using this website, you agree to these Terms. If you do not agree with any part of
            them, please do not use this website.
          </p>
        </PolicySection>

        <PolicySection heading="2. Services" delay={0.04}>
          <p>
            This website describes our software engineering services and lets you reach out about a project. It is
            informational — submitting the contact form is an inquiry, not a purchase or a binding order. The
            scope, timeline, and deliverables of any actual engagement are set out separately in a project
            agreement signed by both parties before work begins.
          </p>
        </PolicySection>

        <PolicySection heading="3. Intellectual Property" delay={0.06}>
          <p>
            The content on this website — including its text, design, graphics, and code — is owned by Uptime
            Smart Solutions and may not be copied, reproduced, or reused without our permission. Ownership and
            licensing of deliverables from an actual client engagement are governed by that engagement&apos;s own
            project agreement, not by this page.
          </p>
        </PolicySection>

        <PolicySection heading="4. Payments" delay={0.08}>
          <p>
            Any project budget you share through the contact form is treated as an estimate to help us scope your
            request — not a quote or invoice. Pricing, payment schedules, and payment methods for an actual
            engagement are agreed in writing in a separate project agreement before work begins.
          </p>
        </PolicySection>

        <PolicySection heading="5. Limitation of Liability" delay={0.1}>
          <p>
            This website and its content are provided &quot;as is&quot;, without warranties of any kind, express or
            implied, including that it will be error-free or uninterrupted. To the fullest extent permitted by law,
            Uptime Smart Solutions is not liable for any indirect, incidental, or consequential damages arising
            from your use of this website.
          </p>
        </PolicySection>

        <PolicySection heading="6. Confidentiality" delay={0.12}>
          <p>
            Information you share with us through the contact form or in early project discussions is treated as
            confidential and used only to evaluate and, if applicable, deliver your engagement. Formal
            confidentiality obligations for an actual project — including any mutual non-disclosure terms — are set
            out in that project&apos;s own agreement.
          </p>
        </PolicySection>

        <PolicySection heading="7. Governing Law" delay={0.14}>
          {/* Placeholder jurisdiction, consistent with the (also placeholder) IST business
              hours in `CONTACT_INFO` — confirm against the company's actual jurisdiction
              of incorporation before this is relied on. */}
          <p>
            These Terms are governed by the laws of India, without regard to its conflict-of-law principles, and
            any dispute arising from them will be subject to the exclusive jurisdiction of the courts located
            there.
          </p>
        </PolicySection>

        <PolicySection heading="8. Contact" delay={0.16}>
          <p>
            If you have questions about these Terms, contact us at{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        </PolicySection>

        <Reveal delay={0.18} className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>We may update these Terms from time to time. Changes will be posted on this page.</p>
        </Reveal>
      </Container>
    </Section>
  );
}
