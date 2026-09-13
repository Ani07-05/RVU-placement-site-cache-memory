const STEPS = [
  {
    title: "Registration & eligibility check",
    body: "Students register with the placement cell and are verified against academic and attendance eligibility criteria.",
  },
  {
    title: "Pre-placement training",
    body: "Mandatory training on aptitude, group discussions, resume building and interview skills.",
  },
  {
    title: "Company presentation & shortlisting",
    body: "Recruiters present their role and shortlist candidates via resume screening or an initial test.",
  },
  {
    title: "Assessments & interviews",
    body: "Technical/aptitude assessments followed by one or more rounds of interviews, as defined by the recruiter.",
  },
  {
    title: "Offer rollout & onboarding",
    body: "Selected students receive offers through the placement cell, with onboarding support until joining.",
  },
];

export function PlacementProcess() {
  return (
    <section id="process" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Placement process
          </h2>
        </div>

        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-mist-200 md:block"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 font-display text-lg font-semibold text-gold-400">
                {i + 1}
              </div>
              <h3 className="font-display text-base font-semibold text-navy-700">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
