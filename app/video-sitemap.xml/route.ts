import { operativeVideos } from "@/lib/operative-videos";
import { absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";
function xml(value: string) { return value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char]!); }
export function GET() {
  const entries = operativeVideos.map((video) => `<url><loc>${xml(absoluteUrl("/videos/" + video.slug))}</loc><video:video><video:thumbnail_loc>${xml(absoluteUrl(video.poster))}</video:thumbnail_loc><video:title>${xml(video.title)}</video:title><video:description>${xml(video.description)}</video:description><video:content_loc>${xml(absoluteUrl(video.src))}</video:content_loc><video:duration>${Math.round(video.durationSeconds)}</video:duration><video:publication_date>${video.uploadDate}</video:publication_date><video:requires_subscription>no</video:requires_subscription><video:live>no</video:live></video:video></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${entries}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
