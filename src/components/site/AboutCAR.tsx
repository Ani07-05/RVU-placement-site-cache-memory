import { getAcademicYear } from "@/lib/academicYear";
import { JaliOverlay, PaisleyRow, VineFlourish } from "./IndianMotifs";
import { Reveal } from "./Reveal";

export function AboutCAR() {
  const ay = getAcademicYear();

  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-700 px-6 py-14 text-center text-paper sm:px-14 sm:py-16">
            <JaliOverlay tone="light" className="opacity-40" />
            <VineFlourish
              tone="light"
              className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 opacity-20 sm:h-64 sm:w-64"
            />
            <VineFlourish
              tone="light"
              className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rotate-180 opacity-20 sm:h-64 sm:w-64"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.14em] text-gold-400 uppercase">
                About CAR
              </span>
              <h2 className="mt-4 font-display text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl">
                Corporate &amp; Alumni Relations, AY {ay.short}.
              </h2>
              <p className="mx-auto mt-6 text-sm leading-relaxed text-paper/75 sm:text-base">
                The Office of Corporate &amp; Alumni Relations (CAR) continued
                to strengthen RV University&apos;s industry engagement
                ecosystem during the academic year {ay.long} by expanding
                campus placements, internships, industry collaborations,
                alumni engagement, and student employability initiatives. The
                department functioned as the University&apos;s primary
                interface between students, industry, alumni, startups,
                Global Capability Centres (GCCs), and academic schools, while
                continuously adapting its practices to evolving recruitment
                trends.
              </p>

              <PaisleyRow
                tone="light"
                className="mx-auto mt-10 max-w-sm opacity-40"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
