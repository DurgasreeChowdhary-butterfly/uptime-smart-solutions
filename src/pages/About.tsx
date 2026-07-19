import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { AboutCTA, AboutHero, AboutProcess, CoreValues, MissionVision, OurStory } from "@/sections/about";
// Imported directly (not from the "@/sections" barrel) so this page's chunk doesn't pull
// in Hero.tsx's Three.js dependency, which the bundler otherwise groups with it — see the
// "sections" chunk in the Phase 9.1 performance audit.
import { Technology } from "@/sections/Technology";
import { Seo, buildBreadcrumbJsonLd } from "@/seo";

/** `/about` — company story, mission/vision, values, process, and stack. */
export function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Uptime Smart Solutions engineers AI-powered software and enterprise applications, guided by engineering excellence, transparency, and long-term partnerships."
        path={ROUTES.about}
        keywords={["about Uptime Smart Solutions", "software engineering studio", "AI engineering company"]}
        jsonLd={[buildBreadcrumbJsonLd([{ label: "About", path: ROUTES.about }])]}
      />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <AboutProcess />
      <Technology />
      <AboutCTA />
    </PageTransition>
  );
}
