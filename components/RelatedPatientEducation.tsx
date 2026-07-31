import { PatientEducationCard } from "@/components/PatientEducationCard";
import type { PatientEducationGuide } from "@/lib/patient-education";

type RelatedPatientEducationProps = {
  guides: PatientEducationGuide[];
};

export function RelatedPatientEducation({ guides }: RelatedPatientEducationProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-academic-line bg-academic-panel">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F501B]">Related Patient Guides</p>
        <h2 className="mt-3 font-serif text-3xl text-academic-navy">Continue with a related condition</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <PatientEducationCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
