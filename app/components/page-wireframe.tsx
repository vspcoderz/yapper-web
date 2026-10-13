/**
 * Page-level wireframe decoration: thin guide lines running down the page
 * gutters, plus tick marks. Strokes only, no fills, no gradients.
 *
 * Renders behind the content (-z-10) and never intercepts pointer events.
 */
export default function PageWireframe() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="mx-auto h-full max-w-6xl px-5 sm:px-8">
        <div className="relative h-full">
          {/* Gutter guides */}
          <span className="absolute -left-9 inset-y-0 w-px bg-white/10" />
          <span className="absolute -right-9 inset-y-0 w-px bg-white/10" />

          {/* Ticks down the left guide */}
          <div className="absolute -left-9 top-0 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <span
                key={`lt${i}`}
                className="absolute left-0 block h-px w-4 bg-white/16"
                style={{ top: `${i * 8.4}%` }}
              />
            ))}
          </div>

          {/* Ticks down the right guide */}
          <div className="absolute -right-9 top-0 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <span
                key={`rt${i}`}
                className="absolute right-0 block h-px w-4 bg-white/16"
                style={{ top: `${i * 8.4}%` }}
              />
            ))}
          </div>

          {/* Crosshair nodes */}
          <span className="absolute -left-9 top-1/4 size-1.5 rounded-full border border-white/25" />
          <span className="absolute -right-9 top-1/4 size-1.5 rounded-full border border-white/25" />
          <span className="absolute -left-9 top-2/3 size-1.5 rounded-full border border-white/25" />
          <span className="absolute -right-9 top-2/3 size-1.5 rounded-full border border-white/25" />
        </div>
      </div>
    </div>
  );
}
