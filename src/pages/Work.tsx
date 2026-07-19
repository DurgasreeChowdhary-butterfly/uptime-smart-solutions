import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { CapabilityFilters, FeaturedProject, PortfolioGrid, WorkCTA, WorkHero } from "@/sections/work";
import { Seo, buildBreadcrumbJsonLd } from "@/seo";

/** `/work` — the engineering portfolio index. */
export function Work() {
  return (
    <PageTransition>
      <Seo
        title="Engineering Work"
        description="A portfolio of production-grade AI platforms, automation, and enterprise software engineered across industries."
        path={ROUTES.workIndex}
        keywords={["AI case studies", "software engineering portfolio", "enterprise software projects"]}
        jsonLd={[buildBreadcrumbJsonLd([{ label: "Work", path: ROUTES.workIndex }])]}
      />
      <WorkHero />
      <FeaturedProject />
      <CapabilityFilters />
      <PortfolioGrid />
      <WorkCTA />
    </PageTransition>
  );
}
