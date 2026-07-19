import { SITE } from "./site";

/** Canonical origin — used to build absolute URLs for canonical links, OG, and JSON-LD. */
export const SITE_URL = `https://${SITE.domain}`;

/** Builds an absolute URL for a given site-relative path (e.g. "/work/taxease-ai"). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

const DEFAULT_TITLE = "Uptime Smart Solutions — Engineering Intelligent Software for Real Business Problems";

/** Site-wide fallback metadata, used as the default and merged with per-page overrides. */
export const SEO_DEFAULTS = {
  /** Home gets the full brand title as-is; every other page gets "Page | Site Name". */
  titleTemplate: (pageTitle?: string) => (pageTitle ? `${pageTitle} | ${SITE.name}` : DEFAULT_TITLE),
  description:
    "Uptime Smart Solutions engineers AI-powered software, automation, and enterprise applications that solve real business problems.",
  keywords: [
    "AI software development",
    "enterprise software engineering",
    "AI automation",
    "SaaS development",
    "custom software company",
  ],
  image: "/og-default.jpg",
  imageAlt: "Uptime Smart Solutions — Engineering Intelligent Software for Real Business Problems",
} as const;
