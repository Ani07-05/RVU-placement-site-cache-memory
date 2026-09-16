import { Reveal } from "./Reveal";

type FAQItem = { q: string; a: string };

type FAQSectionProps = {
  eyebrow: string;
  heading: string;
  items: FAQItem[];
};

export function FAQSection({ eyebrow, heading, items }: FAQSectionProps) {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group rounded-2xl bg-mist-50 open:bg-mist-50 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-navy-700">
                  {item.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4 shrink-0 text-gold-800 transition-transform duration-300 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
