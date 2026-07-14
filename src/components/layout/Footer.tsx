import { Container } from "@/components/ui";
import { SITE } from "@/constants";

/** Placeholder footer. Link columns and legal content land with the homepage build. */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex h-16 items-center justify-between text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {SITE.legalName}
        </span>
      </Container>
    </footer>
  );
}
