import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { operativeVideos } from "@/lib/operative-videos";
import { absoluteUrl } from "@/lib/site";
import { archiveVideos, videoArchiveUpdated } from "@/lib/video-archive";

export const metadata = createMetadata({ title: "Operative Teaching Videos | Hanjin Jang, MD", description: "Watch sourced operative education with chapter navigation, English and Korean caption text, treated levels and explicit clinical limitations.", path: "/videos" });
export default function VideosPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Operative teaching videos", url: absoluteUrl("/videos"), dateModified: videoArchiveUpdated, mainEntity: { "@type": "ItemList", numberOfItems: operativeVideos.length, itemListElement: operativeVideos.map((video, index) => ({ "@type": "ListItem", position: index + 1, name: video.title, url: absoluteUrl("/videos/" + video.slug) })) } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }, { name: "Videos", href: "/videos" }]} />
    <PageHeader compact eyebrow="Operative education" title="Watch the operative sequence" description="Each video is linked to its teaching source, treated level and clinical limitations. Clips and alternate edits from the same sequence remain one educational entry." />
    <section className="mx-auto max-w-6xl px-5 py-10">
      <div className="mb-8 border border-academic-line bg-academic-panel p-6"><h2 className="font-serif text-2xl text-academic-navy">{archiveVideos.length} additional operative archive entries</h2><p className="mt-3 text-sm leading-7 text-slate-600">The open archive provides de-identified excerpts from the retained 100-record video catalogue, with recorded labels and explicit clinical information gaps.</p><Link href="/casebank/video-archive" className="mt-4 inline-block font-semibold underline">Browse the operative video archive →</Link></div>
      {operativeVideos.map((video) => <article key={video.slug} className="grid overflow-hidden border border-academic-line md:grid-cols-2">
        <Link href={"/videos/" + video.slug} aria-label={"Watch " + video.title} className="bg-black"><Image src={video.poster} alt={"Operative teaching video: " + video.title} width={1280} height={720} className="aspect-video h-full w-full object-contain" /></Link>
        <div className="p-6"><p className="text-sm text-slate-600">{video.level} · {video.levelCount} treated level · 1 min 29.9 sec</p><h2 className="mt-3 font-serif text-3xl text-academic-navy"><Link href={"/videos/" + video.slug}>{video.title}</Link></h2><p className="mt-4 text-sm leading-7 text-slate-600">{video.description}</p><Link href={"/videos/" + video.slug} className="mt-5 inline-block font-semibold text-academic-navy underline">Watch with chapters and caption text →</Link></div>
      </article>)}
      <p className="mt-6 text-sm leading-7 text-slate-600">{operativeVideos.length} captioned teaching sequence with chapter navigation, using the existing Case 08 footage. The open archive is listed separately; alternate edits and overlapping collections are not added together as unique operations. <Link href="/casebank#drive-inventory" className="underline">Read the archive inventory</Link>.</p>
    </section>
  </>;
}
