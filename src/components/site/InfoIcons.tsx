type IconProps = { className?: string };

/** Aptitude & Technical Prep — a filled checklist. */
export function AptitudeIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="4" y="2.5" width="16" height="19" rx="2" fillOpacity="0.35" />
      <rect x="7.5" y="7" width="9" height="1.8" rx="0.9" />
      <rect x="7.5" y="11.1" width="9" height="1.8" rx="0.9" />
      <rect x="7.5" y="15.2" width="6" height="1.8" rx="0.9" />
    </svg>
  );
}

/** Mock Interviews — a filled person silhouette. */
export function InterviewIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="8" r="4.2" />
      <path d="M3.5 21c0-4.6 3.8-8.3 8.5-8.3s8.5 3.7 8.5 8.3H3.5Z" fillOpacity="0.35" />
    </svg>
  );
}

/** Resume & Profile Clinic — a filled document with a folded corner. */
export function ResumeIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 2.5h7.5L19 8v13.5H6Z" fillOpacity="0.35" />
      <path d="M13.5 2.5V8H19Z" />
      <rect x="8.3" y="11.8" width="8.4" height="1.7" rx="0.85" />
      <rect x="8.3" y="15.4" width="8.4" height="1.7" rx="0.85" />
    </svg>
  );
}

/** Soft Skills & PPT — a filled checkmark badge with ribbon tails. */
export function SoftSkillsIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.4 14.6 5.6 21.5l5-2.1 1.2 2 2.2-5.1Z" fillOpacity="0.35" />
      <circle cx="12" cy="9" r="6.5" fillOpacity="0.35" />
      <path d="M8.9 9.1 10.9 11 15.3 6.4l1.3 1.2-6 6.3-3.6-3.6Z" />
    </svg>
  );
}

/** Dedicated support office — a filled office building silhouette. */
export function SupportOfficeIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 10.5 12 3l8 7.5Z" />
      <rect x="4" y="10.5" width="16" height="10.5" rx="1.5" fillOpacity="0.35" />
      <rect x="9.2" y="14.5" width="5.6" height="6.5" rx="1" />
    </svg>
  );
}

/** Consistent communication — a filled envelope. */
export function CommunicationIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" fillOpacity="0.35" />
      <path d="M3 6.3 12 13 21 6.3 19.8 4.6 12 10.4 4.2 4.6Z" />
    </svg>
  );
}
