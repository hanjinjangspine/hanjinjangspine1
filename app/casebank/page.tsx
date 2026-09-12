import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { CasebankExplorer } from "@/components/CasebankExplorer";
import { CasebankArchiveSummary } from "@/components/CasebankArchiveSummary";
import { DriveVideoInventory } from "@/components/DriveVideoInventory";
import { archiveVideos, videoArchiveUpdated } from "@/lib/video-archive";
import { casebankArchive, formatArchiveCount } from "@/lib/casebank-archive";
import { casebankCards, casebankUpdated } from "@/lib/casebank";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = createMetadata({ title: "Casebank | Endoscopic Spine Surgery Cases | Hanjin Jang, MD",
  description: `${archiveVideos.length} open operative archive excerpts and ${casebankCards.length} detailed teaching entries, with source labels, recorded levels and clinical limitations. Collections may overlap.`, path: "/casebank" });
export default function CasebankPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Endoscopic Spine Surgery Casebank", url: absoluteUrl("/casebank"), dateModified: videoArchiveUpdated, description: `${formatArchiveCount(casebankArchive.clinicalRecords)} archived clinical records, ${casebankArchive.historicalVideoCases} historical video case records and a separate ${casebankArchive.videoCatalogueCases}-case video catalogue. Collections may overlap. The open ItemList contains ${casebankCards.length} published teaching entries.`, isPartOf: { "@id": absoluteUrl("/") + "#website" }, mainEntity: { "@type": "ItemList", numberOfItems: casebankCards.length, itemListElement: casebankCards.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.title, url: absoluteUrl("/casebank/" + item.slug) })) } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }]} />
    <PageHeader compact eyebrow="Clinical experience · Casebank" title={`${archiveVideos.length} operative archive entries · ${casebankCards.length} detailed teaching cases`}
      description="Read source-labelled clinical summaries, an operative-video example and a published case. Each entry connects the recorded reasoning, treated levels, source evidence and information that remains unreported.">
      <p className="mt-4 text-sm text-slate-600">Archive counts updated {casebankArchive.updated} · Teaching collection updated {casebankUpdated}</p>
      <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold"><a href="#published-cases" className="underline">Read the {casebankCards.length} teaching entries</a><a href="#count-method" className="underline">Archive counts and method</a><Link href="/patient-education" className="underline">Patient guides</Link></div>
    </PageHeader>
    <section id="open-video-archive" className="mx-auto max-w-6xl px-5 pb-8"><div className="border border-academic-line bg-academic-panel p-6"><p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Now open · {videoArchiveUpdated}</p><h2 className="mt-3 font-serif text-3xl text-academic-navy">Watch {archiveVideos.length} excerpts from the 100-record video catalogue</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Open the actual operative views, recorded procedure labels and level information. Each excerpt represents a catalogue record. These records may overlap with the detailed teaching cases and are not added together as a unique-patient or operation total.</p><Link href="/casebank/video-archive" className="mt-5 inline-block bg-academic-navy px-5 py-3 font-semibold text-white">Browse the open video archive →</Link></div></section>
    <CasebankArchiveSummary />
    <DriveVideoInventory />
    <section id="published-cases" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-12 pt-4">
      <h2 className="mb-6 font-serif text-3xl text-academic-navy">Published teaching cases · {casebankCards.length} entries</h2>
      <div className="mb-8 grid gap-6 border-l-2 border-academic-gold pl-5 md:grid-cols-2">
        <div><h3 className="font-serif text-2xl text-academic-navy">What the open collection documents</h3><p className="mt-3 text-sm leading-7 text-slate-600">Nine source-labelled entries: seven clinical summaries, one operative-video example, and one case from a paper coauthored by Han-Jin Jang. They form a selected teaching collection; a record-by-record match to the private archive has not been established.</p></div>
        <div><h2 className="font-serif text-2xl text-academic-navy">Read the limits with the case</h2><p className="mt-3 text-sm leading-7 text-slate-600">Unreported fields stay unreported. A postoperative image is not a functional outcome, and a website update is not a new clinical review. <Link href="/editorial-policy" className="underline">Read the publication policy</Link>.</p></div>
      </div>
      <div className="mb-8 border border-academic-line bg-academic-panel p-5">
        <h2 className="font-serif text-2xl text-academic-navy">Read the level count</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">A level is one treated motion segment, such as L4-L5. Decompression and fusion at the same segment count once. The new operative target and a longer pre-existing fusion construct are reported separately. Two entries do not identify their exact operated levels. This distribution describes only the {casebankCards.length} open entries; it is not the level distribution of the {formatArchiveCount(casebankArchive.clinicalRecords)} archived clinical records.</p>
        <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">{[1, 2, 3, null].map((count) => <div key={String(count)}><dt className="text-sm text-slate-600">{count === null ? "Level count unreported" : `${count} ${count === 1 ? "level" : "levels"}`}</dt><dd className="mt-1 font-serif text-2xl text-academic-navy">{casebankCards.filter((entry) => entry.levelCount === count).length} {casebankCards.filter((entry) => entry.levelCount === count).length === 1 ? "entry" : "entries"}</dd></div>)}</dl>
      </div>
      <CasebankExplorer cases={casebankCards} />
      <div className="mt-12 grid gap-5 border-t border-academic-line pt-8 md:grid-cols-2">
        <div><h2 className="font-serif text-2xl text-academic-navy">Operative video teaching</h2><p className="mt-3 text-sm leading-7 text-slate-600">Case 08 organizes the existing L5–S1 far-lateral operative sequence into one teaching entry. Its clips are not separate cases. The original operative concept remains available for the full technical context.</p><Link href="/operative-concepts/ube-far-lateral-l5s1" className="mt-4 inline-block font-semibold underline">View the operative concept →</Link></div>
        <div><h2 className="font-serif text-2xl text-academic-navy">For patients and caregivers</h2><p className="mt-3 text-sm leading-7 text-slate-600">Start with the plain-English condition guides or the official Korean hospital information for practical care questions.</p><Link href="/patient-education" className="mt-4 inline-block font-semibold underline">Patient education →</Link></div>
      </div>
    </section>
  </>;
}

