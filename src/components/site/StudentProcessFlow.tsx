import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Check Eligibility",
    body: "No academic backlogs, minimum 80% attendance in Pre-Placement Training, and a signed Placement Registration & Declaration Form.",
  },
  {
    title: "Pre-Placement Training",
    body: "Mandatory training across technical, soft-skill, and behavioural readiness, with at least 80% attendance across all components.",
  },
  {
    title: "Apply to Roles",
    body: "Browse recruiters on the homepage and apply only to roles you are genuinely willing to join.",
  },
  {
    title: "Interview & Selection",
    body: "Aptitude, technical, and HR rounds run directly by the recruiting organization.",
  },
  {
    title: "Accept & Onboard",
    body: "Honour the offer once selected, in line with institutional ethics and industry expectations.",
  },
];

export function StudentProcessFlow() {
  return (
    <section id="student-process" className="scroll-mt-28 bg-paper pt-4 pb-24 sm:pt-6 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            Your placement journey
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            From eligible to placed, step by step.
          </h2>
        </Reveal>

        {/* Mobile / tablet: vertical timeline */}
        <div className="flex flex-col lg:hidden">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-base font-semibold text-paper">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="w-0.5 flex-1 bg-mist-200" aria-hidden />
                )}
              </div>
              <div className="pb-10">
                <h3 className="font-display text-base font-semibold text-navy-700">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: horizontal flowchart */}
        <div className="relative hidden lg:block">
          <div
            className="pointer-events-none absolute top-6 right-[10%] left-[10%] h-0.5 bg-mist-200"
            aria-hidden
          />
          <div className="relative grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 90}
                className="flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-lg font-semibold text-paper ring-8 ring-paper">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="relative mx-auto mt-16 max-w-3xl">
          <div className="border-t border-dashed border-gold-500/50" aria-hidden />
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-4 font-display text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            Overseen throughout by CAR
          </span>
          <p className="mt-6 text-center text-sm leading-relaxed text-ink-soft">
            Corporate &amp; Alumni Relations coordinates every step above.
            Placement-related violations are formally referred to the Student
            Disciplinary Committee (STDC).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
