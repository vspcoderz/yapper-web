"use client";

import { useState } from "react";

import Icon from "@/app/components/icons";
import Reveal from "@/app/components/reveal";
import { FAQ } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-[2.1rem] leading-[1.08] tracking-tight text-white sm:text-[2.8rem]">
            Questions.
          </h2>
        </Reveal>

        <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15.5px] font-medium tracking-tight text-white">
                      {item.q}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-white bg-white text-brand"
                          : "border-white/30 text-white/70"
                      }`}
                    >
                      <Icon name="chevronDown" size={14} />
                    </span>
                  </button>
                </h3>

                {/* grid-rows trick animates without a hardcoded height */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-heading-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-[14px] leading-relaxed text-white/75">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
