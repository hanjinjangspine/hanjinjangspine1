import Link from "next/link";
import { casebankCards } from "@/lib/casebank";
import { archiveMetrics, casebankArchive, formatArchiveCount } from "@/lib/casebank-archive";
export function CasebankFeature() {
  return <section className="border-y border-academic-line bg-[#f4f6f6]">
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">Experience made readable</p><h2 className="mt-3 font-serif text-4xl leading-tight text-academic-navy">Clinical Casebank</h2><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">Follow the reasoning from symptoms and imaging to the operative plan. Explore published cases, inspect clinical images, and read the evidence alongside the limits of each record.</p><Link href="/casebank" className="mt-6 inline-flex bg-academic-navy px-5 py-3 font-semibold text-white">Explore Casebank →</Link></div>
        <dl className="grid grid-cols-2 items-center gap-6 border-l-2 border-academic-gold pl-6">
          {archiveMetrics(casebankCards.length).map(({count,label}) => <div key={label}><dt className="text-xs leading-6 text-slate-600">{label}</dt><dd className="mt-2 font-serif text-4xl text-academic-navy">{formatArchiveCount(count)}</dd></div>)}
        </dl>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{[casebankCards[0],casebankCards[2],casebankCards[4]].map((item) => <Link key={item.slug} href={"/casebank/" + item.slug} className="border border-academic-line bg-white p-5 hover:border-academic-gold"><p className="text-xs font-semibold text-academic-gold">{item.caseNumber} · {item.region}</p><h3 className="mt-3 font-serif text-xl text-academic-navy">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.question}</p></Link>)}</div>
      <p className="mt-5 text-xs leading-6 text-slate-500">The open video archive contains {casebankArchive.videoPublishedExcerpts} excerpts selected from a {casebankArchive.videoCatalogueCases}-record catalogue; {casebankArchive.videoExcludedRecords} records are excluded under the publication criteria. Archive counts checked {casebankArchive.updated}. Clinical, video and teaching collections may overlap and are not added together. Counts describe retained records and educational material, not unique patients or outcomes. <Link href="/casebank#count-method" className="underline">View sources and annual records</Link>.</p>
    </div>
  </section>;
}

