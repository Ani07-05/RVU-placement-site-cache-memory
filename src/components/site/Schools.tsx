import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { JaliOverlay, PaisleyRow } from "./IndianMotifs";
import { Reveal } from "./Reveal";

const SEGMENT_TONES = [
  "bg-gold-600",
  "bg-navy-700",
  "bg-gold-300",
  "bg-navy-500",
  "bg-gold-500",
];

const SCHOOLS = [
  {
    code: "SoCSE",
    name: "School of Computer Science & Engineering",
    total: 737,
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
    courses: [
      { name: "B.Des (Hons.)", students: 123 },
      { name: "M.Des", students: 34 },
    ],
  },
  {
    code: "SoL",
    name: "School of Law",
    total: 105,
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
    courses: [{ name: "B.Sc (Hons.) – Filmmaking", students: 4 }],
  },
];

const MAX_TOTAL = Math.max(...SCHOOLS.map((s) => s.total));

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
              1,608 total students eligible for recruitment this season,
              across every course in every school. Bar length shows each
              school&apos;s size relative to SoCSE, the largest; each
              segment is one course.
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

        <div className="space-y-8">
          {SCHOOLS.map((school, i) => (
            <Reveal key={school.code} delay={i * 70}>
              <div className="group">
                <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-sm font-semibold tracking-wide text-navy-700 uppercase">
                      {school.code}
                    </span>
                    <span className="text-sm text-ink-soft">
                      {school.name}
                    </span>
                  </div>
                  <span className="font-display text-lg font-semibold text-gold-600">
                    {school.total}
                  </span>
                </div>

                <div
                  className="flex h-9 w-full gap-[2px] overflow-hidden rounded-lg bg-mist-100 transition-all duration-500"
                  style={{ width: `${(school.total / MAX_TOTAL) * 100}%` }}
                >
                  {school.courses.map((course, ci) => (
                    <div
                      key={course.name}
                      title={`${course.name} — ${course.students} students`}
                      className={`h-full ${
                        SEGMENT_TONES[ci % SEGMENT_TONES.length]
                      } transition-opacity duration-300 hover:opacity-80`}
                      style={{
                        width: `${(course.students / school.total) * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                  {school.courses.map((course, ci) => (
                    <span
                      key={course.name}
                      className="flex items-center gap-1.5 text-xs text-ink-soft"
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-[2px] ${
                          SEGMENT_TONES[ci % SEGMENT_TONES.length]
                        }`}
                      />
                      {course.name}
                      <span className="font-semibold text-navy-700">
                        {course.students}
                      </span>
                    </span>
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
