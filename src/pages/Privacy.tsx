import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { PrivacyContent, PrivacyHero } from "@/sections/legal";
import { Seo, buildBreadcrumbJsonLd } from "@/seo";

/** `/privacy` — the site's privacy policy. */
export function Privacy() {
  return (
    <PageTransition>
      <Seo
        title="Privacy Policy"
        description="How Uptime Smart Solutions collects, uses, and protects information from this website and its contact form."
        path={ROUTES.privacy}
        jsonLd={[buildBreadcrumbJsonLd([{ label: "Privacy Policy", path: ROUTES.privacy }])]}
      />
      <PrivacyHero />
      <PrivacyContent />
    </PageTransition>
  );
}
