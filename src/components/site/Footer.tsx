import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { ArchCresting } from "./IndianMotifs";

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
      <ArchCresting tone="dark" className="opacity-80" />

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

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-mist-200 pt-14 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/rvu-logo.svg"
            alt="RV University"
            className="h-14 w-auto opacity-90 sm:h-16"
          />
          <p className="max-w-xl text-xs leading-relaxed text-ink-soft">
            Unofficial concept redesign of the RV University placements page.
            All official information, forms and actions live at{" "}
            <a
              href={RVU_LINKS.placements}
              {...EXTERNAL_LINK_PROPS}
              className="font-medium text-navy-700 underline underline-offset-2"
            >
              rvu.edu.in/placements
            </a>
            .
          </p>
          <a
            href={RVU_LINKS.home}
            {...EXTERNAL_LINK_PROPS}
            className="text-xs font-medium text-navy-700"
          >
            rvu.edu.in ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
