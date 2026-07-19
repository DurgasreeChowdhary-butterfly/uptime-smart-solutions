import { Container, Reveal, Section } from "@/components/ui";
import { CONTACT_INFO } from "@/constants";

import { PolicySection } from "./PolicySection";

/**
 * The policy itself. Describes this website's actual, current practices — no tracking
 * cookies or third-party analytics are in use today, so those sections say so plainly
 * rather than describing tooling that doesn't exist.
 */
export function PrivacyContent() {
  return (
    <Section container={false} className="scroll-mt-24">
      <Container size="narrow" className="flex flex-col gap-10">
        <Reveal className="text-sm text-muted-foreground sm:text-base">
          <p>
            This Privacy Policy explains how Uptime Smart Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            collects, uses, and protects information when you visit this website or use our contact form. It
            covers this website only — it does not extend to the software we build for clients, which is governed
            by that client&apos;s own policies.
          </p>
        </Reveal>

        <PolicySection heading="1. Information We Collect" delay={0.02}>
          <p>We collect information in two ways:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Information you provide directly.</span> When you submit our
              contact form, we collect your name, email address, company (optional), the service you&apos;re
              interested in, an optional project budget, and your message. If you email us directly, we receive
              whatever information you choose to include.
            </li>
            <li>
              <span className="text-foreground">Information collected automatically.</span> Like most websites,
              your browser sends standard technical information to any site you visit, such as your browser type,
              device type, and the pages you request.
            </li>
          </ul>
        </PolicySection>

        <PolicySection heading="2. Contact Forms" delay={0.04}>
          <p>
            Information submitted through the contact form is used only to respond to your inquiry and evaluate
            whether we&apos;re a good fit for your project. We do not sell this information to third parties, and
            we do not use it to send unsolicited marketing.
          </p>
        </PolicySection>

        <PolicySection heading="3. Cookies" delay={0.06}>
          <p>
            This website does not currently use tracking or advertising cookies. If that changes — for example, to
            remember a display preference — we will update this section to describe what&apos;s used and why.
          </p>
        </PolicySection>

        <PolicySection heading="4. Analytics" delay={0.08}>
          <p>
            We do not currently use third-party analytics or advertising tracking on this website. If we introduce
            privacy-conscious analytics in the future to understand aggregate site usage, we will update this
            section accordingly.
          </p>
        </PolicySection>

        <PolicySection heading="5. Data Security" delay={0.1}>
          <p>
            We take reasonable technical and organizational measures to protect the information you share with us,
            including transmitting data over encrypted connections (HTTPS). No method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </PolicySection>

        <PolicySection heading="6. Third-Party Services" delay={0.12}>
          <p>
            This website loads web fonts from Google Fonts. Loading these fonts may share technical information,
            such as your IP address, with Google in line with Google&apos;s own privacy practices. We do not
            currently use any other third-party service on this website.
          </p>
        </PolicySection>

        <PolicySection heading="7. Your Rights" delay={0.14}>
          <p>
            Depending on where you&apos;re located, you may have rights over the personal information we hold
            about you, including the right to access, correct, or request deletion of that information. To
            exercise any of these rights, contact us using the details below.
          </p>
        </PolicySection>

        <PolicySection heading="8. Contact Information" delay={0.16}>
          <p>
            If you have questions about this Privacy Policy or how your information is handled, contact us at{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-link underline underline-offset-2 hover:no-underline"
            >
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        </PolicySection>

        <Reveal delay={0.18} className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
        </Reveal>
      </Container>
    </Section>
  );
}
