import pageDates from "@/lib/page-dates.json";
import { casebankCases, casebankUpdated } from "@/lib/casebank";
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
  "/casebank",
  "/publications",
  "/evidence-library",
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

  return [...staticRoutes, ...conceptRoutes, ...patientGuideRoutes, ...casebankCases.map((item) => "/casebank/" + item.slug)].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(route.startsWith("/casebank") ? casebankUpdated : route.startsWith("/patient-education") ? patientEducationReviewDate : route.startsWith("/operative-concepts/") ? pageDates["/operative-concepts/[slug]"] : (pageDates as Record<string, string>)[route] ?? "2026-08-24"),
    changeFrequency: route === "/" || route === "/patient-education" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/patient-education") ? 0.8 : 0.7
  }));
}
