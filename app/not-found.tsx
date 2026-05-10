import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-academic-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl text-academic-navy">Page Not Found</h1>
      <p className="mt-5 text-base leading-8 text-slate-600">
        The requested academic resource could not be found.
      </p>
      <Link href="/" className="mt-8 inline-block border border-academic-navy px-5 py-3 text-sm font-medium text-academic-navy">
        Return Home
      </Link>
    </section>
  );
}
