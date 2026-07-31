import { PatientEducationCard } from "@/components/PatientEducationCard";
import { getPatientEducationGuide, type PatientEducationGuide } from "@/lib/patient-education";

type PatientGuideLinksProps = {
  slugs: string[];
  title?: string;
  description?: string;
  className?: string;
};

export function PatientGuideLinks({
  slugs,
  title = "Related English patient guides",
  description = "These general patient guides explain symptoms, warning signs, treatment options, and questions to discuss during an individual evaluation.",
  className = ""
}: PatientGuideLinksProps) {
  const guides = slugs
    .map((slug) => getPatientEducationGuide(slug))
    .filter((guide): guide is PatientEducationGuide => Boolean(guide));

  if (guides.length === 0) {
    return null;
  }

  return (
    <section className={`border border-academic-line bg-[#F7FAF9] p-6 md:p-8 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Patient Education</p>
      <h2 className="mt-3 font-serif text-3xl text-academic-navy">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <PatientEducationCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}
