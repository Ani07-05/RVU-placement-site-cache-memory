import { Reveal } from "./Reveal";

const BRACKETS = [
  { range: "₹20L – ₹33L", count: 20, max: 20 },
  { range: "₹10L – ₹20L", count: 45, max: 20 },
  { range: "Below ₹10L", count: 85, max: 20 },
];

const MAX_COUNT = 90;

export function SalaryDistribution() {
  return (
    <section className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Salary distribution by offer
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            Where the offers land.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
            425+ offers made this placement season, topped by Aviatrix&apos;s
            ₹43.5 LPA offer, against a minimum campus compensation of ₹4 LPA.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-7 rounded-3xl bg-paper p-8 sm:p-10">
          {BRACKETS.map((bracket) => (
            <div key={bracket.range} className="flex flex-col gap-2.5">
              <div className="flex items-baseline justify-between text-sm font-medium text-navy-700">
                <span>{bracket.range}</span>
                <span className="font-display text-lg font-semibold text-gold-600">
                  {bracket.count}
                  <span className="ml-1 text-xs font-normal text-ink-soft">
                    offers
                  </span>
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-mist-100">
                <div
                  className="h-full rounded-full bg-gold-500"
                  style={{ width: `${(bracket.count / MAX_COUNT) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
