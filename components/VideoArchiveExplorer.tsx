"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ArchiveVideo } from "@/lib/video-archive";
function archiveVideoPath(video: ArchiveVideo) { return "/casebank/video-archive/" + video.slug; }
export function VideoArchiveExplorer({ videos }: { videos: ArchiveVideo[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const filtered = videos.filter(v =>
    (level === "all" || (level === "unreported" ? v.recordedLevels.length === 0 : v.recordedLevels.length === Number(level))) &&
    (v.publicId + " " + v.title + " " + (v.procedureLabel ?? "") + " " + v.recordedLevels.join(" ")).toLowerCase().replace(/[–—]/g, "-").includes(query.trim().toLowerCase().replace(/[–—]/g, "-"))
  );
  return <div>
    <div className="mb-6 grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold text-academic-navy">Find an archive entry<input value={query} onChange={e => setQuery(e.target.value)} placeholder="Archive ID, recorded procedure or level" className="mt-2 w-full rounded-none border border-academic-line bg-white px-3 py-3 font-normal" /></label>
      <label className="text-sm font-semibold text-academic-navy">Levels recorded in the catalogue<select value={level} onChange={e => setLevel(e.target.value)} className="mt-2 w-full border border-academic-line bg-white px-3 py-3 font-normal"><option value="all">All entries</option><option value="1">1 recorded level</option><option value="2">2 recorded levels</option><option value="unreported">Level not recorded</option></select></label>
    </div>
    <p role="status" className="mb-5 text-sm text-slate-600">{filtered.length} of {videos.length} published archive entries</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map(video => <article key={video.slug} className="overflow-hidden border border-academic-line bg-white">
        <Link href={archiveVideoPath(video)} aria-label={"Watch " + video.title}><Image src={video.poster} alt={video.field === "external" ? "Cropped operative field with instruments" : "Endoscopic operative field"} width={video.width} height={video.height} className="aspect-square w-full bg-black object-contain" /></Link>
        <div className="p-5"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{video.publicId} · {Math.round(video.durationSeconds)} sec excerpt</p><h3 className="mt-2 font-serif text-2xl text-academic-navy"><Link href={archiveVideoPath(video)}>{video.title}</Link></h3><p className="mt-3 text-sm leading-6 text-slate-600">{video.recordedLevels.length ? video.recordedLevels.join(" / ") + " · " + video.recordedLevels.length + " recorded level" + (video.recordedLevels.length > 1 ? "s" : "") : "Treated level not recorded"}</p>{video.procedureLabel ? <p className="mt-2 text-sm leading-6 text-slate-600">Catalogue label: {video.procedureLabel}</p> : null}<Link href={archiveVideoPath(video)} className="mt-4 inline-block font-semibold text-academic-navy underline">Watch and read source details →</Link></div>
      </article>)}
    </div>
    {filtered.length === 0 ? <p className="border border-academic-line p-6">No entries match these filters. Clear the search or choose all levels.</p> : null}
  </div>;
}
