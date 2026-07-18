import { useParams } from "react-router-dom";

import { CaseStudyLayout } from "@/components/case-study";
import { getCaseStudyBySlug } from "@/constants";

import { NotFound } from "./NotFound";

/** Route page for `/work/:slug` — resolves the slug against the case-study registry and renders the layout. */
export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!entry) return <NotFound />;

  return <CaseStudyLayout {...entry.layout} />;
}
