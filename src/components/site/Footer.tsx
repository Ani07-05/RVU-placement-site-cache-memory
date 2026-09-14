import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "University",
    links: [
      { label: "About RVU", href: RVU_LINKS.about },
      { label: "Leadership", href: RVU_LINKS.leadership },
      { label: "Schools & Programmes", href: RVU_LINKS.schoolsProgrammes },
      { label: "Research", href: RVU_LINKS.research },
    ],
  },
  {
    title: "Admissions & Careers",
    links: [
      { label: "Admissions", href: RVU_LINKS.admissions },
      { label: "Careers at RVU", href: RVU_LINKS.careers },
      { label: "Faculty", href: RVU_LINKS.faculty },
      { label: "Life at RVU", href: RVU_LINKS.lifeAtRVU },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Library", href: RVU_LINKS.library },
      { label: "Blog", href: RVU_LINKS.blog },
      { label: "Annual Reports", href: RVU_LINKS.annualReports },
      { label: "Approvals", href: RVU_LINKS.approvals },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Disclosures", href: RVU_LINKS.disclosures },
      { label: "Statutory Committees", href: RVU_LINKS.statutoryCommittees },
      { label: "Grievance Committees", href: RVU_LINKS.universityGrievance },
      { label: "Anti-Ragging Helpline", href: RVU_LINKS.antiRagging },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-mist-50">
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-16 lg:px-8 lg:pt-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold text-navy-700">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...EXTERNAL_LINK_PROPS}
                      className="text-sm text-ink-soft transition-colors hover:text-navy-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-16 flex flex-col items-center gap-6 border-t border-mist-200 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/rvu-logo.svg"
            alt="RV University"
            className="relative z-10 h-24 w-auto shrink-0 sm:h-36 lg:h-44"
          />

          <div className="mt-6 flex h-14 w-full items-start justify-center gap-6 overflow-hidden sm:mt-8 sm:h-20 sm:gap-16 lg:h-24">
            <span
              aria-hidden
              className="font-display font-bold tracking-tight select-none"
              style={{
                fontSize: "clamp(4rem, 9vw, 7rem)",
                lineHeight: 1,
                backgroundImage:
                  "radial-gradient(circle at 28% 24%, rgba(255,255,255,0.55), transparent 42%), linear-gradient(140deg, var(--color-gold-300) 0%, var(--color-gold-600) 45%, var(--color-navy-600) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              प्रज्ञाः
            </span>
            <span
              aria-hidden
              className="font-display font-bold tracking-tight select-none"
              style={{
                fontSize: "clamp(4rem, 9vw, 7rem)",
                lineHeight: 1,
                backgroundImage:
                  "radial-gradient(circle at 72% 24%, rgba(255,255,255,0.55), transparent 42%), linear-gradient(220deg, var(--color-gold-300) 0%, var(--color-gold-600) 45%, var(--color-navy-600) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              धीराः
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
