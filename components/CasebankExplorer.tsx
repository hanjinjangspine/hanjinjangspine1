"use client";
import Link from "next/link";
import { useState } from "react";
import type { CasebankCard } from "@/lib/casebank";

export function CasebankExplorer({ cases }: { cases: CasebankCard[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [procedure, setProcedure] = useState("All");
  const [revision, setRevision] = useState(false);
  const [levelCount, setLevelCount] = useState("All");
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const filtered = cases.filter((item) => {
    const text = [item.title, item.diagnosis, item.question, item.caseNumber, item.region, item.procedureGroup, item.levelNames, item.sourceKind].join(" ").toLowerCase();
    return words.every((word) => text.includes(word)) && (region === "All" || item.region === region) &&
      (procedure === "All" || item.procedureGroup.toLowerCase().includes(procedure.toLowerCase())) && (!revision || item.revision) && (levelCount === "All" || (levelCount === "Not reported" ? item.levelCount === null : item.levelCount === Number(levelCount)));
  });
  function reset() { setQuery(""); setRegion("All"); setProcedure("All"); setRevision(false); setLevelCount("All"); }
  return <div>
    <form role="search" aria-label="Search Casebank" onSubmit={(event) => event.preventDefault()} className="grid gap-5 border border-academic-line bg-academic-panel p-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <label className="grid gap-2 text-sm font-semibold text-academic-navy">Search cases
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Diagnosis, procedure, level, or case number" className="min-w-0 border border-slate-300 bg-white px-3 py-3 font-normal" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-academic-navy">Spinal region
        <select value={region} onChange={(event) => setRegion(event.target.value)} className="border border-slate-300 bg-white px-3 py-3 font-normal">
          <option>All</option><option>Lumbar</option><option>Cervical</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-academic-navy">Procedure
        <select value={procedure} onChange={(event) => setProcedure(event.target.value)} className="border border-slate-300 bg-white px-3 py-3 font-normal">
          <option>All</option><option>Decompression</option><option>Fusion</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-academic-navy">Treated level count
        <select value={levelCount} onChange={(event) => setLevelCount(event.target.value)} className="border border-slate-300 bg-white px-3 py-3 font-normal">
          <option>All</option><option value="1">1 level</option><option value="2">2 levels</option><option value="3">3 levels</option><option>Not reported</option>
        </select>
      </label>
      <div className="flex flex-wrap items-center gap-5 md:col-span-2 lg:col-span-4">
        <label className="flex items-center gap-2 text-sm text-academic-navy"><input type="checkbox" checked={revision} onChange={(event) => setRevision(event.target.checked)} className="h-4 w-4" /> Revision / adjacent segment cases</label>
        <button type="button" onClick={reset} className="text-sm font-semibold text-academic-navy underline underline-offset-4">Reset filters</button>
      </div>
    </form>
    <p role="status" aria-live="polite" className="my-5 text-sm text-slate-600">{filtered.length} of {cases.length} educational entries</p>
    <div className="grid gap-5 md:grid-cols-2">
      {filtered.map((item) => <article key={item.slug} className="flex flex-col border border-academic-line bg-white p-6 transition hover:border-academic-gold">
        <p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">{item.caseNumber} · {item.region} · {item.sourceKind}</p>
        <h2 className="mt-3 font-serif text-2xl leading-snug text-academic-navy"><Link href={`/casebank/${item.slug}`} className="hover:underline">{item.title}</Link></h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.question}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
          <span className="bg-academic-panel px-3 py-1">{item.procedureGroup}</span>
          {item.revision ? <span className="bg-academic-panel px-3 py-1">Revision</span> : null}
          <span className="bg-academic-panel px-3 py-1">{item.levelCount === null ? "Level count not reported" : `${item.levelCount} ${item.levelCount === 1 ? "level" : "levels"}`}</span>
          {item.imageCount > 0 ? <span className="bg-academic-panel px-3 py-1">{item.imageCount} clinical images</span> : null}
          {item.hasVideo ? <span className="bg-academic-panel px-3 py-1">Operative video</span> : null}
          {item.hasExternalFigure ? <span className="bg-academic-panel px-3 py-1">Original journal figure</span> : null}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.levelNames}</p>
        <Link href={`/casebank/${item.slug}`} className="mt-6 font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">Read case and evidence →</Link>
      </article>)}
    </div>
    {filtered.length === 0 ? <div className="border border-academic-line p-8 text-slate-600"><p>No cases match these filters.</p><button type="button" onClick={reset} className="mt-3 font-semibold underline">Show all cases</button></div> : null}
  </div>;
}

