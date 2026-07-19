import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { ContactCTA, ContactFAQ, ContactForm, ContactHero, ContactInfo } from "@/sections/contact";
import { Seo, buildBreadcrumbJsonLd } from "@/seo";

/** `/contact` — contact form, direct contact channels, and FAQ. */
export function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Tell us about your project. Reach Uptime Smart Solutions through the contact form, email, or LinkedIn."
        path={ROUTES.contact}
        keywords={["contact Uptime Smart Solutions", "hire software engineers", "AI project inquiry"]}
        jsonLd={[buildBreadcrumbJsonLd([{ label: "Contact", path: ROUTES.contact }])]}
      />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
    </PageTransition>
  );
}
