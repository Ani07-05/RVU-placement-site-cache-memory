import { JaliOverlay, PaisleyRow } from "./IndianMotifs";
import { CommunicationIcon, SupportOfficeIcon } from "./InfoIcons";
import { Reveal } from "./Reveal";
import { BookIcon, ScaleIcon } from "./SchoolIcons";

const PILLARS = [
  {
    title: "Dedicated support office",
    body: "The Corporate & Alumni Relations (CAR) office coordinates every placement and internship activity across Schools, so students never navigate the process alone.",
    icon: SupportOfficeIcon,
  },
  {
    title: "Transparent governance",
    body: "Placement rules are published and enforced consistently, with violations referred to the Student Disciplinary Committee (STDC) for fair resolution.",
    icon: ScaleIcon,
  },
  {
    title: "Structured preparation",
    body: "Mandatory Pre-Placement Training in technical, soft-skill, and behavioural areas ensures every eligible student is genuinely interview-ready.",
    icon: BookIcon,
  },
  {
    title: "Consistent communication",
    body: "Students and families can track the placement calendar, eligibility, and outcomes through the official placements page and the CAR office.",
    icon: CommunicationIcon,
  },
];

const HIGHLIGHTS = [
  { value: "250+", label: "Recruiting organizations" },
  { value: "₹8L", label: "Average compensation offered" },
  { value: "₹4L", label: "Minimum campus compensation" },
  { value: "425+", label: "Placement offers made" },
];

export function ParentTrust() {
  return (
    <section className="relative overflow-hidden bg-mist-50 py-24 lg:py-32">
      <JaliOverlay tone="dark" className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-4 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            Built on trust
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            How we look after your student&apos;s placement journey.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Placements at RV University run on published policy, dedicated
            staff support, and consistent preparation, not chance.
          </p>
        </Reveal>

        <PaisleyRow tone="dark" className="mx-auto mb-12 max-w-sm opacity-40" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="flex h-full gap-5 rounded-3xl bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(35,48,57,0.25)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-700/[0.06] text-navy-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-700">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4 grid grid-cols-2 gap-3 rounded-3xl bg-navy-700 p-8 text-paper sm:grid-cols-4 sm:p-10">
          {HIGHLIGHTS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-navy-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
