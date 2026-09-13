import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { GeometricBackground } from "./GeometricBackground";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-4xl bg-navy-700 px-8 py-16 text-center text-paper sm:px-16">
          <GeometricBackground variant="dark" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
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
        </div>
      </div>
    </section>
  );
}
