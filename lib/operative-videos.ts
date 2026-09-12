import { absoluteUrl } from "@/lib/site";

export const videoPageUpdated = "2026-09-12";
const media = "/media/operative-concepts/ube-far-lateral-l5s1";
export const operativeVideos = [{
  slug: "right-l5s1-far-lateral-discectomy",
  title: "Right L5–S1 far-lateral biportal decompression and discectomy",
  description: "Watch a captioned operative teaching sequence from Hanjin Jang, MD's existing academic collection, with chapter navigation, treated-level context and source limitations.",
  src: media + "/UBE_FarLateral_L5S1_Edu_90s_EN_web_720p.mp4",
  poster: media + "/UBE_FarLateral_L5S1_Edu_90s_EN_poster.jpg",
  durationSeconds: 89.9,
  duration: "PT1M29.9S",
  uploadDate: "2026-06-22",
  sourceCommit: "https://github.com/hanjinjangspine/hanjinjangspine1/commit/f7c7d16",
  conceptPath: "/operative-concepts/ube-far-lateral-l5s1",
  casePath: "/casebank/right-l5s1-far-lateral-discectomy",
  level: "Right L5–S1",
  levelCount: 1,
  captions: [
    { src: media + "/far-lateral-caption-text.en.vtt", language: "en", label: "English caption text" },
    { src: media + "/far-lateral-caption-text.ko.vtt", language: "ko", label: "한국어 자막" }
  ],
  chapters: [
    { start: 0, end: 15, label: "Far-lateral approach at right L5–S1", caption: "UBE Far Lateral Approach - L5-S1, Right", korean: "우측 L5–S1 양방향 내시경 외측 접근" },
    { start: 15, end: 30, label: "Entry and bony exposure", caption: "Far lateral entry, exposing the bony structures", korean: "외측으로 진입하여 골성 구조를 노출" },
    { start: 30, end: 48, label: "Foraminotomy", caption: "Foraminotomy to decompress the compressed nerve root", korean: "압박된 신경근의 감압을 위한 추간공 확장" },
    { start: 48, end: 62.967, label: "Root dissection and foraminal widening", caption: "Dissecting the nerve root and widening the foramen", korean: "신경근 주변 박리와 추간공 확장" },
    { start: 62.967, end: 77.934, label: "Discectomy", caption: "Removal of the herniated disc (Discectomy)", korean: "탈출한 추간판 제거" },
    { start: 77.934, end: 89.9, label: "Final operative view", caption: "Final confirmation of nerve root decompression", korean: "신경근 감압 상태의 최종 확인" }
  ]
}];
export type OperativeVideo = (typeof operativeVideos)[number];
export function formatVideoTime(seconds: number) {
  const rounded = Math.round(seconds);
  return Math.floor(rounded / 60).toString().padStart(2, "0") + ":" + (rounded % 60).toString().padStart(2, "0");
}
export function videoSchema(video: OperativeVideo) {
  const url = absoluteUrl("/videos/" + video.slug);
  return {
    "@context": "https://schema.org", "@type": "VideoObject", "@id": url + "#video",
    name: video.title, description: video.description, url,
    thumbnailUrl: [absoluteUrl(video.poster)], contentUrl: absoluteUrl(video.src),
    uploadDate: video.uploadDate, duration: video.duration, inLanguage: "en",
    caption: video.captions.map((caption) => absoluteUrl(caption.src)),
    isAccessibleForFree: true,
    creator: { "@id": absoluteUrl("/") + "#hanjin-jang-md" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    hasPart: video.chapters.map((chapter) => ({
      "@type": "Clip", name: chapter.label, startOffset: chapter.start,
      endOffset: chapter.end, url: url + "?t=" + chapter.start
    }))
  };
}
