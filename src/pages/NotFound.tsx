import { Link } from "react-router-dom";

import { Container, Reveal, SectionBackground } from "@/components/ui";
import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Seo } from "@/seo";

// Real route changes, not same-page anchors — plain `Link`s styled like `Button`, not
// `Button href`. See `FeaturedProject.tsx` for why.
const primaryLinkClasses = cn(
  buttonBaseClasses,
  buttonVariantClasses.primary,
  buttonSizeClasses.lg,
  "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
);
const secondaryLinkClasses = cn(
  buttonBaseClasses,
  buttonVariantClasses.secondary,
  buttonSizeClasses.lg,
  "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
);

/** Catch-all `*` route — shown for any URL that doesn't match a real page. */
export function NotFound() {
  return (
    <PageTransition>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        path={typeof window !== "undefined" ? window.location.pathname : ROUTES.home}
        noindex
      />
      <section
        id="not-found"
        className="relative isolate flex min-h-[80svh] flex-col items-center justify-center overflow-hidden"
      >
        <SectionBackground glowPosition="center" />

        <Container className="flex flex-col items-center text-center">
          <Reveal variant="fadeInUp">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              PAGE NOT FOUND
            </span>
          </Reveal>

          <Reveal variant="fadeInUp" delay={0.05} className="mt-4">
            <p className="font-display text-[6rem] leading-none font-semibold tracking-tight text-primary sm:text-[8rem] lg:text-[10rem]">
              404
            </p>
          </Reveal>

          <Reveal variant="fadeInUp" delay={0.1}>
            <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              This page took a wrong turn somewhere.
            </h1>
          </Reveal>

          <Reveal
            variant="fadeInUp"
            delay={0.15}
            className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg"
          >
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on
            track.
          </Reveal>

          <Reveal
            variant="fadeInUp"
            delay={0.2}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to={ROUTES.home} className={primaryLinkClasses}>
              Home
            </Link>
            <Link to={ROUTES.workIndex} className={secondaryLinkClasses}>
              View Work
            </Link>
            <Link to={ROUTES.contact} className={secondaryLinkClasses}>
              Contact
            </Link>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
