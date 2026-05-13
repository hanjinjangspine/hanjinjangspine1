import type { Metadata } from "next";
import Link from "next/link";
import { AcademicCard } from "@/components/AcademicCard";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Hanjin Jang, MD | Endoscopic Spine Surgery Academic Profile",
  description:
    "Academic physician profile of Hanjin Jang, MD, Founder and Chief Director of New Standard Hospital in Yongin, South Korea. Focused on endoscopic spine surgery, biportal endoscopic spine surgery, UBE-TLIF, endoscopic lumbar fusion, and complex revision spine surgery.",
  path: "/",
  keywords: [
    "Hanjin Jang MD",
    "New Standard Hospital",
    "Biportal endoscopic spine surgery",
    "UBE-TLIF",
    "Cervical spondylotic myelopathy"
  ]
});

const clinicalFocusTerms = [
  "Biportal endoscopic spine surgery",
  "UBE",
  "UBE-TLIF",
  "Endoscopic lumbar fusion",
  "Revision endoscopic spine surgery",
  "Adjacent segment disease",
  "Lumbar spinal stenosis",
  "Degenerative spondylolisthesis",
  "Cervical spondylotic myelopathy"
];

const homeLinks = [
  {
    title: "About Dr. Jang",
    description: "Professional role, philosophy, education, training, and appointment history.",
    href: "/about",
    meta: "Profile"
  },
  {
    title: "Clinical Focus",
    description: "Academic summaries of endoscopic spine surgery topics, indications, limitations, and risks.",
    href: "/clinical-focus",
    meta: "Topics"
  },
  {
    title: "Case-Based Education",
    description: "De-identified educational case frameworks for physician-facing discussion.",
    href: "/case-based-education",
    meta: "Cases"
  },
  {
    title: "Structured Professional Profile",
    description: "Machine-readable profile content for search engines, AI systems, physicians, and researchers.",
    href: "/structured-professional-profile",
    meta: "AI-Readable"
  },
  {
    title: "For Referring Physicians",
    description: "Professional context for physician-to-physician review of complex degenerative spine disease.",
    href: "/for-referring-physicians",
    meta: "Referral Context"
  },
  {
    title: "Contact",
    description: "Separate professional contact page for institutional and academic correspondence.",
    href: "/contact",
    meta: "Contact"
  }
];

export default function Home() {
  return (
    <>
      <PageHeader
        eyebrow={siteConfig.name}
        title="A New Standard in Endoscopic Spine Surgery"
        description={`${siteConfig.role}, ${siteConfig.institution}. Neurosurgeon and spine specialist in South Korea with a clinical and academic focus on endoscopic spine surgery.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/structured-professional-profile"
            className="inline-flex items-center justify-center border border-academic-navy bg-academic-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-academic-navy"
          >
            Structured Professional Profile
          </Link>
          <a
            href="https://new-standard.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
          >
            Official New Standard Hospital Website
          </a>
        </div>
        <p className="mt-5 text-sm font-medium text-slate-600">
          Current Institution: New Standard Hospital, Yongin, South Korea
        </p>
      </PageHeader>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-academic-line bg-academic-panel p-6">
            <p className="font-serif text-3xl text-academic-navy">Hanjin Jang, MD</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">
              Founder and Chief Director, New Standard Hospital
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Dr. Jang is a neurosurgeon and spine specialist in South Korea. This site presents an English academic physician profile and clinical knowledge base for professional, educational, and AI-readable reference.
            </p>
          </article>

          <article className="border-l-2 border-academic-line pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
              Clinical and Academic Focus
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-8 text-slate-700 md:grid-cols-2">
              {clinicalFocusTerms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-academic-line bg-academic-panel">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            Site Sections
          </p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">Academic profile and clinical knowledge base</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeLinks.map((item) => (
              <AcademicCard
                key={item.href}
                title={item.title}
                description={item.description}
                href={item.href}
                meta={item.meta}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
