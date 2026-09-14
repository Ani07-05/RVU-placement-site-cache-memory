import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";
import { Reveal } from "./Reveal";
import {
  CodeBracketsIcon,
  CoinStackIcon,
  GlobeIcon,
  HandshakeIcon,
  RocketIcon,
  TowerIcon,
} from "./RecruiterIcons";

const CATEGORIES = [
  { label: "MNCs", icon: TowerIcon },
  { label: "GCCs", icon: GlobeIcon },
  { label: "Tech", icon: CodeBracketsIcon },
  { label: "Consulting", icon: HandshakeIcon },
  { label: "Financial", icon: CoinStackIcon },
  { label: "Startups", icon: RocketIcon },
];

type Tile =
  | { type: "image"; file: string; name: string }
  | { type: "mark"; name: string };

const RECRUITERS: Tile[] = [
  { type: "image", file: "logo5.png", name: "Grant Thornton" },
  { type: "image", file: "logo3.png", name: "EY" },
  { type: "image", file: "logo-intellicar.png", name: "Intellicar" },
  { type: "mark", name: "Ratch AI" },
  { type: "image", file: "logo4.png", name: "Deloitte" },
  { type: "image", file: "logo6.png", name: "Bank of America" },
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
  { type: "image", file: "logo2.png", name: "Tata Consultancy Services" },
  { type: "image", file: "logo1.png", name: "Infosys" },
  { type: "image", file: "arcticwolf.png", name: "Arctic Wolf" },
  { type: "image", file: "sharechat.jpg", name: "ShareChat" },
  { type: "image", file: "ringcentral.svg", name: "RingCentral" },
  { type: "image", file: "everpure.png", name: "Everpure" },
  { type: "image", file: "kinaxis.svg", name: "Kinaxis" },
  { type: "image", file: "coupa.svg", name: "Coupa" },
  { type: "image", file: "juspay.svg", name: "Juspay" },
  { type: "image", file: "dover.svg", name: "Dover" },
  { type: "image", file: "bakerhughes.svg", name: "Baker Hughes" },
  { type: "image", file: "zs.png", name: "ZS Associates" },
  { type: "image", file: "societegenerale.svg", name: "Societe Generale" },
  { type: "image", file: "msd.svg", name: "MSD Global" },
  { type: "image", file: "docusign.svg", name: "DocuSign" },
];

const HIGHLIGHTS = [
  { value: "250+", label: "Organizations" },
  { value: "₹43.5L", label: "Top offer, Aviatrix" },
  { value: "425+", label: "Offers made" },
];

export function Recruiters() {
  return (
    <section id="recruiters" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-4 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Recruiting partners
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            250+ organizations hire from RV University.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Recruiters this season included{" "}
            <span className="font-semibold text-navy-700">Aviatrix</span>,
            which made two of the season&apos;s top offers: ₹43.5 LPA and
            ₹33 LPA.
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="mx-auto mb-14 flex w-fit flex-wrap items-center justify-center gap-3"
        >
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 rounded-full border border-mist-200 bg-mist-50 px-4 py-2"
            >
              <span className="font-display text-base font-semibold text-navy-700">
                {h.value}
              </span>
              <span className="text-xs text-ink-soft">{h.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={110} className="mb-14">
          <p className="mb-5 text-center text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Recruiter categories
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 divide-x divide-y divide-mist-200 overflow-hidden rounded-3xl border border-mist-200 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
            {CATEGORIES.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-2.5 px-4 py-7 text-center transition-colors duration-300 hover:bg-mist-50"
              >
                <Icon className="h-6 w-6 text-navy-700/55 transition-colors duration-300 group-hover:text-gold-500" />
                <span className="text-sm font-semibold text-navy-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-3xl border border-mist-200">
            <div className="grid grid-cols-2 divide-x divide-y divide-mist-200 sm:grid-cols-3 lg:grid-cols-6">
              {RECRUITERS.map((r) => (
                <div
                  key={r.name}
                  className="flex h-24 items-center justify-center gap-2 bg-paper p-6 transition-colors duration-300 hover:bg-mist-50 sm:h-28"
                >
                  {r.type === "image" ? (
                    <img
                      src={`/logos/${r.file}`}
                      alt={r.name}
                      className="grayscale-logo h-8 w-auto max-w-full object-contain sm:h-9"
                    />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logos/ratch-icon.svg"
                        alt=""
                        aria-hidden
                        className="h-5 w-5"
                      />
                      <span className="font-display text-base font-semibold tracking-tight text-navy-700">
                        Ratch AI
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-navy-700/15 transition-transform hover:scale-[1.02] hover:bg-navy-600"
          >
            Become a recruiting partner ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
