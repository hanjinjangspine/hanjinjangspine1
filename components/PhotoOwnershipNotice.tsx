"use client";

import { useEffect } from "react";

const ownerText = "© 장한진 척추연구소 · 무단 복제 금지";
const excludedSource = /(?:logo|icon|favicon|apple-touch|og\/|\.svg(?:\?|$))/i;

function isContentPhoto(image: HTMLImageElement) {
  const source = `${image.currentSrc} ${image.src} ${image.alt}`;
  const box = image.getBoundingClientRect();
  return !excludedSource.test(source) && image.naturalWidth >= 480 && image.naturalHeight >= 320 && box.width >= 160 && box.height >= 100;
}

export default function PhotoOwnershipNotice() {
  useEffect(() => {
    const mark = (image: HTMLImageElement) => {
      if (!isContentPhoto(image)) return;
      const host = image.parentElement;
      if (!host || host.dataset.photoOwnershipMarked === "true") return;
      host.dataset.photoOwnershipMarked = "true";
      host.classList.add("photo-ownership-host");
      const badge = document.createElement("span");
      badge.className = "photo-ownership-badge";
      badge.textContent = ownerText;
      badge.setAttribute("aria-hidden", "true");
      host.appendChild(badge);
    };

    const inspect = () => document.querySelectorAll<HTMLImageElement>("img").forEach(mark);
    const onLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) mark(event.target);
    };
    const observer = new MutationObserver(inspect);
    inspect();
    document.addEventListener("load", onLoad, true);
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = window.setTimeout(inspect, 800);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("load", onLoad, true);
      observer.disconnect();
    };
  }, []);

  return null;
}
