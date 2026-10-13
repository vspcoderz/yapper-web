# PLAN.md — Yapper marketing website

Status: building

## Decisions (confirmed)
- **Immersive** — motion + live product, NOT dark-mode inversion. White base, no dark theme.
- **Landing page only** in v1. Secondary routes deferred — sections are already
  one-file-each so `/pricing`, `/download` etc. drop in later without a refactor.
- **The chat demo is real software, not a static mockup** — full interactive client
  component, working from first click. Runs on local state + seeded data; wiring it
  to a real Yapper API is a later swap (single `lib/` data seam, no UI changes).

## Goal
Immersive, white-based marketing site for **Yapper** (Discord-style chat app).
Brand orange `#fc6a39` from `public/yapper-tile.svg`. No dark mode. Zero new deps.

## Stack (already present, do not change)
Next.js 16 (App Router, `cacheComponents`) · React 19 · TypeScript strict · Tailwind 4
Fonts: Geist Sans + Geist Mono (already wired in `layout.tsx`)

## Design system
| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0b0b0c` | headings, dark bands, icon strokes |
| `--color-ink-soft` | `#5b5b60` | body copy |
| `--color-line` | `#e8e8ea` | 1px borders, dividers |
| `--color-surface` | `#ffffff` | page base |
| `--color-surface-alt` | `#fafaf9` | alternating band fills |
| `--color-brand` | `#fc6a39` | CTA, accents, focus ring |
| `--color-brand-dark` | `#e0551f` | hover/active |
| `--color-brand-wash` | `#fff2ec` | tinted cards, hover fills |

Rules: soft radii (12–24px), 1px hairline borders instead of heavy shadows,
orange used sparingly (CTA + one dark band per page). Display headings get
`tracking-tight` + `text-balance`. All motion is CSS keyframes + a
IntersectionObserver `Reveal` wrapper; respects `prefers-reduced-motion`.

## Routes
| Route | Contents |
|---|---|
| `/` | Everything below, in one scroll |

Deferred to v2 (components already sectioned, just add `app/<route>/page.tsx`):
`/features`, `/pricing`, `/download`, `/login`, `/signup`

## Landing sections (in order)
1. **Nav** — sticky, backdrop-blur, logo, anchors, `Open Yapper` + `Download`
2. **Hero** — headline, sub, CTAs, live chat-window mockup, animated orange aurora
3. **Community strip** — "built for": gaming, study, creators, clubs
4. **Bento feature grid** — channels, voice, threads, search, bots/plugins, E2E
5. **How it works** — 3 steps, numbered
6. **Feature deep-dive** — 2 alternating rows, each with its own mini mock
7. **Stats band** (dark `#0b0b0c` + orange glow) — placeholder numbers, marked
8. **Testimonials** — placeholder quotes, marked as sample copy
9. **Pricing teaser** — 3 cards, link to `/pricing`
10. **FAQ** — accordion, 6–8 items
11. **Final CTA band** — orange
12. **Footer** — 4 link columns, status link, social, copyright

## Files
```
app/layout.tsx              # metadata, fonts, skip-to-content link
app/globals.css             # tokens in @theme, keyframes, reduced-motion
app/page.tsx                # landing — section composition only
app/(marketing)/...         # features, pricing, download, login, signup, demo
app/components/
  nav.tsx  footer.tsx       # client (mobile drawer) / server
  sections/*.tsx            # one file per section, server by default
  chat-mock.tsx             # fake chat UI, static
  demo-shell.tsx            # client, click-only channel switching
  reveal.tsx                # client, IntersectionObserver wrapper
  faq.tsx                   # client, accordion
lib/content.ts              # typed arrays: features, faqs, pricing, quotes
```

## Content honesty
No fabricated testimonials, user counts, or uptime claims presented as real.
Placeholder stats/logos ship behind a `SAMPLE COPY` note in `lib/content.ts`
until you have real numbers.

## Verification
1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`
4. `npm start` → curl every route for 200
5. **Asset/link check** — every `<Image src>`, `<Link href>` and font path
   resolves on disk (stale-manifest 404s have bitten this box before)
6. Manual pass: keyboard tab order, focus rings, 375px + 1440px widths,
   reduced-motion, no console errors

## Open questions (blocking build)
- "inversive" = immersive, or do you want dark-mode-inverting after all?
- Full multi-page site, or landing page only for now?
- Ship `/demo` (interactive chat mock) in v1 or later?
