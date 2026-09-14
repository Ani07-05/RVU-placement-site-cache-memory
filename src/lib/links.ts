/**
 * Every outbound link on this site points to the real, official RVU page.
 * This is a static, unofficial visual redesign concept. It has no accounts
 * or backend of its own, so most actions hand off to rvu.edu.in — the one
 * exception is `recruiterRegister`, an in-site static page (no submission
 * wiring) that mirrors the recruiter registration form's fields.
 */
export const RVU_LINKS = {
  home: "https://rvu.edu.in/",
  placements: "https://rvu.edu.in/placements/",
  contact: "https://rvu.edu.in/contact/",
  admissions: "https://rvu.edu.in/admissions/",
  schoolsProgrammes: "https://rvu.edu.in/schools-programmes/",
  careers: "https://rvu.edu.in/careers/",
  about: "https://rvu.edu.in/rvu-at-a-glance/",
  leadership: "https://rvu.edu.in/leadership/",
  research: "https://rvu.edu.in/research/",
  library: "https://rvu.edu.in/library/",
  blog: "https://rvu.edu.in/blog/",
  lifeAtRVU: "https://rvu.edu.in/life-at-rvu/",
  annualReports: "https://rvu.edu.in/annual-reports/",
  approvals: "https://rvu.edu.in/approvals/",
  disclosures: "https://rvu.edu.in/disclosures/",
  statutoryCommittees: "https://rvu.edu.in/statutory-committees/",
  universityGrievance: "https://rvu.edu.in/university-grievance-committees/",
  antiRagging: "https://rvu.edu.in/anti-ragging-helpline/",
  faculty: "https://rvu.edu.in/faculty/",
  recruiterRegister: "/recruiters/register",
} as const;

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
