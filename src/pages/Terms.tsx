import { PageTransition } from "@/experience";
import { TermsContent, TermsHero } from "@/sections/legal";

/** `/terms` — the site's terms of service. */
export function Terms() {
  return (
    <PageTransition>
      <TermsHero />
      <TermsContent />
    </PageTransition>
  );
}
