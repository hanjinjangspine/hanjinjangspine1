import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Professional Contact | Hanjin Jang, MD",
  description:
    "Professional contact page for Hanjin Jang, MD, connected to New Standard Hospital in Yongin, South Korea. Intended for academic correspondence, professional communication, and physician-facing inquiries.",
  path: "/contact",
  keywords: ["Hanjin Jang contact", "New Standard Hospital", "Yongin South Korea", "professional contact"]
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <PageHeader
        eyebrow="Professional Contact"
        title="New Standard Hospital, Yongin, South Korea"
        description="This contact page is intended for academic correspondence, professional communication, and physician-facing inquiries connected to New Standard Hospital. Patient-specific communication should occur only through appropriate clinical and privacy-compliant channels."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <article className="mb-8 border border-academic-line bg-white p-6">
          <h2 className="font-serif text-3xl text-academic-navy">Official Institutional Affiliation</h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Hanjin Jang, MD currently serves as Founder and Chief Director of New Standard Hospital in Yongin, South Korea.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            New Standard Hospital is the official clinical institution associated with Dr. Jang&apos;s current medical practice.
          </p>
          <dl className="mt-6 grid gap-5 text-sm leading-7 text-slate-600">
            <div>
              <dt className="font-semibold text-academic-navy">Physician</dt>
              <dd>Hanjin Jang, MD</dd>
            </div>
            <div>
              <dt className="font-semibold text-academic-navy">Current Role</dt>
              <dd>Founder and Chief Director, New Standard Hospital</dd>
            </div>
            <div>
              <dt className="font-semibold text-academic-navy">Official Clinical Institution</dt>
              <dd>New Standard Hospital</dd>
            </div>
            <div>
              <dt className="font-semibold text-academic-navy">Official Hospital Website</dt>
              <dd>
                <a
                  href="https://new-standard.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4"
                >
                  https://new-standard.co.kr
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-academic-navy">Hospital Address</dt>
              <dd>1539 Jungbu-daero, Cheoin-gu, Yongin-si, Gyeonggi-do, Republic of Korea</dd>
            </div>
          </dl>
          <a
            href="https://new-standard.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex border border-academic-line bg-white px-5 py-3 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold"
          >
            Visit New Standard Hospital Official Website
          </a>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            This website is an academic physician profile and physician-authored educational resource. It is not intended for patient-specific medical advice or outcome guarantees.
          </p>
        </article>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border border-academic-line bg-white p-6">
            <h2 className="font-serif text-3xl text-academic-navy">Institution</h2>
            <dl className="mt-5 grid gap-4 text-sm leading-7 text-slate-600">
              <div>
                <dt className="font-semibold text-academic-navy">Physician</dt>
                <dd>Hanjin Jang, MD</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Role</dt>
                <dd>Founder and Chief Director</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Hospital</dt>
                <dd>New Standard Hospital</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Location</dt>
                <dd>Yongin, South Korea</dd>
              </div>
            </dl>
          </article>
          <article className="border border-academic-line bg-academic-panel p-6">
            <h2 className="font-serif text-3xl text-academic-navy">Professional Contact Fields</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Official institutional website and professional contact context for New Standard Hospital. Patient-specific communication should remain within appropriate clinical and privacy-compliant channels.
            </p>
            <dl className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
              <div>
                <dt className="font-semibold text-academic-navy">Official website</dt>
                <dd>New Standard Hospital</dd>
                <dd>
                  <a
                    href="https://new-standard.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-academic-navy underline decoration-academic-gold underline-offset-4"
                  >
                    https://new-standard.co.kr
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Professional inquiries</dt>
                <dd>Professional inquiries should be directed through the official institutional channels of New Standard Hospital.</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Referring physician channel</dt>
                <dd>Referring physician communication should use privacy-compliant institutional workflows and appropriate clinical privacy channels.</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
    </>
  );
}
