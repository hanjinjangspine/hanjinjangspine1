import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "For Referring Physicians | Hanjin Jang, MD",
  description:
    "Physician-facing referral overview for degenerative lumbar spine disease, lumbar spinal stenosis, recurrent disc herniation, adjacent segment disease, and revision cases after previous spinal surgery.",
  path: "/for-referring-physicians",
  keywords: ["referring physicians", "degenerative lumbar spine disease", "revision cases", "lumbar spinal stenosis"]
});

const referralSections = [
  {
    title: "Clinical Evaluation Scope",
    body:
      "Dr. Jang evaluates patients with degenerative lumbar spine disease, lumbar spinal stenosis, recurrent disc herniation, adjacent segment disease, and revision cases after previous spinal surgery."
  },
  {
    title: "Endoscopic Technique Assessment",
    body:
      "His clinical focus is on determining whether endoscopic techniques are indicated based on symptoms, neurologic findings, imaging concordance, patient-specific risk factors, and surgical goals."
  },
  {
    title: "Information Helpful for Review",
    body:
      "Useful referral materials include current MRI, CT when relevant, standing radiographs, flexion-extension views when instability is suspected, prior operative reports, implant details, symptom timeline, neurologic findings, and relevant medical risk factors."
  },
  {
    title: "Professional Communication",
    body:
      "This page is intended for physician-to-physician communication and academic context. Institution-specific referral workflows, phone numbers, email addresses, and secure document transfer instructions can be added before publication."
  }
];

export default function ForReferringPhysiciansPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "For Referring Physicians", href: "/for-referring-physicians" }
        ]}
      />
      <PageHeader
        eyebrow="For Referring Physicians"
        title="Professional referral context for complex degenerative lumbar disease"
        description="A physician-facing overview of Dr. Jang's clinical focus in endoscopic spine surgery, revision evaluation, and patient-specific surgical decision-making."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="grid gap-8">
          {referralSections.map((section) => (
            <article key={section.title} className="border-l-2 border-academic-line pl-6">
              <h2 className="font-serif text-3xl text-academic-navy">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
