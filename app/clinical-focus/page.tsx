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
        title="Endoscopic spine surgery for degenerative lumbar disease"
        description="Each topic is presented as an academic framework: clinical problem, surgical concept, indications, technical considerations, limitations, risks, and educational summary."
      />
      <section className="mx-auto max-w-6xl px-5 py-4">
        {clinicalFocusItems.map((item) => (
          <ClinicalFocusSection key={item.anchor} item={item} />
        ))}
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
    </>
  );
}
