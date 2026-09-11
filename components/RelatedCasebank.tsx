import Link from "next/link";
import { casebankCases } from "@/lib/casebank";
export function RelatedCasebank({ group = "all" }: { group?: "all" | "revision" | "fusion" | "decompression" }) {
  const cases = casebankCases.filter((item) => group === "all" || (group === "revision" ? item.revision : item.procedureGroup.toLowerCase().includes(group))).slice(0,3);
  return <section className="mx-auto max-w-6xl px-5 pb-12">
    <div className="border-t border-academic-line pt-8"><p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">Connect the concept to a case</p><h2 className="mt-3 font-serif text-3xl text-academic-navy">Related Casebank records</h2><p className="mt-3 text-sm leading-7 text-slate-600">Read the documented reasoning, clinical images, and available follow-up alongside the evidence and limitations.</p><div className="mt-5 grid gap-4 md:grid-cols-3">{cases.map((item) => <Link key={item.slug} href={"/casebank/" + item.slug} className="border border-academic-line p-5 hover:border-academic-gold"><span className="text-xs font-semibold text-academic-gold">{item.caseNumber}</span><h3 className="mt-2 font-serif text-xl text-academic-navy">{item.shortTitle}</h3></Link>)}</div><Link href="/casebank" className="mt-5 inline-block text-sm font-semibold underline">All Casebank records →</Link></div>
  </section>;
}
