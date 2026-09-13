import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

const SCHOOLS = [
  "School of Liberal Arts and Sciences",
  "School of Design and Innovation",
  "School of Economics and Business",
  "School of Computer Science and Engineering",
  "School of Law",
  "School of Film, Media and Creative Arts",
  "School of Allied and Healthcare Professions",
];

export function Schools() {
  return (
    <section id="schools" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
              Talent by discipline
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
              Schools eligible for recruitment
            </h2>
          </div>
          <a
            href={RVU_LINKS.schoolsProgrammes}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-700/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-paper"
          >
            All schools &amp; programmes ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOOLS.map((school) => (
            <div
              key={school}
              className="rounded-2xl border border-mist-200 bg-mist-50 p-6 text-sm font-medium text-navy-700"
            >
              {school}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
