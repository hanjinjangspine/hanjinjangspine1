import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { CaseLevelSummary } from "@/components/CaseLevelSummary";
import { ArticleSections } from "@/components/ArticleSections";
import { MedicalImageViewer } from "@/components/MedicalImageViewer";
import { EvidenceReferences } from "@/components/EvidenceReferences";
import { casebankCases, getCase, notReported } from "@/lib/casebank";
import { getEvidence } from "@/lib/evidence";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import type { CaseExample } from "@/lib/content";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return casebankCases.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const record = getCase((await params).slug);
  if (!record) return { title: "Case not found", robots: { index: false, follow: false } };
  return createMetadata({ title: record.shortTitle + " | Casebank", description: record.question, path: "/casebank/" + record.slug, type: "article" });
}
const fields: { title: string; key: keyof CaseExample }[] = [
  { title: "Clinical presentation", key: "clinicalPresentation" }, { title: "Neurologic findings", key: "neurologicFindings" },
  { title: "Prior nonoperative treatment", key: "conservativeTreatmentSummary" }, { title: "Imaging and clinical concordance", key: "imagingSummary" },
  { title: "Reasoning recorded for the procedure", key: "surgicalRationale" }, { title: "Operative considerations", key: "operativeNoteSummary" },
  { title: "Postoperative course", key: "postoperativeCourse" }, { title: "Postoperative imaging", key: "postoperativeImagingSummary" },
  { title: "Educational point", key: "educationalPoint" }
];
export default async function CasePage({ params }: Props) {
  const record = getCase((await params).slug);
  if (!record) notFound();
  const path = "/casebank/" + record.slug;
  const related = casebankCases.filter((item) => item.slug !== record.slug && (item.procedureGroup === record.procedureGroup || item.revision === record.revision)).slice(0, 2);
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": absoluteUrl(path) + "#case", name: record.title, description: record.question, url: absoluteUrl(path), dateModified: record.updated, inLanguage: "en", about: record.diagnosis, author: { "@id": absoluteUrl("/") + "#hanjin-jang-md" }, isPartOf: { "@type": "CollectionPage", url: absoluteUrl("/casebank"), name: "Casebank" }, citation: getEvidence(record.evidenceIds).map((item) => item.href), image: (record.images ?? []).map((item) => absoluteUrl(item.src)), audience: { "@type": "MedicalAudience", audienceType: "Physicians and medical trainees" } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }, { name: record.caseNumber, href: path }]} />
    <PageHeader compact eyebrow={record.caseNumber + " · " + record.region + " · " + record.procedureGroup} title={record.shortTitle} description={record.question}>
      <p className="mt-4 text-sm text-slate-600">{record.source.kind} · Source: {record.source.label} · Page updated {record.updated}</p>
    </PageHeader>
    <article className="mx-auto max-w-5xl px-5 py-12">
      <div className="grid gap-6 border border-academic-line bg-academic-panel p-6 md:grid-cols-2">
        <div><h2 className="font-semibold text-academic-navy">Diagnosis</h2><p className="mt-2 text-sm leading-7 text-slate-700">{record.diagnosis}</p></div>
        <div><h2 className="font-semibold text-academic-navy">Procedure and level</h2><p className="mt-2 text-sm leading-7 text-slate-700">{record.procedure} {record.surgicalLevel}</p></div>
      </div>
      <CaseLevelSummary levels={record.levels} />
      <nav aria-label="On this case page" className="my-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-academic-navy"><a href="#levels">Levels</a><a href="#clinical-reasoning">Clinical reasoning</a><a href="#images">Images and video</a><a href="#outcomes">Reported observations</a><a href="#evidence">Evidence</a><a href="#provenance">Source and limitations</a></nav>
      <div id="clinical-reasoning" className="grid gap-8">
        {fields.map(({ title, key }) => <section key={key} className="border-l-2 border-academic-line pl-5"><h2 className="font-serif text-2xl text-academic-navy">{title}</h2><p className="mt-3 text-sm leading-8 text-slate-700">{String(record[key] ?? notReported)}</p></section>)}
      </div>
      <section id="images" className="mt-10 border-t border-academic-line pt-8">
        <h2 className="font-serif text-3xl text-academic-navy">Published images and video</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">Media are identified by their public source. Journal figures open at the original source; operative video illustrates a technical example. Imaging and operative appearances do not measure pain relief, function, or durable fusion.</p>
        {(["history", "preoperative", "postoperative"] as const).map((group) => {
          const images = (record.images ?? []).filter((item) => item.type === group);
          return images.length ? <section key={group} className="mt-8"><h3 className="font-semibold capitalize text-academic-navy">{group === "history" ? "Clinical history" : group + " imaging"}</h3><div className="mt-4 grid gap-5 md:grid-cols-2">{images.map((item) => <figure key={item.src} className="border border-academic-line bg-academic-panel p-3"><MedicalImageViewer src={item.src} alt={item.alt} width={item.width} height={item.height} caption={item.caption} sizes="(min-width: 768px) 45vw, 100vw" /><figcaption className="mt-3 text-xs leading-6 text-slate-600">{item.caption}</figcaption></figure>)}</div></section> : null;
        })}
        {record.source.video ? <ArticleSections sections={[{ title: "Far-lateral operative sequence", body: "Previously published de-identified teaching footage. The video duration is not the operative time. The sequence and its shorter excerpt count as one educational entry.", video: record.source.video }]} /> : null}
        {record.source.video ? <p className="text-sm leading-7"><Link href="/videos/right-l5s1-far-lateral-discectomy" className="font-semibold underline">Watch with chapters and English / Korean caption text →</Link></p> : null}
        {record.source.figureHref ? <p className="mt-5 text-sm leading-7"><a href={record.source.figureHref} className="font-semibold underline" target="_blank" rel="noopener noreferrer">Open Figure 3 at the original publication →</a><br />The original figure is not reproduced or relabelled as a new institutional case.</p> : null}
        {!record.images?.length && !record.source.video && !record.source.figureHref ? <p className="mt-5">{notReported}</p> : null}
      </section>
      <section id="outcomes" className="mt-10 border-t border-academic-line pt-8">
        <h2 className="font-serif text-3xl text-academic-navy">Reported observations and missing data</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">Values below are limited to what the identified public source reports; source charts were not re-audited for this website update. Operative-time definitions and observation windows may differ. Do not compare these values across surgeons or procedures.</p>
        <dl className="mt-5 grid gap-5 sm:grid-cols-2">{[
          ["Operative time", record.operativeTime], ["Estimated blood loss", record.estimatedBloodLoss],
          ["Hospital stay", record.hospitalStay], ["Complications", record.complications],
          ["Follow-up interval", notReported], ["Validated patient-reported outcome scores", notReported]
        ].map(([label, value]) => <div key={label} className="border border-academic-line p-4"><dt className="text-sm font-semibold text-academic-navy">{label}</dt><dd className="mt-2 text-sm leading-7 text-slate-600">{value ?? notReported}</dd></div>)}</dl>
      </section>
      <div id="evidence" className="mt-10"><EvidenceReferences ids={record.evidenceIds} /></div>
      <section id="provenance" className="mt-10 border border-academic-line bg-academic-panel p-6">
        <h2 className="font-serif text-2xl text-academic-navy">Source, authorship, and limitations</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">Source material: <a href={record.source.href} className="underline">{record.source.label}</a>. {record.source.note} This entry was organized on {record.updated}; this date records a website update, not a new clinical review.</p>
        <p className="mt-3 text-sm leading-7 text-slate-700">Selection is educational. No population denominator, consecutive recruitment process, comparative group, or complete follow-up dataset is supplied. A missing complication field does not mean that no complication occurred. Published observations do not predict another patient&apos;s outcome.</p>
        <p className="mt-3 text-sm leading-7 text-slate-700">No new private patient files were added in this update. Corrections and future clinical additions follow the <Link href="/editorial-policy" className="underline">editorial policy</Link>.</p>
        <p className="mt-4 text-xs leading-6 text-slate-600">Suggested citation: Hanjin Jang, MD academic case collection. {record.shortTitle}. Casebank, {record.caseNumber}. Updated {record.updated}. {absoluteUrl(path)}</p>
      </section>
      <section className="mt-10"><h2 className="font-serif text-2xl text-academic-navy">Continue reading</h2><div className="mt-5 grid gap-3 text-sm font-semibold text-academic-navy"><Link href={record.topic} className="underline">Related clinical topic →</Link>{related.map((item) => <Link key={item.slug} href={"/casebank/" + item.slug} className="underline">{item.caseNumber}: {item.shortTitle} →</Link>)}<Link href="/casebank" className="underline">Back to all cases →</Link></div></section>
    </article>
  </>;
}

