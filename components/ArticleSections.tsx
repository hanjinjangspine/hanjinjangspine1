import type { ContentSection } from "@/lib/content";

type ArticleSectionsProps = {
  sections: ContentSection[];
};

export function ArticleSections({ sections }: ArticleSectionsProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <div className="grid gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-3xl leading-tight text-academic-navy">{section.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            {section.video ? (
              <figure className="mt-6">
                <video
                  className="w-full border border-academic-line bg-black"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={section.video.poster}
                  aria-label={section.video.label}
                >
                  <source src={section.video.src} type="video/mp4" />
                  Your browser does not support the video element. This is a de-identified educational operative excerpt.
                </video>
                <figcaption className="mt-3 text-sm leading-7 text-slate-500">{section.video.caption}</figcaption>
              </figure>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
