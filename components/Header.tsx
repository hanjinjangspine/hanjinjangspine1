import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-academic-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="group min-w-0 leading-tight" aria-label="Hanjin Jang, MD home">
          <span className="block font-serif text-xl text-academic-navy group-hover:text-academic-gold">
            Hanjin Jang, MD
          </span>
          <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
            Endoscopic Spine Surgery
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 text-[13px] text-academic-charcoal xl:gap-5 xl:text-sm lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-academic-gold">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-l border-academic-line pl-5 font-medium text-academic-navy transition hover:text-academic-gold"
          >
            Contact
          </Link>
        </nav>

        <details className="relative shrink-0 lg:hidden">
          <summary className="cursor-pointer list-none rounded border border-academic-line px-3 py-2 text-sm font-medium text-academic-navy">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 mt-3 w-72 border border-academic-line bg-white p-3 shadow-academic"
          >
            <div className="grid gap-1">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href} className="px-3 py-2 text-sm text-academic-charcoal hover:bg-academic-panel">
                  {item.label}
                </Link>
              ))}
              <Link href="/structured-professional-profile" className="px-3 py-2 text-sm text-academic-charcoal hover:bg-academic-panel">
                Structured Profile
              </Link>
              <Link href="/contact" className="px-3 py-2 text-sm font-medium text-academic-navy hover:bg-academic-panel">
                Contact
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
