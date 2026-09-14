<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes, APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev`, verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: RVU Placements site clone

This repo is a static Next.js site (`output: "export"`) that will clone the UI of https://rvu.edu.in/placements/. Use `pnpm` for all package management (not npm/yarn) and `pnpm build` to produce the static export in `out/`.

## Brand palette (extracted from rvu.edu.in/placements/ live CSS)

| Role | Color |
|---|---|
| Primary dark navy (backgrounds, buttons, headings) | `#233039` |
| Dark navy variants | `#32475d`, `#35383d` |
| Accent gold (buttons, borders, active nav links) | `#d3a957` (canonical), `#d0a863` (darker variant, e.g. borders) |
| Accent gold with opacity | `rgba(208,168,99,0.92)` |
| White (text on dark backgrounds) | `#ffffff` |
| Light background | `#ecf1f5` |
| Border/divider gray | `#d6d6d6` |
| Body text gray | `#333` |
| Overlay/shadow | `rgba(0,0,0,0.16)`, popup overlay `rgba(0,0,0,0.7)` |

**Font:** Montserrat (headings + body), load via `next/font/google`.

When asked to clone/build the placements UI, use this palette and font rather than re-fetching the source site.
