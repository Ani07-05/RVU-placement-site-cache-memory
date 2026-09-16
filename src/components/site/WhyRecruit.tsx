import { Reveal } from "./Reveal";

const REASONS = [
  {
    title: "Industry-Ready Talent",
    body: "Hire students equipped with strong academic foundations and practical, industry-relevant skills.",
    icon: (
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Diverse Talent Pool",
    body: "Recruit from multidisciplinary programs including Engineering, Business, Design, Economics, Media, and Liberal Arts.",
    icon: <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />,
  },
  {
    title: "Industry-Integrated Learning",
    body: "Students gain hands-on experience through internships, live projects, capstones, and experiential learning.",
    icon: (
      <>
        <path
          d="M4 19.5V6a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2Z"
          strokeLinejoin="round"
        />
        <path d="M8 8h9M8 12h9" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Future-Focused Curriculum",
    body: "Graduates are prepared with digital, analytical, entrepreneurial, and leadership capabilities for evolving workplaces.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Seamless Recruitment Support",
    body: "Our Corporate & Alumni Relations (CAR) team ensures a smooth and efficient hiring process from start to finish.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
        <path
          d="M16 4.5c1.7.4 3 2 3 3.9 0 1.9-1.3 3.5-3 3.9"
          strokeLinecap="round"
        />
        <path d="M22 20c0-2.8-2.2-5.1-5-5.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Strong Academic Excellence",
    body: "Backed by the legacy of the RV Group, the university nurtures high-performing, ethical, and responsible professionals.",
    icon: (
      <>
        <rect x="3" y="9" width="18" height="11" rx="2" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" strokeLinecap="round" />
      </>
    ),
  },
];

export function WhyRecruit() {
  return (
    <section id="why-recruit" className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
              Why RVU
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
              Why recruit at RV University.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Six reasons recruiting partners keep coming back, from the
              talent pool itself to the team that supports every hire.
            </p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="group relative grid grid-cols-1 gap-4 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[3rem_1fr] sm:gap-8 sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-700/[0.05] text-navy-700 transition-colors duration-300 group-hover:bg-gold-500/15 group-hover:text-gold-800">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                    >
                      {reason.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-navy-700">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {reason.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
