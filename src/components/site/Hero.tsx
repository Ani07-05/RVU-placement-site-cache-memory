import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { CustomVideoPlayer } from "./CustomVideoPlayer";

export function Hero() {
  return (
    <section id="top" className="bg-navy-700 text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="noise-surface noise-surface-dark relative flex flex-col justify-center gap-8 px-6 py-20 lg:px-10 lg:py-28">
          <h1 className="max-w-xl font-display text-5xl leading-[1.03] font-extrabold tracking-tight sm:text-6xl">
            Empowering industry innovators with{" "}
            <span className="text-gold-400">top-tier talent.</span>
          </h1>

          <p className="max-w-lg text-lg text-paper/75">
            Access a multidisciplinary talent pool of{" "}
            <strong className="font-semibold text-paper">
              1,608 industry-ready students
            </strong>{" "}
            trained in cutting-edge technology, design, business,
            filmmaking, psychology and law, recruited by the{" "}
            <span className="text-gold-300">
              Career Development &amp; Corporate Relations
            </span>{" "}
            office.
          </p>

          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="w-fit rounded-full bg-gold-500 px-7 py-3.5 text-center text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Recruit Now ↗
          </a>
        </div>

        <div className="flex items-center border-t border-paper/10 bg-navy-700 p-6 lg:border-t-0 lg:p-10">
          <CustomVideoPlayer />
        </div>
      </div>
    </section>
  );
}
