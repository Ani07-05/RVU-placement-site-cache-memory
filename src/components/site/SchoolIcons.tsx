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

/** School of Computer Science & Engineering — chip / circuit board. */
export function ChipIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
          <circle cx="12" cy="12" r="2" />
        </>,
      )}
    </span>
  );
}

/** School of Economics & Business — rising bar chart. */
export function BarsIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M4 20V13M9.5 20V8M15 20V11M20 20V4" />
          <path d="M3 20h18" />
        </>,
      )}
    </span>
  );
}

/** School of Design & Innovation — compass / pen nib. */
export function CompassIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 8.5 10 14l1.4.6L16 9l-1.5-.5Z" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </>,
      )}
    </span>
  );
}

/** School of Law — scales of justice. */
export function ScaleIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M12 3v18M8 21h8" />
          <path d="M5 7h6M13 7h6" />
          <path d="M5 7 2.5 12a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 5a2.5 2.5 0 0 0 5 0L19 7Z" />
        </>,
      )}
    </span>
  );
}

/** School of Liberal Arts & Sciences — open book. */
export function BookIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M12 6.5c-1.6-1.2-3.8-1.7-6-1.5v12c2.2-.2 4.4.3 6 1.5 1.6-1.2 3.8-1.7 6-1.5V5c-2.2-.2-4.4.3-6 1.5Z" />
          <path d="M12 6.5V18" />
        </>,
      )}
    </span>
  );
}

/** School of Film, Media & Creative Arts — clapperboard. */
export function ClapperIcon({ className = "" }: IconProps) {
  return (
    <span className={className}>
      {wrap(
        <>
          <path d="M4 10.5 5.2 6h13.6l1.2 4.5" />
          <path d="M4 10.5h16V18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7.5Z" />
          <path d="m6 6 1.6 4.5M10 6l1.6 4.5M14 6l1.6 4.5" />
        </>,
      )}
    </span>
  );
}
