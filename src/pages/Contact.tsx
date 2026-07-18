import { PageTransition } from "@/experience";
import { ContactCTA, ContactFAQ, ContactForm, ContactHero, ContactInfo } from "@/sections/contact";

/** `/contact` — contact form, direct contact channels, and FAQ. */
export function Contact() {
  return (
    <PageTransition>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
    </PageTransition>
  );
}
