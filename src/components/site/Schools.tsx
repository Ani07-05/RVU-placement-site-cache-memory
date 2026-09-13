import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { Reveal } from "./Reveal";

const SCHOOLS = [
  { name: "School of Computer Science & Engineering", students: 737 },
  { name: "School of Economics & Business", students: 529 },
  { name: "School of Design & Innovation", students: 157 },
  { name: "School of Law", students: 105 },
  { name: "School of Liberal Arts & Sciences", students: 59 },
  { name: "School of Film, Media & Creative Arts", students: 4 },
];

export function Schools() {
  return (
    <section id="schools" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-navy-700 sm:text-5xl">
              Schools eligible for recruitment.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              1,608 total students eligible for recruitment this season.
            </p>
          </div>
          <a
            href={RVU_LINKS.schoolsProgrammes}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-700/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-700 hover:text-paper"
          >
            All schools &amp; programmes ↗
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOLS.map((school, i) => (
            <Reveal key={school.name} delay={i * 60}>
              <div className="flex h-full items-baseline justify-between gap-4 border border-dotted border-mist-200 bg-mist-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-paper">
                <span className="text-sm font-medium text-navy-700">
                  {school.name}
                </span>
                <span className="font-display shrink-0 text-lg font-extrabold text-gold-600">
                  {school.students}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
