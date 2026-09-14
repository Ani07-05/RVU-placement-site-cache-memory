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
  color: string;
  ringSoft: string;
  courses: { name: string; students: number }[];
}[] = [
  {
    code: "SoCSE",
    name: "School of Computer Science & Engineering",
    total: 737,
    icon: ChipIcon,
    color: "#d3a957",
    ringSoft: "text-gold-500",
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
    color: "#32475d",
    ringSoft: "text-navy-600",
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
    color: "#b3894a",
    ringSoft: "text-gold-700",
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
    color: "#45596b",
    ringSoft: "text-navy-500",
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
    color: "#d0a863",
    ringSoft: "text-gold-600",
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
    color: "#1c2731",
    ringSoft: "text-navy-800",
    courses: [{ name: "B.Sc (Hons.) – Filmmaking", students: 4 }],
  },
];

const GRAND_TOTAL = SCHOOLS.reduce((sum, s) => sum + s.total, 0);

const RING_R = 42;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_R;
const SEGMENT_OPACITY = [1, 0.72, 0.52, 0.36, 0.24];
const SEGMENT_GAP = 0.006; // fraction of the circle left as a seam between courses

function SchoolRing({
  school,
}: {
  school: (typeof SCHOOLS)[number];
}) {
  const Icon = school.icon;
  const gapCount = school.courses.length > 1 ? school.courses.length : 0;
  const usableFraction = 1 - gapCount * SEGMENT_GAP;

  let cumulative = 0;
  const segments = school.courses.map((course) => {
    const frac = (course.students / school.total) * usableFraction;
    const seg = { course, frac, start: cumulative };
    cumulative += frac + SEGMENT_GAP;
    return seg;
  });

  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        {segments.map((seg, i) => (
          <circle
            key={seg.course.name}
            cx="50"
            cy="50"
            r={RING_R}
            fill="none"
            stroke={school.color}
            strokeOpacity={SEGMENT_OPACITY[i % SEGMENT_OPACITY.length]}
            strokeWidth="8"
            strokeDasharray={`${seg.frac * RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`}
            strokeDashoffset={-seg.start * RING_CIRCUMFERENCE}
            className="transition-[stroke-dasharray] duration-700 ease-out"
          />
        ))}
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
              school. Each ring is a full breakdown of that school&apos;s
              courses — segments always add up to its total.
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
                  {school.courses.map((course, ci) => (
                    <div
                      key={course.name}
                      className="flex items-baseline justify-between gap-3 text-xs"
                    >
                      <span className="flex min-w-0 items-baseline gap-2 text-ink-soft">
                        <span
                          className="h-2 w-2 shrink-0 translate-y-[1px] rounded-full"
                          style={{
                            backgroundColor: school.color,
                            opacity: SEGMENT_OPACITY[ci % SEGMENT_OPACITY.length],
                          }}
                        />
                        <span className="truncate">{course.name}</span>
                      </span>
                      <span className="shrink-0 font-semibold text-navy-700">
                        {course.students}
                      </span>
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
