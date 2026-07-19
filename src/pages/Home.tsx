import { ROUTES } from "@/constants";
import { Seo } from "@/seo";
import {
  Capabilities,
  EngineeringPrinciples,
  FeaturedWork,
  FinalCTA,
  Hero,
  Industries,
  Process,
  Technology,
  WhyUptime,
} from "@/sections";
import { EditorialStatement, SectionDivider } from "@/sections/transitions";

export function Home() {
  return (
    <>
      <Seo path={ROUTES.home} />
      <Hero />
      <Capabilities />
      <SectionDivider label="See It In Action" />
      <FeaturedWork />
      <EditorialStatement statement="Every platform we ship is built to solve a real operating problem — across every industry we work with." />
      <Industries />
      <SectionDivider label="The Stack Behind It" />
      <Technology />
      <EditorialStatement statement="The right technology is only half the equation. The other half is engineering discipline." />
      <WhyUptime />
      <SectionDivider label="How We Work" />
      <Process />
      <EditorialStatement statement="A repeatable process only holds up when it's backed by principles that don't bend under pressure." />
      <EngineeringPrinciples />
      <SectionDivider label="Let's Talk" />
      <FinalCTA />
    </>
  );
}
