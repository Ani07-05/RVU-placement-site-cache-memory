import type { ReactElement } from "react";
import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { JaliOverlay, PaisleyRow } from "./IndianMotifs";
import {
  BarsIcon,
  BookIcon,
  ChipIcon,
  ClapperIcon,
  CompassIcon,
  ScaleIcon,
} from "./SchoolIcons";
import { Reveal } from "./Reveal";

type IconComponent = (props: { className?: string }) => ReactElement;

const SCHOOLS: {
  code: string;
  name: string;
  total: number;
  icon: IconComponent;
  ring: string;
  ringSoft: string;
  bar: string;
  courses: { name: string; students: number }[];
}[] = [
  {
    code: "SoCSE",
    name: "School of Computer Science & Engineering",
    total: 737,
    icon: ChipIcon,
    ring: "stroke-gold-500",
    ringSoft: "text-gold-500",
    bar: "bg-gold-500",
    courses: [
      { name: "B.Tech (Hons.)", students: 547 },
      { name: "B.Sc (Hons.)", students: 172 },
      { name: "M.Tech", students: 18 },
    ],
  },
  {
    code: "SoEB",
    name: "School of Economics & Business",
    total: 529,
    icon: BarsIcon,
    ring: "stroke-navy-600",
    ringSoft: "text-navy-600",
    bar: "bg-navy-600",
    courses: [
      { name: "MBA", students: 177 },
      { name: "B.Com (Hons.)", students: 170 },
      { name: "BBA (Hons.)", students: 162 },
      { name: "M.Sc Economics", students: 16 },
      { name: "B.Sc (Hons.) Economics", students: 4 },
    ],
  },
  {
    code: "SDI",
    name: "School of Design & Innovation",
    total: 157,
    icon: CompassIcon,
    ring: "stroke-gold-700",
    ringSoft: "text-gold-700",
    bar: "bg-gold-700",
    courses: [
      { name: "B.Des (Hons.)", students: 123 },
      { name: "M.Des", students: 34 },
    ],
  },
  {
    code: "SoL",
    name: "School of Law",
    total: 105,
    icon: ScaleIcon,
    ring: "stroke-navy-500",
    ringSoft: "text-navy-500",
    bar: "bg-navy-500",
    courses: [
      {
        name: "B.Sc (Hons.) – Criminology, Cyber Law & Forensic Sciences",
        students: 70,
      },
      { name: "LL.M.", students: 35 },
    ],
  },
  {
    code: "SoLAS",
    name: "School of Liberal Arts & Sciences",
    total: 59,
    icon: BookIcon,
    ring: "stroke-gold-300",
    ringSoft: "text-gold-300",
    bar: "bg-gold-300",
    courses: [
      { name: "B.Sc (Hons.) – Psychology", students: 30 },
      { name: "M.Sc – Psychology", students: 23 },
      { name: "B.A. (Hons.) – Politics & International Relations", students: 4 },
      { name: "B.Sc (Hons.) – Environmental Science", students: 2 },
    ],
  },
  {
    code: "SoFMCA",
    name: "School of Film, Media & Creative Arts",
    total: 4,
    icon: ClapperIcon,
    ring: "stroke-navy-800",
    ringSoft: "text-navy-800",
    bar: "bg-navy-800",
    courses: [{ name: "B.Sc (Hons.) – Filmmaking", students: 4 }],
  },
];

const GRAND_TOTAL = SCHOOLS.reduce((sum, s) => sum + s.total, 0);
const MAX_TOTAL = Math.max(...SCHOOLS.map((s) => s.total));

const RING_R = 42;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_R;

function SchoolRing({
  school,
}: {
  school: (typeof SCHOOLS)[number];
}) {
  const pct = school.total / MAX_TOTAL;
  const offset = RING_CIRCUMFERENCE * (1 - pct);
  const Icon = school.icon;

  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={RING_R}
          fill="none"
          strokeWidth="7"
          className="stroke-mist-100"
        />
        <circle
          cx="50"
          cy="50"
          r={RING_R}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
          className={`${school.ring} transition-[stroke-dashoffset] duration-700 ease-out`}
        />
      </svg>
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-0.5 ${school.ringSoft}`}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="font-display text-base font-semibold text-navy-700 sm:text-lg">
          {school.total}
        </span>
      </div>
    </div>
  );
}

export function Schools() {
  return (
    <section
      id="schools"
      className="relative overflow-hidden bg-paper py-24 lg:py-32"
    >
      <JaliOverlay tone="light" className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
              Schools
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
              Schools eligible for recruitment.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {GRAND_TOTAL.toLocaleString("en-IN")} total students eligible
              for recruitment this season, across every course in every
              school. Each ring fills relative to SoCSE, the largest.
            </p>
          </div>
          <a
            href={RVU_LINKS.schoolsProgrammes}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-700/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-paper"
          >
            All schools &amp; programmes ↗
          </a>
        </Reveal>

        <PaisleyRow tone="dark" className="mb-10 opacity-50" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOLS.map((school, i) => (
            <Reveal key={school.code} delay={i * 70} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-mist-200 bg-mist-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_24px_48px_-32px_rgba(35,48,57,0.25)] sm:p-7">
                <div className="flex items-start gap-5">
                  <SchoolRing school={school} />
                  <div className="min-w-0 pt-1">
                    <span className="font-display text-sm font-semibold tracking-wide text-navy-700 uppercase">
                      {school.code}
                    </span>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">
                      {school.name}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
                  {school.courses.map((course) => (
                    <div key={course.name} className="flex flex-col gap-1">
                      <div className="flex items-baseline justify-between gap-3 text-xs">
                        <span className="text-ink-soft">{course.name}</span>
                        <span className="shrink-0 font-semibold text-navy-700">
                          {course.students}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist-100">
                        <div
                          className={`h-full rounded-full ${school.bar} transition-all duration-500`}
                          style={{
                            width: `${(course.students / school.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
