import { Divider, Reveal, Section } from "@/components/ui";

export interface SectionDividerProps {
  id?: string;
  /** Tiny label shown above the line. Defaults to a generic placeholder. */
  label?: string;
}

/**
 * Lightweight connective transition — a small label and a thin animated line,
 * with generous breathing room on either side. The quieter counterpart to
 * `EditorialStatement`, for gaps that only need a soft breath, not a beat.
 */
export function SectionDivider({ id, label = "[Transition Message]" }: SectionDividerProps) {
  return (
    <Section id={id} spacing="sm" animate={false} className="scroll-mt-24">
      <Reveal variant="fadeIn" duration={0.9} className="flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
        <Divider className="max-w-xs" />
      </Reveal>
    </Section>
  );
}
