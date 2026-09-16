import type { Metadata } from "next";
import { FAQSection } from "@/components/site/FAQSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { ParentLoop } from "@/components/site/ParentLoop";
import { ParentTrust } from "@/components/site/ParentTrust";
import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Parents | RV University Placements",
  description:
    "Clear, honest insight into RV University's placement ecosystem, policies, and support systems for parents.",
};

const PARENT_FAQS = [
  {
    q: "Who oversees the placement process?",
    a: "The Corporate & Alumni Relations (CAR) office coordinates all placement and internship activity across Schools, with rule enforcement referred to the Student Disciplinary Committee (STDC) where needed.",
  },
  {
    q: "What support is in place if my child isn't placed right away?",
    a: "Placement drives run throughout the year, not just once. Students keep access to Pre-Placement Training, mock interviews, and resume support until they're placed.",
  },
  {
    q: "How is the university preparing students beyond academics?",
    a: "Every eligible student completes mandatory Pre-Placement Training covering technical, soft-skill, and behavioural readiness, in addition to internships and industry-integrated coursework.",
  },
  {
    q: "Can a student accept and then back out of an offer?",
    a: "No. Students are expected to apply only to roles they're genuinely willing to join and to honour offers once selected; this is core to maintaining recruiter trust in the program.",
  },
  {
    q: "How can I stay informed or reach the placement office?",
    a: "The Recruiters and Numbers sections on the homepage are updated each season, and the CAR office can be reached directly at placements@rvu.edu.in.",
  },
  {
    q: "What role do the individual Schools play in this process?",
    a: "CAR acts as the University's primary interface across every School, coordinating recruitment, internships, industry collaborations, and alumni engagement together with each School's faculty.",
  },
  {
    q: "Does the university support internships alongside full-time placements?",
    a: "Yes. Internships are coordinated by CAR as part of industry-integrated coursework, alongside full-time placement drives, so students build workplace experience throughout their programme.",
  },
];

export default function ParentsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="flex min-h-[calc(100svh-6rem)] flex-col justify-center bg-paper py-16 sm:min-h-[calc(100svh-7rem)]">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
              For parents
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
              Clarity on RV University&apos;s placement ecosystem.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              A straightforward look at how placements are governed,
              supported, and communicated, so you can follow your child&apos;s
              journey with confidence.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:placements@rvu.edu.in"
                className="rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-navy-600"
              >
                Contact CAR office
              </a>
              <a
                href={RVU_LINKS.placements}
                {...EXTERNAL_LINK_PROPS}
                className="rounded-full border border-mist-200 px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:bg-mist-50"
              >
                Official placements page ↗
              </a>
            </div>
          </div>
        </section>

        <ParentLoop />

        <ParentTrust />

        <FAQSection
          eyebrow="Questions, answered"
          heading="Frequently asked by parents."
          items={PARENT_FAQS}
        />
      </main>
      <Footer />
    </div>
  );
}
