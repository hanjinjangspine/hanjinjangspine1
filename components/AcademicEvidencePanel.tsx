import Link from "next/link";
import { casebankCards } from "@/lib/casebank";
import { evidenceReferences, publications } from "@/lib/evidence";
import { archiveVideos } from "@/lib/video-archive";

const trustSignals = [
  {
    label: "Authorship and role",
    body: "The physician profile names the current institution and keeps historical publication affiliations separate from the present clinical role.",
    href: "/about#profile-sources",
    link: "Verify the profile"
  },
  {
    label: "Evidence trail",
    body: "Journal records, DOI links, guidelines, and limitations are shown with the relevant clinical topics instead of relying on unsupported claims.",
    href: "/evidence-library",
    link: "Open the evidence library"
  },
  {
    label: "Case provenance",
    body: "Each teaching entry identifies its source type, recorded level information, video relationship, and fields that remain unreported.",
    href: "/casebank#count-method",
    link: "Read the counting method"
  },
  {
    label: "Scope and corrections",
    body: "The editorial policy separates academic education from patient-specific advice and provides a route for correction requests.",
    href: "/editorial-policy",
    link: "Read the editorial policy"
  }
] as const;

export function AcademicEvidencePanel() {
  const metrics = [
    { value: casebankCards.length, label: "Published teaching entries", detail: "Open case summaries and source-labelled examples" },
    { value: archiveVideos.length, label: "Open operative excerpts", detail: "A separate video collection; clips are not extra cases" },
    { value: publications.length, label: "Source-linked journal records", detail: "Selected bibliography with author and affiliation notes" },
    { value: evidenceReferences.length, label: "Curated evidence references", detail: "External studies and guidelines with stated limits" }
  ];

  return (
    <section aria-labelledby="evidence-panel-heading" className="border-y border-academic-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">Evidence and editorial method</p>
          <h2 id="evidence-panel-heading" className="mt-3 font-serif text-3xl text-academic-navy">See what supports each part of the profile</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This resource keeps professional identity, published authorship, clinical teaching material, and general patient education in separate collections. Counts describe the collection named beside them and are not a lifetime total or an outcome claim.
          </p>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border border-academic-line bg-academic-panel p-5">
              <dt className="mt-2 text-sm font-semibold leading-6 text-academic-navy">{metric.label}</dt>
              <dd className="mt-2 font-serif text-4xl text-academic-navy">{metric.value}</dd>
              <dd className="mt-2 text-xs leading-6 text-slate-600">{metric.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {trustSignals.map((signal) => (
            <article key={signal.label} className="border-l-2 border-academic-gold pl-5">
              <h3 className="font-serif text-2xl text-academic-navy">{signal.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{signal.body}</p>
              <Link href={signal.href} className="mt-3 inline-flex text-sm font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4">
                {signal.link} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
