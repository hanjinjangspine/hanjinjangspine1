import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { publications, evidenceCheckedDate } from "@/lib/evidence";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import pageDates from "@/lib/page-dates.json";
export const metadata = createMetadata({ title: "Selected Publications | Hanjin Jang, MD", description: "Selected publications with journal citations, DOI links, author spelling, institutional affiliation, and relevance to the academic spine resource.", path: "/publications" });
export default function PublicationsPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Selected Publications — Hanjin Jang, MD", url: absoluteUrl("/publications"), dateModified: pageDates["/publications"], mainEntity: { "@type": "ItemList", numberOfItems: publications.length, itemListElement: publications.map((item, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "ScholarlyArticle", name: item.title, url: item.href, identifier: item.doi } })) } }} />
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Publications", href: "/publications" }]} />
    <PageHeader compact eyebrow="Research · Primary sources" title="Selected publications" description="Traceable journal records connect the professional profile to published academic work. Author names and historical affiliations are shown as recorded by the source." />
    <section className="mx-auto max-w-5xl px-5 py-12">
      <p className="mb-8 text-sm leading-7 text-slate-600">Bibliographic records checked {evidenceCheckedDate}. This is a selected bibliography, not a complete publication count. Historical affiliations belong to the publication period; the current institution is New Standard Hospital.</p>
      <p className="mb-8 text-sm leading-7 text-slate-600">Author order and correspondence details were checked against the original articles on 2026-09-12. These describe published authorship, not a new medical review of this website. <Link href="/about#profile-sources" className="underline">Author identity and current institutional profile →</Link></p>
      <div className="grid gap-7">{publications.map((item) => <article id={item.id} key={item.id} className="scroll-mt-24 border border-academic-line p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-academic-gold">{item.kind}</p>
        <h2 className="mt-3 font-serif text-2xl leading-snug text-academic-navy"><a href={item.href} className="hover:underline">{item.title}</a></h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">{item.citation}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.authorRecord}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600"><strong>Published authorship:</strong> {item.authorship}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.context}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600"><strong>Scope:</strong> {item.limitation}</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a href={item.href} className="underline">Journal / indexed record →</a><a href={"https://doi.org/" + item.doi} className="break-all underline">DOI: {item.doi}</a></div>
      </article>)}</div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Link href="/academic-activity" className="border border-academic-line bg-academic-panel p-6"><strong className="font-serif text-2xl">Presentations and teaching</strong><p className="mt-3 text-sm leading-7 text-slate-600">The presentation archive has its own source and citation status. It is separate from journal publications.</p></Link>
        <Link href="/casebank" className="border border-academic-line bg-academic-panel p-6"><strong className="font-serif text-2xl">Clinical Casebank</strong><p className="mt-3 text-sm leading-7 text-slate-600">Explore case-specific reasoning and the limits of the available clinical observations.</p></Link>
      </div>
    </section>
  </>;
}

