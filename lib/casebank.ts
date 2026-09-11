import { educationalCases, operativeConcepts, type CaseExample, type SectionVideo } from "@/lib/content";
import { casebankAdditions } from "@/lib/casebank-additions";
import { caseLevels, type CaseLevels } from "@/lib/casebank-levels";

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
catalog.push(
  { sourceCaseNumber: "Case 08", slug: "right-l5s1-far-lateral-discectomy", region: "Lumbar", procedureGroup: "Decompression", revision: false, question: "How does an exiting L5 root target change the L5-S1 operative corridor?", evidenceIds: [], topic: "/operative-concepts/ube-far-lateral-l5s1" },
  { sourceCaseNumber: "Case 09", slug: "published-l5s1-recurrent-disc-revision", region: "Lumbar", procedureGroup: "Decompression", revision: true, question: "What can a published recurrent-disc example show about revision targeting?", evidenceIds: ["jang-revision-2016"], topic: "/revision-endoscopic-spine-surgery" }
);
type SourceDetail = { kind: string; label: string; href: string; note: string; video?: SectionVideo; figureHref?: string };
const farLateralVideo = operativeConcepts.find((item) => item.slug === "ube-far-lateral-l5s1")?.sections.filter((section) => section.video).at(-1)?.video;
if (!farLateralVideo) throw new Error("Missing published far-lateral operative video");
const additionalSources: Record<string, SourceDetail> = {
  "Case 08": { kind: "Operative video", label: "Previously published far-lateral operative teaching by Hanjin Jang, MD", href: "/operative-concepts/ube-far-lateral-l5s1", video: farLateralVideo, note: "Reorganized from one existing operative teaching sequence. The short excerpt and extended video are not counted as separate cases. This is a technical example, not a complete patient case or outcome report. Patient-level eligibility and follow-up are unavailable." },
  "Case 09": { kind: "Published case", label: "Choi et al., Clinics in Orthopedic Surgery (2016), Figure 3", href: "https://doi.org/10.4055/cios.2016.8.3.325", figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4987318/figure/F3/", note: "An educational synopsis of the published Figure 3 case. Han-Jin Jang is a coauthor; the publication does not establish that he personally performed this patient's procedure. Publication consent and clinical review are governed by the source journal. The original figure remains on the publisher/PMC page." }
};
export type CasebankCase = CaseExample & (typeof catalog)[number] & { updated: string; levels: CaseLevels; source: SourceDetail };
const sourceCasesByNumber = new Map([...educationalCases, ...casebankAdditions].map((record) => [record.caseNumber, record]));
export const casebankCases: CasebankCase[] = catalog.map((entry) => {
  const record = sourceCasesByNumber.get(entry.sourceCaseNumber);
  if (!record) throw new Error("Missing published source for " + entry.sourceCaseNumber);
  const clean = Object.fromEntries(Object.entries(record).map(([key, value]) =>
    [key, typeof value === "string" ? publishedText(value) : value]
  )) as CaseExample;
  const levels = caseLevels[entry.sourceCaseNumber];
  if (!levels) throw new Error("Missing level review for " + entry.sourceCaseNumber);
  return { ...clean, ...entry, updated: casebankUpdated, levels, source: additionalSources[entry.sourceCaseNumber] ?? { kind: "Clinical summary", label: "Hanjin Jang, MD academic case collection", href: "/casebank", note: `${record.caseNumber} in the previously published Case-Based Education collection by Hanjin Jang, MD. A separate case-level clinical review date and public consent record are not reported in the available source.` } };
});
export const casebankCards = casebankCases.map((item) => ({
  slug: item.slug, caseNumber: item.caseNumber, title: item.shortTitle,
  diagnosis: item.diagnosis, question: item.question, region: item.region,
  procedureGroup: item.procedureGroup, revision: item.revision,
  imageCount: item.images?.length ?? 0, levelCount: item.levels.treated?.length ?? null,
  levelNames: item.levels.treated?.join(", ") ?? "Levels not specified", sourceKind: item.source.kind,
  hasVideo: Boolean(item.source.video), hasExternalFigure: Boolean(item.source.figureHref)
}));
export type CasebankCard = (typeof casebankCards)[number];
export function getCase(slug: string) { return casebankCases.find((item) => item.slug === slug); }
