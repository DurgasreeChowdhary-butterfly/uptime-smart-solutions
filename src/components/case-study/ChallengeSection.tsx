import { Image as ImageIcon } from "lucide-react";

import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import type { ChallengeSectionProps } from "@/types";
import { cn } from "@/lib/utils";

/** The business/technical problem being solved — narrative plus an optional pain-point list. */
export function ChallengeSection({
  eyebrow = "THE CHALLENGE",
  heading = "The Challenge",
  description,
  painPoints,
  image,
  className,
}: ChallengeSectionProps) {
  return (
    <Section id="challenge" container={false} className={cn("scroll-mt-24", className)}>
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          <div className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</div>

          {painPoints && painPoints.length > 0 && (
            <ul className="mt-6 flex flex-col gap-3">
              {painPoints.map((point, i) => (
                <li key={point}>
                  <Reveal
                    variant="fadeInUp"
                    delay={i * 0.05}
                    className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {point}
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Reveal variant="scaleIn" className="relative mx-auto aspect-[4/3] w-full">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-2xl border border-border object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-muted/40">
              <ImageIcon className="h-10 w-10 text-muted-foreground" aria-hidden />
            </div>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
