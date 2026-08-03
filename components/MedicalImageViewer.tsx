"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";

type MedicalImageViewerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  caption?: string;
  fill?: boolean;
  priority?: boolean;
  mediaClassName?: string;
  imageClassName?: string;
};

export function MedicalImageViewer({
  src,
  alt,
  width,
  height,
  sizes,
  caption,
  fill = false,
  priority = false,
  mediaClassName,
  imageClassName
}: MedicalImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const triggerElement = triggerRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]'
      );

      if (!focusableElements || focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      (previouslyFocused ?? triggerElement)?.focus();
    };
  }, [isOpen]);

  const modal = isOpen && typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            aria-describedby={caption ? dialogDescriptionId : undefined}
            className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-7xl flex-col overflow-hidden border border-white/20 bg-slate-950 shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/20 px-4 py-3 text-white sm:px-5">
              <h2 id={dialogTitleId} className="font-serif text-lg sm:text-xl">
                Original medical image
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-11 items-center justify-center border border-white/40 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-academic-navy focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Close original image viewer"
              >
                Close
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black p-2 sm:p-4">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="100vw"
                unoptimized
                priority
                className="h-auto max-h-[calc(100dvh-12rem)] w-auto max-w-full object-contain"
              />
            </div>

            <div className="grid gap-3 border-t border-white/20 bg-slate-950 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-5">
              {caption ? (
                <p id={dialogDescriptionId} className="max-w-4xl text-sm leading-6 text-slate-200">
                  {caption}
                </p>
              ) : (
                <span />
              )}
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center justify-center border border-white/40 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-academic-navy focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Open original in new window
              </a>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div data-medical-image-viewer>
      <div className={mediaClassName}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imageClassName}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className={imageClassName}
          />
        )}
      </div>
      <div className="flex justify-end border-t border-academic-line bg-white px-3 py-2">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          className="inline-flex min-h-11 items-center gap-2 border border-academic-line px-3 py-2 text-sm font-semibold text-academic-navy transition hover:border-academic-gold hover:text-academic-gold focus:outline-none focus:ring-2 focus:ring-academic-gold focus:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
            <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5M3 8l6-6M21 8l-6-6M3 16l6 6M21 16l-6 6" />
          </svg>
          View original
        </button>
      </div>
      {modal}
    </div>
  );
}
