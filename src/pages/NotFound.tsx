import { Link } from "react-router-dom";

import { Section } from "@/components/ui";
import { ROUTES } from "@/constants";
import { PageTransition } from "@/experience";

export function NotFound() {
  return (
    <PageTransition>
      <Section className="text-center">
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found.</p>
        <Link to={ROUTES.home} className="mt-6 inline-block text-primary underline">
          Back home
        </Link>
      </Section>
    </PageTransition>
  );
}
