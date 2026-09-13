const REASONS = [
  {
    title: "Multidisciplinary talent pool",
    body: "Graduates across engineering, design, business, law, film and psychology — ready to plug into any function.",
  },
  {
    title: "Industry-aligned curriculum",
    body: "Coursework built around current tools and practices, reinforced with hands-on, project-based learning.",
  },
  {
    title: "Dedicated corporate relations team",
    body: "End-to-end hiring support — from job description to offer rollout — coordinated by a single point of contact.",
  },
  {
    title: "Mandatory pre-placement training",
    body: "Every eligible student completes structured training on aptitude, communication and interview readiness.",
  },
  {
    title: "Fortune 500 & global recruiters",
    body: "A recruiter base spanning technology, consulting, BFSI, design and core engineering, including international offers.",
  },
  {
    title: "Robust alumni network",
    body: "Long-standing relationships with recruiters who return year after year to hire the next cohort.",
  },
];

export function WhyRecruit() {
  return (
    <section id="why-recruit" className="bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
            Why partner with us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Why recruit at RV University
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-3xl border border-mist-200 bg-paper p-8 transition-shadow hover:shadow-xl hover:shadow-navy-700/5"
            >
              <span className="font-display text-sm font-semibold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-700">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {reason.body}
              </p>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-gold-400/0 transition-colors group-hover:bg-gold-400/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
