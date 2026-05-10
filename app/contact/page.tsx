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
            <h2 className="font-serif text-3xl text-academic-navy">Editable Contact Fields</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Add official institutional phone, email, website URL, address, and secure referral instructions after confirmation. Keep patient-specific communication within appropriate clinical and privacy channels.
            </p>
            <dl className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
              <div>
                <dt className="font-semibold text-academic-navy">Official website</dt>
                <dd>Official institutional website to be added after confirmation.</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Professional inquiries</dt>
                <dd>Institutional professional inquiry channel to be added after confirmation.</dd>
              </div>
              <div>
                <dt className="font-semibold text-academic-navy">Referring physician channel</dt>
                <dd>Secure referring physician workflow to be added after confirmation.</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
    </>
  );
}
