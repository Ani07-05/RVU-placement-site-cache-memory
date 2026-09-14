import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { CustomVideoPlayer } from "./CustomVideoPlayer";
import { PetalChakra } from "./IndianMotifs";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-36">
      <PetalChakra
        tone="dark"
        className="animate-chakra-spin pointer-events-none absolute -top-16 -right-20 h-72 w-72 opacity-70 lg:h-[24rem] lg:w-[24rem]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="flex flex-col items-start gap-7 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/12 bg-navy-700/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-700 uppercase">
              Career Development &amp; Corporate Relations
            </span>

            <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-navy-700 sm:text-6xl lg:text-[3.75rem]">
              Empowering industry innovators with{" "}
              <span className="text-gold-600">top-tier talent.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Access a multidisciplinary talent pool of{" "}
              <strong className="font-semibold text-navy-700">
                1,608 industry-ready students
              </strong>{" "}
              trained in technology, design, business, filmmaking, psychology
              and law — recruited directly through the Career Development
              &amp; Corporate Relations office.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={RVU_LINKS.recruitForm}
                {...EXTERNAL_LINK_PROPS}
                className="w-fit rounded-full bg-navy-700 px-7 py-3.5 text-center text-sm font-semibold text-paper shadow-lg shadow-navy-700/15 transition-transform hover:scale-[1.02] hover:bg-navy-600"
              >
                Recruit Now ↗
              </a>
              <a
                href="#recruiters"
                className="w-fit rounded-full border border-navy-700/15 px-7 py-3.5 text-center text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700/[0.04]"
              >
                See who&apos;s hiring
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-mist-200/70 bg-navy-700 shadow-[0_40px_80px_-40px_rgba(35,48,57,0.45)]">
            <CustomVideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
