"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in ms. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * Fades + lifts children into view once, via IntersectionObserver.
 * Renders visible immediately if the observer is unavailable, so content
 * is never permanently hidden by a failed hydration.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const unsupported = typeof IntersectionObserver === "undefined";

    // Reveal immediately for reduced motion / no-observer environments.
    // Done inside a microtask so it isn't a synchronous setState in the
    // effect body (cascading render, per react-hooks/set-state-in-effect).
    if (reducedMotion || unsupported) {
      const id = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as never) : undefined}
    >
      {children}
    </Tag>
  );
}
