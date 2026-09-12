import Link from "next/link";
import { siteConfig } from "@/lib/site";
export function AcademicTrust() {
  return <aside aria-label="About this academic resource" className="border-t border-academic-line bg-[#f5f7f8]">
    <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-[1.4fr_1fr]">
      <div><p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">About this academic resource</p>
        <p className="mt-3 font-semibold text-academic-navy"><Link href="/about">Hanjin Jang, MD · 장한진</Link></p>
        <p className="mt-2 text-sm leading-7 text-slate-600">Neurosurgeon · Founder and Chief Director, New Standard Hospital, Yongin, South Korea. <a href={siteConfig.officialKoreanProfile.patientProfileUrl} className="underline underline-offset-4">Official institutional profile</a></p>
      </div>
      <div className="text-sm leading-7 text-slate-600"><p>Read the case record alongside its evidence and limitations. Publication dates, website updates, and clinical review dates have different meanings.</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-semibold text-academic-navy"><Link href="/casebank">Casebank</Link><Link href="/videos">Operative videos</Link><Link href="/publications">Publications</Link><Link href="/evidence-library">Evidence library</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/contact#corrections">Suggest a correction</Link></div>
      </div>
    </div>
  </aside>;
}
