import Link from "next/link";
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
      <section className="mx-auto max-w-3xl px-5 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-academic-gold">Related operative concepts</p>
        <Link
          href="/operative-concepts/ube-far-lateral-l5s1"
          className="mt-3 block border border-academic-line bg-white p-5 transition hover:border-academic-gold"
        >
          <p className="font-serif text-xl leading-snug text-academic-navy">
            UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            A technical note on right L5-S1 foraminal disc herniation and exiting L5 root decompression through a
            far-lateral biportal corridor.
          </p>
        </Link>
        <Link
          href="/operative-concepts/interbody-cage-selection-and-approach-rationale"
          className="mt-3 block border border-academic-line bg-white p-5 transition hover:border-academic-gold"
        >
          <p className="font-serif text-xl leading-snug text-academic-navy">
            Interbody Cage Selection and Endoscopic Approach Rationale in Biportal Spine Surgery
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Technical considerations in interbody cage selection and the rationale for endoscopic approach preferences,
            as an operative concept for surgical education.
          </p>
        </Link>
      </section>
      <Faq items={biportalFaqs} />
    </>
  );
}
