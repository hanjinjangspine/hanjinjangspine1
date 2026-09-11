import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { evidenceReferences, evidenceCheckedDate } from "@/lib/evidence";
export const metadata = createMetadata({ title: "Evidence Library | Spine Surgery Literature and Guidelines", description: "Sources linked to the Casebank: original research, clinical guidelines, publication details, and applicability limits.", path: "/evidence-library" });
export default function EvidenceLibraryPage() {
  return <>
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Evidence Library", href: "/evidence-library" }]} />
    <PageHeader compact eyebrow="Evidence · Interpretation · Limits" title="Read the source behind the discussion" description="A focused reading list for the clinical questions raised by the Casebank. Each source is labeled by evidence type and accompanied by its limits of applicability." />
    <section className="mx-auto max-w-5xl px-5 py-12">
      <p className="mb-8 text-sm leading-7 text-slate-600">Bibliographic check: {evidenceCheckedDate}. This is a curated educational reading list, not a systematic review or a complete statement of current guidance. The source&apos;s year is shown separately from the website update.</p>
      <div className="grid gap-6">{evidenceReferences.map((item) => <article id={item.id} key={item.id} className="border border-academic-line p-6">
        <p className="text-xs font-semibold text-academic-gold">{item.kind}</p><h2 className="mt-3 font-serif text-2xl text-academic-navy"><a href={item.href} className="underline decoration-academic-line underline-offset-4">{item.title}</a></h2>
        <p className="mt-4 text-sm text-slate-600">{item.citation}</p><p className="mt-4 text-sm leading-7 text-slate-700">{item.context}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600"><strong>Applicability and limits:</strong> {item.limitation}</p>
        <a href={"https://doi.org/" + item.doi} className="mt-4 inline-block break-all text-sm font-semibold underline">DOI: {item.doi}</a>
      </article>)}</div>
      <div className="mt-10 border-l-2 border-academic-gold pl-5"><h2 className="font-serif text-2xl text-academic-navy">How evidence connects to a case</h2><p className="mt-3 text-sm leading-7 text-slate-600">A selected case explains a decision in context. Comparative studies address groups under defined eligibility criteria. Guidelines synthesize evidence into recommendations. These roles are different; none substitutes for a documented individual assessment.</p><Link href="/casebank" className="mt-4 inline-block font-semibold underline">Explore the cases →</Link></div>
    </section>
  </>;
}

