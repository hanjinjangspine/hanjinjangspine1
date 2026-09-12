import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OperativeVideoPlayer } from "@/components/OperativeVideoPlayer";
import { createMetadata } from "@/lib/metadata";
import { operativeVideos, videoPageUpdated, videoSchema, formatVideoTime } from "@/lib/operative-videos";
import { operativeConcepts } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return operativeVideos.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const video = operativeVideos.find((entry) => entry.slug === slug);
  if (!video) return { title: "Video not found", robots: { index: false, follow: false } };
  const metadata = createMetadata({ title: video.title + " | Operative Video", description: video.description, path: "/videos/" + video.slug });
  return { ...metadata, openGraph: { ...metadata.openGraph, images: [{ url: absoluteUrl(video.poster), width: 1280, height: 720, alt: video.title }], videos: [{ url: absoluteUrl(video.src), type: "video/mp4", width: 1280, height: 720 }] }, twitter: { card: "summary_large_image" as const, title: video.title, description: video.description, images: [absoluteUrl(video.poster)] } };
}
export default async function VideoPage({ params }: Props) {
  const { slug } = await params;
  const video = operativeVideos.find((entry) => entry.slug === slug);
  if (!video) notFound();
  const concept = operativeConcepts.find((entry) => video.conceptPath.endsWith("/" + entry.slug));
  const reasoning = concept?.sections.filter((section) => ["Anatomic problem", "Why a far-lateral corridor", "Technical considerations, limitations, and risks"].includes(section.title)) ?? [];
  return <>
    <JsonLd data={videoSchema(video)} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Videos", href: "/videos" }, { name: "Right L5–S1 sequence", href: "/videos/" + video.slug }]} />
    <article className="mx-auto max-w-5xl px-5 pb-12 pt-5">
      <header className="mb-6"><p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">Operative teaching video</p><h1 className="mt-3 font-serif text-3xl leading-tight text-academic-navy md:text-4xl">{video.title}</h1><p className="mt-3 text-sm leading-7 text-slate-600">Hanjin Jang, MD academic collection · {video.level} · {video.levelCount} treated level · English and Korean caption text</p></header>
      <OperativeVideoPlayer video={video} />
      <p className="mt-6 text-sm leading-7"><Link href={video.casePath} className="font-semibold underline">Read Case 08: clinical context, level and missing outcomes →</Link></p>
      <section className="mt-8 border border-academic-line bg-academic-panel p-6">
        <h2 className="font-serif text-2xl text-academic-navy">What the sequence documents</h2>
        <p className="mt-3 text-sm leading-8 text-slate-700">The existing teaching source describes a right L5–S1 far-lateral corridor for the exiting L5 root, with foraminotomy and discectomy. L5–S1 is one treated motion segment. Decompression and disc removal at that segment do not count as two levels. No fusion procedure is described in this source.</p>
        <p className="mt-3 text-sm leading-8 text-slate-700">The operative views and the final on-screen caption describe an intraoperative assessment. Patient-reported pain or function, follow-up interval and a complete complication record are not available for this teaching sequence. The video does not establish a durable clinical result.</p>
      </section>
      <section className="mt-9">
        <h2 className="font-serif text-3xl text-academic-navy">Caption text</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">Transcription of the original on-screen English captions, with a Korean translation. There is no spoken narration in this edit. Chapter times locate the teaching sections in the edited sequence.</p>
        <ol className="mt-5 grid gap-4">{video.chapters.map((chapter) => <li key={chapter.start} className="border-l-2 border-academic-line pl-4"><a href={"?t=" + chapter.start} className="text-sm font-semibold text-academic-navy underline">{formatVideoTime(chapter.start)} · {chapter.label}</a><p className="mt-2 text-sm leading-7">{chapter.caption}</p><p lang="ko" className="text-sm leading-7 text-slate-600">{chapter.korean}</p></li>)}</ol>
      </section>
      <section className="mt-9">
        <h2 className="font-serif text-3xl text-academic-navy">Reasoning in the source teaching article</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">The following explanations are reproduced from the existing <Link href={video.conceptPath} className="underline">operative concept</Link>. They are educational context; a separate patient-level decision record is unavailable.</p>
        <div className="mt-5 grid gap-6">{reasoning.map((section) => <section key={section.title}><h3 className="font-semibold text-academic-navy">{section.title}</h3><p className="mt-2 text-sm leading-8 text-slate-700">{section.body}</p></section>)}</div>
      </section>
      <section className="mt-9 border-t border-academic-line pt-7">
        <h2 className="font-serif text-3xl text-academic-navy">Source and review record</h2>
        <dl className="mt-5 grid gap-5 text-sm leading-7 sm:grid-cols-2">
          <div><dt className="font-semibold">Teaching source</dt><dd><Link href={video.conceptPath} className="underline">Hanjin Jang, MD academic operative collection</Link></dd></div>
          <div><dt className="font-semibold">Earliest retained upload record</dt><dd>22 June 2026 · <a href={video.sourceCommit} className="underline">Source repository record</a></dd></div>
          <div><dt className="font-semibold">Video and caption check</dt><dd>{videoPageUpdated}: local file duration, silent audio status and on-screen caption text checked for this website update.</dd></div>
          <div><dt className="font-semibold">Independent clinical review</dt><dd>A named independent reviewer and case-level review date are not documented in the available source.</dd></div>
        </dl>
        <p className="mt-5 text-sm leading-7 text-slate-600">The same previously public, de-identified file is reused here. This page adds navigation and caption access; it does not add a new patient or new clinical footage. Publication and corrections follow the <Link href="/editorial-policy" className="underline">editorial policy</Link>. <Link href="/about#profile-sources" className="underline">Verify the author&apos;s profile</Link>.</p>
        <p className="mt-4 text-xs leading-6 text-slate-600">Suggested citation: Hanjin Jang, MD academic collection. {video.title}. Operative teaching video. Page updated {videoPageUpdated}. {absoluteUrl("/videos/" + video.slug)}</p>
      </section>
    </article>
  </>;
}
