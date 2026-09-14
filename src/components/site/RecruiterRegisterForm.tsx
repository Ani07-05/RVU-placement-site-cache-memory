"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const INPUT_CLASS =
  "w-full rounded-xl border border-mist-200 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold-500 focus:outline-none";

const HIRING_TYPES = [
  "Full time",
  "Internship – 6 Months to 1 Year",
  "Summer Internship",
  "Others",
];

export function RecruiterRegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-mist-200 bg-mist-50 px-6 py-10 text-center sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-navy-700">
          Thank you for your interest
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          This is a preview form on an unofficial redesign concept, so
          nothing was actually sent. On the live site, the CAR team would
          review your submission and reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-mist-200 bg-paper px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="flex flex-col gap-6">
        <Field label="Company Name" required>
          <input
            type="text"
            name="companyName"
            required
            className={INPUT_CLASS}
            placeholder="Your answer"
          />
        </Field>

        <Field label="Contact Person" hint="First and last name" required>
          <input
            type="text"
            name="contactPerson"
            required
            className={INPUT_CLASS}
            placeholder="Your answer"
          />
        </Field>

        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            className={INPUT_CLASS}
            placeholder="Your answer"
          />
        </Field>

        <Field label="Mobile" required>
          <input
            type="tel"
            name="mobile"
            required
            className={INPUT_CLASS}
            placeholder="Your answer"
          />
        </Field>

        <Field label="Hiring Type" required>
          <div className="mt-1 flex flex-col gap-3">
            {HIRING_TYPES.map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft"
              >
                <input
                  type="radio"
                  name="hiringType"
                  value={type}
                  required
                  className="h-4 w-4 border-mist-200 text-gold-600 focus:ring-gold-500"
                />
                {type}
              </label>
            ))}
          </div>
        </Field>

        <Field label="Upload JD">
          <p className="mb-2 text-xs text-ink-soft">
            Upload 1 supported file: PDF, document, or presentation. Max 10
            MB.
          </p>
          <input
            type="file"
            name="jd"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            className="block w-full text-sm text-ink-soft file:mr-4 file:rounded-full file:border-0 file:bg-navy-700 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-paper hover:file:bg-navy-600"
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-mist-200 pt-5">
        <button
          type="submit"
          className="rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-navy-700/15 transition-transform hover:scale-[1.02] hover:bg-navy-600"
        >
          Submit
        </button>
        <span className="text-xs text-ink-soft">Never submit passwords</span>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-700">
        {label}
        {required && <span className="ml-0.5 text-gold-600">*</span>}
      </label>
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}
