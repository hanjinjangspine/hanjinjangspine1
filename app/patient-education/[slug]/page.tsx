import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MedicalImageViewer } from "@/components/MedicalImageViewer";
import { PageHeader } from "@/components/PageHeader";
import { RelatedPatientEducation } from "@/components/RelatedPatientEducation";
import { createMetadata } from "@/lib/metadata";
import {
  getPatientEducationGuide,
  getRelatedPatientEducationGuides,
  illustrationDisclosure,
  patientEducationDisclosure,
  patientEducationGuides,
  recoveryDisclosure
} from "@/lib/patient-education";
import { patientEducationPageSchema } from "@/lib/schema";

type PatientEducationGuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return patientEducationGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PatientEducationGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPatientEducationGuide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: `${guide.title}: A Patient Guide | Hanjin Jang, MD`,
    description: guide.description,
    path: `/patient-education/${guide.slug}`,
    keywords: guide.keywords,
    type: "article"
  });
}

function GuideList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-base leading-8 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-academic-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PatientEducationGuidePage({ params }: PatientEducationGuidePageProps) {
  const { slug } = await params;
  const guide = getPatientEducationGuide(slug);

  if (!guide) {
    notFound();
  }

  const path = `/patient-education/${guide.slug}`;
  const relatedGuides = getRelatedPatientEducationGuides(guide);

  return (
    <>
      <JsonLd data={patientEducationPageSchema(guide)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Patient Education", href: "/patient-education" },
          { name: guide.shortTitle, href: path }
        ]}
      />
      <PageHeader
        eyebrow={`${guide.region} · Patient Guide`}
        eyebrowTone="patient"
        title={guide.title}
        description={guide.subtitle}
        image={guide.conditionImage}
      >
        <p className="max-w-3xl border-l-2 border-academic-gold pl-4 text-sm leading-7 text-slate-600">
          We do not make treatment decisions from an MRI alone. Symptoms, neurologic findings, function, previous care,
          and imaging must be considered together.
        </p>
      </PageHeader>

      <article className="bg-white">
        <section className="mx-auto max-w-4xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">What it means</p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">Understanding {guide.shortTitle.toLowerCase()}</h2>
          <p className="mt-5 text-base leading-8 text-slate-700">{guide.overview}</p>
        </section>

        <section className="border-y border-academic-line bg-[#F7FAF9]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Common patterns</p>
              <h2 className="mt-3 font-serif text-3xl text-academic-navy">Symptoms to discuss</h2>
              <GuideList items={guide.symptoms} />
            </div>
            <aside className="border border-red-200 bg-white p-6 md:p-8" aria-labelledby="urgent-warning-signs">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Seek urgent assessment</p>
              <h2 id="urgent-warning-signs" className="mt-3 font-serif text-3xl text-academic-navy">Urgent warning signs</h2>
              <GuideList items={guide.urgentSigns} />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Contact emergency services or seek prompt medical assessment if these symptoms are new, severe, or worsening.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Clinical correlation</p>
            <h2 className="mt-3 font-serif text-3xl text-academic-navy">How the condition is evaluated</h2>
            <GuideList items={guide.evaluation} />
          </div>
          <div className="border border-academic-line bg-academic-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">First-line options</p>
            <h2 className="mt-3 font-serif text-3xl text-academic-navy">Non-surgical care</h2>
            <GuideList items={guide.nonsurgicalCare} />
          </div>
        </section>

        <section className="border-y border-academic-line bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Individual decision</p>
            <h2 className="mt-3 font-serif text-3xl text-academic-navy">When surgery may be discussed</h2>
            <GuideList items={guide.surgeryConsiderations} />
          </div>
        </section>

        <section className="bg-[#F5F4F1]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Procedure concept</p>
                <h2 className="mt-3 font-serif text-3xl text-academic-navy">{guide.procedure.title}</h2>
                <p className="mt-5 text-base leading-8 text-slate-700">{guide.procedure.summary}</p>
                <ol className="mt-6 grid gap-4">
                  {guide.procedure.steps.map((step, index) => (
                    <li key={step} className="grid grid-cols-[2rem_1fr] gap-3 text-base leading-8 text-slate-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-academic-gold text-sm font-semibold text-academic-navy">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <figure className="overflow-hidden border border-academic-line bg-[#5E5955] p-3 shadow-academic md:p-5">
                <MedicalImageViewer
                  src={guide.procedure.image.src}
                  alt={guide.procedure.image.alt}
                  width={guide.procedure.image.width}
                  height={guide.procedure.image.height}
                  caption={guide.procedure.image.caption}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  imageClassName="h-auto w-full object-contain"
                />
                <figcaption className="bg-white px-4 py-4 text-sm leading-7 text-slate-600">
                  {guide.procedure.image.caption}
                </figcaption>
              </figure>
            </div>
            <p className="mt-8 border-l-2 border-academic-gold pl-4 text-sm leading-7 text-slate-600">
              {illustrationDisclosure}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">General planning ranges</p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">Recovery and return to activity</h2>
          <div
            className="mt-8 overflow-x-auto border border-academic-line focus:outline-none focus:ring-2 focus:ring-academic-gold focus:ring-offset-2"
            tabIndex={0}
            role="region"
            aria-label="Recovery and return-to-activity planning table"
          >
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7">
              <thead>
                <tr className="border-b border-academic-line bg-academic-panel text-academic-navy">
                  <th className="p-4 font-semibold">Activity</th>
                  <th className="p-4 font-semibold">Planning range</th>
                  <th className="p-4 font-semibold">What affects timing</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {guide.recovery.map((item) => (
                  <tr key={item.activity} className="border-b border-academic-line align-top last:border-0">
                    <th scope="row" className="p-4 font-semibold text-academic-navy">{item.activity}</th>
                    <td className="p-4">{item.planningRange}</td>
                    <td className="p-4">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">{recoveryDisclosure}</p>
        </section>

        <section className="border-y border-academic-line bg-[#F8F7FA]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Informed decision-making</p>
              <h2 className="mt-3 font-serif text-3xl text-academic-navy">Possible risks and limitations</h2>
              <GuideList items={guide.risks} />
            </div>
            <div className="border border-academic-line bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Bring to the appointment</p>
              <h2 className="mt-3 font-serif text-3xl text-academic-navy">Questions to ask</h2>
              <GuideList items={guide.questions} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14">
          <h2 className="font-serif text-3xl text-academic-navy">Medical review and sources</h2>
          <p className="mt-5 text-base leading-8 text-slate-700">{patientEducationDisclosure}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Medically reviewed by Hanjin Jang, MD, Neurosurgeon, Founder and Chief Director, New Standard Hospital.
            Last reviewed: {guide.lastReviewed}.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl text-academic-navy">Related academic material</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7">
                {guide.relatedAcademic.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-academic-navy">External references</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7">
                {guide.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>

      <RelatedPatientEducation guides={relatedGuides} />
    </>
  );
}
