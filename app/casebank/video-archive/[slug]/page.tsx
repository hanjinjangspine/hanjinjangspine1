import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { archiveVideos, archiveVideoPath, archiveVideoSchema, videoArchiveUpdated } from "@/lib/video-archive";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return archiveVideos.map(v => ({ slug: v.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const video = archiveVideos.find(v => v.slug === slug);
  return video ? createMetadata({ title: video.title + " | Hanjin Jang, MD", description: video.description, path: archiveVideoPath(video) }) : {};
}
export default async function ArchiveWatchPage({ params }: Props) {
  const { slug } = await params; const video = archiveVideos.find(v => v.slug === slug);
  if (!video) notFound();
  return <>
    <JsonLd data={archiveVideoSchema(video)} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Casebank", href: "/casebank" }, { name: "Video archive", href: "/casebank/video-archive" }, { name: video.publicId, href: archiveVideoPath(video) }]} />
    <article className="mx-auto max-w-4xl px-5 pb-14 pt-5">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Operative archive · {video.publicId}</p>
      <h1 className="mt-3 font-serif text-3xl text-academic-navy sm:text-4xl">{video.title}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">{video.description}</p>
      <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title} width={video.width} height={video.height} className="mt-6 max-h-[75vh] w-full bg-black">
        <source src={video.src} type="video/mp4" />
        <track kind="captions" src={video.captionEn} srcLang="en" label="English description" />
        <track kind="captions" src={video.captionKo} srcLang="ko" label="한국어 설명" />
        Your browser does not support embedded video.
      </video>
      <p className="mt-3 text-sm text-slate-600">{video.durationSeconds.toFixed(1)} sec · Silent excerpt · English and Korean description tracks in the player</p>
      <section className="mt-8"><h2 className="font-serif text-2xl text-academic-navy">What this excerpt shows</h2><p className="mt-3 leading-8 text-slate-600">{video.field === "external" ? "A cropped external operative field with instruments and access points. The crop focuses on the operative area; the available catalogue does not identify the procedure or treated level." : "An endoscopic view of the operative field and instrument handling. This short segment is a visual extract, not a complete procedural sequence. The image alone does not verify the diagnosis, indication, exact treated level or adequacy of decompression."}</p></section>
      <section className="mt-8"><h2 className="font-serif text-2xl text-academic-navy">Recorded procedure and levels</h2><dl className="mt-4 grid gap-x-5 gap-y-3 text-sm leading-7 sm:grid-cols-[180px_1fr]">
        <dt className="font-semibold text-academic-navy">Catalogue procedure label</dt><dd>{video.procedureLabel ?? "Not recorded"}</dd>
        <dt className="font-semibold text-academic-navy">Label source</dt><dd>{video.labelSource === "folder_label" ? "Handwritten folder label retained in the catalogue; clinical confirmation is not documented." : video.labelSource === "device_label" ? "Recording-device entry retained in the catalogue; it is not a verified patient-level operative report." : "The catalogue does not specify a procedure."}</dd>
        <dt className="font-semibold text-academic-navy">Recorded levels</dt><dd>{video.recordedLevels.length ? video.recordedLevels.join(" / ") + " (" + video.recordedLevels.length + " recorded motion segment" + (video.recordedLevels.length > 1 ? "s" : "") + "). These are catalogue labels, not a new clinical adjudication." : "Exact level and level count not recorded."}</dd>
        <dt className="font-semibold text-academic-navy">Outcome / follow-up</dt><dd>Not reported in the video catalogue. No pain score, functional outcome, complication rate or long-term result is inferred.</dd>
      </dl></section>
      <section className="mt-8"><h2 className="font-serif text-2xl text-academic-navy">Source, publication and review</h2><p className="mt-3 leading-8 text-slate-600">From the retained 100-record operative-video master catalogue, version 1.1 (14 August 2026), held in Hanjin Jang, MD&apos;s academic collection. {video.publicId} is a public archive identifier assigned for this release. It is not a patient identifier or a count of unique operations.</p><p className="mt-3 leading-8 text-slate-600">Published {videoArchiveUpdated} following the collection owner&apos;s authorization and technical preparation of the excerpt. Audio and original file metadata were removed, and the view was cropped for publication. A named independent clinical reviewer and patient-level review date are not documented.</p></section>
      <section className="mt-8 border-t border-academic-line pt-6"><h2 className="font-serif text-2xl text-academic-navy">Caption description</h2><p className="mt-3 text-sm leading-7 text-slate-600">{video.field === "external" ? "Cropped operative field with instruments. Procedure and treated level are not documented in the source catalogue." : "Silent endoscopic operative excerpt. Read the source procedure label, recorded levels and limitations alongside the image."}</p><p className="mt-2 text-sm leading-7 text-slate-600" lang="ko">{video.field === "external" ? "수술 부위와 기구가 보이는 발췌 영상입니다. 원본 대장에 수술명과 레벨이 기록되어 있지 않습니다." : "음성을 제외한 내시경 수술 장면 발췌본입니다. 영상과 함께 원자료의 수술명 표기, 레벨 및 확인되지 않은 사항을 읽어 주세요."}</p></section>
      <nav aria-label="Archive links" className="mt-8 flex flex-wrap gap-5 font-semibold text-academic-navy"><Link href="/casebank/video-archive" className="underline">All archive videos</Link><Link href="/about#profile-sources" className="underline">Collection author</Link><Link href="/editorial-policy#video-publication" className="underline">Publication policy</Link><Link href="/contact#corrections" className="underline">Suggest a correction</Link></nav>
    </article>
  </>;
}
