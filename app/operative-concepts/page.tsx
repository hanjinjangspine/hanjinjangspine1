import type { Metadata } from "next";
import { AcademicCard } from "@/components/AcademicCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { operativeConcepts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Operative Concepts | Endoscopic Spine Surgery",
  description:
    "Article-style operative concepts on imaging-symptom concordance, severe lumbar stenosis decompression, endoscopic lumbar fusion boundaries, revision endoscopic visualization, bleeding control, UBE learning curve, and elderly spine surgery.",
  path: "/operative-concepts",
  keywords: ["operative concepts", "endoscopic spine surgery education", "UBE learning curve", "imaging-symptom concordance"]
});

export default function OperativeConceptsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Operative Concepts", href: "/operative-concepts" }]} />
      <PageHeader
        eyebrow="Operative Concepts"
        title="Article-style surgical reasoning notes"
        description="Concise academic pages on the concepts that shape patient selection, technical boundaries, and surgical planning in endoscopic lumbar spine surgery."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {operativeConcepts.map((concept) => (
            <AcademicCard
              key={concept.slug}
              title={concept.title}
              description={concept.excerpt}
              href={`/operative-concepts/${concept.slug}`}
              meta="Article"
            />
          ))}
        </div>
      </section>
    </>
  );
}
