/**
 * Thin-line wireframe decoration. Strokes only no fills, no gradients.
 * Purely aria-hidden decoration; every SVG here is `currentColor`.
 */

type Props = {
  className?: string;
  /** Stroke opacity. */
  opacity?: number;
  strokeWidth?: number;
};

/** Concentric arcs the reference layout's circle motif. */
export function WireframeCircles({
  className = "",
  opacity = 0.22,
  strokeWidth = 1,
}: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="300" cy="300" r="230" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="300" cy="300" r="170" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="300" cy="300" r="50" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* Crosshairs */}
      <path d="M300 0v60M300 540v60M0 300h60M540 300h60" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Wireframe app window channels, header, message lines. */
export function WireframeWindow({
  className = "",
  opacity = 0.26,
  strokeWidth = 1,
}: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 420 300"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <rect x="1" y="1" width="418" height="298" rx="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M1 36h418" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M116 36v262" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M340 36v262" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* title bar dots */}
      <circle cx="20" cy="18.5" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="33" cy="18.5" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="46" cy="18.5" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* sidebar rows */}
      <path d="M18 60h78M18 80h58M18 100h70M18 124h48" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <rect x="12" y="92" width="92" height="18" rx="4" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* message lines */}
      <circle cx="136" cy="60" r="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M152 56h84M152 64h52" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M136 88h180M136 100h150M136 112h164" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="136" cy="140" r="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M152 136h72M152 144h60" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M136 168h168M136 180h120" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* composer */}
      <rect x="130" y="252" width="196" height="30" rx="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="308" cy="267" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* member list */}
      <circle cx="358" cy="60" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M370 60h28M358 84h40M358 108h30" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Two overlapping speech bubbles, outlined. */
export function WireframeBubbles({
  className = "",
  opacity = 0.24,
  strokeWidth = 1,
}: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 200"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M20 24a16 16 0 0 1 16-16h132a16 16 0 0 1 16 16v58a16 16 0 0 1-16 16H74l-26 22V98H36a16 16 0 0 1-16-16Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M52 44h84M52 62h52" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M152 92a16 16 0 0 1 16-16h116a16 16 0 0 1 16 16v44a16 16 0 0 1-16 16h-24v20l-24-20h-68a16 16 0 0 1-16-16Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M182 112h72M182 130h44" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Grid + orbiting nodes background texture for wide bands. */
export function WireframeGrid({
  className = "",
  opacity = 0.14,
  strokeWidth = 1,
}: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ opacity }}
    >
      {Array.from({ length: 13 }, (_, i) => (
        <path key={`v${i}`} d={`M${i * 100} 0v400`} stroke="currentColor" strokeWidth={strokeWidth} />
      ))}
      {Array.from({ length: 5 }, (_, i) => (
        <path key={`h${i}`} d={`M0 ${i * 100}h1200`} stroke="currentColor" strokeWidth={strokeWidth} />
      ))}
      <circle cx="300" cy="200" r="46" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="700" cy="120" r="26" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="900" cy="300" r="34" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
