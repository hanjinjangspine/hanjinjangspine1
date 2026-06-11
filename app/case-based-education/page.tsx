import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { PatientFacingResources } from "@/components/PatientFacingResources";
import {
  clinicalImageDeidentificationChecklist,
  educationalCases,
  type CaseExample
} from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { getNewStandardPatientResources } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Case-Based Education | Endoscopic Spine Surgery",
  description:
    "De-identified educational case frameworks for biportal endoscopic decompression, UBE-TLIF, revision endoscopic lumbar interbody fusion, adjacent segment disease, cervical spondylotic myelopathy, and UBE-ULBD and biportal endoscopic TLIF for multilevel lumbar stenosis with L6 lumbarization and corrected level numbering.",
  path: "/case-based-education",
  keywords: ["case-based education", "biportal endoscopic decompression", "UBE-TLIF cases", "revision endoscopic decompression"]
});

const caseFields: Array<{ label: string; key: keyof CaseExample }> = [
  { label: "Diagnosis", key: "diagnosis" },
  { label: "Procedure", key: "procedure" },
  { label: "Surgical level", key: "surgicalLevel" },
  { label: "Clinical presentation", key: "clinicalPresentation" },
  { label: "Neurologic findings", key: "neurologicFindings" },
  { label: "Conservative treatment summary", key: "conservativeTreatmentSummary" },
  { label: "Imaging summary", key: "imagingSummary" },
  { label: "Surgical rationale", key: "surgicalRationale" },
  { label: "Operative note summary", key: "operativeNoteSummary" },
  { label: "Operative time", key: "operativeTime" },
  { label: "Estimated blood loss", key: "estimatedBloodLoss" },
  { label: "Hospital stay", key: "hospitalStay" },
  { label: "Complications", key: "complications" },
  { label: "Postoperative course", key: "postoperativeCourse" },
  { label: "Postoperative imaging summary", key: "postoperativeImagingSummary" },
  { label: "Educational point", key: "educationalPoint" }
];

const caseDisclaimer =
  "This case is presented for educational discussion only. It is de-identified and should not be interpreted as predicting a similar clinical course in another patient.";
const imagesPendingNote = "De-identified clinical images will be added after editorial review.";

export default function CaseBasedEducationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Case-Based Education", href: "/case-based-education" }]} />
      <PageHeader
        eyebrow="Case-Based Education"
        title="Six de-identified educational case frameworks"
        description="Case pages document diagnosis, clinical presentation, neurologic findings, imaging, procedure details, operative note summaries, postoperative course, and educational points without endorsement or promotional comparison language."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 border border-academic-line bg-academic-panel p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
            De-identification Notice
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            All educational cases on this page are de-identified and presented for academic discussion. They are not patient testimonials, outcome predictions, or advertisements for a particular outcome. Clinical decisions require individualized evaluation by a qualified physician.
          </p>
          <div className="mt-6 border-t border-academic-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
              Clinical Image Standard
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
              {clinicalImageDeidentificationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <PatientFacingResources
          resources={getNewStandardPatientResources([
            "spine-center",
            "advanced-endoscopy",
            "ube-tlif",
            "revision",
            "cervical-myelopathy"
          ])}
          className="mb-8"
          title="Related patient-facing Korean information"
          description="For patient-facing Korean information about related conditions and treatment decision-making, see the official New Standard Hospital pages below. These links are provided for institutional context and are separate from the de-identified educational case materials on this site."
        />
        <div className="grid gap-8">
          {educationalCases.map((caseExample) => {
            const images = caseExample.images ?? [];
            const shouldRenderImages = caseExample.imagesAvailable && images.length > 0;
            const imageGroups = [
              {
                title: "Clinical History Summary",
                images: images.filter((image) => image.type === "history")
              },
              {
                title: "Preoperative Images",
                images: images.filter((image) => image.type === "preoperative")
              },
              {
                title: "Radiographic and MRI Image Set",
                images: images.filter((image) => image.type === "imaging")
              },
              {
                title: "Postoperative Images",
                images: images.filter((image) => image.type === "postoperative")
              }
            ].filter((group) => group.images.length > 0);

            return (
              <article key={caseExample.title} className="border border-academic-line bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
                  {caseExample.caseNumber}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-academic-navy">{caseExample.title}</h2>
                <p className="mt-2 text-sm font-semibold text-academic-charcoal">{caseExample.shortTitle}</p>
                <dl className="mt-7 grid gap-5 lg:grid-cols-2">
                  {caseFields.map(({ label, key }) => {
                    const value = caseExample[key];

                    if (typeof value !== "string" || value.length === 0) {
                      return null;
                    }

                    return (
                      <div key={label} className="border-l-2 border-academic-line pl-4">
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-academic-gold">{label}</dt>
                        <dd className="mt-2 text-sm leading-7 text-slate-600">{value}</dd>
                      </div>
                    );
                  })}
                </dl>

                {shouldRenderImages ? (
                  <div className="mt-7 border-t border-academic-line pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-gold">
                      De-identified Clinical Images
                    </p>
                    <div className="mt-5 grid gap-6">
                      {imageGroups.map((group) => (
                        <section key={group.title}>
                          <h3 className="font-serif text-2xl text-academic-navy">{group.title}</h3>
                          <div className="mt-4 grid gap-5 md:grid-cols-2">
                            {group.images.map((image) => (
                              <figure key={image.src} className="border border-academic-line bg-academic-panel p-3">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={image.width}
                                  height={image.height}
                                  sizes="(min-width: 768px) 50vw, 100vw"
                                  className="h-auto w-full"
                                />
                                <figcaption className="mt-3 text-xs leading-6 text-slate-500">
                                  {image.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="mt-7 border-t border-academic-line pt-5 text-sm leading-7 text-slate-500">
                    {imagesPendingNote}
                  </p>
                )}

                <p className="mt-7 border-t border-academic-line pt-5 text-sm leading-7 text-slate-600">
                  {caseDisclaimer}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
