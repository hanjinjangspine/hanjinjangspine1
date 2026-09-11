import { getEvidence } from "@/lib/evidence";
export function EvidenceReferences({ ids }: { ids: readonly string[] }) {
  return <section className="border-t border-academic-line pt-8">
    <h2 className="font-serif text-3xl text-academic-navy">Evidence and further reading</h2>
    <p className="mt-3 text-sm leading-7 text-slate-600">These sources provide clinical context. They are separate from the source records for this case and do not verify its outcome.</p>
    <ol className="mt-6 grid gap-5">
      {getEvidence(ids).map((item) => <li key={item.id} className="border-l-2 border-academic-gold pl-5">
        <p className="text-xs font-semibold text-academic-gold">{item.kind}</p>
        <a className="mt-2 block font-semibold text-academic-navy underline underline-offset-4" href={item.href}>{item.title}</a>
        <p className="mt-2 text-sm text-slate-600">{item.citation}</p>
        <p className="mt-2 text-sm leading-7 text-slate-600">{item.context}</p>
        <p className="mt-2 text-sm leading-7 text-slate-600"><strong>Applicability:</strong> {item.limitation}</p>
      </li>)}
    </ol>
  </section>;
}

