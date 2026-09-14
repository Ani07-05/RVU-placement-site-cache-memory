import { Reveal } from "./Reveal";

const RULES = [
  {
    title: "Placement Governance",
    body: "Corporate & Alumni Relations (CAR) coordinates all placement and internship activity across Schools. Placement-related violations are formally referred to the Student Disciplinary Committee (STDC).",
  },
  {
    title: "Student Eligibility",
    body: "No academic backlogs, minimum 80% attendance in pre-placement training, a signed Placement Registration & Declaration Form, and completion of required experiential components.",
  },
  {
    title: "Pre-Placement Training",
    body: "Mandatory training across domain/technical skills, soft skills, and emotional, behavioural & networking intelligence, with minimum 80% attendance across all components.",
  },
  {
    title: "Student Responsibilities",
    body: "Apply only to roles genuinely willing to join, maintain professional conduct, and honour offers once selected, in line with institutional ethics and industry expectations.",
  },
];

export function PlacementProcess() {
  return (
    <section id="process" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Process
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            Rules &amp; regulations.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {RULES.map((rule, i) => (
            <Reveal key={rule.title} delay={i * 90}>
              <div className="h-full rounded-3xl bg-mist-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_24px_48px_-32px_rgba(35,48,57,0.25)]">
                <h3 className="font-display text-lg font-semibold text-navy-700">
                  {rule.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {rule.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
