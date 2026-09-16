import Link from "next/link";
import { RVU_LINKS } from "@/lib/links";
import { JaliOverlay, PaisleyRow } from "./IndianMotifs";
import {
  AptitudeIcon,
  InterviewIcon,
  ResumeIcon,
  SoftSkillsIcon,
} from "./InfoIcons";
import { Reveal } from "./Reveal";

const RESOURCES = [
  {
    title: "Aptitude & Technical Prep",
    body: "Practice sets and domain-specific technical prep aligned to the roles recruiters hire for each season.",
    icon: AptitudeIcon,
  },
  {
    title: "Mock Interviews",
    body: "Practice rounds with feedback on communication, domain depth, and case-style problem solving before the real thing.",
    icon: InterviewIcon,
  },
  {
    title: "Resume & Profile Clinic",
    body: "One-on-one review of resumes and LinkedIn profiles so your application reflects your strongest work.",
    icon: ResumeIcon,
  },
  {
    title: "Soft Skills & PPT",
    body: "Mandatory Pre-Placement Training covering communication, behavioural, and networking intelligence.",
    icon: SoftSkillsIcon,
  },
];

export function StudentPrepResources() {
  return (
    <section className="relative overflow-hidden bg-mist-50 py-24 lg:py-32">
      <JaliOverlay tone="dark" className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-4 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            Get placement-ready
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            Resources built around your placement journey.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Everything the Corporate &amp; Alumni Relations (CAR) team runs to
            get you interview-ready, in one place.
          </p>
        </Reveal>

        <PaisleyRow tone="dark" className="mx-auto mb-12 max-w-sm opacity-40" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <Reveal key={resource.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(35,48,57,0.25)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700/[0.06] text-navy-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-700">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {resource.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy-700 px-8 py-10 text-center text-paper sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Eligibility &amp; placement policy
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy-500">
              No backlogs, minimum 80% PPT attendance, and a signed Placement
              Registration &amp; Declaration Form. See the full rules and
              process.
            </p>
          </div>
          <a
            href="#student-process"
            className="shrink-0 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold whitespace-nowrap text-navy-950 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            View process
          </a>
        </Reveal>

        <Reveal className="mt-4 flex flex-col items-center gap-4 rounded-3xl border border-mist-200 bg-paper px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left" delay={80}>
          <div>
            <h3 className="font-display text-lg font-semibold text-navy-700">
              See who&apos;s recruiting this season
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
              Browse the organizations actively hiring from RV University.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/#recruiters"
              className="rounded-full border border-mist-200 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-mist-50"
            >
              Recruiters
            </Link>
            <Link
              href={RVU_LINKS.parentsPage}
              className="rounded-full bg-navy-700/[0.05] px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700/[0.1]"
            >
              For parents ↗
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
