"use client";

import { useEffect } from "react";

export default function LilacMotion() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (nodes.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    nodes.forEach((node) => {
      if (node.dataset.revealDelay) {
        node.style.setProperty("--reveal-delay", `${node.dataset.revealDelay}ms`);
      }

      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        requestAnimationFrame(() => {
          node.classList.add("is-visible");
        });
      } else {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
