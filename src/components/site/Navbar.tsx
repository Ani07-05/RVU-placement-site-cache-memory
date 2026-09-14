"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const homeAnchor = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 lg:pt-6">
      <nav
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-mist-200/80 bg-paper/85 shadow-[0_1px_0_rgba(35,48,57,0.04),0_16px_40px_-24px_rgba(35,48,57,0.35)]"
            : "border-transparent bg-paper/40"
        }`}
      >
        <Link
          href={homeAnchor("#top")}
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/rvu-logo.svg"
            alt="RV University"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden h-5 w-px bg-mist-200 sm:block" aria-hidden />
          <span className="hidden font-display text-xs font-semibold tracking-[0.14em] text-navy-700 uppercase sm:block">
            Placements
          </span>
        </Link>

        <ul className="hidden items-center gap-1 text-[13px] font-medium text-ink-soft md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={homeAnchor(item.href)}
                className="rounded-full px-3.5 py-2 transition-colors hover:bg-navy-700/[0.05] hover:text-navy-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={RVU_LINKS.placements}
            {...EXTERNAL_LINK_PROPS}
            className="hidden text-[13px] font-medium text-ink-soft transition-colors hover:text-navy-700 lg:inline"
          >
            Official page ↗
          </a>
          <Link
            href={RVU_LINKS.recruiterRegister}
            className="hidden rounded-full bg-navy-700 px-5 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:bg-navy-600 sm:inline-flex"
          >
            Recruit Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mist-200 text-navy-700 md:hidden"
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
        className={`pointer-events-auto absolute top-full right-4 left-4 mt-2 grid overflow-hidden rounded-3xl border border-mist-200/80 bg-paper/95 shadow-lg backdrop-blur-2xl transition-[grid-template-rows] duration-300 sm:right-6 sm:left-6 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-ink-soft">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={homeAnchor(item.href)}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-mist-50 hover:text-navy-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-2 pb-1">
              <Link
                href={RVU_LINKS.recruiterRegister}
                onClick={() => setOpen(false)}
                className="rounded-full bg-navy-700 px-5 py-2.5 text-center text-sm font-semibold text-paper"
              >
                Recruit Now
              </Link>
              <a
                href={RVU_LINKS.placements}
                {...EXTERNAL_LINK_PROPS}
                className="py-1 text-center text-sm text-ink-soft"
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
