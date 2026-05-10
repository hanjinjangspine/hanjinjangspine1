import type { ReactNode } from "react";
import { SpineMotif } from "@/components/SpineMotif";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-academic-line bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
        <SpineMotif />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-academic-gold">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-academic-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
