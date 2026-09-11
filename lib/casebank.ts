import { educationalCases, type CaseExample } from "@/lib/content";

export const casebankUpdated = "2026-09-11";
export const notReported = "Not reported in the available educational summary.";
const catalog = [
  { sourceCaseNumber: "Case 01", slug: "lumbar-stenosis-biportal-decompression", region: "Lumbar", procedureGroup: "Decompression", revision: false, question: "How is the decompression target defined in severe lumbar stenosis?", evidenceIds: ["nordsten-2024"], topic: "/biportal-endoscopic-spine-surgery" },
  { sourceCaseNumber: "Case 02", slug: "spondylolisthesis-foot-drop-ube-tlif", region: "Lumbar", procedureGroup: "Fusion", revision: false, question: "What supports adding fusion when spondylolisthesis and neurologic deficit coexist?", evidenceIds: ["nordsten-2024"], topic: "/endoscopic-lumbar-fusion-ube-tlif" },
  { sourceCaseNumber: "Case 03", slug: "revision-endoscopic-lumbar-fusion", region: "Lumbar", procedureGroup: "Fusion", revision: true, question: "How do altered anatomy and scar tissue change revision planning?", evidenceIds: ["jang-revision-2016", "nordsten-2024"], topic: "/revision-endoscopic-spine-surgery" },
  { sourceCaseNumber: "Case 04", slug: "adjacent-segment-disease-extension-fusion", region: "Lumbar", procedureGroup: "Fusion", revision: true, question: "Which adjacent-level findings explain the new neurologic symptoms?", evidenceIds: ["jang-revision-2016", "nordsten-2024"], topic: "/revision-endoscopic-spine-surgery" },
  { sourceCaseNumber: "Case 05", slug: "cervical-myelopathy-endoscopic-decompression", region: "Cervical", procedureGroup: "Decompression", revision: false, question: "How do myelopathy, alignment, and compression pattern inform the approach?", evidenceIds: ["dcm-guideline-2017", "ao-spine-2025"], topic: "/clinical-focus#cervical-spondylotic-myelopathy" },
  { sourceCaseNumber: "Case 06", slug: "l6-lumbarization-multilevel-decompression-fusion", region: "Lumbar", procedureGroup: "Decompression + fusion", revision: false, question: "How is level numbering confirmed before a multilevel operation?", evidenceIds: ["nordsten-2024"], topic: "/endoscopic-lumbar-fusion-ube-tlif" },
  { sourceCaseNumber: "Case 07", slug: "post-laminectomy-two-level-ube-tlif", region: "Lumbar", procedureGroup: "Fusion", revision: true, question: "Why must decompression and stabilization be justified at each revision level?", evidenceIds: ["jang-revision-2016", "nordsten-2024"], topic: "/revision-endoscopic-spine-surgery" }
];

function publishedText(value?: string) {
  if (!value || /To be added|A specific volume should be confirmed|Postoperative imaging, if used|Postoperative imaging should demonstrate/i.test(value)) return notReported;
  return value
    .replace(/Sensory findings and long-tract signs should be included only if verified from the de-identified clinical record\./g, "Sensory findings and long-tract signs are not reported in the available summary.")
    .replace(/Specific motor grades and sensory findings should be included only as verified from the de-identified clinical record\./g, "Specific motor grades and sensory findings are not reported in this summary.")
    .replace(/Specific motor grades and sensory findings should be confirmed from the de-identified clinical record before publication\./g, "Specific motor grades and sensory findings are not reported in this summary.")
    .replace(/ Imaging should be presented only after full de-identification\./g, "")
    .replace(/ Postoperative imaging should be shown only after complete de-identification\./g, "");
}
const sourceCasesByNumber = new Map(educationalCases.map((record) => [record.caseNumber, record]));
export const casebankCases = catalog.map((entry) => {
  const record = sourceCasesByNumber.get(entry.sourceCaseNumber);
  if (!record) throw new Error("Missing published source for " + entry.sourceCaseNumber);
  const clean = Object.fromEntries(Object.entries(record).map(([key, value]) =>
    [key, typeof value === "string" ? publishedText(value) : value]
  )) as CaseExample;
  return { ...clean, ...entry, updated: casebankUpdated };
});
export type CasebankCase = (typeof casebankCases)[number];
export const casebankCards = casebankCases.map((item) => ({
  slug: item.slug, caseNumber: item.caseNumber, title: item.shortTitle,
  diagnosis: item.diagnosis, question: item.question, region: item.region,
  procedureGroup: item.procedureGroup, revision: item.revision,
  imageCount: item.images?.length ?? 0
}));
export type CasebankCard = (typeof casebankCards)[number];
export function getCase(slug: string) { return casebankCases.find((item) => item.slug === slug); }
