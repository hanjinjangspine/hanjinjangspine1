import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-academic-line bg-academic-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            Physician-authored academic resource on endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.
          </p>
          <p className="mt-5 max-w-md text-xs uppercase leading-6 tracking-[0.14em] text-slate-400">
            Hanjin Jang, MD · Founder and Chief Director,{" "}
            <a
              href="https://new-standard.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              New Standard Hospital
            </a>{" "}
            · Yongin, South Korea
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Core Topics</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            <li>Biportal Endoscopic Spine Surgery</li>
            <li>UBE-TLIF</li>
            <li>Revision Spine Surgery</li>
            <li>Lumbar Spinal Stenosis</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Site</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/structured-professional-profile" className="text-slate-300 hover:text-white">Structured Professional Profile</Link></li>
            <li><Link href="/academic-activity" className="text-slate-300 hover:text-white">Academic Activity</Link></li>
            <li><Link href="/editorial-policy" className="text-slate-300 hover:text-white">Editorial Policy</Link></li>
            <li><Link href="/contact" className="text-slate-300 hover:text-white">Professional Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs leading-6 text-slate-400">
          This website is an academic professional profile and physician-authored educational resource. It is not patient-specific medical advice, an outcome claim, a platform for individual patient stories, or a substitute for individualized clinical evaluation.
        </div>
      </div>
    </footer>
  );
}
