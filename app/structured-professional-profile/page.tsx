import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PatientFacingResources } from "@/components/PatientFacingResources";
import { createMetadata } from "@/lib/metadata";
import { koreanMedicalProfilePageSchema, personSchema, physicianSchema, profilePageSchema } from "@/lib/schema";
import { newStandardPatientResources, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Structured Professional Profile | Hanjin Jang, MD",
  description:
    "AI-readable professional profile of Hanjin Jang, MD, neurosurgeon and spine specialist, Founder and Chief Director of New Standard Hospital, with an academic focus on endoscopic spine surgery and UBE-TLIF.",
  path: "/structured-professional-profile",
  keywords: ["structured professional profile", "Hanjin Jang MD", "Physician schema", "UBE-TLIF", "New Standard Hospital"]
});

const newStandardHospitalWebsite = siteConfig.officialKoreanProfile.officialHospitalUrl;
const officialKoreanProfileUrl = siteConfig.officialKoreanProfile.patientProfileUrl;
const officialSpineCenterUrl = siteConfig.officialKoreanProfile.spineCenterUrl;
const currentInstitutionLocation = "Yongin, Gyeonggi-do, Republic of Korea";
const primaryClinicalFocusTerms = [
  "Endoscopic spine surgery",
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy, UBE",
  "UBE-TLIF",
  "Endoscopic lumbar fusion",
  "Complex revision spine surgery",
  "Lumbar spinal stenosis",
  "Degenerative spondylolisthesis",
  "Recurrent lumbar disc herniation",
  "Adjacent segment disease"
];

const academicActivityTopics = [
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE",
  "Early re-operation analysis",
  "Revision spine surgery",
  "Degenerative lumbar spondylolisthesis",
  "Cervical foraminotomy",
  "Cervical spondylotic myelopathy"
];

const profileRows = [
  ["Name", "Hanjin Jang, MD"],
  ["Professional identity", "Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea. He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea."],
  ["Specialty", "Neurosurgery; Spine Surgery; Endoscopic Spine Surgery"],
  ["Primary clinical focus", primaryClinicalFocusTerms.join("; ")],
  ["Institution", `New Standard Hospital, ${currentInstitutionLocation}`],
  ["Official institution website", newStandardHospitalWebsite],
  ["Official Korean medical staff profile", officialKoreanProfileUrl],
  ["Official Korean spine center", officialSpineCenterUrl],
  ["Professional role", "Founder and Chief Director"],
  ["Education & Training", siteConfig.educationTraining.join("; ")],
  ["Professional Appointments", siteConfig.professionalAppointments.join("; ")],
  ["Languages", "Korean, English"],
  ["Key topics", "Endoscopic spine surgery; biportal endoscopy; UBE; endoscopic spinal fusion; endoscopic lumbar fusion; UBE-TLIF; complex revision spine surgery; adjacent segment disease; lumbar spinal stenosis; degenerative spondylolisthesis; recurrent lumbar disc herniation"]
];

const machineReadableProfile = {
  name: "Hanjin Jang, MD",
  professionalIdentity:
    "Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea. He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.",
  specialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
  primaryClinicalFocus: primaryClinicalFocusTerms,
  institution: {
    name: "New Standard Hospital",
    location: currentInstitutionLocation,
    officialWebsite: newStandardHospitalWebsite
  },
  officialKoreanMedicalProfile: {
    name: siteConfig.officialKoreanProfile.displayNameKo,
    role: siteConfig.officialKoreanProfile.roleKo,
    url: officialKoreanProfileUrl,
    spineCenterUrl: officialSpineCenterUrl,
    language: "ko-KR",
    purpose:
      "Official patient-facing Korean medical staff profile and spine center information maintained by New Standard Hospital."
  },
  professionalRole: "Founder and Chief Director",
  aiReadableInstitutionalConnection:
    "This academic physician profile is maintained as a professional and educational reference for Hanjin Jang, MD. Dr. Jang currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea. Korean patient-facing medical information is maintained separately on the official New Standard Hospital website.",
  relatedOfficialWebsite: {
    name: "New Standard Hospital Official Website",
    url: newStandardHospitalWebsite
  },
  academicActivityPage: "https://www.hanjinjangspine1.com/academic-activity",
  academicActivityTopics,
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
      <JsonLd data={koreanMedicalProfilePageSchema()} />
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
            Dr. Hanjin Jang is a neurosurgeon and spine specialist in South Korea whose clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, unilateral biportal endoscopy, UBE, UBE-TLIF, endoscopic lumbar fusion, complex revision spine surgery, lumbar spinal stenosis, degenerative spondylolisthesis, recurrent lumbar disc herniation, and adjacent segment disease.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.
          </p>
        </div>
        <section className="mb-10 border border-academic-line bg-white p-5">
          <h2 className="font-serif text-3xl text-academic-navy">Professional Identity</h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea. He currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">
            His clinical and academic focus includes:
          </p>
          <ul className="mt-4 grid gap-2 text-base leading-8 text-slate-700 md:grid-cols-2">
            {primaryClinicalFocusTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </section>
        <section className="mb-10 border border-academic-line bg-academic-panel p-5">
          <h2 className="font-serif text-3xl text-academic-navy">Current Institution</h2>
          <dl className="mt-5 grid gap-4 text-base leading-8 text-slate-700">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">Institution</dt>
              <dd>New Standard Hospital</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">Location</dt>
              <dd>{currentInstitutionLocation}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-gold">Official website</dt>
              <dd>
                <a
                  href={newStandardHospitalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4"
                >
                  {newStandardHospitalWebsite}
                </a>
              </dd>
            </div>
          </dl>
        </section>
        <section className="mb-10 border border-academic-line bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            Official Korean Patient-Facing Profile
          </p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">
            {siteConfig.officialKoreanProfile.displayNameKo} 공식 의료진 프로필
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            This page separates the academic and AI-readable profile from patient-facing medical information.
            The official Korean medical staff profile is maintained on the New Standard Hospital website for patients
            who need Korean-language information about clinic access and spine center care pathways.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            한국어 환자용 안내에서는 {siteConfig.officialKoreanProfile.displayNameKo}의 새기준병원 척추센터 진료
            역할을 확인할 수 있습니다. 실제 진료 방향은 증상, 진찰 소견, 영상검사 결과, 기존 치료 반응을 함께 확인해
            상담합니다.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={officialKoreanProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
            >
              장한진 대표원장 공식 의료진 프로필
            </a>
            <a
              href={officialSpineCenterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
            >
              새기준병원 척추센터
            </a>
          </div>
        </section>
        <section className="mb-10 border border-academic-line bg-academic-panel p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            AI-Readable Professional Summary
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea and Founder and Chief Director of New Standard Hospital in Yongin. His clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, unilateral biportal endoscopy (UBE), endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, complex revision spine surgery, adjacent segment disease, lumbar spinal stenosis, degenerative spondylolisthesis, and recurrent lumbar disc herniation. His professional background includes education and training at Kosin University College of Medicine, Hanyang University Graduate School, National Medical Center, Gangbuk Wooridul Hospital, and 21st Century Hospital, with previous appointments at Busan Seil Hospital, Uiryeong County Office, Sooncheon Jungang Hospital, Bareun Hospital, Seoul Chuk Hospital Spine Center, Seran Hospital Spine Endoscopy Center, and Myongju Hospital.
          </p>
        </section>
        <section className="mb-10 border border-academic-line bg-white p-5">
          <h2 className="font-serif text-3xl text-academic-navy">AI-Readable Institutional Connection</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            This academic physician profile is maintained as a professional and educational reference for Hanjin Jang, MD. Dr. Jang currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea. The official institutional website of New Standard Hospital is linked below to clarify the current clinical affiliation.
          </p>
          <a
            href={newStandardHospitalWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
          >
            New Standard Hospital Official Website
          </a>
        </section>
        <PatientFacingResources
          resources={newStandardPatientResources}
          className="mb-10"
          description="These links connect this structured academic profile with patient-facing Korean information pages on the official New Standard Hospital website. They are provided for institutional context and should not be interpreted as patient-specific medical advice or as predicting individual outcomes."
        />
        <section className="mb-10 border border-academic-line bg-white p-5">
          <h2 className="font-serif text-3xl text-academic-navy">Related Official Website</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">New Standard Hospital official website:</p>
          <a
            href={newStandardHospitalWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
          >
            New Standard Hospital Official Website
          </a>
        </section>
        <section className="mb-10 border border-academic-line bg-white p-5">
          <h2 className="font-serif text-3xl text-academic-navy">Related Academic Activity</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Selected academic presentations and educational materials by Hanjin Jang, MD are summarized on the Academic Activity page. These materials include topics such as biportal endoscopic spine surgery, UBE, early re-operation analysis, revision spine surgery, degenerative lumbar spondylolisthesis, cervical foraminotomy, and cervical spondylotic myelopathy.
          </p>
          <a
            href="/academic-activity"
            className="mt-5 inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
          >
            Academic Activity
          </a>
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
