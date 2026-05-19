import type { ClinicalFocusItem } from "@/lib/content";
import Link from "next/link";

const fields = [
  ["Clinical problem", "clinicalProblem"],
  ["Surgical concept", "surgicalConcept"],
  ["Indications", "indications"],
  ["Technical considerations", "technicalConsiderations"],
  ["Limitations", "limitations"],
  ["Risks and complications", "risks"],
  ["Educational summary", "educationalSummary"]
] as const;

type ClinicalFocusSectionProps = {
  item: ClinicalFocusItem;
};

export function ClinicalFocusSection({ item }: ClinicalFocusSectionProps) {
  return (
    <section id={item.anchor} className="scroll-mt-28 border-t border-academic-line py-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-academic-gold">Clinical Focus</p>
          <h2 className="mt-3 font-serif text-3xl text-academic-navy">{item.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.summary}</p>
        </div>
        <div className="grid gap-5">
          {fields.map(([label, key]) => (
            <article key={label} className="border-l-2 border-academic-line pl-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-charcoal">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item[key]}</p>
            </article>
          ))}
          {item.relatedResources ? (
            <article className="border-l-2 border-academic-gold pl-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-academic-charcoal">
                Related clinical review
              </h3>
              <div className="mt-3 grid gap-3">
                {item.relatedResources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block border border-academic-line bg-white p-4 transition hover:border-academic-gold"
                  >
                    <p className="font-serif text-xl leading-snug text-academic-navy">{resource.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
