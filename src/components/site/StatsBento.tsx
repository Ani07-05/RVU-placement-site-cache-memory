import { Reveal } from "./Reveal";

const STATS: {
  value: string;
  label: string;
  tone: "light" | "gold";
}[] = [
  { value: "250+", label: "Recruiting organizations", tone: "light" },
  { value: "425+", label: "Placement offers made", tone: "light" },
  { value: "₹43.5L", label: "Highest compensation offered", tone: "gold" },
  { value: "₹8L", label: "Average compensation offered", tone: "light" },
  { value: "₹4L", label: "Minimum campus compensation", tone: "light" },
  { value: "~25%", label: "Students with multiple offers", tone: "light" },
  { value: "20", label: "Offers above ₹20 LPA", tone: "light" },
];

const SCHOOL_BREAKDOWN = [
  { abbr: "SoCSE", students: 737, color: "text-gold-300" },
  { abbr: "SoEB", students: 529, color: "text-gold-500" },
  { abbr: "SDI", students: 157, color: "text-gold-700" },
  { abbr: "SoL", students: 105, color: "text-paper/60" },
  { abbr: "SoLAS", students: 59, color: "text-paper/35" },
  { abbr: "SoFMCA", students: 4, color: "text-paper/20" },
];

const SCHOOL_TOTAL = SCHOOL_BREAKDOWN.reduce((sum, s) => sum + s.students, 0);

let cumulative = 0;
const DONUT_SEGMENTS = SCHOOL_BREAKDOWN.map((school) => {
  const pct = (school.students / SCHOOL_TOTAL) * 100;
  const offset = cumulative;
  cumulative += pct;
  return { ...school, pct, offset };
});

const toneClasses: Record<string, string> = {
  light: "bg-mist-50 text-navy-700",
  gold: "bg-gold-500 text-navy-950",
};

export function StatsBento() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            By the numbers
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            Numbers that speak for our graduates.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-navy-700 p-7 text-paper transition-transform duration-300 hover:-translate-y-1 sm:p-9">
              <div>
                <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  1,608
                </div>
                <div className="mt-3 text-sm text-paper/70 sm:text-base">
                  Students eligible for recruitment this season
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-6 sm:flex-row sm:items-center">
                <svg
                  viewBox="0 0 36 36"
                  className="h-28 w-28 shrink-0 -rotate-90"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    className="text-paper/10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  {DONUT_SEGMENTS.map((school) => (
                    <circle
                      key={school.abbr}
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      className={school.color}
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="butt"
                      pathLength={100}
                      strokeDasharray={`${school.pct} ${100 - school.pct}`}
                      strokeDashoffset={-school.offset}
                    />
                  ))}
                </svg>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {SCHOOL_BREAKDOWN.map((school) => (
                    <div key={school.abbr} className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${school.color}`}
                        aria-hidden
                      />
                      <span className="text-xs text-paper/60">
                        {school.abbr}
                      </span>
                      <span className="text-xs font-semibold text-paper">
                        {school.students}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={(i + 1) * 60}>
              <div
                className={`flex h-full flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
                  toneClasses[stat.tone]
                }`}
              >
                <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-4 text-sm opacity-75">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
