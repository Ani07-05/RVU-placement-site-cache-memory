import { Reveal } from "./Reveal";

const PILLARS = [
  {
    title: "Dedicated support office",
    body: "The Corporate & Alumni Relations (CAR) office coordinates every placement and internship activity across Schools, so students never navigate the process alone.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
        <path d="M16 4.5c1.7.4 3 2 3 3.9 0 1.9-1.3 3.5-3 3.9" strokeLinecap="round" />
        <path d="M22 20c0-2.8-2.2-5.1-5-5.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Transparent governance",
    body: "Placement rules are published and enforced consistently, with violations referred to the Student Disciplinary Committee (STDC) for fair resolution.",
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Structured preparation",
    body: "Mandatory Pre-Placement Training in technical, soft-skill, and behavioural areas ensures every eligible student is genuinely interview-ready.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Consistent communication",
    body: "Students and families can track the placement calendar, eligibility, and outcomes through the official placements page and the CAR office.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const HIGHLIGHTS = [
  { value: "250+", label: "Recruiting organizations" },
  { value: "₹8L", label: "Average compensation offered" },
  { value: "₹4L", label: "Minimum campus compensation" },
  { value: "425+", label: "Placement offers made" },
];

export function ParentTrust() {
  return (
    <section className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Built on trust
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            How we look after your student&apos;s placement journey.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Placements at RV University run on published policy, dedicated
            staff support, and consistent preparation, not chance.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="flex h-full gap-5 rounded-3xl bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(35,48,57,0.25)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-700/[0.05] text-navy-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    {pillar.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-700">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 grid grid-cols-2 gap-3 rounded-3xl bg-navy-700 p-8 text-paper sm:grid-cols-4 sm:p-10">
          {HIGHLIGHTS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-navy-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
