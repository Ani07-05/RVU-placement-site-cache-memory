import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

const CATEGORIES = [
  "Technology",
  "Consulting",
  "BFSI",
  "Design & Media",
  "Core Engineering",
  "Startups",
  "Government & Public Sector",
  "Fortune 500",
];

export function Recruiters() {
  return (
    <section id="recruiters" className="relative overflow-hidden bg-navy-700 py-20 text-paper lg:py-28">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-gold-300 uppercase">
            Recruiters
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            250+ organizations hire from RV University
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-500 sm:text-base">
            Recruiters this season have included{" "}
            <span className="font-semibold text-gold-300">Aviatrix</span>,
            which made the season&apos;s highest offer of ₹43.5 LPA, across
            the categories below.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full border border-paper/15 bg-paper/8 px-5 py-2.5 text-sm font-medium backdrop-blur-xl"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Become a recruiting partner ↗
          </a>
        </div>
      </div>
    </section>
  );
}
