"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LilacHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY + 4;
      const scrollingUp = currentY < lastY - 4;

      if (isOpen || currentY < 120) {
        setIsHidden(false);
      } else if (scrollingDown) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    <header className={`lilac-header ${isHidden ? "is-hidden" : ""}`}>
      <div className="lilac-shell lilac-header-inner" data-reveal="up" data-reveal-delay="320">
        <Link href="/clone" className="lilac-logo">
          Lilac Template
        </Link>

        <nav className="lilac-desktop-nav" aria-label="Primary">
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        <button
          className={`lilac-burger ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="lilac-mobile-menu"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="lilac-mobile-menu"
        className={`lilac-menu-overlay ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="lilac-menu-panel" onClick={(event) => event.stopPropagation()}>
          <a href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </a>
          <a href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
