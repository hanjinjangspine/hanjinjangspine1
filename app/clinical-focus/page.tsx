import { RelatedCasebank } from "@/components/RelatedCasebank";
import { EvidenceReferences } from "@/components/EvidenceReferences";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClinicalFocusSection } from "@/components/ClinicalFocusSection";
import { PageHeader } from "@/components/PageHeader";
import { PatientFacingResources } from "@/components/PatientFacingResources";
import { clinicalFocusItems } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { getNewStandardPatientResources } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Clinical Focus | Biportal Endoscopic Spine Surgery and UBE-TLIF",
  description:
    "Clinical focus areas for Hanjin Jang, MD, including biportal endoscopic spine surgery, endoscopic lumbar decompression, UBE-TLIF, revision spine surgery, adjacent segment disease, lumbar spinal stenosis, and degenerative spondylolisthesis.",
  path: "/clinical-focus",
  keywords: ["clinical focus", "biportal endoscopic decompression", "UBE-TLIF", "revision spine surgery"]
});

export default function ClinicalFocusPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Clinical Focus", href: "/clinical-focus" }]} />
      <PageHeader
        eyebrow="Clinical Focus"
        title="Endoscopic spine surgery for degenerative spine disease"
        description="Each topic is presented as an academic framework: clinical problem, surgical concept, indications, technical considerations, limitations, risks, and educational summary."
      />
      <section className="mx-auto max-w-6xl px-5 py-4">
        {clinicalFocusItems.map((item) => (
          <ClinicalFocusSection key={item.anchor} item={item} />
        ))}
        <section id="cervical-spondylotic-myelopathy" className="my-10 border border-academic-line bg-academic-panel p-6">
          <h2 className="font-serif text-3xl text-academic-navy">Degenerative cervical myelopathy</h2>
          <p className="mt-4 text-sm leading-8 text-slate-700">The Casebank includes a published cervical decompression case. Its educational focus is the relationship between myelopathic symptoms, cord compression, operative level selection, and the limitations of a posterior endoscopic approach.</p>
          <p className="mt-4 text-sm leading-8 text-slate-700">Clinical guidelines organize management around severity and progression. They do not validate one endoscopic corridor for every patient. A case-specific approach still requires assessment of alignment, stability, the compression pattern, and neurologic findings.</p>
          <div className="mt-6"><EvidenceReferences ids={["dcm-guideline-2017", "ao-spine-2025"]} /></div>
        </section>
        <PatientFacingResources
          resources={getNewStandardPatientResources([
            "spine-center",
            "advanced-endoscopy",
            "ube-tlif",
            "revision",
            "cervical-myelopathy",
            "lumbar-stenosis",
            "elderly-decision"
          ])}
          className="my-10"
          title="New Standard Hospital patient-facing resources"
          description="These official New Standard Hospital patient information pages provide Korean-language context for related conditions and treatment decision-making. They are separate from the academic summaries on this site and are not patient-specific medical advice."
        />
      </section>
    <RelatedCasebank group="all" />
    </>
  );
}
