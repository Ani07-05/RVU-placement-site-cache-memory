import Link from "next/link";
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
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Partner with RV University
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gold-300 sm:text-base">
              Reach a multidisciplinary, industry-ready talent pool through
              the Career Development and Corporate Relations office.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={RVU_LINKS.recruiterRegister}
                className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
              >
                Recruit Now
              </Link>
              <a
                href={RVU_LINKS.contact}
                {...EXTERNAL_LINK_PROPS}
                className="rounded-full border border-paper/25 bg-paper/5 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-xl transition-colors hover:bg-paper/10"
              >
                Contact Placement Cell ↗
              </a>
            </div>

            <div className="relative z-10 mt-14 border-t border-paper/15 pt-10">
              <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-gold-500 uppercase">
                Contact Us
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gold-300">
                Corporate &amp; Alumni Relations (CAR) Office, RV University,
                <br />
                5th Floor, D Block,
                <br />
                RV Vidyanikethan Post, 8th Mile,
                <br />
                Mysuru Road, Bengaluru &ndash; 560 059
              </p>
              <p className="mt-3 text-sm">
                <a
                  href="mailto:placements@rvu.edu.in"
                  className="font-semibold text-paper transition-colors hover:text-gold-300"
                >
                  placements@rvu.edu.in
                </a>
              </p>
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
