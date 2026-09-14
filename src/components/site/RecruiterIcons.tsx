import type { ReactNode } from "react";

type IconProps = { className?: string };

const wrap = (children: ReactNode) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

/** MNCs, a multi-storey office tower. */
export function TowerIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <rect x="6" y="3" width="12" height="18" rx="1" />
          <path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" strokeWidth="2" />
          <path d="M10 21v-3h4v3" />
        </>,
      )}
    </span>
  );
}

/** GCCs, a globe with connecting nodes. */
export function GlobeIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </>,
      )}
    </span>
  );
}

/** Tech, brackets around a slash, code editor shorthand. */
export function CodeBracketsIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
          <path d="M14 4 10 20" strokeWidth="1.3" />
        </>,
      )}
    </span>
  );
}

/** Consulting, a handshake. */
export function HandshakeIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M2 12l5-4 4 3 3-3 4 3 4-3" />
          <path d="M8 11l3 3-2 2-4-3M16 11l-3 3 2 2 4-3" />
        </>,
      )}
    </span>
  );
}

/** Financial, a stacked coin / rupee note. */
export function CoinStackIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </>,
      )}
    </span>
  );
}

/** Startups, a launching rocket. */
export function RocketIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M12 3c3 2 5 6 4 11l-4 4-4-4c-1-5 1-9 4-11Z" />
          <circle cx="12" cy="10" r="1.6" />
          <path d="M9 16l-3 5M15 16l3 5M9 21l3-2 3 2" />
        </>,
      )}
    </span>
  );
}
