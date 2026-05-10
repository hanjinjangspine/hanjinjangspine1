import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { academicActivitySections } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Academic Activity | Hanjin Jang, MD",
  description:
    "Editable academic activity profile for Hanjin Jang, MD, including invited lectures, conference presentations, surgeon education, workshops, research interests, publications, and teaching topics.",
  path: "/academic-activity",
  keywords: ["academic activity", "surgeon education", "biportal endoscopic spine surgery lectures", "UBE workshops"]
});

export default function AcademicActivityPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Academic Activity", href: "/academic-activity" }]} />
      <PageHeader
        eyebrow="Academic Activity"
        title="Lectures, teaching, research interests, and publications"
        description="This editable section provides a structured place to document invited lectures, conference presentations, surgeon education, workshops, publications, and teaching topics."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="mb-8 max-w-4xl text-base leading-8 text-slate-600">
          This section is designed to document Dr. Jang&apos;s academic and educational activity in biportal endoscopic spine surgery, UBE-TLIF, revision endoscopic spine surgery, and complex degenerative lumbar disease. Only verified activities appropriate for public release should be listed.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {academicActivitySections.map((section) => (
            <article key={section.title} className="border border-academic-line bg-white p-6">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
                {section.items.map((item) => (
                  <li key={item} className="border-l-2 border-academic-line pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
