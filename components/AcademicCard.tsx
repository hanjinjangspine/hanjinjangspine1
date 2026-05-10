import Link from "next/link";
import type { ReactNode } from "react";

type AcademicCardProps = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  children?: ReactNode;
};

export function AcademicCard({ title, description, href, meta, children }: AcademicCardProps) {
  const content = (
    <article className="h-full border border-academic-line bg-white p-6 shadow-sm transition hover:border-academic-gold">
      {meta ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">{meta}</p> : null}
      <h3 className="font-serif text-2xl leading-snug text-academic-navy">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}
