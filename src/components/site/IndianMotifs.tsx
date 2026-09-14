type Tone = "dark" | "light";

const TONE_STROKE: Record<Tone, string> = {
  dark: "text-navy-700/12",
  light: "text-paper/14",
};

/**
 * A repeating row of cusped-arch finials, evoking a temple/gopuram
 * cresting line (āmalaka + jharokha silhouettes). Used as a soft
 * section-transition ornament instead of a plain straight border.
 */
export function ArchCresting({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const count = 14;
  const width = 80;
  const items = Array.from({ length: count });

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${count * width} 60`}
      preserveAspectRatio="none"
      className={`h-[38px] w-full ${TONE_STROKE[tone]} ${className}`}
    >
      {items.map((_, i) => {
        const x = i * width;
        return (
          <g key={i} transform={`translate(${x},0)`}>
            <path
              d={`M4 60 C4 30 ${width / 2 - 8} 4 ${width / 2} 4 C${width / 2 + 8} 4 ${width - 4} 30 ${width - 4} 60`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx={width / 2} cy="10" r="2.4" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * A rangoli-style radial medallion (concentric rings, lotus petals,
 * diamond lattice) used as a quiet corner accent on dark hero/CTA
 * surfaces — nods to stepwell and temple ceiling roundels.
 */
export function RangoliMedallion({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const petals = 12;
  const petalEls = Array.from({ length: petals }, (_, i) => {
    const angle = (360 / petals) * i;
    return (
      <path
        key={i}
        d="M50 8 C56 22 56 30 50 40 C44 30 44 22 50 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        transform={`rotate(${angle} 50 50)`}
      />
    );
  });

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {petalEls}
      <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

/**
 * A faint jali (lattice) texture overlay for section backgrounds.
 * Pure CSS background-image (see .bg-jali / .bg-jali-light in
 * globals.css) wrapped for consistent absolute positioning.
 */
export function JaliOverlay({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${
        tone === "dark" ? "bg-jali" : "bg-jali-light"
      } ${className}`}
    />
  );
}

/**
 * A single ogee-arch frame, used to give a stat or media block a
 * silhouette reminiscent of a jharokha window rather than a plain
 * rectangle.
 */
export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M2 60V30C2 12 20 2 50 2C80 2 98 12 98 30V60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
