import { Reveal } from "./Reveal";

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
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-navy-700 sm:text-5xl">
            Where the offers land.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
            425+ offers made this placement season, topped by Aviatrix&apos;s
            ₹43.5 LPA offer, against a minimum campus compensation of ₹4 LPA.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6 border border-dotted border-mist-200 bg-paper p-8">
          {BRACKETS.map((bracket) => (
            <div key={bracket.range} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between text-sm font-medium text-navy-700">
                <span>{bracket.range}</span>
                <span className="font-display text-lg font-extrabold text-gold-600">
                  {bracket.count}
                  <span className="ml-1 text-xs font-normal text-ink-soft">
                    offers
                  </span>
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden bg-mist-100">
                <div
                  className="h-full bg-gold-500"
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
