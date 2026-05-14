import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { academicActivitySections, academicPresentationRecords } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Academic Activity | Hanjin Jang, MD",
  description:
    "Selected academic presentations and educational materials by Hanjin Jang, MD on biportal endoscopic spine surgery, UBE, UBE-TLIF, revision spine surgery, degenerative lumbar spondylolisthesis, cervical foraminotomy, and cervical spondylotic myelopathy.",
  path: "/academic-activity",
  openGraphTitle: "Academic Activity | Hanjin Jang, MD",
  openGraphDescription:
    "Academic presentation archive and educational summaries on endoscopic spine surgery, biportal endoscopy, UBE-TLIF, revision surgery, degenerative spondylolisthesis, and cervical endoscopic decompression.",
  keywords: [
    "academic activity",
    "academic presentations",
    "surgeon education",
    "biportal endoscopic spine surgery lectures",
    "UBE workshops",
    "UBE-TLIF presentation",
    "cervical endoscopic decompression"
  ]
});

const researchEducationKeywords = [
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE",
  "BESS",
  "UBE-TLIF",
  "Endoscopic lumbar fusion",
  "Revision spine surgery",
  "Recurrent lumbar disc herniation",
  "Lumbar spinal stenosis",
  "Degenerative lumbar spondylolisthesis",
  "Cervical foraminotomy",
  "Cervical laminoforaminotomy",
  "Cervical spondylotic myelopathy",
  "Endoscopic decompression",
  "Minimally invasive spine surgery"
];

export default function AcademicActivityPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Academic Activity", href: "/academic-activity" }]} />
      <PageHeader
        eyebrow="Academic Activity"
        title="Academic Activity"
        description="Selected academic presentations and educational materials on endoscopic spine surgery, biportal endoscopic spine surgery, UBE, UBE-TLIF, revision spine surgery, degenerative lumbar spondylolisthesis, cervical foraminotomy, and cervical spondylotic myelopathy."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <article className="mb-8 border border-academic-line bg-white p-6">
          <h2 className="font-serif text-3xl text-academic-navy">Selected Academic Presentations and Educational Materials</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Dr. Hanjin Jang has prepared and presented academic materials on biportal endoscopic spine surgery, unilateral biportal endoscopy, revision spine surgery, cervical endoscopic decompression, degenerative lumbar spondylolisthesis, and cervical spondylotic myelopathy.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            These materials reflect academic and technical discussions on surgical indications, complication analysis, revision strategies, and minimally invasive spine surgery techniques. The content is provided as a professional academic archive and should not be interpreted as patient-specific medical advice or a guarantee of treatment outcomes.
          </p>
        </article>

        <aside className="mb-10 border-l-4 border-academic-gold bg-academic-panel p-5 text-sm leading-7 text-slate-700">
          This page summarizes selected presentation materials. Raw slide files and patient-specific image sets are not publicly provided. Any clinical images used in future updates must be fully de-identified according to the website editorial policy.
        </aside>

        <div className="mb-5">
          <h2 className="font-serif text-3xl text-academic-navy">Presentation Archive</h2>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          {academicPresentationRecords.map((record) => (
            <article key={record.title} className="border border-academic-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">Title</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-academic-navy">{record.title}</h2>
              <div className="mt-5 grid gap-5">
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Academic focus</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{record.academicFocus}</p>
                </section>
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Key topics</h3>
                  <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                    {record.keyTopics.map((topic) => (
                      <li key={topic} className="border-l-2 border-academic-line pl-3">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Educational summary</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{record.educationalSummary}</p>
                </section>
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Status</h3>
                  <p className="mt-2 text-sm font-semibold leading-7 text-academic-navy">{record.status}</p>
                </section>
              </div>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Keywords</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {record.focusTerms.map((term) => (
                  <li key={term} className="border border-academic-line bg-academic-panel px-3 py-1 text-xs font-medium text-slate-600">
                    {term}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="mb-8 border border-academic-line bg-white p-6">
          <h2 className="font-serif text-3xl text-academic-navy">Academic and Clinical Disclaimer</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The selected materials are listed for academic and professional reference. They do not provide patient-specific diagnosis or treatment recommendations. Surgical indications and outcomes vary depending on each patient&apos;s symptoms, neurologic findings, imaging, general medical condition, and treating physician&apos;s judgment.
          </p>
        </article>

        <article className="mb-12 border border-academic-line bg-academic-panel p-6">
          <h2 className="font-serif text-3xl text-academic-navy">Research and Education Keywords</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {researchEducationKeywords.map((keyword) => (
              <li key={keyword} className="border border-academic-line bg-white px-3 py-2 text-xs font-medium text-slate-600">
                {keyword}
              </li>
            ))}
          </ul>
        </article>

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
