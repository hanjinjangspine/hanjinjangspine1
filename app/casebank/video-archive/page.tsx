import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { VideoArchiveExplorer } from "@/components/VideoArchiveExplorer";
import { createMetadata } from "@/lib/metadata";
import { archiveVideos, archiveVideoPath, videoArchiveUpdated } from "@/lib/video-archive";
import { absoluteUrl } from "@/lib/site";
export const metadata = createMetadata({ title: "Open Operative Video Archive | Hanjin Jang, MD", description: "View de-identified operative excerpts from the 100-record video catalogue, with source labels, recorded levels and explicit limits.", path: "/casebank/video-archive" });
export default function VideoArchivePage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Open operative video archive", url: absoluteUrl("/casebank/video-archive"), dateModified: videoArchiveUpdated, mainEntity: { "@type": "ItemList", numberOfItems: archiveVideos.length, itemListElement: archiveVideos.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: v.title, url: absoluteUrl(archiveVideoPath(v)) })) } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }, { name: "Video archive", href: "/casebank/video-archive" }]} />
    <PageHeader compact eyebrow="Casebank · Open archive" title={archiveVideos.length + " operative video archive entries"} description="Short, de-identified excerpts make the retained operative material directly viewable. Each entry keeps its catalogue label and identifies clinical details that the source does not report." />
    <section className="mx-auto max-w-6xl px-5 pb-12">
      <div className="mb-8 border-l-2 border-academic-gold bg-academic-panel p-5 text-sm leading-7 text-slate-600"><p>Selected from a 100-record video catalogue. One public entry represents one catalogue record; alternate files are not counted again. This is a video archive, and a record is not proof of a unique patient, a complete operation or a clinical outcome. Its overlap with the <Link href="/casebank#published-cases" className="underline">nine detailed teaching entries</Link> is not established.</p><p className="mt-3">Publication: {videoArchiveUpdated}. The collection owner authorized publication of eligible material. Nine catalogue records are excluded: three without an available nonempty original, three with unusable video data, two shorter than two seconds, and one without an identifiable operative scene. Published excerpts omit audio and source identifiers. Recorded procedure labels and levels are retained as source labels; an independent clinical review and patient-level outcome record are not available for these entries.</p></div>
      <dl className="mb-8 grid grid-cols-2 gap-4 border-y border-academic-line py-5 sm:grid-cols-4">{[["Published excerpts", archiveVideos.length], ["1 recorded level", archiveVideos.filter(v => v.recordedLevels.length === 1).length], ["2 recorded levels", archiveVideos.filter(v => v.recordedLevels.length === 2).length], ["Level not recorded", archiveVideos.filter(v => !v.recordedLevels.length).length]].map(([label, count]) => <div key={label}><dt className="text-sm text-slate-600">{label}</dt><dd className="mt-1 font-serif text-3xl text-academic-navy">{count}</dd></div>)}</dl>
      <VideoArchiveExplorer videos={archiveVideos} />
      <p className="mt-10 text-sm leading-7 text-slate-600">Source: retained operative-video master catalogue, version 1.1, dated 14 August 2026. Original identifiers, exact operation dates, filenames and storage paths are not published. <Link href="/editorial-policy#video-publication" className="underline">Publication and corrections</Link> · <Link href="/casebank#count-method" className="underline">Archive counting method</Link></p>
    </section>
  </>;
}
