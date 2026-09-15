import Link from "next/link";
import { archiveMetrics, casebankArchive, formatArchiveCount } from "@/lib/casebank-archive";
import { casebankCards } from "@/lib/casebank";

export function CasebankArchiveSummary() {
  return (
    <section id="archive" aria-labelledby="archive-heading" className="mx-auto max-w-6xl px-5 py-8">
      <div className="border border-academic-line bg-academic-panel p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">Hanjin Jang, MD · Case archive</p>
            <h2 id="archive-heading" className="mt-3 font-serif text-3xl text-academic-navy">The archive behind the teaching</h2>
          </div>
          <p className="text-sm text-slate-600">Count checked <time dateTime={casebankArchive.updated}>15 September 2026</time></p>
        </div>
        <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
          {archiveMetrics(casebankCards.length).map((metric) => (
            <div key={metric.label} className="border-t border-academic-line pt-4">
              <dt className="text-sm font-semibold text-academic-navy">{metric.label}</dt>
              <dd className="mt-3 font-serif text-4xl text-academic-navy sm:text-5xl">{formatArchiveCount(metric.count)}</dd>
              <dd className="mt-3 text-xs leading-6 text-slate-600">{metric.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-7 text-sm leading-7 text-slate-600">The clinical archive contains records attributed to Dr. Jang. The open video archive contains {casebankArchive.videoPublishedExcerpts} excerpts selected from a separate {casebankArchive.videoCatalogueCases}-record catalogue; {casebankArchive.videoExcludedRecords} records did not meet the publication criteria. Video collections and published teaching entries are counted separately because they may overlap. Archive totals measure retained records; they do not establish a lifetime total of unique patients, UBE operations, or successful treatments.</p>
        <a href="#published-cases" className="mt-4 inline-block text-sm font-semibold underline">Browse the {casebankCards.length} open teaching entries →</a>
        <details id="count-method" className="mt-7 border-t border-academic-line pt-5">
          <summary className="cursor-pointer font-semibold text-academic-navy">Sources, counting method and annual records</summary>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p><strong className="text-academic-navy">Clinical archive.</strong> The {casebankArchive.clinicalSnapshot} database snapshot contains {formatArchiveCount(casebankArchive.attributedSourceRecords)} records attributed to Hanjin Jang. Removing {casebankArchive.exactDuplicatesRemoved} identical duplicate leaves {formatArchiveCount(casebankArchive.clinicalRecords)} archived records across {casebankArchive.clinicalSourceSites} source institutions. Records are matched across their source fields after whitespace normalization, excluding internal row identifiers. {casebankArchive.sourceKeyConflictGroups} groups with conflicting source keys remain in the record count.</p>
            <p><strong className="text-academic-navy">Video collections.</strong> The historical database holds {casebankArchive.historicalVideoCases} video case records linked to {formatArchiveCount(casebankArchive.historicalMediaRecords)} media-file records, including videos and images. The separate catalogue dated {casebankArchive.videoCatalogueSnapshot} holds {casebankArchive.videoCatalogueCases} case records and {casebankArchive.videoCatalogueFileLocations} listed video-file locations. Of those catalogue records, {casebankArchive.videoPublishedExcerpts} have eligible de-identified excerpts in the open archive and {casebankArchive.videoExcludedRecords} are excluded under the stated publication criteria. Its earlier 83-case list is fully included and is not counted again. Multiple clips or file copies do not create additional cases.</p>
            <p><strong className="text-academic-navy">Coverage.</strong> These are the available archive snapshots, not a complete reconstruction of every year of practice. A dash means no records for that year in that collection. Video years follow the catalogue recording dates. The technical recount does not independently verify procedure type, clinical outcomes, or the number of UBE operations. Only aggregate counts are public here.</p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm tabular-nums">
              <caption className="pb-4 text-left text-sm text-slate-600">Annual records in each collection. Columns are not additive.</caption>
              <thead className="border-b border-academic-line text-academic-navy">
                <tr><th scope="col" className="py-3 pr-4">Year</th><th scope="col" className="px-3 py-3 text-right">Clinical records</th><th scope="col" className="px-3 py-3 text-right">Historical video</th><th scope="col" className="py-3 pl-3 text-right">Video catalogue</th></tr>
              </thead>
              <tbody>{casebankArchive.annual.map((row) => (
                <tr key={row.year} className="border-b border-academic-line text-slate-600">
                  <th scope="row" className="py-3 pr-4 font-normal">{row.year}</th>
                  {[row.clinical, row.historicalVideo, row.videoCatalogue].map((count, index) => <td key={index} className="px-3 py-3 text-right last:pr-0">{count ? formatArchiveCount(count) : "—"}</td>)}
                </tr>
              ))}</tbody>
              <tfoot className="font-semibold text-academic-navy"><tr><th scope="row" className="py-4 pr-4">Total</th><td className="px-3 py-4 text-right">{formatArchiveCount(casebankArchive.clinicalRecords)}</td><td className="px-3 py-4 text-right">{casebankArchive.historicalVideoCases}</td><td className="py-4 pl-3 text-right">{casebankArchive.videoCatalogueCases}</td></tr></tfoot>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">Archive custodian: Hanjin Jang, MD. Original clinical and media records remain private. Public teaching material follows the <Link href="/editorial-policy" className="underline">editorial and de-identification policy</Link>.</p>
          <p className="mt-4 text-sm leading-7 text-slate-600"><strong className="text-academic-navy">Verification scope.</strong> Counts were checked by a technical recount of the retained source records. This is not an independent clinical audit. A separate case-level medical reviewer and review date are not documented for this website edition; the journal-based entry retains its original publication context.</p>
          <div className="mt-5 border-t border-academic-line pt-4 text-sm leading-7 text-slate-600"><h3 className="font-semibold text-academic-navy">Cite the aggregate summary</h3><p className="mt-2">Hanjin Jang, MD academic resource. Casebank archive counts and counting method. Updated {casebankArchive.updated}. https://www.hanjinjangspine1.com/casebank#count-method. State the access date and retain the collection definitions when citing these counts.</p><a href="/casebank/archive-summary.json" download className="mt-3 inline-block font-semibold underline">Download aggregate counts and definitions (JSON) →</a><p className="mt-2 text-xs">Contains only public counts, annual totals and definitions. It contains no patient records or private media.</p></div>
        </details>
      </div>
    </section>
  );
}
