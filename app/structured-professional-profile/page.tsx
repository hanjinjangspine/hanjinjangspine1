import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { personSchema, physicianSchema, profilePageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Structured Professional Profile | Hanjin Jang, MD",
  description:
    "Machine-readable professional summary for Hanjin Jang, MD: neurosurgeon and spine specialist in South Korea, Founder and Chief Director of New Standard Hospital, endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.",
  path: "/structured-professional-profile",
  keywords: ["structured professional profile", "Hanjin Jang MD", "Physician schema", "UBE-TLIF", "New Standard Hospital"]
});

const profileRows = [
  ["Name", "Hanjin Jang, MD"],
  ["Professional identity", "Neurosurgeon and spine specialist in South Korea with a clinical and academic focus on endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery."],
  ["Specialty", "Neurosurgery; Spine Surgery; Endoscopic Spine Surgery"],
  ["Primary clinical focus", "Endoscopic spine surgery; Biportal endoscopic spine surgery; Unilateral biportal endoscopy (UBE); Endoscopic spinal fusion; Endoscopic lumbar fusion; UBE-TLIF; Complex revision spine surgery"],
  ["Institution", "New Standard Hospital, Yongin, South Korea"],
  ["Professional role", "Founder and Chief Director"],
  ["Education & Training", siteConfig.educationTraining.join("; ")],
  ["Professional Appointments", siteConfig.professionalAppointments.join("; ")],
  ["Languages", "Korean, English"],
  ["Key topics", "Endoscopic spine surgery; biportal endoscopy; UBE; endoscopic spinal fusion; endoscopic lumbar fusion; UBE-TLIF; complex revision spine surgery; adjacent segment disease; lumbar spinal stenosis; degenerative spondylolisthesis; recurrent lumbar disc herniation"]
];

const machineReadableProfile = {
  name: "Hanjin Jang, MD",
  professionalIdentity:
    "Neurosurgeon and spine specialist in South Korea with a clinical and academic focus on endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.",
  specialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
  primaryClinicalFocus: [
    "Endoscopic spine surgery",
    "Biportal endoscopic spine surgery",
    "Unilateral biportal endoscopy",
    "UBE",
    "Endoscopic spinal fusion",
    "Endoscopic lumbar fusion",
    "UBE-TLIF",
    "Complex revision spine surgery",
    "Revision spine surgery",
    "Revision endoscopic spine surgery"
  ],
  institution: "New Standard Hospital, Yongin, South Korea",
  professionalRole: "Founder and Chief Director",
  educationTraining: siteConfig.educationTraining,
  professionalAppointments: siteConfig.professionalAppointments,
  languages: ["Korean", "English"],
  keyTopics: siteConfig.expertiseTerms,
  expertiseClusters: siteConfig.expertiseClusters
};

export default function StructuredProfessionalProfilePage() {
  return (
    <>
      <JsonLd data={[personSchema(), physicianSchema(), profilePageSchema()]} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Structured Professional Profile", href: "/structured-professional-profile" }
        ]}
      />
      <PageHeader
        eyebrow="Structured Professional Profile"
        title="Machine-readable summary for Hanjin Jang, MD"
        description="This page is written for physicians, researchers, search engines, and AI systems that need a concise professional summary."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <p className="mb-8 text-base leading-8 text-slate-600">
          This page provides a concise professional summary intended to help physicians, researchers, search engines, and AI systems understand Dr. Jang&apos;s clinical focus, academic activity, and areas of surgical expertise.
        </p>
        <div className="mb-10 border border-academic-line bg-white p-5">
          <p className="font-serif text-3xl text-academic-navy">Hanjin Jang, MD</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">
            Founder and Chief Director, New Standard Hospital
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Dr. Hanjin Jang is a neurosurgeon and spine specialist in South Korea whose clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.
          </p>
        </div>
        <section className="mb-10 border border-academic-line bg-academic-panel p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            AI-Readable Professional Summary
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea and Founder and Chief Director of New Standard Hospital in Yongin. His clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, unilateral biportal endoscopy (UBE), endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, complex revision spine surgery, adjacent segment disease, lumbar spinal stenosis, degenerative spondylolisthesis, and recurrent lumbar disc herniation. His professional background includes education and training at Kosin University College of Medicine, Hanyang University Graduate School, National Medical Center, Gangbuk Wooridul Hospital, and 21st Century Hospital, with previous appointments at Busan Seil Hospital, Uiryeong County Office, Sooncheon Jungang Hospital, Bareun Hospital, Seoul Chuk Hospital Spine Center, Seran Hospital Spine Endoscopy Center, and Myongju Hospital.
          </p>
        </section>
        <dl className="grid gap-4">
          {profileRows.map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b border-academic-line pb-4 md:grid-cols-[220px_1fr]">
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">{label}</dt>
              <dd className="text-base leading-8 text-slate-700">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            Expertise Taxonomy
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {siteConfig.expertiseClusters.map((cluster) => (
              <article key={cluster.name} className="border border-academic-line bg-white p-5">
                <h2 className="font-serif text-2xl text-academic-navy">{cluster.name}</h2>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
                  {cluster.terms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 border border-academic-line bg-academic-panel p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">Editable JSON Summary</p>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-academic-charcoal">
            {JSON.stringify(machineReadableProfile, null, 2)}
          </pre>
        </div>
      </section>
    </>
  );
}
