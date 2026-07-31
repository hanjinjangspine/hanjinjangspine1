import Link from "next/link";
import type { PatientEducationGuide } from "@/lib/patient-education";

type PatientEducationCardProps = {
  guide: PatientEducationGuide;
};

export function PatientEducationCard({ guide }: PatientEducationCardProps) {
  const surface = guide.region === "Cervical spine" ? "bg-[#F5F4F8]" : "bg-[#F2F7F5]";

  return (
    <Link
      href={`/patient-education/${guide.slug}`}
      className={`group block h-full border border-academic-line p-6 transition hover:border-academic-gold hover:bg-white ${surface}`}
    >
      <article>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">{guide.region}</p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-academic-navy group-hover:text-[#6F501B]">
          {guide.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600">{guide.subtitle}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{guide.description}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-academic-navy group-hover:text-[#6F501B]">
          Read the patient guide <span aria-hidden="true" className="ml-2">→</span>
        </span>
      </article>
    </Link>
  );
}
