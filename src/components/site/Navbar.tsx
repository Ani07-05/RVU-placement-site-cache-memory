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
  return (
    <header className="sticky top-0 z-50 border-b border-mist-200/80 bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-navy-700"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-700 text-sm font-bold text-paper">
            RV
          </span>
          RVU Placements
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-navy-700"
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
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm shadow-gold-500/30 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Recruit Now
          </a>
        </div>
      </nav>
    </header>
  );
}
