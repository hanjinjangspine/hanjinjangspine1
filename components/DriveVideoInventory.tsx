import Link from "next/link";
import { driveVideoInventory as inventory } from "@/lib/drive-video-inventory";
import { formatArchiveCount } from "@/lib/casebank-archive";
export function DriveVideoInventory() {
  return <section id="drive-inventory" aria-labelledby="drive-inventory-heading" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-8">
    <div className="border border-academic-line p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">Private video archive · Inventory checked September 12, 2026</p>
      <h2 id="drive-inventory-heading" className="mt-3 font-serif text-3xl text-academic-navy">Recorded video files and open teaching</h2>
      <dl className="mt-6 grid gap-5 sm:grid-cols-3">{[
        ["Video file records", inventory.videoFileRecords, "Distinct Drive file IDs; copies and alternate edits may remain."],
        ["Non-empty file records", inventory.nonemptyFileRecords, "File size is greater than zero; full playback and clinical eligibility are separate checks."],
        ["Empty file records", inventory.zeroByteFileRecords, "Zero-byte entries are retained in the inventory and cannot provide viewable footage."]
      ].map(([label,count,note]) => <div key={String(label)}><dt className="text-sm font-semibold text-academic-navy">{label}</dt><dd className="mt-2 font-serif text-3xl text-academic-navy">{formatArchiveCount(Number(count))}</dd><dd className="mt-2 text-xs leading-6 text-slate-600">{note}</dd></div>)}</dl>
      <p className="mt-5 text-sm leading-7 text-slate-600">This inventory covers {inventory.sourceCollections} identified collections and {formatArchiveCount(inventory.foldersScanned)} folders. It is a file inventory, not a count of patients or operations. The 334 historical video case records and the separate 100-case catalogue may overlap with these files; these totals must not be added.</p>
      <details className="mt-4 border-t border-academic-line pt-4"><summary className="cursor-pointer text-sm font-semibold text-academic-navy">How the video inventory was checked</summary><div className="mt-3 space-y-3 text-sm leading-7 text-slate-600"><p>{inventory.scope} {inventory.countingMethod}</p><p>The records form {formatArchiveCount(inventory.filenameSizeGroups)} filename-and-size groups, with {inventory.extraRecordsInRepeatedMetadataGroups} additional file records in repeated groups. {inventory.matchingMethod} These groups are not published as a unique-video or unique-case total.</p><p>{inventory.publicationScope} Source-level permission, identification of the clinical case, privacy review and medical context must be established before adding new footage.</p></div></details>
      <Link href="/casebank/video-archive" className="mt-5 inline-block text-sm font-semibold text-academic-navy underline">Watch the open operative archive →</Link>
    </div>
  </section>;
}
