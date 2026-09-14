type Tone = "dark" | "light";

const TONE_STROKE: Record<Tone, string> = {
  dark: "text-navy-700/12",
  light: "text-paper/14",
};

const TONE_FILL: Record<Tone, string> = {
  dark: "text-navy-700/[0.07]",
  light: "text-paper/[0.14]",
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
 * A petal chakra — a wheel whose spokes are lotus-petal shapes
 * (pointed at the hub, pointed at the rim, bulging between) rather
 * than plain lines. Nods to the Konark/Sarnath wheel reimagined as a
 * rangoli bloom. Meant to be spun via the .animate-chakra-spin
 * utility.
 */
export function RangoliMedallion({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const petalCount = 12;
  const hubR = 7;
  const rimR = 46;
  const bulge = 7;

  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (360 / petalCount) * i;
    return (
      <path
        key={i}
        d={`M50 ${50 - hubR} C ${50 - bulge} ${50 - (hubR + rimR) * 0.42}, ${50 - bulge} ${50 - (hubR + rimR) * 0.62}, 50 ${50 - rimR} C ${50 + bulge} ${50 - (hubR + rimR) * 0.62}, ${50 + bulge} ${50 - (hubR + rimR) * 0.42}, 50 ${50 - hubR} Z`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
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
      <circle cx="50" cy="50" r={rimR} fill="none" stroke="currentColor" strokeWidth="1.4" />
      {petals}
      <circle cx="50" cy="50" r={hubR} fill="none" stroke="currentColor" strokeWidth="1.4" />
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
 * A scattered row of paisley (keri/ambi) motifs — the teardrop
 * mango-bud shape common to Kashmiri and Mughal textile borders.
 * Used as a faint horizontal rule between content blocks.
 */
export function PaisleyRow({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const count = 10;
  const width = 60;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${count * width} 40`}
      preserveAspectRatio="none"
      className={`h-6 w-full ${TONE_STROKE[tone]} ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <path
          key={i}
          transform={`translate(${i * width + width / 2 - 8},4)`}
          d="M8 0C13 0 16 5 16 11C16 18 11 24 4 26C10 24 6 16 0 15C4 15 8 11 8 6C8 3.5 8 1.5 8 0Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/**
 * A small lotus-bud corner flourish, tucked into the corner of a
 * stat/bento card — a quiet nod to temple-carving corner brackets
 * rather than a plain empty corner.
 */
export function CornerLotus({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <path
        d="M4 4C20 4 28 12 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 4C4 20 12 28 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 10C16 10 20 16 20 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/**
 * A full lotus bloom rendered as a filled watermark texture — layered
 * outer and inner petal rings around a bud — meant to bleed off a
 * card's corner as a soft decorative motif, echoing rangoli florals.
 */
export function LotusBloom({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const outerPetals = Array.from({ length: 8 }, (_, i) => (
    <path
      key={`outer-${i}`}
      d="M50 6C60 20 60 34 50 46C40 34 40 20 50 6Z"
      transform={`rotate(${i * 45} 50 50)`}
    />
  ));
  const innerPetals = Array.from({ length: 8 }, (_, i) => (
    <path
      key={`inner-${i}`}
      d="M50 22C57 30 57 38 50 46C43 38 43 30 50 22Z"
      transform={`rotate(${i * 45 + 22.5} 50 50)`}
    />
  ));

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
    >
      {outerPetals}
      {innerPetals}
      <circle cx="50" cy="50" r="7" />
    </svg>
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
