import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClinicalFocusSection } from "@/components/ClinicalFocusSection";
import { PageHeader } from "@/components/PageHeader";
import { clinicalFocusItems } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

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
      </section>
    </>
  );
}
