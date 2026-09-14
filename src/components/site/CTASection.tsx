import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { ArchCresting, RangoliMedallion } from "./IndianMotifs";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-700 px-8 pt-16 pb-10 text-center text-paper sm:px-16 sm:pt-20">
          <RangoliMedallion
            tone="light"
            className="pointer-events-none absolute -top-16 -left-20 h-72 w-72 opacity-60"
          />
          <RangoliMedallion
            tone="light"
            className="pointer-events-none absolute -right-20 -bottom-16 h-72 w-72 opacity-60"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Partner with RV University
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-500 sm:text-base">
              Reach a multidisciplinary, industry-ready talent pool through
              the Career Development and Corporate Relations office.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={RVU_LINKS.recruitForm}
                {...EXTERNAL_LINK_PROPS}
                className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
              >
                Recruit Now ↗
              </a>
              <a
                href={RVU_LINKS.contact}
                {...EXTERNAL_LINK_PROPS}
                className="rounded-full border border-paper/25 bg-paper/5 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-xl transition-colors hover:bg-paper/10"
              >
                Contact Placement Cell ↗
              </a>
            </div>
          </div>

          <div className="relative mt-14 -mb-10 sm:-mb-10">
            <ArchCresting tone="light" className="opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
