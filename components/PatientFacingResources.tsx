import {
  newStandardPatientResources,
  type NewStandardPatientResource
} from "@/lib/site";

type PatientFacingResourcesProps = {
  resources?: readonly NewStandardPatientResource[];
  title?: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

export function PatientFacingResources({
  resources = newStandardPatientResources,
  title = "Patient-facing Korean resources at New Standard Hospital",
  description = "These links point to patient-facing Korean information pages on the official New Standard Hospital website. They are provided for institutional context and should not be interpreted as patient-specific medical advice or as predicting individual outcomes.",
  eyebrow = "Official Patient Information",
  className = ""
}: PatientFacingResourcesProps) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <section className={`border border-academic-line bg-white p-6 shadow-sm md:p-8 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">{eyebrow}</p>
      <div className="mt-4 max-w-3xl">
        <h2 className="font-serif text-3xl leading-tight text-academic-navy">{title}</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.href}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-academic-line bg-academic-panel p-5 transition hover:border-academic-gold hover:bg-white"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-academic-gold">
              {resource.topic.replaceAll("-", " ")}
            </span>
            <span className="mt-3 block font-serif text-2xl leading-snug text-academic-navy group-hover:text-academic-gold">
              {resource.title}
            </span>
            <span className="mt-3 block text-sm leading-7 text-slate-600">{resource.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
