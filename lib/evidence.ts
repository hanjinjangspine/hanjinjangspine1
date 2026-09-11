export const evidenceCheckedDate = "2026-09-11";
export type EvidenceReference = {
  id: string; title: string; citation: string; href: string; doi: string;
  kind: string; context: string; limitation: string; authorRecord?: string;
};
export const evidenceReferences: EvidenceReference[] = [
  {
    id: "jang-revision-2016",
    title: "Biportal Endoscopic Spinal Surgery for Recurrent Lumbar Disc Herniations",
    citation: "Choi DJ, Jung JT, Lee SJ, Kim YS, Jang HJ, Yoo B. Clin Orthop Surg. 2016;8(3):325–329.",
    href: "https://pubmed.ncbi.nlm.nih.gov/27583117/",
    doi: "10.4055/cios.2016.8.3.325", kind: "Coauthored publication · technical report",
    authorRecord: "The indexed author list includes Han-Jin Jang, with a Barun Hospital, Jinju affiliation.",
    context: "A published technical discussion of biportal revision discectomy, scar dissection, and preservation of remaining stabilizing structures.",
    limitation: "This report concerns recurrent disc herniation. It does not establish the benefit of revision fusion or validate outcomes in the cases on this website."
  },
  {
    id: "jang-cord-injury-2012",
    title: "Impact of Early Tracheostomy on Hospital-Acquired Pneumonia and Infection of Anterior Cervical Fusion Site in Patients with Acute Cervical Cord Injury",
    citation: "Jang HJ, Jwa CS. Korean J Neurotrauma. 2012;8(2):59–63.",
    href: "https://www.kjnt.org/DOIx.php?id=10.13004/kjnt.2012.8.2.59",
    doi: "10.13004/kjnt.2012.8.2.59", kind: "Coauthored publication · retrospective study",
    authorRecord: "The journal lists Han Jin Jang and Cheol Su Jwa, Department of Neurosurgery, National Medical Center, Seoul.",
    context: "A retrospective study examining tracheostomy timing in patients with acute cervical cord injury.",
    limitation: "An acute spinal cord injury study; it is not evidence for elective endoscopic decompression or the Casebank's operative outcomes."
  },
  {
    id: "nordsten-2024",
    title: "Decompression alone or with fusion for degenerative lumbar spondylolisthesis (Nordsten-DS): five year follow-up",
    citation: "Kgomotso EL et al. BMJ. 2024;386:e079771.",
    href: "https://www.bmj.com/content/386/bmj-2024-079771",
    doi: "10.1136/bmj-2024-079771", kind: "External evidence · randomized trial",
    context: "At five years, decompression alone was non-inferior to decompression with instrumented fusion in the trial population.",
    limitation: "Patient selection and exclusions matter. These findings do not establish that every slip needs fusion, nor compare UBE-TLIF with all alternative techniques."
  },
  {
    id: "dcm-guideline-2017",
    title: "A Clinical Practice Guideline for the Management of Patients With Degenerative Cervical Myelopathy",
    citation: "Fehlings MG et al. Global Spine J. 2017;7(3 Suppl):70S–83S.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5684840/",
    doi: "10.1177/2192568217701914", kind: "External evidence · clinical guideline",
    context: "Recommendations organize management by myelopathy severity, progression, and the presence of cord compression.",
    limitation: "A management guideline does not endorse a single endoscopic corridor. Alignment, instability, compression pattern, and the individual examination remain relevant."
  },
  {
    id: "ao-spine-2025",
    title: "AO Spine Clinical Practice Recommendations for Diagnosis and Management of Degenerative Cervical Myelopathy",
    citation: "Fehlings MG et al. Global Spine J. 2025;15(5):2585–2593.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12012498/",
    doi: "10.1177/21925682251331050", kind: "External evidence · clinical practice recommendations",
    context: "A 2025 evidence review of decision-making in degenerative cervical myelopathy.",
    limitation: "Use alongside the cited source and individual clinical assessment. It is not a study of the cases presented on this site."
  }
];
export const publications = evidenceReferences.filter((item) => item.authorRecord);
export function getEvidence(ids: readonly string[]) {
  return evidenceReferences.filter((item) => ids.includes(item.id));
}

