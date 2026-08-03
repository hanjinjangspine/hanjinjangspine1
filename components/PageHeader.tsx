import type { ReactNode } from "react";
import { MedicalImageViewer } from "@/components/MedicalImageViewer";
import { SpineMotif } from "@/components/SpineMotif";

type PageHeaderImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  eyebrowTone?: "academic" | "patient";
  image?: PageHeaderImage;
};

export function PageHeader({ eyebrow, title, description, children, eyebrowTone = "academic", image }: PageHeaderProps) {
  return (
    <section className="border-b border-academic-line bg-white" data-page-hero>
      <div className="mx-auto grid max-w-6xl items-center gap-7 px-5 py-10 md:gap-8 md:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12 lg:py-14">
        <div className="order-1 min-w-0 md:order-2 lg:order-1">
          {eyebrow ? (
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
                eyebrowTone === "patient" ? "text-[#6F501B]" : "text-academic-gold"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-serif text-4xl leading-tight text-academic-navy lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>

        <div className="order-2 min-w-0 md:order-1 lg:order-2">
          {image ? (
            <figure className="mx-auto w-full max-w-[34rem] overflow-hidden border border-academic-line bg-academic-panel shadow-academic lg:max-w-[30rem]">
              <MedicalImageViewer
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                caption={image.caption}
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) 34rem, 30rem"
                mediaClassName="relative aspect-[16/10] w-full md:aspect-[4/3] lg:aspect-[3/2]"
                imageClassName="object-contain"
              />
              {image.caption ? (
                <figcaption className="border-t border-academic-line bg-white px-4 py-3 text-sm leading-6 text-slate-600">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : (
            <div className="mx-auto aspect-[16/10] w-full max-w-[34rem] overflow-hidden border border-academic-line bg-academic-panel shadow-academic lg:max-w-[30rem]">
              <SpineMotif />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
