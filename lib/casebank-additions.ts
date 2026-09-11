import type { CaseExample } from "@/lib/content";

const missing = "Not reported in the available source.";

// Only previously public teaching material is included. No private clinical rows
// or newly inferred patient outcomes are imported from the internal Case Bank.
export const casebankAdditions: CaseExample[] = [
  {
    caseNumber: "Case 08",
    title: "Right L5-S1 Foraminal Disc Herniation: Far-Lateral Biportal Foraminotomy and Discectomy",
    shortTitle: "Right L5-S1 Far-Lateral Foraminotomy and Discectomy",
    diagnosis: "Right L5-S1 foraminal or foraminal-extraforaminal disc herniation involving the exiting L5 nerve root.",
    procedure: "Far-lateral biportal endoscopic foraminotomy and discectomy; no fusion is described.",
    surgicalLevel: "Right L5-S1: one treated motion segment.",
    clinicalPresentation: "The previously published operative teaching material identifies a focal right L5-S1 foraminal disc target. It does not provide a patient-level symptom history, symptom duration, age, or examination record.",
    neurologicFindings: "The operative target is the exiting right L5 root. A target root is an anatomical description; preoperative motor grades and sensory findings are not supplied.",
    conservativeTreatmentSummary: missing,
    imagingSummary: "The source describes a lesion within or lateral to the right L5-S1 foramen. No preoperative diagnostic image series is supplied with this teaching entry, so clinical-imaging concordance cannot be independently assessed from the video.",
    surgicalRationale: "The teaching rationale is to reach the exiting-root corridor directly through a far-lateral approach. This rationale explains the demonstrated access route; the source does not document a complete patient-selection assessment.",
    operativeNoteSummary: "The published sequence demonstrates the foraminal corridor, bony decompression, disc-fragment removal, and inspection of the exiting root. The technical discussion emphasizes facet and pars preservation and careful handling near the dorsal root ganglion. Bilateral canal decompression and interbody fusion are not part of the described sequence.",
    postoperativeCourse: missing,
    postoperativeImagingSummary: missing,
    educationalPoint: "Distinguish the exiting L5 root from the traversing S1 root when naming an L5-S1 target. The number of portals, video clips, or decompressed sides does not increase the number of treated spinal levels. Technical visualization alone cannot establish clinical benefit or absence of complications.",
    imagesAvailable: false,
  },
  {
    caseNumber: "Case 09",
    title: "Published L5-S1 Recurrent Disc Herniation Case After Open Microdiscectomy",
    shortTitle: "L5-S1 Recurrent Disc Herniation: Published Revision Case",
    diagnosis: "Recurrent lumbar disc herniation at L5-S1, illustrated in Figure 3 of Choi et al. (2016).",
    procedure: "Revision biportal endoscopic discectomy.",
    surgicalLevel: "L5-S1: one treated motion segment.",
    clinicalPresentation: "The published example documents recurrence seven months after open microdiscectomy.",
    neurologicFindings: missing,
    conservativeTreatmentSummary: missing,
    imagingSummary: "Figure 3 follows initial herniation, postoperative imaging, recurrence, and imaging after revision.",
    surgicalRationale: "The report discusses reaching recurrent disc material through a scarred field while limiting additional facet removal.",
    operativeNoteSummary: "The technical report describes identifying bone before releasing adhesions and removing the recurrent fragment.",
    postoperativeCourse: "Individual long-term functional outcomes are not supplied for the illustrated case.",
    postoperativeImagingSummary: "The figure describes decompression and preservation of the facet after revision. Imaging does not establish symptom recovery.",
    educationalPoint: "Compare the anatomical target before and after revision. This single published example cannot establish comparative safety or effectiveness.",
    imagesAvailable: false,
  },
];
