import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PatientEducationCard } from "@/components/PatientEducationCard";
import { createMetadata } from "@/lib/metadata";
import {
  patientEducationDisclosure,
  patientEducationGuides,
  patientEducationReviewDate
} from "@/lib/patient-education";
import { patientEducationCollectionSchema } from "@/lib/schema";

const path = "/patient-education";

export const metadata: Metadata = createMetadata({
  title: "Spine Patient Education | Hanjin Jang, MD",
  description:
    "Plain-English patient guides to lumbar disc herniation, lumbar spinal stenosis, lumbar spondylolisthesis, cervical disc herniation, and cervical foraminal stenosis.",
  path,
  keywords: [
    "spine patient education",
    "lumbar disc herniation",
    "lumbar spinal stenosis",
    "lumbar spondylolisthesis",
    "cervical disc herniation",
    "cervical foraminal stenosis"
  ]
});

export default function PatientEducationPage() {
  const lumbarGuides = patientEducationGuides.filter((guide) => guide.region === "Lumbar spine");
  const cervicalGuides = patientEducationGuides.filter((guide) => guide.region === "Cervical spine");

  return (
    <>
      <JsonLd data={patientEducationCollectionSchema(patientEducationGuides)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Patient Education", href: path }
        ]}
      />
      <PageHeader
        eyebrow="English Patient Guides"
        eyebrowTone="patient"
        title="Understand the condition before choosing a treatment"
        description="Five plain-English guides translated and adapted from New Standard Hospital patient pamphlets. Each guide separates the diagnosis, urgent warning signs, non-surgical care, surgical considerations, risks, and recovery planning."
      />

      <section className="border-b border-academic-line bg-[#F7FAF9]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3">
          {[
            ["Symptoms first", "An MRI finding is interpreted together with symptoms, neurologic findings, function, and the response to previous care."],
            ["Options, not promises", "Surgery is presented as one possible option when the clinical target and patient circumstances support it."],
            ["Plan recovery individually", "Driving, work, lifting, and rehabilitation timelines depend on the procedure and the person—not a fixed calendar."]
          ].map(([title, description]) => (
            <article key={title} className="border-l-2 border-academic-gold pl-5">
              <h2 className="font-serif text-xl text-academic-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Lower Back</p>
        <h2 className="mt-3 font-serif text-3xl text-academic-navy">Lumbar spine guides</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lumbarGuides.map((guide) => (
            <PatientEducationCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="border-y border-academic-line bg-[#F8F7FA]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Neck and Arm</p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">Cervical spine guides</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {cervicalGuides.map((guide) => (
              <PatientEducationCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="border border-academic-line bg-white p-6 md:p-8">
          <h2 className="font-serif text-2xl text-academic-navy">Scope and medical review</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{patientEducationDisclosure}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Medically reviewed by Hanjin Jang, MD, Neurosurgeon, Founder and Chief Director, New Standard Hospital.
            Last reviewed: {patientEducationReviewDate}.
          </p>
        </div>
      </section>
    </>
  );
}
