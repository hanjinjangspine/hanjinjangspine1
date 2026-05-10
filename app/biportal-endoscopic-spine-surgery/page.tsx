import type { Metadata } from "next";
import { ArticleSections } from "@/components/ArticleSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { biportalFaqs, biportalSections } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Biportal Endoscopic Spine Surgery | Hanjin Jang, MD",
  description:
    "Academic overview of biportal endoscopic spine surgery, including two-portal working concept, irrigation, visualization, differences from microscopic surgery and uniportal endoscopy, applications, limitations, and risks.",
  path: "/biportal-endoscopic-spine-surgery",
  keywords: ["biportal endoscopic spine surgery", "unilateral biportal endoscopy", "UBE", "endoscopic spine surgery"],
  type: "article"
});

export default function BiportalEndoscopyPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Biportal Endoscopic Spine Surgery",
          description:
            "Physician-authored academic overview of biportal endoscopic spine surgery, UBE anatomy, visualization, applications, limitations, and risks.",
          path: "/biportal-endoscopic-spine-surgery"
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Biportal Endoscopic Spine Surgery", href: "/biportal-endoscopic-spine-surgery" }
        ]}
      />
      <PageHeader
        eyebrow="Technique Overview"
        title="Biportal Endoscopic Spine Surgery"
        description="An academic explanation of the two-portal endoscopic platform, anatomical orientation, irrigation, visualization, applications, and limitations."
      />
      <ArticleSections sections={biportalSections} />
      <Faq items={biportalFaqs} />
    </>
  );
}
