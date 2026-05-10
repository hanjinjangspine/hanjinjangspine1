import type { FaqItem } from "@/lib/schema";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section className="border-t border-academic-line bg-academic-panel">
      <JsonLd data={faqSchema(items)} />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-academic-gold">FAQ</p>
        <h2 className="mt-3 font-serif text-3xl text-academic-navy">Clinical Questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.question} className="border border-academic-line bg-white p-5">
              <h3 className="font-serif text-xl text-academic-navy">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
