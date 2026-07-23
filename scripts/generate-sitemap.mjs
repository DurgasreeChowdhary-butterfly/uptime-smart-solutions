// Regenerates public/sitemap.xml from the static page list plus every case-study slug
// registered in src/constants/caseStudies.ts. Dependency-free (plain regex over the source
// file) so it doesn't need a TS runtime — run automatically before `dev`/`build` via the
// "predev"/"prebuild" npm scripts, or manually with `npm run sitemap`.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://uptimesmartsolutions.com";
const ROOT = fileURLToPath(new URL("..", import.meta.url));

const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/work", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const caseStudiesSource = readFileSync(`${ROOT}/src/constants/caseStudies.ts`, "utf8");
// Anchored to exactly 4 leading spaces so this only matches each registry entry's own
// top-level `slug`, not the nested `slug` inside a `relatedProjects.projects[]` cross-link.
const slugs = [...caseStudiesSource.matchAll(/^ {4}slug:\s*"([a-z0-9-]+)"/gm)].map((match) => match[1]);

const casePages = slugs.map((slug) => ({ path: `/work/${slug}`, changefreq: "monthly", priority: "0.8" }));

const urls = [...STATIC_PAGES, ...casePages];
const today = new Date().toISOString().slice(0, 10);

const body = urls
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(`${ROOT}/public/sitemap.xml`, xml);
console.log(`sitemap.xml written with ${urls.length} URLs (${slugs.length} case studies).`);
