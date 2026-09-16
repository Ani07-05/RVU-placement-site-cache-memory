import type { ReactElement } from "react";
import { Reveal } from "./Reveal";
import {
  ChakraBloom,
  DiyaBloom,
  JaliGridBloom,
  LotusBloom,
  OctagramBloom,
  PeacockFeatherBloom,
  StarBloom,
  StepTowerBloom,
} from "./IndianMotifs";

const STATS: {
  value: string;
  label: string;
  tone: "light" | "gold";
  rotate: number;
  motif: (props: {
    tone: "dark" | "light";
    className?: string;
    style?: React.CSSProperties;
  }) => ReactElement;
}[] = [
  { value: "250+", label: "Recruiting organizations", tone: "light", rotate: 8, motif: ChakraBloom },
  { value: "425+", label: "Placement offers made", tone: "light", rotate: -10, motif: PeacockFeatherBloom },
  { value: "₹43.5L", label: "Highest compensation offered", tone: "gold", rotate: 16, motif: StarBloom },
  { value: "₹8L", label: "Average compensation offered", tone: "light", rotate: -14, motif: OctagramBloom },
  { value: "₹4L", label: "Minimum campus compensation", tone: "light", rotate: 10, motif: DiyaBloom },
  { value: "~25%", label: "Students with multiple offers", tone: "light", rotate: -6, motif: JaliGridBloom },
  { value: "20", label: "Offers above ₹20 LPA", tone: "light", rotate: 14, motif: StepTowerBloom },
];

const SCHOOL_BREAKDOWN = [
  { abbr: "SoCSE", students: 737, bg: "bg-gold-300" },
  { abbr: "SoEB", students: 529, bg: "bg-gold-500" },
  { abbr: "SDI", students: 157, bg: "bg-gold-700" },
  { abbr: "SoL", students: 105, bg: "bg-paper/60" },
  { abbr: "SoLAS", students: 59, bg: "bg-paper/35" },
  { abbr: "SoFMCA", students: 4, bg: "bg-paper/20" },
];

const SCHOOL_MAX = Math.max(...SCHOOL_BREAKDOWN.map((s) => s.students));

const SCHOOL_RANKED = SCHOOL_BREAKDOWN.map((school) => ({
  ...school,
  pct: Math.max((school.students / SCHOOL_MAX) * 100, 3),
}));

const toneClasses: Record<string, string> = {
  light: "bg-mist-50 text-navy-700",
  gold: "bg-gold-500 text-navy-950",
};

export function StatsBento() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            By the numbers
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            Numbers that speak for our graduates.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl bg-navy-700 p-5 text-paper transition-transform duration-300 hover:-translate-y-1 sm:p-9">
              <LotusBloom
                tone="light"
                className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rotate-12"
              />
              <div>
                <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  1,608
                </div>
                <div className="mt-3 text-sm text-paper/70 sm:text-base">
                  Students eligible for recruitment this season
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-2.5">
                {SCHOOL_RANKED.map((school) => (
                  <div key={school.abbr} className="flex items-center gap-3">
                    <span className="w-14 shrink-0 text-xs text-paper/60">
                      {school.abbr}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper/10">
                      <div
                        className={`h-full rounded-full ${school.bg}`}
                        style={{ width: `${school.pct}%` }}
                      />
                    </div>
                    <span className="w-9 shrink-0 text-right text-xs font-semibold text-paper">
                      {school.students}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {STATS.map((stat, i) => {
            const Motif = stat.motif;
            return (
              <Reveal key={stat.label} delay={(i + 1) * 60}>
                <div
                  className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
                    toneClasses[stat.tone]
                  }`}
                >
                  <Motif
                    tone="dark"
                    className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 sm:h-28 sm:w-28"
                    style={{ transform: `rotate(${stat.rotate}deg)` }}
                  />
                  <div className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-4 text-xs opacity-75 sm:text-sm">{stat.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
