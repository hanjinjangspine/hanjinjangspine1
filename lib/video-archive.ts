import data from "@/lib/video-archive-data.json";
import { absoluteUrl } from "@/lib/site";
export const videoArchiveUpdated = "2026-09-13";
export type ArchiveVideo = {
  slug: string; publicId: string; title: string; description: string;
  src: string; poster: string; captionEn: string; captionKo: string;
  durationSeconds: number; width: number; height: number;
  procedureLabel: string | null; labelSource: "not_recorded" | "device_label" | "folder_label";
  recordedLevels: string[]; field: "endoscopic" | "external"; sha256: string;
};
export const archiveVideos = data as ArchiveVideo[];
export function archiveVideoPath(video: ArchiveVideo) { return "/casebank/video-archive/" + video.slug; }
export function archiveVideoSchema(video: ArchiveVideo) {
  const url = absoluteUrl(archiveVideoPath(video));
  return {
    "@context": "https://schema.org", "@type": "VideoObject", "@id": url + "#video",
    name: video.title, description: video.description, url, contentUrl: absoluteUrl(video.src),
    thumbnailUrl: [absoluteUrl(video.poster)], duration: "PT" + video.durationSeconds + "S",
    uploadDate: videoArchiveUpdated + "T00:00:00+09:00", inLanguage: ["en", "ko"], isAccessibleForFree: true,
    caption: [absoluteUrl(video.captionEn), absoluteUrl(video.captionKo)],
    publisher: { "@id": absoluteUrl("/") + "#hanjin-jang-md" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
}
