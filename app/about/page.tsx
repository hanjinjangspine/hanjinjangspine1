import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { casebankArchive, formatArchiveCount } from "@/lib/casebank-archive";

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
        description="Hanjin Jang, MD · 장한진. Neurosurgeon, Founder and Chief Director of New Standard Hospital in Yongin, South Korea. A professional profile for physicians, researchers and readers of the teaching collection."
      />
      <section className="mx-auto max-w-6xl px-5 pt-8">
        <section aria-labelledby="profile-sources" className="mb-8 border border-academic-line p-6">
          <h2 id="profile-sources" className="font-serif text-2xl text-academic-navy">Verify the professional profile</h2>
          <dl className="mt-5 grid gap-5 text-sm leading-7 md:grid-cols-3">
            <div><dt className="font-semibold text-academic-navy">Current clinical role</dt><dd className="mt-2 text-slate-600">The <a href={siteConfig.officialKoreanProfile.patientProfileUrl} className="underline">official Korean physician profile</a> identifies 장한진 as a neurosurgery specialist and representative director. This is the institution&apos;s own profile.</dd></div>
            <div><dt className="font-semibold text-academic-navy">Published author names</dt><dd className="mt-2 text-slate-600"><Link href="/publications#jang-cord-injury-2012" className="underline">Han Jin Jang (2012)</Link> and <Link href="/publications#jang-revision-2016" className="underline">Han-Jin Jang (2016)</Link> appear in the linked journal records, abbreviated Jang HJ in citations. Historical affiliations are retained.</dd></div>
            <div><dt className="font-semibold text-academic-navy">Scope of the evidence</dt><dd className="mt-2 text-slate-600">Journal authorship confirms participation in those publications. It does not identify the operating surgeon for every illustrated case or verify the private archive&apos;s clinical outcomes. <Link href="/editorial-policy#review-status" className="underline">See the current review status</Link>.</dd></div>
          </dl>
        </section>
        <div className="mb-8 border border-academic-line bg-academic-panel p-6">
          <h2 className="font-serif text-2xl text-academic-navy">Clinical case archive</h2>
          <p className="mt-3 text-base leading-8 text-slate-600"><strong className="text-academic-navy">{formatArchiveCount(casebankArchive.clinicalRecords)} archived clinical records</strong> attributed to Dr. Jang across {casebankArchive.clinicalSourceSites} source institutions, spanning available records from 2016 to 2026. The Casebank also documents {casebankArchive.historicalVideoCases} historical video case records and a separate {casebankArchive.videoCatalogueCases}-case video catalogue.</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">Collections may overlap. These archive counts describe retained records and do not establish a lifetime total of unique patients or operations. Count checked {casebankArchive.updated}.</p>
          <Link href="/casebank#archive" className="mt-4 inline-block text-sm font-semibold underline">Explore the Casebank and counting method →</Link>
        </div>
        <div className="border-l-2 border-academic-gold pl-5"><h2 className="font-serif text-2xl text-academic-navy">Explore the documented work</h2><p className="mt-3 text-sm leading-7 text-slate-600">Selected journal records list the author as Han-Jin Jang or Han Jin Jang and preserve the original institutional affiliations. Clinical cases, journal publications, and presentation materials are identified separately.</p><div className="mt-4 flex flex-wrap gap-5 text-sm font-semibold"><Link href="/publications" className="underline">Publications and DOI records</Link><Link href="/casebank" className="underline">Clinical Casebank</Link><Link href="/academic-activity" className="underline">Presentations</Link></div></div>
      </section>
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
          <article className="border-b border-academic-line pb-10">
            <h2 className="font-serif text-3xl text-academic-navy">Current Institutional Role</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Dr. Hanjin Jang currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              New Standard Hospital is a spine and joint-focused medical institution where multidisciplinary care includes neurosurgery, orthopedic surgery, internal medicine, anesthesiology, and radiology.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This personal website presents Dr. Jang&apos;s clinical and academic work for professional education. Source-labelled case summaries, original journal records and patient guides help readers distinguish clinical observations from general teaching. The institutional relationship is disclosed in the editorial policy.
            </p>
            <a
              href="https://new-standard.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
            >
              Official New Standard Hospital Website
            </a>
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
