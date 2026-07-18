import { PageTransition } from "@/experience";
import { CapabilityFilters, FeaturedProject, PortfolioGrid, WorkCTA, WorkHero } from "@/sections/work";

/** `/work` — the engineering portfolio index. */
export function Work() {
  return (
    <PageTransition>
      <WorkHero />
      <FeaturedProject />
      <CapabilityFilters />
      <PortfolioGrid />
      <WorkCTA />
    </PageTransition>
  );
}
