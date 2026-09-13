const BRACKETS = [
  { range: "₹20L – ₹33L", count: 20, max: 20 },
  { range: "₹10L – ₹20L", count: 45, max: 20 },
  { range: "Below ₹10L", count: 85, max: 20 },
];

const MAX_COUNT = 90;

export function SalaryDistribution() {
  return (
    <section className="bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
            Compensation
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Salary distribution by offer
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            An illustrative spread of offers made this placement season,
            topped by a highest package of ₹43.5 LPA and a minimum campus
            compensation of ₹4 LPA.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-mist-200 bg-paper p-8">
          {BRACKETS.map((bracket) => (
            <div key={bracket.range} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between text-sm font-medium text-navy-700">
                <span>{bracket.range}</span>
                <span className="font-display text-lg font-semibold text-gold-600">
                  {bracket.count}
                  <span className="ml-1 text-xs font-normal text-ink-soft">
                    offers
                  </span>
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-mist-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400"
                  style={{ width: `${(bracket.count / MAX_COUNT) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
