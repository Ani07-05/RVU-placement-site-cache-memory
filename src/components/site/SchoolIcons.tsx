type IconProps = { className?: string };

/** School of Computer Science & Engineering, a filled circuit chip. */
export function ChipIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="9.2" y="9.2" width="5.6" height="5.6" rx="1" fillOpacity="0.4" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="1.5" width="1.7" height="3.2" rx="0.8" />
      <rect x="13.3" y="1.5" width="1.7" height="3.2" rx="0.8" />
      <rect x="9" y="19.3" width="1.7" height="3.2" rx="0.8" />
      <rect x="13.3" y="19.3" width="1.7" height="3.2" rx="0.8" />
      <rect x="1.5" y="9" width="3.2" height="1.7" rx="0.8" />
      <rect x="1.5" y="13.3" width="3.2" height="1.7" rx="0.8" />
      <rect x="19.3" y="9" width="3.2" height="1.7" rx="0.8" />
      <rect x="19.3" y="13.3" width="3.2" height="1.7" rx="0.8" />
    </svg>
  );
}

/** School of Economics & Business, solid ascending bars. */
export function BarsIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2" y="15" width="4" height="7" rx="1" />
      <rect x="8.5" y="10.5" width="4" height="11.5" rx="1" />
      <rect x="15" y="6" width="4" height="16" rx="1" fillOpacity="0.55" />
    </svg>
  );
}

/** School of Design & Innovation, a solid compass ring with needle. */
export function CompassIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 3.4a7.6 7.6 0 110 15.2 7.6 7.6 0 010-15.2z" />
      <path
        fillRule="nonzero"
        d="M14.9 8.2 10.4 13l1.1 1.1L16 9.6l-1.1-1.4Z"
      />
      <circle fillRule="nonzero" cx="12" cy="12" r="1.4" />
    </svg>
  );
}

/** School of Law, a filled scale of justice. */
export function ScaleIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="11.15" y="1.5" width="1.7" height="17" rx="0.6" />
      <rect x="7" y="19.5" width="10" height="2.2" rx="1.1" />
      <rect x="4" y="6.1" width="6.3" height="1.5" rx="0.6" />
      <rect x="13.7" y="6.1" width="6.3" height="1.5" rx="0.6" />
      <path d="M4 6.8 1.6 11.9a2.6 2.6 0 005 0L4 6.8Z" />
      <path d="M20 6.8l-2.4 5.1a2.6 2.6 0 005 0L20 6.8Z" />
    </svg>
  );
}

/** School of Liberal Arts & Sciences, a filled open book. */
export function BookIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 5.6C10 4 7.4 3.3 5 3.5v14.6c2.4-.2 5 .5 7 2.1V5.6Z" fillOpacity="0.55" />
      <path d="M12 5.6c2-1.6 4.6-2.3 7-2.1v14.6c-2.4-.2-5 .5-7 2.1V5.6Z" />
    </svg>
  );
}

/** School of Film, Media & Creative Arts, a filled clapperboard. */
export function ClapperIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="10" width="18" height="10.5" rx="1.3" />
      <path d="M3.3 9 4.6 4.2h2.1L5.4 9H3.3Z" />
      <path d="M8.1 9 9.4 4.2h2.1L10.2 9H8.1Z" />
      <path d="M12.9 9l1.3-4.8h2.1L15 9h-2.1Z" />
      <path d="M17.7 9 19 4.2h1.7c.7 0 1.2.5 1.2 1.2V9h-4.2Z" />
    </svg>
  );
}
