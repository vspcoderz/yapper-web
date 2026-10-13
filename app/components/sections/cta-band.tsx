import Image from "next/image";

import Icon from "@/app/components/icons";
import Logo from "@/app/components/logo";
import Reveal from "@/app/components/reveal";
import { WireframeGrid } from "@/app/components/wireframe";
import { APP_URL } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/20 px-6 py-16 sm:px-16 sm:py-20">
        {/* Pattern artwork */}
        <Image
          src="/pattern.png"
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="pointer-events-none object-cover opacity-30"
        />

        {/* Flat dark wash so the type stays readable. No gradient. */}
        <div aria-hidden className="absolute inset-0 bg-[#100f11]/62" />

        {/* Thin line decoration */}
        <WireframeGrid
          className="pointer-events-none absolute inset-0 h-full w-full text-white"
          opacity={0.12}
        />

        {/* Corner ticks */}
        <span
          aria-hidden
          className="absolute left-6 top-6 h-5 w-5 border-l border-t border-white/40"
        />
        <span
          aria-hidden
          className="absolute right-6 top-6 h-5 w-5 border-r border-t border-white/40"
        />
        <span
          aria-hidden
          className="absolute bottom-6 left-6 h-5 w-5 border-b border-l border-white/40"
        />
        <span
          aria-hidden
          className="absolute bottom-6 right-6 h-5 w-5 border-b border-r border-white/40"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <Logo size={44} className="justify-center" />
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 text-balance text-[2.2rem] leading-[1.06] tracking-tight text-white sm:text-[3.1rem]">
              Your community is already talking.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/80">
              Free to download, free to use, and it stays that way. Bring your
              server with you this afternoon.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white/55 sm:w-auto"
              >
                <Icon name="download" size={17} />
                Download for desktop
                <span className="rounded border border-white/25 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                  Soon
                </span>
              </button>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-[#100f11] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Open in browser
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 text-[12px] text-white/70">
              Free · No credit card · Runs in your browser
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
