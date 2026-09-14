import { getAcademicYear } from "@/lib/academicYear";
import { PaisleyRow, VineFlourish } from "./IndianMotifs";
import { Reveal } from "./Reveal";

export function AboutCAR() {
  const ay = getAcademicYear();

  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 text-paper lg:py-28">
      <VineFlourish
        tone="light"
        className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 opacity-25 sm:h-80 sm:w-80"
      />
      <VineFlourish
        tone="light"
        className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rotate-180 opacity-25 sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-400 uppercase">
            About CAR
          </span>
          <h2 className="mt-4 font-display text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl">
            Corporate &amp; Alumni Relations, AY {ay.short}.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-paper/75 sm:text-base">
            The Office of Corporate &amp; Alumni Relations (CAR) continued to
            strengthen RV University&apos;s industry engagement ecosystem
            during the academic year {ay.long} by expanding campus
            placements, internships, industry collaborations, alumni
            engagement, and student employability initiatives. The
            department functioned as the University&apos;s primary interface
            between students, industry, alumni, startups, Global Capability
            Centres (GCCs), and academic schools, while continuously
            adapting its practices to evolving recruitment trends.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <PaisleyRow tone="light" className="mx-auto mt-10 max-w-sm opacity-40" />
        </Reveal>
      </div>
    </section>
  );
}
