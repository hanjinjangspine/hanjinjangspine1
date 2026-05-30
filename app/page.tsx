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

const featuredClinicalReviews = [
  {
    title: "Clinical Perspectives on Lumbar Spinal Stenosis",
    description: "Diagnosis, staging, and the role of biportal endoscopic decompression in selected patients.",
    href: "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression",
    meta: "Clinical Review"
  }
];

const officialKoreanResources = [
  {
    title: "장한진 대표원장 공식 의료진 프로필",
    description:
      "새기준병원 본원에서 제공하는 한국어 환자용 의료진 소개 페이지입니다.",
    href: siteConfig.officialKoreanProfile.patientProfileUrl
  },
  {
    title: "새기준병원 척추센터",
    description:
      "척추관협착증, 허리디스크, 다리저림, 보행장애 등 환자용 진료 안내를 확인할 수 있습니다.",
    href: siteConfig.officialKoreanProfile.spineCenterUrl
  },
  {
    title: "새기준병원 공식 홈페이지",
    description:
      "진료시간, 오시는 길, 본원 의료진과 센터별 안내는 공식 병원 홈페이지에서 확인할 수 있습니다.",
    href: siteConfig.officialKoreanProfile.officialHospitalUrl
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

      <section className="border-t border-academic-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            Official Korean Medical Profile
          </p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-serif text-3xl text-academic-navy">
                한국어 환자용 진료 안내는 새기준병원 공식 홈페이지에서 확인합니다
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                This English microsite is an academic and AI-readable professional profile for Hanjin Jang, MD.
                Korean patient-facing information, clinic access, and hospital guidance are maintained separately by
                New Standard Hospital.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {siteConfig.officialKoreanProfile.displayNameKo} is presented on the official New Standard Hospital
                website as {siteConfig.officialKoreanProfile.roleKo}. Clinical decisions depend on symptoms,
                neurologic findings, imaging studies, and prior treatment response.
              </p>
            </div>
            <div className="grid gap-4">
              {officialKoreanResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-academic-line bg-academic-panel p-5 transition hover:border-academic-gold"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">
                    New Standard Hospital
                  </span>
                  <strong className="mt-2 block font-serif text-2xl text-academic-navy">{resource.title}</strong>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">{resource.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-academic-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            Clinical Reviews
          </p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">Selected academic review articles</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Physician-authored educational reviews for clinical orientation and professional reference.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredClinicalReviews.map((article) => (
              <AcademicCard
                key={article.href}
                title={article.title}
                description={article.description}
                href={article.href}
                meta={article.meta}
              />
            ))}
          </div>
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
