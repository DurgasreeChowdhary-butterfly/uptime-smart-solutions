import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { TermsContent, TermsHero } from "@/sections/legal";
import { Seo, buildBreadcrumbJsonLd } from "@/seo";

/** `/terms` — the site's terms of service. */
export function Terms() {
  return (
    <PageTransition>
      <Seo
        title="Terms of Service"
        description="The terms governing use of the Uptime Smart Solutions website and contact form."
        path={ROUTES.terms}
        jsonLd={[buildBreadcrumbJsonLd([{ label: "Terms of Service", path: ROUTES.terms }])]}
      />
      <TermsHero />
      <TermsContent />
    </PageTransition>
  );
}
