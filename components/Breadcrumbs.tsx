import Link from "next/link";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="border-b border-academic-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <ol className="flex min-w-0 flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-slate-500">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true" className="text-academic-gold">/</span> : null}
                {index === items.length - 1 ? (
                  <span aria-current="page" className="text-academic-charcoal">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="transition hover:text-academic-navy">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
          <a
            href="https://new-standard.co.kr/"
            className="inline-flex min-h-11 shrink-0 items-center justify-center border border-academic-line px-4 py-2 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold focus:outline-none focus:ring-2 focus:ring-academic-gold focus:ring-offset-2"
            data-hospital-main-link
          >
            새기준병원 본원
          </a>
        </div>
      </nav>
    </>
  );
}
