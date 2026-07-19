import { absoluteUrl, SITE } from "@/constants";

export interface BreadcrumbItem {
  label: string;
  /** Site-relative path, e.g. "/work" or "/work/taxease-ai". */
  path: string;
}

/** Builds a schema.org `BreadcrumbList` for the given page trail (Home is implicit, first). */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const trail = [{ label: "Home", path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface ArticleJsonLdInput {
  title: string;
  description: string;
  path: string;
  /** Site-relative or absolute image URL. */
  image: string;
}

/** Builds a schema.org `Article` block for a case study. */
export function buildArticleJsonLd({ title, description, path, image }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon-512.png"),
      },
    },
  };
}
