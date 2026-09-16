import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { RecruiterRegisterForm } from "@/components/site/RecruiterRegisterForm";

export const metadata: Metadata = {
  title: "Recruiter Registration & Job Posting Form | RV University",
  description:
    "Share your hiring requirements with RV University's Career Advancement & Relations (CAR) team.",
};

export default function RecruiterRegisterPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col bg-mist-50 py-8 sm:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-2xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-800 uppercase">
            Recruiter registration
          </span>
          <h1 className="mt-4 font-display text-3xl leading-[1.1] font-semibold tracking-tight text-navy-700 sm:text-4xl">
            RV University Recruiter Registration &amp; Job Posting Form
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Thank you for your interest in recruiting talent from RV
            University. Please complete the form below to share your hiring
            requirements. Our Career Advancement &amp; Relations (CAR) team
            will review your submission and connect with you at the
            earliest.
          </p>

          <div className="mt-8">
            <RecruiterRegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
