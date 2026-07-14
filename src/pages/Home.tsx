import {
  Capabilities,
  ClientSuccess,
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
      <Hero />
      <Capabilities />
      <SectionDivider />
      <FeaturedWork />
      <EditorialStatement />
      <Industries />
      <SectionDivider />
      <Technology />
      <EditorialStatement />
      <WhyUptime />
      <SectionDivider />
      <Process />
      <EditorialStatement />
      <ClientSuccess />
      <SectionDivider />
      <FinalCTA />
    </>
  );
}
