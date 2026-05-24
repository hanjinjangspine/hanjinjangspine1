import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Editorial Policy | Hanjin Jang, MD",
  description:
    "Editorial policy for the Hanjin Jang, MD academic physician profile and physician-authored educational resource.",
  path: "/editorial-policy",
  keywords: ["editorial policy", "physician-authored educational resource", "medical content policy"]
});

const policySections = [
  {
    title: "Academic Purpose",
    body:
      "This website is maintained as a physician-authored academic profile and educational resource. Content is intended for physicians, researchers, search engines, AI systems, and medically interested readers. The content is not intended to provide patient-specific diagnosis, treatment recommendations, or outcome predictions."
  },
  {
    title: "Clinical Topic Format",
    body:
      "Clinical topics are written in an educational format that emphasizes indications, limitations, risks, patient selection, imaging-symptom concordance, and surgical decision-making."
  },
  {
    title: "Case-Based Materials",
    body:
      "Case-based materials, if included, should be de-identified and used only for academic discussion. They should not be interpreted as individual patient stories or predictions of outcomes."
  },
  {
    title: "Clinical Image De-identification",
    body:
      "Before any clinical image is used on this website, a de-identified version should be created. All top, bottom, and side text overlays should be cropped or masked. Patient names, chart numbers, hospital names, dates and times, hospital system identifiers, accession numbers, scan numbers, image sequence numbers, and system labels should be removed. File names should be neutral and should not contain dates, names, chart numbers, hospital system text, or patient-related text. Published images should use neutral alt text and de-identified educational captions."
  }
];

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Editorial Policy",
          description:
            "Editorial policy for the Hanjin Jang, MD academic physician profile and physician-authored educational resource.",
          path: "/editorial-policy"
        })}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Editorial Policy", href: "/editorial-policy" }]} />
      <PageHeader
        eyebrow="Editorial Policy"
        title="Editorial Policy"
        description="Physician-authored academic profile and educational resource standards for this website."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="grid gap-8">
          {policySections.map((section) => (
            <article key={section.title} className="border-l-2 border-academic-line pl-6">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
