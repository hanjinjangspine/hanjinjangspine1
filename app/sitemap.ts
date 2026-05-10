import type { MetadataRoute } from "next";
import { operativeConcepts } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about",
  "/clinical-focus",
  "/biportal-endoscopic-spine-surgery",
  "/endoscopic-lumbar-fusion-ube-tlif",
  "/revision-endoscopic-spine-surgery",
  "/case-based-education",
  "/academic-activity",
  "/operative-concepts",
  "/for-referring-physicians",
  "/structured-professional-profile",
  "/editorial-policy",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const conceptRoutes = operativeConcepts.map((concept) => `/operative-concepts/${concept.slug}`);

  return [...staticRoutes, ...conceptRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-05-09"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
