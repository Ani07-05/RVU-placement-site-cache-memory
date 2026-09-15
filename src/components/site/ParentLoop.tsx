import { JaliOverlay } from "./IndianMotifs";
import {
  CommunicationIcon,
  HeartIcon,
  RefreshLoopIcon,
  TrackIcon,
  TrophyIcon,
} from "./InfoIcons";
import { Reveal } from "./Reveal";

const STAGES = [
  {
    title: "Stay Informed",
    body: "Follow the placement calendar, recruiter announcements, and CAR updates on the official placements page.",
    icon: CommunicationIcon,
  },
  {
    title: "Track Progress",
    body: "Check eligibility status, Pre-Placement Training attendance, and application activity together with your child.",
    icon: TrackIcon,
  },
  {
    title: "Support & Encourage",
    body: "Stay present through aptitude rounds, mock interviews, and offer decisions. The process is built to be steady, not stressful.",
    icon: HeartIcon,
  },
  {
    title: "Celebrate & Continue",
    body: "Celebrate every offer earned. Drives run all year, so the loop continues for students still finding the right fit.",
    icon: TrophyIcon,
  },
];

// A small chevron used as a flow indicator; pointing down by default.
function FlowChevron({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 6l8 12 8-12z" />
    </svg>
  );
}

export function ParentLoop() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <JaliOverlay tone="dark" className="opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
            How to stay involved
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
            A loop you can follow all year.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Placements aren&apos;t a single event, they run in cycles through
            the year. Here&apos;s how to stay in the loop, from top to bottom.
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-lg">
          {/* Bracket connecting the last stage back to the first, showing the cycle repeats */}
          <div
            aria-hidden
            className="absolute top-6 bottom-6 -left-7 hidden w-7 rounded-l-[1.75rem] border-y border-l border-dashed border-gold-500/45 sm:block"
          />
          <span
            aria-hidden
            className="absolute top-6 -left-7 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-gold-600 ring-1 ring-gold-500/40 sm:flex"
          >
            <FlowChevron className="h-3.5 w-3.5 -rotate-90" />
          </span>

          <div className="flex flex-col">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.title} delay={i * 90} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-700 text-paper">
                      <Icon className="h-5 w-5" />
                    </span>
                    {i < STAGES.length - 1 && (
                      <span className="relative w-0.5 flex-1 bg-mist-200">
                        <span className="absolute top-1/2 left-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-gold-500">
                          <FlowChevron className="h-3 w-3" />
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="pt-2 pb-12">
                    <h3 className="font-display text-base font-semibold text-navy-700">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                      {stage.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={STAGES.length * 90}
            className="flex items-center gap-3 pl-0.5 sm:pl-0"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <RefreshLoopIcon className="h-4 w-4" />
            </span>
            <p className="text-xs leading-relaxed font-semibold tracking-[0.06em] text-gold-600 uppercase">
              Cycle repeats each placement season
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
