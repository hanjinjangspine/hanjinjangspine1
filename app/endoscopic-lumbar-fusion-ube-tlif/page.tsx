import type { Metadata } from "next";
import { ArticleSections } from "@/components/ArticleSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { fusionFaqs, fusionSections } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Endoscopic Lumbar Fusion / UBE-TLIF | Hanjin Jang, MD",
  description:
    "Educational overview of endoscopic lumbar fusion and UBE-TLIF, including indications, degenerative spondylolisthesis, foraminal stenosis, segmental instability, cage insertion, pedicle screw fixation, limitations, and risks.",
  path: "/endoscopic-lumbar-fusion-ube-tlif",
  keywords: ["Endoscopic Lumbar Fusion", "UBE-TLIF", "degenerative spondylolisthesis", "foraminal stenosis"],
  type: "article"
});

export default function EndoscopicLumbarFusionPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Endoscopic Lumbar Fusion / UBE-TLIF",
          description:
            "Physician-authored academic overview of endoscopic lumbar fusion, UBE-TLIF indications, technique, limitations, and risks.",
          path: "/endoscopic-lumbar-fusion-ube-tlif"
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Endoscopic Lumbar Fusion / UBE-TLIF", href: "/endoscopic-lumbar-fusion-ube-tlif" }
        ]}
      />
      <PageHeader
        eyebrow="Fusion Concept"
        title="Endoscopic Lumbar Fusion / UBE-TLIF"
        description="A physician-facing explanation of endoscopic lumbar fusion principles, indications, cage insertion, pedicle screw fixation, limitations, and risks."
      />
      <ArticleSections sections={fusionSections} />
      <Faq items={fusionFaqs} />
    </>
  );
}
