import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { GeometricBackground } from "./GeometricBackground";

const FLOATING_STATS = [
  { value: "₹43.5L", label: "Highest CTC" },
  { value: "250+", label: "Recruiters" },
  { value: "~25%", label: "Multiple offers" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-700 pt-20 pb-28 text-paper md:pt-28"
    >
      <GeometricBackground variant="dark" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 text-center lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-paper/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-300 uppercase">
          Career Development &amp; Corporate Relations
        </span>

        <h1 className="max-w-4xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Empowering Industry Innovators with{" "}
          <span className="text-gold-400">Top-Tier Talent</span>
        </h1>

        <p className="max-w-2xl text-lg text-navy-500 lg:text-xl">
          Access a multidisciplinary talent pool of{" "}
          <strong className="font-semibold text-paper">
            1,600+ industry-ready graduates
          </strong>{" "}
          trained in cutting-edge technology, design, business, filmmaking,
          psychology and law.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Recruit Now ↗
          </a>
          <a
            href={RVU_LINKS.placements}
            {...EXTERNAL_LINK_PROPS}
            className="rounded-full border border-paper/25 bg-paper/5 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-xl transition-colors hover:bg-paper/10"
          >
            Visit Official Placements Page ↗
          </a>
        </div>

        <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {FLOATING_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-paper/15 bg-paper/8 p-5 backdrop-blur-xl"
            >
              <div className="font-display text-2xl font-semibold text-gold-300">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-navy-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
