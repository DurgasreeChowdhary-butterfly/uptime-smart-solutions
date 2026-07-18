import { PageTransition } from "@/experience";
import { PrivacyContent, PrivacyHero } from "@/sections/legal";

/** `/privacy` — the site's privacy policy. */
export function Privacy() {
  return (
    <PageTransition>
      <PrivacyHero />
      <PrivacyContent />
    </PageTransition>
  );
}
