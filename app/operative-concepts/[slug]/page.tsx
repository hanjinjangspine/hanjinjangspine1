import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSections } from "@/components/ArticleSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { operativeConcepts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findConcept(slug: string) {
  return operativeConcepts.find((concept) => concept.slug === slug);
}

export function generateStaticParams() {
  return operativeConcepts.map((concept) => ({
    slug: concept.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = findConcept(slug);

  if (!concept) {
    return createMetadata({
      title: "Operative Concept Not Found",
      description: "The requested operative concept could not be found.",
      path: "/operative-concepts"
    });
  }

  return createMetadata({
    title: `${concept.title} | Hanjin Jang, MD`,
    description: concept.excerpt,
    path: `/operative-concepts/${concept.slug}`,
    keywords: concept.keywords,
    type: "article"
  });
}

export default async function OperativeConceptPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = findConcept(slug);

  if (!concept) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: concept.title,
          description: concept.excerpt,
          path: `/operative-concepts/${concept.slug}`,
          keywords: concept.keywords
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Operative Concepts", href: "/operative-concepts" },
          { name: concept.title, href: `/operative-concepts/${concept.slug}` }
        ]}
      />
      <PageHeader eyebrow="Operative Concept" title={concept.title} description={concept.excerpt} />
      <ArticleSections sections={concept.sections} />
    </>
  );
}
