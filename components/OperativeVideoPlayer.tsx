"use client";
import { useEffect, useRef } from "react";
import { formatVideoTime, type OperativeVideo } from "@/lib/operative-videos";

export function OperativeVideoPlayer({ video }: { video: OperativeVideo }) {
  const player = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = player.current;
    if (!element) return;
    const applyTime = () => {
      const value = new URL(window.location.href).searchParams.get("t");
      if (value === null || value.trim() === "" || !Number.isFinite(Number(value))) return;
      element.currentTime = Math.max(0, Math.min(Number(value), video.durationSeconds - 0.1));
    };
    if (element.readyState >= 1) applyTime();
    else element.addEventListener("loadedmetadata", applyTime, { once: true });
    return () => element.removeEventListener("loadedmetadata", applyTime);
  }, [video.durationSeconds]);
  function seek(seconds: number) {
    if (!player.current || !Number.isFinite(seconds)) return;
    player.current.currentTime = Math.max(0, Math.min(seconds, video.durationSeconds - 0.1));
  }
  return <div>
    <video ref={player} id="operative-video" className="aspect-video w-full border border-academic-line bg-black" controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
      <source src={video.src} type="video/mp4" />
      {video.captions.map((caption) => <track key={caption.language} kind="subtitles" src={caption.src} srcLang={caption.language} label={caption.label} />)}
      Your browser does not support embedded video. <a href={video.src}>Open the operative teaching video.</a>
    </video>
    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
      <label htmlFor="video-subtitle-language" className="font-semibold text-academic-navy">Subtitle language</label>
      <select id="video-subtitle-language" defaultValue="" className="max-w-full rounded border border-academic-line bg-white px-3 py-2"
        onChange={(event) => {
          if (!player.current) return;
          for (const track of Array.from(player.current.textTracks)) track.mode = track.language === event.target.value ? "showing" : "disabled";
        }}>
        <option value="">Original on-screen English only</option>
        <option value="en">English caption text</option>
        <option value="ko">한국어 자막</option>
      </select>
    </div>
    <p className="mt-3 text-sm leading-7 text-slate-600">1 min 29.9 sec · Silent sequence with English text in the original picture. Select English or Korean subtitles in the player. This duration is the edited video length.</p>
    <nav aria-label="Video chapters" className="mt-5 grid gap-2 sm:grid-cols-2">
      {video.chapters.map((chapter) => <a key={chapter.start} href={"?t=" + chapter.start} className="rounded border border-academic-line px-4 py-3 text-sm leading-6 text-academic-navy hover:bg-academic-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        onClick={(event) => {
          event.preventDefault(); seek(chapter.start);
          const url = new URL(window.location.href); url.searchParams.set("t", String(chapter.start));
          window.history.replaceState(null, "", url);
          player.current?.focus();
        }}>
        <span className="mr-3 font-mono font-semibold">{formatVideoTime(chapter.start)}</span>{chapter.label}
      </a>)}
    </nav>
  </div>;
}
