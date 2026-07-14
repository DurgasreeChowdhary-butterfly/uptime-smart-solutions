import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import { useState } from "react";

import { GlassPanel, IconButton, Reveal, Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

const SLOT_COUNT = 3;

/** Layout-only testimonial carousel shell — structure and controls only, no fabricated quotes. */
export function ClientSuccess() {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((i) => (i - 1 + SLOT_COUNT) % SLOT_COUNT);
  const goNext = () => setActive((i) => (i + 1) % SLOT_COUNT);

  return (
    <Section id="client-success" className="scroll-mt-24">
      <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: SLOT_COUNT }, (_, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <GlassPanel
              glow={false}
              className={cn(
                "flex h-full flex-col items-center gap-4 text-center transition-colors duration-300",
                active === i && "border-primary/40",
              )}
            >
              <Quote className="h-6 w-6 text-primary" aria-hidden />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5 text-muted-foreground" aria-hidden />
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <IconButton
          icon={ChevronLeft}
          label="Previous testimonial"
          variant="outline"
          size="sm"
          onClick={goPrev}
        />

        <div className="flex items-center gap-2">
          {Array.from({ length: SLOT_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                active === i ? "bg-primary" : "bg-border",
              )}
            />
          ))}
        </div>

        <IconButton icon={ChevronRight} label="Next testimonial" variant="outline" size="sm" onClick={goNext} />
      </div>
    </Section>
  );
}
