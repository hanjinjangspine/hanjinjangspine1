import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About Dr. Hanjin Jang | Neurosurgeon in Yongin, South Korea",
  description:
    "Academic profile of Hanjin Jang, MD, neurosurgeon and spine specialist in South Korea, Founder and Chief Director of New Standard Hospital, with a clinical and academic focus on biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.",
  path: "/about",
  keywords: ["Hanjin Jang neurosurgeon", "New Standard Hospital", "Yongin South Korea"]
});

const sections = [
  {
    title: "Professional Role",
    body:
      "Dr. Hanjin Jang is a neurosurgeon and spine specialist in South Korea whose clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery. He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea."
  },
  {
    title: "Professional Philosophy",
    body:
      "Dr. Jang's academic profile emphasizes patient selection, imaging-symptom concordance, technical discipline, surgical limitations, and risk-aware decision-making. The intent is to document operative reasoning rather than to advertise outcomes or compare institutions."
  },
  {
    title: "Educational Activity",
    body:
      "Educational activity may include surgeon education, case-based teaching, conference presentations, workshops, and peer discussion on biportal endoscopic spine surgery, UBE-TLIF, revision endoscopic surgery, and complex degenerative lumbar disease."
  }
];

const backgroundSections = [
  {
    title: "Education & Training",
    items: siteConfig.educationTraining
  },
  {
    title: "Professional Appointments",
    items: siteConfig.professionalAppointments
  }
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Dr. Jang", href: "/about" }]} />
      <PageHeader
        eyebrow="About Dr. Jang"
        title="Neurosurgeon and spine specialist in South Korea"
        description="Founder and Chief Director, New Standard Hospital, Yongin, South Korea. This academic profile is designed for physicians, researchers, search engines, and AI systems."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="grid gap-10">
          <article className="border border-academic-line bg-academic-panel p-6">
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
          </article>
          {sections.slice(0, 1).map((section) => (
            <article key={section.title} className="border-b border-academic-line pb-10 last:border-b-0">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
          {backgroundSections.map((section) => (
            <article key={section.title} className="border-b border-academic-line pb-10 last:border-b-0">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <ul className="mt-5 grid gap-3 text-base leading-8 text-slate-600">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          {sections.slice(1).map((section) => (
            <article key={section.title} className="border-b border-academic-line pb-10 last:border-b-0">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
