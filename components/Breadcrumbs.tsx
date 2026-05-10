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
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-3 text-xs uppercase tracking-[0.14em] text-slate-500">
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
      </nav>
    </>
  );
}
