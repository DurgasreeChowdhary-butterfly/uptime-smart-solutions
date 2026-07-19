import { useLayoutEffect } from "react";

import { SEO_DEFAULTS, SITE, absoluteUrl } from "@/constants";

export interface SeoProps {
  /** Page-specific title segment. Omit only for the homepage (uses the full site title as-is). */
  title?: string;
  description?: string;
  /** Site-relative path, e.g. "/work/taxease-ai" — builds the canonical URL and `og:url`. */
  path: string;
  /** Site-relative or absolute image URL for OG/Twitter. Defaults to the site's default OG image. */
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  /** Excludes the page from search indexing — used for the 404 page. */
  noindex?: boolean;
  /** Structured data blocks to inject as JSON-LD, each already a complete `@context`/`@type` object. */
  jsonLd?: object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(blocks: object[] | undefined) {
  document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove());

  for (const block of blocks ?? []) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonld = "true";
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  }
}

/**
 * Sets per-page document metadata: title, description, canonical, Open Graph, Twitter Card,
 * and structured data.
 *
 * This is a client-rendered SPA with no SSR/prerendering, so these tags are written via
 * `useEffect` rather than at request time. Google executes JavaScript before indexing and
 * reads this correctly (including JSON-LD). Crawlers that don't execute JS — some social-media
 * link unfurlers — only see the static defaults baked into `index.html`, not these per-page
 * values. Genuinely accurate per-page Open Graph previews for those crawlers would require
 * server-side rendering or prerendering, which is out of scope here.
 */
export function Seo({ title, description, path, image, keywords, type = "website", noindex, jsonLd }: SeoProps) {
  // `useLayoutEffect`, not `useEffect`: this mutates document.head and we want that done
  // synchronously during commit, in the same tick as the route swap — a passive `useEffect`
  // is scheduled after paint and its exact timing can vary under load, which showed up as
  // an intermittent gap where the previous page's structured data was still in the DOM.
  useLayoutEffect(() => {
    const resolvedTitle = SEO_DEFAULTS.titleTemplate(title);
    const resolvedDescription = description ?? SEO_DEFAULTS.description;
    const resolvedImage = absoluteUrl(image ?? SEO_DEFAULTS.image);
    const url = absoluteUrl(path);

    document.title = resolvedTitle;

    upsertMeta("name", "description", resolvedDescription);
    upsertMeta("name", "keywords", (keywords ?? [...SEO_DEFAULTS.keywords]).join(", "));
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    upsertLink("canonical", url);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:title", resolvedTitle);
    upsertMeta("property", "og:description", resolvedDescription);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", resolvedImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", resolvedTitle);
    upsertMeta("name", "twitter:description", resolvedDescription);
    upsertMeta("name", "twitter:image", resolvedImage);

    setJsonLd(jsonLd);

    // Clear this page's JSON-LD on unmount rather than waiting for the next page's mount
    // effect to overwrite it — React guarantees this runs before the next route's effects,
    // so there's no timing gap where stale breadcrumb/article schema is visible mid-navigation.
    return () => setJsonLd(undefined);
  }, [title, description, path, image, keywords, type, noindex, jsonLd]);

  return null;
}
