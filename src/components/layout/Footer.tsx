import { Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { Container, IconButton } from "@/components/ui";
import { CONTACT_INFO, ROUTES, SITE } from "@/constants";

interface FooterLink {
  label: string;
  href: string;
}

const NAV_LINKS: FooterLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Work", href: ROUTES.workIndex },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

// No dedicated page per service yet — each points to the homepage's capabilities overview.
const SERVICE_LINKS: FooterLink[] = [
  { label: "AI Engineering", href: "/#capabilities" },
  { label: "Enterprise Software", href: "/#capabilities" },
  { label: "AI Automation", href: "/#capabilities" },
  { label: "SaaS", href: "/#capabilities" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => {
          const linkClassName = "text-sm text-muted-foreground transition-colors hover:text-foreground";
          // A hash means "jump to a section on another page" (not a plain route), which needs
          // a native anchor rather than `Link` — see `FeaturedProject.tsx` / `Navbar.tsx`.
          const isPlainRoute = !link.href.includes("#");

          return (
            <li key={link.label}>
              {isPlainRoute ? (
                <Link to={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={linkClassName}>
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Global site footer: brand, navigation, services, legal, and social links. */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to={ROUTES.home}
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Engineering AI-powered software and enterprise applications that solve real business problems.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <IconButton
                icon={ExternalLink}
                label="LinkedIn"
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              />
              <IconButton
                icon={Code2}
                label="GitHub"
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              />
            </div>
          </div>

          <FooterColumn title="Navigation" links={NAV_LINKS} />
          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.legalName}
        </div>
      </Container>
    </footer>
  );
}
