import Image from "next/image";

import Reveal from "@/app/components/reveal";

export type SplitFeature = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kicker: string;
  title: string;
  body: string;
  /** Which side the screenshot sits on at desktop. */
  flip?: boolean;
};

/**
 * Discord-style alternating feature block:
 * oversized copy on one side, screenshot on the other.
 */
export default function FeatureSplit({
  src,
  alt,
  width,
  height,
  kicker,
  title,
  body,
  flip = false,
}: SplitFeature) {
  const copy = (
    <div className="max-w-lg">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="mt-3 text-balance text-[2.1rem] leading-[1.06] tracking-[-0.035em] text-white sm:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
          {body}
        </p>
      </Reveal>
    </div>
  );

  const shot = (
    <Reveal delay={100}>
      <div className="overflow-hidden rounded-lg border border-white/20 bg-black">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 100vw, 560px"
          className="w-full"
        />
      </div>
    </Reveal>
  );

  return (
    <section className="py-16 sm:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 ${
          flip ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.05fr_1fr]"
        }`}
      >
        {flip ? (
          <>
            <div className="lg:order-2">{copy}</div>
            <div className="lg:order-1">{shot}</div>
          </>
        ) : (
          <>
            {copy}
            {shot}
          </>
        )}
      </div>
    </section>
  );
}
