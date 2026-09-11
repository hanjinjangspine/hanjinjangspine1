import { levelCountLabel, type CaseLevels } from "@/lib/casebank-levels";

export function CaseLevelSummary({ levels }: { levels: CaseLevels }) {
  const groups = [["Treated levels", levels.treated], ["Decompression", levels.decompression], ["New fusion", levels.fusion]] as const;
  return <section id="levels" className="mt-7 border border-academic-line p-6">
    <h2 className="font-serif text-2xl text-academic-navy">Surgical levels and level count</h2>
    <dl className="mt-5 grid gap-5 sm:grid-cols-3">{groups.map(([label, values]) => <div key={label}>
      <dt className="text-sm font-semibold text-academic-navy">{label}</dt>
      <dd className="mt-2 text-lg font-semibold text-academic-navy">{values?.length === 0 ? "None described" : levelCountLabel(values)}</dd>
      {values?.length ? <dd className="mt-1 text-sm leading-7 text-slate-600">{values.join(" · ")}</dd> : null}
    </div>)}</dl>
    {levels.construct ? <p className="mt-5 text-sm leading-7 text-slate-700">Final construct span: {levelCountLabel(levels.construct)} ({levels.construct.join(" · ")}).</p> : null}
    <p className="mt-5 text-sm leading-7 text-slate-600">{levels.note}</p>
    <p className="mt-3 text-xs leading-6 text-slate-500">One level means one treated motion segment, such as L4-L5. Decompression and fusion can overlap; their counts are not added. Counts follow the source description and have not been re-audited against private charts.</p>
  </section>;
}
