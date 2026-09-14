import type { Metadata } from "next";
import { FAQSection } from "@/components/site/FAQSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { StudentPrepResources } from "@/components/site/StudentPrepResources";
import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Students | RV University Placements",
  description:
    "Eligibility, preparation resources, and answers to common placement questions for RV University students.",
};

const STUDENT_FAQS = [
  {
    q: "Who is eligible to register for placements?",
    a: "Students with no academic backlogs, at least 80% attendance in Pre-Placement Training, and a signed Placement Registration & Declaration Form are eligible. Full details are in the Placement Process section on the homepage.",
  },
  {
    q: "Can I apply to more than one company?",
    a: "Yes, but you should only apply to roles you are genuinely willing to join. Once you accept an offer, you're expected to honour it in line with institutional ethics and industry expectations.",
  },
  {
    q: "What if I don't get placed in the first few drives?",
    a: "The placement season runs across multiple drives through the year, and CAR continues to bring recruiters to campus. Ongoing prep support (mock interviews, resume clinics, and PPT) stays available throughout.",
  },
  {
    q: "Where can I see which companies are hiring right now?",
    a: "The Recruiters section on the homepage lists organizations actively hiring from RV University this season.",
  },
  {
    q: "Who do I contact with placement questions?",
    a: "Reach the Corporate & Alumni Relations (CAR) office at placements@rvu.edu.in for anything specific to your registration or eligibility.",
  },
];

export default function StudentsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="bg-paper pt-16 pb-8 sm:pt-24 sm:pb-12">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
              For students
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-navy-700 sm:text-5xl">
              Everything you need for placements, in one place.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              Eligibility, preparation, recruiters, and process: the same
              information the CAR office shares with every eligible student,
              gathered here so you don&apos;t have to chase it down.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#process"
                className="rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-navy-600"
              >
                View placement process
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

        <StudentPrepResources />

        <FAQSection
          eyebrow="Questions, answered"
          heading="Frequently asked by students."
          items={STUDENT_FAQS}
        />
      </main>
      <Footer />
    </div>
  );
}
