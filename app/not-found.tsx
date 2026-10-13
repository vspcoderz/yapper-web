import Link from "next/link";

import Icon from "@/app/components/icons";
import Logo from "@/app/components/logo";
import { WireframeCircles } from "@/app/components/wireframe";
import { APP_URL } from "@/lib/content";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-24 sm:px-8">
      <WireframeCircles
        className="pointer-events-none absolute -right-56 -top-40 h-[520px] w-[520px] text-white"
        opacity={0.18}
      />
      <WireframeCircles
        className="pointer-events-none absolute -bottom-52 -left-40 h-[440px] w-[440px] text-white"
        opacity={0.14}
      />

      <div className="relative flex flex-col items-center text-center">
        <Logo size={40} />

        <p className="mt-8 font-display text-[clamp(4rem,14vw,8rem)] font-bold leading-none tracking-[-0.05em] text-white">
          404
        </p>

        <h1 className="mt-2 text-balance text-[1.6rem] font-semibold tracking-tight text-white sm:text-[2.1rem]">
          This channel doesn&apos;t exist.
        </h1>

        <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-white/75">
          The page you were looking for was moved, renamed, or never existed in
          the first place.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-lg bg-[#100f11] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#2a262b]"
          >
            Back to home
            <Icon
              name="arrowRight"
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Open in browser
          </a>
        </div>
      </div>
    </main>
  );
}
