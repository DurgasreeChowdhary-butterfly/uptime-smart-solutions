import { useState } from "react";

import { Button, Container, Reveal, Section } from "@/components/ui";

const FILTERS = [
  "All",
  "AI Engineering",
  "Intelligent Business Automation",
  "Digital Commerce & Customer Platforms",
  "Custom Enterprise Software",
] as const;

/**
 * Capability filter pills — UI only. Selection is purely visual for now;
 * wiring these to actually filter `PortfolioGrid` is a follow-up.
 */
export function CapabilityFilters() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  return (
    <Section id="filters" spacing="sm" container={false}>
      <Container>
        <Reveal className="flex flex-wrap items-center gap-3">
          {FILTERS.map((filter) => (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={active === filter ? "primary" : "outline"}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
