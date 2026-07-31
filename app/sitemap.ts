import type { MetadataRoute } from "next";
import { operativeConcepts } from "@/lib/content";
import { patientEducationGuides, patientEducationReviewDate } from "@/lib/patient-education";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about",
  "/clinical-focus",
  "/biportal-endoscopic-spine-surgery",
  "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression",
  "/endoscopic-lumbar-fusion-ube-tlif",
  "/revision-endoscopic-spine-surgery",
  "/case-based-education",
  "/academic-activity",
  "/patient-education",
  "/operative-concepts",
  "/for-referring-physicians",
  "/structured-professional-profile",
  "/editorial-policy",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const conceptRoutes = operativeConcepts.map((concept) => `/operative-concepts/${concept.slug}`);
  const patientGuideRoutes = patientEducationGuides.map((guide) => `/patient-education/${guide.slug}`);

  return [...staticRoutes, ...conceptRoutes, ...patientGuideRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(route.startsWith("/patient-education") ? patientEducationReviewDate : "2026-05-09"),
    changeFrequency: route === "/" || route === "/patient-education" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/patient-education") ? 0.8 : 0.7
  }));
}
