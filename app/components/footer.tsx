import Link from "next/link";

import Icon, { type IconName } from "@/app/components/icons";
import Logo from "@/app/components/logo";
import { FOOTER_COLUMNS } from "@/lib/content";

/**
 * Hardcoded rather than `new Date()`. This prerenders statically and
 * `cacheComponents` rejects unstable values at build time. Bump each January.
 */
const COPYRIGHT_YEAR = 2026;

const SOCIAL: { icon: IconName; label: string }[] = [
  { icon: "globe", label: "Yapper website" },
  { icon: "chat", label: "Yapper community" },
  { icon: "book", label: "Yapper changelog" },
  { icon: "users", label: "Yapper developers" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 border-t border-white/15 py-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo size={34} />
            <p className="mt-4 max-w-[24ch] text-[13px] leading-relaxed text-white/70">
              A free chat app for communities that talk. Servers, channels, DMs
              and voice.
            </p>
            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/75 transition-colors hover:text-white"
            >
              <span className="size-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[12px] font-semibold text-white">
                  {col.heading}
                </h4>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="/"
                        className="text-[13px] text-white/65 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/55">
            © {COPYRIGHT_YEAR} Yapper. Free, and staying that way.
          </p>
          <ul className="flex gap-2">
            {SOCIAL.map(({ icon, label }) => (
              <li key={label}>
                <Link
                  href="/"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-md border border-white/15 text-white/65 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon name={icon} size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-4 pb-2 text-center"
      >
        <p className="font-display text-[clamp(4rem,19vw,17rem)] font-bold leading-[0.8] tracking-[-0.045em] text-white/12">
          Yapper
        </p>
      </div>
    </footer>
  );
}
