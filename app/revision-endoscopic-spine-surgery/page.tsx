import type { Metadata } from "next";
import { ArticleSections } from "@/components/ArticleSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { revisionFaqs, revisionSections } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Revision Endoscopic Spine Surgery | Hanjin Jang, MD",
  description:
    "Academic overview of revision endoscopic spine surgery after previous decompression or fusion, including adjacent segment disease, scar tissue, imaging-symptom concordance, decision-making, and educational points.",
  path: "/revision-endoscopic-spine-surgery",
  keywords: ["revision endoscopic spine surgery", "revision spine surgery", "adjacent segment disease", "recurrent disc herniation"],
  type: "article"
});

export default function RevisionEndoscopicSpineSurgeryPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Revision Endoscopic Spine Surgery",
          description:
            "Physician-authored academic overview of revision endoscopic spine surgery, scar tissue considerations, adjacent segment disease, and decision-making.",
          path: "/revision-endoscopic-spine-surgery"
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Revision Endoscopic Spine Surgery", href: "/revision-endoscopic-spine-surgery" }
        ]}
      />
      <PageHeader
        eyebrow="Revision Surgery"
        title="Revision Endoscopic Spine Surgery"
        description="Educational framework for revision after previous decompression, revision after fusion, adjacent segment disease, scar tissue, imaging-symptom concordance, and decision-making."
      />
      <ArticleSections sections={revisionSections} />
      <Faq items={revisionFaqs} />
    </>
  );
}
