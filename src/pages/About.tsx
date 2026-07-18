import { PageTransition } from "@/experience";
import { Technology } from "@/sections";
import { AboutCTA, AboutHero, AboutProcess, CoreValues, MissionVision, OurStory } from "@/sections/about";

/** `/about` — company story, mission/vision, values, process, and stack. */
export function About() {
  return (
    <PageTransition>
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
