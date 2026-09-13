"use client";

import { useState } from "react";
import Link from "next/link";
import { EXTERNAL_LINK_PROPS, RVU_LINKS } from "@/lib/links";

const NAV_ITEMS = [
  { label: "Why Recruit", href: "#why-recruit" },
  { label: "Process", href: "#process" },
  { label: "Recruiters", href: "#recruiters" },
  { label: "Schools", href: "#schools" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-200/80 bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/rvu-logo.svg"
            alt="RV University"
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden h-6 w-px bg-mist-200 sm:block" aria-hidden />
          <span className="hidden font-display text-sm font-semibold tracking-wide text-navy-700 uppercase sm:block">
            Placements
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative transition-colors hover:text-navy-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={RVU_LINKS.placements}
            {...EXTERNAL_LINK_PROPS}
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-navy-700 sm:inline"
          >
            Official page ↗
          </a>
          <a
            href={RVU_LINKS.recruitForm}
            {...EXTERNAL_LINK_PROPS}
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm shadow-gold-500/30 transition-transform hover:scale-[1.03] hover:bg-gold-400 sm:inline-flex"
          >
            Recruit Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 text-navy-700 md:hidden"
          >
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-px w-full bg-current transition-transform ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-transform ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-mist-200/80 bg-paper transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium text-ink-soft">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-mist-50 hover:text-navy-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-3">
              <a
                href={RVU_LINKS.recruitForm}
                {...EXTERNAL_LINK_PROPS}
                className="rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
              >
                Recruit Now
              </a>
              <a
                href={RVU_LINKS.placements}
                {...EXTERNAL_LINK_PROPS}
                className="text-center text-sm text-ink-soft"
              >
                Official page ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
