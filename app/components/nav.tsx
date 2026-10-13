"use client";

import { useEffect, useState } from "react";

import Icon from "@/app/components/icons";
import Logo from "@/app/components/logo";
import { APP_URL, NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 sm:pt-5">
      {/* Floating bar shrink-to-fit, rounded-lg, 14px/19px gutter */}
      <nav
        aria-label="Main"
        className={`mx-auto flex w-full max-w-[calc(100%-28px)] items-center justify-between gap-2 rounded-lg bg-transparent px-4 py-3 backdrop-blur-xl transition-shadow duration-300 sm:max-w-[calc(100%-38px)] lg:min-w-[880px] lg:max-w-[880px] ${
          scrolled ? "bg-white/8 shadow-[0_10px_34px_-14px_rgba(0,0,0,0.7)]" : ""
        }`}
      >
        <a
          href="#top"
          aria-label="Yapper home"
          className="flex shrink-0 items-center gap-2 rounded-md py-1 pl-1 pr-2 transition-colors hover:bg-white/10"
        >
          <Logo size={30} />
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
            Yapper
          </span>
        </a>

        <ul className="hidden flex-1 items-center justify-center md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-md px-4 py-2.5 text-[14px] font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1.5 rounded-md bg-white px-5 py-2.5 text-[14px] font-semibold text-[#100f11] transition-colors hover:bg-white/90 md:flex"
        >
          Get started
          <Icon name="arrowRight" size={15} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <Icon name={open ? "cancel" : "menu"} size={20} />
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div
          id="mobile-menu"
          className="mx-[14px] mt-2 overflow-hidden rounded-lg bg-black/90 px-2 pb-2 backdrop-blur-xl sm:mx-[19px] md:hidden"
        >
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#100f11]"
          >
            <Icon name="arrowRight" size={16} />
            Open in browser
          </a>
        </div>
      )}
    </header>
  );
}
