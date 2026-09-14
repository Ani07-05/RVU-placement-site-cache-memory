import type { CSSProperties } from "react";

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
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
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
      style={style}
    >
      {outerPetals}
      {innerPetals}
      <circle cx="50" cy="50" r="7" />
    </svg>
  );
}

/**
 * A filled diya — a boat-shaped oil-lamp base with a teardrop flame
 * above it, a warm architectural counterpart to the floral blooms.
 */
export function DiyaBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <path d="M8 56C8 56 28 70 50 70C72 70 92 56 92 56C89 78 71 94 50 94C29 94 11 78 8 56Z" />
      <path d="M50 52C41 39 41 26 50 8C59 26 59 39 50 52Z" />
    </svg>
  );
}

/**
 * A filled Ashoka-style chakra — a solid rim ring with straight
 * spokes radiating from a hub, the true "wheel" reading distinct
 * from the petal-based blooms.
 */
export function ChakraBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const spokeCount = 16;
  const spokes = Array.from({ length: spokeCount }, (_, i) => (
    <rect
      key={i}
      x="47"
      y="5"
      width="6"
      height="38"
      rx="3"
      transform={`rotate(${(360 / spokeCount) * i} 50 50)`}
    />
  ));

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      fillRule="evenodd"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <path d="M50 2a48 48 0 100 96 48 48 0 000-96zm0 12a36 36 0 110 72 36 36 0 010-72z" />
      {spokes}
      <circle cx="50" cy="50" r="10" />
    </svg>
  );
}

/**
 * A filled jali lattice — a rectangular grid of diamond tiles, the
 * pierced-screen vocabulary of a jharokha window. Tiled rather than
 * radial, so it reads as a lattice, never a flower.
 */
export function JaliGridBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const cols = 4;
  const rows = 4;
  const spacing = 22;
  const size = 10;
  const offset = 14;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = offset + c * spacing;
      const cy = offset + r * spacing;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={cx - size / 2}
          y={cy - size / 2}
          width={size}
          height={size}
          transform={`rotate(45 ${cx} ${cy})`}
        />,
      );
    }
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      {cells}
    </svg>
  );
}

/**
 * A filled gopuram tower — stacked rectangular tiers narrowing
 * toward a peak, a temple-tower silhouette built from straight edges
 * rather than any radial or rounded shape.
 */
export function StepTowerBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const tiers = [82, 66, 50, 34, 18];
  const tierHeight = 15;

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      {tiers.map((width, i) => (
        <rect
          key={i}
          x={50 - width / 2}
          y={4 + i * tierHeight}
          width={width}
          height={tierHeight - 2}
        />
      ))}
    </svg>
  );
}

/**
 * A filled peacock feather — a teardrop plume with a layered "eye",
 * a distinct decorative motif from the geometric and floral marks.
 */
export function PeacockFeatherBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <path d="M50 96C50 96 32 70 32 44C32 22 41 8 50 2C59 8 68 22 68 44C68 70 50 96 50 96Z" />
      <circle cx="50" cy="32" r="13" fillOpacity="0.45" />
      <circle cx="50" cy="32" r="5.5" />
    </svg>
  );
}

/**
 * A filled eight-point star bloom — solid points radiating from a
 * shared centre, the ashtakona silhouette as a watermark instead of
 * an outline.
 */
export function StarBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const spikes = 8;
  const outerR = 46;
  const innerR = 20;
  const points: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / spikes) * i - Math.PI / 2;
    points.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <polygon points={points.join(" ")} />
    </svg>
  );
}

/**
 * A filled octagram — two overlapping solid squares forming an
 * eight-point Mughal jali star, flat-edged and geometric rather than
 * the spiked ashtakona or any petal shape.
 */
export function OctagramBloom({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <rect x="18" y="18" width="64" height="64" />
      <rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" />
    </svg>
  );
}

/**
 * A spinning lotus-petal chakra — the same filled petal shape as
 * LotusBloom, layered into two staggered rings around a hub, sized to
 * read cleanly while rotating via .animate-chakra-spin.
 */
export function PetalChakra({
  tone = "dark",
  className = "",
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const outerCount = 14;
  const innerCount = 14;
  const outerPetals = Array.from({ length: outerCount }, (_, i) => (
    <path
      key={`outer-${i}`}
      d="M50 3C60 17 60 31 50 41C40 31 40 17 50 3Z"
      transform={`rotate(${(360 / outerCount) * i} 50 50)`}
    />
  ));
  const innerPetals = Array.from({ length: innerCount }, (_, i) => (
    <path
      key={`inner-${i}`}
      d="M50 19C56 27 56 35 50 41C44 35 44 27 50 19Z"
      transform={`rotate(${(360 / innerCount) * i + 360 / innerCount / 2} 50 50)`}
      opacity="0.55"
    />
  ));

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_FILL[tone]} ${className}`}
      style={style}
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <g fill="currentColor">{outerPetals}</g>
      <g fill="currentColor">{innerPetals}</g>
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

/**
 * A radiating sun medallion (surya) — concentric ring with straight
 * and flame-tipped rays alternating, evoking temple sun-carvings.
 */
export function SunMedallion({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const rayCount = 16;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (360 / rayCount) * i;
    const long = i % 2 === 0;
    return (
      <line
        key={i}
        x1="50"
        y1={50 - 30}
        x2="50"
        y2={50 - (long ? 47 : 40)}
        transform={`rotate(${angle} 50 50)`}
        stroke="currentColor"
        strokeWidth={long ? 1.6 : 1.1}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="1.1" />
      {rays}
    </svg>
  );
}

/**
 * A curling creeper vine (bel-buti) that climbs one edge, with small
 * leaf buds branching off — a textile-border flourish rather than a
 * medallion.
 */
export function VineFlourish({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <path
        d="M12 96C40 92 28 68 50 60C72 52 60 28 88 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {[
        [20, 88, -20],
        [38, 76, 10],
        [56, 56, -15],
        [74, 34, 20],
        [86, 22, -10],
      ].map(([cx, cy, rot], i) => (
        <path
          key={i}
          d="M0 0C5 -6 5 -14 0 -20C-5 -14 -5 -6 0 0Z"
          transform={`translate(${cx} ${cy}) rotate(${rot})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      ))}
    </svg>
  );
}

/**
 * An eight-point star (ashtakona) built from two overlapping squares —
 * a Mughal-jaali star motif, distinct from the round chakra medallion.
 */
export function StarburstMotif({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <rect x="26" y="26" width="48" height="48" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <rect
        x="26"
        y="26"
        width="48"
        height="48"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        transform="rotate(45 50 50)"
      />
      <circle cx="50" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

/**
 * An interlocking kolam knot — a continuous looped-line lattice drawn
 * around a dot grid, like a threshold rangoli sketch.
 */
export function KolamKnot({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dots: [number, number][] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      dots.push([20 + c * 20, 20 + r * 20]);
    }
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill="currentColor" stroke="none" />
      ))}
      <path
        d="M20 20C36 20 24 40 40 40C56 40 44 20 60 20C76 20 64 40 80 40C64 40 76 60 60 60C44 60 56 40 40 40C24 40 36 60 20 60C4 60 16 40 0 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/**
 * A diya (oil lamp) silhouette with a teardrop flame — a small, warm
 * corner motif rather than a symmetric medallion.
 */
export function DiyaGlow({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <path
        d="M20 62C20 78 34 88 50 88C66 88 80 78 80 62C68 68 58 64 50 64C42 64 32 68 20 62Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="50" cy="64" r="4" fill="currentColor" stroke="none" />
      <path
        d="M50 52C44 42 44 32 50 20C56 32 56 42 50 52Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/**
 * A single booti sprig — a small three-leaf floral bud used as a
 * sparse corner accent, quieter than the full lotus bloom.
 */
export function BootiSprig({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${TONE_STROKE[tone]} ${className}`}
    >
      <path d="M50 90V50" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M50 50C50 30 38 22 24 20C26 36 36 48 50 50Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M50 50C50 30 62 22 76 20C74 36 64 48 50 50Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M50 38C50 24 44 16 36 12C40 24 44 32 50 38Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
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
