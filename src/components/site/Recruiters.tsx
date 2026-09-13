import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { Reveal } from "./Reveal";

type Tile =
  | { type: "image"; file: string; name: string }
  | { type: "mark"; name: string };

const RECRUITERS: Tile[] = [
  { type: "image", file: "logo5.png", name: "Grant Thornton" },
  { type: "image", file: "logo6.png", name: "Bank of America" },
  { type: "image", file: "logo-intellicar.png", name: "Intellicar" },
  { type: "mark", name: "Ratch AI" },
  { type: "image", file: "logo1.png", name: "Infosys" },
  { type: "image", file: "logo2.png", name: "Tata Consultancy Services" },
  { type: "image", file: "logo3.png", name: "EY" },
  { type: "image", file: "logo4.png", name: "Deloitte" },
  { type: "image", file: "logo7.png", name: "Walmart" },
  { type: "image", file: "logo8.png", name: "PwC" },
  { type: "image", file: "logo9.png", name: "Cognizant" },
  { type: "image", file: "logo10.png", name: "Tata Elxsi" },
  { type: "image", file: "logo11.png", name: "Zeta" },
  { type: "image", file: "logo12.png", name: "Fractal" },
  { type: "image", file: "logo13.png", name: "Capillary" },
  { type: "image", file: "logo14.png", name: "JK Tyre" },
  { type: "image", file: "logo15.png", name: "Swiggy" },
  { type: "image", file: "logo16.png", name: "Progress ShareFile" },
];

export function Recruiters() {
  return (
    <section id="recruiters" className="bg-navy-700 text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-paper/10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="relative flex flex-col justify-center gap-7 bg-navy-700 px-6 py-20 lg:px-12 lg:py-28">
          <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            250+ organizations hire from RV University.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-paper/70">
            Recruiters this season included{" "}
            <span className="font-semibold text-gold-300">Aviatrix</span>,
            which made two of the season&apos;s top offers: ₹43.5 LPA and
            ₹33 LPA.
          </p>
          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Become a recruiting partner ↗
          </a>
        </Reveal>

        <div className="bg-paper p-6 lg:p-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {RECRUITERS.map((r, i) => (
              <Reveal key={r.name} delay={i * 40}>
                <div className="flex h-24 items-center justify-center gap-2 border border-dotted border-mist-200 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lg hover:shadow-navy-700/5">
                  {r.type === "image" ? (
                    <img
                      src={`/logos/${r.file}`}
                      alt={r.name}
                      className="h-9 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logos/ratch-icon.svg"
                        alt=""
                        aria-hidden
                        className="h-6 w-6"
                      />
                      <span className="font-display text-lg font-extrabold tracking-tight text-navy-700">
                        Ratch AI
                      </span>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
