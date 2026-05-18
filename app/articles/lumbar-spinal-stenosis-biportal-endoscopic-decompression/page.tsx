import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

const articlePath = "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression";
const articleTitle =
  "Clinical Perspectives on Lumbar Spinal Stenosis: Diagnosis, Staging, and the Role of Biportal Endoscopic Decompression";
const articleDescription =
  "A clinical review by Han-Jin Jang, MD on lumbar spinal stenosis, neurogenic claudication, staging, and biportal endoscopic decompression.";
const articleKeywords = [
  "Lumbar spinal stenosis",
  "Neurogenic claudication",
  "Biportal endoscopic decompression",
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE",
  "Endoscopic decompression",
  "Lumbar disc herniation",
  "Spinal stenosis staging"
];

export const metadata: Metadata = createMetadata({
  title: "Lumbar Spinal Stenosis and Biportal Endoscopic Decompression | Han-Jin Jang, MD",
  description: articleDescription,
  path: articlePath,
  keywords: articleKeywords,
  type: "article"
});

const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalScholarlyArticle", "Article"],
  headline: articleTitle,
  name: articleTitle,
  description: articleDescription,
  mainEntityOfPage: absoluteUrl(articlePath),
  url: absoluteUrl(articlePath),
  datePublished: "2026-05",
  dateModified: "2026-05-18",
  inLanguage: "en",
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: "Han-Jin Jang, MD",
    jobTitle: "Chief of Neurosurgery, New Standard Hospital",
    affiliation: {
      "@type": "MedicalOrganization",
      name: "New Standard Hospital",
      url: "https://new-standard.co.kr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yongin-si",
        addressRegion: "Gyeonggi-do",
        addressCountry: "Republic of Korea"
      }
    }
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "New Standard Hospital",
    url: "https://new-standard.co.kr"
  },
  about: articleKeywords,
  keywords: articleKeywords
};

const keyClinicalPoints = [
  "Lumbar spinal stenosis is a clinical-radiologic syndrome; imaging severity should be interpreted together with symptoms, neurologic findings, walking tolerance, and positional features.",
  "Neurogenic claudication commonly presents as leg-dominant pain, numbness, weakness, or heaviness that may worsen with standing or walking and may improve with flexion or sitting.",
  "Staging can help organize clinical reasoning, but treatment decisions require individualized evaluation rather than imaging grade alone.",
  "Biportal endoscopic decompression can be considered in selected patients when the compressive target, stability profile, and surgical objective are clinically concordant.",
  "Fusion, wider decompression, or nonoperative care may be more appropriate depending on instability, deformity, foraminal collapse, medical risk, and patient-specific goals."
];

const stagingRows = [
  {
    stage: "Clinical suspicion",
    features: "Leg-dominant symptoms, walking limitation, posture-dependent relief, or radicular findings.",
    emphasis: "Clarify whether symptoms match neurogenic claudication, radiculopathy, vascular claudication, peripheral neuropathy, hip disease, or mixed causes."
  },
  {
    stage: "Radiologic correlation",
    features: "Central canal, lateral recess, or foraminal narrowing on MRI or CT-myelography when MRI is limited.",
    emphasis: "Confirm whether the compressed neural structure corresponds to the clinical pattern."
  },
  {
    stage: "Functional severity",
    features: "Walking distance, standing tolerance, neurologic deficit, medication burden, and activity restriction.",
    emphasis: "Assess disability and neurologic risk rather than treating image appearance alone."
  },
  {
    stage: "Treatment planning",
    features: "Nonoperative care, decompression, decompression with fusion, or staged evaluation.",
    emphasis: "Choose the least invasive adequate strategy that addresses the clinical target while respecting stability and medical risk."
  }
];

const comparisonRows = [
  {
    feature: "Dominant mechanism",
    stenosis: "Degenerative narrowing of the central canal, lateral recess, or foramen with neural compression.",
    herniation: "Focal disc material causing nerve root compression or chemical irritation."
  },
  {
    feature: "Typical symptom pattern",
    stenosis: "Neurogenic claudication, bilateral or multilevel symptoms, walking limitation, and positional relief in many patients.",
    herniation: "More acute radicular pain in a dermatomal distribution, often unilateral, with cough or strain sensitivity in some patients."
  },
  {
    feature: "Natural history",
    stenosis: "Often chronic or progressive, with fluctuation depending on activity and posture.",
    herniation: "Can improve over time in many patients, although neurologic deficit or persistent severe radicular pain may alter management."
  },
  {
    feature: "Imaging interpretation",
    stenosis: "Requires correlation across levels and zones; multilevel imaging findings are common.",
    herniation: "Requires correlation between disc level, side, migrated fragment, and clinical radiculopathy."
  },
  {
    feature: "Operative target",
    stenosis: "Adequate decompression of the symptomatic canal, lateral recess, or foramen while preserving stability when possible.",
    herniation: "Removal or reduction of the compressive disc fragment while limiting unnecessary tissue disruption."
  }
];

const references = [
  "North American Spine Society. Diagnosis and Treatment of Degenerative Lumbar Spinal Stenosis. Evidence-Based Clinical Guideline for Multidisciplinary Spine Care.",
  "Weinstein JN, Tosteson TD, Lurie JD, et al. Surgical versus nonsurgical therapy for lumbar spinal stenosis. New England Journal of Medicine. 2008;358:794-810.",
  "Weinstein JN, Tosteson TD, Lurie JD, et al. Surgical versus nonoperative treatment for lumbar spinal stenosis: four-year results of the Spine Patient Outcomes Research Trial. Spine. 2010;35:1329-1338.",
  "Zaina F, Tomkins-Lane C, Carragee E, Negrini S. Surgical versus non-surgical treatment for lumbar spinal stenosis. Cochrane Database of Systematic Reviews. 2016."
];

export default function LumbarSpinalStenosisBiportalDecompressionArticle() {
  return (
    <>
      <JsonLd data={scholarlyArticleSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Lumbar Spinal Stenosis and Biportal Decompression", href: articlePath }
        ]}
      />
      <article className="bg-white">
        <header className="border-b border-academic-line bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-academic-gold">Clinical Review</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-academic-navy md:text-5xl">
              {articleTitle}
            </h1>
            <div className="mt-8 grid gap-3 border-l-4 border-academic-gold pl-5 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-academic-navy">Han-Jin Jang, MD</p>
              <p>Neurosurgeon · Specialist in Biportal Endoscopic Spine Surgery</p>
              <p>Chief of Neurosurgery, New Standard Hospital</p>
              <p>Yongin-si, Gyeonggi-do, Republic of Korea</p>
              <p>Published: May 2026</p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-12">
          <section className="border-b border-academic-line pb-10">
            <h2 className="font-serif text-3xl text-academic-navy">Abstract</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Lumbar spinal stenosis is a degenerative condition in which narrowing of the spinal canal, lateral recess, or neural foramen can produce neurogenic claudication, radicular symptoms, sensory change, weakness, or walking limitation. Diagnosis requires more than radiologic narrowing alone; clinical symptoms, neurologic examination, and imaging should be interpreted together. This review summarizes a practical diagnostic and staging framework for lumbar spinal stenosis and discusses where biportal endoscopic decompression may fit among treatment options in selected patients.
            </p>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Key Clinical Points</h2>
            <ul className="mt-5 grid gap-3 text-base leading-8 text-slate-600">
              {keyClinicalPoints.map((point) => (
                <li key={point} className="border-l-2 border-academic-line pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Clinical Definition and Diagnostic Framing</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Lumbar spinal stenosis may involve central canal stenosis, lateral recess stenosis, foraminal stenosis, or a combination of these patterns. Symptoms can include buttock or leg pain, numbness, heaviness, weakness, gait limitation, and reduced standing tolerance. Neurogenic claudication is often posture dependent, with symptoms that may worsen during lumbar extension, standing, or walking and may improve with sitting or forward flexion.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Imaging is important, but radiologic stenosis is common in older adults and may not always explain the patient&apos;s symptoms. The diagnostic question is therefore not simply whether stenosis is visible, but whether the patient&apos;s clinical pattern, neurologic findings, and imaging identify the same symptomatic level and neural structure.
            </p>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Clinical Staging for Decision-Making</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A staged framework can help clinicians organize evaluation and treatment planning. The stages below are not a substitute for individualized assessment; they are a practical way to connect symptoms, imaging, functional limitation, and procedural planning.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-7">
                <thead>
                  <tr className="border-b border-academic-line bg-academic-panel text-academic-navy">
                    <th className="p-3 font-semibold">Stage</th>
                    <th className="p-3 font-semibold">Clinical features</th>
                    <th className="p-3 font-semibold">Decision emphasis</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {stagingRows.map((row) => (
                    <tr key={row.stage} className="border-b border-academic-line align-top">
                      <td className="p-3 font-semibold text-academic-navy">{row.stage}</td>
                      <td className="p-3">{row.features}</td>
                      <td className="p-3">{row.emphasis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Lumbar Spinal Stenosis Versus Lumbar Disc Herniation</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Lumbar spinal stenosis and lumbar disc herniation can both produce leg symptoms, but they often differ in mechanism, time course, and operative target. The distinction is clinically important because the surgical objective may differ.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7">
                <thead>
                  <tr className="border-b border-academic-line bg-academic-panel text-academic-navy">
                    <th className="p-3 font-semibold">Feature</th>
                    <th className="p-3 font-semibold">Lumbar spinal stenosis</th>
                    <th className="p-3 font-semibold">Lumbar disc herniation</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-academic-line align-top">
                      <td className="p-3 font-semibold text-academic-navy">{row.feature}</td>
                      <td className="p-3">{row.stenosis}</td>
                      <td className="p-3">{row.herniation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Role of Biportal Endoscopic Decompression</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              <Link href="/biportal-endoscopic-spine-surgery" className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                Biportal endoscopic spine surgery
              </Link>{" "}
              separates the viewing portal from the working portal and uses continuous irrigation with endoscopic visualization. For lumbar spinal stenosis, biportal endoscopic decompression can be considered in selected patients when the symptomatic compression can be addressed through a limited posterior corridor while preserving stabilizing structures as appropriate.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The procedure may be relevant for central canal or lateral recess stenosis when the operative goal is decompression rather than correction of instability or deformity. In patients with dynamic instability, high-grade spondylolisthesis, severe foraminal collapse, deformity, infection, tumor, fracture, or medically complex risk profiles, other strategies may be more appropriate. Selection depends on clinical and radiologic correlation, surgeon experience, and patient-specific factors.
            </p>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Treatment Considerations</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Nonoperative care may include activity modification, medication review, physical therapy, image-guided injections in selected settings, and medical optimization. Operative decompression can be considered when symptoms remain functionally limiting, neurologic findings are clinically meaningful, and imaging identifies a concordant compressive target.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The presence of lumbar spinal stenosis alone does not define the treatment plan. Decisions about decompression alone, decompression with fusion, or continued nonoperative management require individualized evaluation of instability, deformity, foraminal stenosis, bone quality, medical risk, and the patient&apos;s functional goals.
            </p>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">Internal Academic Resources</h2>
            <ul className="mt-5 grid gap-3 text-base leading-8 text-slate-600">
              <li>
                <Link href="/biportal-endoscopic-spine-surgery" className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                  Biportal endoscopic spine surgery
                </Link>
              </li>
              <li>
                <Link href="/clinical-focus" className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                  Lumbar spinal stenosis within clinical focus
                </Link>
              </li>
              <li>
                <Link href="/academic-activity" className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                  Academic activity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                  Contact page
                </Link>
              </li>
            </ul>
          </section>

          <section className="border-b border-academic-line py-10">
            <h2 className="font-serif text-3xl text-academic-navy">References</h2>
            <ol className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
              {references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ol>
          </section>

          <section className="pt-10">
            <h2 className="font-serif text-3xl text-academic-navy">Educational Disclaimer</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This article is provided for academic and professional education. It does not provide patient-specific diagnosis, treatment recommendations, or outcome predictions. Patients with suspected lumbar spinal stenosis should be evaluated by qualified clinicians, and patient-specific decisions require individualized clinical and radiologic assessment.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
