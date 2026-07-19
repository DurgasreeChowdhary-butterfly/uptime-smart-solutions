import { useParams } from "react-router-dom";

import { CaseStudyLayout } from "@/components/case-study";
import { getCaseStudyBySlug, ROUTES, SEO_DEFAULTS } from "@/constants";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, Seo } from "@/seo";

import { NotFound } from "./NotFound";

/** Route page for `/work/:slug` — resolves the slug against the case-study registry and renders the layout. */
export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!entry || !slug) return <NotFound />;

  const { hero } = entry.layout;
  const title = typeof hero.title === "string" ? hero.title : "Case Study";
  const description = typeof hero.tagline === "string" ? hero.tagline : SEO_DEFAULTS.description;
  const path = ROUTES.work(slug);
  const keywords = [hero.industry, hero.type, ...(hero.tech ?? [])].filter(
    (value): value is string => typeof value === "string" && value.length > 0,
  );

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        type="article"
        keywords={keywords}
        jsonLd={[
          buildBreadcrumbJsonLd([
            { label: "Work", path: ROUTES.workIndex },
            { label: title, path },
          ]),
          buildArticleJsonLd({ title, description, path, image: SEO_DEFAULTS.image }),
        ]}
      />
      <CaseStudyLayout {...entry.layout} />
    </>
  );
}
