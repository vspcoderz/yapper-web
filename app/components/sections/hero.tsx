import Image from "next/image";

import Icon from "@/app/components/icons";
import Reveal from "@/app/components/reveal";
import { WireframeCircles } from "@/app/components/wireframe";
import { APP_URL, HERO, SCREENSHOTS } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <WireframeCircles
        className="pointer-events-none absolute -right-64 -top-56 h-[560px] w-[560px] text-white"
        opacity={0.16}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal delay={80}>
            <h1 className="text-balance text-[2.9rem] leading-[1.03] tracking-[-0.045em] text-white sm:text-[4.2rem]">
              {HERO.headline[0]}
              <br />
              <span className="text-white">{HERO.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-white/85 sm:text-[16.5px]">
              {HERO.sub}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Desktop client is not shipped yet. */}
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/20 bg-black/25 px-6 py-3.5 text-[15px] font-semibold text-white/50"
              >
                <Icon name="download" size={17} />
                {HERO.primaryCta}
                <span className="rounded border border-white/25 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                  {HERO.primaryCtaNote}
                </span>
              </button>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[15px] font-semibold"
              >
                {HERO.secondaryCta}
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 text-[12px] text-white/70">
              Free, and staying that way. No credit card, no paywall.
            </p>
          </Reveal>
        </div>

        <Reveal delay={340} className="mt-14 sm:mt-16">
          <figure>
            <div className="overflow-hidden rounded-lg border border-white/20 bg-black">
              <Image
                src={SCREENSHOTS.hero.src}
                alt={SCREENSHOTS.hero.alt}
                width={SCREENSHOTS.hero.width}
                height={SCREENSHOTS.hero.height}
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="w-full"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
