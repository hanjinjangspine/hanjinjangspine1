import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { CasebankExplorer } from "@/components/CasebankExplorer";
import { casebankCards, casebankUpdated } from "@/lib/casebank";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = createMetadata({ title: "Casebank | Endoscopic Spine Surgery Cases | Hanjin Jang, MD",
  description: "Explore seven published educational spine cases by region and procedure, with clinical reasoning, imaging, source context, missing data, and related literature.", path: "/casebank" });
export default function CasebankPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Endoscopic Spine Surgery Casebank", url: absoluteUrl("/casebank"), dateModified: casebankUpdated, isPartOf: { "@id": absoluteUrl("/") + "#website" }, mainEntity: { "@type": "ItemList", numberOfItems: casebankCards.length, itemListElement: casebankCards.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.title, url: absoluteUrl("/casebank/" + item.slug) })) } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }]} />
    <PageHeader compact eyebrow="Clinical experience · Casebank" title="From clinical findings to operative reasoning"
      description="Explore the published educational case collection of Hanjin Jang, MD. Each record connects presentation, imaging, the treatment rationale, operative considerations, and the limits of the available follow-up.">
      <p className="mt-4 text-sm text-slate-600">Collection reorganized {casebankUpdated} · {casebankCards.length} educational cases · Physician-facing education</p>
    </PageHeader>
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-8 grid gap-6 border-l-2 border-academic-gold pl-5 md:grid-cols-2">
        <div><h2 className="font-serif text-2xl text-academic-navy">What this collection documents</h2><p className="mt-3 text-sm leading-7 text-slate-600">Existing published case summaries and clinical images, now organized into individual records. These are selected educational cases, not a consecutive registry or a calculation of surgical volume, success rate, or complication rate.</p></div>
        <div><h2 className="font-serif text-2xl text-academic-navy">Read the limits with the case</h2><p className="mt-3 text-sm leading-7 text-slate-600">Unreported fields stay unreported. A postoperative image is not a functional outcome, and a website update is not a new clinical review. <Link href="/editorial-policy" className="underline">Read the publication policy</Link>.</p></div>
      </div>
      <CasebankExplorer cases={casebankCards} />
      <div className="mt-12 grid gap-5 border-t border-academic-line pt-8 md:grid-cols-2">
        <div><h2 className="font-serif text-2xl text-academic-navy">Operative video teaching</h2><p className="mt-3 text-sm leading-7 text-slate-600">The separately published L5–S1 far-lateral operative concept includes video excerpts and technical context. It is not counted as an additional case in this collection.</p><Link href="/operative-concepts/ube-far-lateral-l5s1" className="mt-4 inline-block font-semibold underline">View the operative concept →</Link></div>
        <div><h2 className="font-serif text-2xl text-academic-navy">For patients and caregivers</h2><p className="mt-3 text-sm leading-7 text-slate-600">Start with the plain-English condition guides or the official Korean hospital information for practical care questions.</p><Link href="/patient-education" className="mt-4 inline-block font-semibold underline">Patient education →</Link></div>
      </div>
    </section>
  </>;
}

